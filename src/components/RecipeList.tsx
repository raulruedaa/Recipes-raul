import React from 'react';
import { Recipe } from '../types';
import { RecipeCard } from './RecipeCard';
import { useFavorites } from '../hooks/useFavorites';

interface RecipeListProps {
  recipes: Recipe[];
}

export function RecipeList({ recipes }: RecipeListProps) {
  const { isFavorite, toggleFavorite } = useFavorites();

  return (
    <div className="space-y-12">
      {recipes.map(recipe => (
        <RecipeCard 
          key={recipe.id} 
          recipe={recipe}
          isFavorite={isFavorite(recipe.id)}
          onToggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
}