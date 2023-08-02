import { realizarSorteio } from "./realisarSorteio"

describe("dado um sorteio de um amigo secreto", () => {

    test("cada participante não sorteie o próprio nome", () => {

        const participantes = [
            'Ney',
            'Messi',
            'Cristiano',
            'Mbappe',
            'Vinicius',
            'Rodrygo'
        ]

        const sorteio = realizarSorteio(participantes)
        participantes.forEach(participante => {
            const amigoSecreto = sorteio.get(participante)
            expect(amigoSecreto).not.toEqual(participante)
        })
    })  
})