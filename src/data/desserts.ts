import { Recipe } from '../types';

export const desserts: Recipe[] = [
  {
    id: 'strawberry-smoothie',
    title: 'Strawberry Smoothie',
    description: 'A refreshing and healthy smoothie perfect for breakfast or as a sweet snack.',
    image: 'https://images.unsplash.com/photo-1638176066666-ffb2f013c7dd?auto=format&fit=crop&q=80&w=1080',
    ingredients: [
      '1 cup (150 g) fresh or frozen strawberries',
      '1 banana (optional)',
      '1 cup (240 ml) milk (or almond milk)',
      '1 teaspoon honey (optional)'
    ],
    instructions: [
      'Combine all ingredients in a blender',
      'Blend on high until smooth',
      'Adjust sweetness with honey if desired. Serve immediately'
    ]
  },
  {
    id: 'chocolate-mug-cake',
    title: 'Chocolate Mug Cake',
    description: 'A quick and satisfying single-serve chocolate cake made in the microwave.',
    image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&q=80&w=1080',
    ingredients: [
      '4 tablespoons all-purpose flour',
      '4 tablespoons sugar',
      '2 tablespoons cocoa powder',
      '3 tablespoons milk',
      '3 tablespoons oil (vegetable or coconut)',
      '1 pinch baking powder',
      'Optional: chocolate chips'
    ],
    instructions: [
      'In a microwave-safe mug, stir together flour, sugar, cocoa, and baking powder',
      'Add milk and oil; mix until smooth. Stir in chocolate chips if desired',
      'Microwave on high for 60–90 seconds (depending on your microwave)',
      'Let it cool slightly before digging in'
    ]
  }
];