import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { SearchBar } from './components/SearchBar';
import { RecipeCard } from './components/RecipeCard';
import { recipes } from './data/recipes';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    recipe.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const scrollToRecipe = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation recipes={recipes} onRecipeSelect={scrollToRecipe} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <SearchBar onSearch={setSearchQuery} />
        
        <div className="space-y-12">
          {filteredRecipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;