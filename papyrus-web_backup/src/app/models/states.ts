import { State } from './state';

export class States {
  stateList: State[];
  accountDeactivated: boolean;
  redirect: boolean;
  showNewTooltip: boolean;
  personIndexCounts: Map<string, number>;
}
