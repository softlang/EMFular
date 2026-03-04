import { Injectable } from '@angular/core';
import {HistoryService} from 'ngx-emfular-helper';
import {JsonOf} from 'emfular';
import { Family } from '../core/family';

@Injectable({
  providedIn: 'root'
})
export class FamilyHistoryService extends HistoryService<JsonOf<Family>>{

  constructor() {
    super("Family-history_", 50);
  }
}
