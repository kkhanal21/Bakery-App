import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Http } from "@angular/http";

@Injectable()
export class UploadFileService {

  constructor(private http: Http) { }

  pushFileToStorage(file: Blob, filename: string, feature: any) {
    let formdata: FormData = new FormData();

    formdata.append('file', file, filename);
    formdata.append('title', feature.title);
    formdata.append('description', feature.description);

    // const req = new HttpRequest('POST', '/products/saveFeatured', formdata, {
    //   reportProgress: true,
    //   responseType: 'text'
    // });

    return this.http.post('/featured/insert', formdata);
  }
}
