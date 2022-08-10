var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
pincel.fillStyle = 'lightgray';
pincel.fillRect(0,0,600,400);

function desenhacirculo(x,y,raio){
    pincel.fillStyle = 'blue';
    pincel.beginPath();
    pincel.arc(x,y,raio,0,2*Math.PI);
    pincel.fill();
}

function limpaTela(){
    pincel.clearRect(0,0,600,400);
}

var x = 20;
var sentido = 1;
var raio = 19;
var fatorCrescimento = 0;

function atualizaTela(){
    limpaTela();

    if( x > 600) {
    sentido = -1
} else if (x < 0) {
    sentido = 1;
} 

else if(raio > 30) {
    // o raio tem que diminuir
    fatorCrescimento = -1;
} else if (raio < 20) {
    // o raio tem que aumentar
    fatorCrescimento = 1;
}

raio = raio + fatorCrescimento;

    desenhacirculo(x,20,raio);
    x = x + sentido;
}

setInterval(atualizaTela,10);