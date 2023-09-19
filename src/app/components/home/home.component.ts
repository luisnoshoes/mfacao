import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { Observable } from 'rxjs';
import { HomeInfo } from '../../models/home-info';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeInfo$: Observable<HomeInfo>;

  constructor(private readonly contentService: ContentService) { }

  ngOnInit(): void {
    this.homeInfo$ = this.contentService.getHome();
  }

}
