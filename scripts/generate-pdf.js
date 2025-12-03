import puppeteer from "puppeteer";
import path from "path";

const browser = await puppeteer.launch({
  args: ['--no-sandbox', '--disable-setuid-sandbox']
});
const page = await browser.newPage();

const localHtmlPath = path.resolve(`${import.meta.dirname}/../build/index.html`);

await page.goto(`file://${localHtmlPath}`, {
  waitUntil: "networkidle2",
});

const bodyHeight = await page.evaluate(() => document.body.scrollHeight);

await page.pdf({
  path: "build/nick-peterson.pdf",
  // height: `${bodyHeight + 50}px`,
  // preferCSSPageSize: false,
});

await browser.close();
