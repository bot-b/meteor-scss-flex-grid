Package.describe({
  name: 'matthewsimo:scss-flex-grid',
  version: '0.0.3',
  // Brief, one-line summary of the package.
  summary: 'Adds scss-flex-grid',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/matthewsimo/meteor-scss-flex-grid.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');

	api.use('fourseven:scss', 'client');
	api.imply('fourseven:scss@1.0.0');

	api.addFiles('scss.json', 'server');
	api.addFiles('scss-flex-grid/_flex-grid.scss', 'server', { isAsset: true });
});
