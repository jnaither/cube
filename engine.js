function initUI(){
    //Animate the logo    
        
    setTimeout(function() {
        document.getElementById('title_r').style.transform = "none";
        document.getElementById('title_y').style.transform = "none";
        document.getElementById('title_b').style.transform = "none";
        }, 1000);
    
    setTimeout(function() {
        document.getElementById('button_play').style.opacity = "1";
        document.getElementById('button_worlds').style.opacity = "1";
        document.getElementById('button_highscores').style.opacity = "1";
        }, 2000);
}

initUI();

function loadGame(){
   
     document.getElementById('button_play').style.opacity = "0";
        document.getElementById('button_worlds').style.opacity = "0";
        document.getElementById('button_highscores').style.opacity = "0";
    
    setTimeout(function() {
        document.getElementById('title_r').style.transform = "translateX(100vw) translateY(-30vw)";
        document.getElementById('title_y').style.transform = "translateX(100vw) translateY(-30vw)";
        document.getElementById('title_b').style.transform = "translateX(100vw) translateY(-30vw)";
        }, 100);
    
    setTimeout(function() {
        document.getElementById('homescreen').style.opacity = "0";
        
        //Loadlevel when fading
        loadLevel(level1);
        
        }, 900);
    setTimeout(function() {
        document.getElementById('homescreen').style.display = "none";
        }, 1400);
    
    
}


//------------------------------
//Hammer JS is used to listen to touch events
//New Hammer.js

var myElement = document.getElementById('sensitive_area');

var options = {
  preventDefault: true
};

// create a simple instance
// by default, it only adds horizontal recognizers
var mc = new Hammer(myElement, options);

// let the pan gesture support all directions.
// this will block the vertical scrolling on a touch-device while on the element
// mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });
mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL });

// listen to events...
// OLD NOTE
/**
mc.on("dragleft dragright swipeleft swiperight dragup dragdown swipeup swipedown tap press", function(ev) {
    global_connect.send(ev.type);
});
**/

mc.on("tap", function(ev) {
    console.log('tapped');
});