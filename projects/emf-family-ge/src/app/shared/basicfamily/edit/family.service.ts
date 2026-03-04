import { Injectable } from '@angular/core';
import {ModelService} from 'ngx-emfular-integration';
import {IoService} from 'ngx-emfular-helper';
import { Family } from '../core/family';
import { FamilyHistoryService } from './family-history.service';

@Injectable({
  providedIn: 'root'
})
export class FamilyService extends ModelService<Family>{

  constructor(
    historyService: FamilyHistoryService,
    ioService: IoService,
  ) {
    super(historyService, ioService, Family);
  }
}
