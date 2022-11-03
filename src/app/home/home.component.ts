import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ua_source = "https://api-assets.ua.pt/v1/image/resizer?imageUrl=https://www.ua.pt/contents%2Fimgs%2Fspaces%2Fespacos_campus_16.jpg&width=1920";

  constructor() { }

  ngOnInit(): void {
  }

}
