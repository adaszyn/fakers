const faker = require('faker')
const generateX = require('./generate-x')

module.exports = (typeX, typeY, unit)=>{
  // get random length
  const dataLength = faker.random.number({min:30, max:50})
  // setup array to store
  let elements = []
  let currentElement = 0
  // generate all elements
  while(currentElement < dataLength){
    currentElement++
    elements.push(generateX(typeX, typeY, unit))
  }
  return elements
}
