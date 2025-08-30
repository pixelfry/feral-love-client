import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Story } from '../models/story';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {
  private readonly http: HttpClient = inject(HttpClient);
  private url: string = environment.server_address;
  private endpoint: string = 'stories/';
  public stories: Story[] = [];

  public getStories(): Observable<Story[]> {
    return this.http.get<Story[]>(this.url+this.endpoint);
  }



  constructor() { }
}
