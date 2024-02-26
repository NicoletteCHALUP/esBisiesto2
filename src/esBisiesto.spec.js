import esBisiesto from "./esBisiesto.js";

describe("Es Bisiesto", () => {
    it("El 400 deberia considerarse como anio bisiesto", () => {
      expect(esBisiesto(400)).toEqual(true);
    });

    it("El 5 NO deberia considerarse como anio bisiesto", () => {
        expect(esBisiesto(500)).toEqual(false);
      });
      
    it("Todos los años divisibles por  400 SON años bisiestos (así, por ejemplo, 2000 fue un año bisiesto),", () => {
        expect(esBisiesto(2000)).toEqual(true);
      });

    it("Todos los años divisibles por 100 pero no por 400 NO son años bisiestos (por ejemplo, 1700, 1800 y 1900 NO fueron años bisiestos, NI 2100 será un año bisiesto) ", () => {
        expect(esBisiesto(2100)).toEqual(false);
      });
    it("Todos los años divisibles por 4 pero no por 100 SON años bisiestos (por ejemplo, 2008, 2012, 2016), ", () => {
        expect(esBisiesto(2008)).toEqual(true);
      });
      
      it("Todos los años que no son divisibles por 4 NO son años bisiestos (por ejemplo, 2017, 2018, 2019). ", () => {
        expect(esBisiesto(2019)).toEqual(false);
      });
  });

 