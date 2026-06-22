import { GoogleGenAI } from "@google/genai";


export const chatController = async (req, res) => {
  
   const ai = new  GoogleGenAI({
    apiKey : process.env.GEMINI_API_KEY,
   });

  const {prompt} = req.body;
  
  const result = await ai.models.generateContent({
    model : "gemini-2.5-flash",
    contents : prompt,
  });

    
    res.status(200).json({
        success : true,
        response : result.text,
        message : "prompt recieve successfully",
        prompt,
    }) 
}