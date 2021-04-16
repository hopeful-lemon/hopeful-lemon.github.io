const texts = ["Hi ! I am a hopeful lemon ^^", "I like programming and mathematics"];
let currentText = 0;
let currentChar = 0;
let mode = 0;

/* Appends char to the text inside div */
const appendChar = (selector, char) => {
  let div = document.querySelector(selector);
  div.innerHTML+=char;
}

const backspace = (selector) => {
  let div = document.querySelector(selector);
  let oldText = div.innerText;
  let newSize = oldText.length - 1;
  let newText = oldText.substring(0, newSize);  
  div.innerText = newText;
}

const typewriter = (texts, selector) => {
  if(mode == 0){
    let text = texts[currentText];
	let c = text[currentChar++];
	if(c == ' ')
		c = "&nbsp;";
    appendChar(selector, c);
    if(currentChar>=text.length){
      mode = 10;
    }
    
  }else if(mode == 1){
    backspace(selector);
    currentChar--;
    if(currentChar < 0){
      currentChar = 0;
      currentText = (currentText+1) % texts.length;
      mode = 0;
    } 
  }else{
	  mode--;
  }  
};

setInterval(()=>{ typewriter(texts, "#typewriter"); }, 100);
