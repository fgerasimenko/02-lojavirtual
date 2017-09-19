import { Component, OnInit } from '@angular/core';

import { Produto } from './produto.model';
import { PRODUTOS } from './produtos-mock';


@Component({
    moduleId: module.id,
    selector: 'produtos-lista',
    templateUrl: './produtos-lista.component.html',
    styleUrls: ['./produtos-lista.component.css']
})
export class ProdutosListaComponent implements OnInit {

    produtos: Produto[] = PRODUTOS;
    getProdutos(){}
    constructor() { }

    ngOnInit() { }
}