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

export const menuItems = [
  // ==========================================
  // BREAKFAST (Նախաճաշ)
  // ==========================================
  { id: 'b1', category: 'BREAKFAST', price: 1900, must_try: false, name: { am: 'Սքրեմբլ (Հարված ձվեր)', en: 'Scrambled Eggs' } },
  { id: 'b2', category: 'BREAKFAST', price: 3000, must_try: false, name: { am: 'Էգգս Բենեդիկտ', en: 'Eggs Benedict' } },
  { id: 'b3', category: 'BREAKFAST', price: 3600, must_try: false, name: { am: 'Բենեդիկտ Սաղմոնով', en: 'Salmon Benedict' } },
  { id: 'b4', category: 'BREAKFAST', price: 2600, must_try: false, name: { am: 'Ավոկադո Տոստ', en: 'Avocado Toast' } },
  { id: 'b5', category: 'BREAKFAST', price: 3600, must_try: false, name: { am: 'Լիարժեք Անգլիական Նախաճաշ', en: 'Full English Breakfast' } },
  { id: 'b6', category: 'BREAKFAST', price: 2600, must_try: true, name: { am: 'Հայկական Ձվածեղ Լոլիկով', en: 'Armenian Tomato Scramble' } },
  { id: 'b7', category: 'BREAKFAST', price: 3100, must_try: false, name: { am: 'Տոստ Սաղմոնով', en: 'Salmon Toast' } },
  { id: 'b8', category: 'BREAKFAST', price: 2100, must_try: false, name: { am: 'Կլասիկ Օմլետ Պանրով / Բեկոնով', en: 'Classic Omelette with Cheese/ Bacon' } },
  { id: 'b9', category: 'BREAKFAST', price: 3600, must_try: true, name: { am: 'Իտալական Նախաճաշ', en: 'Italian Breakfast' } },
  { id: 'b10', category: 'BREAKFAST', price: 2700, must_try: false, name: { am: 'Սիրնիկի', en: 'Sirniki' } },
  { id: 'b11', category: 'BREAKFAST', price: 1300, must_try: false, name: { am: 'Չիա Պուդինգ', en: 'Chia Pudding' } },
  { id: 'b12', category: 'BREAKFAST', price: 1400, must_try: false, name: { am: 'Գրանոլա Բոուլ', en: 'Granola bowl' } },

  // ==========================================
  // STARTERS (Նախուտեստներ)
  // ==========================================
  { id: 's1', category: 'STARTERS', price: 1100, must_try: false, name: { am: 'Մեծ Ֆոկաչա', en: 'Whole Big Focaccia' } },
  { id: 's2', category: 'STARTERS', price: 2300, must_try: true, name: { am: 'Սաղմոն Գրավլաքս', en: 'Salmon Gravlax' } },
  { id: 's3', category: 'STARTERS', price: 2900, must_try: false, name: { am: 'Ստրատչատելլա Պանիր', en: 'Stracciatella' } },
  { id: 's4', category: 'STARTERS', price: 4800, must_try: false, name: { am: 'Վիտելլո Տոննատո', en: 'Vitello Tonnato' } },
  { id: 's5', category: 'STARTERS', price: 2300, must_try: false, name: { am: 'Բրուսկետա Լոլիկով', en: 'Bruschetta Tomato' } },
  { id: 's6', category: 'STARTERS', price: 2600, must_try: false, name: { am: 'Ուզո Ծովախեցգետիններ', en: 'Ouzo Shrimps' } },
  { id: 's7', category: 'STARTERS', price: 3600, must_try: true, name: { am: 'Ծովամթերքի Սոտե', en: 'Seafood Saute' } },

  // ==========================================
  // SALUT SPECIALS
  // ==========================================
  { id: 'sp1', category: 'SALUT_SPECIALS', price: 4500, must_try: false, name: { am: 'Պոկե Սաղմոնով', en: 'Salmon Poke' } },
  { id: 'sp2', category: 'SALUT_SPECIALS', price: 3900, must_try: false, name: { am: 'Պոկե Գրիլ Հավով', en: 'Grilled Chicken Poke' } },
  { id: 'sp3', category: 'SALUT_SPECIALS', price: 3400, must_try: false, name: { am: 'Կրուասան Սենդվիչ', en: 'Croissant Sandwich' } },

  // ==========================================
  // SOUPS (Ապուրներ)
  // ==========================================
  { id: 'so1', category: 'SOUPS', price: 2800, must_try: true, name: { am: 'Լոլիկով Ապուր Ստրատչատելլայով', en: 'Tomato Soup, Stracciatella' } },
  { id: 'so2', category: 'SOUPS', price: 2600, must_try: false, name: { am: 'Հավով Ապուր բանջարեղենով և Կիֆերի պաստայով', en: 'Chicken Soup, veggies, Chifferi Pasta' } },

  // ==========================================
  // SALADS (Աղցաններ)
  // ==========================================
  { id: 'sl1', category: 'SALADS', price: 3900, must_try: false, name: { am: 'Խրթխրթան Հավով Աղցան', en: 'Crispy chicken Salad' } },
  { id: 'sl2', category: 'SALADS', price: 3700, must_try: true, name: { am: 'Քինոայով Աղցան', en: 'Quinoa Salad' } },
  { id: 'sl3', category: 'SALADS', price: 3200, must_try: false, name: { am: 'Պանցանելլա Աղցան', en: 'Panzanella Salad' } },
  { id: 'sl4', category: 'SALADS', price: 3600, must_try: false, name: { am: 'Կանաչ Աղցան', en: 'Green Salad' } },

  // ==========================================
  // PASTA (Պաստա) - Նշում՝ Ընտրեք ձեր տնական պաստան (Տալյատելե, Սպագետի)
  // ==========================================
  { id: 'p1', category: 'PASTA', price: 3300, must_try: false, name: { am: 'Կարբոնարա', en: 'Carbonara' } },
  { id: 'p2', category: 'PASTA', price: 3500, must_try: true, name: { am: 'Բոլոնյեզե Ռագու', en: 'Bolognese Ragu' } },
  { id: 'p3', category: 'PASTA', price: 3100, must_try: true, name: { am: 'Լոլիկով Պաստա', en: 'Tomato pasta' } },
  { id: 'p4', category: 'PASTA', price: 3600, must_try: false, name: { am: 'Պաստա Ալֆրեդո', en: 'Pasta Alfredo' } },
  { id: 'p5', category: 'PASTA', price: 3200, must_try: false, name: { am: 'Պեստո Պաստա', en: 'Pesto Pasta' } },

  // ==========================================
  // SANDWICHES (Սենդվիչներ)
  // ==========================================
  { id: 'sd1', category: 'SANDWICHES', price: 3200, must_try: true, name: { am: 'Կեսար Սենդվիչ', en: 'Caesar Sandwich' } },
  { id: 'sd2', category: 'SANDWICHES', price: 3900, must_try: false, name: { am: 'Պրոշուտո Սենդվիչ', en: 'Prosciutto' } },
  { id: 'sd3', category: 'SANDWICHES', price: 3800, must_try: true, name: { am: 'Ռոստբիֆ Սենդվիչ (Տավարի մսով)', en: 'Roast Beef sandwich' } },

  // ==========================================
  // MAIN COURSE (Հիմնական Ուտեստներ)
  // ==========================================
  { id: 'm1', category: 'MAIN_COURSE', price: 7100, must_try: true, name: { am: 'Անգուս Նյու Յորք Սթեյք', en: 'Angus New York Steak' } },
  { id: 'm2', category: 'MAIN_COURSE', price: 4200, must_try: false, name: { am: 'Հավի Կրծքամիս Գրիլ', en: 'Grilled Chicken Breast' } },
  { id: 'm3', category: 'MAIN_COURSE', price: 7600, must_try: false, name: { am: 'Սաղմոնի Սթեյք', en: 'Salmon Steak' } },
  { id: 'm4', category: 'MAIN_COURSE', price: 3800, must_try: true, name: { am: 'Հավը Տոսկանյան Ձևով', en: 'Tscan style chicken' } },

  // ==========================================
  // FRIES & MORE (Ֆրի և Սոուսներ)
  // ==========================================
  { id: 'f1', category: 'FRIES_MORE', price: 1800, must_try: false, name: { am: 'Կարտոֆիլ Ֆրի՝ Պանրի Սոուսով և Կետչուպով', en: 'French Fries, Cheese Sauce & Ketchup' } },
  { id: 'f2', category: 'FRIES_MORE', price: 2300, must_try: false, name: { am: 'Պանրե Գնդիկներ՝ Լոլիկի Սոուսով', en: 'Cheese Balls, Tomato Sauce' } },
  { id: 'f3', category: 'FRIES_MORE', price: 500, must_try: false, name: { am: 'Պանրի Սոուս', en: 'Cheese Sauce' } },
  { id: 'f4', category: 'FRIES_MORE', price: 1000, must_try: false, name: { am: 'Կետչուպ', en: 'Ketchup' } },
  { id: 'f5', category: 'FRIES_MORE', price: 800, must_try: false, name: { am: 'Գորգոնզոլա Սոուս', en: 'Gorgonzola Sauce' } },
  { id: 'f6', category: 'FRIES_MORE', price: 800, must_try: false, name: { am: 'Պեստո Սոուս', en: 'Pesto Sauce' } },
  { id: 'f7', category: 'FRIES_MORE', price: 800, must_try: false, name: { am: 'Պեստո Մայոնեզ', en: 'Pesto Mayo' } },
  { id: 'f8', category: 'FRIES_MORE', price: 800, must_try: false, name: { am: 'Մանանեխի Մայոնեզ', en: 'Mustard Mayo' } }
];

export const restaurantConfig = {
  currency: '֏',
  serviceCharge: 0.10, 
  pastaNote: 'Ընտրեք ձեր տնական պաստան (Տալյատելե կամ Սպագետի)'
};