import { useState, useEffect } from 'react';

export function useRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cached = localStorage.getItem('gourmet_recipes');
    if (cached) {
      setRecipes(JSON.parse(cached));
      setLoading(false);
      return;
    }

    const fetchRecipes = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/random?number=6&apiKey=${import.meta.env.VITE_API_KEY}`
        );
        if (!response.ok) throw new Error(`API error: ${response.status}`);
        const data = await response.json();
        setRecipes(data.recipes);
        localStorage.setItem('gourmet_recipes', JSON.stringify(data.recipes));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  return { recipes, loading, error };
}
