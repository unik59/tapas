import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ReportsService} from '../reports.service';
import {Report} from '../Model/report';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  reports: Report[] = null;
  form: FormGroup;
  // @Output() filterChange = new EventEmitter();
  @Output() filterChange: EventEmitter<any> = new EventEmitter();


  constructor(private reportsService: ReportsService,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.getReport();
    this.initForm();
    console.log('tet', this.reports);
    console.log('store', this.form['store']);
  }

  save() {
    // this.reportsService.getFilterReports(this.form).subscribe(result => {
    //  console.log('on a réussi : ', result);
    // })

    // envoyer 'this.form' au component report   (eventEmitter)
    this.filterChange.emit( this.form);
    console.log('save', this.form);
    console.log('magasin', this.form.get('magasin').value);
  }

  private getReport() {
    this.reportsService.getReports()
      .subscribe(reports => {
        this.reports = reports;
        console.log('getReport', this.reports);
      });
  }

  private initForm() {
    // On initialise notre formulaire piloté par le modèle
    this.form = this.fb.group({
      magasin: ['', Validators.compose([Validators.required])],
      startDate: [new Date('12/12/2018'), Validators.compose([Validators.required])],
      endDate: [new Date(), Validators.compose([Validators.required])]
    });
  }


}
