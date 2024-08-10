// components/GeminiAnalyzer.tsx
'use client'

import { useState } from 'react';
import { useGeminiAnalysis } from '../hooks/useGeminiAnalysis';

export default function GeminiAnalyzer() {
  const [inputData, setInputData] = useState('');
  const { mutate: analyzeData, data: result, isLoading, isError } = useGeminiAnalysis();

  const handleAnalyze = () => {
    analyzeData(inputData);
  };

  return (
    <div>
      <textarea 
        value={inputData} 
        onChange={(e) => setInputData(e.target.value)}
        placeholder="Enter data to analyze"
      />
      <button onClick={handleAnalyze} disabled={isLoading}>
        {isLoading ? 'Analyzing...' : 'Analyze Data'}
      </button>
      {result && (
        <div>
          <h2>Gemini Analysis Result:</h2>
          <pre>{result.result}</pre>
        </div>
      )}
      {isError && <p>Error occurred during analysis</p>}
    </div>
  );
}