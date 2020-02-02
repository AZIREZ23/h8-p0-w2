function xo(str) {
    var x = 0;
    var o = 0;

    for ( i = str.length -1; i >= 0; i--) {
        if(str[i] === "x"){
          x ++ ;          
    } 
    else if (str[i]=== "o"){
        o ++;
    }
    }
    if (x === o){
        return true
    }else if( x !== o); {
        return false }
}


  console.log(xo('xoxoxo'));
  console.log(xo('oxooxo')); 
  console.log(xo('oxo')); 
  console.log(xo('xxxooo')); 
  console.log(xo('xoxooxxo'));