import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

export const AIDesignIdea = {
  async sendMessage(prompt) {
    const response = await openai.chat.completions.create({
      model: "openai/gpt-4o-mini", // fast & stable
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
Based on Logo of type Modern Mascot Logos.
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
