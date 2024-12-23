import { Recipe } from '../types';

export const appetizers: Recipe[] = [
  {
    id: 'simple-greek-salad',
    title: 'Simple Greek Salad',
    description: 'A fresh and colorful Mediterranean salad with crisp vegetables and tangy feta cheese.',
    image: 'https://images.unsplash.com/photo-1609167830220-7164aa360951?auto=format&fit=crop&q=80&w=1080',
    ingredients: [
      '1 cucumber, chopped',
      '2 tomatoes, chopped',
      '1 small red onion, thinly sliced',
      'A handful of olives (Kalamata preferred)',
      'Feta cheese (crumbled)',
      '2 tablespoons olive oil',
      '1 tablespoon red wine vinegar',
      'Salt and pepper (to taste)'
    ],
    instructions: [
      'In a large bowl, combine cucumber, tomatoes, and onion',
      'Add olives and feta cheese',
      'Whisk together olive oil, vinegar, salt, and pepper; drizzle over the salad',
      'Toss lightly and serve immediately'
    ]
  },
  {
    id: 'tomato-mozzarella-bruschetta',
    title: 'Tomato and Mozzarella Bruschetta',
    description: 'Classic Italian appetizer featuring fresh tomatoes, melted mozzarella, and aromatic basil.',
    image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&q=80&w=1080',
    ingredients: [
      '1 baguette (sliced)',
      '2 tomatoes, diced',
      '1 tablespoon olive oil',
      '1 clove garlic, minced',
      'Fresh mozzarella, sliced',
      'Salt, pepper, and basil leaves (to taste)'
    ],
    instructions: [
      'Preheat oven to 375°F (190°C)',
      'Mix diced tomatoes with olive oil, garlic, salt, and pepper',
      'Place sliced baguette on a baking sheet; top with tomato mixture and a slice of mozzarella',
      'Bake for 5–7 minutes until cheese melts slightly. Garnish with basil leaves'
    ]
  }
];