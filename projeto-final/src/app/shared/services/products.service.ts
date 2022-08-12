import { Injectable } from '@angular/core';
import { Product} from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  produtos: Array<Product> = [
    {
      id: 1,
      descricao: 'Chocolate Meio Amargo Garoto ',
      preco: 5,
      quantidade: 3,
      imagem: 'https://hiperideal.vteximg.com.br/arquivos/ids/199648-1000-1000/99c7252d63db62ddf7dd1861206b1665_chocolate-garoto-meio-amargo-90g_lett_1.jpg?v=637908254505170000'
    },
    {
      id: 2,
      descricao: 'Chocolate Branco Garoto',
      preco: 5,
      quantidade: 1,
      imagem: 'https://lojasantoantonio.vteximg.com.br/arquivos/ids/156735-1000-1000/35-Chocolate-Branco-1kg-GAROTO.jpg?v=637254328609570000'
    },
    {
      id: 3,
      descricao: 'Chocolate ao Leite Garoto ',
      preco: 5,
      quantidade: 9,
      imagem: 'https://a-static.mlcdn.com.br/1500x1500/barra-de-chocolate-ao-leite-90g-garoto/magazineluiza/228589400/1eb1752ef5de63e54786103bbf1b1481.jpg'
    },
    {
      id: 4,
      descricao: 'Caixa de Bombom Garoto ',
      preco: 5,
      quantidade: 25,
      imagem: 'https://a-static.mlcdn.com.br/1500x1500/caixa-bombom-250g-garoto/magazinetambem/7766312aba7911eba3864201ac18500e/c376d18e5e7e0f82f8c7797b7be18171.jpeg'
    }
  ]
  constructor() { }

  getProdutos() {
    return this.produtos;
  }

  getProdutoById(id: number){
    return this.produtos.find((produtos) => produtos.id === id)
  }
}
