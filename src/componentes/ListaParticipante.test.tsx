import { render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import ListaParticipantes from './ListaParticipante';
import { useListaDeParticipantes } from '../state/hooks/useListaDeParticipantes';

jest.mock('../state/hooks/useListaDeParticipantes', () => {
    return {
        useListaDeParticipantes: jest.fn()
    }
})

describe('uma lista vazia de participantes', () => {
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue([])
    })
    test('deve ser renderizada sem elementos', () => {
        render (
            <RecoilRoot>
                <ListaParticipantes />
            </RecoilRoot>
        )
    
        const itens  = screen.queryAllByRole('listitem')
        expect(itens).toHaveLength(0)
    })
})

describe('uma lista preenchida de participantes', () => {
    const participantes = ['Ana','Ney']

    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes)
    })

    test('deve ser renderizada sem elementos', () => {
        render (
            <RecoilRoot>
                <ListaParticipantes />
            </RecoilRoot>
        )
    
        const itens  = screen.queryAllByRole('listitem')
        expect(itens).toHaveLength(participantes.length)
    })
})