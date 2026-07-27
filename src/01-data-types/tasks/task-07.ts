/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */

type Pendaftaran = {
  idSiswa: string;
  namaPanjang: string;
  tingkatKelas: string;
  idKursus: string;
  judulKursus: string;
  namaInstruktur: string;
  totalJamBelajar: number;
  tanggalPendaftaran: string;
  pembayaranSelesai: boolean;
};

const pendaftaran1: Pendaftaran = {
  idSiswa: "S1980",
  namaPanjang: "Alix Pria Ramadhani",
  tingkatKelas: "XII",
  idKursus: "C001",
  judulKursus: "Pemrograman TypeScript",
  namaInstruktur: "John Doe",
  totalJamBelajar: 40,
  tanggalPendaftaran: "27-07-2026",
  pembayaranSelesai: true
};

const pendaftaran2: Pendaftaran = {
  idSiswa: "S1986",
  namaPanjang: "Wildan Wanto",
  tingkatKelas: "XI",
  idKursus: "C002",
  judulKursus: "Pemrograman Python",
  namaInstruktur: "Jane Smith",
  totalJamBelajar: 30,
  tanggalPendaftaran: "28-07-2026",
  pembayaranSelesai: false
};

const pendaftaran3: Pendaftaran = {
  idSiswa: "S1903",
  namaPanjang: "Khair Rahmanto",
  tingkatKelas: "X",
  idKursus: "C003",
  judulKursus: "Pemrograman JavaScript",
  namaInstruktur: "Bob Johnson",
  totalJamBelajar: 35,
  tanggalPendaftaran: "29-07-2026",
  pembayaranSelesai: true
};

console.log(pendaftaran1);
console.log(pendaftaran2);
console.log(pendaftaran3);