// Ekstern afhængighed (Den som skal mockes i testen)
export async function getUserFromAPI(id) {
  const res = await fetch(`https://example.com/users/${id}`);
  if (!res.ok) throw new Error("Fejl ved hentning af bruger");
  return await res.json();
}