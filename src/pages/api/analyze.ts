// pages/api/analyze.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { analyzeData } from '../../lib/geminiAnalysis';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { data } = req.body;
      const result = await analyzeData(data);
      res.status(200).json({ result });
    } catch (error) {
      res.status(500).json({ error: 'Error analyzing data' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}