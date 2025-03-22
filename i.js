const input1 = document.querySelector('#input1')
const result = document.querySelector('input[readonly]')
const translateBtn = document.querySelector('button.translate, button.translate')
const morseToText = {
'.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E',
'..-.': 'F', '--.': 'G', '....': 'H', '..': 'I', '.---': 'J',
'-.-': 'K', '.-..': 'L', '--': 'M', '-.': 'N', '---': 'O',
'.--.': 'P', '--.-': 'Q', '.-.': 'R', '...': 'S', '-': 'T',
'..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X', '-.--': 'Y',
'--..': 'Z', '.----': '1', '..---': '2', '...--': '3', '....-': '4',
'.....': '5', '-....': '6', '--...': '7', '---..': '8', '----.': '9',
'-----': '0', '--..--': ',', '.-.-.-': '.', '..--..': '?',
'-..-.': '/', '-.--.': '(', '-.--.-': ')', '.-...': '&',
'---...': ':', '-.-.-.': ';', '-...-': '=', '.-.-.': '+',
'-....-': '-', '..--.-': '_', '.-..-.': '"', '...-..-': '$',
'.--.-.': '@', '': ' '
}

const textToMorse = {}
for (let key in morseToText) {
   textToMorse[morseToText[key]] = key
}

function isMorseCode(input) {
    return /^[.\-/]*$/.test(input)
}

function morseTextTranslate(morse) {
    return morse.split(' ')
    .map(code => morseToText[code] || '')
    .join(' ')
}

function textMorseTranslate(text) {
    return text.toUpperCase()
    .split('')
    .map(char => textToMorse[char] || (char === ' ' ? "/" : ''))
    .join(' ')
    .replace(/ \/ /g, ' / ')
}

translateBtn.addEventListener('click', () => {
    const input = input1.value.trim()
    if(!input) {
        result.value = ''
        return
    }

    if (isMorseCode(input)) {
        const cleanedInput = input.replace(/\s+/g, '')
        .replace(/\s*\/s*/g, " / ")
    } else {
        result.value = textMorseTranslate(input)
    }
})

input1.addEventListener('keypress', (e) => {
    if (e.key === enter) {
        translateBtn.click()
    }
})