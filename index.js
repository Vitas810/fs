const brouserSync = require('browser-sync');

brouserSync({
  server: 'app',
  files: ['app/*.html', 'app/css/*.css', 'app/js/*.js'],
});
