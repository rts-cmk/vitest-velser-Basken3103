import { describe, it, expect } from "vitest";
import { fetchUser } from "./fetchUser";

describe("fetchUser()", () => {
    // ✅ Succes-scenarie
   it("skal returnere en bruger ved gyldigt ID", async() => {
    const user = await fetchUser(1); // vi venter på resultatet
    expect(user).toEqual({ id: 1, name: "Chris", role: "Tester" });
   }) 
});

// 🚫 Fejl-scenarie
it("skal kaste fejl ved ugyldigt ID", async () => {
    // Her tester vi, at funktionen *rejecter*
    await expect(fetchUser(-1)).rejects.toThrow("Ugyldigt ID");
});

// En anden måde (med try/catch)
it("skal kaste fejl, hvis ID ikke er et tal", async () => {
    try {
      await fetchUser("abc");
    } catch (error) {
      expect(error.message).toBe("Ugyldigt ID");
    }
});
  