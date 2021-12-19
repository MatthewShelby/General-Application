import { Injectable } from '@angular/core';
import { Company, ContactInfo, Serduct, ContactInfoType, SerductImage, ImageType, SerductType } from 'src/app/==== Lateral ====/DTO';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { BehaviorSubject, lastValueFrom, map, Observable, timeout } from 'rxjs';
import { CompanyService } from '../../__________Company/Service/company.service';

@Injectable({
  providedIn: 'root'
})
export class SerductService {
  public activeSerduct!: Serduct
  //private baseUrl = 'https://localhost:44339/api/serducts';
  public company = new BehaviorSubject<Company>(new Company('', null, '', []));
  private hasCompany = new BehaviorSubject<boolean>(false);
  constructor(
    private http: HttpClient,
    private _company: CompanyService,
  ) {
    this.getMyCompany();
    // this.setMySerduct();
  }

  getMyCompany() {
    this._company.getMyCompanyCall().pipe(timeout(6000),
    ).subscribe(res => {
      if (res.status == 'Succeed.') {
        this.hasCompany.next(true);
        this.company.next(res.data);
        console.log('comps ##')
        console.info(this.company.value.serducts)
        this.serducts = this.company.value.serducts;
        console.log('sers: ' + JSON.stringify(this.serducts))

        
      }
    })
  }
  postSerduct(model: Serduct): Observable<Serduct> {

    return this.http.post<Serduct>('serduct/new-serduct', model);

  }

  public serducts !: Serduct[];

  getMySerducts(): Serduct[] {

console.log('from serduct Service getMySerduct - Serducts: '+JSON.stringify(this.serducts))
    return this.serducts;

  }
  /*
    setMySerduct() {
      if (this.hasCompany.value) {
        this.http.get<Serduct[]>('serduct/get-my-serducts/' + this.company.value.id).subscribe(
          res => {
            this.serducts.next(res);
            console.log('serducts been set to: '+JSON.stringify(this.serducts.value));
          }
        );
      }
    }*/









}
