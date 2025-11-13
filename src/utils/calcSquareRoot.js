export function calcSquareRoot(value) {
  if (typeof value !== "number") {
    throw new Error("Input skal være et tal");
  }

  if (value < 0) {
    throw new Error("Kan ikke beregne kvadratrod af et negativt tal");
  }

  return Math.sqrt(value);
}