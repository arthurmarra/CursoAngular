import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  titulo = "Produtos!";

  exibeProduto = false;

  dataHoje = new Date()

  telefone = "21987470904"

  produto = {
    descricao: "Playstation 5",
    preco: 4600,
    quantidade: 1,
    imagem: "https://s03.video.glbimg.com/x720/8619970.jpg"
  };

  produtos: Array<Product> = [
    {
      descricao: "Samsung Galaxy s20",
      preco: 1600,
      quantidade: 3,
      imagem: "https://files.tecnoblog.net/wp-content/uploads/2021/02/galaxy-s20-produto-700x700.png",
      disponivel: true
    },
    {
      descricao: "Samsung Galaxy s21",
      preco: 2699,
      quantidade: 0,
      imagem: "https://files.tecnoblog.net/wp-content/uploads/2021/01/galaxy-s21-produto-700x700.png",
      disponivel: false
    },
    {
      descricao: "Samsung Galaxy s22",
      preco: 5800,
      quantidade: 1,
      imagem: "https://www.oficinadanet.com.br/imagens/obj_item/1128/639x415xs22-ultra.jpg.pagespeed.ic.MKwnkVYsfn.jpg",
      disponivel: true
    }
  ]

  constructor() { }

  ngOnInit(): void {
    console.log("teste")
  }

  precoComDesconto(preco: number) {
    return preco*0.9
  }

  obterPrecoDesconto(){
    this.produto.preco = this.produto.preco * 0.9
  }

  comprar() {
    alert("Produto comprado com sucesso!")
  }

  clicouTag() {
    alert("Você clicou em alguma tag!")
  }

  passouMouse() {
    alert("Você passou o mouse em cima de uma tag!")
  }

  pressionouTecla(event: any) {
    console.log(event.target.value)
  }

  exibirProdutoSimNao(){
    this.exibeProduto = !this.exibeProduto
  }
}
