// const xlsxData = require('./server')().sheetJson
const xlsxDataLen = xlsxData.length

let Lottery = function () {
  this.opts = {
    scrollTimer: null,
    resultPrize: [],
    $scroll: document.getElementById('scroll')
  }
}

Lottery.DEFAULTS = {

}

Lottery.prototype.init = function () {
  // console.log(xlsxData)
  this.openModel()
}

Lottery.prototype.openModel = function () {
  this.start(1, 2)
}

/**
 * 启动抽奖
 * @param level 几等奖
 * @param count 几人
 */
Lottery.prototype.start = function (level, count) {
  let opts = this.opts
  opts.scrollTimer = setInterval(() => {
    opts.resultPrize = this.randomSelect(xlsxData, count)
  }, 50)

  // setTimeout(() => {
  //   this.stop()
  //   console.log('最后得奖' + JSON.stringify(this.opts.resultPrize))
  // }, 5000)
}

/**
 * 随机选出不重复的项
 * @param arr
 * @param count
 */
Lottery.prototype.randomSelect = function (arr, count) {
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
    i++
  }

  this.opts.$scroll.innerText = JSON.stringify(resultArr)

  return resultArr
}

/**
 * 停止抽奖
 */
Lottery.prototype.stop = function () {
  clearInterval(this.opts.scrollTimer)
  console.log('最后得奖' + JSON.stringify(this.opts.resultPrize))
}

/**
 *
 * @param arr
 */
Lottery.prototype.showLottery = function (arr) {
  console.log(`得奖人员是：${arr}`)
}

Lottery.prototype.closeModel = function () {

}

Lottery.prototype.saveData = function () {

}

let lottery = new Lottery()
lottery.init()
// lottery.openModel()

document.getElementById('btnStop').onclick = function (event) {
  lottery.stop()
}
