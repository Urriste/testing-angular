/* describe("Pruebas de strings")

it("Debe regresar un string") */

import { mensaje } from "./string"


describe("Pruebas de strings", () => {

    it("Debe regresar un string", () => {

        const resp = mensaje("Lucas");

        expect(typeof resp).toBe("string");


    })

    it("Debe retornar un saludo con el nombre enviado", () => {

        const nombre = "Lucas";

        const resp = mensaje(nombre);

        expect(resp).toContain(nombre);


    })

})