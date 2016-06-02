function mapInputToObject (input, object, keyName) {
    return object[keyName] = input.value
}

module.exports = { mapInputToObject: mapInputToObject }
