import React from 'react';
import { Heart } from 'lucide-react';

interface FavoriteButtonProps {
  isFavorite: boolean;
  onClick: () => void;
}

export function FavoriteButton({ isFavorite, onClick }: FavoriteButtonProps) {
  return (
    <button
      onClick={onClick}
      className="p-2 rounded-full hover:bg-gray-100 transition-colors"
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
    >
      <Heart
        className={`h-6 w-6 transition-colors ${
          isFavorite ? "fill-red-500 text-red-500" : "text-gray-400"
        }`}
      />
    </button>
  );
}