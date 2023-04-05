import puppeteer from "puppeteer";
import { saveToDB, saveArray } from "./dbservice";
import { FlatRecordCustom } from "../types/types";

const imgSelector = "div._2xzMRvpz7TDA2twKCXTS4R a:first-of-type";
const nameSelector = "span.name.ng-binding";

export const getRecordsByScrap = async (
  recordsCountToDownload: number
): Promise<void> => {
  let AllTheRecords: FlatRecordCustom[] = [];
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  for (let i = 1; i * 20 <= recordsCountToDownload; i++) {
    console.log(i);
    const url = `https://www.sreality.cz/hledani/prodej/byty?strana=${i}`;
    await page.goto(url);
    await page.waitForSelector(".property .ng-scope");
    await page.waitForSelector(imgSelector);
    await page.waitForSelector(nameSelector);
    const flatRecords = await page.evaluate((): FlatRecordCustom[] => {
      const imagesURL = document.querySelectorAll<HTMLElement>(
        "div._2xzMRvpz7TDA2twKCXTS4R a:first-of-type"
      );
      const names = document.querySelectorAll<HTMLElement>(
        "span.name.ng-binding"
      );
      const results: FlatRecordCustom[] = [];
      for (let i = 0; i < imagesURL.length; i++) {
        const urlElement = imagesURL[i].querySelector("img");
        const url: string | null = urlElement
          ? urlElement.getAttribute("src")
          : null;
        const name: string = names[i].innerText;
        if (typeof url === "string") {
          results.push({
            name,
            url,
          });
        }
      }
      return results;
    });
    AllTheRecords = [...AllTheRecords, ...flatRecords];
  }
  await browser.close();
  await saveArray(AllTheRecords);
};
