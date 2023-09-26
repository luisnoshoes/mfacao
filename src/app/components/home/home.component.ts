import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeInfo } from 'src/app/models/home-info';
import { ContentService } from 'src/app/services/content.service';
import {
  trigger,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(1000, style({ opacity: 1 }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  homeInfo$: Observable<HomeInfo>;

  constructor(private readonly contentService: ContentService) { }

  ngOnInit(): void {
    this.homeInfo$ = this.contentService.getHome();
  }
}
