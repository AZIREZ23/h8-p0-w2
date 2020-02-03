// 1. Menyusun Barisan Bintang
// Problem

// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang). Setiap baris memiliki 1 simbol '*'.

            //// OutPut => *
                        // *
                        // *
                        // *
                        // *

for (i=0; i <5; i++){
    console.log("*");
}

// 2. Menyusun Barisan Bintang Dengan Nested Looping
// Problem

// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang). Setiap baris memiliki jumlah simbol '*' sesuai dengan jumlah baris. Manfaatkan nested loop atau loop di dalam loop untuk menyelesaikan kasus ini.

            //// OutPut => *****
                        // *****
                        // *****
                        // *****
                        // *****
var bintang ="";
for (i=0; i <5; i++){
    for (var j = 0; j < 5; j++){
        bintang += "*";
    };
    bintang += "\n";
}
console.log (bintang);

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
// Problem

// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang) dalam bentuk tangga. Setiap baris memiliki jumlah simbol '*' sesuai dengan nomor baris. Baris pertama, hanya ada satu bintang. Baris kedua, dua bintang, baris ketiga tiga bintang, dan seterusnya. Manfaatkan nested loop atau loop di dalam loop untuk menyelesaikan kasus ini.

            //// OutPut => *
                        // **
                        // ***
                        // ****
                        // *****
                        
var bintang ="";
for (i=0; i <5; i++){
    for (var j = 0; j <= i; j++){
        bintang += "*";
    };
    bintang += "\n";
}
console.log (bintang);
