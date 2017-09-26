import { RouterModule, Routes } from "@angular/router";

import {
  AboutComponent,
  PortafolioComponent,
  ProductoComponent
} from './components/index.paginas';

const app_routes:Routes = [
  {path: 'routePath', component: PortafolioComponent },
  {path: 'routePath', component: AboutComponent },
  {path: 'routePath', component: ProductoComponent },
  {path: '**', pathMatch: 'full', redirectTo: '' }
];

export const app_routing = RouterModule.forRoot(app_routes, {useHash:true});
