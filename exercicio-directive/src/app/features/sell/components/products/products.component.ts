import { Component, OnInit } from '@angular/core';
import { Livros } from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  titulo = "Bem-vindo a Marra Store";

  exibeProduto = false;

  livros: Array<Livros> = [
    {
    titulo: "O Pequeno Príncipe",
    autor: "Antoine de Saint-Exupéry",
    quantidade: 3,
    imagem: "https://m.media-amazon.com/images/I/41R4s+z5FdL.jpg",
    disponivel: true
    },
    {
      titulo: "Ensaio sobre a cegueira",
      autor: "José Saramago",
      quantidade: 0,
      imagem: "https://images-na.ssl-images-amazon.com/images/I/71Hr1-by3UL.jpg",
      disponivel: false
    }
  ]

  constructor() { }

  ngOnInit(): void {
    console.log("teste")
  }

  precoComDesconto(preco: number) {
    return preco*0.9
  }
  /*
  obterPrecoDesconto(){
    this.produto.preco = this.produto.preco * 0.9
  }
  */
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
