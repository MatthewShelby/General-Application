import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RegisterUser } from 'src/app/==== Lateral ====/DTO';
import { DataPackage, DialogDataExample } from 'src/app/===== Material =====/Dialog/dialog';
import { UserService } from '../user.service';
import { lastValueFrom, pipe, timeout } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm!: FormGroup;
  constructor(
    private userService: UserService,
    private router: Router,
    private dialog: DialogDataExample
  ) { }


  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'email': new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.maxLength(100)
      ]),
      'password': new FormControl(null, [
        Validators.minLength(8),
        Validators.required,
        Validators.maxLength(100)
      ]),
      'confirmPassword': new FormControl(null, [
        Validators.minLength(8),
        Validators.required,
        Validators.maxLength(100)
      ]),

    })
  }


  ngSubmit() {
    var regsterUser = new RegisterUser(
      this.registerForm.controls['email'].value,
      this.registerForm.controls['password'].value,
      this.registerForm.controls['confirmPassword'].value
    )


    this.userService.registerUser(regsterUser);

    setTimeout(() => {
      var send = this.userService.GetRegisterResult();
      if (send) {
        console.log('register OK.')
        this.dialog.datapack = new DataPackage(' ',
          'Your Account has been registered',
          'Please check your email and click the link to activate your account');
        this.dialog.openDialog();
        this.router.navigate(['./signin']);
      } else {
        console.log('register Fail.')
        this.dialog.datapack = new DataPackage(' ',
          'Your registeration request has been rejected',
          'Please check your information and try later.');
        this.dialog.openDialog();
        //this.router.navigate(['./signin']);
      }
    }, 6500)

 

  }
}
