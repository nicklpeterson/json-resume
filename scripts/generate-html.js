import fs from "fs";
import pug from "pug";

const root = (path) => `${import.meta.dirname}/../${path}`

const pugFilePath = root("index.pug")
const resumeConfigPath = root("resume.json")
const buildDirPath = root("build")
const targetPath = root("build/index.html")

const rawConfig = fs.readFileSync(resumeConfigPath);
const config = JSON.parse(rawConfig);

const html = pug.compileFile(pugFilePath, {
  pretty: true,
});

if (!fs.existsSync(buildDirPath)) {
  fs.mkdirSync(buildDirPath)
}

fs.writeFileSync(targetPath, html(config));
