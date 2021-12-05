import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BEUComponent } from './=====Pages=====/__________Business/beu/beu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SerductComponent } from './=====Pages=====/__________Serduct/serduct/serduct.component';
import { SerductCardComponent } from './=====Pages=====/__________Serduct/serduct-card/serduct-card.component';
import { SerductService } from './=====Pages=====/__________Serduct/-----Service/serduct.service';
import { CompanyService } from './=====Pages=====/__________Company/Service/company.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { SerductDetailComponent } from './=====Pages=====/__________Serduct/serduct-detail/serduct-detail.component';
import { NewSerductComponent } from './=====Pages=====/__________Serduct/new-serduct/new-serduct.component';
import { NewCompanyComponent } from './=====Pages=====/__________Serduct/new-company/new-company.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddPhotoComponent } from './=====Pages=====/__________Serduct/NewCompany/add-photo/add-photo.component';
import { CookieModule, CookieService } from 'ngx-cookie';
import { Interceptor } from './==== Lateral ====/interceprot';
import { EditCompanyComponent } from './=====Pages=====/__________Company/edit-company/edit-company.component';
import { MatTabsModule } from '@angular/material/tabs';
import { RegisterComponent } from './=====Pages=====/__________User/register/register.component';
import { LoginComponent } from './=====Pages=====/__________User/login/login.component';
import { UserService } from './=====Pages=====/__________User/user.service';
import { DataPackage,  DialogDataExample, DIALOG_CONTENT, DIALOG_HEAD, DIALOG_TITLE ,  } from './===== Material =====/Dialog/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    BEUComponent,
    SerductComponent,
    SerductCardComponent,
    SerductDetailComponent,
    NewSerductComponent,
    NewCompanyComponent,
    AddPhotoComponent,
    EditCompanyComponent,
    RegisterComponent,
    LoginComponent,
    // MatDialogModule,
    DialogDataExample,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MatInputModule,
    HttpClientModule,
    CookieModule.forRoot(),
    MatTabsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    },
    SerductService,
    CompanyService,
    UserService,
    DialogDataExample,
    { provide: DIALOG_HEAD, useValue: "My Wonderful head" },
    { provide: DIALOG_TITLE, useValue: "My Wonderful Title" },
    { provide: DIALOG_CONTENT, useValue: "My Wonderful content" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
// From phone second commit
