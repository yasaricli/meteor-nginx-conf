Package.describe({
    name: 'yasaricli:nginx',
    summary: 'Meteor Package for interacting programmatically with an nginx configuration file.',
    version: '0.0.1',
    git: 'https://github.com/yasaricli/meteor-nginx-conf.git'
});

Npm.depends({
    'nginx-conf': '0.2.3'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.use('underscore', 'server');
  api.addFiles('nginx.js', 'server');
});
