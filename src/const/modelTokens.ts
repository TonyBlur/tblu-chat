import { LanguageModel } from '@/types/llm';

// refs to: https://platform.openai.com/docs/models/gpt-4-and-gpt-4-turbo
export const ModelTokens: Record<LanguageModel, number> = {
  [LanguageModel.GPT3_5]: 16_385,
  [LanguageModel.GPT4]: 8196,
  [LanguageModel.GPT4_PREVIEW]: 128_000,
  [LanguageModel.GPT4_VISION_PREVIEW]: 128_000,
  [LanguageModel.GPT4_32K]: 32_768,
  [LanguageModel.META_LLAMA_2_70B_CHAT]: 4096,
  [LanguageModel.META_CODE_LLAMA_34B]: 16_000,
};
