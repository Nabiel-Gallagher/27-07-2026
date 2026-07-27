/**
 * An online shopping platform allows customers to purchase multiple products in one transaction. 
 * Every product added to the shopping cart stores the product code, product name, unit price, 
 * quantity purchased, and whether the product is eligible for free shipping.
 * Today, one customer added the following products to the cart.

| Product Code | Product Name        | Price   | Quantity | Free Shipping |
| ------------ | ------------------- | ------- | -------- | ------------- |
| KB001        | Mechanical Keyboard | 850000  | 1        | Yes           |
| MS002        | Wireless Mouse      | 275000  | 2        | Yes           |
| HD003        | External SSD 1TB    | 1650000 | 1        | No            |
| HP004        | Gaming Headset      | 720000  | 1        | Yes           |

 * Task:
 * 1. Define a proper type for the product information.
 * 2. Store the product data in a single collection.
 * 3. Display the product data using console.log.
 */

type ProdukKeranjang = {
  kodeProduk: string;
  namaProduk: string;
  hargaSatuan: number;
  jumlah: number;
  gratisOngkir: boolean;
};

const keranjangBelanja: ProdukKeranjang[] = [
  { kodeProduk: "KB001", namaProduk: "Mechanical Keyboard", hargaSatuan: 850000, jumlah: 1, gratisOngkir: true },
  { kodeProduk: "MS002", namaProduk: "Wireless Mouse", hargaSatuan: 275000, jumlah: 2, gratisOngkir: true },
  { kodeProduk: "HD003", namaProduk: "External SSD 1TB", hargaSatuan: 1650000, jumlah: 1, gratisOngkir: false },
  { kodeProduk: "HP004", namaProduk: "Gaming Headset", hargaSatuan: 720000, jumlah: 1, gratisOngkir: true }
];

console.log(keranjangBelanja);