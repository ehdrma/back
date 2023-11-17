const puppeteer = require('puppeteer');
const Article = require('./models/Article');

async function scrapeNHKEasyNews() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  try {
    // NHK Easy News 홈페이지 열기
    await page.goto('https://www3.nhk.or.jp/news/easy/');

    // 기사 링크가 로드될 때까지 대기 (최대 10초 대기)
    await page.waitForSelector('.news-list__item a', { timeout: 10000 });

    // 기사 링크를 포함하는 요소 선택
    const articleLinks = await page.evaluate(() => {
      const links = [];
      const articleElements = document.querySelectorAll('.news-list__item a');
      articleElements.forEach((element) => {
        links.push(element.href);
      });
      return links.slice(0, 10); // 링크 10개만 선택
    });

    const articles = [];

    // 각 기사 페이지로 이동하여 정보 크롤링
    for (const link of articleLinks) {
      const articlePage = await browser.newPage();
      await articlePage.goto(link);

      // 기사 페이지가 로드될 때까지 대기 (최대 10초 대기)
      await articlePage.waitForSelector('h1.article-main__title', { timeout: 10000 });

      const articleData = await articlePage.evaluate(() => {
        const title = document.querySelector('h1.article-main__title').textContent.trim();
        const date = document.querySelector('#js-article-date').textContent.trim();
        const bodyElements = document.querySelectorAll('.article-main__body.article-body#js-article-body p');
        const body = Array.from(bodyElements).map(p => p.textContent).join('\n').trim();

        return {
          title: title,
          date: date,
          body: body,
        };
      });

      // 크롤링한 기사 데이터를 articles 배열에 추가
      articles.push(articleData);

      await articlePage.close();
    }

    // Puppeteer 브라우저 닫기
    await browser.close();

    // 스크랩한 기사 데이터를 반환
    return articles;
  } catch (error) {
    console.error('Error while scraping NHK Easy News:', error);
    // 에러 발생 시 빈 배열 반환
    return [];
  }
}

module.exports = scrapeNHKEasyNews;
