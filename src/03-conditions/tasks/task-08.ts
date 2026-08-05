/**
 * An airline automatically determines a passenger's check-in status.
 * Business Rules
 * Step 1
 * If the passenger has not checked in online, display:
 * "Please complete online check-in first.""
 * 
 * Otherwise, continue.
 * Step 2
 * If baggage weight exceeds 20 kg:
 * - Business Class → Extra baggage allowed.
 * - Economy Class → Additional baggage fee required.
 * 
 * Otherwise:
 * Proceed to boarding pass printing.
 * 
 * Passenger Information
 * | Information     | Value         |
 * | --------------- | ------------- |
 * | Passenger       | Fajar Nugroho |
 * | Online Check-in | Yes           |
 * | Cabin Class     | Economy       |
 * | Baggage Weight  | 24 kg         |
 * 
 * Student Tasks
 * 1. Declare all variables.
 * 2. Implement the airline decision process.
 * 3. Display the correct message.
 */

const penumpang: string = "Fajar Nugroho"
let CheckOnline: boolean = true
let kabin: string = "Ekonomi"
const beratBagasi: number = 24

if (!CheckOnline) {
    console.log("Silahkan Selesaikan Proses Check-In Online Terlebih Dahulu")
} else if (beratBagasi > 20) {
    if (kabin === "Bisnis") {
        console.log("Bagasi tambahan diperbolehkan")
    } else if (kabin === "Ekonomi")  {
        console.log("Biaya bagasi tambahan diperlukan")
    }
} else {
    console.log("Lanjutkan ke pencetakan boarding pass")
}
