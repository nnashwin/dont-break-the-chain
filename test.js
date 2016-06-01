import test from 'ava'

test('test what t is', t => {
    t.pass()
})

test('can display', t => {
    const tyler = 'tyler'
    t.is(tyler, 'tyler', 'tyler is not a sara')
})
