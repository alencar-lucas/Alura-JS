var paleta = document.querySelector('input');
var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
var desenha = false;

pincel.fillStyle = 'grey';
pincel.fillRect(0,0,600,400);

var raio = 10;

tela.onmousemove= function(evento){
    if(desenha){
    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;
    console.log(x + ',' + y);
}
else if (evento.shiftKey && evento.altKey) {
    
    alert('Só aperte uma tecla por vez, por favor!');

    }else if(evento.shiftKey && raio + 10 <= 40) {
    raio = raio + 10;

    }else if(evento.altKey && raio - 5 >= 10) {
    raio = raio - 5;

    }
    pincel.fillStyle = paleta.value;
    pincel.beginPath();
    pincel.arc(x,y,raio,0,2*3.14);
    pincel.fill();
}

tela.onmousedown = function(){

desenha = true;
}

tela.onmouseup = function() {

desenha = false;
}
