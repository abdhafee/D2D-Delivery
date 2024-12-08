var myimg = document.getElementById("myimg");
var cloud = document.getElementById("cloud");
var bike = document.getElementById("bike");
var globe = document.getElementById("globe");

    myimg.onclick = function(){
     if (cloud.style.webkitAnimationPlayState === "paused"){
         cloud.style.webkitAnimationPlayState = "running";
         bike.style.webkitAnimationPlayState = "running";
         globe.style.webkitAnimationPlayState = "running";
         myimg.src = 'images/pause.png';
        } 
            
    else{
         cloud.style.webkitAnimationPlayState = "paused";
         bike.style.webkitAnimationPlayState = "paused";
         globe.style.webkitAnimationPlayState = "paused";
         myimg.src = 'images/play.png';
        }
    }
