import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { addUser } from "./addUser";

let users; // Global variabel – synlig for alle tests

// Hovedgruppe
describe("addUser()", () => {
  // Kører før HVER test
  beforeEach(() => {
    users = [
      { name: "Chris" },
      { name: "Lasse" }
    ];
  });

  // Kører efter HVER test
  afterEach(() => {
    users = null;
  });

  // Undergruppe 1: Gyldige input
  describe("Gyldige input", () => {
    it("skal tilføje en ny bruger korrekt", () => {
      const result = addUser(users, { name: "Mia" });
      expect(result.length).toBe(3);
      expect(result[2].name).toBe("Mia");
    });

    it("skal ikke ændre den oprindelige liste", () => {
      const copy = [...users];
      addUser(users, { name: "Mia" });
      expect(users).toEqual(copy);
    });
  });

  // Undergruppe 2: Ugyldige input
  describe("Ugyldige input", () => {
    it("skal kaste fejl, hvis brugeren mangler navn", () => {
      expect(() => addUser(users, {})).toThrow("Ugyldig bruger");
    });

    it("skal kaste fejl, hvis brugeren er null", () => {
      expect(() => addUser(users, null)).toThrow("Ugyldig bruger");
    });
  });
});


