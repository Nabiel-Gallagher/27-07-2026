/**
 * The warehouse checks customer orders before shipping based on array below.
 * 
 * Business Rules
 * An order is ready to ship only if:
 * - Payment has been completed.
 * - Stock is available.
 * 
 * Student Task:
 * Loop through every order and calculate:
 * - Number of orders ready to ship
 * - Number of unpaid orders
 * - Number of orders waiting for stock
 * - Display all order IDs that are ready to ship
 */
const orders = [
  { id: "ORD001", paid: true, stockAvailable: true },
  { id: "ORD002", paid: false, stockAvailable: true },
  { id: "ORD003", paid: true, stockAvailable: false },
  { id: "ORD004", paid: true, stockAvailable: true },
  { id: "ORD005", paid: false, stockAvailable: false },
  { id: "ORD006", paid: true, stockAvailable: true }
];

let siap = 0;
let belumBayar = 0;
let stok = 0;
let idSiap = "";

for (let i = 0; i < orders.length; i++) {

    if (orders[i].paid && orders[i].stockAvailable) {
        siap++;
        idSiap += orders[i].id + " ";
    } else if (!orders[i].paid) {
        belumBayar++;
    } else {
        stok++;
    }
}

console.log("Siap dikirim: " + siap);
console.log("Belum dibayar: " + belumBayar);
console.log("Menunggu stok: " + stok);
console.log("ID siap dikirim: " + idSiap);