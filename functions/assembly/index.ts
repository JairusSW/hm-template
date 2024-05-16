import { http, inference } from "@hypermode/functions-as";
// make cool shit happen
export function textClassifier(text: string): string {
  const modelName = "sentiment-classifier";
  const threshold: f32 = 0.5;
  return inference.classifyText(modelName, text, threshold);
}

export function randomJoke(): string {
  console.log("Sending request to https://v2.jokeapi.dev/joke/Any")
  return http.fetch("https://v2.jokeapi.dev/joke/Any").text();
}
