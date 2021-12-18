const h1 = document.querySelector(".title h1");
console.log(h1);

function handleMouseEnterJS(){
    const currentColor = h1.style.color;
    let newColor;
    if(currentColor === "blue"){
        newColor = "tomato";
    }else{
        newColor = "blue";
    }
    h1.style.color = newColor;
}

function handleMouseEnterCSS(){
    const clickedClass = "active"
    if(h1.className === clickedClass){
        h1.className = "";
    }else{
        h1.className = clickedClass;
    }
}

function handleMouseEnterCSS2(){
    const clickedClass = "active"
    if(h1.classList.contains(clickedClass)){
        h1.classList.remove(clickedClass);
    }else{
        h1.classList.add(clickedClass);
    }
}

function handleMouseEnterToggle(){
    const toggleClass = "active";
    h1.classList.toggle(toggleClass);
}


h1.addEventListener("click",handleMouseEnterToggle);






// const cal = {
//     add : function(a,b){
//         return(a+b);
//     },
//     minus : function(a,b){
//         return(a-b);
//     },
//     dot : function(a,b){
//         return(a*b);
//     },
//     divide : function(a,b){
//         return(a/b);
//     },

//     square: function(a,b){
//         return(a**b);
//     },
//     abs : function(a){
//         if (a > 0) {
//             return(a);
//         }else{
//             return(a*(-1));
//         }
//     }
// };

// cal.add(3,2);
// cal.minus(3,2);
// cal.dot(3,2);
// cal.divide(3,2);
// cal.square(3,2);
// cal.abs(2);
// cal.abs(-4);

// const age = prompt("how old are you?");
// console.log(typeof "15", typeof parseInt("15")); 

// document.title =  "ja"
// document.querySelector(#title);
// const h1  = document.querySelector("div #title");
// console.dir(h1);

// h1.style.color = "blue"; 

// function handleTitleClick(){
//     h1.style.color = "pink";
// }

// function handleMouseEnter(){
//     h1.innerText = "mouse is here";
// }

// function handleMouseLeave(){
//     h1.innerText = "mouse is leaved";
// }

// h1.addEventListener("click",handleTitleClick);
// h1.addEventListener("mouseenter",handleMouseEnter);
// h1.addEventListener("mouseleave",handleMouseLeave);

// h1.onclick = handleTitleClick; // 가능 but 위 방식이 나중에 remove도 할 수 있어서 더 선호


// function handleWindowResize(){
//     document.body.style.background = "tomato";
// }

// function handleWindowCopy(){
//     alert("copier!");
// }

// function handleWindowOffline(){
//     alert("SOS no WIFI");
// }

// function handleWindowOnlie(){
//     alert("All good");
// }
// window.addEventListener("resize",handleWindowResize);
// window.addEventListener("copy",handleWindowCopy);
// window.addEventListener("offline",handleWindowOffline);
// window.addEventListener("offline",handleWindowOnlie);