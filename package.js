Package.describe({
  name: 'derelinguo:progressbarjs',
  version: '0.0.1',
  summary: 'Simple Wrapper for kimmobrunfeldt progressbar.js',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/cbanbury/progressbar.js',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.4.1');
  api.addFiles('dist/progressbar.min.js');
});
