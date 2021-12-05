import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { LoginUser } from 'src/app/==== Lateral ====/DTO';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false;
  constructor(
    private router: Router,
    private _snackBar: MatSnackBar,
    private userService: UserService
  ) { }


  public registerForm!: FormGroup;

  openSnackBar(error: string) {
    this._snackBar.open('Error : ' + error, undefined, { duration: 6000, verticalPosition: 'top', panelClass: ['blue-snackbar'] })
  }


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

    })
  }


  ngSubmit() {

this.loading = true;
    var loginUser = new LoginUser(
      this.registerForm.controls['email'].value,
      this.registerForm.controls['password'].value,
    )

    this.userService.loginUser(loginUser);

    setTimeout(() => {
      var send = this.userService.GetLoginResult();
      if (send) {
        console.log('login OK.')
        //this.router.navigate(['./userPanel']);
      } else {
        console.log('register Fail.')
        var er = this.userService.GetLoginError();
        this.openSnackBar(er);
      }
this.loading = false;

    }, 6500)



  }
}
