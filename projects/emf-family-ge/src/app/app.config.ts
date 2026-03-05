import {ApplicationConfig, inject, PLATFORM_ID, provideAppInitializer, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {isPlatformBrowser} from '@angular/common';
import {FamilyHistoryService} from './shared/basicfamily/edit/family-history.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAppInitializer(()=>{
      const platformId = inject(PLATFORM_ID);
      if(isPlatformBrowser(platformId)){
        const history: FamilyHistoryService = inject(FamilyHistoryService);
        history.init();
      }
    })
  ]
};
