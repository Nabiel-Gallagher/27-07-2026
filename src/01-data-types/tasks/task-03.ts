/**
 * SMK Telkom Malang is developing a new Student Information System. 
 * Before students can use the system, the administrator must record each student's basic information. 
 * Every student has a unique student ID, a full name, an age, and a status indicating whether they are currently an active student.
 * 
 * Task:
 * 1. Define a proper type for the student information.
 * 2. Implement a type that you defined on 3 students data.
 * 
 * display the student data using console.log.
 */

type Siswa = {
  idSiswa: string;
  namaPanjang: string;
  umur: number;
  statusAktif: boolean;
};

const siswa1: Siswa = {
  idSiswa: "S1980",
  namaPanjang: "Alix Pria Ramadhani",
  umur: 17,
  statusAktif: true
};

const siswa2: Siswa = {
  idSiswa: "S1986",
  namaPanjang: "Wildan Wanto",
  umur: 18,
  statusAktif: false
};

const siswa3: Siswa = {
  idSiswa: "S1903",
  namaPanjang: "Khair Rahmanto",
  umur: 19,
  statusAktif: true
};

console.log(siswa1);
console.log(siswa2);
console.log(siswa3);