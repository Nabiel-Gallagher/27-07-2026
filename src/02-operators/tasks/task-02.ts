/**
 * A student can participate in the graduation ceremony only if all of the following conditions are met:
 * - Final score is at least 75
 * - Attendance is at least 90%
 * - All tuition fees have been paid
 * 
 * Today, the administration receives the following student information.
| Information  | Value |
| ------------ | ----- |
| Final Score  | 82    |
| Attendance   | 94    |
| Tuition Paid | Yes   |

 * Task: Store and display the result in a variable named "isEligible"

 */

const skorAkhir: number = 82
const kehadiran: number = 94
const pembayaranBiaya: string = "Yes"

const isEligible =
  skorAkhir >= 75 &&
  kehadiran >= 90 &&
  pembayaranBiaya === "Yes";

  console.log(isEligible)