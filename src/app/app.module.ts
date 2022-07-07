import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConcentrationInformationProcessComponent } from './component/pages/concentration-information-process/concentration-information-process.component';
import { ConcentrationContactsComponent } from './component/pages/concentration-contacts/concentration-contacts.component';
import { ContactsComponent } from './component/pages/contacts/contacts.component';
import { ClaimComponent } from './component/claim/claim.component';

import { PhonePipe } from './pipe/phonePipe';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ConcentrationInformationProcessComponent,
    ConcentrationContactsComponent,
    ContactsComponent,
    ClaimComponent,
    PhonePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],


})
export class AppModule { }
