import { useState, useMemo } from 'react';
import { Recipe } from '../types';

export function useRecipeSearch(recipes: Recipe[]) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRecipes = useMemo(() => 
    recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchQuery.toLowerCase())
    ),
    [recipes, searchQuery]
  );

  return { searchQuery, setSearchQuery, filteredRecipes };
}