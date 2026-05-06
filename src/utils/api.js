const BASE_URL = 'https://api.spoonacular.com';
const API_KEY = import.meta.env.VITE_API_KEY;

export async function getRandomRecipes(number = 6) {
  const response = await fetch(
    `${BASE_URL}/recipes/random?number=${number}&apiKey=${API_KEY}`
  );
  if (!response.ok) throw new Error(`API error: ${response.status}`);
  return response.json();
}
