// 1. Melakukan Looping Menggunakan While
// Looping Pertama

var tulis = 2;
while ( tulis <= 20){
    console.log( tulis + " I Love Coding");
    tulis = tulis + 2;
}
// Looping Kedua

var tulis = 20;
while ( tulis >= 2){
    console.log( tulis + " I Love Coding");
    tulis = tulis - 2;
}

// 2. Melakukan Looping Menggunakan For

for ( var tulis = 1; tulis <= 20; tulis++){
    console.log( tulis + " I Love Coding");
}

for ( var tulis = 20; tulis >= 1; tulis--){
    console.log( tulis + " I will become fullstack developer");
}

// bilangan Ganjil dan Genap

var hitung = 100;
for (var i = 0; i <= hitung; i++){
    if (i % 2 == 0 ){
        console.log(i +" "+ "Bilangan Genap")
    }
    else (console.log (i +" "+ "bilangan Ganjil"))
}

// counter 2, 5 ,9 dan seterusnya

var deret =2;
var jumlah =0;
while(deret < 14){
    jumlah += deret;
    deret ++;
    console.log(jumlah+" "+ "kelipatan" +" "+ jumlah)
}


