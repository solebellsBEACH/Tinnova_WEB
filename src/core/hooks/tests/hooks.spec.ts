import { checkDevice, notHaveEmptyFields, stringToArray, stringToObject } from '..'

test('Testando hook que valida os fields !!', () => {
    expect(notHaveEmptyFields({
        name: 'Lucas',
        cpf: '111111',
        phone: '1111',
        email: '',
    })).toBe(false)
})

test('Testando checkDevice para um PC !!', () => {
    expect(checkDevice({
        navigator: { userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.0.0 Safari/537.36' }
    })).toBe(false)
})


test('Testando hook transforma uma string em um Object', () => {
    const value = '{ "name": "Lucas", "cpf": "111111111", "phone": "111111111", "email": "dddddddddd" }'
    expect(stringToObject(value).name)
        .toBe('Lucas')
})

test('Testando hook transforma uma string em um array', () => {
    const value = '[{ "name": "Lucas", "cpf": "111111111", "phone": "111111111", "email": "dddddddddd" }, { "name": "Lucas", "cpf": "111111111", "phone": "111111111", "email": "dddddddddd" }, { "name": "Lucas", "cpf": "111111111", "phone": "111111111", "email": "dddddddddd" }]'
    expect(stringToArray(value).length)
    .toBe(3)
})