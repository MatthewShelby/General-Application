import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, lastValueFrom, Observable, timeout, pipe, Subscription } from 'rxjs';
import { Company, JsonH, } from 'src/app/==== Lateral ====/DTO';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  isConnected = new BehaviorSubject<boolean>(false);
  constructor(
    private http: HttpClient

  ) { }
  public  homeString: BehaviorSubject<string> = new BehaviorSubject<string>('');
  
  public GetSS(): Observable<JsonH> {
    return this.http.get<JsonH>("companies/get-test");
  }
  public GetST(): Observable<string> {
    return this.homeString;
  }

  public SetST(STR: string) {
    this.homeString.next(STR);
  }





  GetTestNew() {

    this.http.get('companies/get-test').subscribe(res => {
      console.log('Get Test New: ' + JSON.stringify(res))
    } )
  }



  GetCompany(id: string) {
    return this.http.get<Company>('serducts/get-company/' + id);
  }

  IsConnected() {
    console.log('IsConnected call');
    this.http.get<boolean>("/api/account/isConnected").subscribe(res => {
      this.isConnected.next(res);
    }
    )
  }

  GetTest(): BehaviorSubject<string> {
    console.log('GetTest()')



    let retu = '';
    lastValueFrom(this.http.get('serducts/test', { responseType: 'text' as 'json' }).pipe(
      timeout(5000)
    )).then(res => {
      console.info(res);
      console.log('Succeed.')

      retu = 'Succeed.';

    }).catch(res => {
      console.log('errrror')
      console.info(res);
      retu = 'error.';
    }
    )
    return new BehaviorSubject<string>(retu);
  }

  putCompany(id: string, company: Company): Observable<Company> {
    return this.http.put<Company>('serducts/edit-company/' + id, company);

    // console.log('updateCompanyProfile before put ')

    // lastValueFrom(this.http.put<any>('serducts/edit-company/' + id, company,
    //   { responseType: 'text' as 'json' }).pipe(
    //     timeout(5000)
    //   )).then(res => {
    //     console.log('company edited: ' + JSON.stringify(res));
    //     return new BehaviorSubject(res.company);

    //   }).catch(res => {
    //     console.log('errrror')
    //     console.info(res);
    //   }
    //   )

    // return new BehaviorSubject<Company>(company);
  }
}
