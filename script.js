var minhacor = document.getElementById("minhacor");

  var tela = document.querySelector("canvas");
  var pincel = tela.getContext("2d");
  var raio = 10;

  pincel.fillStyle = "#FFF9EB";
  pincel.fillRect(0, 0, 980, 500);

  var desenha = false;

  // atribuindo diretamente a função anônima
  tela.onmousemove = function(evento) {
    if (desenha) {
      if (evento.shiftKey && raio <= 40) {
        raio = raio + 10; 
      }
      if (evento.altKey && raio >= 10) {
        raio = raio - 5;
      }
      var x = evento.pageX - tela.offsetLeft;
      var y = evento.pageY - tela.offsetTop;
      pincel.fillStyle = minhacor.value;
      pincel.beginPath();
      pincel.arc(x, y, raio, 0, 2 * 3.14);
      pincel.fill();
    }
  };

  tela.onmousedown = function() {
    desenha = true;
  };

  tela.onmouseup = function() {
    desenha = false;
  };