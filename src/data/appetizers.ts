import { Recipe } from '../types';

export const appetizers: Recipe[] = [
  {
    id: 'simple-greek-salad',
    title: 'Simple Greek Salad',
    description: 'A fresh and colorful Mediterranean salad with crisp vegetables and tangy feta cheese.',
    image: 'https://images.unsplash.com/photo-1609167830220-7164aa360951?auto=format&fit=crop&q=80&w=1080',
    ingredients: [
      'Um pepino que não está mais em crise existencial, picado',
      '2 tomates que finalmente encontraram seu propósito, picados',
      '1 cebola roxa pequena, finamente fatiada (ela insiste que é a mais fashion)',
      'Um punhado de azeitonas que adoram festas (Kalamata preferidas)',
      'Queijo feta que se desintegrou de tanto rir (esfarelado)',
      '2 colheres de sopa de azeite que sonha em ser perfume',
      '1 colher de sopa de vinagre de vinho tinto que acha que é vinho de verdade',
      'Sal e pimenta, a gosto (eles sempre têm a última palavra)'
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
      '1 baguete que sempre quis ser uma estrela de cinema (fatiada)',
      '2 tomates que adoram dançar salsa, picados',
      '1 colher de sopa de azeite que pensa que é um elixir mágico',
      '1 dente de alho que adora contar histórias, picado',
      'Mozzarella fresca que derrete de tanto amor, fatiada',
      'Sal, pimenta e folhas de manjericão que acham que são coroas (a gosto)'
    ],
    instructions: [
      'Preheat oven to 375°F (190°C)',
      'Mix diced tomatoes with olive oil, garlic, salt, and pepper',
      'Place sliced baguette on a baking sheet; top with tomato mixture and a slice of mozzarella',
      'Bake for 5–7 minutes until cheese melts slightly. Garnish with basil leaves'
    ]
  }
];
