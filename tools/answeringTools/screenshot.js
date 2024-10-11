import * as fs from "fs/promises"
import path from "path"

const clearCache = async (imagePath, imageName) => {
  try {
    const realPath = path.resolve(process.cwd(), imagePath, imageName)
    // console.log(realPath)
    await fs.rm(realPath)
  } catch (err) {
    console.error(err)
  }
}

export default clearCache