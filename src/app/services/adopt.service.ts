import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Animal } from '../models/animal';
@Injectable({
  providedIn: 'root'
})
export class AdoptService {
  private readonly http: HttpClient = inject(HttpClient);
  private url: string = environment.server_address;
  private endpoint: string = 'animal/availability';
  public adoptableAnimals: Animal[] = [];

  public getAdoptableAnimals(): Observable<Animal[]> {
    const params =  { available: "available" };
    return this.http.get<Animal[]>(this.url+this.endpoint, { params });
  }

}
