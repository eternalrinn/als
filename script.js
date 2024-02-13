function scrollToElement(elementSelector, instance = 0){
    const elements = document.querySelectorAll(elementSelector);

    if(elements.length > instance){
        elements[instance].scrollIntoView({behavior: 'smooth'});
    }
}

const link1 = document.getElementById("link1");
const link11 = document.getElementById("link11");
const link2 = document.getElementById("link2");
const link22 = document.getElementById("link22");
const link3 = document.getElementById("link3");
const link33 = document.getElementById("link33");

link1.addEventListener('click', () =>{
    scrollToElement('.Home')
})
link2.addEventListener('click', () =>{
    scrollToElement('.Mechanics')
})
link11.addEventListener('click', () =>{
    scrollToElement('.Home')
})
link22.addEventListener('click', () =>{
    scrollToElement('.Mechanics')
})
link3.addEventListener('click', () =>{
    scrollToElement('.Units')
})
link33.addEventListener('click', () =>{
    scrollToElement('.Units')
})

