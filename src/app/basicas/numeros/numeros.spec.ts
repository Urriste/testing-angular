import { numeros } from "./numeros";

describe("Pruebas de numeros", () => {
    const num = 5;


    it("Debe retornar un numero", () => {

        const res = numeros(num)

        expect(typeof res).toBe("number")

    })


    it("Debe ser mayor a 3", () => {

        const res = numeros(num)

        expect(res).toBeGreaterThan(3);

    })

    it("Debe ser menor o igual a 10", () => {

        const res = numeros(num);

        expect(res).toBeLessThanOrEqual(10);

    })

})