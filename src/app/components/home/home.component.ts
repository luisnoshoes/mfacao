import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeInfo } from 'src/app/models/home-info';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homeInfo$: Observable<HomeInfo>;

  constructor(private readonly contentService: ContentService) { }

  ngOnInit(): void {
    this.homeInfo$ = this.contentService.getHome();
  }
}
