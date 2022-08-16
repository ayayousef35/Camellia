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
// Random Background Optiom
let backgroundOption = true;

// Variable To Control The interval
let backgroundInterval;

// Check If There's Local Storage Random Background Item 
let backgroundLocalItem = localStorage.getItem("background_option");

//Check If Random Background Local Storage Is Not Empty
if(backgroundLocalItem !== null){
    if(backgroundLocalItem === 'true'){
        backgroundOption = true;
    }else{
        backgroundOption = false;

    }
    
    // Remove Active Class From All Spans
    document.querySelectorAll(".random-backgrounds span").forEach(element =>{
        element.classList.remove("active");
    });
    
    if(backgroundLocalItem === 'true'){

        document.querySelector(".random-backgrounds .yes").classList.add("active");
        
    }else{

        document.querySelector(".random-backgrounds .no").classList.add("active");


    }

};
let themeToggler = document.querySelector('#theme-toggler');
themeToggler.onclick = () => {
    themeToggler.classList.toggle('fa-sun');

    if(themeToggler.classList.contains('fa-sun')){
        document.body.classList.add('dark-mode')
    }else{
        document.body.classList.remove('dark-mode')
    };

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

// Switch Random Background Option 
const randomBackEl = document.querySelectorAll(".random-backgrounds span");

randomBackEl.forEach(span =>{

    //Click On Every Span
    span.addEventListener("click", (e) => {

        // Remove Active Class From All Childrens
        e.target.parentElement.querySelectorAll(".active").forEach(element =>{
            element.classList.remove("active")
        });
        // Add Active Class On Self
        e.target.classList.add("active");
        
        if (e.target.dataset.background === 'yes'){
            backgroundOption = true;
           randomizeImgs();
           localStorage.setItem("background_option", true);
            

        } else{
            backgroundOption = false;
            clearInterval(backgroundInterval);
            localStorage.setItem("background_option", false);

        }

    });
});


let landingPage = document.querySelector(".landing-page");
let imgArray = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"]



function randomizeImgs(){

    if (backgroundOption === true){
        backgroundInterval = setInterval(()=>{
            let randomNumber = Math .floor(Math.random() * imgArray.length);
        
          
        
             landingPage.style.backgroundImage ='url("image/'+ imgArray[randomNumber] + '")';
        
        },5000);
    }
}
randomizeImgs();
