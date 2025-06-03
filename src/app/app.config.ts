import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { AutoRefreshTokenService, provideKeycloak, UserActivityService, withAutoRefreshToken } from 'keycloak-angular';
import { provideState, provideStore } from '@ngrx/store';
import { visualReducer } from './state/visual/visual.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { introductionReducer } from './state/introduction/introduction.reducer';

export const provideKeycloakAngular = () =>
  provideKeycloak({
    config: {
      url: 'http://localhost:8080',
      realm: 'accessibility-game-realm',
      clientId: 'accessibility-game-app'
    },
    initOptions: {
      onLoad: 'check-sso',
      silentCheckSsoRedirectUri: 'http://localhost:4200/silent-check-sso.html'
    },
    features: [
      withAutoRefreshToken({
        onInactivityTimeout: 'logout',
        sessionTimeout: 60000
      })
    ],
    providers: [AutoRefreshTokenService, UserActivityService]
  });


export const appConfig: ApplicationConfig = {
  providers: [
    provideKeycloakAngular(),
    provideZoneChangeDetection({eventCoalescing: true}), provideRouter(routes), provideClientHydration(withEventReplay()),
    provideStore(), provideStoreDevtools({
      maxAge: 25, // Retains last 25 states
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
      connectInZone: true // If set to true, the connection is established within the Angular zone
    }),
    provideState({name: 'introduction', reducer: introductionReducer}),
    provideState({name: 'visual', reducer: visualReducer})
  ]
};
