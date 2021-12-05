import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, Observable, pipe, Subscriber, Subscription, } from 'rxjs';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { SerductService } from '../-----Service/serduct.service';
import { Company, ContactInfo, ContactInfoType } from 'src/app/==== Lateral ====/DTO';
import { CookieService } from 'ngx-cookie';
import { Router, RouterLink } from '@angular/router';
import { CompanyService } from '../../__________Company/Service/company.service';


@Component({
  selector: 'app-new-company',
  templateUrl: './new-company.component.html',
  styleUrls: ['./new-company.component.css']
})
export class NewCompanyComponent implements OnInit {
  public registerForm!: FormGroup;
  public ST: string = '';
  constructor(
    private serductService: SerductService,
    private companyService: CompanyService,
    private cookie: CookieService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.companyService.homeString.subscribe(res => {
      this.ST = res
    })



     






    this.registerForm = new FormGroup({
      'companyName': new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(100)
      ]),
      'phoneNumber': new FormControl(null, [
        Validators.minLength(11),
        Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.maxLength(16)
      ]),
      'address': new FormControl(null, [
        Validators.minLength(12),
        Validators.required,
        Validators.maxLength(200)
      ]),
      'city': new FormControl(null, [
        Validators.minLength(4),
        Validators.required,
        Validators.maxLength(40)
      ]),
      'country': new FormControl(null, [
        Validators.minLength(3),
        Validators.required,
        Validators.maxLength(40)
      ])
      ,
      'postalCode': new FormControl(null, [
        Validators.minLength(5),
        Validators.required,
        Validators.maxLength(18)
      ]),
      'companyTitle': new FormControl(null, [
        Validators.minLength(5),
        Validators.required,
        Validators.maxLength(40)
      ]),
      'shortBio': new FormControl(null, [
        Validators.minLength(20),
        Validators.required,
        Validators.maxLength(256)
      ]),
      'longBio': new FormControl(null, [
        Validators.minLength(100),
        Validators.required,
        Validators.maxLength(2001)
      ])
    })


  }


  ngSubmit() {
    console.log('submit button pushed.')

    //#region Init model
    let contact = new ContactInfo('null', 'null', ContactInfoType.phoneNumber, this.registerForm.controls['phoneNumber'].value)
    let model = new Company('null', null,
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

    model.companyContactInfo.push(address)
    model.companyContactInfo.push(city)
    model.companyContactInfo.push(country)
    model.companyContactInfo.push(postalCode)
    model.profileImage = null;
    model.logoImage = null;
    model.companySerducts = [];
    //#endregion

    var s = this.serductService.postNewCompany(model).subscribe(res => {
      console.log('ngSubmit res:   ' + res)
      if (res.id == 'null' || res.id == 'Null') {

      } else {
        this.cookie.put('CurrentCompany', JSON.stringify(res));
        this.router.navigate(['ser']);
      }

    });


  }
}

