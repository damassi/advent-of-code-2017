import fs from 'fs'
import path from 'path'

export function getInput (file) {
  return fs.readFileSync(path.resolve(process.cwd(), 'src', file), {
    encoding: 'UTF8'
  })
}
