import { boolean } from "./boolean";

describe("Pruebas para booleanos", () => {

    it("Debe retornar true", () => {

        const res = boolean();

        expect(res).toBeTruthy();

    })

})