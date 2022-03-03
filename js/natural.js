const items = document.querySelectorAll('article');

for(let el of items){
    el.addEventListener("mouseenter", e =>{
        e.currentTarget.querySelectorAll("video")[0].play();
    });
    el.addEventListener("mouseleave", e=>{
        e.currentTarget.querySelectorAll("video")[0].pause();
    })
}