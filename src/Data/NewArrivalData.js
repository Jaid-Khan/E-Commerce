// NewArrivalData.js
import { products } from './AllProductsData';

// Select 10 items from the products array for new arrivals
// We'll choose a mix of categories and genders
export const newArrivalsData = [
  // Men's Kurtas (2 items)
  {
    id: 1,
    imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/l/4/r/s-sdes507-306-manyavar-original-imagkkzygvmvkbxr.jpeg?q=70",
    brand: "Manyavar",
    title: "Men's Embroidered Silk Kurta",
    color: "Blue",
    discountedPrice: 4999,
    price: 9999,
    discountPercent: 50,
    size: ["S", "M", "L", "XL"],
    quantity: 25,
    topLevelCategory: "Men",
    secondLevelCategory: "Clothing",
    thirdLevelCategory: "mens_kurta",
    description: "Embroidered silk kurta for special occasions",
    gender: "male",
    category: "kurtas"
  },
  {
    id: 3,
    imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/4/g/b/xl-vasmk194wh-vastramay-original-imagsphpzz9dpyu4.jpeg?q=70",
    brand: "Siyaram",
    title: "White Cotton Kurta",
    color: "White",
    discountedPrice: 1299,
    price: 2599,
    discountPercent: 50,
    size: ["M", "L", "XL", "XXL"],
    quantity: 35,
    topLevelCategory: "Men",
    secondLevelCategory: "Clothing",
    thirdLevelCategory: "mens_kurta",
    description: "Pure cotton white kurta for daily wear",
    gender: "male",
    category: "kurtas"
  },

  // Women's Kurtis (2 items)
  {
    id: 16,
    imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/v/7/c/s-lakhnawi-rose-romj-original-imahfyfk4dyfh4y2.jpeg?q=70",
    brand: "Biba",
    title: "Embroidered Anarkali Kurta",
    color: "Pink",
    discountedPrice: 1799,
    price: 3599,
    discountPercent: 50,
    size: ["S", "M", "L"],
    quantity: 28,
    topLevelCategory: "Women",
    secondLevelCategory: "Clothing",
    thirdLevelCategory: "kurti",
    description: "Beautiful embroidered Anarkali kurta",
    gender: "female",
    category: "kurtis"
  },
  {
    id: 19,
    imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/g/k/k/m-shortkr719r-hyten-original-imahgy5au8vxxhum.jpeg?q=70",
    brand: "Biba",
    title: "Red Party Wear Kurti",
    color: "Red",
    discountedPrice: 1999,
    price: 3999,
    discountPercent: 50,
    size: ["S", "M", "L"],
    quantity: 25,
    topLevelCategory: "Women",
    secondLevelCategory: "Clothing",
    thirdLevelCategory: "kurti",
    description: "Elegant red kurti for party wear",
    gender: "female",
    category: "kurtis"
  },

  // Men's Jeans (2 items)
  {
    id: 31,
    imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/jean/p/a/x/32-kjo-91017-slm-slmft-bk-killer-original-imahdfj74ekqybqb.jpeg?q=70",
    brand: "Levi's",
    title: "Slim Fit Jeans",
    color: "Black",
    discountedPrice: 1999,
    price: 3999,
    discountPercent: 50,
    size: ["28", "30", "32", "34"],
    quantity: 40,
    topLevelCategory: "Men",
    secondLevelCategory: "Clothing",
    thirdLevelCategory: "jeans",
    description: "Comfortable slim fit jeans for men",
    gender: "male",
    category: "jeans"
  },
  {
    id: 35,
    imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/jean/b/0/m/36-bomdt138xl52-666dj-d133-bene-kleed-original-imah94kzhk8wbbpy.jpeg?q=70",
    brand: "Jack & Jones",
    title: "Ripped Jeans",
    color: "Light Blue",
    discountedPrice: 2199,
    price: 4399,
    discountPercent: 50,
    size: ["28", "30", "32"],
    quantity: 25,
    topLevelCategory: "Men",
    secondLevelCategory: "Clothing",
    thirdLevelCategory: "jeans",
    description: "Stylish ripped jeans",
    gender: "male",
    category: "jeans"
  },

  // Women's Jeans (1 item)
  {
    id: 46,
    imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/jean/4/v/i/32-women-single-button-high-rise-skinny-fit-stretchable-jeans-original-imagryduunhhqx4p.jpeg?q=70",
    brand: "H&M",
    title: "Skinny Fit Jeans",
    color: "Black",
    discountedPrice: 1299,
    price: 2599,
    discountPercent: 50,
    size: ["26", "28", "30", "32"],
    quantity: 45,
    topLevelCategory: "Women",
    secondLevelCategory: "Clothing",
    thirdLevelCategory: "jeans",
    description: "Comfortable skinny fit jeans for women",
    gender: "female",
    category: "jeans"
  },

  // Men's T-Shirts (1 item)
  {
    id: 56,
    imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/e/x/r/xxl-white-t72-emerald-apparel-trading-original-imahed7g6hagmd5g.jpeg?q=70",
    brand: "Puma",
    title: "Cotton Regular T-Shirt",
    color: "White",
    discountedPrice: 599,
    price: 1199,
    discountPercent: 50,
    size: ["S", "M", "L", "XL"],
    quantity: 60,
    topLevelCategory: "Men",
    secondLevelCategory: "Clothing",
    thirdLevelCategory: "tshirts",
    description: "Comfortable cotton t-shirt for everyday wear",
    gender: "male",
    category: "tshirts"
  },

  // Women's Tops (1 item)
  {
    id: 66,
    imageUrl: "https://rukminim2.flixcart.com/image/612/612/l3q7jww0/top/r/y/e/xl-flipkart-top-eva-yellow-dream-beauty-fashion-original-images739yxdwqgt.jpeg?q=70",
    brand: "Zara",
    title: "Casual Summer Top",
    color: "Yellow",
    discountedPrice: 799,
    price: 1599,
    discountPercent: 50,
    size: ["S", "M", "L"],
    quantity: 50,
    topLevelCategory: "Women",
    secondLevelCategory: "Clothing",
    thirdLevelCategory: "tops",
    description: "Casual summer top for women",
    gender: "female",
    category: "tops"
  },

  // Women's Dresses (1 item)
  {
    id: 86,
    imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/dress/k/y/d/s-ds00bk1111-zummer-original-imahghudmv5ffufe.jpeg?q=70",
    brand: "H&M",
    title: "Summer Floral Dress",
    color: "Multicolor",
    discountedPrice: 1499,
    price: 2999,
    discountPercent: 50,
    size: ["S", "M", "L"],
    quantity: 30,
    topLevelCategory: "Women",
    secondLevelCategory: "Clothing",
    thirdLevelCategory: "dresses",
    description: "Beautiful floral summer dress",
    gender: "female",
    category: "dresses"
  }
];

// Alternative: Function to get random new arrivals from products
export const getRandomNewArrivals = (count = 10) => {
  const shuffled = [...products].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Alternative: Function to get latest products (assuming higher IDs are newer)
export const getLatestProducts = (count = 10) => {
  return [...products]
    .sort((a, b) => b.id - a.id)
    .slice(0, count);
};

export default newArrivalsData;