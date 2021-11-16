import { Jugador } from "./clases";


describe("Pruebas de clases", () => {

    const jugador = new Jugador;

    beforeEach(() => {
        console.log("beforeEach")
        jugador.hp = 100;
    })

    it("Debe retornar 80 de hp si recibe 20 de daño", () => {



        const resp = jugador.recibeDaño(20);

        expect(resp).toBe(80);
    })

    it("Debe retornar 50 de hp si recibe 50 de daño", () => {


        const resp = jugador.recibeDaño(50);

        expect(resp).toBe(50);
    })

    it("Debe retornar 0 de hp si recibe 100 de daño", () => {

        const resp = jugador.recibeDaño(100);

        expect(resp).toBe(0);

    })

})