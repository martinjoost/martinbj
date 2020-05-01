import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BriefcaseService {

  apiUrl =  environment.apiUrl;
  constructor(private http: HttpClient) {}


  getSkills(): Observable<any> {
    return this.http.get(`${this.apiUrl}/skills.json`);
  }
  getJobs(): Observable<any> {
    return this.http.get(`${this.apiUrl}/experiences.json`);
  }
}
