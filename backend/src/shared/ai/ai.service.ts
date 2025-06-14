import OpenAI from "openai";
import dotenv from "dotenv";
import { ConfigService } from "@nestjs/config";

dotenv.config();

const MODEL = "mistralai/mistral-7b-instruct:free";

export class AIService {
  private openai: OpenAI;

  constructor(configService: ConfigService) {
    this.openai = new OpenAI({
      baseURL: "https://openrouter.ai/api/v1",
      apiKey: configService.get("OPEN_ROUTER_KEY"),
    });
  }

  async write(roles: string, prompt: string) {
    const completion = await this.openai.chat.completions.create({
      model: MODEL,
      messages: [
        {
          role: "system",
          content: roles,
        },
        { role: "user", content: prompt },
      ],
    });
    return completion;
  }
}
