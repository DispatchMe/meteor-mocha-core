Package.describe({
  name: "dispatch:mocha-core",
  summary: "Core package used by dispatch:mocha-* packages to avoid conflicts",
  git: "https://github.com/DispatchMe/meteor-mocha-core.git",
  version: '0.0.1',
  testOnly: true,
});

Npm.depends({
  mocha: '2.4.5',
});

Package.onUse(function (api) {
  api.versionsFrom('1.3');

  api.use('ecmascript');

  api.use([
    'practicalmeteor:mocha-core@0.1.4',
  ], 'server');

  api.addFiles('client.js', 'client');
  api.mainModule('server.js', 'server');
});
