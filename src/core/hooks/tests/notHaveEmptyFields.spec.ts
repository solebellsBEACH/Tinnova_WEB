import { notHaveEmptyFields } from '..'

test('Testando hook que valida os fields !!', () => {
    expect(notHaveEmptyFields({
        name: 'Lucas',
        cpf: '111111',
        phone: '1111',
        email: '',
    })).toBe(false)
})