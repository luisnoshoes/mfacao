import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InvestigacaoComponent } from './investigacao/investigacao.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "investigacao",
    component: InvestigacaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
