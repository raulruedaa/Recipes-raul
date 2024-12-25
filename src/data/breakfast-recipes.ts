import { Recipe } from '../types';

export const breakfastRecipes: Recipe[] = [
  {
    id: 'classic-scrambled-eggs',
    title: 'Classic Scrambled Eggs',
    description: 'Perfectly fluffy scrambled eggs made with just a few simple ingredients. A quick and protein-rich breakfast classic.',
    image: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&q=80&w=1080',
    ingredients: [
      '2–3 eggs',
      '1 tablespoon butter or oil',
      'Salt and pepper (to taste) cpa tinha que ser no main branch 😇'
    ],
    instructions: [
      'Crack eggs into a bowl and whisk gently with a pinch of salt and pepper',
      'Melt butter in a non-stick pan over medium heat',
      'Pour in the eggs and allow them to set for a few seconds',
      'Use a spatula to gently fold the eggs until they are fluffy and cooked to your liking'
    ]
  },
  {
    id: 'easy-avocado-toast',
    title: 'Easy Avocado Toast',
    description: 'A modern breakfast classic combining creamy avocado with crispy toast. Customizable with various toppings.',
    image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&q=80&w=1080',
    ingredients: [
      '1 ripe avocado',
      '2 slices of bread (toasted)',
      'Salt, pepper, and chili flakes (to taste)',
      'Optional toppings: sliced tomato, lime juice, or a fried egg'
    ],
    instructions: [
      'Mash the avocado in a small bowl, adding salt and pepper (and chili flakes if desired)',
      'Spread the mashed avocado on your toasted bread',
      'Top with any additional ingredients you like (tomato slices, a drizzle of lime juice, or a fried egg)'
    ]
  },
  {
    id: 'banana-pancakes',
    title: 'Banana Pancakes',
    description: 'Fluffy pancakes with a delicious banana twist. Perfect for using up ripe bananas.',
    image: 'https://images.unsplash.com/photo-1575853121743-60c24f0a7502?auto=format&fit=crop&q=80&w=1080',
    ingredients: [
      '1 cup (125 g) all-purpose flour',
      '1 tablespoon sugar',
      '2 teaspoons baking powder',
      'Pinch of salt',
      '1 cup (240 ml) milk',
      '1 ripe banana, mashed',
      '1 egg',
      '1 tablespoon melted butter or oil'
    ],
    instructions: [
      'In a bowl, combine flour, sugar, baking powder, and salt',
      'In a separate bowl, whisk milk, mashed banana, egg, and melted butter',
      'Gradually mix wet ingredients into dry ingredients until just combined',
      'Heat a lightly oiled pan over medium heat. Pour ¼ cup of batter per pancake and cook until golden'
    ]
  }
];