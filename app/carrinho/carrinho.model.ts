import { Produto } from './../produtos/produto.model';

export class Carrinho{
    constructor(
        public produtoCarrinho: Produto[]
    ){}
}