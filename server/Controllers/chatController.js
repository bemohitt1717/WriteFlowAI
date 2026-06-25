import { Groq } from "groq-sdk/client.js";

export const chatController = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({
        success: false,
        error: "Missing GEMINI_API_KEY",
      });
    }

    const ai = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });

    // const result = await ai.models.generateContent({
    //   model: "gemini-2.5-flash",
    //   contents: prompt,
    // });

    const completion = await Groq.Chat.Completions.Create({
        model: "llama-3.3-70b-versatile",
  messages: [
    {
      role: "user",
      content: prompt,
    },
  ],
    })

    return res.status(200).json({
      success: true,
      response: completion.choices[0].message.content || "no response generated",
      message: "prompt received successfully",
      prompt,
    });
  } catch (error) {
    console.error("Chat error:", error);
    return res.status(500).json({
      success: false,
      error: "Failed to generate response",
    });
  }
};
