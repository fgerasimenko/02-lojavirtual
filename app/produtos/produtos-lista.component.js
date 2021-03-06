"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const produto_service_1 = require("./produto.service");
const carrinho_service_1 = require("./../carrinho/carrinho.service");
let ProdutosListaComponent = class ProdutosListaComponent {
    constructor(produtoService, carrinhoService) {
        this.produtoService = produtoService;
        this.carrinhoService = carrinhoService;
        this.isNew = true;
    }
    ngOnInit() {
        this.produtoService.getProdutos()
            .then((produtos) => {
            this.produtos = produtos;
        })
            .catch(err => console.log(err));
    }
    onAdd(produto, qtd) {
        //this.carrinhoService.addOrUpdate(id);
        let promise = this.carrinhoService.findProduto(produto.id).then(car => car.id === produto.id);
        if (promise) {
            //this.carrinhoService.create(produto,qtd);
            console.log(promise);
        }
        else {
            //this.carrinhoService.update(produto, qtd);
            console.log('nlog');
        }
        //let prod = this.carrinhoService.create(produto,qtd);     
    }
};
ProdutosListaComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'produtos-lista',
        templateUrl: './produtos-lista.component.html',
        styleUrls: ['./produtos-lista.component.css']
    }),
    __metadata("design:paramtypes", [produto_service_1.ProdutoService,
        carrinho_service_1.CarrinhoService])
], ProdutosListaComponent);
exports.ProdutosListaComponent = ProdutosListaComponent;
//# sourceMappingURL=produtos-lista.component.js.map