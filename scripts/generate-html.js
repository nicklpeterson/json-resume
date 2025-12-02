import fs from 'fs'
import pug from 'pug'

const rawConfig = fs.readFileSync(`${import.meta.dirname}/../resume.json`)
const config = JSON.parse(rawConfig)

const html = pug.compileFile(`${import.meta.dirname}/../index.pug`, { pretty: true })

fs.writeFileSync(`${import.meta.dirname}/../index.html`, html(config))
