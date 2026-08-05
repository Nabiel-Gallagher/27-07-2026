/**
 * An internet café charges customers Rp8,000 per hour. 
 * Customers are billed for every started hour. If the total playing time exceeds 5 hours, they receive a 15% discount.
 * Today, a customer used a computer for:
 * 7 hours and 35 minutes
 * 
 * 
 * You need to determine:
 * - Total playing time in minutes
 * - Remaining minutes after full hours
 * - Total billed hours
 * - Total payment before discount
 * - Discount amount
 * - Final payment
 */

const jam: number = 7;
const menit: number = 35;
const biayaPerJam: number = 8000;

const totalMenit = (jam * 60) + menit;
const sisaMenit = totalMenit % 60;

const jamDitagih = menit > 0 ? jam + 1 : jam;

const bayarSebelumDiskon = jamDitagih * biayaPerJam;

const diskon = jam > 5 ? bayarSebelumDiskon * 15 / 100 : 0;

const bayarAkhir = bayarSebelumDiskon - diskon;

console.log("Total Menit :", totalMenit);
console.log("Sisa Menit :", sisaMenit);
console.log("Jam Ditagih :", jamDitagih);
console.log("Bayar Sebelum Diskon :", bayarSebelumDiskon);
console.log("Diskon :", diskon);
console.log("Bayar Akhir :", bayarAkhir);
