import { Injectable } from '@angular/core';
import { Company, ContactInfo, Serduct, ContactInfoType, SerductImage, ImageType, SerductType } from 'src/app/==== Lateral ====/DTO';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { BehaviorSubject, lastValueFrom, map, Observable, timeout } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SerductService {
  public activeSerduct!: Serduct
  //private baseUrl = 'https://localhost:44339/api/serducts';

  constructor(
    private http: HttpClient
  ) { }

  //#region =====  FILE  =====

  uploadCompanyProfile(file: File, companyId: string): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);
    formData.append('id', companyId);

    console.log('uploadCompanyProfile before post ')

    this.http.post(`serducts/upload-image` + '/df35v41', formData).subscribe(res => {
      console.log('post res: ' + JSON.stringify(res))
    });


    const req = new HttpRequest('POST', `serducts/upload-image` + '/df35v41', formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req)


    // .pipe(map(m=>{}));
  }
  uploadCompanyLogo(file: File, companyId: string): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);
    formData.append('id', companyId);
    formData.append('type', 'logo');

    console.log('uploadCompanyProfile before post ')

    this.http.post(`serducts/upload-image` + '/df35v41', formData).subscribe(res => {
      console.log('post res: ' + JSON.stringify(res))
    });


    const req = new HttpRequest('POST', `serducts/upload-image` + '/df35v41', formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req)


    // .pipe(map(m=>{}));
  }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    console.log('upload before post ')

    this.http.post(`serducts/upload-image` + '/df35v41', formData).subscribe(res => {
      console.log('post res: ' + JSON.stringify(res))
    });


    const req = new HttpRequest('POST', `serducts/upload-image` + '/df35v41', formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req)


    // .pipe(map(m=>{}));
  }

  getFiles(): Observable<any> {
    return this.http.get(`serducts/get-all-serduct-images`);
  }
  getFile(id: string): Observable<any> {
    return this.http.get(`serducts/get-serduct-images/` + id);
  }


  //#endregion 

  ////#region ===== COMPANY =====
  sendTest(id: string) {



    console.log('test before GET ')


    let something = lastValueFrom(
      this.http.get<string>('serducts/test-get/' + id,
        { responseType: 'json' }).pipe(
          timeout(5000)      // <-- HTTP request will error out if no response for 5 seconds
        )
    ).then(res => {
      console.log('res test get == ' + JSON.stringify(res))
    }).catch(res => {
      console.log('errrror')
      console.info(res);
    }
    );

    return new BehaviorSubject('done');
  }


  // postNewCompany(company: Company): Observable<any> {
  //   // company.logoImage = null,
  //   // company.profileImage = null,
  //   // company.companySerducts = null
  //   console.log('before post')
  //   console.info(company)
  //   return this.http.post<any>('serducts/new-company', company);
  // }
  postNewCompany(company: Company): Observable<Company> {
    console.log(' start of new post')
    console.info(company)


this.http.post<any>('companies/new-company',company).subscribe(
  res=>{
    console.log(' res of new comp post ')

    console.info(res);
  }
)


    // lastValueFrom(this.http.post<any>('serducts/new-company', company,
    //   { responseType: 'text' as 'json' }).pipe(
    //     timeout(5000)
    //   )).then(res => {
    //     return new BehaviorSubject(res.company);

    //   }).catch(res => {
    //     console.log('errrror')
    //     console.info(res);
    //   }
    //   )

      


    return new BehaviorSubject<Company>(company);
  }


  //#endregion






  

 

   

}
 