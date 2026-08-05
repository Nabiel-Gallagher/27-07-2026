/**
 * A hospital emergency department must determine the priority level of every arriving patient.
 * The hospital follows these rules:
 * 1. If the patient's condition is critical, they are immediately assigned to the Emergency Room.
 * 2. Otherwise, if the patient has an appointment:
 *  - Elderly patients (age ≥ 60) receive Priority Queue.
 *  - Other patients receive Regular Queue.
 * 3. Otherwise:
 *  - Patients with health insurance are assigned to the Insurance Registration Counter.
 *  - Patients without insurance are assigned to the General Registration Counter.
 * 
 * Today's patient information:
 * | Information        | Value      |
 * | ------------------ | ---------- |
 * | Patient Name       | Siti Rahma |
 * | Critical Condition | No         |
 * | Has Appointment    | Yes        |
 * | Age                | 67         |
 * | Has Insurance      | Yes        |
 * 
 * Tasks: 
 * 1. Declare all required variables.
 * 2. Implement the hospital workflow using conditional statements.
 * 3. Display the patient's destination.
 */

const namaPasien: string = "Siti Rahma";
const kondisiKritis: boolean = false;
const appointment: boolean = true;
const umur: number = 67;
const punyaAsuransi: boolean = true;

if (kondisiKritis) {
    console.log("Dirujuk ke Ruang Gawat Darurat");
} else {
    if (appointment) {
        if (umur >= 60) {
            console.log("Mendapat Antrian Prioritas");
        } else {
            console.log("Antrian Reguler");
        }
    } else {
        if (punyaAsuransi) {
            console.log("Menuju Loket Pendaftaran Asuransi");
        } else {
            console.log("Menuju Loket Pendaftaran Umum");
        }
    }
}