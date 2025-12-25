import { AILogoPrompt } from "@/configs/AiModel";
import { db } from "@/configs/FirebaseConfig";
import axios from "axios";
import { doc, setDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { prompt, email, title, desc } = await req.json();

    // 1️⃣ Generate AI text prompt
    const aiResult = await AILogoPrompt.sendMessage(prompt);

    const cleanText = aiResult.response
      .text()
      .replace(/```json/gi, "")
      .replace(/```/g, "")
      .trim();

    const AIPrompt = JSON.parse(cleanText).prompt;

    // 2️⃣ Generate image from Hugging Face (STRING ONLY)
    const response = await axios.post(
      "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
      {
        inputs: AIPrompt, // ✅ must be string
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.HUGGING_FACE_API_KEY}`,
          "Content-Type": "application/json",
        },
        responseType: "arraybuffer",
        timeout: 120000,
      }
    );

    // 3️⃣ Convert image → Base64
    const base64Image = Buffer.from(response.data).toString("base64");
    const image = `data:image/png;base64,${base64Image}`;

    // 4️⃣ Save to Firebase
    await setDoc(
      doc(db, "users", email, "logos", Date.now().toString()),
      {
        image,
        title,
        desc,
        createdAt: Date.now(),
      }
    );

    return NextResponse.json({ image });

  } catch (error) {
    console.error("AI LOGO ERROR 👉", error?.response?.data || error);

    return NextResponse.json(
      {
        error:
          error?.response?.status === 410
            ? "Hugging Face free model unavailable"
            : "Logo generation failed",
      },
      { status: 500 }
    );
  }
}
