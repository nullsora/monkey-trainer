import { Point, Region } from "@nut-tree/nut-js"
import getConfig from "./getConfig.js"

const { scale, window } = await getConfig()

// console.log(scale, window)

const calcRegion = (x, y, width, height) =>
  new Region(
    ~~((x + window.left) / 816 * window.width / scale),
    ~~((y + window.top) / 1458 * window.height / scale),
    ~~(width / 816 * window.width / scale),
    ~~(height / 1458 * window.height / scale)
  )

export default () => {
  return {
    currentQuestion: [
      calcRegion(260, 315, 120, 80),
      calcRegion(440, 315, 120, 80)
    ],
    nextQuestion: [
      calcRegion(300, 485, 90, 60),
      calcRegion(435, 485, 90, 60)
    ],
    questionCount: calcRegion(400, 735, 40, 40),
    answer: new Region(
      ~~(window.width * 0.5 / scale),
      ~~(window.height * 0.6 / scale),
      ~~(30 / scale),
      ~~(30 / scale)
    ),
    againButton: new Point(
      ~~(window.width * 0.5 / scale),
      ~~(window.height * 0.85 / scale)
    ),
  }
}