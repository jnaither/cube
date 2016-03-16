//------------------------------
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