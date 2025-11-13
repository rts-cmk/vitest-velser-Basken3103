import { describe, it, expect} from "vitest";
import { handleInput } from "./handleInput";

describe("handleInput()"), () => {
    it("skal returnere dobbelt værdi for tal", () => {
        expect(handleInput(5)).toBe(10);
        expect(handleInput(-3)).toBe(-6);
    });
} 

it("skal konvertere strenge til store bogstaver", () => {
    expect(handleInput("hej")).toBe("HEJ");
    expect(handleInput("Test")).toBe("TEST");
})

it("skal returnere 'Ingen værdi' for null og undefined", () => {
    expect(handleInput(null)).toBe("Ingen værdi");
    expect(handleInput(undefined)).toBe("Ingen værdi");
})

it("skal kaste en fejl for ugyldige typer (fx objekt eller array)", () => {
    expect(() => handleInput({})).toThrow("Ugyldig inputtype");
    expect(() => handleInput([])).toThrow("Ugyldig inputtype");
    expect(() => handleInput(true)).toThrow("Ugyldig inputtype");
})

