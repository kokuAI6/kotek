const projectId = 'your-project-id';
const sessionId = 'your-session-id';
const languageCode = 'en';

function detectIntent(query) {
  const sessionClient = new dialogflow.SessionsClient();
  const sessionPath = sessionClient.sessionPath(projectId, sessionId);
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: query,
        languageCode: languageCode,
      },
    },
  };

  return sessionClient.detectIntent(request);
}

const input = document.getElementById('bindu-button');
const output = document.getElementById('output');

const projectId = 'your-project-id';
const sessionId = 'your-session-id';
const languageCode = 'en';
const ttsClient = new textToSpeech.TextToSpeechClient();

async function synthesizeSpeech(text) {
  const request = {
    input: {text: text},
    voice: {languageCode: 'en-US', ssmlGender: 'FEMALE'},
    audioConfig: {audioEncoding: 'MP3'},
  };

  const [response] = await ttsClient.synthesizeSpeech(request);
  return response.audioContent;
}

const input = document.getElementById('bind


input.addEventListener('click', async function() {
  const query = 'Hello, world!'; // Replace with user input
  const response = await detectIntent(query);
  output.textContent = response.queryResult.fulfillmentText;
});
