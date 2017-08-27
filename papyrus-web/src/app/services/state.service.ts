import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { State } from '../models/state';
import { States } from '../models/states';

@Injectable()
export class StateService {

  constructor(private http: Http) { }

  getStates(): Promise<States> {
    return this.http.get('assets/mock-data.json')
               .toPromise()
               .then(response => response.json() as States)
               .catch(this.handleError);
  }

  getState(id: string): Promise<State> {
    let state: State = new State();
    state.name = id;
    return Promise.resolve(state);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
