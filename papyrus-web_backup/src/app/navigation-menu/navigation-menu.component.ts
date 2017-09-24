import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { State } from '../models/state';
import { States } from '../models/states';
import { StateService } from '../services/state.service';

@Component({
  selector: 'naviagtion-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: [ './navigation-menu.component.css' ]
})

export class NavigationMenu implements OnInit {

  statesFullResult: States = new States();

  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    this.stateService.getStates()
        .then(statesResult => this.statesFullResult = statesResult);
  }

}
