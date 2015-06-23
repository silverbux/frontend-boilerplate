Front-end Boilerplate.
=====================
Reference and Credits
https://github.com/newaeonweb/frontendboilerplate

####  Disclaimer
All code here are based on lessons learned and good practices, however many of them are fruits of research in several blog, tutorials, lectures and other sources.

#### License
[MIT]()

---

#### Initialize
```
git clone git@github.com:mcoy37/frontend-boilerplate.git

```
```
npm install && bower install

```
#### Get Started
```
grunt

```

## Application Directory Layout
We propose a folder structure for web projects from the scratch, because all web projects have CSS, JS and Images folders.

```
	assets/					--> all of the files to be used in production
		css					--> css files
		fonts				--> Font-face folder
		images				--> image files
		js/					--> javascript files
			vendor 			--> third party libraries copied from src/vendor
	lib/					--> 3rd party bower libraries
	src/					--> scripts for development
		scripts/			--> hand made JavaScript files, plugins and others
		preprocessor/		--> your choice for Sass or Less
		vendor/				--> third party libraries like: respond, mçodernizer
	test					--> test source files and libraries
		mocha				--> mocha folder structure for visual test results
			css/
				mocha.css
			js/				--> testing frameworks file
				chai.js
				mocha.js
		spec				--> specs for testing
			app-test.js		--> example on how to write tests
		test.html			--> visual page for tests
	index.html				--> base layout file
	Gruntfile.js			--> where the magic happens
```



