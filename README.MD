First of All .Thank For Your Time


Tec:
	TypeScript && Javascript
Build:

	Gulp && Broswerfy && watchify && gulp-uglify
	npm && node 

Description:
	Single Page Mvc with TypeScript,  without a  Route

TODO
	Route System ....


Install
	
	npm install

	npm install -g gulp-cli

	npm install --save-dev typescript gulp gulp-typescript
	npm install --save-dev browserify tsify vinyl-source-stream
	npm install --save-dev watchify gulp-util
	npm install --save-dev gulp-uglify vinyl-buffer gulp-sourcemaps
	npm install --save-dev babelify babel-preset-es2015 vinyl-buffer gulp-sourcemaps

	use:
		 gulp --tasks 
		 	to see build commands
		 gulp
		 	or
		 gulp watch
		 	or
		 gulp build_babel
		 	or
		 gulp build_unglify

	Please se the tsconfig.json for configuration

	For gulp build_babel 
		you must use 

		{

		    "compilerOptions": {
		        "noImplicitAny": true,
		        "target": "es2015"
		    
		    }
		}

	For gulp build_unglify

		{

		    "compilerOptions": {
		        "noImplicitAny": true,
		        "target": "es5"
		    }
		}


Its'All
 	Engoy

