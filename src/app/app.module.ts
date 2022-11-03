import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';

import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { InvestigacaoComponent } from './investigacao/investigacao.component';
import { EnsinoComponent } from './ensino/ensino.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { OutrosComponent } from './outros/outros.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    InvestigacaoComponent,
    EnsinoComponent,
    CurriculumComponent,
    OutrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatDividerModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
