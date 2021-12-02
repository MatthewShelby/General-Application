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
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { SerductDetailComponent } from './=====Pages=====/__________Serduct/serduct-detail/serduct-detail.component';
import { NewSerductComponent } from './=====Pages=====/__________Serduct/new-serduct/new-serduct.component';
import { NewCompanyComponent } from './=====Pages=====/__________Serduct/new-company/new-company.component';

@NgModule({
  declarations: [
    AppComponent,
    BEUComponent,
    SerductComponent,
    SerductCardComponent,
    SerductDetailComponent,
    NewSerductComponent,
    NewCompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [SerductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
// From phone
