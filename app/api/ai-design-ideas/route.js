import { NextResponse } from "next/server";
const { AIDesignIdea } = require("@/configs/AiModel");

export async function POST(req) {
  try {
    const { prompt } = await req.json();

    const result = await AIDesignIdea.sendMessage(prompt);
    let text = result.response.text();

    // 🔥 CLEAN MARKDOWN (still safe)
    text = text
      .replace(/```json/gi, "")
      .replace(/```/g, "")
      .trim();

    const parsed = JSON.parse(text);

    return NextResponse.json({
      ideas: Array.isArray(parsed.ideas) ? parsed.ideas : [],
    });

  } catch (error) {
    console.error("AI ERROR 👉", error);

    return NextResponse.json(
      { ideas: [] },
      { status: 200 } // don't break UI
    );
  }
}
