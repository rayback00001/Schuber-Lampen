let options = document.querySelector(".option");
let slide = document.querySelector(".slide");
options.forEach((ele,index)=>{
    ele.addEventListener("mouseover",()=>{
        slide.style.left = 100/options.lenght*index + "%"
    });
});
