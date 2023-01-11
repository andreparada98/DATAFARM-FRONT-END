import {Injectable} from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from '@auth/auth.service';

@Injectable()
export class ApplicationInterceptor implements HttpInterceptor {

    constructor(
        private authService: AuthService
    ) {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

        let headers = request.headers;
        headers = headers.set('code', this.authService.code)

        const requestClone = request.clone({headers})
        return next.handle(requestClone);
    }
}
