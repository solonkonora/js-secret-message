const sentenceInput = document.getElementById('sentence')
const normalizedTextDiv = document.getElementById('normalized-text')
const encodedMessageDiv = document.getElementById('encoded-message')
const decodedTextDiv = document.getElementById('decoded-text')
const encodeBtn = document.getElementById('encode-btn')

encodeBtn.addEventListener('click', function () {
  // The .trim() method is then called on the value to remove any leading or trailing whitespace.
  const sentence = sentenceInput.value.trim()

  if (sentence.length < 50) {
    alert('Please enter a sentence with at least 50 characters.')
    return
  }

  // this line calls the normalizeText fxt
  const normalizedText = normalizeText(sentence)
  const encodedMessage = encodeMessage(normalizedText)
  const decodedText = decodeMessage(encodedMessage)

  // The ${normalizedText} is a placeholder that is replaced with the value of the normalizedText variable
  normalizedTextDiv.textContent = `Normalized Text: ${normalizedText}`
  encodedMessageDiv.textContent = `Encoded Message: ${encodedMessage}`
  decodedTextDiv.textContent = `Decoded Text: ${decodedText}`
})

function normalizeText (sentence) {
  return sentence.replace(/\s/g, '').toLowerCase()
}

function encodeMessage (text) {
  const length = text.length

  // calculates the number of columns required for the square pattern by taking the ceiling of the square root of the length of the text. This determines the number of characters in each column of the square.
  const columns = Math.ceil(Math.sqrt(length))

  // initializes an empty string variable called encodsms to store the encodedsms
  let encodedMessage = ''

  // outer loop
  for (let i = 0; i < columns; i++) {
    // This inner loop iterates over the rows for each column. It starts at the current column index i and increments by columns in each iteration. This ensures that the characters are extracted column-wise from the text.
    for (let j = i; j < length; j += columns) {
      // the character at index j in the text is appended to the encodedMessage string.
      encodedMessage += text[j]
    }

    // After each column is processed, a space character is appended to the encodedMessage string to separate the columns.
    encodedMessage += ' '
  }

  return encodedMessage.trim()
}

function decodeMessage (encodedMessage) {
  const encodedWords = encodedMessage.split(' ')

  // This line calculates the number of columns in the square pattern by taking the length of the first word in the encodedWords array
  const columns = encodedWords[0].length
  let decodedText = ''

  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < encodedWords.length; j++) {
      //  Inside the inner loop, it checks if the current column index i is less than the length of the word at index j in the encodedWords array. This ensures that only valid characters are extracted from each word
      if (i < encodedWords[j].length) {
        // If the condition is met, it appends the character at index i of the word at index j to the decodedText string.
        decodedText += encodedWords[j][i]
      }
    }
  }

  return decodedText
}
