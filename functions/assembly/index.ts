import { http, inference } from "@hypermode/functions-as";
export function textClassifier(text: string): string {
  const modelName = "sentiment-classifier";
  const threshold: f32 = 0.5;
  return inference.classifyText(modelName, text, threshold);
}
