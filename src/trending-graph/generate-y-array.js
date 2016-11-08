const generateY = require('./generate-y')

module.exports = (n, typeY, unit)=> {
  // setup array to store
  let elements = []
  let currentElement = 0
  // generate all elements
  while (currentElement < n) {
    currentElement++
    elements.push(generateY(typeY, unit))
  }
  return elements
}
