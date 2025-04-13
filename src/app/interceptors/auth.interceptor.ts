// import { HttpInterceptorFn } from '@angular/common/http';
// import { inject } from '@angular/core';
// import { AuthService } from '../services/auth.service';

// export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
//     const authService = inject(AuthService);
//     const authToken = authService.getToken();

//     if (authToken) {
//         const authReq = req.clone({
//             setHeaders: {
//                 Authorization: `Bearer ${authToken}`
//             }
//         });
//         return next(authReq);
//     }

//     return next(req);
// };


import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http';
// import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class authInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    const authToken = this.authService.getToken();
    if (authToken) {
      const authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${authToken}`)
      });
      return next.handle(authReq);
    }
    return next.handle(req);
  }
}