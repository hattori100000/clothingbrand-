const sampleListings = [
  {
    title: "Cozy Knit Sweater",
    description: "Stay warm and stylish in this cozy knit sweater. Perfect for chilly evenings by the fireplace.",
    image: {
      filename: "sweaterimage",
      url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 60,
    category: "Sweaters",
    brand: "CozyKnits",
    size: ["S", "M", "L"],
    color: "Beige"
  },
  {
    title: "Vintage Denim Jacket",
    description: "Add a touch of retro style to your wardrobe with this vintage denim jacket. Perfect for casual outings.",
    image: {
      filename: "jacketimage",
      url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    price: 80,
    category: "Jackets",
    brand: "RetroStyle",
    size: ["XS", "S", "M", "L"],
    color: "Blue"
  },
  {
    title: "Striped Cotton T-Shirt",
    description: "Keep it casual and comfortable with this striped cotton t-shirt. Perfect for everyday wear.",
    image: {
      filename: "tshirtimage",
      url: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1396&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    price: 25,
    category: "T-Shirts",
    brand: "CasualComfort",
    size: ["XS", "S", "M", "L", "XL"],
    color: "White"
  },
  {
    title: "Classic Black Blazer",
    description: "Elevate your look with this classic black blazer. Perfect for formal occasions.",
    image: {
      filename: "blazerimage",
      url: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNob2VzfGVufDB8fDB8fHww"
    },
    price: 120,
    category: "Blazers",
    brand: "FormalElegance",
    size: ["S", "M", "L", "XL"],
    color: "Black"
  },
  {
    title: "Ripped Skinny Jeans",
    description: "Achieve a trendy look with these ripped skinny jeans. Perfect for a night out with friends.",
    image: {
      filename: "jeansimage",
      url: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNob2VzfGVufDB8fDB8fHww"
    },
    price: 65,
    category: "Jeans",
    brand: "TrendyDenim",
    size: ["24", "25", "26", "27", "28", "29", "30"],
    color: "Blue"
  },
  {
    title: "Flowy Floral Dress",
    description: "Feel feminine and fabulous in this flowy floral dress. Perfect for a summer garden party.",
    image: {
      filename: "dressimage",
      url: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNob2VzfGVufDB8fDB8fHww"
    },
    price: 90,
    category: "Dresses",
    brand: "FeminineStyle",
    size: ["XS", "S", "M", "L"],
    color: "Pink"
  },
  ({
    title: "Athletic Jogging Pants",
    description: "Stay comfortable and active in these athletic jogging pants. Perfect for a morning run.",
    image: {
      filename: "joggersimage",
      url: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHNob2VzfGVufDB8fDB8fHww",
    },
    price: 45,
    category: "Pants",
    brand: "ActiveWear",
    size: ["XS", "S", "M", "L", "XL"],
    color: "Black"
  })
];

module.exports = { data: sampleListings };
