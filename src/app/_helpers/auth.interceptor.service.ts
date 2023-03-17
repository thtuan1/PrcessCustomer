import { Injectable } from '@angular/core';
import{ HttpInterceptor,HttpRequest,HttpHandler,HTTP_INTERCEPTORS,HttpEvent } from '@angular/common/http'
import {TokenStorageServiceService} from 'src/app/_services/token-storage.service.service'
import { Observable } from 'rxjs';

const TOKEN_HEADER_KEY = 'Authorization'; 
@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor(private token: TokenStorageServiceService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = this.token.getToken();
    if (token != null) {
      // for Spring Boot back-end
      authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });

      // for Node.js Express back-end
      // authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, token) });
    }
    return next.handle(authReq);
  }
}
export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
];

