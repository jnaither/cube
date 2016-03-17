paper.install(window);

function loadLevel(level){
    
    // Get a reference to the canvas object
		var canvas = document.getElementById('game_canvas');
    
    //Set the background color to the canvas according to the level settings
    
        if(level.backgroundType == 'gradient'){
            canvas.style.background = "linear-gradient(to bottom, " + level.backgroundColor1 + " 0%, " + level.backgroundColor2 + " 100%)";
        }
    
    
    
    
    
    
		// Create an empty project and a view for the canvas:
		paper.setup(canvas);
		
        //Call paperCube.js and let it go apesh*t
        var cube = new Path.Rectangle([75, 75], [70, 70]);
        cube.fillColor = 'rgba(255,42,42,1)';

		view.onFrame = function(event) {
			// On each frame, rotate the path by 3 degrees:
			//path.rotate(3);
            
        var ground = new Path.Rectangle([50, 200], [200, 100]);
            ground.fillColor = 'rgba(79,61,48,1)';
		}
   
}