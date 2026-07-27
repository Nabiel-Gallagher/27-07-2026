/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */

type Buku = {
  isbn: string;
  judul: string;
  penulis: string;
  jumlahHalaman: number;
  kategori: string;
  tersedia: boolean;
};

const buku1: Buku = {
  isbn: "12345678910",
  judul: "Lengsernya Prabowo Subianto",
  penulis: "Dhamas Agung",
  jumlahHalaman: 100,
  kategori: "Sejarah",
  tersedia: true
};

const buku2: Buku = {
  isbn: "111213141516",
  judul: "Menjadi Miliarder Di Usia Muda",
  penulis: "Nabiel Akbar",
  jumlahHalaman: 200,
  kategori: "Bisnis",
  tersedia: false
};

const buku3: Buku = {
  isbn: "171819202122",
  judul: "TPU Samaan 10 Tahun Yang Lalu",
  penulis: "Aryo Haswoyo",
  jumlahHalaman: 300,
  kategori: "Sejarah",
  tersedia: true
};

console.log(buku1);
console.log(buku2);
console.log(buku3);