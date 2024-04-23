import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  TuiAlertModule,
  TuiButtonModule,
  TuiDialogModule,
  TuiLinkModule,
  TuiLoaderModule,
  TuiRootModule,
  TuiSvgModule,
  TuiTextfieldControllerModule,
  tuiNotificationOptionsProvider,
  TUI_SANITIZER,
} from '@taiga-ui/core';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { TuiBadgeModule } from '@taiga-ui/kit';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TuiSidebarModule } from '@taiga-ui/addon-mobile';
import { TuiActiveZoneModule } from '@taiga-ui/cdk';
import {
  TuiCheckboxLabeledModule,
  TuiInputModule,
  TuiInputPasswordModule,
} from '@taiga-ui/kit';

import { AppComponent } from './app.component';

import { NotificationComponent } from './components/notification/notification.component';

import { ROOT_REDUCER } from './state/app.state';
import { AuthEffects } from './state/effects/auth.effects';
import { UploadEffects } from './state/effects/uploadcsv.effects';
import { UserEffects } from './state/effects/user.effects';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';
import { LayoutModule } from './modules/layout/layout.module';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    RouterModule.forRoot([{ path: '**', component: PageNotFoundComponent }]),
    RouterLinkActive,
    StoreModule.forRoot(ROOT_REDUCER),
    StoreDevtoolsModule.instrument({ name: 'TEST' }),
    EffectsModule.forRoot([AuthEffects, UploadEffects, UserEffects]),
    HttpClientModule,
    TuiRootModule,
    TuiDialogModule,
    TuiBadgeModule,
    TuiAlertModule,
    TuiSidebarModule,
    TuiActiveZoneModule,
    TuiSvgModule,
    FormsModule,
    TuiInputModule,
    ReactiveFormsModule,
    TuiInputPasswordModule,
    TuiCheckboxLabeledModule,
    TuiLinkModule,
    TuiButtonModule,
    TuiTextfieldControllerModule,
    TuiLoaderModule,
  ],
  providers: [
    tuiNotificationOptionsProvider({
      autoClose: 1000,
    }),
    { provide: TUI_SANITIZER, useClass: NgDompurifySanitizer },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
