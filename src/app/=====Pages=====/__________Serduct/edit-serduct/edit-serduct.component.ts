import { Component, Injectable, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';
import { Serduct, SerductType } from 'src/app/==== Lateral ====/DTO';
//import { SerductService } from '../-----Service/serduct.service';
import { SerductService } from '../../__________Serduct/-----Service/serduct.service';

@Component({
  selector: 'app-edit-serduct',
  templateUrl: './edit-serduct.component.html',
  styleUrls: ['./edit-serduct.component.css']
})
//@Injectable() 
export class EditSerductComponent implements OnInit {

  private serductId: string = '^^';
  // @Input()  serduct!: Serduct;

  public registerForm!: FormGroup;
  public myGroup!: FormGroup;
  public serductTypeSelect: SerductType = SerductType.Service;
  public serduct!: Serduct;
  private tit = '$';
  private cat1 = '$';
  private cat2 = '$';
  private des1 = '$';
  private des2 = '$';
  constructor(
    private _serduct: SerductService,
    private router: Router,
    private _route: ActivatedRoute

  ) {

    this._route.params.subscribe(params => {
      this.serductId = params['id'];
    });
    //this.serduct = new Serduct(this.serductId, "null", "null", SerductType.Other)

    console.log('from edit-serduct: ' + this.serductId);
    this._serduct.getSerductById(this.serductId).subscribe(res => {
      this.serduct = res;
      console.info(this.serduct)
      console.log('ctor edit-ser   inp(0 serduct: ' + this.serduct)
      this.tit = this.serduct.title;
      this.cat1 = this.serduct.category;;
      this.cat2 = this.serduct.subCategory;;
      this.des1 = this.serduct.shortDescription;;
      this.des2 = this.serduct.longDescription;;
      this.setForm();

    });
    this.setForm();

  }
  setForm() {


    this.registerForm = new FormGroup({
      'title': new FormControl(this.tit, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(100)
      ]),
      'category': new FormControl(this.cat1, [
        Validators.minLength(5),
        Validators.required,
        Validators.maxLength(20)
      ]),
      'subCategory': new FormControl(this.cat2, [
        Validators.minLength(5),
        Validators.required,
        Validators.maxLength(200)
      ]),
      'shortDescription': new FormControl(this.des1, [
        Validators.minLength(20),
        Validators.required,
        Validators.maxLength(256)
      ]),
      'longDescription': new FormControl(this.des2, [
        Validators.minLength(100),
        Validators.required,
        Validators.maxLength(2001)
      ])
    })
  }
  public num = '2';
  ngOnInit(): void {
    this.setForm();
    setTimeout(() => {
      this.setForm();
    }, 100);




  }



  ngSubmit() {

    //#region Init model  

    let model = new Serduct('null', this.serductId, 'null', this.serductTypeSelect);

    model.longDescription = this.registerForm.controls['longDescription'].value;
    model.shortDescription = this.registerForm.controls['shortDescription'].value;
    model.title = this.registerForm.controls['title'].value;
    model.category = this.registerForm.controls['category'].value;
    model.subCategory = this.registerForm.controls['subCategory'].value;

    console.log('submit button pushed. select:  ' + this.serductTypeSelect);
    console.info(model)

    //#endregion

    // this._serduct.postSerduct(model).subscribe(res => {
    //   if (res.id.length > 5) {
    //     console.log('post is ok.')
    //     this.router.navigate(['userPanel']);
    //   }
    // });

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

