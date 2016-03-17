paper.install(window);

function loadLevel(levelname){
    
    // Get a reference to the canvas object
		var canvas = document.getElementById('game_canvas');
		// Create an empty project and a view for the canvas:
		paper.setup(canvas);
		
        //Call paperCube.js and let it go apesh*t
       var path = new Path.Rectangle([75, 75], [100, 100]);
		path.strokeColor = 'red';
        path.fillColor = 'blue';

		view.onFrame = function(event) {
			// On each frame, rotate the path by 3 degrees:
			path.rotate(3);
		}
   
}