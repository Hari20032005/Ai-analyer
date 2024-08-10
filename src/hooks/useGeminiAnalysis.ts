// hooks/useGeminiAnalysis.ts
import { useMutation } from '@tanstack/react-query';

async function postAnalysis(data: string) {
  const response = await fetch('/api/analyze', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ data }),
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

export function useGeminiAnalysis() {
  return useMutation({
    mutationFn: postAnalysis,
  });
}