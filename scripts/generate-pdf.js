import puppeteer from "puppeteer";
import path from "path";

const browser = await puppeteer.launch();
const page = await browser.newPage();

const localHtmlPath = path.resolve(`${import.meta.dirname}/../index.html`);

await page.goto(`file://${localHtmlPath}`, {
  waitUntil: "networkidle2",
});

const bodyHeight = await page.evaluate(() => document.body.scrollHeight);

await page.pdf({
  path: "nick-peterson.pdf",
  height: `${bodyHeight}px`,
  preferCSSPageSize: false,
});

await browser.close();
