/*!
* frontendboilerplate - v0.1.1 - MIT LICENSE 2015-06-22. 
* @author 
*/
/**
 * Sample content to test the concat and minify grunt plugins.
 */
function sampleA() {

	'use strict';

	window.console.log("Sample A");
}

sampleA();

/**
 * Sample content to test the concat and minify grunt plugins.
 */
function sampleB() {

	'use strict';

	window.console.log("Sample B");
}

sampleB();
/**
*	Sample content to illustrate the use of Mocha for tests. 
*/

var Apple = function (opts) {
	
	'use strict';
	
    opts = opts || {};

    this.name = opts.name || 'Fuji';

    this.sound = opts.sound || 'crunch';

    return this;
};