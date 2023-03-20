let objetos = [];
let detectorObjecto;
let statusText;

function preload() {

}

function setup() {
    let canvas = createCanvas(500, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide()
    
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
        if (objetos) {
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
    console.log('Modelo carragedo');

}

function draw() {
    if (text != '') {
        detectorObjecto.detect(video, gotResult);
        // Desenha a imagem carrageda
        image(video, 0, 0, width, height);
        document.getElementById('btn').style.display = none
        for (var index = 0; index < objetos.length; index++) {
            document.getElementById('status').innerHTML = 'Objeto detectado &#127854;'
            noFill();
            rect(objetos[index].x, objetos[index].y, objetos[index].width, objetos[index].height);
            fill(255, 0, 0);
            text(objetos[index].label, objetos[index].x + 2, objetos[index].y + 13);
            fill(255, 0, 0, 50);


        }
    }


}

function go() {
    detectorObjecto = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('numeroObj').innerHTML = objetos.length + ' objeto detectado.';
}