// wykonane przez Juliusza Tłuścik z 3gt nr. w dzienniku 26
let slider = document.querySelector(".slider");
let imgs = ["/imgs/bee.jpg", "/imgs/dog.jpg", "/imgs/bitch.jpg", "/imgs/lion.jpg"];
let left = slider.querySelector(".left");
let right = slider.querySelector(".right");
let counter = slider.querySelector("span");
let currentImg = 0;
slider.style.backgroundImage = `url(${imgs[currentImg]})`;
counter.innerHTML = `${currentImg+1}/${imgs.length}`;

left.addEventListener("click",_=>{
    if(currentImg+1<imgs.length){
        slider.style.backgroundImage = `url(${imgs[++currentImg]})`;
        counter.innerHTML = `${currentImg+1}/${imgs.length}`;
        if(currentImg==1){
            right.classList.remove("deactive");
        }
    }
    if(currentImg+1==imgs.length){
        left.classList.add("deactive");
    }
});

right.addEventListener("click",_=>{
    if(currentImg+1>1){
        slider.style.backgroundImage = `url(${imgs[--currentImg]})`;
        counter.innerHTML = `${currentImg+1}/${imgs.length}`;
        if(currentImg+1==imgs.length-1){
            left.classList.remove("deactive");
        }
    }
    if(currentImg+1==1){
        right.classList.add("deactive");
    }
});