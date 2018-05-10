import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransferComponent } from './transfers/transfer/transfer.component';



const routes: Routes = [
  { path: '', component: TransferComponent },
  { path: 'authentication', loadChildren: './authentication/authentication.module#AuthenticationModule' }
];

@NgModule({
  imports: [
      RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
