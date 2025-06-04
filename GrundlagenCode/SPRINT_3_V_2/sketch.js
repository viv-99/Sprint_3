let img; // VARIABLE FÜRS BILD
let cols = 50;
let rows = 50;
let gridWidth;
let gridHeight;
let grid = [];
let margin = 100; // Rand
let x0;
let y0;
  
function preload(){
  img = loadImage("CHAOS.jpg"); // BILD LADEN
  
}

function setup() {
  img.resize(600, 0); // FOR CREAT CANVAS DAMIT CANVAS IMMR SO GROSS WIE BILD
  createCanvas(img.width, img.height); // Grösse bassierend auf Bild
  noLoop();
  
  x0= margin;
  y0= margin;
  
  gridWidth = (width - margin*2)/ cols // Berechnung 
  gridHeight = (height- margin*2) / rows // Berechnung
  
  
  // Berechnen der Positionen der Bereiche Horizontal sowie Vertikal
  for (let i=0; i<cols; i++ ){
      grid [i] = []; // Vertikal
    
  for (let j=0; j<rows; j++){ // Horizontal
     
      let x = x0+i * gridWidth // Variable zum verändern
      let y = y0+j* gridHeight // Variable zum Verändern
      grid [i][j]= img.get( x, y, gridWidth, gridHeight);
  }
 }
}
  
function draw() {
  background(220);
  image(img, 0,0);
  
  let shuffledGrid = shuffle(grid);
  for (let i=0; i<cols; i++ ){ //Vertikal
  for (let j=0; j<rows; j++){ // Horizontal
    let shuffledElements = shuffle(shuffledGrid);
    let x =x0+i * gridWidth // Variable zum verändern
    let y = y0+j* gridHeight // Variable zum Verändern
    image(shuffledElements[i][j], x, y);
  }
}

}






function keyPressed() {
  if (key === 's' || key === 'S') {
    saveCanvas('myCanvas', 'jpg');
  }
 
}