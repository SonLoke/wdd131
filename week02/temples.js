// get the last modified date
let lastModified = document.lastModified

document.getElementById("lastModified").textContent = "Last Modification: " + lastModified;

// store elements that are going to be used
const mainnav = document.querySelector('.menu')
const hambutton = document.querySelector ('.menu_button');

// 
hambutton.addEventListener ('click', ()=> {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
    
    if (hambutton.innerHTML == "=")
        hambutton.innerHTML = "x";
    else
        hambutton.innerHTML = "=";
});