import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Section } from 'src/app/models/section';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})
export class ResearchComponent implements OnInit {

  sections$: Observable<Section[]>;

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.sections$ = this.contentService.getResearch()
  }

}
