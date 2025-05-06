# dealls-challenge-qa

## Challenge 2 - UI Automation with Playwright 
Skenario pengujian yang akan diuji dengan menggunakan Playwright kali ini ialah skenario pencarian mentor. Pengujian ini merupakan pengujian fungsional. Studi kasus diambil menggunakan metode Equivalence Partitioning.
Equivalence Partitioning: Dua partisi (test case valid dan test case invalid).

### Valid Test Case
1.	Cari berdasarkan bidang tertentu.
-	Keyword: “frontend”
-	Ekspektasi: Menampilkan mentor yang relevan.
2.	Cari dengan huruf kapital atau huruf kecil.
-	Keyword: “frontend” vs “Frontend”
-	Ekspektasi: Hasil pencarian sama.
3.	Cari dengan lebih dari satu kata.
-	Keyword: “full stack”
-	Ekspektasi: Menampilkan mentor yang relevan.
-	
### Invalid Test Case
1.	Cari dengan keyword yang tidak relevan.
-	Keyword: “asdafwgrkj”
-	Ekspektasi: Tidak ada hasil, muncul pesan yang sesuai (contoh: “tidak ditemukan”, dsb)
2.	Kosongkan input pencarian.
-	Keyword: “”
-	Ekspektasi: Tidak ada hasil, sistem tidak terganggu.
3.	Input karakter Spesial.
-	Keyword: “@@@”
-	Ekspektasi: Tidak ada hasil, sistem tidak terganggu

## Cara menjalankan:
  1. `npm install`
  2. `npx playwright install`
  3. `npx playwright test`
