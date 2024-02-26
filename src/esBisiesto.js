function esBisiesto(anio){
    if(anio % 100 === 0 && anio % 400 !== 0){
      return false;
    }
    return anio % 4 === 0;
}

export default esBisiesto;