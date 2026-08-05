/**
 * An online store wants to analyze today's sales transactions. 
 * Each transaction amount is stored in an array.
 * ---------------------------------
 * const sales = [
 * 125000,
 * 350000,
 * 78000,
 * 910000,
 * 150000,
 * 420000,
 * 275000,
 * 99000,
 * 640000,
 * 18000
 * ]
 * -------------------------------------
 * 
 * Student task in calculate:
 * 1. Total sales revenue
 * 2. Highest transaction
 * 3. Lowest transaction
 * 4. Number of transactions worth Rp300,000 or more
 * 5. Average transaction value
 */

const sales: number[] = [ 125000, 350000, 78000, 910000, 150000, 420000, 275000, 99000, 640000, 18000 ]

let tertinggi: number = sales[0]
let terendah: number = sales[0]
let totalPendapatan: number = 0
let jumlah300rb: number = 0

for (let i = 0; i < sales.length; i++) {
    const transaksi: number = sales[i]

    totalPendapatan += transaksi

    if (transaksi > tertinggi) {
        tertinggi = transaksi
    }

    if (transaksi < terendah) {
        terendah = transaksi
    }

    if (transaksi >= 300000) {
        jumlah300rb++
    }
}

let rataRata: number = totalPendapatan / sales.length

console.log("Total Pendapatan:", totalPendapatan)
console.log("Transaksi Tertinggi:", tertinggi)
console.log("Transaksi Terendah:", terendah)
console.log("Jumlah Transaksi >= 300000:", jumlah300rb)
console.log("Rata-rata Transaksi:", rataRata)