import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { BehaviorSubject, lastValueFrom, Observable, timeout } from 'rxjs';
import { Company, JsonH, LoginUser, RegisterUser, fetchCompany } from 'src/app/==== Lateral ====/DTO';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private cookie: CookieService
  ) { }

  //#region =====  LOGIN  =====

  private loginResult = new BehaviorSubject(false);
  private loginError = new BehaviorSubject('unKnown');

  GetLoginResult(): boolean {
    return this.loginResult.value;
  }

  GetLoginError(): string {
    return this.loginError.value;
  }

  public loginUser(model: LoginUser) {
    lastValueFrom(this.http.post<JsonH>('account/login-user', model).pipe(
      timeout(10000)
    )).then(res => {

      if (res.status === 'Succeed.') {
        console.log('login is ok. res.data: ' + res.data)
        this.cookie.put('CU', res.data.toString())
        this.loginResult.next(true);
      } else {
        console.log('login error: ' + res.data)
        console.log('login Failed');
        this.loginError.next(JSON.stringify(res.data));
        this.loginResult.next(false);
      }


    }).catch(res => {
      console.log('login error: ' + res.data)
      console.log('login Failed');
      this.loginError.next(res.data);
      this.loginResult.next(false);
    })
  }


  //#endregion


  //#region  ===== REGISTER  =====

  private retVal = new BehaviorSubject(false);
  private registerError = new BehaviorSubject('');

  GetRegisterResult(): boolean {
    return this.retVal.value;
  }
  GetRegisterResultError(): string {
    return this.registerError.value;
  }

  public registerUser(model: RegisterUser) {
    lastValueFrom(this.http.post<JsonH>('account/register-user', model).pipe(
      timeout(10000)
    )).then(res => {
      if (res.status === 'Succeed.') {
        console.log('regiter is ok. res.data: ' + res.data)
        this.retVal.next(true);
        this.retVal.next(true);
      } else {
        console.log('register error: ' + res.data)
        this.retVal.next(false);
        this.registerError.next(res.data.toString());
        // this.registerError.next(JSON.stringify(res.data));
      }
    }).catch(err => {

      console.log('regiter Failed; err: ' + err)
      this.retVal.next(false);
      this.registerError.next(err);

    })
  }

  //#endregion


}
