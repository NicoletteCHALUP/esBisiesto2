import esBisiesto from "./esBisiesto.js";

describe("Es Bisiesto", () => {
    it("El 4 deberia considerarse como anio bisiesto", () => {
      expect(esBisiesto(4)).toEqual(true);
    });

    it("El 5 NO deberia considerarse como anio bisiesto", () => {
        expect(esBisiesto(5)).toEqual(false);
      });
  });

 