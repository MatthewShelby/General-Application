import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, lastValueFrom, Observable, timeout, pipe, Subscription } from 'rxjs';
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

  
  //#region ===== FETCH MY COMPANY =====

  private company = new BehaviorSubject<Company>(new Company('', null, '', []));

  fetchCompany() {
    this.http.get<fetchCompany>('companies/get-my-company').subscribe(res => {
      if (res.status == 'Succeed.') {
        this.company.next(res.data)
      }
    })
  }

  getMyCompany(): Company {
    return this.company.value;
  }


  //#endregion





  
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
