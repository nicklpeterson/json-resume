import puppeteer from "puppeteer";
import path from "path";

const root = (path) => `${import.meta.dirname}/../${path}`;

const htmlPath = root("build/index.html")
const cssPath = root("build/index.css");

const browser = await puppeteer.launch({
  args: ['--no-sandbox', '--disable-setuid-sandbox']
});
const page = await browser.newPage();

const localHtmlPath = path.resolve(htmlPath);

await page.goto(`file://${localHtmlPath}`, {
  waitUntil: "networkidle2",
});

page.addStyleTag({ path: cssPath })

await page.pdf({ path: "build/nick-peterson.pdf" });

await browser.close();
