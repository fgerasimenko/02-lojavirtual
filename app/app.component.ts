import { Component, OnInit,OnChanges, Output, SimpleChange, SimpleChanges} from '@angular/core';

import { CarrinhoService } from './carrinho/carrinho.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})

export class AppComponent implements OnInit {
    qtdItens: number = this.carrinhoService.getQuantidade();

    constructor(
        private carrinhoService: CarrinhoService
    ) { }

    ngOnInit():void { 
        
    }    
}