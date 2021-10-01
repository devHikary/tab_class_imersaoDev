var rafa = { nome: "Rafa", vitorias: 2, empates: 1, derrotas: 1, pontos: 0}
var paulo = { nome: "Paulo", vitorias: 1, empates: 1, derrotas: 2, pontos: 0}


function calculaPontos(jogador){
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

rafa.pontos = calculaPontos(rafa);
paulo.pontos = calculaPontos(paulo);

console.log(rafa)
console.log(paulo)