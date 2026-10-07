export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

export interface ChatResponse {
  answer: string;
}

export const checkBackendStatus = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/`);
    return await response.json();
  } catch (error) {
    console.error('Backend status check failed:', error);
    throw error;
  }
};

export const askAi = async (question: string): Promise<ChatResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question }),
    });
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('AI request failed:', error);
    throw error;
  }
};
