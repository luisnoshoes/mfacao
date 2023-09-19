import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ResearchComponent } from './components/research/research.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "research",
    component: ResearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
