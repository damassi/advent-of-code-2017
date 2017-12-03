import fs from 'fs'
import path from 'path'
import readline from 'readline'

const getPath = (file) => path.resolve(process.cwd(), 'src', file)

export function getFileInput (file) {
  return fs.readFileSync(getPath(file), {
    encoding: 'UTF8'
  })
}

export function getRowInput (file) {
  return new Promise((resolve, reject) => {
    const stream = readline.createInterface({
      input: fs.createReadStream(getPath(file)),
      output: process.stdout,
      terminal: false
    })

    const lines = []

    stream.on('line', (line) => {
      const parsed = line.trim().replace(/\t/g, ',')
      lines.push(parsed)
    })

    stream.on('close', () => {
      resolve(lines)
    })

    stream.on('error', reject)
  })
}

