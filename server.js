//express 서버 설정 및 API 엔드포인트 제공
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User'); // User 모델 불러오기
const Article = require('./models/Article'); // Article 모델 불러오기
const scrapeNHKEasyNews = require('./scrapy'); // 스크래핑 함수 불러오기
const translateArticles = require('./translate'); // 번역 함수 불러오기

const app = express();
const PORT = 5000;
const cors = require('cors');

app.use(express.json());

// MongoDB 연결
mongoose.connect('mongodb+srv://ehdrma99:fjqmffl99~@newnihon-cluster.tu3nh1c.mongodb.net/newnihon', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// 스크래핑 후, 데이터베이스 저장 엔드포인트
app.get('/scrape', async (req, res) => {
  try {
    // 스크래핑 함수 호출
    const articles = await scrapeNHKEasyNews();

    // MongoDB 저장
    await Article.insertMany(articles);

    res.json({ message: '데이터 스크래핑 및 저장이 완료되었습니다.' });
  } catch (error) {
    console.error('Error while scraping and saving data:', error);
    res.status(500).json({ error: '서버 오류입니다.' });
  }
});

app.get('/articles', async (req, res) => {
  try {
    // 데이터베이스에서 기사 목록 조회
    const articles = await Article.find({});

    // 기사 목록 응답
    res.json(articles);
  } catch (error) {
    console.error('Error while fetching articles:', error);
    res.status(500).json({ error: '서버 오류입니다.' });
  }
});

// 번역 후, 데이터베이스 업데이트 엔드포인트
app.get('/translateAndUpdate', async (req, res) => {
  try {
    await translateArticles(); // 번역 함수 호출
    res.json({ message: 'Translation and update complete' });
  } catch (error) {
    console.error('Error while translating and updating articles:', error);
    res.status(500).json({ error: '서버 오류입니다.' });
  }
});

app.post('/api/signup', async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      email: email,
      password: hashedPassword,
    });

    await user.save();
    res.json({ message: '회원가입 성공' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: '서버 오류' });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(400).json({ error: '등록되지 않은 이메일 주소입니다.' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(400).json({ error: '비밀번호가 올바르지 않습니다.' });
    }

    res.json({ message: '로그인 성공' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: '서버 오류' });
  }
});

app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});