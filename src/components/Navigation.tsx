import React from 'react';
import { Recipe } from '../types';
import { Menu } from 'lucide-react';

interface NavigationProps {
  recipes: Recipe[];
  onRecipeSelect: (id: string) => void;
}

export function Navigation({ recipes, onRecipeSelect }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <h1 className="text-xl font-bold text-gray-900">Delicious Recipes</h1>
          
          <div className="hidden md:block">
            <div className="flex space-x-4">
              {recipes.map((recipe) => (
                <button
                  key={recipe.id}
                  onClick={() => onRecipeSelect(recipe.id)}
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {recipe.title}
                </button>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button className="p-2 rounded-md text-gray-600 hover:text-gray-900">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}