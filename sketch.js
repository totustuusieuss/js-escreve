function setup() {
    createCanvas (400, 400); 
    background("pink");
  }
  function draw() {
  
  stroke("black");
  fill("white");
  //console.log(mouseIsPressed)
  if (mouseIsPressed) {rect(mouseX, mouseY, 20,35)};
  rect(mouseX, mouseY, 20,35);
    
  }