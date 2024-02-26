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
  });

 