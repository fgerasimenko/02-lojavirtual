import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const appRoutes: Routes = [
    { 
        path: '', 
        redirectTo: '/produtos',
        pathMatch: 'full'
    },
    {
        path: 'carrinho',
        redirectTo: '/carrinho',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
