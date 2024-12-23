import { Recipe } from '../types';
import { breakfastRecipes } from './breakfast-recipes';
import { mainDishes } from './main-dishes';
import { appetizers } from './appetizers';
import { desserts } from './desserts';

export const recipes: Recipe[] = [
  ...breakfastRecipes,
  ...mainDishes,
  ...appetizers,
  ...desserts
];