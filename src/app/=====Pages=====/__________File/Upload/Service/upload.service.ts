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


    const req = new HttpRequest('POST', `file/upload-company-profile-image`, formData, {
      reportProgress: true,
      responseType: 'json' as 'text'
    });

    return this.http.request(req);
  }

  uploadLogo(file: File, altText: string, companyId: string): Observable<HttpEvent<any>> {

    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('altText', altText);
    formData.append('companyId', companyId);


    const req = new HttpRequest('POST', `file/upload-company-logo-image`, formData, {
      reportProgress: true,
      responseType: 'json' as 'text'
    });

    return this.http.request(req);
  }

  getRecentFile(address:string): Observable<any> {
    return this.http.get(`file/files/`+address);
  }


}
