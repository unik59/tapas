import {ReportsService} from '../reports.service';
import {Component, OnInit} from '@angular/core';
import {Report} from '../Model/report';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  reports: Report[] = null;
  form: FormGroup;

  constructor(private reportsService: ReportsService) {
  }

  ngOnInit(): void {
    // récuperer this.form
    this.getReports();
  }

  getFilterReports(): void {
    this.reportsService.getFilterReports(this.form).subscribe(reports => {
      console.log('ReportComponent >> on a réussi : ', this.reports);
    });
  }

  getReports(): void {
    this.reportsService.getReports()
      .subscribe(reports => this.reports = reports);
  }

  myValueChange(event) {
    console.log('ReportComponent >> on est passé par myvaluechange()');
    this.form = event.value;
    this.getFilterReports();
  }

}
