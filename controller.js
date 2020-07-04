import Sacolao from "./sacolao.js";
export default class Controller {
  constructor() {
    this.sacolao = new Sacolao();
  }
  buscarPorId(id) {
    let fruta = this.sacolao.buscarFrutaPorId(id);

    if (fruta != null) {
      this.exibirResultado(
        "Fruta encontrada:" + fruta.id + " nome: " + fruta.nome
      );
    } else {
      this.exibirResultado("Não encontrado!");
    }
  }

  buscarPorNome(nome) {
    let indice = this.sacolao.buscarIndiceFruta(nome);
    if (indice != -1) {
      this.exibirResultado("Encontrado na posição:" + indice);
    } else {
      this.exibirResultado("Não encontrado!");
    }
  }

  exibirResultado(conteudo) {
    let divResultado = document.getElementById("resultado");
    divResultado.innerHTML = conteudo;
  }

  aoClicarBuscar() {
    //Leitura da tela

    let textoBusca = document.getElementById("textoBusca").value;
    let filtro = document.getElementById("filtro").value;

    //Decide se chama buscarPorId ou buscarPorNome
    if (textoBusca != "") {
      if (filtro != "") {
        if (filtro == "id") {
          this.buscarPorId(textoBusca);
        } else {
          this.buscarPorNome(textoBusca);
        }
      } else {
        this.exibirResultado("Selecione uma opção de filtro!");
      }
    } else {
      this.exibirResultado("Digite um texto!");
    }
  }

  aoClicarCadastrar() {
    //Pega os dados da fruta
    //manda pro sacolao cadastrar
    //Exibe mensagem de sucesso
    //Carrega na tela a lista de frutas atualizada
  }
}
