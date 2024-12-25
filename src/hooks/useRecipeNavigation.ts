import { useCallback } from 'react';

export function useRecipeNavigation() {
  const scrollToRecipe = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return { scrollToRecipe };
}