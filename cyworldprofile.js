const introTitle = document.getElementsByClassName("intro__title")[0];

const title = "자기소개";

let cnt = 0;
let timer = 0;

function typingIntroTitle() {
    let character = title[cnt++];

    if (character === "\n") {
        introTitle.innerHTML = introTitle.innerHTML + "<br/>";
    } else {
        introTitle.innerHTML = introTitle.innerHTML + character;
    }

    if (cnt === title.length) {
        clearInterval(timer);
        
        return;
    }
}

window.onload = function() {
    timer = setInterval(typingIntroTitle, 200);
}