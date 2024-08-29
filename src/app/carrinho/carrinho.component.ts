import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  itensCarrinho: IProdutoCarrinho[] = [];
  total = 0;
  constructor(public carrinhoService: CarrinhoService, private route: Router) { }

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    this.calcularTotal();
  }
  calcularTotal(){
    this.total = this.itensCarrinho.reduce((prev, currency) => prev + (currency.preco * currency.quantidade), 0);
  }

  removerItem(produtoId: number){
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);
    this.carrinhoService.removerItemCarrinho(produtoId);
    this.calcularTotal();
  }

  comprar(){
    alert('Compra realizada com sucesso!');
    this.carrinhoService.limparCarrinho();
    this.route.navigate(['produtos']);
  }
}
