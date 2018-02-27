import { InMemoryDbService } from 'angular-in-memory-web-api';
import { REPORTS } from './Model/mock-reports';
import { Store } from './Model/store';

export class InMemoryDataService implements InMemoryDbService {
  createDb(): {}  {
    const reports = REPORTS;
    const stores = Store;
    return { reports };
  }

}
