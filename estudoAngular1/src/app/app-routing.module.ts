import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./components/pages/home/home.component";
import { SortearComponent } from "./components/pages/sortear/sortear.component";
import { SorteadosComponent } from "./components/pages/sorteados/sorteados.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'sortear', component: SortearComponent},
  {path: 'sorteados', component: SorteadosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
