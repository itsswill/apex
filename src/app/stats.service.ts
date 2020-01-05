import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private http: HttpClient) { }

  getStats(platform: string, platformUserIdentifier: string) {
    const apiUrl = `/tracker/v2/apex/standard/profile/${platform}/${platformUserIdentifier}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'TRN-Api-key': '4e1f90fd-51a7-4bb7-b59f-133e593d8b8e'
      })
    };
    return this.http.get(apiUrl, httpOptions);
  }
}
