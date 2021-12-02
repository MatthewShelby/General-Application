import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SerductDetailComponent } from './=====Pages=====/__________Serduct/serduct-detail/serduct-detail.component';
import { SerductComponent } from './=====Pages=====/__________Serduct/serduct/serduct.component';
const routes: Routes = [
  // { path: 'test', component: ChildComponent },
  { path: 'ser', component: SerductComponent },
  { path: 'detail', component: SerductDetailComponent,data:{serductInput:'Isert a serduct'} },
  // { path: 'user-home', component: HomeComponent ,  canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
