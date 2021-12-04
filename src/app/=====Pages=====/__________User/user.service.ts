import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JsonH, RegisterUser } from 'src/app/==== Lateral ====/DTO';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) { }

  public registerUser(model: RegisterUser): boolean {
    var retVal: boolean = false;
    this.http.get<JsonH>('account/register-user').subscribe(res => {
      if (res.status == 'Succeed.') {
        retVal = true;
      } else {
        console.log('register error: ' + res.data)
      }
    })
    return retVal;
  }


}
