// Directions

// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// var hari = 21; var bulan = 1; var tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';


var hari = '21';
var bulan = '8';
var tahun = '1945';

switch(hari) {        //var tanggal; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
  case '1':   { console.log(hari); break; }
  case '2':   { console.log(hari); break; }
  case '3':   { console.log(hari); break; }
  case '4':   { console.log(hari); break; }
  case '5':   { console.log(hari); break; }
  case '6':   { console.log(hari); break; }
  case '7':   { console.log(hari); break; }
  case '8':   { console.log(hari); break; }
  case '9':   { console.log(hari); break; }
  case '10':   { console.log(hari); break; }
  case '11':   { console.log(hari); break; }
  case '12':   { console.log(hari); break; }
  case '13':   { console.log(hari); break; }
  case '14':   { console.log(hari); break; }
  case '15':   { console.log(hari); break; }
  case '16':   { console.log(hari); break; }
  case '17':   { console.log(hari); break; }
  case '18':   { console.log(hari); break; }
  case '19':   { console.log(hari); break; }
  case '20':   { console.log(hari); break; }
  case '21':   { console.log(hari); break; }
  case '22':   { console.log(hari); break; }
  case '23':   { console.log(hari); break; }
  case '24':   { console.log(hari); break; }
  case '25':   { console.log(hari); break; }
  case '26':   { console.log(hari); break; }
  case '27':   { console.log(hari); break; }
  case '28':   { console.log(hari); break; }
  case '29':   { console.log(hari); break; }
  case '30':   { console.log(hari); break; }
  case '31':   { console.log(hari); break; }
default:  { console.log('Tidak terjadi apa-apa'); }
}

switch(bulan) {   // var bulan; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
  case '1':   { console.log('Januari'); break; }
  case '2':   { console.log('Februari'); break; }
  case '3':   { console.log('Maret'); break; }
  case '4':   { console.log('April'); break; }
  case '5':   { console.log('Mei'); break; }
  case '6':   { console.log('Juni'); break; }
  case '7':   { console.log('Juli'); break; }
  case '8':   { console.log('Agustus'); break; }
  case '9':   { console.log('September'); break; }
  case '10':   { console.log('Oktober'); break; }
  case '11':   { console.log('November'); break; }
  case '12':   { console.log('Desember'); break; }
default:  { console.log('Undivided'); }
}

switch(tahun) {   // var tahun; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)
  case '1945':   { console.log(tahun); break; }
  case '1900':   { console.log(tahun); break; }
  case '2200':   { console.log(tahun); break; }
  default:  { console.log('Undivided'); }
}
