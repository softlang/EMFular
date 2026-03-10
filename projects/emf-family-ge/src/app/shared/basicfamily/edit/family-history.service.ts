import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {HistoryService} from 'ngx-emfular-helper';
import {JsonOf} from 'emfular';
import { Family } from '../core/family';

@Injectable({
  providedIn: 'root'
})
export class FamilyHistoryService extends HistoryService<JsonOf<Family>>{

  constructor(@Inject(PLATFORM_ID)  platform: Object) {
    super("Family-history_", 50, platform);
  }
}
