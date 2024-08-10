// lib/geminiAnalysis.ts
import { genAI } from './geminiClient';

export async function analyzeData(data: string) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = `Analyze the following data and provide an optimal solution:\n\n${data}`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error analyzing data:', error);
    throw error;
  }
}