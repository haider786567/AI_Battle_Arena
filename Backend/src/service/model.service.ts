import { ChatGoogle } from "@langchain/google";
import { ChatMistralAI } from "@langchain/mistralai"
import { ChatGroq } from "@langchain/groq"
import config from "../config/config.js";

export const Gemini = new ChatGoogle({
    model:"gemini-flash-latest",
    api: config.GEMINI_API_KEY
});
export  const Mistral = new ChatMistralAI({
    model:"mistral-medium-latest",
    api: config.MISTRAL_API_KEY
})
export const Groq = new ChatGroq({
    model:"llama-3.3-70b-versatile",
    api: config.GORK_API_KEY
})
