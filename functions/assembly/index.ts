import { http, inference } from "@hypermode/functions-as";
// make cool shit happen
export function textClassifier(text: string): string {
  const modelName = "sentiment-classifier";
  const threshold: f32 = 0.5;
  return inference.classifyText(modelName, text, threshold);
}
