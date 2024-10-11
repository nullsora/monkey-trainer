import answering from "./tools/answering.js"
import { clickAgainButton, getQuestionCount } from "./tools/getMonkeyInfo.js"
import sleep from "./tools/sleep.js"

await clickAgainButton()
await sleep(8500)

let maxRunTime = (await Promise.all([
  sleep(4000),
  getQuestionCount()
]))[1]

maxRunTime = (maxRunTime ? maxRunTime : 30) + 2

console.log(`运行次数: ${maxRunTime}`)

const Status = { BEGIN: 0, ANSWERING: 1, END: 2 }

let status = Status.BEGIN

let nextAns = null, wrongCount = 0

for (let i = 0; i < maxRunTime; i++) {
  let ret = await answering(i, nextAns, 200, 180)
  nextAns = ret.nextAns
  if (ret.markWrong) wrongCount++
}

console.log(`运行结束, 出错数量: ${wrongCount} / ${maxRunTime}`)
