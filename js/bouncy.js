// This is a javascript file

alert("xigua");

//get some access to the canvas
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

// set up some data holders for the dots...
var dotSize = 10;

var xCoordList = new Array();
var yCoordList = new Array();

//1 FUNCTION  getMousePosition... (you know what this does--x,y coords

function getMousePos(canvas, event) {
	var rect = canvas.getBoundingClientRect();
	return  {
		x:  event.clientX - rect.left,
		y:  event.clientY - rect.top
		
	};
}

function addClick (x,y) {
	xCoordList.push(x);
	yCoordList.push(y);
}

//2 FUNCTION addClick (adds x,y click coords to arrays)

function redraw(){
	context.clearRect(0,0) context.canvas.width, context.canvas.height) ;
       for(var i=0; i < xCoordList.length; i++) {
       	context.beginPath();
       	context.ellipse(xCoordList[i], yCoordList[i], dotSize, dotSize, 0, 0, Math.PI*2);
       	context.fillStyle = "red" ;
       	context.fill();
       	context.closePath();
       	
       }

}

//3 FUNCTION redraw (redraws the window after each click)

//4 FUNCTION addEvenListener (allows us to catch mouseclicks)


