const express = require('express');
const textToSpeech = require('@google-cloud/text-to-speech');
const fs = require('fs');
const cors = require('cors');
const app = express();

app.use(cors());

process.env.GOOGLE_APPLICATION_CREDENTIALS = 'newnihon.json';
const textToSpeechClient = new textToSpeech.TextToSpeechClient();

async function generateTTS(articles) {
    const audioFileUrls = [];

    for (const article of articles) {
        const articleText = article.body;

        try {
            const request = {
                input: { text: articleText },
                voice: { languageCode: 'ja-JP', ssmlGender: 'NEUTRAL' },
                audioConfig: { audioEncoding: 'LINEAR16', speakingRate: 0.82 },
            };

            const [response] = await textToSpeechClient.synthesizeSpeech(request);

            // 각 기사의 음성 파일을 서버에 저장, 클라이언트에게 전송할 수 있는 URL 생성
            const audioFileName = `article_${article._id}.wav`;
            const audioFilePath = `public/${audioFileName}`;
            fs.writeFileSync(audioFilePath, response.audioContent, 'binary');

            // 클라이언트에서 접근 가능한 URL 생성
            const audioFileUrl = `http://192.168.103.52:5000/${audioFileName}`;

            audioFileUrls.push(audioFileUrl);
        } catch (error) {
            console.error('Error while generating speech:', error);
        }
    }
    return audioFileUrls;
}

module.exports = {
    generateTTS,
};
