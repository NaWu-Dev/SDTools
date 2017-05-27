import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 

import { DashboardComponent } from '../service-dashboard/service-dashboard.component'; 
import { ServiceDetailComponent } from '../service-detail/service-detail.component'

const routes: Routes = [
    {path: '', component: DashboardComponent}, 
    {path: 'dashboard', component: DashboardComponent}, 
    {path: 'detail/:id', component: ServiceDetailComponent}
]; 

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

} 