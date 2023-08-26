import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TuiAppearance, tuiButtonOptionsProvider } from '@taiga-ui/core';
import { TuiFileLike } from '@taiga-ui/kit';
import { Observable, Subject, of, timer } from 'rxjs';
import { finalize, map, switchMap } from 'rxjs/operators';
import { UploadCsvData } from 'src/app/models/upload.state';
import { uploadCsvAction } from 'src/app/state/actions/uploadcsv.actions';
import {
  selectInfoUpload,
  selectLoadingUpload,
} from 'src/app/state/selectors/upload.selectors';

@Component({
  selector: 'app-formuploadfile',
  templateUrl: './formuploadfile.component.html',
  styleUrls: ['./formuploadfile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    tuiButtonOptionsProvider({
      shape: 'rounded',
      appearance: TuiAppearance.Outline,
      size: 'm',
    }),
  ],
})
export class FormuploadfileComponent {
  constructor(private store: Store<any>) {}
  isLoadingUpload$: Observable<any> = new Observable();
  selectInfoUpload$: Observable<any> = new Observable();
  infoUpload: any = {};
  delimitadores = ['Punto y Coma (;)', 'Coma (,)', 'Barra (|)'];
  encondigs = ['utf-8', 'latin1'];

  testValue = new FormControl(this.delimitadores[0]);
  testValue2 = new FormControl(this.encondigs[0]);
  readonly control = new FormControl();

  readonly rejectedFiles$ = new Subject<TuiFileLike | null>();
  readonly loadingFiles$ = new Subject<TuiFileLike | null>();

  readonly loadedFiles$ = this.control.valueChanges.pipe(
    switchMap((file) => (file ? this.makeRequest(file) : of(null)))
  );

  ngOnInit(): void {
    this.isLoadingUpload$ = this.store.select(selectLoadingUpload);
    this.selectInfoUpload$ = this.store.select(selectInfoUpload);

    this.selectInfoUpload$.subscribe((data) => {
      if (data) {
        this.infoUpload = data;
        console.log(this.infoUpload);
      }
    });
  }

  onReject(file: TuiFileLike | readonly TuiFileLike[]): void {
    this.rejectedFiles$.next(file as TuiFileLike);
  }

  removeFile(): void {
    this.control.setValue(null);
  }

  clearRejected(): void {
    this.removeFile();
    this.rejectedFiles$.next(null);
  }

  makeRequest(file: TuiFileLike): Observable<TuiFileLike | null> {
    const fileName = file.name.toLowerCase();

    if (fileName.endsWith('.csv') || fileName.endsWith('.CSV')) {
      this.loadingFiles$.next(file);

      return timer(1000).pipe(
        map(() => {
          return file;
        }),
        finalize(() => this.loadingFiles$.next(null))
      );
    } else {
      this.rejectedFiles$.next(file);
      return of(null);
    }
  }

  onSubmit(): void {
    const uploadData: UploadCsvData = {
      file: this.control.value,
      nameModel: 'maestro_his_ubigeo_inei_reniec',
      encode: this.testValue2?.value as string,
      delimiter: extraerContenidoEntreParentesis(
        this.testValue?.value as string
      ) as string,
    };

    console.log(uploadData);
    this.store.dispatch(uploadCsvAction(uploadData));
  }
}

function extraerContenidoEntreParentesis(cadena: string) {
  const regex = /\((.*?)\)/;
  const match = cadena.match(regex);
  return match ? match[1] : null;
}
