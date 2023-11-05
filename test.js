const puppeteer = require('puppeteer');

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
      return links.slice(0, 5); // 링크 10개만 선택
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

      articles.push(articleData);
      await articlePage.close();
    }

    // 크롤링한 기사 데이터 출력
    console.log(articles);
  } catch (error) {
    console.error('Error while scraping NHK Easy News:', error);
  } finally {
    await browser.close();
  }
}

scrapeNHKEasyNews();