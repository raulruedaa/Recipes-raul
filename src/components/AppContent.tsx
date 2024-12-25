import React, { useState } from 'react';
import { Navigation } from './Navigation';
import { SearchBar } from './SearchBar';
import { RecipeList } from './RecipeList';
import { recipes } from '../data/recipes';
import { useRecipeNavigation } from '../hooks/useRecipeNavigation';
import { useRecipeSearch } from '../hooks/useRecipeSearch';

export function AppContent() {
  const { searchQuery, setSearchQuery, filteredRecipes } = useRecipeSearch(recipes);
  const { scrollToRecipe } = useRecipeNavigation();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation recipes={recipes} onRecipeSelect={scrollToRecipe} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <SearchBar onSearch={setSearchQuery} />
        <RecipeList recipes={filteredRecipes} />
      </main>
    </div>
  );
}