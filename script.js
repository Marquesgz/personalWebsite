const changingTextElement = document.querySelector('.changing-text');


const words = ['Developer', 'Creator', 'Innovator', 'Thinker'];


const typingSpeed = 100; 
const erasingSpeed = 50; 
const delayBetweenWords = 2000; 

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
  const currentWord = words[wordIndex];
  
  if (isDeleting) {
   
    changingTextElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;  
      wordIndex = (wordIndex + 1) % words.length; 
      setTimeout(typeText, typingSpeed); 
    } else {
      setTimeout(typeText, erasingSpeed); 
    }
  } else {
    changingTextElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      isDeleting = true;  
      setTimeout(typeText, delayBetweenWords);  
    } else {
      setTimeout(typeText, typingSpeed);  
    }
  }
}
function downloadCV() {
  const link = document.createElement('a');
  link.href = 'assets/CVJoãoGomes.pdf'; 
  link.download = 'CVJoãoGomes.pdf';
  link.click();
}

typeText();
