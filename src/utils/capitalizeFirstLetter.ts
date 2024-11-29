export default function capitalizeFirstLetter(sentence: string) {
  if (!sentence) return ""; // Handle empty string
  return sentence.charAt(0).toUpperCase() + sentence.slice(1);
}
