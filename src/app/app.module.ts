import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { PerferenceComponent } from './perference/perference.component';

import { DropdownComponent } from './dropdown/dropdown.component';
import { EmailboxComponent } from './emailbox/emailbox.component';
import { EmailpreviewComponent } from './emailpreview/emailpreview.component';
import { EmaildetailComponent } from './emaildetail/emaildetail.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    PerferenceComponent,
    DropdownComponent,
    EmailboxComponent,
    EmailpreviewComponent,
    EmaildetailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
