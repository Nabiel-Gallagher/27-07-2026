/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */

type Produk = {
  kodeProduk: string;
  namaProduk: string;
  hargaJual: number;
  jumlahStok: number;
  beratProduk: number;
  ratingRataRata: number;
  diskon: boolean;
};

const produk1: Produk = {
  kodeProduk: "P001",
  namaProduk: "Smartphone XYZ",
  hargaJual: 5000000,
  jumlahStok: 50,
  beratProduk: 0.2,
  ratingRataRata: 4.5,
  diskon: true
};

const produk2: Produk = {
  kodeProduk: "P002",
  namaProduk: "Laptop ABC",
  hargaJual: 15000000,
  jumlahStok: 20,
  beratProduk: 2.5,
  ratingRataRata: 4.8,
  diskon: false
};

const produk3: Produk = {
  kodeProduk: "P003",
  namaProduk: "Tablet DEF",
  hargaJual: 3000000,
  jumlahStok: 100,
  beratProduk: 0.5,
  ratingRataRata: 4.2,
  diskon: true
};

console.log(produk1);
console.log(produk2);
console.log(produk3);