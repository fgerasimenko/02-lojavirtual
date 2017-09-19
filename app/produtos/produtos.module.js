"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const produtos_lista_component_1 = require("./produtos-lista.component");
const produto_detalhe_component_1 = require("./produto-detalhe.component");
const produto_routing_module_1 = require("./produto-routing.module");
const produto_service_1 = require("./produto.service");
let ProdutosModule = class ProdutosModule {
};
ProdutosModule = __decorate([
    core_1.NgModule({
        declarations: [
            produtos_lista_component_1.ProdutosListaComponent,
            produto_detalhe_component_1.ProdutoDetalheComponent
        ],
        imports: [
            common_1.CommonModule,
            produto_routing_module_1.ProdutoRoutingModule
        ],
        exports: [
            produtos_lista_component_1.ProdutosListaComponent,
            produto_detalhe_component_1.ProdutoDetalheComponent,
        ],
        providers: [
            produto_service_1.ProdutoService
        ]
    })
], ProdutosModule);
exports.ProdutosModule = ProdutosModule;
//# sourceMappingURL=produtos.module.js.map