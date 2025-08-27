import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Animal } from 'src/app/models/animal';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AdoptService {
  private readonly http: HttpClient = inject(HttpClient);

  public getAdoptableAnimals(): Observable<Animal[]> {
    return this.http.get<Animal[]>("url/go/here");
  }
}
