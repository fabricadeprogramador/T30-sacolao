import Sacolao from "./sacolao.js";
export default class Controller {
  constructor() {
    this.sacolao = new Sacolao();
  }

  aoClicarCadastrar() {
    //1) Ler um form da tela
    let nomeFruta = document.getElementById("nomeFruta").value;
    //2) Montar um objeto JS
    let fruta = { nome: nomeFruta };
    //3) Invocar o método cadastrar do sacolão
    this.sacolao.cadastrar(fruta);
    //4) Exibe mensagem na tela
    window.alert("Cadastrado com Sucesso");
    //Atualizando lista na tela
    this.exibirLista();
    //Limpar tudo
    this.limparForm();
  }

  limparForm() {
    document.getElementById("nomeFruta").value = "";
    document.getElementById("idFruta").value = "";
    document.getElementById("textoBusca").value = "";
  }
  aoClicarNoBotaoExcluir() {
    //1 Ler ID da tela
    let idFruta = document.getElementById("idFruta").value;
    //2 Invocar metodo de exclusao
    this.sacolao.excluir(idFruta);
    //3 mensagem
    window.alert("Excluído com sucesso");
    //Atualizar lista
    this.exibirLista();
    //Limpar tudo
    this.limparForm();
  }

  aoClicarNoIconeExcluir(idFruta) {
    if (confirm("Tem certeza que deseja excluir? ")) {
      //1 Invocar metodo de exclusao
      this.sacolao.excluir(idFruta);

      //2 Atualizar lista
      this.exibirLista();

      //3 mensagem
      window.alert("Excluído com sucesso");

      //4 Limpar tudo
      this.limparForm();
    }
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

    //Limpar tudo
    this.limparForm();
  }

  exibirLista() {
    //buscar todos as frutas para exibir
    let arrFrutas = this.sacolao.buscarTodos();

    //Montar HTML das frutas
    let div = "";
    for (let i = 0; i < arrFrutas.length; i++) {
      div += `<div>
                ${arrFrutas[i].id}  |  ${arrFrutas[i].nome} 
                <img width="10" src="icons/trash.png" onclick="controller.aoClicarNoIconeExcluir(${arrFrutas[i].id})">
            </div>`;
    }

    //Exibir
    this.exibirResultado(div);
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
}
