/**
 * An online store is processing a customer's shopping cart.
 * The customer purchased:
 * 
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Mouse Pad           | 120000 |        1 |
 * 
 * Business Rules:
 * - Customers receive 10% discount if the total purchase exceeds Rp1,000,000.
 * - Only Premium members receive free shipping.
 * - Every purchased product increases the total item counter.
 * 
 * Additional Information: Current customer is Premium member.
 * 
 * Task:
 *  - Calculate subtotal.
 *  - Count the total purchased items using an increment operator.
 *  - Determine whether a discount should be applied.
 *  - Calculate the final payment.

 */

const keyboardHarga = 850000;
const keyboardJumlah = 1;

const mouseHarga = 275000;
const mouseJumlah = 2;

const alasMouseHarga = 120000;
const alasMouseJumlah = 1;

const Premium = true

const totalKeyboard = keyboardHarga * keyboardJumlah
const totalMouse = mouseHarga * mouseJumlah
const totalAlasMouse = alasMouseHarga * alasMouseJumlah

const subtotal = totalKeyboard + totalMouse + totalAlasMouse

const totalItem = keyboardJumlah + mouseJumlah + alasMouseJumlah

let diskon = 0;

if (subtotal > 1000000) {
  diskon = subtotal * 0.1;
}

let gratisOngkir = false;

if (Premium) {
  gratisOngkir = true;
}

const totalBayar = subtotal - diskon;


console.log("Subtotal: ", subtotal);
console.log("Total Item: ", totalItem);
console.log("Diskon: ", diskon);
console.log("Gratis Ongkir: ", gratisOngkir);
console.log("Total Bayar: ", totalBayar);