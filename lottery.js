const xlsxData = require('./server')().sheetJson
const xlsxDataLen = xlsxData.length

let Lottery = function () {
   this.opts = {
    scrollTimer: null
   }
}

Lottery.DEFAULTS = {

}

Lottery.prototype.init = function () {
  // console.log(xlsxData)
  this.openModel()
}

Lottery.prototype.openModel = function () {
  this.start(1, 1)
}

/**
 * 启动抽奖
 * @param level 几等奖
 * @param count 几人
 */
Lottery.prototype.start = function (level, count) {
  let rndNum = 0
  let resultArr = []
  this.opts.scrollTimer = setInterval(() => {
    rndNum = ~~(Math.random() * xlsxDataLen)
    console.log(xlsxData.slice(rndNum, rndNum + 1)[0].mobile)

    // while (true) {
    //   rndNum = ~~(Math.random() * xlsxDataLen)
    //   if (!resultArr.includes(xlsxData[rndNum])) {
    //     resultArr.push()
    //   }
    //   if (resultArr >= count) {
    //     break;
    //   }
    // }

    let tempArr = []
    while (true) {

    }

  }, 1000)
}

/**
 * 停止抽奖
 */
Lottery.prototype.stop = function () {
  this.showLottery('获奖的人员')
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
