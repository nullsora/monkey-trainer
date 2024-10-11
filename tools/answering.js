import { screen } from "@nut-tree/nut-js"

import getConfig from "./getConfig.js"
import sleep from "./sleep.js"

import { drawLessThan, drawMoreThan, drawEqual } from "./answeringTools/draw.js"
import clearCache from "./answeringTools/screenshot.js"
import getMonkeyArea from "./getMonkeyArea.js"
import ocr from "./answeringTools/ocr.js"

const { screenshotPath } = await getConfig()
const { currentQuestion, nextQuestion, answer } = getMonkeyArea()

const shotNums = async (time) => {
  const screenshots = await Promise.all([
    screen.captureRegion(`${time}-c-1.png`, currentQuestion[0], undefined, screenshotPath),
    screen.captureRegion(`${time}-c-2.png`, currentQuestion[1], undefined, screenshotPath),
    screen.captureRegion(`${time}-n-1.png`, nextQuestion[0], undefined, screenshotPath),
    screen.captureRegion(`${time}-n-2.png`, nextQuestion[1], undefined, screenshotPath),
  ])

  /*
  return {
    current: [screenshots[0], screenshots[1]],
    next: [screenshots[2], screenshots[3]],
  }
  */
}

const waitAndOcr = async (time, scanCount, picNames = []) => {
  await sleep(time)
  await shotNums(scanCount)
  return await Promise.all(picNames.map(picName => ocr(screenshotPath, picName)))
}

export default async (scanCount, currAns, waitTime = 200, ocrWaitTime = 180) => {
  await sleep(waitTime)

  let nextAns = null, markWrong = false, done = false, operation = null

  if (currAns) {
    switch (currAns) {
      case ">":
        operation = drawMoreThan
        break
      case "<":
        operation = drawLessThan
        break
      case "=":
        // operation = drawEqual
        markWrong = true
        break
    }
    done = true
  }

  await shotNums(scanCount)

  if (!done) {
    const ocrResult = await waitAndOcr(0, scanCount, [
      `${scanCount}-c-1.png`,
      `${scanCount}-c-2.png`,
      `${scanCount}-n-1.png`,
      `${scanCount}-n-2.png`,
    ])

    const currentNums = [
      parseInt(ocrResult[0].match(/\d+(\.\d+)?/g)),
      parseInt(ocrResult[1].match(/\d+(\.\d+)?/g))
    ]
    const nextNums = [
      parseInt(ocrResult[2].match(/\d+(\.\d+)?/g)),
      parseInt(ocrResult[3].match(/\d+(\.\d+)?/g))
    ]

    if (currentNums[0] > currentNums[1]) {
      console.log(`${currentNums[0]} > ${currentNums[1]}`)
      operation = drawMoreThan
    } else if (currentNums[0] < currentNums[1]) {
      console.log(`${currentNums[0]} < ${currentNums[1]}`)
      operation = drawLessThan
    } else {
      console.log(`${currentNums[0]} = ${currentNums[1]}`)
      markWrong = true
      // operation = drawEqual
    }

    if (nextNums[0] > nextNums[1]) {
      console.log(`${nextNums[0]} > ${nextNums[1]}`)
      nextAns = ">"
    } else if (nextNums[0] < nextNums[1]) {
      console.log(`${nextNums[0]} < ${nextNums[1]}`)
      nextAns = "<"
    } else {
      console.log(`${nextNums[0]} = ${nextNums[1]}`)
      nextAns = "="
    }

    if (operation) await operation(answer)
  }

  if (operation && done) {
    const [, ocrResult] = await Promise.all([
      operation(answer),
      waitAndOcr(ocrWaitTime, scanCount, [
        `${scanCount}-n-1.png`,
        `${scanCount}-n-2.png`,
      ])
    ])
    const nextNums = [
      parseInt(ocrResult[0].match(/\d+(\.\d+)?/g)),
      parseInt(ocrResult[1].match(/\d+(\.\d+)?/g))
    ]
    if (nextNums[0] > nextNums[1]) {
      console.log(`${nextNums[0]} > ${nextNums[1]}`)
      nextAns = ">"
    } else if (nextNums[0] < nextNums[1]) {
      console.log(`${nextNums[0]} < ${nextNums[1]}`)
      nextAns = "<"
    } else {
      console.log(`${nextNums[0]} = ${nextNums[1]}`)
      nextAns = "="
    }
  }

  Promise.all([
    clearCache(screenshotPath, `${scanCount}-c-1.png`),
    clearCache(screenshotPath, `${scanCount}-c-2.png`),
    clearCache(screenshotPath, `${scanCount}-n-1.png`),
    clearCache(screenshotPath, `${scanCount}-n-2.png`)
  ])

  return { nextAns, markWrong }
}