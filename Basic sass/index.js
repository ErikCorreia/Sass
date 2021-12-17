console.log("running");
const themeChanger = document.getElementById('themeChanger');
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

    /*
    if(theme === "light"){
        body.setAttribute("theme", "dark");
    }else if(theme === "dark"){
        body.setAttribute("theme", "light");
    }
    */
})