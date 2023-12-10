const sentenceInput = document.getElementById('sentence');
const normalizedTextDiv = document.getElementById('normalized-text');
const encodedMessageDiv = document.getElementById('encoded-message');
const decodedTextDiv = document.getElementById('decoded-text');
const encodeBtn = document.getElementById('encode-btn');

encodeBtn.addEventListener('click', function() {
  const sentence = sentenceInput.value.trim();

  if (sentence.length < 50) {
    alert('Please enter a sentence with at least 50 characters.');
    return;
  }

  const normalizedText = normalizeText(sentence);
  const encodedMessage = encodeMessage(normalizedText);
  const decodedText = decodeMessage(encodedMessage);

  normalizedTextDiv.textContent = `Normalized Text: ${normalizedText}`;
  encodedMessageDiv.textContent = `Encoded Message: ${encodedMessage}`;
  decodedTextDiv.textContent = `Decoded Text: ${decodedText}`;
});

function normalizeText(sentence) {
  return sentence.replace(/\s/g, '').toLowerCase();
}

function encodeMessage(text) {
  const length = text.length;
  const columns = Math.ceil(Math.sqrt(length));
  let encodedMessage = '';

  for (let i = 0; i < columns; i++) {
    for (let j = i; j < length; j += columns) {
      encodedMessage += text[j];
    }
    encodedMessage += ' ';
  }

  return encodedMessage.trim();
}

function decodeMessage(encodedMessage) {
  const encodedWords = encodedMessage.split(' ');
  const columns = encodedWords[0].length;
  let decodedText = '';

  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < encodedWords.length; j++) {
      if (i < encodedWords[j].length) {
        decodedText += encodedWords[j][i];
      }
    }
  }

  return decodedText;
}