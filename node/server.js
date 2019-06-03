const readFilePath = './xlsx/data.xlsx'
if (typeof require !== 'undefined') XLSX = require('xlsx')
const workbook = XLSX.readFile(readFilePath)
const sheetJson = XLSX.utils.sheet_to_json(workbook.Sheets['Sheet1'])

module.exports = function () {
  return {
    sheetJson
  }
}
