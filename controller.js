import Sacolao from "./sacolao.js";
export default class Controller {
  constructor() {
    this.sacolao = new Sacolao();
    this.idFrutaAlterar = -1;
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
      //this.exibirResultado("Digite um texto!");
      this.buscarTodos();
    }

    //Limpar tudo
    this.limparForm();
  }

  aoClicarNoSalvar() {
    //1) Ler um form da tela
    let nomeFruta = document.getElementById("nomeFruta").value;
    //2) Montar um objeto JS
    let fruta = { nome: nomeFruta };
    //Adiciona o id no objeto quando ele existir, for diferente de -1
    if (this.idFrutaAlterar != -1) fruta.id = this.idFrutaAlterar;

    //3) Invocar o método cadastrar do sacolão
    this.sacolao.salvar(fruta);
    //4) Exibe mensagem na tela
    window.alert("Cadastrado com Sucesso");
    //Atualizando lista na tela
    this.buscarTodos();
    //Limpar tudo
    this.limparForm();

    //Resetar o id da alteracao
    this.idFrutaAlterar = -1;
  }

  aoClicarNoBotaoExcluir() {
    //1 Ler ID da tela
    let idFruta = document.getElementById("idFruta").value;
    //2 Invocar metodo de exclusao
    this.sacolao.excluir(idFruta);
    //3 mensagem
    window.alert("Excluído com sucesso");
    //Atualizar lista
    this.buscarTodos();
    //Limpar tudo
    this.limparForm();
  }

  aoClicarNoIconeExcluir(idFruta) {
    if (confirm("Tem certeza que deseja excluir? ")) {
      //1 Invocar metodo de exclusao
      this.sacolao.excluir(idFruta);

      //2 Atualizar lista
      this.buscarTodos();

      //3 mensagem
      window.alert("Excluído com sucesso");

      //4 Limpar tudo
      this.limparForm();
    }
  }

  aoClicarNoIconeEditar(idFruta) {
    //buscando a fruta a ser edita
    let fruta = this.sacolao.buscarFrutaPorId(idFruta);
    //Jogo no form
    this.preencherForm(fruta);

    //Seta o id com a intenção de alterar
    this.idFrutaAlterar = idFruta;
  }

  limparForm() {
    document.getElementById("nomeFruta").value = "";
    document.getElementById("textoBusca").value = "";
  }

  //Ler um objeto fruto e adiciona os dados do objeto na tela
  preencherForm(fruta) {
    document.getElementById("nomeFruta").value = fruta.nome;
    //demais campos
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
    //buscar todos as frutas para exibir
    let arrFrutas = this.sacolao.buscaFrutasPorNome(nome);
    this.exibirLista(arrFrutas);
  }

  buscarTodos() {
    //buscar todos as frutas para exibir
    let arrFrutas = this.sacolao.buscarTodos();
    this.exibirLista(arrFrutas);
  }

  exibirLista(arrFrutas) {
    if (arrFrutas.length == 0) {
      this.exibirResultado("Não encontrado!");
    } else {
      //Montar HTML das frutas
      let div = "";
      for (let i = 0; i < arrFrutas.length; i++) {
        div += `<div>
               ${arrFrutas[i].id}  |  ${arrFrutas[i].nome} 
               <img width="10" src="icons/trash.png" onclick="controller.aoClicarNoIconeExcluir(${arrFrutas[i].id})">
               <img width="10" src="icons/editar.png" onclick="controller.aoClicarNoIconeEditar(${arrFrutas[i].id})">
               </div>`;
      }

      //Exibir
      this.exibirResultado(div);
    }
  }

  exibirResultado(conteudo) {
    let divResultado = document.getElementById("resultado");
    divResultado.innerHTML = conteudo;
  }
}
