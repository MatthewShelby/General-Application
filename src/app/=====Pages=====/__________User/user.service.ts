import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { map } from 'rxjs/operators';
import { BehaviorSubject, lastValueFrom, Observable, Observer, Subscription, timeout } from 'rxjs';
import { Company, JsonH, LoginUser, RegisterUser, fetchCompany } from 'src/app/==== Lateral ====/DTO';
import { SubscriptionLog } from 'rxjs/internal/testing/SubscriptionLog';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private cookie: CookieService
  ) {
    this.isLoggedInCall();
  }

  //#region IS LOGGED IN



  public isLoggedInUser = new BehaviorSubject<boolean>(false);

  isLoggedInCall() {
    console.log('isLoggedIn start ----')
    
    this.http.get<JsonH>('account/who-am-i').pipe(timeout(5000)).subscribe(res => {
      if (res.status == 'Succeed.') {
        console.log('isLoggedIn : true')
        this.isLoggedInUser.next(true)
      } else {
        console.log('isLoggedIn : false')
        this.isLoggedInUser.next(false)
      }
    }
    
    )


 
    



  }


  //#region 



  //#region =====  LOGIN  =====

  private loginResult = new BehaviorSubject(false);
  private loginError = new BehaviorSubject('unKnown...');

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
        console.log('CU from browser: ' + this.cookie.get('CU'))
        this.isLoggedInUser.next(true)
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



  public loginUser3(model: LoginUser): Observable<boolean> {
    return new Observable((observer: Observer<boolean>) => {
      let data = false;
      
      setTimeout(()=>{
        if (!this.loginResult.value) {
          this.loginError.next('Time Out');
          observer.next(false);
        }
      },8000)

      this.http.post<JsonH>('account/login-user', model).pipe(
        timeout(10000)
      ).subscribe(res => {
        if (res.status === 'Succeed.') {
          console.log('login is ok. from 3  3 res.data: ' + res.data)
          this.cookie.put('CU', res.data.toString())
          //console.log('CU from browser: ' + this.cookie.get('CU'))
          this.isLoggedInUser.next(true)
          this.loginResult.next(true);
          observer.next(true);

        } else {
          console.log('login error: ' + res.data)
          console.log('login  3  3  Failed');
          this.loginError.next(JSON.stringify(res.data));
          this.loginResult.next(false);
          observer.next(false);

        }
        
      })





    });
  }
  /*
  public loginUser2(model: LoginUser): Observable<JsonH> {




    return this.http.post<JsonH>('account/login-user', model).pipe(
      timeout(10000)
    ).subscribe(res => {

      if (res.status === 'Succeed.') {
        console.log('login is ok. res.data: ' + res.data)
        this.cookie.put('CU', res.data.toString())
        //console.log('CU from browser: ' + this.cookie.get('CU'))
        this.isLoggedInUser.next(true)
        this.loginResult.next(true);
        return true;
      } else {
        console.log('login error: ' + res.data)
        console.log('login Failed');
        this.loginError.next(JSON.stringify(res.data));
        this.loginResult.next(false);
        return false;
      }
    })
  })


}*/
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
