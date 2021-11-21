// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  url: {
    services: 'https://localhost:44346/api/Services/',
    states: 'https://localhost:44346/api/States/',
    coins: 'https://localhost:44346/api/Currencies/',
    bills: 'https://localhost:44346/api/Bills/',
    users: 'https://localhost:44346/api/Users/',
  }
};
