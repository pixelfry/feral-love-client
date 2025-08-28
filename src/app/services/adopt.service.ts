import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AdoptService {
  private readonly http: HttpClient = inject(HttpClient);

  public getAdoptablePets(): Observable<Pet[]> {
    return this.http.get<Pet[]>("url/go/here");
  }

}
