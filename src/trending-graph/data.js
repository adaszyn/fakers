const generateData = require('./generate-array')

module.exports = (typeX, typeY, unit)=>{
  return {
    data: generateData(typeX, typeY, unit)
  }
}
