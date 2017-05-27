import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './service-dashboard/service-dashboard.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ServiceDoc } from './servicedoc/servicedoc';
import { sdtService } from './sdt_service/sdt_service';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { ServiceDetailGeneralComponent } from './service-detail-general/service-detail-general.component';
import { SearchComponent } from './search/search.component'; 

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ServiceDetailComponent,
    ServiceDetailGeneralComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    sdtService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
