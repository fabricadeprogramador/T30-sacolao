export default class Sacolao {
  constructor() {
    this.arrFrutas = [];
    this.sequenciaID = 1;
  }

  cadastrar(fruta) {
    fruta.id = this.sequenciaID;
    this.arrFrutas.push(fruta);
    this.sequenciaID++;
  }

  excluir(id) {
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
