export async function fetchUser(id) {
     return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof id !== "number" || id <= 0) {
        reject(new Error("Ugyldigt ID"));
      } else {
        resolve({ id, name: "Chris", role: "Tester" });
      }
    }, 200); // simulerer ventetid
  });
}