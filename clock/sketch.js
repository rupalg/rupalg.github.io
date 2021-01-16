function setup() {
	createCanvas(400,400); // make an HTML canvas element width x height pixels
}

function draw() {
	background(0,0,0);
	noStroke()
  

	//hour
	textSize(32);
	fill(180);
	text(hour(), 350, 316);
	hour_value = minute()
	let h = map(hour_value, 0, 100, 0, width);
	fill(127, 0, 0);
	ellipse(h, 300, 30, 30);

	//mins
 	textSize(26);
 	fill(100);
 	text(minute(), 350, 213);
 	min_value = minute()
 	let m = map(min_value, 0, 100, 0, width);
 	fill(255, 0, 0);
 	ellipse(m, 200, 20, 20);

 	//seconds
 	textSize(20);
 	fill(50); //color black
 	text(second(), 350, 110);
  	second_value = second()
  	let s = map(second_value, 0, 100, 0, width);
  	fill(255, 200, 200);
  	ellipse(s, 100, 10, 10);
}
