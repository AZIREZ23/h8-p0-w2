function konversiMenit(menit) {

    var jam = menit / 3600;
    var men = Math.floor(menit / 60);
    var det = menit % 60;
    var detik = det.toString().length;
    
    if (detik === 1) {
      det = "0" + det
    }
    return men +":"+det
  }

  console.log(konversiMenit(63)); 
  console.log(konversiMenit(124)); 
  console.log(konversiMenit(53)); 
  console.log(konversiMenit(88)); 
  console.log(konversiMenit(120)); 


