import * as tesseract from "node-tesseract-ocr"
import path from "path"

const ocr = async (filePath, imageName) => {
  try {
    const text = await tesseract.recognize(
      path.resolve(process.cwd(), filePath, imageName),
      {
        lang: "eng",
        oem: 1,
        psm: 6,
        tessedit_char_whitelist: "0123456789."
      }
    )
    return text
  } catch (err) {
    console.error(err)
    return null
  }
}

export default ocr