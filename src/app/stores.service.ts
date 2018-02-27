import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Store} from './Model/store';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {catchError, map, tap} from 'rxjs/operators';
import {FormGroup} from '@angular/forms';
import {log} from 'util';

@Injectable()
export class StoresService {

  private storesUrl = 'api/stores';

  constructor(private http: HttpClient) {
  }


  /** GET stores */
  getStores(): Observable<Store> {
    return this.http.get<Store>(this.storesUrl).pipe(
      tap(_ => this.log(`fetched stores`)),
      catchError(this.handleError('getStores')
    ));
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
