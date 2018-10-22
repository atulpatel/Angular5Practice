import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { HerosComponent } from './heros/heros.component';
import { HeroDetailsComponent } from './heros/hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
{path: '', redirectTo: '/dashboard', pathMatch: 'full'},
{path: 'detail/:id', component: HeroDetailsComponent},
{path: 'heros', component: HerosComponent},
{path: 'dashboard', component: DashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
