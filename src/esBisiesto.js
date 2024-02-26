function esBisiesto(anio){
    if(anio % 400 === 0 || (anio % 4 === 0 && anio % 100 !== 0)){
        return "SI es bisiesto";
    } else {
        return "no es bisiesto";
    }
}

export default esBisiesto;
