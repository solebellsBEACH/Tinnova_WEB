import { createUserStringData } from '..'

test('Testando hook que retorna a string para criar um novo usuário!!', () => {
    expect(createUserStringData({
        name: 'Lucas',
        cpf: '11111111111',
        phone: '11111111111',
        email: '333333',
    }))
    .toBe('{ "name": "Lucas", "cpf": "11111111111", "phone": "11111111111", "email": "333333" }')
})