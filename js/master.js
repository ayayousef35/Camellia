// Check If There's Local Storage Color Option
let mainColors = localStorage.getItem("color-option");

if(mainColors !== null){
    // for learn 

    // console.log('Local Storage Is Not Empty You Can Set It On Root Now');
    // console.log(localStorage.getItem("color-option"));

    document.documentElement.style.setProperty('--min-color',mainColors);
     // Remove Active Class From All Colors List Item
     document.querySelectorAll(".colors-list li").forEach(element =>{
        element.classList.remove("active");
        // Add Active Class On Element With Data-Color === Local Storage Item 
        if(element.dataset.color === mainColors){
            // Add Active Class
            element.classList.add("active");
        };
    });
    

};

 
 
 
 
 //toggle Spin Class On Icon 
document.querySelector(".toggle-settings .fa-gear").onclick = function () {

    //Toggle Class Fa-spin For Rotation On Self
    this.classList.toggle("fa-spin");

    //Toggle Class Open On Main Settings Box
    document.querySelector(".settings-box").classList.toggle("open");
};

// Switch Colors 
const colorsLi = document.querySelectorAll(".colors-list li");

colorsLi.forEach(li=>{

    //Click On Every List Items
    li.addEventListener("click", (e) => {

        //Set Color On Root
        document.documentElement.style.setProperty('--min-color', e.target.dataset.color);
        // Set Color On Local Storage
        localStorage.setItem("color-option",e.target.dataset.color);
        // Remove Active Class From All Childrens
        e.target.parentElement.querySelectorAll(".active").forEach(element =>{
            element.classList.remove("active")
        });
        // Add Active Class On Self
        e.target.classList.add("active");

    });
});


let landingPage = document.querySelector(".landing-page");
let imgArray = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"]

setInterval(()=>{
    let randomNumber = Math .floor(Math.random() * imgArray.length);

  

     landingPage.style.backgroundImage ='url("image/'+ imgArray[randomNumber] + '")';

},6000);

let idx = 0;
 