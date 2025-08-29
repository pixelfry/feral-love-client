import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Pet } from '../models/pet';
@Injectable({
  providedIn: 'root'
})
export class AdoptService {
  private readonly http: HttpClient = inject(HttpClient);
  private url: string = environment.server_address;
  private endpoint: string = 'pets/availability';
  public adoptablePets: Pet[] = [];

  public getAdoptablePets(): Observable<Pet[]> {
    const params =  { available: "available" };
    return this.http.get<Pet[]>(this.url+this.endpoint, { params });
  }

}
