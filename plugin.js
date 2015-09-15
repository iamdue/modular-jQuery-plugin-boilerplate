/**
 * modular jQuery plugin boilerplate
 * @version 1.0
 * @author Gyorgy Sagi <gyorgy.sagi@gmail.com>
 */

'use strict';

(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['jquery'], factory);
	} else if (typeof module === 'object' && module.exports) {
		// CommonJS
		factory(require('jquery'));
	} else {
		// Browser globals
		factory( root.jQuery );
	}
}
(this, function( $ ){

	var defaults = {
		defaultProperties: {}
	};

	/**
	 * PluginName constructor
	 * @constructs PluginName object
	 * @param element - initiated element(s)
	 * @param options - configuration options
	 */
	function PluginName( element, options ) {
		this.element = element;

		this.options = $.extend( {}, defaults, options) ;

		this._defaults = defaults;

		this.init();

	}

	/**
	 * extends PluginName object prototype
	 * @type {{init: Function, addEventHandlers: Function}}
	 */
	PluginName.prototype = {

		init: function(){
			this.addEventHandlers();
		},

		/**
		 * add Eventhandlers
		 */
		addEventHandlers: function(){

		}

	};

	/**
	 * PluginName function
	 * @desc extending jQuery object with PluginName function
	 * @param options
	 * @returns {*}
	 */
	$.fn.PluginName = function ( options ) {

		return this.each(function() {
			if ( !$.data( this, "plugin_PluginName" ) ) {
				$.data( this, "plugin_PluginName", new PluginName( this, options ) );
			}
		});

	};

}));
