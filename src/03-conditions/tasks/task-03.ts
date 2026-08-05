/**
 * An Internet Service Provider recommends an internet package based on the customer's monthly data usage.
 * Business Rules
 * | Monthly Usage    | Recommended Package |
 * | ---------------- | ------------------- |
 * | Less than 50 GB  | Basic               |
 * | 50–150 GB        | Standard            |
 * | More than 150 GB | Premium             |
 * 
 * Today's customer has used:
 * | Information   | Value        |
 * | ------------- | ------------ |
 * | Customer Name | Raka Saputra |
 * | Monthly Usage | 124 GB       |
 * 
 * Tasks:
 * 1. Declare all variables.
 * 2. Implement the business rules using if...else if...else.
 * 3. Display the recommended package.
 */

const namaCustomer: string = "Raka Saputra"
const penggunaanBulanan: number = 50

if (penggunaanBulanan < 50) {
    console.log("Direkomendasikan menggunakan paket Basic");
} else if (penggunaanBulanan >= 50 && penggunaanBulanan <= 150) {
    console.log("Direkomendasikan menggunakan paket Standard");
} else if (penggunaanBulanan > 150) {
    console.log("Direkomendasikan menggunakan paket Premium");
}