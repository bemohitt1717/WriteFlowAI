import Groq from "groq-sdk";

export const chatController = async (req, res) => {
  const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
  });
  
  try {
    const { prompt } = req.body;

    if (!process.env.GROQ_API_KEY) {
      return res.status(500).json({
        success: false,
        error: "Missing GROQ_API_KEY",
      });
    }

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    console.log("ai reply is heree : ",completion.choices[0].message.content);
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
