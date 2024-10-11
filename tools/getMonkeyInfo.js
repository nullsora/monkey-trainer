import { Button, mouse, screen, straightTo } from "@nut-tree/nut-js"
import getMonkey from "./getMonkeyArea.js"
import ocr from "./answeringTools/ocr.js"
import getConfig from "./getConfig.js"
import clearCache from "./answeringTools/screenshot.js"

const { screenshotPath } = await getConfig()

mouse.config.mouseSpeed = 1e8

const clickAgainButton = async () => {
  await mouse.move(straightTo(getMonkey().againButton))
  await mouse.click(Button.LEFT)
}

const getQuestionCount = async () => {
  const region = getMonkey().questionCount
  await screen.captureRegion("temp-questionCount.png", region, undefined, screenshotPath)
  const count = parseInt((await ocr(screenshotPath, "temp-questionCount.png")).match(/\d+(\.\d+)?/g))
  clearCache(screenshotPath, "temp-questionCount.png")
  return count
}

export { clickAgainButton, getQuestionCount }