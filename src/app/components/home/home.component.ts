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
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s 0.5s', style({ opacity: 1 }))
      ])
    ]),
  ]
})
export class HomeComponent implements OnInit {
  homeInfo$: Observable<HomeInfo>;

  constructor(private readonly contentService: ContentService) { }

  ngOnInit(): void {
    this.homeInfo$ = this.contentService.getHome();
  }
}
