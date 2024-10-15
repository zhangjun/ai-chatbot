import { openai, createOpenAI, OpenAIProviderSettings } from '@ai-sdk/openai'

var custom_openai = createOpenAI({
  compatibility: "strict",
  baseURL: process.env["OPENAI_BASE_URL"] ? process.env["OPENAI_BASE_URL"]: "https://api.openai.com/v1"
  // strict for OpenAI API
});
export {
  custom_openai
};