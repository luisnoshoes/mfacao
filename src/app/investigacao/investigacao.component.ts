import { Component, OnInit } from '@angular/core';
import investigacao from "src/assets/content/investigacao.json";
import { InvestigacaoSection } from './investigacao-section.type';

@Component({
  selector: 'app-investigacao',
  templateUrl: './investigacao.component.html',
  styleUrls: ['./investigacao.component.css']
})
export class InvestigacaoComponent implements OnInit {
  
  sections: InvestigacaoSection[] = investigacao;

  
  constructor() { }

  ngOnInit(): void {
  }

}
