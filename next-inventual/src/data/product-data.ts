import productTabImage1 from '../../public/assets/img/product/tab-1.png'
import productTabImage2 from '../../public/assets/img/product/tab-2.png'
import productTabImage3 from '../../public/assets/img/product/tab-3.png'
import productTabImage4 from '../../public/assets/img/product/tab-4.png'
import productTabImage5 from '../../public/assets/img/product/tab-5.png'
import productTabImage6 from '../../public/assets/img/product/tab-6.png'
import productTabImage7 from '../../public/assets/img/product/tab-7.png'
import productTabImage8 from '../../public/assets/img/product/tab-8.png'
import productTabImage9 from '../../public/assets/img/product/tab-9.png'
import productTabImage10 from '../../public/assets/img/product/tab-10.png'
import productTabImage11 from '../../public/assets/img/product/tab-11.png'
import productTabImage12 from '../../public/assets/img/product/tab-12.png'
import { TProduct } from '@/interFace/interFace'


const product_data: TProduct[] = [
    {
        id: 1,
        image: productTabImage1,
        title: "Dell Laptop",
        productNum: 10743680,
        brand: "Dell",
        is_featured: true,
        batchNo: '67657567',
        category: 'Electronics',
        price: 115,
        quantity: 1,
        subtotal: 0,
        tax: 5,
        discount: 10,
        unit:'quantity',
    },
    {
        id: 2,
        image: productTabImage2,
        title: "Red Fruit",
        productNum: 10743680,
        brand: "Organic Food",
        is_featured: false,
        batchNo: '5654645',
        category: 'Food',
        price: 110,
        quantity: 1,
        subtotal: 0,
        tax: 5,
        discount: 10,
        unit:'kilogram',
    },
    {
        id: 3,
        image: productTabImage3,
        title: "T Shirt",
        productNum: 10743680,
        brand: "Adidas",
        is_featured: true,
        batchNo: '456546',
        category: 'Fashion',
        price: 105,
        quantity: 1,
        subtotal: 0,
        tax: 5,
        discount: 10,
        unit:'quantity',

    },
    {
        id: 4,
        image: productTabImage4,
        title: "Denim Bag",
        productNum: 10743680,
        brand: "Adidas",
        is_featured: true,
        batchNo: '7686776',
        category: 'Fashion',
        price: 195,
        quantity: 1,
        subtotal: 0,
        tax: 5,
        discount: 10,
        unit:'quantity',
    },
    {
        id: 5,
        image: productTabImage5,
        title: "Smartphone",
        productNum: 10743680,
        brand: "Xiaomi",
        is_featured: false,
        batchNo: '787678',
        category: 'Electronics',
        price: 190,
        quantity: 1,
        subtotal: 0,
        tax: 5,
        discount: 10,
        unit:'quantity',
    },
    {
        id: 6,
        image: productTabImage6,
        title: "Fish",
        productNum: 10743680,
        brand: "Organic Food",
        is_featured: false,
        batchNo: '76577',
        category: 'Food',
        price: 180,
        quantity: 1,
        subtotal: 0,
        tax: 15,
        discount: 10,
        unit:'kilogram',
    },
    {
        id: 7,
        image: productTabImage7,
        title: "Ladies Bag",
        productNum: 10743680,
        brand: "Adidas",
        is_featured: false,
        batchNo: '657657',
        category: 'Fashion',
        price: 170,
        quantity: 1,
        subtotal: 0,
        tax: 5,
        discount: 10,
        unit:'quantity',
    },
    {
        id: 8,
        image: productTabImage8,
        title: "Sweet Lemon",
        productNum: 10743680,
        brand: "Organic Food",
        is_featured: false,
        batchNo: '7566554',
        category: 'Food',
        price: 160,
        quantity: 1,
        subtotal: 0,
        tax: 25,
        discount: 10,
        unit:'kilogram',
    },
    {
        id: 9,
        image: productTabImage9,
        title: "Mens Shoe",
        productNum: 10743680,
        brand: "Adidas",
        is_featured: false,
        batchNo: '65463345',
        category: 'Fashion',
        price: 150,
        quantity: 1,
        subtotal: 0,
        tax: 15,
        discount: 10,
        unit:'quantity',
    },
    {
        id: 10,
        image: productTabImage10,
        title: "Ladies Lipstick",
        productNum: 10743680,
        brand: "Adidas",
        is_featured: false,
        batchNo: '766564',
        category: 'Fashion',
        price: 140,
        quantity: 1,
        subtotal: 0,
        tax: 5,
        discount: 10,
        unit:'quantity',
    },
    {
        id: 11,
        image: productTabImage11,
        title: "Led Tv",
        productNum: 10743680,
        brand: "Xiaomi",
        is_featured: false,
        batchNo: '456546',
        category: 'Electronics',
        price: 130,
        quantity: 1,
        subtotal: 0,
        tax: 5,
        discount: 10,
        unit:'quantity',
    },
    {
        id: 12,
        image: productTabImage12,
        title: "Led Bulb",
        productNum: 10743680,
        brand: "Xiaomi",
        is_featured: true,
        batchNo: '564564',
        category: 'Accessories',
        price: 120,
        quantity: 1,
        subtotal: 0,
        tax: 5,
        discount: 10,
        unit:'quantity',
    },
]

export default product_data;