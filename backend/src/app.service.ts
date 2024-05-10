import { Injectable } from '@nestjs/common';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { ItineraryData } from './types';

@Injectable()
export class AppService {
  async generateItinerary(itineraryData: ItineraryData[]): Promise<string> {
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = `
      Crie um roteiro de viajem, considerando os dados abaixo. city corresponde à cidade que vou visitar, e daysNumber corresponde à quantidade de dias que estarei nessa cidade.
      ${JSON.stringify(itineraryData)}
    `

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return text;
  }
}
