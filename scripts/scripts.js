function scrollToTop(){
    var currentPosition = window.pageYOffset;
    console.log(currentPosition);
    var endPosition = 1;
    total = currentPosition - endPosition;
    var mover = window.setInterval(function(){
        window.scrollTo(0, total); 
        total = total-5;
        if (total < endPosition-1){
            clearInterval(mover);
        }
    }, 5);
}

function scrollToSection(toSection){
    var toPosition = 0;
    var mover = null;
    var startPosition = window.pageYOffset;
    var y_loc = startPosition;
    switch(toSection) {
        case 1: //top
            toPosition = document.getElementById("top").getBoundingClientRect().top;
            break;
        case 2: //experiences
            toPosition = document.getElementById("jump1").getBoundingClientRect().top;
            break;
        case 3: //education
            toPosition = document.getElementById("jump2").getBoundingClientRect().top;
            break;
        case 4: //Other interests
            toPosition = document.getElementById("jump3").getBoundingClientRect().top;
            break;
        default:
            console.log("uncaught section selector " + toSection);
            break;
    }
    if (toPosition >= -5 && toPosition <= 5){
        console.log("do nothing");
    }
    else {
        if (toPosition + startPosition > startPosition){
            clearInterval(mover)
            var mover = window.setInterval(function(){
                window.scrollTo(0, y_loc); 
                y_loc = y_loc + 2;
                if (startPosition + toPosition < y_loc - 5){
                    clearInterval(mover);
                }
            }, 1);
        }
        else{
            clearInterval(mover)
            var mover = window.setInterval(function(){
                window.scrollTo(0, y_loc); 
                y_loc = y_loc - 2;
                if (toPosition + startPosition > y_loc + 5){
                    clearInterval(mover);
                }
            }, 1);
        }
    }
}

window.onload = function(){
    document.getElementById("header1").setAttribute("transitionState", "no");
}

window.onscroll=function(){
    var relativeLocationToExperience = document.getElementById("jump1").getBoundingClientRect().top;
    var displayState = document.getElementById("header1").style.display;
    var transitioningState = document.getElementById("header1").transitionState;
    if (fader != null){
        clearInterval(fader);
    }
    if (relativeLocationToExperience > 0 && displayState == "none" && transitioningState != "transitioning"){
        document.getElementById("header1").style.display = "block";
        var opacity = 0;
        var fader = window.setInterval(function(){
            if (opacity >= 1){
                clearInterval(fader);
            }
            else{
                opacity = opacity + .01;
                document.getElementById("header1").style.opacity = opacity;
            }
        }, 10);
    }
    else if (relativeLocationToExperience < 0 && displayState != "none" && transitioningState != "transitioning"){
        var opacity = 1;
        document.getElementById("header1").transitionState = "transitioning";
        var fader = window.setInterval(function(){
            if (opacity <= 0){
                document.getElementById("header1").style.display = "none";
                clearInterval(fader);
                document.getElementById("header1").transitionState = "no";
            }
            else{
                opacity = opacity - .01;
                document.getElementById("header1").style.opacity = opacity;
            }
        }, 10);
    }
}