import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { State } from '../models/state';
import { States } from '../models/states';
import { StateService } from '../services/state.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class Dashboard implements OnInit {

  statesFullResult: States = new States();

  constructor(private stateService: StateService) { }

  getStates(): State[] {
    return this.statesFullResult.stateList;
  }

  getPersons(): String[] {
    let filteredResult:String[] = [];
    let personIndexCounts: Map<string, number> = this.statesFullResult.personIndexCounts;
    if(this.statesFullResult.personIndexCounts){
      for(let personIndex in this.statesFullResult.personIndexCounts) {
        if(this.statesFullResult.personIndexCounts[personIndex] > 0) {
          filteredResult.push(personIndex);
        }
      }
    }
    return filteredResult;
  }

  ngOnInit(): void {
    this.stateService.getStates()
        .then(statesResult => this.statesFullResult = statesResult);
  }

}
