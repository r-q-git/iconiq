import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Icon, IconResponse } from 'src/models/icon.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IconServiceService {
  private iconsSource = new BehaviorSubject<Icon[]>([]);
  public icons$ = this.iconsSource.asObservable();

  constructor(private http: HttpClient) {
  }

  getIconByName(name: string) {
    this.http.get<IconResponse>(environment.apiUrl + name + '&limit=7&productTier=free&style=solid', {
      withCredentials: true, headers: {
        accept: 'application/json',
        'x-api-key': environment.apiKey
      }
    }).subscribe(response => {
      this.iconsSource.next(response.results);
    });
  }
}