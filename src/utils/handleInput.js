// Skriv tests for en funktion, der håndterer både tal, strenge og null-værdier.
export function handleInput(value) {
  if (value === null || value === undefined) {
    return "Ingen værdi";
  } else if (typeof value === "number") {
    return value * 2; // dobler tal
  } else if (typeof value === "string") {
    return value.toUpperCase(); // gør strengen store bogstaver
  } else {
    throw new Error("Ugyldig inputtype");
  }
}