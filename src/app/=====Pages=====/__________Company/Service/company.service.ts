import { HttpClient, HttpEvent, HttpRequest, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, lastValueFrom, Observable, timeout, map, Subscription } from 'rxjs';
import { Company, fetchCompany, JsonH, } from 'src/app/==== Lateral ====/DTO';
@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  isConnected = new BehaviorSubject<boolean>(false);
  constructor(
    private http: HttpClient

  ) { }
  public homeString: BehaviorSubject<string> = new BehaviorSubject<string>('');



  checkIsLogin(): boolean {
    var isLoggedIn = false;
    lastValueFrom(
      this.http.get<JsonH>('account/who-am-i').pipe(timeout(10000))
    ).then(res => {
      if (res.status == 'Succeed.') {


        isLoggedIn = true;
      } else {
        console.log(' isLoggedIn faild!! data: ' + res.data.toString())
        isLoggedIn = false;
      }
    }).catch();
    return isLoggedIn;
  }


  //#region ===== FETCH MY COMPANY =====

  // public company = new BehaviorSubject<Company>(new Company('', null, '', []));
  public company = new BehaviorSubject<Company>(new Company('', null, '', []));
  public companyFetched = new BehaviorSubject<boolean>(false);
  fetchCompany(): any {
    console.log('fetchCompany call.')

    this.http.get<fetchCompany>('companies/get-my-company').subscribe(res => {
      if (res.status == 'Succeed.') {
        console.log('my compaany found.')
        this.company.next(res.data)
        this.companyFetched.next(true)
        return true;
      } else {
        return false;
      }
    })
  }

  getMyCompany(): Observable<Company> {
    if (this.companyFetched) {
      return this.company
    } else {
      lastValueFrom(this.fetchCompany()).then(
      )
      return this.company
    }
  }

  getMyCompanyCall(): Observable<fetchCompany> {
    console.log('Com Ser Call')
    // return this.http.get<fetchCompany>('companies/get-test');
    var res = this.http.get<fetchCompany>('companies/get-my-company');
    console.info(res);
    return res;
  }
  //#endregion



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
  }

  getFiles(): Observable<any> {
    return this.http.get(`serducts/get-all-serduct-images`);
  }
  getFile(id: string): Observable<any> {
    return this.http.get(`serducts/get-serduct-images/` + id);
  }

  //#endregion 


  //#region  =====  POST & PUT  ===== ....

  postCompany(company: Company): Observable<Company> {
    return this.http.post<Company>('companies/new-company', company);
  }




  putCompany(id: string, company: Company): Observable<Company> {
    return this.http.put<Company>('companies/edit-company/' + id, company);
  }
  //#endregion

}



