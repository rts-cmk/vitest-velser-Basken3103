export function addUser(list, user) {
    if (!user || !user.name) throw new Error("Ugyldig bruger");
    return [...list, user];
}