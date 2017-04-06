import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page1Component } from "./page1.component";
import { Page2Component } from "./page2.component";
import { Page3Component } from "./page3.component";

const routes: Routes = [
    {path: '', redirectTo: '/page1', pathMatch: 'full'},
    {path: 'page1', component: Page1Component},
    {path: 'page2', component: Page2Component},
    {path: 'page3', component: Page3Component},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);