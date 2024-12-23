import React from 'react';
import { Recipe } from '../types';

interface RecipeCardProps {
  recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <article id={recipe.id} className="scroll-mt-20 bg-white rounded-lg shadow-lg overflow-hidden">
      {recipe.image && (
        <img
          src={recipe.image}
          alt={`${recipe.title} presentation`}
          className="w-full h-64 object-cover"
        />
      )}
      
      <div className="p-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">{recipe.title}</h2>
        <p className="text-gray-600 mb-6">{recipe.description}</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Ingredients</h3>
            <ul className="space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="text-gray-600">
                  • {ingredient}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Instructions</h3>
            <ol className="space-y-4">
              {recipe.instructions.map((step, index) => (
                <li key={index} className="text-gray-600">
                  <span className="font-semibold">{index + 1}.</span> {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </article>
  );
}