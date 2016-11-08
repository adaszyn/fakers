const faker = require('faker')
const generateYArray = require('./generate-y-array')
const generateXMedia = require('./generate-x-media')
const generateLabel = require('./generate-label')

module.exports = (typeX, typeY, unit)=> {
  const yArrayLength = faker.random.number({ min: 3, max: 3 })
  const platform =  generateLabel(typeX)
  return {
    label: platform,
    type: typeX,
    values: generateYArray(yArrayLength, typeY, unit),
    media: generateXMedia(platform, typeX), // generate media
    total: faker.random.number()
  }
}
