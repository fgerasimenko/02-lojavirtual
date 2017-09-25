"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const produtos_lista_component_1 = require("./produtos-lista.component");
const produto_detalhe_component_1 = require("./produto-detalhe.component");
const produtoRoutes = [
    {
        path: 'produtos',
        component: produtos_lista_component_1.ProdutosListaComponent
    },
    {
        path: 'produtos/detalhe',
        component: produto_detalhe_component_1.ProdutoDetalheComponent
    },
    {
        path: 'produtos/detalhe/:id',
        component: produto_detalhe_component_1.ProdutoDetalheComponent
    },
    {
        path: 'produtos/carrinho',
        redirectTo: 'carrinho'
    }
];
let ProdutoRoutingModule = class ProdutoRoutingModule {
};
ProdutoRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(produtoRoutes)],
        exports: [router_1.RouterModule]
    })
], ProdutoRoutingModule);
exports.ProdutoRoutingModule = ProdutoRoutingModule;
//# sourceMappingURL=produto-routing.module.js.map