import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  PostResponse,
  RegisterType,
  UserAuth,
} from 'src/app/models/auth.model';

import { getTokensFromLocalStorage } from '../localstorage/notification.service';
import { URL_BASE } from './entpoints';
interface ResponseServiceState {
  errors: any;
  data: any;
  isSuccess: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private siteURL = URL_BASE;

  constructor(private http: HttpClient) {}

  fetchCreateToken(userAuth: UserAuth): Observable<ResponseServiceState> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http
      .post<PostResponse>(`${this.siteURL}/auth/jwt/create/`, userAuth, {
        headers,
        observe: 'response',
      })

      .pipe(
        catchError((error: any) => {
          return throwError(error);
        }),
        map((response: HttpResponse<any>) => {
          if (response.status === 200) {
            return {
              errors: {},
              data: response.body,
              isSuccess: true,
            };
          } else {
            return {
              errors: response.body,
              data: {},
              isSuccess: false,
            };
          }
        })
      );
  }

  fetchRegisterUser(user: RegisterType): Observable<ResponseServiceState> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http
      .post<PostResponse>(`${this.siteURL}/auth/users/`, user, {
        headers,
        observe: 'response',
      })

      .pipe(
        catchError((error: any) => {
          return throwError(error);
        }),
        map((response: HttpResponse<any>) => {
          if (response.status === 201) {
            return {
              errors: {},
              data: response?.body,
              isSuccess: true,
            };
          } else {
            return {
              errors: response?.body,
              data: {},
              isSuccess: false,
            };
          }
        })
      );
  }

  fetchCheckAuthenticated(): Observable<ResponseServiceState> {
    const { accessToken }: any = getTokensFromLocalStorage();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http
      .post<PostResponse>(
        `${this.siteURL}/auth/jwt/verify/`,
        { token: accessToken },
        {
          headers,
          observe: 'response',
        }
      )

      .pipe(
        catchError((error: any) => {
          return throwError(error);
        }),
        map((response: HttpResponse<any>) => {
          if (response.status === 200) {
            return {
              errors: {},
              data: response?.body,
              isSuccess: true,
            };
          } else {
            return {
              errors: response?.body,
              data: {},
              isSuccess: false,
            };
          }
        })
      );
  }

  fetchAuthActivationAccount(
    uid: string,
    token: string
  ): Observable<ResponseServiceState> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http
      .post<PostResponse>(
        `${this.siteURL}/auth/users/activation/`,
        {
          uid,
          token,
        },
        {
          headers,
          observe: 'response',
        }
      )

      .pipe(
        catchError((error: any) => {
          return throwError(error);
        }),
        map((response: HttpResponse<any>) => {
          if (response.status === 200 || response.status === 204) {
            return {
              errors: {},
              data: response.body,
              isSuccess: true,
            };
          } else {
            return {
              errors: response.body,
              data: {},
              isSuccess: false,
            };
          }
        })
      );
  }

  fetchResetPassword(email: string): Observable<ResponseServiceState> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http
      .post<any>(
        `${this.siteURL}/auth/users/reset_password/`,
        { email: email },
        {
          headers,
          observe: 'response',
        }
      )
      .pipe(
        catchError((error: any) => {
          return throwError(error);
        }),
        map((response: HttpResponse<any>) => {
          console.log(response);
          if (response.status === 200 || response.status === 204) {
            return {
              errors: {},
              data: response.body,
              isSuccess: true,
            };
          } else {
            return {
              errors: response.body,
              data: {},
              isSuccess: false,
            };
          }
        })
      );
  }

  fetchConfirmationResetPassword(
    uid: string,
    token: string,
    new_password: string,
    re_new_password: string
  ): Observable<ResponseServiceState> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http
      .post<any>(
        `${this.siteURL}/auth/users/reset_password_confirm/`,
        { uid, token, new_password, re_new_password },
        {
          headers,
          observe: 'response',
        }
      )
      .pipe(
        catchError((error: any) => {
          return throwError(error);
        }),
        map((response: HttpResponse<any>) => {
          console.log(response);
          if (response.status === 200 || response.status == 204) {
            return {
              errors: {},
              data: response.body,
              isSuccess: true,
            };
          } else {
            return {
              errors: response.body,
              data: {},
              isSuccess: false,
            };
          }
        })
      );
  }
}
