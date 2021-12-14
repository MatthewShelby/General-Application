import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { subscribeOn, timeout } from 'rxjs';
import { Company, ContactInfo, ContactInfoType } from 'src/app/==== Lateral ====/DTO';
import { SerductService } from '../../__________Serduct/-----Service/serduct.service';
import { CompanyService } from '../Service/company.service';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css']
})
export class EditCompanyComponent implements OnInit {
  public company: Company = new Company('', null, '', []);;
  public registerForm!: FormGroup;

  constructor(
    private companyService: CompanyService,
    private cookie: CookieService,
    private router: Router

  ) {


    // this.companyService.getMyCompanyCall().subscribe(res => {
    //   this.company = res.data
    // });


    /*s.companyService.getMyCompany().pipe(timeout(4000)).subscribe(res => {
      if (res.status == 'Succeed.') {
        this.company = res.data
      }
    }
    )
    */
  }

  ngOnInit(): void {

    this.companyService.getMyCompanyCall().subscribe(res => {
      this.company = res.data;
    

    setTimeout(() => {

      // if (this.company != undefined) {
      console.log('edit on init ');
      console.info(this.company)

      this.registerForm = new FormGroup({
        'companyName': new FormControl(this.company.companyName, [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(100)
        ]),
        'phoneNumber': new FormControl(this.company.contactInfos.find(
          c => ContactInfoType[c.type].toString() == 'phoneNumber')?.value
          , [
            Validators.minLength(11),
            Validators.required,
            Validators.pattern("^[0-9]*$"),
            Validators.maxLength(16)
          ]),
        'address': new FormControl(this.company.contactInfos.find(
          c => ContactInfoType[c.type].toString() == 'address')?.value, [
          Validators.minLength(12),
          Validators.required,
          Validators.maxLength(200)
        ]),
        'DD': new FormControl(this.company.contactInfos.find(
          c => ContactInfoType[c.type].toString() == 'city')?.value, [
          Validators.minLength(4),
          Validators.required,
          Validators.maxLength(40)
        ]),
        'country': new FormControl(this.company.contactInfos.find(
          c => ContactInfoType[c.type].toString() == 'country')?.value, [
          Validators.minLength(3),
          Validators.required,
          Validators.maxLength(40)
        ])
        ,
        'postalCode': new FormControl(this.company.contactInfos.find(
          c => ContactInfoType[c.type].toString() == 'postalCode')?.value, [
          Validators.minLength(5),
          Validators.required,
          Validators.maxLength(18)
        ]),
        'companyTitle': new FormControl(this.company.companyTitle, [
          Validators.minLength(5),
          Validators.required,
          Validators.maxLength(40)
        ]),
        'shortBio': new FormControl(this.company.companyShortBio, [
          Validators.minLength(20),
          Validators.required,
          Validators.maxLength(256)
        ]),
        'longBio': new FormControl(this.company.companyLongBio, [
          Validators.minLength(100),
          Validators.required,
          Validators.maxLength(2001)
        ])
      })
      console.log('edit city: ' + this.registerForm.controls['DD'].value)
      // }

    }, 2000)
  })


  }


  ngSubmit() {
    console.log('Edit  submit button pushed.')

    //#region Init model
    let contact = new ContactInfo('null', 'null', ContactInfoType.phoneNumber, this.registerForm.controls['phoneNumber'].value)
    let model = new Company('null', 'CurrentUser',
      this.registerForm.controls['companyName'].value,
      [contact]);
    model.companyLongBio = this.registerForm.controls['longBio'].value;
    model.companyShortBio = this.registerForm.controls['shortBio'].value;
    model.companyTitle = this.registerForm.controls['companyTitle'].value;

    let address = new ContactInfo('null', 'null', ContactInfoType.address,
      this.registerForm.controls['address'].value)

    let city = new ContactInfo('null', 'null', ContactInfoType.city,
      this.registerForm.controls['city'].value)

    let country = new ContactInfo('null', 'null', ContactInfoType.country,
      this.registerForm.controls['country'].value)

    let postalCode = new ContactInfo('null', 'null', ContactInfoType.postalCode,
      this.registerForm.controls['postalCode'].value)

    model.contactInfos.push(address)
    model.contactInfos.push(city)
    model.contactInfos.push(country)
    model.contactInfos.push(postalCode)

    //#endregion

    model.id = this.company.id;
    var s = this.companyService.putCompany(this.company.id, model).subscribe(res => {
      console.log('ngSubmit res:   ' + res)
      if (res == this.company) {

      } else {
        this.cookie.put('CurrentCompany', JSON.stringify(res));
        this.router.navigate(['ser']);

      }

    });

    ;
  }

  RefreshCurrentCompany(): Company {
    // console.log('send get for id: ')
    // this.companyService.GetCompany('e4f5ffb6-2e06-4b77-bece-82cdb581e154').subscribe(res => {
    //   this.company = res;
    //   this.cookie.put('CurrentCompany', JSON.stringify(res));
    //   console.info(res)
    // });
    this.companyService.getMyCompanyCall().subscribe(res => {
      this.company = res.data
    });
    this.registerForm.patchValue({ 'longBio': 'longBiolll+++longBio' })
    console.log('edit on init: ' + this.company.companyName)

    return this.company;
  }

  GetStringType(index: ContactInfo): string {
    return ContactInfoType[index.type].toString()
  }

}
