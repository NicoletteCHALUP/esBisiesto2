function esBisiesto(anio){
    if(anio % 400 === 0 || (anio % 4 === 0 && anio % 100 !== 0)){
      return true;
    } else {
      return false;
    }
}

export default esBisiesto;
