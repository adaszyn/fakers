const faker = require('faker')

module.exports = (platform, typeX)=> {
  return {
    label: platform,
    thumbnailUrl: faker.image.avatar(),
    type: typeX,
    id: faker.random.number({ min: 1, max: 5 })
  }
}
