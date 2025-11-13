import { describe, it, expect } from "vitest";
import { calcSquareRoot } from "./calcSquareRoot";

describe ("calcSquareRoot()", () => {
    
    it("skal returnere korrekt kvadratrod for gyldige tal", () => {
        expect(calcSquareRoot(9)).toBe(3);
        expect(calcSquareRoot(16)).toBe(4)
    })


    it("skal kaste fejl ved ikke-numerisk input", () => {
    expect(() => calcSquareRoot("test")).toThrow("Input skal være et tal");
    expect(() => calcSquareRoot(null)).toThrow("Input skal være et tal");
    })

    it("skal kaste fejl ved negative tal", () => {
    expect(() => calcSquareRoot(-9)).toThrow("Kan ikke beregne kvadratrod af et negativt tal");
    })
});

