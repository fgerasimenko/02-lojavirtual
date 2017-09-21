"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const forms_1 = require("@angular/forms");
const carrinho_component_1 = require("./carrinho.component");
const carrinho_service_1 = require("./carrinho.service");
const carrinho_routing_module_1 = require("./carrinho-routing.module");
const produtos_module_1 = require("./../produtos/produtos.module");
let CarrinhoModule = class CarrinhoModule {
};
CarrinhoModule = __decorate([
    core_1.NgModule({
        declarations: [carrinho_component_1.CarrinhoComponent],
        imports: [
            produtos_module_1.ProdutosModule,
            carrinho_routing_module_1.CarrinhoRoutingModule,
            common_1.CommonModule,
            forms_1.FormsModule
        ],
        exports: [carrinho_component_1.CarrinhoComponent],
        providers: [
            carrinho_service_1.CarrinhoService
        ],
    })
], CarrinhoModule);
exports.CarrinhoModule = CarrinhoModule;
//# sourceMappingURL=carrinho.module.js.map