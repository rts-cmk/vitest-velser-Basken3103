import { describe, it, expect, vi } from "vitest";
import { getUserGreeting } from "./userService";
import * as apiModule from "./api";

describe("getUserGreeting()", () => {
  
  it("skal returnere en venlig hilsen ved gyldigt API-svar", async () => {
    // Mock API
    vi.spyOn(apiModule, "getUserFromAPI").mockResolvedValue({
      id: 1,
      name: "Chris",
    });

    // Kør funktionen
    const result = await getUserGreeting(1);

    // Assertions
    expect(result).toBe("Hej Chris! Velkommen tilbage 👋");
    expect(apiModule.getUserFromAPI).toHaveBeenCalledWith(1);
  });

  it("skal håndtere fejl fra API'et korrekt", async () => {
    // Mock fejl
    vi.spyOn(apiModule, "getUserFromAPI").mockRejectedValue(
      new Error("Fejl ved hentning af bruger")
    );

    try {
      await getUserGreeting(1);
      throw new Error("Forventet fejl blev ikke kastet");
    } catch (error) {
      expect(error.message).toBe("Fejl ved hentning af bruger");
    }
  });

});
