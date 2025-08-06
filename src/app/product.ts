// src/app/product.ts
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discount: number;
  imageUrl: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'iPhone 15 Pro Max',
    description: 'Màn hình 6.7 inch, chip A17 Pro, RAM 8GB, bộ nhớ 256GB',
    price: 34990000,
    discount: 0.95,
    imageUrl: 'https://cdn2.cellphones.com.vn/x/media/catalog/product/i/p/iphone-16-pro-max.png'
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24 Ultra',
    description: 'Màn hình 6.8 inch, Snapdragon 8 Gen 3, RAM 12GB, bộ nhớ 512GB',
    price: 28990000,
    discount: 0.9,
    imageUrl: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/s/ss-s24-ultra-xam-222.png'
  },
  {
    id: 3,
    name: 'Xiaomi 14 Ultra',
    description: 'Màn hình 6.7 inch, Snapdragon 8 Gen 3, RAM 16GB, bộ nhớ 512GB',
    price: 26990000,
    discount: 0.85,
    imageUrl: 'https://viostore.vn/wp-content/uploads/2024/02/3-2-510x510.png'
  },
  {
    id: 4,
    name: 'OPPO Find X7 Ultra',
    description: 'Màn hình 6.82 inch, Snapdragon 8 Gen 3, RAM 16GB, bộ nhớ 1TB',
    price: 30990000,
    discount: 0.9,
    imageUrl: 'https://viostore.vn/wp-content/uploads/2024/03/3-7-510x510.png'
  },
  {
    id: 5,
    name: 'Realme GT 6',
    description: 'Màn hình AMOLED 6.78 inch, Snapdragon 8s Gen 3, RAM 16GB, 512GB',
    price: 15990000,
    discount: 0,
    imageUrl: 'https://viostore.vn/wp-content/uploads/2024/10/10-3-510x510.png'
  },
  {
    id: 6,
    name: 'Vivo X100 Pro',
    description: 'Màn hình LTPO AMOLED 6.78 inch, Dimensity 9300, RAM 16GB, 1TB',
    price: 28990000,
    discount: 0.85,
    imageUrl: 'https://viostore.vn/wp-content/uploads/2024/04/6-1-510x510.png'
  },
{
    id: 7,
    name: 'Google Pixel 8 Pro',
    description: 'Màn hình OLED 6.7 inch, Google Tensor G3, RAM 12GB, 256GB',
    price: 23990000,
    discount: 0.92,
    imageUrl: 'https://viostore.vn/wp-content/uploads/2025/03/162-510x510.png'
  },
  {
    id: 8,
    name: 'OnePlus 12',
    description: 'Màn hình AMOLED 6.82 inch, Snapdragon 8 Gen 3, RAM 16GB, 512GB',
    price: 20990000,
    discount: 0.88,
    imageUrl: 'https://viostore.vn/wp-content/uploads/2024/04/4-11-510x510.png'
  },
  {
    id: 9,
    name: 'Sony Xperia 1 VI',
    description: 'Màn hình OLED 6.5 inch, Snapdragon 8 Gen 3, RAM 12GB, 256GB',
    price: 27990000,
    discount: 0.93,
    imageUrl: 'https://viostore.vn/wp-content/uploads/2025/02/136-510x510.png'
  },
  {
    id: 10,
    name: 'Asus ROG Phone 8 Pro',
    description: 'Màn hình AMOLED 6.78 inch, Snapdragon 8 Gen 3, RAM 24GB, 1TB',
    price: 32990000,
    discount: 0.9,
    imageUrl: 'https://viostore.vn/wp-content/uploads/2025/06/259-510x510.png'
  },
  {
    id: 11,
    name: 'Huawei Pura 70 Ultra',
    description: 'Màn hình LTPO OLED 6.8 inch, Kirin 9010, RAM 16GB, 512GB',
    price: 31990000,
    discount: 0.87,
    imageUrl: 'https://sonpixel.vn/wp-content/uploads/2024/04/huawei-pura-70-ultra-13.webp'
  },
  {
    id: 12,
    name: 'Motorola Edge 50 Ultra',
    description: 'Màn hình pOLED 6.7 inch, Snapdragon 8 Gen 3, RAM 12GB, 512GB',
    price: 18990000,
    discount: 0.91,
    imageUrl: 'https://store.sony.com.vn/cdn/shop/files/3075_Primary_image_platinum-1200_066981e8-206e-4097-bd56-f5c52c1b812d_400x.jpg?v=1730354871'
  },

  
];
