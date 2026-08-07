/**
 * The homeroom teacher receives attendance data for one class at following array.
 * 
 * Using a loop:
 * - Count present students.
 * - Count absent students.
 * - Display the names of absent students.
 * - Calculate the attendance percentage.
 */

const attendances = [
  { name: "Alya", present: true },
  { name: "Budi", present: true },
  { name: "Citra", present: false },
  { name: "Dimas", present: true },
  { name: "Eka", present: false },
  { name: "Fajar", present: true },
  { name: "Gita", present: true },
  { name: "Hana", present: false }
];

let presentCount: number = 0;
let absentCount: number = 0;
let absentStudents: string[] = [];

for (let i = 0; i < attendances.length; i++) {
  const student = attendances[i];

  if (student.present) {
    presentCount++;
  } else {
    absentCount++;
    absentStudents.push(student.name);
  }
}

const attendancePercentage: number = (presentCount / attendances.length) * 100;

console.log("Jumlah Siswa Hadir: " + presentCount);
console.log("Jumlah Siswa Tidak Hadir: " + absentCount);
console.log("Nama Siswa Tidak Hadir: " + absentStudents.join(", "));
console.log("Persentase Kehadiran: " + attendancePercentage.toFixed(2) + "%");

