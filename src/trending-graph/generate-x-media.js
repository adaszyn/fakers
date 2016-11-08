const faker = require('faker')

module.exports = (platform)=> {
  return {
    label: platform,
    thumbnailUrl: faker.image.avatar(),
    type: 'platform',
    id: faker.random.number({ min: 1, max: 5 })
  }
}
