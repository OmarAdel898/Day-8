import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvService {

  apiKey:string='35fe7a9272f8241b0bdcacdac38cc42d';
  constructor(private http:HttpClient) { }

  getAllTv():Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${this.apiKey}`);
  }

  gettvById(tvId: number):Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/tv/${tvId}?api_key=${this.apiKey}`)
  }

}
