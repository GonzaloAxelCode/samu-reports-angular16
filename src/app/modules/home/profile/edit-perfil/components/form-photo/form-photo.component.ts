import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TuiFileLike } from '@taiga-ui/kit';
import { finalize, map, Observable, of, Subject, switchMap, timer } from 'rxjs';
import { updatePhotoAction } from 'src/app/state/actions/user.actions';

@Component({
  selector: 'app-form-photo',
  templateUrl: './form-photo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormPhotoComponent {
  @Input() user_photo_url: string | undefined = '';
  imageUrl: string | ArrayBuffer | null = null;
  imageFile!: File;
  readonly control = new FormControl();
  file: any;
  readonly rejectedFiles$ = new Subject<TuiFileLike | null>();
  readonly loadingFiles$ = new Subject<TuiFileLike | null>();
  readonly loadedFiles$ = this.control.valueChanges.pipe(
    switchMap((file) => (file ? this.makeRequest(file) : of(null)))
  );

  constructor(private store: Store<any>, private router: Router) {}

  ngOnInit(): void {
    this.loadedFiles$.subscribe((data: any) => {
      this.imageFile = data;
      this.generateImageUrl();
    });
  }

  onReject(file: TuiFileLike | readonly TuiFileLike[]): void {
    this.rejectedFiles$.next(file as TuiFileLike);
  }

  removeFile(): void {
    this.control.setValue(null);
    this.imageUrl = null;
  }

  clearRejected(): void {
    this.removeFile();

    this.rejectedFiles$.next(null);
  }
  onSubmitFile() {
    this.store.dispatch(
      updatePhotoAction({
        filePhoto: this.control.value,
      })
    );
  }
  makeRequest(file: TuiFileLike): Observable<TuiFileLike | null> {
    this.loadingFiles$.next(file);

    return timer(0).pipe(
      map(() => {
        this.file = file;

        return file;
      }),
      finalize(() => this.loadingFiles$.next(null))
    );
  }
  generateImageUrl() {
    if (this.imageFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageUrl = e.target?.result || null;
      };
      reader.readAsDataURL(this.imageFile);
    }
  }
}
