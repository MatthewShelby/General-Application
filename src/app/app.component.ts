import { Component, EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable, Subscriber, Subscription } from 'rxjs';
import { UserService } from './=====Pages=====/__________User/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  LogSit = new EventEmitter<boolean>();
  // public isLoggedIn = false;
  public  isLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(
    private _user: UserService
  ) {
    this.userSub = this._user.isLoggedInUser.subscribe(user => {
      this.isLoggedIn.next(!!user);
      this.LogSit.emit(!!user);
    })
  }

  title = 'GenApp';
  private userSub: Subscription;
  ngOnInit(): void {
    this._user.isLoggedInUser.subscribe(res=>{
      this.isLoggedIn.next(res);
    })
  }

  onChange(){
    this.isLoggedIn.next(!this.isLoggedIn);
  }
}
