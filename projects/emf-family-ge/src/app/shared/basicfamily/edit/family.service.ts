import { Injectable } from '@angular/core';
import {Family} from '@app/shared/basicfamily/core/family';
import {ModelService} from 'ngx-emfular-integration';
import {IoService} from 'ngx-emfular-helper';
import {FamilyHistoryService} from '@app/shared/basicfamily/edit/family-history.service';

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
