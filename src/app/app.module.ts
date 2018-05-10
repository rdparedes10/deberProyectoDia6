import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';
import { TransferComponent } from './transfers/transfer/transfer.component';

@NgModule({
  declarations: [
    AppComponent,
    TransferComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: '',
        component: TransferComponent,
      },
      {
        path: 'authentication',
        loadChildren: './authentication/authentication.module#AuthenticationModule',
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
