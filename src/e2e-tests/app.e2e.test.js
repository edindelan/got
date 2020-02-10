/* eslint-disable */
import puppeteer from 'puppeteer';

describe('E2E test suit', () => {
  let page;
  let browser;
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 50,
      defaultViewport: {
        width: 960,
        height: 600,
      },
    });
    page = await browser.newPage();
  }, 15000);

  afterAll(() => {
    browser.close();
  });

  it('homepage is rendered correctly', async () => {
    await page.goto("http://localhost:3000/slide/1", { waitUntil: 'networkidle0' });
    const houseName = await page.waitForSelector('[class^="Content"]');
    expect(houseName).toBeTruthy();
  }, 15000);

  it('homepage slider is working correctly', async () => {
    await page.goto("http://localhost:3000/slide/1", { waitUntil: 'networkidle0' });
    const arrow = await page.waitForSelector('[data-testid="next-slide"]');
    await arrow.click();
    const houseName = await page.waitForSelector('[class^="Content"]');
    expect(houseName).toBeTruthy();
  }, 15000);

  it('map is rendered correctly', async () => {
    await page.goto("http://localhost:3000/map/1", { waitUntil: 'networkidle0' });
    const map = await page.waitForSelector('[class^="MiniZoomMap"]');
    expect(map).toBeTruthy();
  }, 15000);

  it('list is rendered correctly', async () => {
    await page.goto("http://localhost:3000/list", { waitUntil: 'networkidle0' });
    const list = await page.waitForSelector('[class^="List"]');
    expect(list).toBeTruthy();
  }, 15000);
});
