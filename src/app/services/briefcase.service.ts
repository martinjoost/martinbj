import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BriefcaseService {

  apiUrl =  'https://my-project-1585429394874.firebaseio.com/data';
  constructor(private http: HttpClient) {}


  getSkills(): Observable<any> {
    return this.http.get(`${this.apiUrl}/skills.json`);
  }
  getJobs(): Observable<any> {
    return this.http.get(`${this.apiUrl}/experiences.json`);
  }
}
