import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ResearchComponent } from './components/research/research.component';
import { TypographyTestComponent } from './components/typography-test/typography-test.component';
import { TeachingComponent } from './components/teaching/teaching.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "research",
    component: ResearchComponent
  },
  {
    path: 'teaching',
    component: TeachingComponent
  },
  {
    path: "typography",
    component: TypographyTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
