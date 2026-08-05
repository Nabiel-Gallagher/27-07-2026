/**
 * A manufacturing company monitors production machines continuously.

Business Rules

If the machine is powered off:

Display Machine Offline.

Otherwise, check its operating condition.

If the machine temperature exceeds 90°C:

If vibration level is High, display:
Emergency Shutdown
Otherwise:
Cooling Required

If the temperature is 90°C or below:

If production speed is below 80%, display:
Performance Warning
Otherwise:
Machine Operating Normally

Today's machine status:
| Information      | Value |
| ---------------- | ----- |
| Powered On       | Yes   |
| Temperature      | 95    |
| High Vibration   | No    |
| Production Speed | 92    |

Student Tasks
- Declare all variables.
- Translate every business rule into conditional statements.
- Display the final machine status.
 */

let mesinDinyalakan: boolean = true
let suhu: number = 95
let getaranTinggi: boolean = false
let kecepatanProduksi: number = 92

if (!mesinDinyalakan) {
    console.log ("Mesin Mati")
} else if (suhu > 90) {
    if (getaranTinggi) {
        console.log("Penghentian Darurat")
    } else {
        console.log("Pendinginan Diperlukan")
    }
} else if (suhu <= 90) {
    if (kecepatanProduksi < 80) {
        console.log("Peringatan Kinerja")
    } else {
        console.log("Mesin Beroprasi Normal")
    }
}