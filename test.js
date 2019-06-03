let randomSelect = function (arr, count) {
  let arr1 = [...arr]
  let resultArr = []
  let rndNum = 0
  const len = arr1.length
  let i = 0
  while (true) {
    if (i >= count) {
      break
    }
    rndNum = ~~(Math.random() * (len - i))
    resultArr.push(arr1.splice(rndNum, 1)[0])
    // console.log('删除项', arr1.splice(rndNum, rndNum + 1))
    console.log('i', i)
    console.log('随机数', rndNum)
    console.log('原数组', arr1)
    console.log('新数组', resultArr)
    i++
  }
  console.log('最后数组', resultArr)
  return resultArr
}

console.log(randomSelect([1, 2, 3], 3))
