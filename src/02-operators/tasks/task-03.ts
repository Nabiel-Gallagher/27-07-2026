/**
 * A company pays employees based on their monthly salary and overtime hours.
 * Employee Information:
 * | Information    | Value   |
 * | -------------- | ------- |
 * | Employee Name  | Dimas   |
 * | Basic Salary   | 5000000 |
 * | Overtime Hours | 12      |
 * | Overtime Rate  | 50000   |
 *
 * 
 * The company has the following policy:
 * Employees who work more than 10 overtime hours receive an additional Rp300,000 performance bonus.
 * Otherwise, no bonus is given.
 * You need to calculatea and display:
 * - Overtime pay
 * - Bonus
 * - Final salary
 */

const namaKaryawan: string = "Dimas"
const gajiPokok: number = 5000000
const jamLembur: number = 12
const tarifLembur: number = 50000

const bonusKinerja =
    jamLembur >= 10;

console.log("Nama Karyawan: ", namaKaryawan);
console.log("Gaji Pokok: ", gajiPokok);
console.log("Jam Lembur: ", jamLembur);
console.log("Tarif Lembur: ", tarifLembur);

console.log("Uang Lembur: ", jamLembur * tarifLembur);
console.log("Bonus Kinerja: ", bonusKinerja ? 300000 : 0);
console.log("Gaji Akhir: ", gajiPokok + (jamLembur * tarifLembur) + (bonusKinerja ? 300000 : 0));
