const products = [
  {
    id: 1,
    name: "Camisa Polo Slim Fit",
    description: "Camisa polo slim fit de alta qualidade, confortável e ideal para ocasiões casuais.",
    price: 79.99,
    category: "Polos",
    sizes: ["P", "M", "G", "GG"],
    colors: ["Azul", "Branco", "Cinza"],
    material: "Algodão",
    brand: "Lacoste",
    stock: 15,
    rating: 4.5,
    images: "https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/outlet360/media/migration/5da5bef01f1bccd98996c4a37855bcd8ca6b8998/246320202b2154849ea.jpg"
  },
  {
    id: 2,
    name: "Camisa Casual Manga Longa",
    description: "Camisa casual de manga longa, leve e confortável, ideal para clima fresco.",
    price: 99.90,
    category: "Casual",
    sizes: ["P", "M", "G", "GG", "XG"],
    colors: ["Branco", "Preto", "Verde"],
    material: "Poliéster e algodão",
    brand: "Zara",
    stock: 20,
    rating: 4.3,
    images: ''
  },
  {
    id: 3,
    name: "Camisa Xadrez Flanelada",
    description: "Camisa xadrez de flanela, perfeita para looks despojados em dias mais frios.",
    price: 89.99,
    category: "Casual",
    sizes: ["P", "M", "G", "GG"],
    colors: ["Vermelho", "Azul", "Verde"],
    material: "Algodão e poliéster",
    brand: "H&M",
    stock: 18,
    rating: 4.7,
    images: [
      "camisa_xadrez_vermelho.jpg",
      "camisa_xadrez_azul.jpg",
      "camisa_xadrez_verde.jpg"
    ]
  },
  {
    id: 4,
    name: "Camisa Social Clássica",
    description: "Camisa social clássica, ideal para ambientes formais e profissionais.",
    price: 120.00,
    category: "Social",
    sizes: ["P", "M", "G", "GG", "XG"],
    colors: ["Branco", "Azul Claro"],
    material: "Algodão egípcio",
    brand: "Calvin Klein",
    stock: 10,
    rating: 4.8,
    images: [
      "camisa_social_branco.jpg",
      "camisa_social_azul.jpg"
    ]
  },
  {
    id: 5,
    name: "Camisa Estampada Tropical",
    description: "Camisa estampada com padrão tropical, ideal para dias quentes e descontraídos.",
    price: 59.90,
    category: "Casual",
    sizes: ["P", "M", "G", "GG"],
    colors: ["Amarelo", "Azul Marinho", "Verde"],
    material: "Viscose",
    brand: "Rip Curl",
    stock: 25,
    rating: 4.4,
    images: [
      "camisa_tropical_amarelo.jpg",
      "camisa_tropical_azul.jpg",
      "camisa_tropical_verde.jpg"
    ]
  },
  {
    id: 6,
    name: "Camisa de Linho Leve",
    description: "Camisa de linho leve e respirável, ideal para o verão e climas quentes.",
    price: 110.50,
    category: "Casual",
    sizes: ["P", "M", "G", "GG"],
    colors: ["Bege", "Branco", "Cinza"],
    material: "Linho",
    brand: "Uniqlo",
    stock: 12,
    rating: 4.6,
    images: [
      "camisa_linho_bege.jpg",
      "camisa_linho_branco.jpg",
      "camisa_linho_cinza.jpg"
    ]
  },
  {
    id: 7,
    name: "Camisa Jeans Casual",
    description: "Camisa jeans clássica e versátil, ideal para composições de looks casuais.",
    price: 129.90,
    category: "Jeans",
    sizes: ["P", "M", "G", "GG"],
    colors: ["Azul Escuro", "Azul Claro"],
    material: "Algodão",
    brand: "Levi's",
    stock: 17,
    rating: 4.7,
    images: [
      "camisa_jeans_escuro.jpg",
      "camisa_jeans_claro.jpg"
    ]
  },
  {
    id: 8,
    name: "Camisa Oversized Unissex",
    description: "Camisa oversized para um look despojado e confortável.",
    price: 75.00,
    category: "Casual",
    sizes: ["P", "M", "G", "GG", "XG"],
    colors: ["Preto", "Branco", "Cinza"],
    material: "Algodão",
    brand: "Nike",
    stock: 22,
    rating: 4.2,
    images: [
      "camisa_oversized_preto.jpg",
      "camisa_oversized_branco.jpg",
      "camisa_oversized_cinza.jpg"
    ]
  },
  {
    id: 9,
    name: "Camisa Estilo Militar",
    description: "Camisa estilo militar, resistente e estilosa, com detalhes de bolsos e botões.",
    price: 95.00,
    category: "Casual",
    sizes: ["P", "M", "G", "GG"],
    colors: ["Verde Militar", "Bege"],
    material: "Algodão e poliéster",
    brand: "Columbia",
    stock: 14,
    rating: 4.3,
    images: [
      "camisa_militar_verde.jpg",
      "camisa_militar_bege.jpg"
    ]
  },
  {
    id: 10,
    name: "Camisa Social Slim Fit",
    description: "Camisa social slim fit para um look elegante e moderno em ambientes formais.",
    price: 135.00,
    category: "Social",
    sizes: ["P", "M", "G", "GG"],
    colors: ["Branco", "Preto"],
    material: "Algodão e elastano",
    brand: "Tommy Hilfiger",
    stock: 8,
    rating: 4.9,
    images: [
      "camisa_social_slim_branco.jpg",
      "camisa_social_slim_preto.jpg"
    ]
  },
  {
    id: 11,
    name: "Camisa Básica",
    description: "Camisa básica de algodão, ideal para o dia a dia com conforto e simplicidade.",
    price: 45.00,
    category: "Casual",
    sizes: ["P", "M", "G", "GG", "XG"],
    colors: ["Branco", "Preto", "Cinza", "Azul"],
    material: "Algodão",
    brand: "Hering",
    stock: 30,
    rating: 4.1,
    images: [
      "camisa_basica_branco.jpg",
      "camisa_basica_preto.jpg",
      "camisa_basica_cinza.jpg",
      "camisa_basica_azul.jpg"
    ]
  },
  {
    id: 12,
    name: "Camisa Listrada Slim",
    description: "Camisa listrada com estilo slim fit, perfeita para uma aparência casual elegante.",
    price: 85.50,
    category: "Casual",
    sizes: ["P", "M", "G", "GG"],
    colors: ["Branco e Azul", "Branco e Preto"],
    material: "Algodão",
    brand: "Gap",
    stock: 19,
    rating: 4.5,
    images: [
      "camisa_listrada_azul.jpg",
      "camisa_listrada_preto.jpg"
    ]
  }
];

export default products