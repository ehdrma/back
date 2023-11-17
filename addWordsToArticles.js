const mongoose = require('mongoose');
const Article = require('./models/Article');

mongoose.connect('mongodb+srv://ehdrma99:fjqmffl99~@newnihon-cluster.tu3nh1c.mongodb.net/newnihon', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const wordData = [
  [
    {
      word: '会議',
      meaning: '회의',
    },
    {
      word: '政府',
      meaning: '정부',
    },
    {
      word: '対策',
      meaning: '대책',
    },
    {
      word: '危険',
      meaning: '위험',
    },
    {
      word: 'コントロール',
      meaning: '제어',
    },
    {
      word: '努力する',
      meaning: '노력하다',
    },
  ],
  [
  {
    word: '避難する',
    meaning: '대피하다',
  },
  {
    word: '訓練',
    meaning: '훈련',
  },
  {
    word: '地震',
    meaning: '지진',
  },
  {
    word: '商店街',
    meaning: '상점가',
  },
  {
    word: '津波',
    meaning: '쓰나미',
  },
  {
    word: '三階',
    meaning: '3층',
  },
  {
    word: '階段',
    meaning: '계단',
  },
  {
    word: '電車',
    meaning: '전철',
  },
  {
    word: '放送',
    meaning: '방송',
  },
  {
    word: '客',
    meaning: '손님',
  },
  {
    word: '線路',
    meaning: '선로',
  },
  {
    word: '女の子',
    meaning: '소녀',
  },
],
[
  {
    word: '避難する',
    meaning: '대피하다',
  },
  {
    word: '空港',
    meaning: '공항',
  },
  {
    word: '電気',
    meaning: '전기',
  },
  {
    word: '爆弾',
    meaning: '폭탄',
  },
  {
    word: '夜',
    meaning: '밤',
  },
  {
    word: '安心する',
    meaning: '안심하다',
  },
  {
    word: '仕事に行く',
    meaning: '일하러 가다',
  },
  {
    word: '喫茶店',
    meaning: '카페',
  },
  {
    word: '話す',
    meaning: '이야기하다',
  },
  {
    word: '笑う',
    meaning: '웃다',
  },
  {
    word: '戦争',
    meaning: '전쟁',
  },
  {
    word: '悲しさ',
    meaning: '슬픔',
  },
  {
    word: '伝える',
    meaning: '전하다',
  },
  {
    word: '普通の生活',
    meaning: '평범한 삶',
  },
],
[
  {
    word: '船',
    meaning: '선박',
  },
  {
    word: '荷物',
    meaning: '화물',
  },
  {
    word: '降る',
    meaning: '내리다',
  },
  {
    word: '雨',
    meaning: '비',
  },
  {
    word: '湖',
    meaning: '호',
  },
  {
    word: '水',
    meaning: '물',
  },
  {
    word: '役所',
    meaning: '공공기관',
  },
  {
    word: '大きさ',
    meaning: '크기',
  },
  {
    word: 'ルール',
    meaning: '규칙',
  },
],
[
  {
    word: '大会',
    meaning: '대회',
  },
  {
    word: 'アジア',
    meaning: '아시아',
  },
  {
    word: 'アメリカ',
    meaning: '미국',
  },
  {
    word: '韓国',
    meaning: '한국',
  },
  {
    word: '国',
    meaning: '국가',
  },
  {
    word: '地域',
    meaning: '지역',
  },
  {
    word: '熱気球',
    meaning: '열기구',
  },
  {
    word: '集まる',
    meaning: '모이다',
  },
],
[
  {
    word: '重さ',
    meaning: '무게',
  },
  {
    word: '長さ',
    meaning: '길이',
  },
  {
    word: '基準',
    meaning: '기준',
  },
  {
    word: '法律',
    meaning: '법률',
  },
  {
    word: '水族館',
    meaning: '수족관',
  },
  {
    word: '雄',
    meaning: '수컷',
  },
  {
    word: '大きさ',
    meaning: '크기',
  },
  {
    word: '世界',
    meaning: '세계',
  },
  {
    word: '大きい',
    meaning: '크다',
  },
  {
    word: '水族館の人',
    meaning: '수족관 직원',
  },
  {
    word: '水槽に入って',
    meaning: '어항 안에서',
  },
  {
    word: 'これからも',
    meaning: '앞으로도',
  },
],
[
  {
    word: '農家',
    meaning: '농가',
  },
  {
    word: '米',
    meaning: '쌀',
  },
  {
    word: '形',
    meaning: '모양',
  },
  {
    word: '色相',
    meaning: '색상',
  },
  {
    word: 'ランク',
    meaning: '등급',
  },
  {
    word: '今年',
    meaning: '올해',
  },
  {
    word: '去年',
    meaning: '작년',
  },
  {
    word: '減少する',
    meaning: '감소하다',
  },
  {
    word: '生産する',
    meaning: '생산하다',
  },
  {
    word: '夏',
    meaning: '여름',
  },
  {
    word: 'とても',
    meaning: '매우',
  },
  {
    word: '暑い',
    meaning: '덥다',
  },
  {
    word: '収入',
    meaning: '수입',
  },
  {
    word: '原因',
    meaning: '원인',
  },
  {
    word: '低くなる',
    meaning: '낮아진다',
  },
  {
    word: '売る値段',
    meaning: '판매 가격',
  },
],
[
  {
    word: '絵本',
    meaning: '그림책',
  },
  {
    word: '先祖',
    meaning: '조상',
  },
  {
    word: '娘',
    meaning: '딸',
  },
  {
    word: '小学校',
    meaning: '초등학교',
  },
  {
    word: '肌の色',
    meaning: '피부색',
  },
  {
    word: '理由',
    meaning: '이유',
  },
  {
    word: 'いじめ',
    meaning: '괴롭힘',
  },
  {
    word: '考え方',
    meaning: '사고방식',
  },
  {
    word: '人種',
    meaning: '인종',
  },
  {
    word: '文化',
    meaning: '문화',
  },
  {
    word: '子どもたち',
    meaning: '아이들',
  },
  {
    word: '先生',
    meaning: '선생님',
  },
  {
    word: '美しい',
    meaning: '아름답다',
  },
  {
    word: '考える',
    meaning: '생각하다',
  },
  {
    word: '大学生',
    meaning: '대학생',
  },
  {
    word: '学校',
    meaning: '학교',
  },
  {
    word: 'なくす',
    meaning: '없애다',
  },
  {
    word: '勉強する',
    meaning: '공부하다',
  },
  {
    word: '伝える',
    meaning: '전하다',
  },
  {
    word: '作る',
    meaning: '만들다',
  },
  {
    word: '希望する',
    meaning: '희망하다',
  },
],
[
  {
    word: 'つくる',
    meaning: '만들다',
  },
  {
    word: '消す',
    meaning: '끄다',
  },
  {
    word: '実施する',
    meaning: '실시하다',
  },
  {
    word: '覆う',
    meaning: '덮다',
  },
  {
    word: '使用する',
    meaning: '사용하다',
  },
  {
    word: '確かめる',
    meaning: '확인하다',
  },
  {
    word: '撒く',
    meaning: '뿌리다',
  },
  {
    word: 'する',
    meaning: '하다',
  },
  {
    word: '初めて',
    meaning: '처음으로',
  },
  {
    word: '楽しむ',
    meaning: '즐기다',
  },
  {
    word: 'できる',
    meaning: '할 수 있다',
  },
  {
    word: '火事',
    meaning: '화재',
  },
  {
    word: '正殿',
    meaning: '성전',
  },
  {
    word: '建物',
    meaning: '건물',
  },
  {
    word: '工事',
    meaning: '공사',
  },
  {
    word: '警備の人',
    meaning: '경비원',
  },
  {
    word: '消防士',
    meaning: '소방관',
  },
  {
    word: '練習',
    meaning: '연습',
  },
  {
    word: '新しい',
    meaning: '새로운',
  },
  {
    word: 'カーテン',
    meaning: '커튼',
  },
  {
    word: '人',
    meaning: '사람',
  },
  {
    word: '安全',
    meaning: '안전',
  },
  {
    word: '秋',
    meaning: '가을',
  },
],
[
  {
    word: '紹介する',
    meaning: '소개하다',
  },
  {
    word: '飾り付ける',
    meaning: '꾸미다',
  },
  {
    word: '見せる',
    meaning: '보여주다',
  },
  {
    word: '楽しむ',
    meaning: '즐기다',
  },
  {
    word: '撮る',
    meaning: '찍다',
  },
  {
    word: '教える',
    meaning: '가르치다',
  },
  {
    word: 'アニメ',
    meaning: '애니메이션',
  },
  {
    word: '世界',
    meaning: '세계',
  },
  {
    word: '絵',
    meaning: '그림',
  },
  {
    word: '台本',
    meaning: '대본',
  },
  {
    word: '会場',
    meaning: '장소',
  },
  {
    word: '人気',
    meaning: '인기',
  },
  {
    word: '場面',
    meaning: '장면',
  },
  {
    word: '写真',
    meaning: '사진',
  },
  {
    word: 'フランス',
    meaning: '프랑스',
  },
  {
    word: 'すごい',
    meaning: '대단하다',
  },
  {
    word: '場所',
    meaning: '장소',
  },
  {
    word: '午前',
    meaning: '오전',
  },
  {
    word: '午後',
    meaning: '오후',
  },
  {
    word: '月曜日',
    meaning: '월요일',
  },
  {
    word: '休み',
    meaning: '휴무',
  },
],
];

const addWordsToArticles = async () => {
  try {
      const articleIds = [
          '65478084746cd8223bbb3604',
          '65498a617b1b7e4d9882cbe3',
          '65498a617b1b7e4d9882cbe4',
          '65498a617b1b7e4d9882cbe5',
          '65498a617b1b7e4d9882cbe6',
          '65499168730268036c6492e6',
          '65499168730268036c6492e7',
          '65499168730268036c6492e8',
          '65499168730268036c6492e9',
          '65499168730268036c6492ea',
      ];

      const articles = await Promise.all(articleIds.map(async (articleId) => {
          const article = await Article.findById(articleId);
          if (!article) {
              console.error(`Article with ID ${articleId} not found!`);
          }
          return article;
      }));

      articles.forEach((article, index) => {
          const wordObject = wordData[index];
          article.words = wordObject;
      });

      await Promise.all(articles.map(article => article.save()));

      console.log('Words added to articles successfully!');
  } catch (error) {
      console.error('Error adding words to articles:', error.message);
  } finally {
      mongoose.connection.close();
  }
};

addWordsToArticles();