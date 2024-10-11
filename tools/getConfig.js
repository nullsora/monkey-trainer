import * as fs from "fs/promises"
import path from "path"

export default async () => {
  const configPath = path.resolve(process.cwd(), "config.json")
  const config = JSON.parse(await fs.readFile(configPath))
  return config
}