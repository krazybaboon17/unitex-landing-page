import { GoogleGenerativeAI } from '@google/generative-ai';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ error: 'GEMINI_API_KEY is not set in environment variables.' });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const systemPrompt = "You are a helpful support assistant for UniTeX, a Mac menu bar app that allows users to type math globally using shorthands like //pi. You help users troubleshoot Mac Privacy & Security settings, specifically Accessibility permissions and Input Monitoring. Keep your answers concise, friendly, and helpful. Do not use complex markdown.";

    const result = await model.generateContent([
      systemPrompt,
      `User: ${message}`
    ]);
    
    const responseText = result.response.text();
    
    return res.status(200).json({ response: responseText });
  } catch (error) {
    console.error('Error generating AI response:', error);
    return res.status(500).json({ error: 'Failed to generate response' });
  }
}
