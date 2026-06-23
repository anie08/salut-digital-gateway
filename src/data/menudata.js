// src/data/menudata.js

export const menuItems = [
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

  { id: 's1', category: 'STARTERS', subcategory: 'cold', price: 1100, must_try: false, name: { am: 'Մեծ Ֆոկաչա', en: 'Whole Big Focaccia' }, image: 'https://i.pinimg.com/1200x/cc/b4/ad/ccb4ad6f167515827de0a53f24bcf08e.jpg' },
  { id: 's2', category: 'STARTERS', subcategory: 'cold', price: 2300, must_try: true, name: { am: 'Սաղմոն Գրավլաքս', en: 'Salmon Gravlax' }, image: 'https://i.pinimg.com/736x/b4/72/9d/b4729d49e69c12988290ab246b85ea8a.jpg' },
  { id: 's3', category: 'STARTERS', subcategory: 'cold', price: 2900, must_try: false, name: { am: 'Ստրատչատելլա Պանիր', en: 'Stracciatella' }, image: 'https://i.pinimg.com/1200x/4f/da/d8/4fdad8d3e0296253991ec85cfd550fd0.jpg' },
  { id: 's4', category: 'STARTERS', subcategory: 'cold', price: 4800, must_try: false, name: { am: 'Վիտելլո Տոննատո', en: 'Vitello Tonnato' }, image: 'https://i.pinimg.com/1200x/e7/17/59/e717599d471751657bc5affa6cf073c2.jpg' },
  { id: 's5', category: 'STARTERS', subcategory: 'cold', price: 2300, must_try: false, name: { am: 'Բրուսկետա Լոլիկով', en: 'Bruschetta Tomato' }, image: 'https://i.pinimg.com/736x/a7/dd/a7/a7dda79bf18ad5f5dc18c14ed31cca23.jpg' },
  { id: 's6', category: 'STARTERS', subcategory: 'hot', price: 2600, must_try: false, name: { am: 'Ուզո Ծովախեցգետիններ', en: 'Ouzo Shrimps' }, image: 'https://i.pinimg.com/1200x/88/58/9c/88589cc42aab386d133c9a715005e21f.jpg' },
  { id: 's7', category: 'STARTERS', subcategory: 'hot', price: 3600, must_try: true, name: { am: 'Ծովամթերքի Սոտե', en: 'Seafood Saute' }, image: 'https://i.pinimg.com/736x/2a/5c/cf/2a5ccfc188cad61ae32d2a2bdf121765.jpg' },

  { id: 'sp1', category: 'SALUT_SPECIALS', subcategory: 'special', price: 4500, must_try: false, name: { am: 'Պոկե Սաղմոնով', en: 'Salmon Poke' }, image: 'https://i.pinimg.com/736x/de/69/37/de69376bd8e15447781b40280ebdbb10.jpg' },
  { id: 'sp2', category: 'SALUT_SPECIALS', subcategory: 'special', price: 3900, must_try: false, name: { am: 'Պոկե Գրիլ Հավով', en: 'Grilled Chicken Poke' }, image: 'https://i.pinimg.com/736x/5b/4b/31/5b4b31a8bc8f7961b369cc5faecdf4ec.jpg' },
  { id: 'sp3', category: 'SALUT_SPECIALS', subcategory: 'special', price: 3400, must_try: false, name: { am: 'Կրուասան Սենդվիչ', en: 'Croissant Sandwich' }, image: 'https://i.pinimg.com/736x/b2/28/05/b228054bc11ec189c4ec3ffdf6a3e639.jpg' },

  { id: 'so1', category: 'SOUPS', subcategory: 'soups', price: 2800, must_try: true, name: { am: 'Լոլիկով Ապուր Ստրատչատելլայով', en: 'Tomato Soup, Stracciatella' }, image: 'https://i.pinimg.com/736x/95/fe/ea/95feea93e38719cb49774900fbfe0921.jpg' },
  { id: 'so2', category: 'SOUPS', subcategory: 'soups', price: 2600, must_try: false, name: { am: 'Հավով Ապուր բանջարեղենով և Կիֆերի պաստայով', en: 'Chicken Soup, veggies, Chifferi Pasta' }, image: 'https://i.pinimg.com/736x/b2/b4/eb/b2b4eb14dbd71d37b1cc1b2505be91b9.jpg' },

  { id: 'sl1', category: 'SALADS', subcategory: 'salads', price: 3900, must_try: false, name: { am: 'Խրթխրթան Հավով Աղցան', en: 'Crispy chicken Salad' }, image: 'https://i.pinimg.com/736x/be/9b/3b/be9b3be28ca87352358fbce1da9a4b3f.jpg' },
  { id: 'sl2', category: 'SALADS', subcategory: 'salads', price: 3700, must_try: true, name: { am: 'Քինոայով Աղցան', en: 'Quinoa Salad' }, image: 'https://i.pinimg.com/736x/7b/25/7f/7b257fc563ff43fbf88944f3b7d15993.jpg' },
  { id: 'sl3', category: 'SALADS', subcategory: 'salads', price: 3200, must_try: false, name: { am: 'Պանցանելլա Աղցան', en: 'Panzanella Salad' }, image: 'https://i.pinimg.com/736x/94/d4/07/94d4078dfbb177da209772a44733ebdf.jpg' },
  { id: 'sl4', category: 'SALADS', subcategory: 'salads', price: 3600, must_try: false, name: { am: 'Կանաչ Աղցան', en: 'Green Salad' }, image: 'https://i.pinimg.com/736x/01/fa/26/01fa2667b9319e34988713028fb43cb1.jpg' },

  { id: 'p1', category: 'PASTA', subcategory: 'pasta', price: 3300, must_try: false, name: { am: 'Կարբոնարա', en: 'Carbonara' }, image: 'https://i.pinimg.com/736x/54/6c/a7/546ca79d8540b080f8007cf7b539c394.jpg' },
  { id: 'p2', category: 'PASTA', subcategory: 'pasta', price: 3500, must_try: true, name: { am: 'Բոլոնյեզե Ռագու', en: 'Bolognese Ragu' }, image: 'https://i.pinimg.com/736x/92/9d/9e/929d9e68b3c659bf5e2279fa06709f7a.jpg' },
  { id: 'p3', category: 'PASTA', subcategory: 'pasta', price: 3100, must_try: true, name: { am: 'Լոլիկով Պաստա', en: 'Tomato pasta' }, image: 'https://i.pinimg.com/736x/21/fb/91/21fb9121c97c631e6b3fa2d7d8b5ec1e.jpg' },
  { id: 'p4', category: 'PASTA', subcategory: 'pasta', price: 3600, must_try: false, name: { am: 'Պաստա Ալֆրեդո', en: 'Pasta Alfredo' }, image: 'https://i.pinimg.com/736x/67/fa/d3/67fad308ec8b111b7b0492160d5e1b21.jpg' },
  { id: 'p5', category: 'PASTA', subcategory: 'pasta', price: 3200, must_try: false, name: { am: 'Պեստո Պաստա', en: 'Pesto Pasta' }, image: 'https://i.pinimg.com/736x/cd/6c/1c/cd6c1ccd15456fef342f5348b64e0df1.jpg' },

  { id: 'sd1', category: 'SANDWICHES', subcategory: 'sandwiches', price: 3200, must_try: true, name: { am: 'Կեսար Սենդվիչ', en: 'Caesar Sandwich' }, image: 'https://i.pinimg.com/736x/e4/c4/85/e4c48529e8c46002c9180765955ec843.jpg' },
  { id: 'sd2', category: 'SANDWICHES', subcategory: 'sandwiches', price: 3900, must_try: false, name: { am: 'Պրոշուտո Սենդվիչ', en: 'Prosciutto' }, image: 'https://i.pinimg.com/736x/91/e2/2e/91e22e9e2b10a2bb12fa4fe83f9801f1.jpg' },
  { id: 'sd3', category: 'SANDWICHES', subcategory: 'sandwiches', price: 3800, must_try: true, name: { am: 'Ռոստբիֆ Սենդվիչ (Տավարի մսով)', en: 'Roast Beef sandwich' }, image: 'https://i.pinimg.com/736x/fb/ef/be/fbefbe8471e46bc9b7b952b75a6be960.jpg' },

  { id: 'm1', category: 'MAIN_COURSE', subcategory: 'meat_fish', price: 7100, must_try: true, name: { am: 'Անգուս Նյու Յորք Սթեյք', en: 'Angus New York Steak' }, image: 'https://i.pinimg.com/736x/a2/79/61/a279612c2067756d11f6be2b2bf7fcd4.jpg' },
  { id: 'm2', category: 'MAIN_COURSE', subcategory: 'meat_fish', price: 4200, must_try: false, name: { am: 'Հավի Կրծքամիս Գրիլ', en: 'Grilled Chicken Breast' }, image: 'https://i.pinimg.com/736x/ff/47/4d/ff474d2091fb77732432a67a07fc26fb.jpg' },
  { id: 'm3', category: 'MAIN_COURSE', subcategory: 'meat_fish', price: 7600, must_try: false, name: { am: 'Սաղմոնի Սթեյք', en: 'Salmon Steak' }, image: 'https://i.pinimg.com/736x/e4/c4/62/e4c462370726d400192df6655b38f8fc.jpg' },
  { id: 'm4', category: 'MAIN_COURSE', subcategory: 'meat_fish', price: 3800, must_try: true, name: { am: 'Հավը Տոսկանյան Ձևով', en: 'Tscan style chicken' }, image: 'https://i.pinimg.com/736x/53/78/30/537830b561c28b5779c1b3df6691494e.jpg' },

  { id: 'f1', category: 'FRIES_MORE', subcategory: 'fries', price: 1800, must_try: false, name: { am: 'Կարտոֆիլ Ֆրի՝ Պանրի Սոուսով և Կետչուպով', en: 'French Fries, Cheese Sauce & Ketchup' }, image: 'https://i.pinimg.com/736x/60/c8/53/60c8535db20dfbda3cfb06df480746cb.jpg' },
  { id: 'f2', category: 'FRIES_MORE', subcategory: 'fries', price: 2300, must_try: false, name: { am: 'Պանրե Գնդիկներ՝ Լոլիկի Սոուսով', en: 'Cheese Balls, Tomato Sauce' }, image: 'https://i.pinimg.com/736x/db/2f/1b/db2f1bb653457a44be495b5832a81f3b.jpg' },
  { id: 'f3', category: 'FRIES_MORE', subcategory: 'sauces', price: 500, must_try: false, name: { am: 'Պանրի Սոուս', en: 'Cheese Sauce' }, image: 'https://i.pinimg.com/736x/62/17/74/6217740f9076b170bebebb94fae7fc63.jpg' },
  { id: 'f4', category: 'FRIES_MORE', subcategory: 'sauces', price: 1000, must_try: false, name: { am: 'Կետչուպ', en: 'Ketchup' }, image: 'https://i.pinimg.com/736x/bd/6d/92/bd6d92ec335fa0dfbe61bc8f0477150a.jpg' },
  { id: 'f5', category: 'FRIES_MORE', subcategory: 'sauces', price: 800, must_try: false, name: { am: 'Գորգոնզոլա Սոուս', en: 'Gorgonzola Sauce' }, image: 'https://i.pinimg.com/736x/be/da/90/beda90fa4d1737f59fbf6cfd33cf2093.jpg' },
  { id: 'f6', category: 'FRIES_MORE', subcategory: 'sauces', price: 800, must_try: false, name: { am: 'Պեստո Սոուս', en: 'Pesto Sauce' }, image: 'https://i.pinimg.com/736x/32/34/0c/32340cafbdf591d2938f26db3876be8c.jpg' },
  { id: 'f7', category: 'FRIES_MORE', subcategory: 'sauces', price: 800, must_try: false, name: { am: 'Պեստո Մայոնեզ', en: 'Pesto Mayo' }, image: 'https://i.pinimg.com/736x/bc/6d/4d/bc6d4d03e916fc413a936a7183e8fa97.jpg' },
  { id: 'f8', category: 'FRIES_MORE', subcategory: 'sauces', price: 800, must_try: false, name: { am: 'Մանանեխի Մայոնեզ', en: 'Mustard Mayo' }, image: 'https://i.pinimg.com/736x/21/53/b7/2153b763ec4cbfa2066faeb0cfb87b74.jpg' }
];
