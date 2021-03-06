import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewCompanyComponent } from './=====Pages=====/__________Company/new-company/new-company.component';
import { NewSerductComponent } from './=====Pages=====/__________Serduct/new-serduct/new-serduct.component';
import { SerductDetailComponent } from './=====Pages=====/__________Serduct/serduct-detail/serduct-detail.component';
import { SerductComponent } from './=====Pages=====/__________Serduct/serduct/serduct.component';
import { EditCompanyComponent } from './=====Pages=====/__________Company/edit-company/edit-company.component';
import { LoginComponent } from './=====Pages=====/__________User/login/login.component';
import { RegisterComponent } from './=====Pages=====/__________User/register/register.component';
import { UserPanelComponent } from './=====Pages=====/__________User/user-panel/user-panel.component';
import { EditSerductComponent } from './=====Pages=====/__________serduct/edit-serduct/edit-serduct.component';


const routes: Routes = [
  // { path: 'test', component: ChildComponent },
  { path: 'ser', component: SerductComponent },
  { path: 'newS', component: NewSerductComponent },
  { path: 'edit-serduct/:id', component: EditSerductComponent, },
  { path: 'newC', component: NewCompanyComponent },
  { path: 'edit-company', component: EditCompanyComponent },
  { path: 'signin', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'userPanel', component: UserPanelComponent },
  { path: 'detail', component: SerductDetailComponent, data: { serductInput: 'Isert a serduct' } },
  // { path: 'user-home', component: HomeComponent ,  canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64],
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
