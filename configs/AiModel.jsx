import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

/* -----------------------------
   1️⃣ Logo design ideas
------------------------------ */
export const AIDesignIdea = {
  async sendMessage(prompt) {
    const response = await openai.chat.completions.create({
      model: "openai/gpt-4o-mini",
      temperature: 1,
      messages: [
        {
          role: "system",
          content:
            "You are a logo design assistant. Always respond ONLY in valid JSON.",
        },
        {
          role: "user",
          content: `
Based on Modern Mascot Logos.
Generate logo design ideas in JSON format like this:

{
  "ideas": ["idea 1", "idea 2"]
}

User prompt: ${prompt}
          `,
        },
      ],
    });

    return {
      response: {
        text: () => response.choices[0].message.content,
      },
    };
  },
};

/* -----------------------------
   2️⃣ Logo prompt generator
------------------------------ */
export const AILogoPrompt = {
  async sendMessage() {
    const response = await openai.chat.completions.create({
      model: "openai/gpt-4o-mini",
      temperature: 0.9,
      messages: [
        {
          role: "system",
          content:
            "You generate detailed text prompts for logo generation. Respond ONLY in valid JSON.",
        },
        {
          role: "user",
          content:
            "Generate a text prompt to create a modern mascot logo for LogoForge AI.",
        },
      ],
    });

    return {
      response: {
        text: () => response.choices[0].message.content,
      },
    };
  },
};
