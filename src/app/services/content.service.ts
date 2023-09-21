import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResearchSection } from 'src/app/models/research-section';
import { HomeInfo } from '../models/home-info';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private readonly httpClient: HttpClient) { }

  getResearch(): Observable<ResearchSection[]> {
    return this.httpClient.get<ResearchSection[]>('assets/content/research.json');
  }

  getHome(): Observable<HomeInfo> {
    return this.httpClient.get<HomeInfo>('assets/content/home.json');
  }
}
