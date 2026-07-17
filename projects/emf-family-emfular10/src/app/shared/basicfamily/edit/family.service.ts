import { Injectable } from '@angular/core';
import {ModelService} from 'ngx-emfular-integration';
import {IoService} from 'ngx-emfular-tool';
import { Family } from '../core/family';
import { FamilyHistoryService } from './family-history.service';
import { Woman } from '../core/woman';
import { Man } from '../core/man';


@Injectable({
  providedIn: 'root'
})
export class FamilyService extends ModelService<Family>{

  //explicitly use modeling classes to avoid treesgaking them away:
  womanAgainstExtinction: Woman = new Woman();
  manAgainstExtinction: Man = new Man();


  constructor(
    historyService: FamilyHistoryService,
    ioService: IoService,
  ) {
    super(historyService, ioService, Family);
  }
}
