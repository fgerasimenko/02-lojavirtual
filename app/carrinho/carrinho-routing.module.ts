import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarrinhoComponent } from './carrinho.component';


const carrinhoRoutes: Routes = [
    { 
        path: 'carrinho', 
        component: CarrinhoComponent 
    },
    {
        path: 'carrinho/:id',
        redirectTo: 'carrinho'
    }
];

@NgModule({
    imports: [RouterModule.forChild(carrinhoRoutes)],
    exports: [RouterModule]
})
export class CarrinhoRoutingModule {}