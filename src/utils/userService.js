import { getUserFromAPI } from "./api.js";

export async function getUserGreeting(userId) {
  const user = await getUserFromAPI(userId);
  return `Hej ${user.name}! Velkommen tilbage 👋`;
}