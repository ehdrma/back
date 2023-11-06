const mongoose = require('mongoose');
const { Translate } = require('@google-cloud/translate').v2;
const Article = require('./models/Article'); // 기사 모델 불러오기

const translate = new Translate({
  projectId: 'newnihon', // Google Cloud 프로젝트 ID
  keyFilename: './newnihon-translate.json', // 서비스 계정 키(JSON) 파일 경로
});

async function translateArticles() {
  try {
    // MongoDB 클라이언트 연결 상태 확인
    if (mongoose.connection.readyState !== 1) {
      console.error('MongoDB is not connected.');
      return;
    }

    // MongoDB에서 기사 목록 가져오기
    const articles = await Article.find({});

    // 각 기사를 번역하고 업데이트 또는 추가
    await Promise.all(articles.map(async (article) => {
      try {
        // 기사 제목을 지정한 언어로 번역
        const [translatedTitle] = await translate.translate(article.title, 'ko'); // 예제에서는 한국어로 번역

        // 기사 본문을 지정한 언어로 번역
        const [translatedText] = await translate.translate(article.body, 'ko'); // 예제에서는 한국어로 번역

        // 새로운 번역된 텍스트 추가 또는 업데이트
        article.translatedTitle = translatedTitle;
        article.translatedText = translatedText;

        // MongoDB에 업데이트된 기사 업데이트
        await article.save();

        return article;
      } catch (error) {
        console.error('Error during translation:', error);
        return article;
      }
    }));

    console.log('Translation and update complete');
  } catch (error) {
    console.error('Error while translating and updating articles:', error);
  } finally {
    // MongoDB 연결 닫기 (필요한 경우에만 닫을 수 있도록 설정)
    // mongoose.connection.close();
  }
}