import Groq from 'groq-sdk';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    if (!process.env.GROQ_API_KEY) {
      return res.status(500).json({ error: 'GROQ_API_KEY is not set in environment variables.' });
    }

    const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
    
    // Dynamically fetch available models to avoid decommissioned model errors
    const modelsData = await groq.models.list();
    const availableModels = modelsData.data;
    // Prefer llama, mixtral, or gemma models
    const textModels = availableModels.filter(m => m.id.includes('llama') || m.id.includes('mixtral') || m.id.includes('gemma'));
    const selectedModel = textModels.length > 0 ? textModels[0].id : availableModels[0].id;

    const systemPrompt = "You are a helpful support assistant for UniTeX, a Mac menu bar app that allows users to type math globally using shorthands like //pi. You help users troubleshoot Mac Privacy & Security settings, specifically Accessibility permissions and Input Monitoring. Keep your answers concise, friendly, and helpful. Do not use complex markdown.";

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: message }
      ],
      model: selectedModel,
    });

    const responseText = chatCompletion.choices[0]?.message?.content || "";
    
    return res.status(200).json({ response: responseText });
  } catch (error) {
    console.error('Error generating AI response:', error);
    return res.status(500).json({ error: 'Backend Error: ' + (error.message || 'Unknown error') });
  }
}
