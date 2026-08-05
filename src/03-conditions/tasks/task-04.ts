/**
 * A hotel determines room availability using the following rules.
 * First, the system checks whether rooms are still available.
 * If rooms are available:
 * - Premium members receive a free room upgrade.
 * - Regular customers receive the reserved room only.
 * 
 * If no rooms are available:
 * - Premium members are placed on the priority waiting list.
 * - Regular customers are informed that no rooms are available.
 * 
 * Today's reservation:
 * | Information    | Value       |
 * | -------------- | ----------- |
 * | Customer Name  | Nadia Putri |
 * | Premium Member | Yes         |
 * | Room Available | No          |
 * 
 * The system should display the appropriate message.
 * Student Tasks: 
 * 1. Declare all variables.
 * 2. Implement the logic using nested if statements.
 * 3. Display the reservation result.
 */

const namaCustomer: string = "Nadia Putri"
let memberPremium: boolean = true
let kamarTersedia: boolean = false

if (kamarTersedia) {
    if (memberPremium) {
        console.log("Mendapatkan peningkatan kamar gratis");
    } else {
        console.log("Tetap mendapatkan kamar yang dipesan");
    }
} else {
    if (memberPremium) {
        console.log("Menunggu di daftar tunggu prioritas");
    } else {
        console.log("Tidak ada kamar yang tersedia");
    }
}