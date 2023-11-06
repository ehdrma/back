const express = require('express');
const { TextToSpeechClient } = require('@google-cloud/text-to-speech');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const { Storage } = require('@google-cloud/storage');
const fs = require('fs');
const util = require('util');


const app = express();
const PORT = 5000;

// 인증 정보 파일의 경로
const keyFilename = path.join(__dirname, 'newnihon-tts.json');

// TextToSpeechClient 생성 시에 인증 정보 파일 경로 지정
const client = new TextToSpeechClient({ keyFilename });

app.use(express.json());

app.post('/text-to-speech', async (req, res) => {
  try {
    const { text } = req.body;

    const request = {
      input: { text },
      voice: { languageCode: 'en-US', ssmlGender: 'NEUTRAL' }, // 변경 가능한 옵션
      audioConfig: { audioEncoding: 'LINEAR16' },
    };

    const [response] = await client.synthesizeSpeech(request);

    const audioFilename = `${uuidv4()}.wav`; // 고유한 파일명 생성
    const outputPath = `./public/${audioFilename}`; // 파일 저장 경로

    // 음성 파일 저장
    const writeFile = util.promisify(fs.writeFile);
    await writeFile(outputPath, response.audioContent, 'binary');

    // 클라이언트로 응답 보내기
    res.json({ audioUrl: `http://192.168.219.107:5000/${audioFilename}` });
  } catch (error) {
    console.error('Error while processing text to speech:', error);
    res.status(500).json({ error: '서버 오류입니다.' });
  }
});

app.use(express.static('public')); // 정적 파일 제공을 위한 미들웨어 설정

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
