/**
 * The school cafeteria sells lunch packages to students. Today, Raka purchased 3 fried rice meals, each costing Rp18,000, and 2 bottles of mineral water, each costing Rp5,000. Because he is a member of the student council, he received a Rp10,000 discount.
 * The cashier wants to calculate:
 *  - Total price of fried rice
 *  - Total price of drinks
 *  - Total price before discount
 *  - Final amount to be paid
 *
 * Task:
 * 1. Use operators to calculate:
 *  - Total food price
 *  - Total drink price
 *  - Grand total
 *  - Final payment
 * 2. Display the calculation results.
 */

const jumlahNasgor: number = 3
const hargaNasgor: number = 18000
const totalMakanan: number = jumlahNasgor * hargaNasgor

const jumlahAir: number = 2
const hargaAir: number =  5000
const totalMinuman: number = jumlahAir * hargaAir

const diskon:number = 10000

const totalSebelumDiskon: number = totalMakanan + totalMinuman

const totalSetelahDiskon: number = totalSebelumDiskon - diskon


console.log("Total Harga Nasi Goreng: ", totalMakanan);
console.log("Total Harga Air: ", totalMinuman);

console.log("Grand Total: ", totalSebelumDiskon)

console.log("Diskon: " ,diskon);
console.log("Final Total: ", totalSetelahDiskon)
