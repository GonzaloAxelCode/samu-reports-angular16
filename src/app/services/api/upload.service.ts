import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { PostResponse } from 'src/app/models/auth.model';
import { UploadCsvData } from 'src/app/models/upload.state';
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
export class UploadService {
  private siteURL = URL_BASE;

  constructor(private http: HttpClient) {}

  fetchUploadCsvData({
    file,
    nameModel,
    encode,
    delimiter,
  }: UploadCsvData): Observable<ResponseServiceState> {
    const { accessToken }: any = getTokensFromLocalStorage();
    const formData = new FormData();

    formData.append('csv_file', file);
    formData.append('delimiter', delimiter);
    formData.append('encode', encode);

    console.log('feching upload ...');
    return this.http
      .post<PostResponse>(
        `${this.siteURL}/api/upload-csv-${nameModel}`,
        formData,
        {
          observe: 'response',
        }
      )

      .pipe(
        catchError((error: any) => {
          console.log(error);
          return throwError(error);
        }),
        map((response: HttpResponse<any>) => {
          console.log('respose', response);
          if (response.status === 200 || response.status === 201) {
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

  fetchGetRegistros(nameModel: string): Observable<ResponseServiceState> {
    const { accessToken }: any = getTokensFromLocalStorage();

    console.log('fetching  all registers for :', nameModel);

    return this.http
      .get(`${this.siteURL}/api/get-all-${nameModel}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        observe: 'response',
      })
      .pipe(
        catchError((error: any) => {
          console.log(error);
          return throwError(error);
        }),
        map((response: HttpResponse<any>) => {
          console.log('response', response);
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
}
