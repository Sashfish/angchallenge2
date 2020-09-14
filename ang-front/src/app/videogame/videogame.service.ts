import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const baseURL = 'http://localhost:3000/api/v1/';

@Injectable({
  providedIn: 'root'
})
export class VideogameService {

  constructor(private httpClient: HttpClient) {}

  readAll(): Observable<any>{
    return this.httpClient.get('${baseURL}videogames');
  }
  read(id): Observable<any>{
    return this.httpClient.get('${baseURL}/${id}');
  }
  create(data): Observable<any>{
    return this.httpClient.post(baseURL, data);
  }
  update(data, id): Observable<any>{
    return this.httpClient.put('${baseURL}/${id}', data);
  }
}
