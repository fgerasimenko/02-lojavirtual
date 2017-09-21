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
const carrinho_service_1 = require("./carrinho.service");
let CarrinhoComponent = class CarrinhoComponent {
    constructor(carrinhoService) {
        this.carrinhoService = carrinhoService;
        this.cep = "00000-000";
    }
    ngOnInit() {
        this.carrinhoService.getCarrinho()
            .then((carrinho) => {
            this.carrinho = carrinho;
            this.quantidade = carrinho.length;
        })
            .catch(err => console.log(err));
    }
    onCalcular(data) {
        this.cep = data;
        this.frete = this.carrinhoService.getFrete(data);
    }
    onDelete(produto) {
        this.carrinhoService
            .deleteCarrinho(produto)
            .then(() => this.carrinho = this.carrinho.filter((p) => p.id != produto.id));
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CarrinhoComponent.prototype, "cep", void 0);
CarrinhoComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'carrinho',
        templateUrl: './carrinho.component.html',
        styleUrls: ['./carrinho.component.css']
    }),
    __metadata("design:paramtypes", [carrinho_service_1.CarrinhoService])
], CarrinhoComponent);
exports.CarrinhoComponent = CarrinhoComponent;
//# sourceMappingURL=carrinho.component.js.map