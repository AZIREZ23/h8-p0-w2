// 1. Menyusun Barisan Bintang
for (i=0; i <5; i++){
    console.log("*");
}

// 2. Menyusun Barisan Bintang Dengan Nested Looping
var bintang ="";
for (i=0; i <5; i++){
    for (var j = 0; j < 5; j++){
        bintang += "*";
    };
    bintang += "\n";
}
console.log (bintang);

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var bintang ="";
for (i=0; i <5; i++){
    for (var j = 0; j <= i; j++){
        bintang += "*";
    };
    bintang += "\n";
}
console.log (bintang);
