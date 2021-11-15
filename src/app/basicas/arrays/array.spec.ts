import { arrays } from "./array";

describe("Pruebas de arrays", () => {

    it("Debe retornar al menos 3 nombres", () => {

        const res = arrays();

        expect(res.length).toBeGreaterThanOrEqual(3);

    })

    it("Debe existir Lucas y Christian", () => {

        const res = arrays();

        expect(res).toContain("Lucas");
        expect(res).toContain("Christian")


    })

})
