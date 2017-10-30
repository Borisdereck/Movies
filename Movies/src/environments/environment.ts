// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {    
      apiKey: "AIzaSyCdNefJOdaQNoY2QJPEgqtWCSUZnhxf4PU",
      authDomain: "movies-b05e8.firebaseapp.com",
      databaseURL: "https://movies-b05e8.firebaseio.com",
      projectId: "movies-b05e8",
      storageBucket: "movies-b05e8.appspot.com",
      messagingSenderId: "39538120178"   
  },
};
