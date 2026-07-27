/**
 * SMK Telkom Malang calculates each student's final score using several assessment components. 
 * Before calculating the final grade, the system stores every assessment score as a separate variable. 
 * The homeroom teacher entered the following information for one student. 
 * The student named Nadia Putri has a student ID of ST2026045. She earned 88.5 on assignments, 
 * 84 on the midterm exam, and 91.5 on the final exam. Because she submitted every assignment before the deadline, 
 * she received an attendance score of 100. The school also records that Nadia participates in extracurricular activities, 
 * so this information should also be stored.
 * 
 * Task:
 * 
 * 1. dentify all values that should be stored as variables.
 * 2. Determine the most appropriate data type for each variable.
 * 3. Create the variable declarations using TypeScript.
 * 4. Display the student data using console.log.
 */

const nama: string = "Nadia Putri";
const nomorMahasiswa: string = "ST2026045";

const nilaiTugas: number = 88.5;
const nilaiUTS: number = 84;
const nilaiUAS: number = 91.5;
const nilaiKehadiran: number = 100;

const ikutEkstra: boolean = true;

const nilaiAkhir: number = (nilaiTugas + nilaiUTS + nilaiUAS + nilaiKehadiran) / 4;

console.log("Nama:", nama);
console.log("Nomor Mahasiswa:", nomorMahasiswa);
console.log("Nilai Tugas:", nilaiTugas);
console.log("Nilai UTS:", nilaiUTS);
console.log("Nilai UAS:", nilaiUAS);
console.log("Nilai Kehadiran:", nilaiKehadiran);
console.log("Ikut Ekstrakurikuler:", ikutEkstra);
console.log("Nilai Akhir:", nilaiAkhir);