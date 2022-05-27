// document.querySelector("button").addEventListener("click",handleClick);

// function handleClick(){
//     alert("I got clicked!");
// }

// document.querySelector("button").addEventListener("click",function(){
//     alert("anonymous function se call kiya hai")
// });


var arr = document.querySelectorAll(".drum");

for (var i = 0; i < arr.length; i++) {

    arr[i].addEventListener("click", function () {

        var key = this.innerText;

       makeSound(key);
       buttonAnimation(key);

    })

}


// document.addEventListener("keydown",function(event){


//     console.log(event);

//     alert(event.key+" is pressed");

// })


document.addEventListener("keydown",function(event){

    makeSound(event.key);
    buttonAnimation(event.key);

})



function makeSound(key){

 
    switch(key){


        case 'w' : 
            var tom_1 = new Audio("sounds/tom-1.mp3");
            tom_1.play();
            break;
        

        case 'a' : 
            var tom_2 = new Audio("sounds/tom-2.mp3");
            tom_2.play();
            break;
        

        case 's' : 
            var tom_3 = new Audio("sounds/tom-3.mp3");
            tom_3.play();
            break;
        

        case 'd' : 
            var tom_4 = new Audio("sounds/tom-4.mp3");
            tom_4.play();
            break;
        

        case 'j' : 
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        

        case 'k' : 
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        

        case 'l' : 
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        

    }



}


function buttonAnimation(key){

    var buttonPressed = document.querySelector("."+key);

    buttonPressed.classList.add("pressed");

    setTimeout(function(){
        buttonPressed.classList.remove("pressed");
    },200);

}



// arr[0].addEventListener("click",function(){

//     var audio = new Audio("sounds/tom-1.mp3");
//     audio.play();

// })


// arr[1].addEventListener("click",function(){

//     var audio = new Audio("sounds/tom-2.mp3");
//     audio.play();

// })


// arr[2].addEventListener("click",function(){

//     var audio = new Audio("sounds/tom-3.mp3");
//     audio.play();

// })


// arr[3].addEventListener("click",function(){

//     var audio = new Audio("sounds/tom-4.mp3");
//     audio.play();

// })


// arr[4].addEventListener("click",function(){

//     var audio = new Audio("sounds/snare.mp3");
//     audio.play();

// })


// arr[5].addEventListener("click",function(){

//     var audio = new Audio("sounds/crash.mp3");
//     audio.play();

// })


// arr[6].addEventListener("click",function(){

//     var audio = new Audio("sounds/kick-bass.mp3");
//     audio.play();

// })

