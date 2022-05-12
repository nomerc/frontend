import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { User } from './models/user.model';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly ROOT_URL: string;

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {
    this.ROOT_URL = environment.SERVER_URI;
  }

  localSignUp(username: string, password: string) {
    return this.http.post(
      `${this.ROOT_URL}/auth/local`,
      {
        username,
        password,
      },
      {
        withCredentials: true,
        observe: 'response',
      }
    );
  }

  localRegister(username: string, displayed: string, password: string) {
    return this.http.post<User>(
      `${this.ROOT_URL}/auth/local/register`,
      {
        username,
        displayed,
        password,
      },
      {
        withCredentials: true,
        observe: 'response',
      }
    );
    /*      .pipe(
          catchError(
            this.handleError<User>(`localRegister`, 'authService', {} as User)
          )
        ); */
  }

  googleSignUp() {
    // window.open(
    //   `${this.ROOT_URL}/auth/google`,
    //   'mywindow',
    //   'location=1,status=1,scrollbars=1, width=800,height=800'
    // );
    // let listener = window.addEventListener('message', (message) => {
    //   console.log(message.data);
    // });
  }

  signOut(): Observable<any> {
    return this.http.get(`${this.ROOT_URL}/auth/signout`);
  }

  showProducts(): Observable<any> {
    return this.http.get(`${this.ROOT_URL}/auth/pages/products`, {
      withCredentials: true,
    });
  }

  handleError<T>(serviceName = '', operation = 'operation', result = {} as T) {
    return (error: HttpErrorResponse): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      const message =
        error.error instanceof ErrorEvent
          ? error.error.message
          : `server returned code ${error.status} with body "${error.error}"`;

      // TODO: better job of transforming error for user consumption
      this.messageService.add(
        `${serviceName}: ${operation} failed: ${message}`
      );

      // Let the app keep running by returning a safe result.
      return of(result);
    };
  }

  /*   handleError<T>(serviceName = '', operation = 'operation', result = {} as T) {
    return (error: HttpErrorResponse): HttpResponse<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      const message =
        error.error instanceof ErrorEvent
          ? error.error.message
          : `server returned code ${error.status} with body "${error.error}"`;

      // TODO: better job of transforming error for user consumption
      this.messageService.add(
        `${serviceName}: ${operation} failed: ${message}`
      );

      // Let the app keep running by returning a safe result.
      return of(new HttpResponse({body: [{name: "Default value..."}]}));
    };
  } */
}
