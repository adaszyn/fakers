const faker = require('faker')
const PLATFORMS = require('./../commons/platforms')

module.exports = (type)=> {
  switch (type) {
    case 'day':
      return faker.date.recent()

    case 'platform':
      return faker.random.arrayElement(PLATFORMS)

    default:
      return null
  }
}
