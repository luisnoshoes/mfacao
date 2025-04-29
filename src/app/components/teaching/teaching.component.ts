import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Section } from 'src/app/models/section';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-teaching',
  templateUrl: './teaching.component.html',
  styleUrls: ['./teaching.component.scss']
})
export class TeachingComponent implements OnInit {

  sections$: Observable<Section[]>;

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.sections$ = this.contentService.getTeaching()
  }
}
