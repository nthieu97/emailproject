import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { EmailboxComponent } from './emailbox/emailbox.component';
import { EmaildetailComponent } from './emaildetail/emaildetail.component';
import { EmailpreviewComponent } from './emailpreview/emailpreview.component';
import { PerferenceComponent } from './perference/perference.component';

const routes: Routes = [
  { path: 'message/detail/:id', component: EmaildetailComponent, outlet: 'detail' },
  {
    path: 'message', component: EmailboxComponent,
    children: [{ path: ':folder', component: EmailpreviewComponent },]
  },
  { path: 'contact', component: ContactComponent },
  { path: 'peference', component: PerferenceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
