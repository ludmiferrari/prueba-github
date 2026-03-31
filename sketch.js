// LUDMILA FERRARI

//VARIABLES MOVIMIENTOS
let size = 1;
let pasos = 1;
let thickness = 2;
let pasos2 = 1.3;
//let angle = 0

function setup() {
  createCanvas(512, 512);
  frameRate(30);
  background(0)
  
}

function draw() {
  background(0);

  size += pasos;

  if (size >= 60 || size <= 1) {
    pasos *= -1;
  }

  thickness += pasos2;

  if (thickness >= 20 || thickness <= 1) {
    pasos2 *= -1;
  }


  /////////////////////////////////////////////////////////////////////////

  // rect f1 c1
  push();
  rectMode(CENTER);
  translate(60, 50);
  noFill();
  stroke(0, 0, 250);
  strokeWeight(thickness);
  rect(0, 0, size, size);
  pop();

  push();
  rectMode(CENTER);
  translate(60, 50);
  noFill();
  stroke(0, 250, 0);
  strokeWeight(thickness);
  rect(0, 0, size + 5, size + 5);
  pop();

  push();
  rectMode(CENTER);
  translate(60, 50);
  noFill();
  stroke(250, 0, 0);
  strokeWeight(thickness);
  rect(0, 0, size + 10, size + 10);
  pop();

  push();
  rectMode(CENTER);
  translate(60, 50);
  noFill();
  stroke(227, 41, 184);
  strokeWeight(thickness);
  rect(0, 0, size + 18, size + 18);
  pop();

  // rect f1 c2
  push();
  rectMode(CENTER);
  translate(157, 50);
  noFill();
  stroke(0, 0, 250);
  strokeWeight(thickness);
  rect(0, 0, size, size);
  pop();

  push();
  rectMode(CENTER);
  translate(157, 50);
  noFill();
  stroke(227, 41, 184);
  strokeWeight(thickness);
  rect(0, 0, size + 5, size + 5);
  pop();

  push();
  rectMode(CENTER);
  translate(157, 50);
  noFill();
  stroke(0, 250, 0);
  strokeWeight(thickness);
  rect(0, 0, size + 10, size + 10);
  pop();

  push();
  rectMode(CENTER);
  translate(157, 50);
  noFill();
  stroke(17, 32, 78);
  strokeWeight(thickness);
  rect(0, 0, size + 20, size + 20);
  pop();

  // rect f1 c3
  push();
  rectMode(CENTER);
  translate(255, 50);
  noFill();
  stroke(57, 124, 153);
  strokeWeight(thickness);
  rect(0, 0, size, size);
  pop();

  push();
  rectMode(CENTER);
  translate(255, 50);
  noFill();
  stroke(63, 66, 117);
  strokeWeight(thickness);
  rect(0, 0, size + 5, size + 5);
  pop();

  push();
  rectMode(CENTER);
  translate(255, 50);
  noFill();
  stroke(57, 124, 153);
  strokeWeight(thickness);
  rect(0, 0, size + 15, size + 15);
  pop();

  push();
  rectMode(CENTER);
  translate(255, 50);
  noFill();
  stroke(230, 193, 94);
  strokeWeight(thickness);
  rect(0, 0, size + 20, size + 20);
  pop();

  // rect f1 c4
  push();
  rectMode(CENTER);
  translate(351, 50);
  noFill();
  stroke(230, 193, 94);
  strokeWeight(thickness);
  rect(0, 0, size, size);
  pop();

  push();
  rectMode(CENTER);
  translate(351, 50);
  noFill();
  stroke(227, 36, 179);
  strokeWeight(thickness);
  rect(0, 0, size + 5, size + 5);
  pop();

  push();
  rectMode(CENTER);
  translate(351, 50);
  noFill();
  stroke(0, 0, 179);
  strokeWeight(thickness);
  rect(0, 0, size + 10, size + 10);
  pop();

  push();
  rectMode(CENTER);
  translate(351, 50);
  noFill();
  stroke(227, 36, 179);
  strokeWeight(thickness);
  rect(0, 0, size + 15, size + 15);
  pop();

  push();
  rectMode(CENTER);
  translate(351, 50);
  noFill();
  stroke(230, 193, 94);
  strokeWeight(thickness);
  rect(0, 0, size + 20, size + 20);
  pop();

  push();
  rectMode(CENTER);
  translate(351, 50);
  noFill();
  stroke(0, 0, 179);
  strokeWeight(thickness);
  rect(0, 0, size + 20, size + 20);
  pop();

  // Rect f1 c5
  push();
  rectMode(CENTER);
  translate(450, 50);
  noFill();
  stroke(230, 193, 94);
  strokeWeight(thickness);
  rect(0, 0, size, size);
  pop();

  push();
  rectMode(CENTER);
  translate(450, 50);
  noFill();
  stroke(227, 36, 179);
  strokeWeight(thickness);
  rect(0, 0, size + 5, size + 5);
  pop();

  push();
  rectMode(CENTER);
  translate(450, 50);
  noFill();
  stroke(0, 0, 179);
  strokeWeight(thickness);
  rect(0, 0, size + 10, size + 10);
  pop();

  push();
  rectMode(CENTER);
  translate(450, 50);
  noFill();
  stroke(0, 250, 0);
  strokeWeight(thickness);
  rect(0, 0, size + 20, size + 20);
  pop();

  //Rect f2 c1
  push();
  rectMode(CENTER);
  translate(57, 160);
  noFill();
  stroke(0, 0, 179);
  strokeWeight(thickness);
  rect(0, 0, size, size);
  pop();

  push();
  rectMode(CENTER);
  translate(57, 160);
  noFill();
  stroke(0, 20, 179);
  strokeWeight(thickness);
  rect(0, 0, size + 15, size + 15);
  pop();

  // rect f2 c2
  push();
  rectMode(CENTER);
  translate(155, 160);
  noFill();
  stroke(230, 193, 94);
  strokeWeight(thickness);
  rect(0, 0, size, size);
  pop();

  push();
  rectMode(CENTER);
  translate(155, 160);
  noFill();
  stroke(107, 0, 147);
  strokeWeight(thickness);
  rect(0, 0, size + 5, size + 5);
  pop();

  push();
  rectMode(CENTER);
  translate(155, 160);
  noFill();
  stroke(0, 250, 0);
  strokeWeight(thickness);
  rect(0, 0, size + 10, size + 10);
  pop();

  push();
  rectMode(CENTER);
  translate(155, 160);
  noFill();
  stroke(20, 0, 100);
  strokeWeight(thickness);
  rect(0, 0, size + 15, size + 15);
  pop();

  // rect f2 c3
  push();
  rectMode(CENTER);
  translate(253, 160);
  noFill();
  stroke(240, 144, 215);
  strokeWeight(thickness);
  rect(0, 0, size, size);
  pop();

  push();
  rectMode(CENTER);
  translate(253, 160);
  noFill();
  stroke(82, 82, 135);
  strokeWeight(thickness);
  rect(0, 0, size + 2, size + 2);
  pop();


  push();
  rectMode(CENTER);
  translate(253, 160);
  noFill();
  stroke(242, 223, 173);
  strokeWeight(thickness);
  rect(0, 0, size + 7, size + 7);
  pop();

  push();
  rectMode(CENTER);
  translate(253, 160);
  noFill();
  stroke(82, 82, 135);
  strokeWeight(thickness);
  rect(0, 0, size + 15, size + 15);
  pop();

  // rect f2 c4
  push();
  rectMode(CENTER);
  translate(350, 160);
  noFill();
  stroke(230, 193, 94);
  strokeWeight(thickness);
  rect(0, 0, size, size);
  pop();

  push();
  rectMode(CENTER);
  translate(350, 160);
  noFill();
  stroke(82, 82, 135);
  strokeWeight(thickness);
  rect(0, 0, size + 5, size + 5);
  pop();

  push();
  rectMode(CENTER);
  translate(350, 160);
  noFill();
  stroke(240, 147, 218);
  strokeWeight(thickness);
  rect(0, 0, size + 10, size + 10);
  pop();

  push();
  rectMode(CENTER);
  translate(350, 160);
  noFill();
  stroke(242, 223, 173);
  strokeWeight(thickness);
  rect(0, 0, size + 13, size + 13);
  pop();

  push();
  rectMode(CENTER);
  translate(350, 160);
  noFill();
  stroke(127, 251, 126);
  strokeWeight(thickness);
  rect(0, 0, size + 15, size + 15);
  pop();

  push();
  rectMode(CENTER);
  translate(350, 160);
  noFill();
  stroke(0, 0, 250);
  strokeWeight(thickness);
  rect(0, 0, size + 16, size + 16);
  pop();

  // rect f2 c5
  push();
  rectMode(CENTER);
  translate(450, 160);
  noFill();
  stroke(230, 0, 0);
  strokeWeight(thickness);
  rect(0, 0, size + 10, size + 10);
  pop();

  push();
  rectMode(CENTER);
  translate(450, 160);
  noFill();
  stroke(240, 144, 215);
  strokeWeight(thickness);
  rect(0, 0, size + 17, size + 17);
  pop();

  // rect f3 c1
  push();
  rectMode(CENTER);
  translate(55, 260);
  noFill();
  stroke(242, 238, 85);
  strokeWeight(thickness);
  rect(0, 0, size, size);
  pop();

  push();
  rectMode(CENTER);
  translate(55, 260);
  noFill();
  stroke(108, 10, 240);
  strokeWeight(thickness);
  rect(0, 0, size + 5, size + 5);
  pop();

  push();
  rectMode(CENTER);
  translate(55, 260);
  noFill();
  stroke(247, 198, 234);
  strokeWeight(thickness);
  rect(0, 0, size + 10, size + 10);
  pop();

  ///rect f3 c2
  push();
  rectMode(CENTER);
  translate(155, 260);
  noFill();
  stroke(0, 223, 0);
  strokeWeight(thickness);
  rect(0, 0, size + 10, size + 10);
  pop();

  //CENTER RECT/////////////
  push();
  rectMode(CENTER);
  translate(252, 258);
  noFill();
  stroke(230, 0, 0);
  strokeWeight(thickness);
  rect(0, 0,size + 5,size + 5);
  pop();

  push();
  rectMode(CENTER);
  translate(252, 258);
  noFill();
  stroke(240, 144, 215);
  strokeWeight(thickness);
  rect(0, 0, size + 10, size + 10);
  pop();

  ///rect f3 c4///////////////////////////
  push();
  rectMode(CENTER);
  translate(350, 258);
  noFill();
  stroke(237, 233, 83);
  strokeWeight(thickness);
  rect(0, 0, size, size);
  pop();

  push();
  rectMode(CENTER);
  translate(350, 258);
  noFill();
  stroke(247, 198, 234);
  strokeWeight(thickness);
  rect(0, 0, size + 5, size + 5);
  pop();

  push();
  rectMode(CENTER);
  translate(350, 258);
  noFill();
  stroke(0, 0, 234);
  strokeWeight(thickness);
  rect(0, 0, size + 8, size + 8);
  pop();

  push();
  rectMode(CENTER);
  translate(350, 258);
  noFill();
  stroke(159, 159, 185);
  strokeWeight(thickness);
  rect(0, 0, size + 10, size + 10);
  pop();

  push();
  rectMode(CENTER);
  translate(350, 258);
  noFill();
  stroke(0, 200, 0);
  strokeWeight(thickness);
  rect(0, 0, size + 12, size + 12);
  pop();

  push();
  rectMode(CENTER);
  translate(350, 258);
  noFill();
  stroke(247, 198, 234);
  strokeWeight(thickness);
  rect(0, 0, size + 13, size + 13);
  pop();

  //rect f4 c3 //////////////////////

  push();
  rectMode(CENTER);
  translate(450, 258);
  noFill();
  stroke(230, 193, 94);
  strokeWeight(thickness);
  rect(0, 0, size, size);
  pop();

  push();
  rectMode(CENTER);
  translate(450, 258);
  noFill();
  stroke(227, 36, 179);
  strokeWeight(thickness);
  rect(0, 0, size + 5, size + 5);
  pop();

  push();
  rectMode(CENTER);
  translate(450, 258);
  noFill();
  stroke(0, 0, 179);
  strokeWeight(thickness);
  rect(0, 0, size + 10, size + 10);
  pop();

  push();
  rectMode(CENTER);
  translate(450, 258);
  noFill();
  stroke(0, 0, 179);
  strokeWeight(thickness);
  rect(0, 0, size + 12, size + 12);
  pop();

  // rect f4 c1///////////////////

  push();
  rectMode(CENTER);
  translate(55, 358);
  noFill();
  stroke(0, 0, 179);
  strokeWeight(thickness);
  rect(0, 0, size, size);
  pop();

  push();
  rectMode(CENTER);
  translate(55, 358);
  noFill();
  stroke(0, 179, 0);
  strokeWeight(thickness);
  rect(0, 0, size + 5, size + 5);
  pop();

  push();
  rectMode(CENTER);
  translate(55, 358);
  noFill();
  stroke(179, 0, 0);
  strokeWeight(thickness);
  rect(0, 0, size + 10, size + 10);
  pop();

  // rect f4 c2 ///////////////////////
  push();
  rectMode(CENTER);
  translate(155, 358);
  noFill();
  stroke(189, 28, 162);
  strokeWeight(thickness);
  rect(0, 0, size + 5, size + 5);
  pop();

  push();
  rectMode(CENTER);
  translate(155, 358);
  noFill();
  stroke(179, 0, 0);
  strokeWeight(thickness);
  rect(0, 0, size + 10, size + 10);
  pop();

  // rect f4 c2 //////////////////////////
  push();
  rectMode(CENTER);
  translate(253, 358);
  noFill();
  stroke(237, 233, 83);
  strokeWeight(thickness);
  rect(0, 0, size, size);
  pop();

  push();
  rectMode(CENTER);
  translate(253, 358);
  noFill();
  stroke(189, 28, 162);
  strokeWeight(thickness);
  rect(0, 0, size + 3, size + 3);
  pop();

  push();
  rectMode(CENTER);
  translate(253, 358);
  noFill();
  stroke(0, 0, 234);
  strokeWeight(thickness);
  rect(0, 0, size + 5, size + 5);
  pop();

  push();
  rectMode(CENTER);
  translate(253, 358);
  noFill();
  stroke(159, 159, 185);
  strokeWeight(thickness);
  rect(0, 0, size + 8, size + 8);
  pop();

  push();
  rectMode(CENTER);
  translate(253, 358);
  noFill();
  stroke(0, 0, 250);
  strokeWeight(thickness);
  rect(0, 0, size + 10, size + 10);
  pop();

  // rect f4 c4 ///////////
  push();
  rectMode(CENTER);
  translate(350, 358);
  noFill();
  stroke(57, 124, 153);
  stroke(0, 0, 250);
  strokeWeight(thickness);
  rect(0, 0, size, size);
  pop();

  push();
  rectMode(CENTER);
  translate(350, 358);
  noFill();
  stroke(63, 66, 117);
  strokeWeight(thickness);
  rect(0, 0, size + 12, size + 12);
  pop();

  // f4 c5 /////////////////////
  push();
  rectMode(CENTER);
  translate(450, 358);
  noFill();
  stroke(63, 66, 117);
  strokeWeight(thickness);
  rect(0, 0, size, size);
  pop();

  push();
  rectMode(CENTER);
  translate(450, 358);
  noFill();
  stroke(250, 0, 0);
  strokeWeight(thickness);
  rect(0, 0, size + 8, size + 8);
  pop();

  // rect f5 c1
  push();
  rectMode(CENTER);
  translate(53, 458);
  noFill();
  stroke(237, 233, 83);
  strokeWeight(thickness);
  rect(0, 0, size, size);
  pop();

  push();
  rectMode(CENTER);
  translate(53, 458);
  noFill();
  stroke(0, 200, 0);
  strokeWeight(thickness);
  rect(0, 0, size + 5, size + 5);
  pop();

  push();
  rectMode(CENTER);
  translate(53, 458);
  noFill();
  stroke(0, 0, 234);
  strokeWeight(thickness);
  rect(0, 0, size + 9, size + 9);
  pop();

  push();
  rectMode(CENTER);
  translate(53, 458);
  noFill();
  stroke(221, 140, 207);
  strokeWeight(thickness);
  rect(0, 0, size + 11, size + 11);
  pop();

  // rect f5 c2 ////////////////////
  push();
  rectMode(CENTER);
  translate(153, 458);
  noFill();
  stroke(221, 0, 0);
  strokeWeight(thickness);
  rect(0, 0, size, size);
  pop();

  push();
  rectMode(CENTER);
  translate(153, 458);
  noFill();
  strokeWeight(thickness);
  rect(0, 0, size + 5, size + 5);
  pop();

  push();
  rectMode(CENTER);
  translate(153, 458);
  noFill();
  stroke(248, 245, 169);
  strokeWeight(thickness);
  rect(0, 0, size + 10, size + 10);
  pop();

  // rect f5 c3 //////////////////////////
  push();
  rectMode(CENTER);
  translate(253, 458);
  noFill();
  stroke(248, 45, 249);
  strokeWeight(thickness);
  rect(0, 0, size, size);
  pop();

  push();
  rectMode(CENTER);
  translate(253, 458);
  noFill();
  stroke(48, 45, 249);
  strokeWeight(thickness);
  rect(0, 0, size + 3, size + 3);
  pop();

  push();
  rectMode(CENTER);
  translate(253, 458);
  noFill();
  stroke(48, 45, 249);
  strokeWeight(thickness);
  rect(0, 0, size + 5, size + 5);
  pop();

  push();
  rectMode(CENTER);
  translate(253, 458);
  noFill();
  stroke(242, 245, 66);
  strokeWeight(thickness);
  rect(0, 0, size + 7, size + 7);
  pop();

  push();
  rectMode(CENTER);
  translate(253, 458);
  noFill();
  stroke(242, 245, 66);
  strokeWeight(thickness);
  rect(0, 0, size + 10, size + 10);
  pop();

  // rect f5 c4 /////////////////////////////
  push();
  rectMode(CENTER);
  translate(353, 458);
  noFill();
  stroke(248, 0, 0);
  strokeWeight(thickness);
  rect(0, 0, size + 10, size + 10);
  pop();

  // rect f5 c5 //////////////////////
  push();
  rectMode(CENTER);
  translate(453, 458);
  noFill();
  stroke(248, 0, 120);
  strokeWeight(thickness);
  rect(0, 0, size, size);
  pop();

  push();
  rectMode(CENTER);
  translate(453, 458);
  noFill();
  stroke(0, 48, 120);
  strokeWeight(thickness);
  rect(0, 0, size + 10, size + 10);
  pop();
}
