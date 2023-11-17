const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const apiKey = process.env.GPT_API_KEY;
const apiUrl = 'https://api.openai.com/v1/chat/completions';

async function generateQuizzes(articles) {
    try {
        const generatedQuizzesList = [];

        for (const article of articles) {
            // 기사 본문과 퀴즈 생성 부분을 나누기
            const articleBody = article.body;
            const quizPrompt = `The quiz system has been activated. Below is 1 Japanese multiple choice quiz questions created based on the given article. Questions and options are all in Japanese. All options begin with a, b, c, and d. The correct answer is shown at the end.`;

            // 퀴즈 5개를 생성하기 위한 반복문
            const generatedQuizzes = [];
            for (let index = 0; index < 5; index++) {
                const prompt = `${articleBody}\n${quizPrompt}`;

                // ChatGPT에 요청하여 퀴즈 생성
                const response = await axios.post(
                    apiUrl,
                    {
                        model: 'gpt-3.5-turbo',
                        messages: [
                            { role: 'system', content: 'You are a helpful assistant.' },
                            { role: 'user', content: prompt },
                        ],
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${apiKey}`,
                        },
                    }
                );

                // 응답을 분석하여 질문과 답을 추출
                const content = response.data.choices[0].message.content.trim();
                const [question, ...optionsAndAnswer] = content.split('\n'); // 문제, 선택지, 정답 개행 문자로 구분

                // 선택지와 정답을 분리, 빈 문자열을 필터링
                const options = optionsAndAnswer.slice(0, -1).filter((option) => option.trim() !== '');

                // 마지막 요소가 정답
                const correctAnswer = optionsAndAnswer[optionsAndAnswer.length - 1].trim();

                console.log(`Question: ${question.trim()}`);
                console.log(`Options: ${options}`);
                console.log(`Correct Answer: ${correctAnswer}`);

                generatedQuizzes.push({
                    question: question.trim(),
                    options: options,
                    correctAnswer,
                });
            }

            generatedQuizzesList.push({ article: articleBody, quizzes: generatedQuizzes });
        }
        return generatedQuizzesList;
    } catch (error) {
        console.error('퀴즈 생성 중 오류 발생:', error);
        throw error;
    }
}

module.exports = { generateQuizzes };
