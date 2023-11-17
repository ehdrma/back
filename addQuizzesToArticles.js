const mongoose = require('mongoose');
const Article = require('./models/Article');

mongoose.connect('mongodb+srv://ehdrma99:fjqmffl99~@newnihon-cluster.tu3nh1c.mongodb.net/newnihon', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const quizData = [
    [
        {
            "question": "1. 11月1日に開催されたAIの安全な使い方に関する会議は、どこで行われましたか？",
            "options": [
                "a) イギリス",
                "b) 日本",
                "c) アメリカ",
                "d) 中国"],
            "correctAnswer": "b) 日本"
        },
        {
            "question": "2. AIの危険をなくすための対策について、何かしらの考え方を決めた国や地域はいくつありますか？",
            "options": [
                "a) 29",
                "b) 30",
                "c) 28",
                "d) 31"
            ],
            "correctAnswer": "a) 29"
        },
        {
            "question": "3. 会議に出席したAIの会社を作った人物として、誰が言及されていますか？",
            "options": [
                "a) イーロン・マスクさん", 
                "b) ビル・ゲイツさん", 
                "c) マーク・ザッカーバーグさん", 
                "d) ジェフ・ベゾスさん"],
            "correctAnswer": "a) イーロン・マスクさん"
          },
          {
            "question": "4. イーロン・マスクさんは、AIをコントロールできるかについてどのようなコメントをしましたか？",
            "options": [
              "a) 人より頭がいいAIをコントロールできるかわかりません。しかし、私たちの役に立つように努力することはできます。",
              "b) AIをコントロールすることは不可能です。",
              "c) AIが人間を支配することは避けられません。",
              "d) AIの危険性については関心がありません。"
            ],
            "correctAnswer": "a) 人より頭がいいAIをコントロールできるかわかりません。しかし、私たちの役に立つように努力することはできます。"
          },
          {
            "question": "5. 会議の主な目的は何ですか？",
            "options": [
              "a) AIの危険をなくすための考え方を決めること",
              "b) AIを使って生物兵器を作ること",
              "c) AIが人間をコントロールできなくなること",
              "d) 世界を危険から守るための対策を早急に行うこと"
            ],
            "correctAnswer": "d) 世界を危険から守るための対策を早急に行うこと"
          }
    ],
    [
        {
            "question": "1. 11月5日は、何の日ですか？",
            "options": ["a) 国連の日", "b) 世界津波の日", "c) 地震の日", "d) 高知市の日"],
            "correctAnswer": "b) 世界津波の日"
        },
        {
            "question": "2. 高知市での訓練に参加した人は何人ぐらいでしたか？",
            "options": ["a) 50人", "b) 100人", "c) 250人", "d) 500人"],
            "correctAnswer": "a) 50人"
          },
          {
            "question": "3. 広川町での訓練では、どこまで走りましたか？",
            "options": ["a) 100m", "b) 250m", "c) 500m", "d) 1000m"],
            "correctAnswer": "c) 500m"
          },
          {
            "question": "4. 小学5年生の女の子は訓練についてどう感じましたか？",
            "options": ["a) 楽しかった", "b) 怖かった", "c) 無関心だった", "d) 勉強になった"],
            "correctAnswer": "d) 勉強になった"
          },
          {
            "question": "5. 訓練中に客たちはどこに避難しましたか？",
            "options": ["a) 図書館", "b) 神社", "c) 線路", "d) 電車"],
            "correctAnswer": "b) 神社"
          }
    ],
    [
        {
          "question": "1. NGO「国境なき医師団」の白根麻衣子さんは、どこの地域で活動していましたか？",
          "options": [
            "a) パレスチナのガザ地区",
            "b) イスラエルのハマス地区",
            "c) エジプトのカイロ市",
            "d) 日本の羽田空港"
          ],
          "correctAnswer": "a) パレスチナのガザ地区"
        },
        {
          "question": "2. 白根さんは日本に帰る際、どの空港に到着しましたか？",
          "options": [
            "a) パレスチナのガザ地区の空港",
            "b) イスラエルのテルアビブ空港",
            "c) エジプトのカイロ国際空港",
            "d) 日本の羽田空港"
          ],
          "correctAnswer": "d) 日本の羽田空港"
        },
        {
          "question": "3. ガザ地区では夜に何が見えるだけでしたか？",
          "options": [
            "a) 電気の光",
            "b) ロケット弾の光",
            "c) 爆弾の光",
            "d) 星の光"
          ],
          "correctAnswer": "b) ロケット弾の光"
        },
        {
          "question": "4. 白根さんはガザ地区でどのような生活ができなくなりましたか？",
          "options": [
            "a) 仕事に行くこと",
            "b) 喫茶店で友達と話すこと",
            "c) 家族と笑って生活すること",
            "d) 全ての選択肢"
          ],
          "correctAnswer": "d) 全ての選択肢"
        },
        {
          "question": "5. 白根さんは戦争のひどさや悲しさを伝えるために何をすると話しましたか？",
          "options": [
            "a) 仕事に行くこと",
            "b) 喫茶店で友達と話すこと",
            "c) 家族と笑って生活すること",
            "d) 自分にできることをすること"
          ],
          "correctAnswer": "d) 自分にできることをすること"
        }
      ],
      [
        {
          "question": "1. パナマ運河は何をつないでいますか？",
          "options": [
            "a) 太平洋と大西洋",
            "b) 太平洋と地中海",
            "c) 大西洋と地中海",
            "d) 大西洋とインド洋"
          ],
          "correctAnswer": "a) 太平洋と大西洋"
        },
        {
          "question": "2. パナマ運河の近くで10月に起きたことは何ですか？",
          "options": [
            "a) 震災",
            "b) 台風",
            "c) 洪水",
            "d) 干ばつ"
          ],
          "correctAnswer": "c) 洪水"
        },
        {
          "question": "3. パナマ運河の通航制限は何のために行われましたか？",
          "options": [
            "a) 荷物の量を減らすため",
            "b) 船の速度を制限するため",
            "c) 船の大きさを制限するため",
            "d) 船の通行料金を上げるため"
          ],
          "correctAnswer": "c) 船の大きさを制限するため"
        },
        {
          "question": "4. パナマ運河を通って日本に届いたり日本から送ったりする荷物は、世界のどの国に次いで多いですか？",
          "options": [
            "a) アメリカ",
            "b) 中国",
            "c) イギリス",
            "d) インド"
          ],
          "correctAnswer": "b) 中国"
        },
        {
          "question": "5. パナマ運河の通航制限が他の国にどのような影響を与えるか、どのようなことが心配されていますか？",
          "options": [
            "a) 荷物の紛失が増えること",
            "b) 船の遅延が増えること",
            "c) 船の事故が増えること",
            "d) 船の通行料金が上がること"
          ],
          "correctAnswer": "b) 船の遅延が増えること"
        }
      ],
      [
        {
          "question": "1. 佐賀県佐賀市で行われた熱気球の大会は、どのくらいの数の熱気球が集まりましたか？",
          "options": [
            "a) 100",
            "b) 125",
            "c) 150",
            "d) 200"
          ],
          "correctAnswer": "b) 125"
        },
        {
          "question": "2. 熱気球の大会では、参加国は何か国と地域でしたか？",
          "options": [
            "a) 10の国と地域",
            "b) 12の国と地域",
            "c) 14の国と地域",
            "d) 16の国と地域"
          ],
          "correctAnswer": "d) 16の国と地域"
        },
        {
          "question": "3. 熱気球に乗った人たちが競争したのは、どのようなことでしたか？",
          "options": [
            "a) 熱気球の速さを競う",
            "b) 熱気球の高さを競う",
            "c) 目印の近くにおもりを落とす位置を競う",
            "d) 熱気球のデザインを競う"
          ],
          "correctAnswer": "c) 目印の近くにおもりを落とす位置を競う"
        },
        {
          "question": "4. 熱気球の大会を見に来た人たちは、どのような感想を持っていましたか？",
          "options": [
            "a) 熱気球を見ることができてうれしい",
            "b) 熱気球が久しぶりに集まったことがすごい",
            "c) この大会は世界でも有名だと思う",
            "d) 全ての選択肢が正解です"
          ],
          "correctAnswer": "d) 全ての選択肢が正解です"
        },
        {
          "question": "5. 熱気球の大会で喜んでいた人たちは、どのようなことに喜んでいましたか？",
          "options": [
            "a) 熱気球の速さ",
            "b) 熱気球の高さ",
            "c) 目印の近くにおもりが落ちたこと",
            "d) 熱気球のデザイン"
          ],
          "correctAnswer": "c) 目印の近くにおもりが落ちたこと"
        }
      ],
      [
        {
            "question": "1. 11月1日は何の記念の日ですか？",
            "options": [
                "a) 重さの基準についての法律が始まった記念の日です。",
                "b) 長さの基準についての法律が始まった記念の日です。",
                "c) 大阪の水族館がオープンした記念の日です。",
                "d) ジンベエザメの大きさを調べるイベントが始まった記念の日です。"
            ],
            "correctAnswer": "b) 長さの基準についての法律が始まった記念の日です。"
        },
        {
            "question": "2. ジンベエザメは何で世界で一番大きい魚ですか？",
            "options": [
                "a) 体の重さが一番大きいからです。",
                "b) 体の長さが一番大きいからです。",
                "c) 口が一番大きいからです。"
            ],
            "correctAnswer": "b) 体の長さが一番大きいからです。"
        },
        {
            "question": "3. 「海」の長さは何m何cmで、前回より何cm大きくなりましたか？",
            "options": [
                "a) 5m40cmで、10cm大きくなりました。",
                "b) 5m40cmで、15cm大きくなりました。",
                "c) 5m40cmで、20cm大きくなりました。"
            ],
            "correctAnswer": "b) 5m40cmで、15cm大きくなりました。"
        },
        {
            "question": "4. 「海」のお腹の周りは何m何cmで、前回より何cm太くなりましたか？",
            "options": [
                "a) 2m34cmで、10cm太くなりました。",
                "b) 2m34cmで、14cm太くなりました。",
                "c) 2m34cmで、20cm太くなりました。"
            ],
            "correctAnswer": "b) 2m34cmで、14cm太くなりました。"
        },
        {
            "question": "5. 「海」は何歳ぐらいで一番大きくなるそうですか？",
            "options": [
                "a) 5歳から6歳ぐらいです。",
                "b) 6歳から7歳ぐらいです。",
                "c) 8歳から9歳ぐらいです。"
            ],
            "correctAnswer": "c) 8歳から9歳ぐらいです。"
        }
    ],
    [
        {
            "question": "1. 農林水産省によると、今年の1等米の割合は何パーセントでしたか？",
            "options": [
                "a) 59.6%",
                "b) 13.5%",
                "c) 16%",
                "d) 60%"
            ],
            "correctAnswer": "a) 59.6%"
        },
        {
            "question": "2. 去年に比べて、新潟県の1等米の割合は何ポイント少なくなりましたか？",
            "options": [
                "a) 16ポイント",
                "b) 60ポイント",
                "c) 40ポイント",
                "d) 30ポイント"
            ],
            "correctAnswer": "b) 60ポイント"
        },
        {
            "question": "3. 農家の収入が少なくなる心配があるのはなぜですか？",
            "options": [
                "a) 米の味が変わったから",
                "b) 農家が米を売る値段を下げるから",
                "c) 農家が米を売る値段を上げるから"
            ],
            "correctAnswer": "b) 農家が米を売る値段を下げるから"
        },
        {
            "question": "4. 農林水産省は何を話しましたか？",
            "options": [
                "a) 暑い地域での米の栽培方法について",
                "b) 米の味が変わったことについて",
                "c) 農家の収入が少なくなることについて"
            ],
            "correctAnswer": "a) 暑い地域での米の栽培方法について"
        },
        {
            "question": "5. 今年の米の品質が低下した原因は何ですか？",
            "options": [
                "a) 夏が暑かったから",
                "b) 農家の技術が低いから",
                "c) 農家が米を適切に管理しなかったから"
            ],
            "correctAnswer": "a) 夏が暑かったから"
        }
    ],
    [
        {
            "question": "1. 「ミオ・ザ・ビューティフル」はいつ出版された絵本ですか？",
            "options": [
                "a) 2020年",
                "b) 2021年",
                "c) 2022年",
                "d) 2006年"
            ],
            "correctAnswer": "b) 2021年"
        },
        {
            "question": "2. 著者のキノタ・ブレイスウェイトさんはどこの国の人ですか？",
            "options": [
                "a) 日本人",
                "b) アフリカ人",
                "c) カナダ人",
                "d) アメリカ人"
            ],
            "correctAnswer": "c) カナダ人"
        },
        {
            "question": "3. 絵本の中で、娘の美桜さんは何についていじめを受けましたか？",
            "options": [
                "a) 学校の先生",
                "b) 人種や文化の違い",
                "c) 学校の友達",
                "d) いじめをした子ども"
            ],
            "correctAnswer": "b) 人種や文化の違い"
        },
        {
            "question": "4. キノタさんはどんな人たちに自分の考え方を伝えているでしょうか？",
            "options": [
                "a) 子どもたち",
                "b) 大学生",
                "c) 先生",
                "d) すべての選択肢が正しい"
            ],
            "correctAnswer": "d) すべての選択肢が正しい"
        },
        {
            "question": "5. 大学生たちはどのような機会を子どもたちにつくってあげたいと話しましたか？",
            "options": [
                "a) 絵本を読んであげること",
                "b) 学校でのいじめをなくす取り組みをすること",
                "c) 子どもたちに自分で経験させる機会をつくること",
                "d) すべての選択肢が正しい"
            ],
            "correctAnswer": "c) 子どもたちに自分で経験させる機会をつくること"
        }
    ],
    [
        {
            "question": "1. 4年前の10月31日、何が起きたのですか？",
            "options": [
                "a) 地震が起きた",
                "b) 首里城が火事になった",
                "c) 新しい建物が完成した",
                "d) 沖縄県那覇市が洪水になった"
            ],
            "correctAnswer": "b) 首里城が火事になった"
        },
        {
            "question": "2. 火事の時、どれくらいの人が練習をしましたか？",
            "options": [
                "a) 100人ぐらい",
                "b) 200人ぐらい",
                "c) 250人ぐらい",
                "d) 300人ぐらい"
            ],
            "correctAnswer": "c) 250人ぐらい"
        },
        {
            "question": "3. 練習では、どのような建物から火が出たと考えて行われましたか？",
            "options": [
                "a) 正殿",
                "b) 新しい建物",
                "c) 首里城の門",
                "d) 消防署"
            ],
            "correctAnswer": "a) 正殿"
        },
        {
            "question": "4. 消防士が建物に水をかけるために使用したものは何ですか？",
            "options": [
                "a) 消火器",
                "b) ホース",
                "c) 消防車",
                "d) 水鉄砲"
            ],
            "correctAnswer": "b) ホース"
        },
        {
            "question": "5. 新しい正殿が完成予定の年はいつですか？",
            "options": [
                "a) 2022年",
                "b) 2023年",
                "c) 2024年",
                "d) 2026年"
            ],
            "correctAnswer": "d) 2026年"
        }
    ],
    [
        {
            "question": "1. アニメ東京ステーションは、どこにオープンしましたか？",
            "options": [
                "a) 池袋",
                "b) 渋谷",
                "c) 新宿",
                "d) 上野"
            ],
            "correctAnswer": "a) 池袋"
        },
        {
            "question": "2. アニメ東京ステーションでは、何万ぐらいのアニメ作品が展示されていますか？",
            "options": [
                "a) 1万",
                "b) 3万",
                "c) 5万",
                "d) 7万"
            ],
            "correctAnswer": "c) 5万"
        },
        {
            "question": "3. アニメ東京ステーションでは、どのアニメの場面が紹介されていますか？",
            "options": [
                "a) ワンピース",
                "b) ドラゴンボール",
                "c) ナルト",
                "d) デスノート"
            ],
            "correctAnswer": "c) ナルト"
        },
        {
            "question": "4. 来場者はアニメ東京ステーションで何を楽しむことができますか？",
            "options": [
                "a) 音楽を聴くこと",
                "b) 食事をすること",
                "c) ゲームをすること",
                "d) アニメを見ること"
            ],
            "correctAnswer": "d) アニメを見ること"
        },
        {
            "question": "5. アニメ東京ステーションを作った東京都の人の目的は何ですか？",
            "options": [
                "a) 観光客を増やすこと",
                "b) アニメの素晴らしさを広めること",
                "c) 売上を上げること",
                "d) アニメの制作を支援すること"
            ],
            "correctAnswer": "b) アニメの素晴らしさを広めること"
        }
    ],
];

const addQuizzesToArticles = async () => {
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
            article.quizzes = quizData[index];
        });

        await Promise.all(articles.map(article => article.save()));

        console.log('Quizzes added to articles successfully!');
    } catch (error) {
        console.error('Error adding quizzes to articles:', error.message);
    } finally {
        mongoose.connection.close();
    }
};

addQuizzesToArticles();
