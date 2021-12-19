import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { interval, timeout } from 'rxjs';
import { Serduct, SerductType } from 'src/app/==== Lateral ====/DTO';
import { SerductService } from '../-----Service/serduct.service';

@Component({
  selector: 'app-new-serduct',
  templateUrl: './new-serduct.component.html',
  styleUrls: ['./new-serduct.component.css']
})



export class NewSerductComponent implements OnInit {
  private companyId: string = '^^';

  public registerForm!: FormGroup;
  public myGroup!: FormGroup;
  public serductTypeSelect: SerductType = SerductType.Service;
  // public serduct: Serduct;
  constructor(
    private _serduct: SerductService,
    private router: Router

  ) {

  }

  public num = '2';
  ngOnInit(): void {
    this._serduct.getMyCompany();
    this._serduct.company.subscribe(res => {
      this.num = res.id;
      this.companyId = res.id;
    })
    // ===  Instantiate the company register form

    this.registerForm = new FormGroup({
      'title': new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(100)
      ]),
      'category': new FormControl(null, [
        Validators.minLength(5),
        Validators.required,
        Validators.maxLength(20)
      ]),
      'subCategory': new FormControl(null, [
        Validators.minLength(5),
        Validators.required,
        Validators.maxLength(200)
      ]),
      'shortDescription': new FormControl(null, [
        Validators.minLength(20),
        Validators.required,
        Validators.maxLength(256)
      ]),
      'longDescription': new FormControl(null, [
        Validators.minLength(100),
        Validators.required,
        Validators.maxLength(2001)
      ])
    })

  }

  favoriteSeason: string = 'swe';
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];


  ngSubmit() {

    //#region Init model  

    let model = new Serduct('null', this.companyId, 'null', this.serductTypeSelect);

    model.longDescription = this.registerForm.controls['longDescription'].value;
    model.shortDescription = this.registerForm.controls['shortDescription'].value;
    model.title = this.registerForm.controls['title'].value;
    model.category = this.registerForm.controls['category'].value;
    model.subCategory = this.registerForm.controls['subCategory'].value;

    console.log('submit button pushed. select:  ' + this.serductTypeSelect);
    console.info(model)

    //#endregion

    this._serduct.postSerduct(model).subscribe(res => {
      if (res.id.length > 5) {
        console.log('post is ok.')
        this.router.navigate(['userPanel']);
      }
    });

    //   private num = 0;
    // postSerduct(model: Serduct): Observable<Serduct> {
    //   setInterval(() => { }, 100, 10)
    //   var axe = setInterval(() => {

    //     if (this.hasCompany) {
    //       return this.http.post<Serduct>('serduct/new-serduct', model);

    //     } else {

    //       this.num++;
    //       if (this.num >= 100) {
    //         clearInterval(axe);
    //         this.getMyCompany();

    //       }
    //     }
    //   }, 1000)
    // }


  }
}
