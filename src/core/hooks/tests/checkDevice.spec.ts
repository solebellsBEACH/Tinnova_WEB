import { checkDevice } from '..'

test('Testando checkDevice para um PC !!', () => {
    expect(checkDevice({
        navigator: { userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.0.0 Safari/537.36' }
    })).toBe(false)
})