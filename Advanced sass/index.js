const themeChanger = document.getElementById('change-theme');
const body = document.getElementById('body');
let theme = body.getAttribute('theme');

themeChanger.addEventListener('click', () => {
    theme = body.getAttribute('theme');

    switch (theme) {
        case "light":
            body.setAttribute("theme", "dark");
        break;
        case "dark":
            body.setAttribute("theme", "light");
        break;
        default: 
            body.setAttribute("theme", "light");
        break;
    }

})

const screenshots = document.querySelector('.screenshots');
const imgArea = document.createElement('img');
const next = document.querySelector('.next')
const back = document.querySelector('.back')
let count = 1;

imgArea.setAttribute('src', `/Advanced sass/images/screenshot1.png`)
imgArea.style.width = '100%';
screenshots.appendChild(imgArea);

next.addEventListener('click', () => {
    if(count == 4){
        count = 1;
        imgArea.setAttribute('src', `/Advanced sass/images/screenshot${count}.png`);
    }else{
        count = count + 1;
        imgArea.setAttribute('src', `/Advanced sass/images/screenshot${count}.png`);
    }
})
back.addEventListener('click', () => {
    if(count > 1){
        count = count - 1;
        imgArea.setAttribute('src', `/Advanced sass/images/screenshot${count}.png`);
    }
})

