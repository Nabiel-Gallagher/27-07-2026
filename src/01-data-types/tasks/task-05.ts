/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */

type Absensi = {
  idKaryawan: string;
  namaKaryawan: string;
  tanggal: string;
  jamMasuk: string;
  jamPulang: string;
  totalJamKerja: number;
  hadir: boolean;
};

const absensi1: Absensi = {
  idKaryawan: "K001",
  namaKaryawan: "Andi Pratama",
  tanggal: "27-07-2026",
  jamMasuk: "08:00",
  jamPulang: "17:00",
  totalJamKerja: 9,
  hadir: true,
};

const absensi2: Absensi = {
  idKaryawan: "K002",
  namaKaryawan: "Budi Santoso",
  tanggal: "27-07-2026",
  jamMasuk: "08:15",
  jamPulang: "17:10",
  totalJamKerja: 8.9,
  hadir: true,
};

const absensi3: Absensi = {
  idKaryawan: "K003",
  namaKaryawan: "Citra Lestari",
  tanggal: "27-07-2026",
  jamMasuk: "-",
  jamPulang: "-",
  totalJamKerja: 0,
  hadir: false,
};

console.log(absensi1);
console.log(absensi2);
console.log(absensi3);