function soma(a, b) {
    if (a && b) {
        return a + b;
    } else if (arguments.length > 2 || typeof arguments !== 'number') {
        return new Error('voce deve informar 2 numeros e nao pode ser letras')
    }
}

module.exports = soma;