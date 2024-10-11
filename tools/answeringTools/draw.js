import { mouse, Point, Region, straightTo } from "@nut-tree/nut-js"

mouse.config.mouseSpeed = 1e8

/**
 * 
 * @param {Region} region 
 */
const drawMoreThan = async (region) => {
  await mouse.move(straightTo(new Point(region.left, region.top)))
  await mouse.drag(straightTo(new Point(region.left + region.width, region.top + region.height / 2)))
  await mouse.drag(straightTo(new Point(region.left, region.top + region.height)))
}

/**
 * 
 * @param {Region} region 
 */
const drawLessThan = async (region) => {
  await mouse.move(straightTo(new Point(region.left + region.width, region.top)))
  await mouse.drag(straightTo(new Point(region.left, region.top + region.height / 2)))
  await mouse.drag(straightTo(new Point(region.left + region.width, region.top + region.height)))
}

/**
 * 
 * @param {Region} region 
 */
const drawEqual = async (region) => {
  await mouse.move(straightTo(new Point(region.left, region.top)))
  await mouse.drag(straightTo(new Point(region.left + region.width, region.top)))
  await mouse.move(straightTo(new Point(region.left, region.top + region.height)))
  await mouse.drag(straightTo(new Point(region.left + region.width, region.top + region.height)))
}

export { drawMoreThan, drawLessThan, drawEqual }