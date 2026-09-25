//Criar variável de imagem
let fundo;

async function setup() {
  createCanvas(600, 400);
  //Carregar imagem
  fundo = await loadImage('fundo.jpg')
  //Colocar a  imagem no fundo
  background(fundo);

  //gerar posição aleatoria das flores
  for (let i = 0; i < 30; i++) {
    let x = random(width);
    let y = random(250, 350);
    let tamanho = random(10, 40);

    //Chamar a funçao flor
    flor(x, y, tamanho);
  }
}

//Criando a função flor
function flor(x, y, tamanho) {
  //linha da flor
  stroke(50, 120, 50);
  line(x, y, x, y + 50);

  //Preenchimento da flor
  fill(random(255), random(255), random(255));

  //Posicionando a flor na tela
  for (let i = 0; i < 6; i++) {
    ellipse(
      x + cos(i * 60) * tamanho / 2,
      y + sin(i * 60) * tamanho / 2,
      tamanho,
      tamanho
    );
  }
}