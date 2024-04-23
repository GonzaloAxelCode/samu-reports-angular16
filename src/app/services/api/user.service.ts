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
export class UserService {
  private siteURL = URL_BASE;

  constructor(private http: HttpClient) {}

  fetchGetUserDetail(): Observable<ResponseServiceState> {
    const { accessToken }: any = getTokensFromLocalStorage();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `JWT ${accessToken}`,
    });

    return this.http
      .get<PostResponse>(`${this.siteURL}/auth/detailuser`, {
        headers,
        observe: 'response',
      })

      .pipe(
        catchError((error: any) => {
          return throwError(error);
        }),
        map((response: HttpResponse<any>) => {
          console.log(response);
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

  fetchUpdateNickname(newNickname: string): Observable<ResponseServiceState> {
    const { accessToken }: any = getTokensFromLocalStorage();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `JWT ${accessToken}`,
    });

    return this.http
      .put<any>(
        `${this.siteURL}/auth/update-nickname`,
        { nickname: newNickname },
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

  fetchUpdateFirstName(newFirstName: string): Observable<ResponseServiceState> {
    const { accessToken }: any = getTokensFromLocalStorage();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `JWT ${accessToken}`,
    });

    return this.http
      .put<any>(
        `${this.siteURL}/auth/update-first-name`,
        { first_name: newFirstName },
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

  fetchUpdateLastName(newLastName: string): Observable<ResponseServiceState> {
    const { accessToken }: any = getTokensFromLocalStorage();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `JWT ${accessToken}`,
    });

    return this.http
      .put<any>(
        `${this.siteURL}/auth/update-last-name`,
        { last_name: newLastName },
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

  fetchUpdatePhoto(photo: File): Observable<ResponseServiceState> {
    const { accessToken }: any = getTokensFromLocalStorage();
    const formData = new FormData();
    formData.append('photo', photo);

    const headers = new HttpHeaders({
      Authorization: `JWT ${accessToken}`,
    });

    return this.http
      .put<any>(`${this.siteURL}/auth/update_photo`, formData, {
        headers,
        observe: 'response',
      })
      .pipe(
        catchError((error: any) => {
          return throwError(error);
        }),
        map((response: HttpResponse<any>) => {
          console.log(response);
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

  fetchUpdateLocation(newLocation: string): Observable<ResponseServiceState> {
    const { accessToken }: any = getTokensFromLocalStorage();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `JWT ${accessToken}`,
    });

    return this.http
      .put<any>(
        `${this.siteURL}/auth/update-location`,
        { location: newLocation },
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

  fetchUpdateBirthdate(newBirthdate: string): Observable<ResponseServiceState> {
    const { accessToken }: any = getTokensFromLocalStorage();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `JWT ${accessToken}`,
    });

    return this.http
      .put<any>(
        `${this.siteURL}/auth/update-birthdate`,
        { birthdate: newBirthdate },
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

  fetchUpdatePhoneNumber(
    newPhoneNumber: string
  ): Observable<ResponseServiceState> {
    const { accessToken }: any = getTokensFromLocalStorage();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `JWT ${accessToken}`,
    });

    return this.http
      .put<any>(
        `${this.siteURL}/auth/update-phone-number`,
        { phone_number: newPhoneNumber },
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

  fetchDesactivateAccount(): Observable<ResponseServiceState> {
    const { accessToken }: any = getTokensFromLocalStorage();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `JWT ${accessToken}`,
    });

    return this.http
      .put<any>(`${this.siteURL}/api/account/desactivate`, {
        headers,
        observe: 'response',
      })
      .pipe(
        catchError((error: any) => {
          return throwError(error);
        }),
        map((response: HttpResponse<any>) => {
          console.log(response);
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
  fetchDeleteAccount(): Observable<ResponseServiceState> {
    const { accessToken }: any = getTokensFromLocalStorage();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `JWT ${accessToken}`,
    });

    return this.http
      .delete<any>(`${this.siteURL}/api/account/delete`, {
        headers,
        observe: 'response',
      })
      .pipe(
        catchError((error: any) => {
          return throwError(error);
        }),
        map((response: HttpResponse<any>) => {
          console.log(response);
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
  fetchActivateAccount(email: string): Observable<ResponseServiceState> {
    const { accessToken }: any = getTokensFromLocalStorage();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `JWT ${accessToken}`,
    });

    return this.http
      .post<any>(
        `${this.siteURL}/api/account/activate`,
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

  fetchChangeEmail(
    current_password: string,
    new_email: string,
    re_new_email: string
  ): Observable<ResponseServiceState> {
    const { accessToken }: any = getTokensFromLocalStorage();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `JWT ${accessToken}`,
    });

    return this.http
      .post<any>(
        `${this.siteURL}/auth/users/set_email/`,
        { current_password, new_email, re_new_email },
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

  fetchChangePassword(
    new_password: string,
    re_new_password: string,
    current_password: string
  ): Observable<ResponseServiceState> {
    const { accessToken }: any = getTokensFromLocalStorage();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `JWT ${accessToken}`,
    });

    return this.http
      .post<any>(
        `${this.siteURL}/auth/users/set_password/`,
        { new_password, re_new_password, current_password },
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
