const readFilePath = '../xlsx/data.xlsx'
if (typeof require !== 'undefined') XLSX = require('xlsx')
const workbook = XLSX.readFile(readFilePath)
const sheetJson = XLSX.utils.sheet_to_json(workbook.Sheets['Sheet1'])
const fs = require('fs')

fs.writeFile('data.js', `let xlsxData = ${JSON.stringify(sheetJson, null, 2)}`, 'utf8', () => {
  console.log('生成JSON数据完毕')
});
