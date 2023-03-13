let objetos = [];
let detectorObjecto;
let img;
let statusText;

function preload() {
  img = loadImage('capivara.jpeg');
}

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.center();

  detectorObjecto = ml5.objectDetector('cocossd', modelLoaded);

  let count = 0;
  let interval = setInterval(() => {
    let text = 'Carregando.';
    if (count % 3 === 1) {
      text = 'Carregando..';
    } else if (count % 3 === 2) {
      text = 'Carregando...';
    }
    statusText = text;
    document.getElementById('status').innerHTML = text;
    count++;
    if (text != 'Carregando.' && text != 'Carregando..' && text != 'Carregando...') {
      clearInterval(interval);
    }
  }, 1000);
}

function gotResult(error, results) {
  if (error) {
    console.error(error); 
  } else {
    objetos = results;
  }
}

function modelLoaded() {
  console.log('Modelo carregado');
  detectorObjecto.detect(img, gotResult);
}

function draw() {
  if (text != '') {
    // Desenha a imagem carregada
    image(img, 0, 0, width, height);
    coisa = results[0]

    // Desenha o retângulo em torno do objeto detectado
    noFill();
    rect(x, y, largura, altura);
    fill(255, 0, 0);
    text('capybara', x + 2, y + 13);
    fill(255, 0, 0, 50);
    x2 = 330;
    y2 = 130;
    largura2 = 70;
    altura2 = 110;
    noFill();
    rect(x2, y2, largura2, altura2);
    fill(255, 0, 0);
    text('capybara', x2 + 2, y2 + 13, )
    fill(255, 0, 0, 50);
  }
}
