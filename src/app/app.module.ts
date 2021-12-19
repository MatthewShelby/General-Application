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
import { UserPanelComponent } from './=====Pages=====/__________User/user-panel/user-panel.component';
import { NewCompanyComponent } from './=====Pages=====/__________Company/new-company/new-company.component';
import { UploadFileComponent } from './=====Pages=====/__________File/Upload/upload-file/upload-file.component';
import { UploadImageComponent } from './=====Pages=====/__________File/Upload/upload-image/upload-image.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatNativeDateModule} from '@angular/material/core';


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
    UserPanelComponent,
    UploadFileComponent,
    UploadImageComponent,
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
    MatProgressSpinnerModule,
    MatRadioModule,MatNativeDateModule
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


// Http respone erro codes:

// 404 Not found     = api end point is not true;
// 400               = Probably: The sent model to the api doesnt match to controller's method's input model;
// 401 Unauthorized  = Cookie token in browser, not found or is nat valid.
// 415               = the server refuses to accept the request because the payload format is in an
//                     unsupported format. which mean there is a conflict in [FromBody] or 
//                     [FromQuery] at the server or client is sending a bad body
// 500               = Server internal error    more often:
//                             + DB problem. ex primary key. conflict. .....
//                             + null objects injection 
//                             + Infinite Recursion within serializing objects.         
//                                  ADD [JsonIgnore] to navigation properties
//                             + Folder doesn't exist on the server to save the file