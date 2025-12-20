const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

export const AiDesignIdea = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Based on Logo of type Modern Mascot Logos Generate logo design ideas in JSON format.",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: "```json\n{\n  \"ideas\": [\n    \"Chef Elephant with playful hat\",\n    \"Modern fox mascot with clean lines\",\n    \"Friendly robot mascot logo\",\n    \"Bold lion mascot for brand identity\",\n    \"Minimal panda mascot logo\"\n  ]\n}\n```",
        },
      ],
    },
  ],
});


//   const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
//   return result.response.text();

