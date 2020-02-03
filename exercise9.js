// Tugas 1
// Buatlah sebuah fungsi bernama shoutOut(), yang mengembalikan nilai berupa "Halo Function!", yang kemudian akan ditampilkan di console.

function shoutOut() {           //// Menampilkan "Halo Function!" di console
    console.log("Halo Function!")   
};

shoutOut();

// Tugas 2
// Buatlah sebuah fungsi bernama calculateMultiply(), yang mengembalikan nilai berupa hasil kali dari dua parameter yang dikirim.

function calculateMultiply(num1, num2) {            // Menampilkan angka 30
    return num1 * num2
}

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1, num2);
console.log(hasilPerkalian);

// Tugas 3
// Buatlah sebuah fungsi bernama processSentence(), yang akan memproses seluruh parameter yang diinput menjadi satu kalimat berikut: "Nama saya [Name], umur saya [Age] tahun, alamat saya di [Address], dan saya punya hobby yaitu [hobby]!"

            // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"
            
function processSentence(name, age, address, hobby) {
    return "nama saya "+ name +", umur saya "+age+", alamat saya "+address+", dan saya punya hobi yaitu "+ hobby;
}
var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming!";
var fullSentence = processSentence(name,age,address,hobby);

console.log(fullSentence);