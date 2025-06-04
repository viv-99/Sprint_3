let img;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;

let cols; // Kann hier auch fixen Wert eintragen =50;
let rows; // Kann hier auch fixen Wert eintragen =50;

let gridWidth;
let gridHeight;

let grid = [];
let grid2 = [];
let grid3 = [];
let grid4 = [];
let grid5 = [];
let grid6 = [];
let grid7 = [];
let grid8 = [];

let x0;
let y0;
let margin = 0;
let canvas;

function preload() {
  //Bilder laden
  img = loadImage("bild_1.jpg");
  img2 = loadImage("bild_2.jpg");
  img3 = loadImage("bild_3.jpg");
  img4 = loadImage("bild_4.jpg");
  img5 = loadImage("bild_5.jpg");
  img6 = loadImage("bild_6.jpg");
  img7 = loadImage("bild_7.jpg");
  img8 = loadImage("bild_8.jpg");
}

function setup() {
  img.resize(1640, 2360); // DAMIT CANVAS IMMR SO

  //GROSS WIE BILD
  img2.resize(0, 2360);
  img3.resize(0, 2360);
  img4.resize(0, 2360);
  img5.resize(0, 2360);
  img6.resize(0, 2360);
  img7.resize(0, 2360);
  img8.resize(0, 2360);

  canvas = createCanvas(1640, 2360); // Grösse bassierend auf Bild
  noLoop();

  //Random der Cols und Rows definieren
  cols = int(random(30, 55)); //int braucht man dafür das keine Komma Zahlen entstehen
  rows = int(random(1, 1));

  // RAND
  x0 = margin; // Rand und dessen startposition
  y0 = margin; // Rand und dessen startposition

  //RASTER
  gridWidth = (width - margin * 2) / cols; // Berechnung
  gridHeight = (height - margin * 2) / rows; // Berechnung

  // img1 Berechnen der Positionen der Bereiche Horizontal sowie Vertikal
  for (let i = 0; i < cols; i++) {
    grid[i] = []; // Vertikal

    for (let j = 0; j < rows; j++) {
      // Horizontal

      let x = x0 + i * gridWidth; // Variable zum verändern
      let y = y0 + j * gridHeight; // Variable zum Verändern
      grid[i][j] = img.get(x, y, gridWidth, gridHeight);
    }
  }

  // img2 Berechnen der Positionen der Bereiche Horizontal sowie Vertikal
  for (let i = 0; i < cols; i++) {
    grid2[i] = []; // Vertikal

    for (let j = 0; j < rows; j++) {
      // Horizontal

      let x = x0 + i * gridWidth; // Variable zum verändern
      let y = y0 + j * gridHeight; // Variable zum Verändern
      grid2[i][j] = img2.get(x, y, gridWidth, gridHeight);
    }
  }

  // img3 Berechnen der Positionen der Bereiche Horizontal sowie Vertikal
  for (let i = 0; i < cols; i++) {
    grid3[i] = []; // Vertikal

    for (let j = 0; j < rows; j++) {
      // Horizontal

      let x = x0 + i * gridWidth; // Variable zum verändern
      let y = y0 + j * gridHeight; // Variable zum Verändern
      grid3[i][j] = img3.get(x, y, gridWidth, gridHeight);
    }
  }
  // img4 Berechnen der Positionen der Bereiche Horizontal sowie Vertikal
  for (let i = 0; i < cols; i++) {
    grid4[i] = []; // Vertikal

    for (let j = 0; j < rows; j++) {
      // Horizontal

      let x = x0 + i * gridWidth; // Variable zum verändern
      let y = y0 + j * gridHeight; // Variable zum Verändern
      grid4[i][j] = img4.get(x, y, gridWidth, gridHeight);
    }
  }

  // img5 Berechnen der Positionen der Bereiche Horizontal sowie Vertikal
  for (let i = 0; i < cols; i++) {
    grid5[i] = []; // Vertikal

    for (let j = 0; j < rows; j++) {
      // Horizontal

      let x = x0 + i * gridWidth; // Variable zum verändern
      let y = y0 + j * gridHeight; // Variable zum Verändern
      grid5[i][j] = img5.get(x, y, gridWidth, gridHeight);
    }
  }
  // img6 Berechnen der Positionen der Bereiche Horizontal sowie Vertikal
  for (let i = 0; i < cols; i++) {
    grid6[i] = []; // Vertikal

    for (let j = 0; j < rows; j++) {
      // Horizontal

      let x = x0 + i * gridWidth; // Variable zum verändern
      let y = y0 + j * gridHeight; // Variable zum Verändern
      grid6[i][j] = img6.get(x, y, gridWidth, gridHeight);
    }
    // img6 Berechnen der Positionen der Bereiche Horizontal sowie Vertikal
    for (let i = 0; i < cols; i++) {
      grid7[i] = []; // Vertikal

      for (let j = 0; j < rows; j++) {
        // Horizontal

        let x = x0 + i * gridWidth; // Variable zum verändern
        let y = y0 + j * gridHeight; // Variable zum Verändern
        grid7[i][j] = img6.get(x, y, gridWidth, gridHeight);
      }
      // img8 Berechnen der Positionen der Bereiche Horizontal sowie Vertikal
      for (let i = 0; i < cols; i++) {
        grid8[i] = []; // Vertikal

        for (let j = 0; j < rows; j++) {
          // Horizontal

          let x = x0 + i * gridWidth; // Variable zum verändern
          let y = y0 + j * gridHeight; // Variable zum Verändern
          grid8[i][j] = img8.get(x, y, gridWidth, gridHeight);
        }
      }
    }
  }
}

  function draw() {
    background(0);
    //image(img2, 0, 0);

    // VARIABLE SHUFFLE

    let shuffledGrid = shuffle(grid);
    let shuffledGrid2 = shuffle(grid2);
    let shuffledGrid3 = shuffle(grid3);
    let shuffledGrid4 = shuffle(grid4);
    let shuffledGrid5 = shuffle(grid5);
    let shuffledGrid6 = shuffle(grid6);
    let shuffledGrid7 = shuffle(grid7);
    let shuffledGrid8 = shuffle(grid8);

    for (let i = 0; i < cols; i++) {
      //Vertikal
      for (let j = 0; j < rows; j++) {
        // Horizontal

        let x = x0 + i * gridWidth; // Variable zum verändern
        let y = y0 + j * gridHeight; // Variable zum Verändern

        //Stroke um Grid?
        /* stroke(0); // z. B. Weiß
    strokeWeight(50);
    
    noFill();
    rect(x, y, gridWidth, gridHeight,15);*/

        // if random damit nicht jeder teil des grids dargestellt wird (in prozent)
        if (random() < 0.25) {
          tint(255, 200);
          image(
            shuffledGrid[i][j],
            x - 10,
            y - 10,
            gridWidth + 20,
            gridHeight + 20
          );
          noTint();
        }

        if (random() < 0.5) {
          tint(255, 200);
          image(
            shuffledGrid2[i][j],
            x - 10,
            y - 10,
            gridWidth + 20,
            gridHeight + 20
          );
          noTint();
        }

        if (random() < 0.5) {
          tint(255, 200);
          image(
            shuffledGrid3[i][j],
            x - 10,
            y - 10,
            gridWidth + 20,
            gridHeight + 20
          );
          noTint();
        }

        if (random() < 0.5) {
          tint(255, 200);
          image(
            shuffledGrid4[i][j],
            x - 10,
            y - 10,
            gridWidth + 2,
            gridHeight + 2
          );
          noTint();
        }

        if (random() < 0.5) {
          tint(255, 200);
          image(
            shuffledGrid5[i][j],
            x - 10,
            y - 10,
            gridWidth + 20,
            gridHeight + 20
          );
          noTint();
        }

        if (random() < 0.5) {
          tint(255, 200);
          image(
            shuffledGrid6[i][j],
            x - 10,
            y - 10,
            gridWidth + 20,
            gridHeight + 20
          );
          noTint();
        }

        if (random() < 0.5) {
          tint(255, 200);
          image(
            shuffledGrid7[i][j],
            x - 10,
            y - 10,
            gridWidth + 20,
            gridHeight + 20
          );
          noTint();
        }

        if (random() < 0.5) {
          tint(255, 200);
          image(
            shuffledGrid8[i][j],
            x - 10,
            y - 10,
            gridWidth + 20,
            gridHeight + 20
          );
          noTint();

          /* push(); // Speicher aktuellen Grafikzustand
      blendMode(BURN); // Blendmodus aktivieren
      image(shuffledGrid3[i][j], x, y); // Zeichnen mit Blend
      pop(); // Ursprünglichen Zustand wiederherstellen*/
        }
      }
    }
}

function keyPressed() {
  if (key === "s" || key === "S") {
    let dataURL = canvas.elt.toDataURL("image/jpeg", 1.0);
    let link = createA(dataURL, "myCanvas.jpg");
    link.attribute("download", "myCanvas.jpg");
    link.hide();
    link.elt.click();
  }

}