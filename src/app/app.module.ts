import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  TuiAlertModule,
  TuiDialogModule,
  TuiRootModule
} from '@taiga-ui/core';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterLinkActive } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnycomponentComponent } from './components/anycomponent/anycomponent.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ROOT_REDUCER } from './state/app.state';
import { AuthEffects } from './state/effects/auth.effects';
import { NotificationComponent } from './components/notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    AnycomponentComponent,
    NotificationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterLinkActive,
    StoreModule.forRoot(ROOT_REDUCER),
    StoreDevtoolsModule.instrument({ name: 'TEST' }),
    EffectsModule.forRoot([AuthEffects]),
    HttpClientModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
