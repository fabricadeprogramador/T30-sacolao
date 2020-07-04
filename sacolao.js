export default class Sacolao {
  constructor() {
    this.arrFrutas = [
      { id: 10, nome: "Maçã" },
      { id: 20, nome: "Pera" },
      { id: 30, nome: "Melancia" },
      { id: 40, nome: "Uva" },
    ];
  }

  cadastrar(fruta) {
    //Recebe uma fruta e coloca no array
    //Contador para gerar o ID
  }

  excluirPorId(id) {
    //excluir a fruta pelo encontrado
  }

  buscarTodos() {
    //retorna o array
  }

  buscarFrutaPorId(id) {
    for (let i = 0; i < this.arrFrutas.length; i++) {
      if (this.arrFrutas[i].id == id) {
        return this.arrFrutas[i];
      }
    }

    return null;
  }

  buscarIndiceFruta(fruta) {
    for (let i = 0; i < this.arrFrutas.length; i++) {
      if (this.arrFrutas[i].nome.toUpperCase() == fruta.toUpperCase()) {
        return i;
      }
    }

    return -1;
  }
}
