const faker = require('faker')

module.exports = ()=>{
  return {
    thumbnailUrl: faker.image.avatar()
  }
}
