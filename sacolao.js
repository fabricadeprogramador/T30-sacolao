export default class Sacolao {
  constructor() {
    this.arrFrutas = [];
    this.sequenciaID = 1;
  }

  salvar(fruta) {
    //alterar
    if (fruta.id != undefined) {
      let indice = this.buscarIndicePorId(fruta.id);
      if (indice != -1) {
        this.arrFrutas[indice] = fruta;
      }
    } else {
      //cadastro
      fruta.id = this.sequenciaID;
      this.arrFrutas.push(fruta);
      this.sequenciaID++;
    }
  }

  excluir(id) {
    //excluir a fruta pelo encontrado
    let indice = this.buscarIndicePorId(id);
    this.arrFrutas.splice(indice, 1);
  }

  buscarIndicePorId(idFruta) {
    //faz uma busca
    for (let i = 0; i < this.arrFrutas.length; i++) {
      if (this.arrFrutas[i].id == idFruta) {
        //retorna um indice
        return i;
      }
    }

    return -1;
  }
  buscarTodos() {
    //retorna o array
    return this.arrFrutas;
  }

  buscarFrutaPorId(id) {
    for (let i = 0; i < this.arrFrutas.length; i++) {
      if (this.arrFrutas[i].id == id) {
        return this.arrFrutas[i];
      }
    }

    return null;
  }

  // buscarIndiceFruta(nomeFruta) {
  //   for (let i = 0; i < this.arrFrutas.length; i++) {
  //     if (this.arrFrutas[i].nome.toUpperCase() == nomeFruta.toUpperCase()) {
  //       return i;
  //     }
  //   }

  //   return -1;
  // }

  buscarIndiceFruta(nomeFruta) {
    return this.arrFrutas.findIndex(function (f) {
      return f.nome.toUpperCase() == nomeFruta.toUpperCase();
    });
  }

  buscaFrutasPorNome(busca) {
    //array contendo  as frutas com as palavras da busca
    //return um array
  }
}
