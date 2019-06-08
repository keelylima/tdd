const expect = require('chai').expect;
const soma = require('../src/soma');

describe('Deve retornar a soma de dois numeros', () => {
    it('A soma deve ser uma funcao', () => {
        expect(soma).to.be.a('function')
    })
    
    it('A soma deve retornar 10 quando passamos os parametros 4 e 6', () => {
        expect(soma(4, 6)).to.be.equal(10)
    })

    it('A soma deve retornar 7 quando passamos os parametros 4 e 3', () => {
        expect(soma(4, 3)).to.be.equal(7)
    })
    it('A soma deve retornar um erro quando nao passarmos parametros', () => {
        expect(soma()).to.be.an('error')
    })

    it('A soma deve retornar um erro quando passamos apenas um parametro', () => {
        expect(soma(4)).to.be.an('error')
    })

    it('A soma deve retornar um erro quando passamos letras', () => {
        expect(soma('rt','gt')).to.be.an('error')
    })
})