import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Section } from 'src/app/models/section';
import { HomeInfo } from '../models/home-info';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private readonly httpClient: HttpClient) { }

  getResearch(): Observable<Section[]> {
    return this.httpClient.get<Section[]>('assets/content/research.json');
  }

  getTeaching(): Observable<Section[]> {
    return this.httpClient.get<Section[]>('assets/content/teaching.json');
  }

  getHome(): Observable<HomeInfo> {
    return this.httpClient.get<HomeInfo>('assets/content/home.json');
  }
}
