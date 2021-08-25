// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // url_api: 'https://platzi-store.herokuapp.com',
  url_api: 'http://localhost:3000',

  firebase: {
    apiKey: 'AIzaSyAHkTPX3zSeLxLUTo_G00LSYH3gkbZpn8s',
    authDomain: 'platzi-store-7d8ad.firebaseapp.com',
    projectId: 'platzi-store-7d8ad',
    storageBucket: 'platzi-store-7d8ad.appspot.com',
    messagingSenderId: '864108017899',
    appId: '1:864108017899:web:3ecf21b2bae5ad29f5e6ae',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
