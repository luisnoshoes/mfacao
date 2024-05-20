import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ResearchContent } from 'src/app/models/research/research-content';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})
export class ResearchComponent implements OnInit {
  
  researchContent$: Observable<ResearchContent>;

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.researchContent$ = this.contentService.getResearch()
  }

  openInNewTab(url: string) {
    if (!url) {
      return;
    }
    window.open(url, '_blank');
  }
}
