/**
 * A university allows students to register for advanced programming courses only if they satisfy all academic requirements.

Registration Process

Step 1 — Academic Status
The student must:
 - Be actively enrolled.
 - Have completed tuition payment.

If either requirement is not satisfied:
Registration Rejected

Otherwise, continue.

Step 2 — Academic Requirements
The student must:
- Pass Programming Fundamentals.
- Pass Database Systems.
- Have a GPA of at least 3.20.
If these requirements are satisfied, continue.
Otherwise:
Academic Requirements Not Met

Step 3 — Seat Availability
If seats are still available:
- Registration Successful
Otherwise:
- Added to Waiting List

Student Information:
| Information                     | Value       |
| ------------------------------- | ----------- |
| Student Name                    | Nadia Putri |
| Active Student                  | Yes         |
| Tuition Paid                    | Yes         |
| Passed Programming Fundamentals | Yes         |
| Passed Database Systems         | Yes         |
| GPA                             | 3.45        |
| Seats Available                 | No          |

Student Tasks
- Declare all variables.
- Implement the registration workflow.
- Use nested conditional statements.
- Display the final registration result.
 */

const namaSiswa: string = "Nadia Putri"
let siswaAktif: boolean = true
let biayDibayar: boolean = true
let lulusMatkulPemrograman: boolean = true
let lulusMatkulBaseData: boolean = true
let IPK: number = 3.45
let kursiTersedia: boolean = false

if (siswaAktif && biayDibayar) {
    if (lulusMatkulBaseData && lulusMatkulBaseData && IPK >= 3.20) {
        if (kursiTersedia) {
            console.log("Pendaftaran Berhasil")
        } else {
            console.log("Ditambahkan ke Daftar Tunggu")
        }
    } else {
        console.log ("Persyaratan Akademik Tidak Terpenuhi")
    }
} else {
    console.log("Pendaftaran Ditolak")
}