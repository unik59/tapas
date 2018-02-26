import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {FilterComponent} from './filter/filter.component';
import {CarService, ReportComponent} from './report/report.component';
import {ExportComponent} from './export/export.component';
import {CalendarModule, DataTableModule, TabViewModule} from 'primeng/primeng';
import {FormsModule} from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';

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
    DropdownModule,
    BrowserAnimationsModule,
    TabViewModule,
    HttpModule,
    HttpClientModule,
    ButtonModule,
    DataTableModule

  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},
    CarService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
