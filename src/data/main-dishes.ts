import { Recipe } from '../types';

export const mainDishes: Recipe[] = [
  {
    id: 'quick-tomato-pasta',
    title: 'Quick Tomato Pasta',
    description: 'A simple and delicious pasta dish with a fresh tomato sauce. Ready in under 20 minutes.',
    image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&q=80&w=1080',
    ingredients: [
      '8 oz (225 g) pasta (spaghetti or penne)',
      '1 tablespoon olive oil',
      '2 garlic cloves, minced',
      '1 can (14 oz/400 g) crushed tomatoes',
      'Salt, pepper, and Italian herbs (to taste)',
      'Optional: grated Parmesan'
    ],
    instructions: [
      'Cook pasta according to package instructions',
      'Meanwhile, heat olive oil in a saucepan; add minced garlic and sauté until fragrant (about 1 minute)',
      'Pour in crushed tomatoes; season with salt, pepper, and herbs. Simmer for 5–7 minutes',
      'Drain pasta and toss with the tomato sauce. Sprinkle with Parmesan if desired'
    ]
  },
  {
    id: 'chicken-tacos',
    title: 'Chicken Tacos',
    description: 'Quick and flavorful chicken tacos with customizable toppings. Perfect for a casual dinner.',
    image: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?auto=format&fit=crop&q=80&w=1080',
    ingredients: [
      '1 lb (450 g) chicken breast, cut into strips',
      '1 tablespoon taco seasoning (or chili powder, cumin, salt, pepper)',
      '1 tablespoon olive oil',
      '6 small tortillas',
      'Toppings: shredded cheese, lettuce, salsa, sour cream'
    ],
    instructions: [
      'Season chicken strips with taco seasoning',
      'Heat olive oil in a skillet over medium-high heat',
      'Cook chicken until browned and fully cooked (about 5–7 minutes)',
      'Warm tortillas in a pan or microwave. Fill with chicken and your favorite toppings'
    ]
  },
  {
    id: 'one-pan-chicken-veggies',
    title: 'One-Pan Chicken and Veggies',
    description: 'A healthy and easy sheet pan dinner with minimal cleanup. Perfect for busy weeknights.',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=1080',
    ingredients: [
      '2 chicken breasts (boneless, skinless)',
      '2 cups mixed vegetables (e.g., carrots, broccoli, zucchini)',
      '1 tablespoon olive oil',
      'Salt, pepper, and herbs (rosemary or thyme)'
    ],
    instructions: [
      'Preheat oven to 400°F (200°C)',
      'Arrange chicken and chopped vegetables on a baking sheet',
      'Drizzle with olive oil and season with salt, pepper, and herbs',
      'Bake for about 20–25 minutes or until chicken is cooked through (internal temp 165°F/74°C)'
    ]
  }
];