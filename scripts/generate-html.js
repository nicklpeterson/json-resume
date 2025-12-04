import fs from "fs";
import nunjucks from "nunjucks";

const root = (path) => `${import.meta.dirname}/../${path}`;

const templateFilePath = root("index.njk");
const resumeConfigPath = root("resume.json");
const cssFilePath = root("index.css");
const buildDirPath = root("build");
const htmlTargetPath = root("build/index.html");
const cssTargetPath = root("build/index.css");

const cssFile = fs.readFileSync(cssFilePath);

const rawConfig = fs.readFileSync(resumeConfigPath);
const config = JSON.parse(rawConfig);

nunjucks.configure(".", { autoescape: true });
const output = nunjucks.render(templateFilePath, config);

if (!fs.existsSync(buildDirPath)) {
  fs.mkdirSync(buildDirPath);
}

fs.writeFileSync(htmlTargetPath, output);
fs.writeFileSync(cssTargetPath, cssFile);
