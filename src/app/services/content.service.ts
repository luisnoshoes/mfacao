import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeInfo } from '../models/home-info';
import { ResearchContent } from '../models/research/research-content';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private readonly httpClient: HttpClient) { }

  getResearch(): Observable<ResearchContent> {
    return this.httpClient.get<ResearchContent>('assets/content/research.json');
  }

  getHome(): Observable<HomeInfo> {
    return this.httpClient.get<HomeInfo>('assets/content/home.json');
  }
}
