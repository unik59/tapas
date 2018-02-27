import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Report} from './Model/report';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {catchError, map, tap} from 'rxjs/operators';
import {FormGroup} from '@angular/forms';

@Injectable()
export class ReportsService {

  private reportsUrl = 'api/reports';

  constructor(private http: HttpClient) {
  }


  /** GET reports */
  getReports(): Observable<Report[]> {
    return this.http.get<Report[]>(this.reportsUrl).pipe(
      tap(_ => this.log(`fetched reports`)),
      catchError(this.handleError('getReports', []))
    );
  }

  /** GET filtered reports */
  getFilterReports(form: FormGroup): Observable<Report> {
    const url = `${this.reportsUrl}?store=${form.get('magasin').value.store}`;
    console.log(url);
    return this.http.get<Report>(url).pipe(
      tap(_ => this.log(`fetched reports store=${form['store']}`)),
      catchError(this.handleError<Report>(`getFilterReports store=${form['store']}`)
      ));
  }

  /** GET report */
  getReport(id: number): Observable<Report> {
    const url = `${this.reportsUrl}/${id}`;

    return this.http.get<Report>(url).pipe(
      tap(_ => this.log(`fetched report id=${id}`)),
      catchError(this.handleError<Report>(`getReport id=${id}`))
    );
  }


  /* handleError */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  /* log */
  private log(log: string) {
    console.info(log);
  }
}
