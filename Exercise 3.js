//Contoh input
var nama = 'nina';
var peran = 'ksatria';

if (nama == ''){
    console.log("nama harus diisi")
}
//Output untuk Input nama = 'Mikael' dan peran = ''
else if(nama == 'mikael' && peran ==''){
    console.log("Halo Mikael, Pilih peranmu untuk memulai game!")
}
//Output untuk Input nama = 'Nina' dan peran 'Ksatria'
else if(nama == 'nina' && peran =='ksatria'){
    console.log("Selamat datang di Dunia Proxytia, Nina"
    + "Halo Ksatria Nina, kamu dapat menyerang dengan senjatamu!")
}
//Output untuk Input nama = 'Danu' dan peran 'Tabib'
else if(nama == 'Danu' && peran =='Tabib'){
    console.log("Selamat datang di Dunia Proxytia, Danu"
    + "Halo Tabib Danu, kamu akan membantu temanmu yang terluka.")
}
else if(nama == 'Zero' && peran =='Penyihir'){
    console.log("Selamat datang di Dunia Proxytia, Zero"
     + "Halo Penyihir Zero, ciptakan keajaiban yang membantu kemenanganmu!")
}
console.log(nama);


