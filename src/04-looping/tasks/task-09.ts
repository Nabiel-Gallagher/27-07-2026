/**
 * A university stores the final grades of students enrolled in the Backend Development course at array below.
 * Grade Categories
 * - A : 90–100
 * - B : 80–89
 * - C : 70–79
 * - D : below 70
 * 
 * Student Task Calculate:
 * - Number of A students
 * - Number of B students
 * - Number of C students
 * - Number of D students
 * - Highest score
 * - Lowest score
 * - Average score
 */

const students = [
    { name: "Alya", score: 88 },
    { name: "Budi", score: 71 },
    { name: "Citra", score: 95 },
    { name: "Dimas", score: 63 },
    { name: "Eka", score: 84 },
    { name: "Fajar", score: 79 },
    { name: "Gita", score: 92 },
    { name: "Hana", score: 67 }
];

let A = 0;
let B = 0;
let C = 0;
let D = 0;
let total = 0;
let tertinggi = students[0].score;
let terendah = students[0].score;

for (let i = 0; i < students.length; i++) {
    let nilai = students[i].score;

    total += nilai;

    if (nilai >= 90) {
        A++;
    } else if (nilai >= 80) {
        B++;
    } else if (nilai >= 70) {
        C++;
    } else {
        D++;
    }

    if (nilai > tertinggi) {
        tertinggi = nilai;
    }

    if (nilai < terendah) {
        terendah = nilai;
    }
}

let rataRata = total / students.length;

console.log("Jumlah A: " + A);
console.log("Jumlah B: " + B);
console.log("Jumlah C: " + C);
console.log("Jumlah D: " + D);
console.log("Nilai tertinggi: " + tertinggi);
console.log("Nilai terendah: " + terendah);
console.log("Rata-rata: " + rataRata);