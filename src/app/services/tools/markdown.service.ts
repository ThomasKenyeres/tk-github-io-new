import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { from } from 'rxjs';
import { Marked } from '@ts-stack/markdown';

@Injectable({
  providedIn: 'root'
})
export class MarkdownService {

  constructor(private httpService: HttpService) { }

  static MdToHtml(rawMd: string) {
    return Marked.parse(rawMd);
  }


  fromFile(markdownPath: string) {
    const prom = new Promise<string>((resolve, reject) => {
      this.httpService.getMd(markdownPath).subscribe(rawMd => {
        resolve(MarkdownService.MdToHtml(rawMd));
      });
    });
    return from(prom);
  }
}
