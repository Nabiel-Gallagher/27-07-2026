/**
 * An LMS stores assignment submission information on array below.
 * Business Rules
 * - Students who do not submit automatically receive a score of 0.
 * - A passing score is 75.
 * - Submitted assignments with a score below 75 require revision.
 * 
 * Student Tasks using a loop for:
 * - Count students who submitted their assignment.
 * - Count students who did not submit.
 * - Count students who passed.
 * - Count students who must revise their assignment.
 * - Display the names of students who did not submit.
 * - Display the names of students who must revise.
 * - Calculate the class average score.
 */

const submissions = [
    { student: "Alya", submitted: true, score: 92 },
    { student: "Budi", submitted: false, score: 0 },
    { student: "Citra", submitted: true, score: 78 },
    { student: "Dimas", submitted: true, score: 65 },
    { student: "Eka", submitted: false, score: 0 },
    { student: "Fajar", submitted: true, score: 84 },
    { student: "Gita", submitted: true, score: 90 },
    { student: "Hana", submitted: true, score: 73 }
];

let submit: number = 0;
let tidakSubmit: number = 0;
let lulus: number = 0;
let revisi: number = 0;
let total: number = 0;
let namaTidakSubmit: string = "";
let namaRevisi: string = "";
let namaSubmit: string = "";
let namaLulus: string = "";

for (let i = 0; i < submissions.length; i++) {
    let data = submissions[i];

    if (data.submitted) {
        submit++;
        total += data.score;
        namaSubmit += data.student + " ";

        if (data.score >= 75) {
            lulus++;
            namaLulus += data.student + " ";
        } else {
            revisi++;
            namaRevisi += data.student + " ";
        }
    } else {
        tidakSubmit++;
        namaTidakSubmit += data.student + " ";
    }
}

let rataRata = total / submissions.length;

console.log("Jumlah yang submit: " + submit);
console.log("Jumlah yang tidak submit: " + tidakSubmit);
console.log("Jumlah yang lulus: " + lulus);
console.log("Jumlah yang revisi: " + revisi);
console.log("Tidak submit: " + namaTidakSubmit);
console.log("Perlu revisi: " + namaRevisi);
console.log("Rata-rata kelas: " + rataRata);
console.log("Nama yang submit: " + namaSubmit);
console.log("Nama yang lulus: " + namaLulus);
