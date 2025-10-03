// Navigation data configuration
const navigation = {
  categories: [
    {
      id: 'women',
      name: 'Women',
      href: '/womensproduct',
      featured: [
        {
          name: 'New Arrivals',
          href: '/women/new-arrivals',
          imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Best Sellers',
          href: '/women/best-sellers',
          imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          href: '/womensproduct',
          items: [
            { name: 'Tops', href: '/women/clothing/tops' },
            { name: 'Dresses', href: '/women/clothing/dresses' },
            { name: 'Pants', href: '/women/clothing/pants' },
            { name: 'Denim', href: '/women/clothing/denim' },
            { name: 'Sweaters', href: '/women/clothing/sweaters' },
            { name: 'T-Shirts', href: '/women/clothing/t-shirts' },
            { name: 'Jackets', href: '/women/clothing/jackets' },
            { name: 'Activewear', href: '/women/clothing/activewear' },
            { name: 'Browse All', href: '/WomensProductCategoryPage' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          href: '/womensproduct',
          items: [
            { name: 'Zara', href: '/women/brands/zara' },
            { name: 'H&M', href: '/women/brands/hm' },
            { name: 'Forever 21', href: '/women/brands/forever21' },
            { name: 'Nike', href: '/women/brands/nike' },
            { name: 'Adidas', href: '/women/brands/adidas' },
          ],
        },
      ],
    },
    {
      id: 'men',
      name: 'Men',
      href: '/mensproduct',
      featured: [
        {
          name: 'New Arrivals',
          href: '/men/new-arrivals',
          imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Trending Now',
          href: '/men/trending',
          imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt: 'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          href: '/mensproduct',
          items: [
            { name: 'T-Shirts', href: '/men/clothing/t-shirts' },
            { name: 'Shirts', href: '/men/clothing/shirts' },
            { name: 'Pants', href: '/men/clothing/pants' },
            { name: 'Jeans', href: '/men/clothing/jeans' },
            { name: 'Sweaters', href: '/men/clothing/sweaters' },
            { name: 'Jackets', href: '/men/clothing/jackets' },
            { name: 'Activewear', href: '/men/clothing/activewear' },
            { name: 'Browse All', href: '/MensProductCategoryPage' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          href: '/mensproduct',
          items: [
            { name: 'Nike', href: '/men/brands/nike' },
            { name: 'Adidas', href: '/men/brands/adidas' },
            { name: 'Levi\'s', href: '/men/brands/levis' },
            { name: 'Tommy Hilfiger', href: '/men/brands/tommy' },
            { name: 'Calvin Klein', href: '/men/brands/ck' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'Sale', href: '/sale' },
    { name: 'Brands', href: '/brand' },
  ],
};

// User menu items
export const userMenuItems = [
  { name: 'My Account', href: '/userprofile' },
  { name: 'My Orders', href: '/myorderspage' },
  { name: 'My Wishlist', href: '/mywishlistpage' },
  { name: 'My Rewards', href: '/myrewardspage' },
  { name: 'Gift Cards', href: '/giftcardspage' },
];

export default navigation;