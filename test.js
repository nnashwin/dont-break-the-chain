import test from 'ava'
import { mapInputToObject } from './helpers'

const document = global.window.document
test('take input from an input element and map it to an object', t => {
    const object = {}
    const input = document.createElement('div')
    input.value = 'cookies'
    input.id = 'cookiePut'
    document.body.appendChild(input)
    mapInputToObject(document.getElementById('cookiePut'), object, 'cookies')
    t.is(object['cookies'], 'cookies')
})

test('habit added to object', t => {
    
})

test('habit deleted from object', t => {
    
})

test('if task exists, do not add task to object', t => {
    
})

test('if task exists, show dom element informing user that task can not be added', t => {
    
}) 

test('if habit saved, show habit saved message', t => {
    
})

test('if habit deleted, show habit deleted message', t => {
    
})

// test('can display', t => {
//     const tyler = 'tyler'
//     t.is(tyler, 'tyler', 'tyler is not a sara')
// })
