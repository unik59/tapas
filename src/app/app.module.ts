import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';

import {AppComponent} from './app.component';
import {FilterComponent} from './filter/filter.component';
import {ReportComponent} from './report/report.component';
import {ExportComponent} from './export/export.component';
import {DataTableModule, DropdownModule, TabViewModule} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {ButtonModule} from 'primeng/button';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {Router} from '@angular/router';
import {ReportsService} from './reports.service';
import {StoresService} from './stores.service';


@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    ReportComponent,
    ExportComponent
  ],
  imports: [
    BrowserModule,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    BrowserAnimationsModule,
    TabViewModule,
    HttpModule,
    HttpClientModule,
    ButtonModule,
    DataTableModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy} , ReportsService, StoresService, FormsModule ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
