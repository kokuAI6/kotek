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

input.addEventListener('click', async function() {
  const query = 'Hello, world!'; // Replace with user input
  const response = await detectIntent(query);
  output.textContent = response.queryResult.fulfillmentText;
});
