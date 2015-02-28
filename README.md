
# SCSS Flex Grid 

This is a [meteor](meteor.com) package that adds https://github.com/matthewsimo/scss-flex-grid to your app.

### Dependancies

This package depends on a https://github.com/fourseven/meteor-scss - add it via command line with:

```bash
meteor add meteor add fourseven:scss
```

### Install

Add the package to your app via command line with:

```bash
meteor add matthewsimo:scss-flex-grid
```

### Usage

Update your `scss.json` file, that `fourseven:scss` looks at:

```json
{
	"enableAutoprefixer": true,
	"includePaths": [
		".meteor/local/build/programs/server/assets/packages/matthewsimo_scss-flex-grid/"
	]
}
```

Read more `includePaths` [here](https://github.com/fourseven/meteor-scss#includepaths) and `enableAutoprefixer` [here](https://github.com/fourseven/meteor-scss#autoprefixer)


Then in any scss file, you can import it with:

```scss
@import "scss-flex-grid/flex-grid"
```

### Notes

- Note: On an initial build, i.e. after a fresh meteor reset, importing sass files from packages will throw an error, because the `.meteor/local/` directory doesn't exist yet.



