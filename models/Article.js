//기사 모델 정의
const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
