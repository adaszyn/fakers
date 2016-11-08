const faker = require('faker')
const generateMedia = require('./generate-y-media')
const generateLabel = require('./generate-label')

module.exports = (typeY, unit)=>{
  return {
    label: generateLabel(typeY),
    value: faker.random.number(),
    unit: unit,
    media: generateMedia(),
    type: typeY
  }
}
