/**
 * A university is selecting students for a full scholarship.
 * The first screening requires:
 *  - GPA ≥ 3.75
 *  - Family income < Rp5,000,000
 * 
 * If the student passes the first screening, the university performs a second screening.
 * The second screening requires:
 *  - Competition participation ≥ 3
 *  - No disciplinary violations
 *  - Administrative documents are complete
 * 
 * Only students who pass both screening stages receive the scholarship.
 * Student information:
 * | Information             | Value         |
 * | ----------------------- | ------------- |
 * | Student Name            | Fajar Hidayat |
 * | GPA                     | 3.86          |
 * | Family Income           | 4200000       |
 * | Competition Count       | 4             |
 * | Has Disciplinary Record | No            |
 * | Documents Complete      | Yes           |
 * 
 * Display one of the following messages:
 *  - Scholarship Approved
 *  - Passed First Screening, but Failed Second Screening
 *  - Passed First Screening, but Failed Second Screening
 * 
 * Student Tasks
 *  - Declare all variables.
 *  - Implement the first screening.
 *  - Implement the second screening only if the first screening is passed.
 *  - Display the correct result.
 */

const namaSiswa: string = "Fajar Hidayat"
const IPK: number = 3.86
const pendapatanKeluarga: number = 4200000
const jumlahKompetisi: number = 4
const memilikiCatatan: boolean = false
const dokumenLengkap: boolean = true

if (IPK >= 3.75 && pendapatanKeluarga < 5000000) {
    if (jumlahKompetisi >= 3 && memilikiCatatan === false && dokumenLengkap) {
        console.log("Diterima Beasiswa")
    } else {
        console.log("Lolos tahap pertama, Tidak lolos tahap kedua")
    }
} else {
    console.log("Tidak Lolos Tahap Pertama")
}