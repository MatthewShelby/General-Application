import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) { }

  uploadCompanyImage() { }

  upload(file: File, altText: string, type: string, companyId: string): Observable<HttpEvent<any>> {
    
    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('altText', altText);
    formData.append('type', type);
    formData.append('companyId', companyId);

console.log('formData: ')
    console.info(formData);

    const req = new HttpRequest('POST', `file/upload-company-image`, formData, {
      reportProgress: true,
      responseType: 'json' as 'text'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(`file/files`);
  }


}
