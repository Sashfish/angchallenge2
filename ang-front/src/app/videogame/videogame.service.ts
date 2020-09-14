import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const baseURL = 'http://localhost:3000/api/v1/videogames';

@Injectable({
  providedIn: 'root'
})
export class VideogameService {

  constructor(private httpClient: HttpClient) {}

  readAll(): Observable<any>{
    return this.httpClient.get(baseURL);
  }
  read(id): Observable<any>{
    return this.httpClient.get('${baseURL}/${id}');
  }
  create(data): Observable<any>{
    return this.httpClient.post(baseURL, data);
  }
  update(id, data): Observable<any>{
    return this.httpClient.put('${baseURL}/${id}', data);
  }
}
