import { config } from "dotenv";
config();

type Config = {
    readonly GEMINI_API_KEY: string;
    readonly MISTRAL_API_KEY: string;
    readonly GORK_API_KEY: string;
    
}
const app_config: Config = {
    GEMINI_API_KEY: process.env.GEMINI_API_KEY || "",
    MISTRAL_API_KEY: process.env.MISTRAL_API_KEY || "",
    GORK_API_KEY: process.env.GROQ_API_KEY || "",
}

export default app_config;