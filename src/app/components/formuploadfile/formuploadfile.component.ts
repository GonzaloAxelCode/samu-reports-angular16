import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TuiAppearance, tuiButtonOptionsProvider } from '@taiga-ui/core';
import { TuiFileLike } from '@taiga-ui/kit';
import { Observable, Subject, of, timer } from 'rxjs';
import { finalize, map, switchMap } from 'rxjs/operators';
class Account {
  constructor(readonly name: string, readonly balance: number) {}

  toString(): string {
    return `${this.name} (${this.balance})`;
  }
}

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
  readonly control = new FormControl();
  readonly rejectedFiles$ = new Subject<TuiFileLike | null>();
  readonly loadingFiles$ = new Subject<TuiFileLike | null>();

  readonly loadedFiles$ = this.control.valueChanges.pipe(
    switchMap((file) => (file ? this.makeRequest(file) : of(null)))
  );

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
    this.loadingFiles$.next(file);

    return timer(1000).pipe(
      map(() => {
        //if (Math.random() > 0.5) {
        return file;
        //}

        //this.rejectedFiles$.next(file);

        //return null;
      }),
      finalize(() => this.loadingFiles$.next(null))
    );
  }

  readonly accounts = [
    new Account('Rubles', 500),
    new Account('Dollar', 237),
    new Account('Euro', 100),
  ];

  testForm = new FormGroup({
    name: new FormControl(''),
    accounts: new FormControl(this.accounts[0]),
  });

  delimitadores = ['Punto y Coma (;)', 'Coma (,)', 'Barra (|)'];
  encondigs = ['utf-8', 'latin1'];

  testValue = new FormControl(this.delimitadores[0]);
  testValue2 = new FormControl(this.encondigs[0]);
}
