import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie";
import { Observable } from "rxjs";




@Injectable({
      providedIn: 'root'
})
export class Interceptor implements HttpInterceptor {

      constructor(
            private cookieService: CookieService,
      ) { }




      intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
            //let myRequest: HttpRequest<any> = req;
            console.log('intercept start ---- ');

            const cookieToken = this.cookieService.get("CU");

            console.log('cookieTOken is: ' + cookieToken);



            let myRequest1 = req.clone({
                  url: DomainName + req.url,
                  //headers: req.headers.append('Authorization', 'bearer ' + cookieToken)



            });


            console.log('myRequest1.url is: ' + myRequest1.url);



            if (cookieToken != '' && cookieToken != null && cookieToken !== "") {
                  console.log('****************');
                  let myRequest = myRequest1.clone({
                        headers: req.headers.append('Authorization', 'bearer ' + cookieToken)
                  });
                  return next.handle(myRequest);
                  console.log('myRequest.url is: ' + myRequest.url);

            }

            return next.handle(myRequest1);

      }

}


import { environment } from '../../environments/environment'
export const DomainName = environment.production ? 'https://www.qweq.ir' : 'https://localhost:44339/api/'// Reverse!!!!
// export const DomainName = environment.production? 'https://www.qweq.ir':'https://192.168.1.3:44339'// Reverse!!!!