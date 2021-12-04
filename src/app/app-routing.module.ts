import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewCompanyComponent } from './=====Pages=====/__________Serduct/new-company/new-company.component';
import { NewSerductComponent } from './=====Pages=====/__________Serduct/new-serduct/new-serduct.component';
import { SerductDetailComponent } from './=====Pages=====/__________Serduct/serduct-detail/serduct-detail.component';
import { SerductComponent } from './=====Pages=====/__________Serduct/serduct/serduct.component';
import { EditCompanyComponent } from './=====Pages=====/__________Company/edit-company/edit-company.component';
import { LoginComponent } from './=====Pages=====/__________User/login/login.component';
import { RegisterComponent } from './=====Pages=====/__________User/register/register.component';


const routes: Routes = [
  // { path: 'test', component: ChildComponent },
  { path: 'ser', component: SerductComponent },
  { path: 'newS', component: NewSerductComponent },
  { path: 'newC', component: NewCompanyComponent },
  { path: 'ccee', component: EditCompanyComponent },
  { path: 'signin', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'detail', component: SerductDetailComponent, data: { serductInput: 'Isert a serduct' } },
  // { path: 'user-home', component: HomeComponent ,  canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
