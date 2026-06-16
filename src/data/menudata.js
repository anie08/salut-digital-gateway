// src/data/menudata.js

export const menuCategories = [
  { id: 'BREAKFAST', am: 'Նախաճաշ (08:00-14:00)', en: 'Breakfast', ru: 'Завтрак' },
  { id: 'STARTERS', am: 'Նախուտեստներ', en: 'Starters', ru: 'Закуски' },
  { id: 'SALUT_SPECIALS', am: 'Salut Special-ներ', en: 'Salut Specials', ru: 'Особое от Salut' },
  { id: 'SOUPS', am: 'Ապուրներ', en: 'Soups', ru: 'Супы' },
  { id: 'SALADS', am: 'Աղցաններ', en: 'Salads', ru: 'Салаты' },
  { id: 'PASTA', am: 'Պաստա', en: 'Pasta', ru: 'Паста' },
  { id: 'SANDWICHES', am: 'Սենդվիչներ', en: 'Sandwiches', ru: 'Сэндвичи' },
  { id: 'MAIN_COURSE', am: 'Հիմնական Ուտեստներ', en: 'Main Course', ru: 'Горячие блюда' },
  { id: 'FRIES_MORE', am: 'Ֆրի և Սոուսներ', en: 'Fries & More', ru: 'Картофель фри и соусы' }
];

// Ենթակատեգորիաների թարգմանությունները
export const subCategoryTitles = {
  eggs: { am: 'Ձվով ուտեստներ', en: 'Egg Dishes', ru: 'Блюда из яиц' },
  toasts: { am: 'Տոստեր', en: 'Toasts', ru: 'Тосты' },
  bowls: { am: 'Բոուլեր և քաղցր', en: 'Bowls & Sweet', ru: 'Боулы и сладкое' },
  cold: { am: 'Սառը նախուտեստներ', en: 'Cold Starters', ru: 'Холодные закуски' },
  hot: { am: 'Տաք նախուտեստներ', en: 'Hot Starters', ru: 'Горячие закуски' },
  special: { am: 'Salut Հատուկ', en: 'Salut Specials', ru: 'Salut Особое' },
  soups: { am: 'Ապուրներ', en: 'Soups', ru: 'Супы' },
  salads: { am: 'Աղցաններ', en: 'Salads', ru: 'Салаты' },
  pasta: { am: 'Տնական Պաստա', en: 'Homemade Pasta', ru: 'Домашняя паста' },
  sandwiches: { am: 'Սենդվիչներ', en: 'Sandwiches', ru: 'Сэндвичи' },
  meat_fish: { am: 'Միս և Ձուկ', en: 'Meat & Fish', ru: 'Мясо и рыба' },
  fries: { am: 'Կարտոֆիլ', en: 'Potatoes', ru: 'Картофель' },
  sauces: { am: 'Սոուսներ', en: 'Sauces', ru: 'Соусы' }
};

export const menuItems = [
  // ==========================================
  // BREAKFAST (Նախաճաշ)
  // ==========================================
  { id: 'b1', category: 'BREAKFAST', subcategory: 'eggs', price: 1900, must_try: false, name: { am: 'Սքրեմբլ (Հարված ձվեր)', en: 'Scrambled Eggs' }, image: 'https://i.pinimg.com/1200x/8d/d3/6c/8dd36c15bbe74809a488cae40143fc8a.jpg' },
  { id: 'b2', category: 'BREAKFAST', subcategory: 'eggs', price: 3000, must_try: false, name: { am: 'Էգգս Բենեդիկտ', en: 'Eggs Benedict' }, image: 'https://i.pinimg.com/1200x/71/6a/9b/716a9bfeee9b11e48a6d7b5ecb70b8c1.jpg' },
  { id: 'b3', category: 'BREAKFAST', subcategory: 'eggs', price: 3600, must_try: false, name: { am: 'Բենեդիկտ Սաղմոնով', en: 'Salmon Benedict' }, image: 'https://i.pinimg.com/1200x/55/07/c6/5507c6e5eb72cd601aa9aa9c99464725.jpg' },
  { id: 'b4', category: 'BREAKFAST', subcategory: 'toasts', price: 2600, must_try: false, name: { am: 'Ավոկադո Տոստ', en: 'Avocado Toast' }, image: 'https://i.pinimg.com/736x/95/f7/f1/95f7f1a3543fb3c3bae6868eba4c6bbc.jpg' },
  { id: 'b5', category: 'BREAKFAST', subcategory: 'eggs', price: 3600, must_try: false, name: { am: 'Լիարժեք Անգլիական Նախաճաշ', en: 'Full English Breakfast' }, image: 'https://i.pinimg.com/736x/dc/09/83/dc09836945bf97df6ae1b064f6ac5b52.jpg' },
  { id: 'b6', category: 'BREAKFAST', subcategory: 'eggs', price: 2600, must_try: true, name: { am: 'Հայկական Ձվածեղ Լոլիկով', en: 'Armenian Tomato Scramble' }, image: 'https://i.pinimg.com/736x/5a/1a/7a/5a1a7a341824973156b538f0f731c72c.jpg' },
  { id: 'b7', category: 'BREAKFAST', subcategory: 'toasts', price: 3100, must_try: false, name: { am: 'Տոստ Սաղմոնով', en: 'Salmon Toast' }, image: 'https://i.pinimg.com/1200x/c8/91/07/c891078ecc31f340d2ce317655b97870.jpg' },
  { id: 'b8', category: 'BREAKFAST', subcategory: 'eggs', price: 2100, must_try: false, name: { am: 'Կլասիկ Օմլետ Պանրով / Բեկոնով', en: 'Classic Omelette with Cheese/ Bacon' }, image: 'https://i.pinimg.com/736x/1d/fd/f9/1dfdf974a298afa77d3a29ad3c969c05.jpg' },
  { id: 'b9', category: 'BREAKFAST', subcategory: 'eggs', price: 3600, must_try: true, name: { am: 'Իտալական Նախաճաշ', en: 'Italian Breakfast' }, image: 'https://i.pinimg.com/736x/8f/f6/61/8ff661db012811d366173f9af366c15f.jpg' },
  { id: 'b10', category: 'BREAKFAST', subcategory: 'bowls', price: 2700, must_try: false, name: { am: 'Սիրնիկի', en: 'Sirniki' }, image: 'https://i.pinimg.com/1200x/6d/3d/59/6d3d5968f1f7e4a261225b4ec9b23356.jpg' },
  { id: 'b11', category: 'BREAKFAST', subcategory: 'bowls', price: 1300, must_try: false, name: { am: 'Չիա Պուդինգ', en: 'Chia Pudding' }, image: 'https://i.pinimg.com/1200x/d7/93/45/d7934552c10029c6fac087f15589fd76.jpg' },
  { id: 'b12', category: 'BREAKFAST', subcategory: 'bowls', price: 1400, must_try: false, name: { am: 'Գրանոլա Բոուլ', en: 'Granola bowl' }, image: 'https://i.pinimg.com/736x/98/a6/64/98a6649e502d938413873280ae3668db.jpg' },

  // ==========================================
  // STARTERS (Նախուտեստներ)
  // ==========================================
  { id: 's1', category: 'STARTERS', subcategory: 'cold', price: 1100, must_try: false, name: { am: 'Մեծ Ֆոկաչա', en: 'Whole Big Focaccia' }, image: 'https://i.pinimg.com/1200x/cc/b4/ad/ccb4ad6f167515827de0a53f24bcf08e.jpg' },
  { id: 's2', category: 'STARTERS', subcategory: 'cold', price: 2300, must_try: true, name: { am: 'Սաղմոն Գրավլաքս', en: 'Salmon Gravlax' }, image: 'https://i.pinimg.com/736x/b4/72/9d/b4729d49e69c12988290ab246b85ea8a.jpg' },
  { id: 's3', category: 'STARTERS', subcategory: 'cold', price: 2900, must_try: false, name: { am: 'Ստրատչատելլա Պանիր', en: 'Stracciatella' }, image: 'https://i.pinimg.com/1200x/4f/da/d8/4fdad8d3e0296253991ec85cfd550fd0.jpg' },
  { id: 's4', category: 'STARTERS', subcategory: 'cold', price: 4800, must_try: false, name: { am: 'Վիտելլո Տոննատո', en: 'Vitello Tonnato' }, image: 'https://i.pinimg.com/1200x/e7/17/59/e717599d471751657bc5affa6cf073c2.jpg' },
  { id: 's5', category: 'STARTERS', subcategory: 'cold', price: 2300, must_try: false, name: { am: 'Բրուսկետա Լոլիկով', en: 'Bruschetta Tomato' }, image: 'https://i.pinimg.com/736x/a7/dd/a7/a7dda79bf18ad5f5dc18c14ed31cca23.jpg' },
  { id: 's6', category: 'STARTERS', subcategory: 'hot', price: 2600, must_try: false, name: { am: 'Ուզո Ծովախեցգետիններ', en: 'Ouzo Shrimps' }, image: 'https://i.pinimg.com/1200x/88/58/9c/88589cc42aab386d133c9a715005e21f.jpg' },
  { id: 's7', category: 'STARTERS', subcategory: 'hot', price: 3600, must_try: true, name: { am: 'Ծովամթերքի Սոտե', en: 'Seafood Saute' }, image: 'https://i.pinimg.com/736x/2a/5c/cf/2a5ccfc188cad61ae32d2a2bdf121765.jpg' },

  // ==========================================
  // SALUT SPECIALS
  // ==========================================
  { id: 'sp1', category: 'SALUT_SPECIALS', subcategory: 'special', price: 4500, must_try: false, name: { am: 'Պոկե Սաղմոնով', en: 'Salmon Poke' }, image: 'https://www.pinterest.com/pin/1114500239058072496/' },
  { id: 'sp2', category: 'SALUT_SPECIALS', subcategory: 'special', price: 3900, must_try: false, name: { am: 'Պոկե Գրիլ Հավով', en: 'Grilled Chicken Poke' }, image: '' },
  { id: 'sp3', category: 'SALUT_SPECIALS', subcategory: 'special', price: 3400, must_try: false, name: { am: 'Կրուասան Սենդվիչ', en: 'Croissant Sandwich' }, image: '' },

  // ==========================================
  // SOUPS (Ապուրներ)
  // ==========================================
  { id: 'so1', category: 'SOUPS', subcategory: 'soups', price: 2800, must_try: true, name: { am: 'Լոլիկով Ապուր Ստրատչատելլայով', en: 'Tomato Soup, Stracciatella' }, image: '' },
  { id: 'so2', category: 'SOUPS', subcategory: 'soups', price: 2600, must_try: false, name: { am: 'Հավով Ապուր բանջարեղենով և Կիֆերի պաստայով', en: 'Chicken Soup, veggies, Chifferi Pasta' }, image: '' },

  // ==========================================
  // SALADS (Աղցաններ)
  // ==========================================
  { id: 'sl1', category: 'SALADS', subcategory: 'salads', price: 3900, must_try: false, name: { am: 'Խրթխրթան Հավով Աղցան', en: 'Crispy chicken Salad' }, image: '' },
  { id: 'sl2', category: 'SALADS', subcategory: 'salads', price: 3700, must_try: true, name: { am: 'Քինոայով Աղցան', en: 'Quinoa Salad' }, image: '' },
  { id: 'sl3', category: 'SALADS', subcategory: 'salads', price: 3200, must_try: false, name: { am: 'Պանցանելլա Աղցան', en: 'Panzanella Salad' }, image: '' },
  { id: 'sl4', category: 'SALADS', subcategory: 'salads', price: 3600, must_try: false, name: { am: 'Կանաչ Աղցան', en: 'Green Salad' }, image: '' },

  // ==========================================
  // PASTA (Պաստա)
  // ==========================================
  { id: 'p1', category: 'PASTA', subcategory: 'pasta', price: 3300, must_try: false, name: { am: 'Կարբոնարա', en: 'Carbonara' }, image: '' },
  { id: 'p2', category: 'PASTA', subcategory: 'pasta', price: 3500, must_try: true, name: { am: 'Բոլոնյեզե Ռագու', en: 'Bolognese Ragu' }, image: '' },
  { id: 'p3', category: 'PASTA', subcategory: 'pasta', price: 3100, must_try: true, name: { am: 'Լոլիկով Պաստա', en: 'Tomato pasta' }, image: '' },
  { id: 'p4', category: 'PASTA', subcategory: 'pasta', price: 3600, must_try: false, name: { am: 'Պաստա Ալֆրեդո', en: 'Pasta Alfredo' }, image: '' },
  { id: 'p5', category: 'PASTA', subcategory: 'pasta', price: 3200, must_try: false, name: { am: 'Պեստո Պաստա', en: 'Pesto Pasta' }, image: '' },

  // ==========================================
  // SANDWICHES (Սենդվիչներ)
  // ==========================================
  { id: 'sd1', category: 'SANDWICHES', subcategory: 'sandwiches', price: 3200, must_try: true, name: { am: 'Կեսար Սենդվիչ', en: 'Caesar Sandwich' }, image: '' },
  { id: 'sd2', category: 'SANDWICHES', subcategory: 'sandwiches', price: 3900, must_try: false, name: { am: 'Պրոշուտո Սենդվիչ', en: 'Prosciutto' }, image: '' },
  { id: 'sd3', category: 'SANDWICHES', subcategory: 'sandwiches', price: 3800, must_try: true, name: { am: 'Ռոստբիֆ Սենդվիչ (Տավարի մսով)', en: 'Roast Beef sandwich' }, image: '' },

  // ==========================================
  // MAIN COURSE (Հիմնական Ուտեստներ)
  // ==========================================
  { id: 'm1', category: 'MAIN_COURSE', subcategory: 'meat_fish', price: 7100, must_try: true, name: { am: 'Անգուս Նյու Յորք Սթեյք', en: 'Angus New York Steak' }, image: '' },
  { id: 'm2', category: 'MAIN_COURSE', subcategory: 'meat_fish', price: 4200, must_try: false, name: { am: 'Հավի Կրծքամիս Գրիլ', en: 'Grilled Chicken Breast' }, image: '' },
  { id: 'm3', category: 'MAIN_COURSE', subcategory: 'meat_fish', price: 7600, must_try: false, name: { am: 'Սաղմոնի Սթեյք', en: 'Salmon Steak' }, image: '' },
  { id: 'm4', category: 'MAIN_COURSE', subcategory: 'meat_fish', price: 3800, must_try: true, name: { am: 'Հավը Տոսկանյան Ձևով', en: 'Tscan style chicken' }, image: '' },

  // ==========================================
  // FRIES & MORE (Ֆրի և Սոուսներ)
  // ==========================================
  { id: 'f1', category: 'FRIES_MORE', subcategory: 'fries', price: 1800, must_try: false, name: { am: 'Կարտոֆիլ Ֆրի՝ Պանրի Սոուսով և Կետչուպով', en: 'French Fries, Cheese Sauce & Ketchup' }, image: '' },
  { id: 'f2', category: 'FRIES_MORE', subcategory: 'fries', price: 2300, must_try: false, name: { am: 'Պանրե Գնդիկներ՝ Լոլիկի Սոուսով', en: 'Cheese Balls, Tomato Sauce' }, image: '' },
  { id: 'f3', category: 'FRIES_MORE', subcategory: 'sauces', price: 500, must_try: false, name: { am: 'Պանրի Սոուս', en: 'Cheese Sauce' }, image: '' },
  { id: 'f4', category: 'FRIES_MORE', subcategory: 'sauces', price: 1000, must_try: false, name: { am: 'Կետչուպ', en: 'Ketchup' }, image: '' },
  { id: 'f5', category: 'FRIES_MORE', subcategory: 'sauces', price: 800, must_try: false, name: { am: 'Գորգոնզոլա Սոուս', en: 'Gorgonzola Sauce' }, image: '' },
  { id: 'f6', category: 'FRIES_MORE', subcategory: 'sauces', price: 800, must_try: false, name: { am: 'Պեստո Սոուս', en: 'Pesto Sauce' }, image: '' },
  { id: 'f7', category: 'FRIES_MORE', subcategory: 'sauces', price: 800, must_try: false, name: { am: 'Պեստո Մայոնեզ', en: 'Pesto Mayo' }, image: '' },
  { id: 'f8', category: 'FRIES_MORE', subcategory: 'sauces', price: 800, must_try: false, name: { am: 'Մանանեխի Մայոնեզ', en: 'Mustard Mayo' }, image: '' }
];

export const restaurantConfig = {
  currency: '֏',
  serviceCharge: 0.10, 
  pastaNote: 'Ընտրեք ձեր տնական պաստան (Տալյատելե կամ Սպագետի)'
};