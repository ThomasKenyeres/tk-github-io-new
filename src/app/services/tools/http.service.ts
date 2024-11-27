import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  MD_DEFAULT_PATH = '/md';

  constructor(private http: HttpClient) { }

  getMd(filePath: string) {
    const fullPath = `${this.MD_DEFAULT_PATH}/${filePath}`;
    return this.http.get(fullPath, {responseType: 'text'});
  }
}
