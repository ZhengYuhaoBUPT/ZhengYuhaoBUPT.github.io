import { GoogleGenAI } from "@google/genai";
import { PROFILE, PUBLICATIONS, TRAVEL_LOGS, EDUCATION, AWARDS, NEWS } from '../constants';

const apiKey = process.env.API_KEY || '';

// Construct a context string representing the website's database
const SITE_CONTEXT = `
You are an intelligent assistant for the personal portfolio website of ${PROFILE.name}.
Your goal is to answer visitor questions based ONLY on the following structured data.

Profile:
${JSON.stringify(PROFILE)}

Education:
${JSON.stringify(EDUCATION)}

Publications:
${JSON.stringify(PUBLICATIONS)}

Awards:
${JSON.stringify(AWARDS)}

Travel Logs:
${JSON.stringify(TRAVEL_LOGS)}

Latest News:
${JSON.stringify(NEWS)}

Instructions:
1. Answer politely and professionally.
2. If the user asks about research, refer to the publications and interests.
3. If the user asks about travel, refer to the travel logs.
4. If the answer is not in the data, state that you don't have that information.
5. Keep answers concise (under 100 words) unless asked for details.
`;

export const queryGemini = async (userQuery: string): Promise<string> => {
  if (!apiKey) {
    return "Error: API Key is missing. Please configure the environment variable.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    
    // Using gemini-3-flash-preview for speed and efficiency
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userQuery,
      config: {
        systemInstruction: SITE_CONTEXT,
      }
    });

    return response.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "An error occurred while communicating with the AI assistant.";
  }
};
