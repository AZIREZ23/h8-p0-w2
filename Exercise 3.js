// Directions

// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), yaitu nama dan peran. Variabel peran harus memiliki isi data, bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir. Tugas Anda adalah untuk membuat program yang mengecek isi variabel peran serta mengeluarkan respon sesuai isi variabel tersebut.
// Hints

//     Variabel tetap di-input secara manual.
//     Variabel nama dan peran dapat diisi apa saja.
//     Nama tidak perlu dicek sama persis seperti contoh input/output


//Contoh input
var nama = 'nina'; // isi disini
var peran = 'ksatria';



if (nama == ''){        //// Output untuk Input nama = '' dan peran = ''
    console.log("nama harus diisi")     ////"Nama harus diisi!"
}
//Output untuk Input nama = 'Mikael' dan peran = ''
else if(nama == 'mikael' && peran ==''){
    console.log("Halo Mikael, Pilih peranmu untuk memulai game!")
}
//Output untuk Input nama = 'Nina' dan peran 'Ksatria'
else if(nama == 'nina' && peran =='ksatria'){
    console.log("Selamat datang di Dunia Proxytia, Nina"
    + "Halo Ksatria Nina, kamu dapat menyerang dengan senjatamu!")  //"Selamat datang di Dunia Proxytia, Nina"
    //"Halo Ksatria Nina, kamu dapat menyerang dengan senjatamu!"
}
//Output untuk Input nama = 'Danu' dan peran 'Tabib'
else if(nama == 'Danu' && peran =='Tabib'){
    console.log("Selamat datang di Dunia Proxytia, Danu"
    + "Halo Tabib Danu, kamu akan membantu temanmu yang terluka.")    //"Selamat datang di Dunia Proxytia, Danu" 
    //"Halo Tabib Danu, kamu akan membantu temanmu yang terluka."
}
else if(nama == 'Zero' && peran =='Penyihir'){
    console.log("Selamat datang di Dunia Proxytia, Zero"
     + "Halo Penyihir Zero, ciptakan keajaiban yang membantu kemenanganmu!")
}
console.log(nama);
//"Selamat datang di Dunia Proxytia, Zero"
//"Halo Penyihir Zero, ciptakan keajaiban yang membantu kemenanganmu!"
