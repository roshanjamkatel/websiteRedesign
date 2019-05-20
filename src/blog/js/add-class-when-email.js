/*
	By Osvaldas Valutis, www.osvaldas.info
	Available for use under the MIT License
*/

;( function ( document, window, index )
{
	'use strict';

	var findElement = function( selector, parent )
		{
			var element = parent || document;
			element = element.querySelectorAll( selector );
			return element.length ? element[ element.length - 1 ] : false;
		},
		addEventListener = function( element, event, handler )
		{
			element.addEventListener ? element.addEventListener( event, handler ) : element.attachEvent( 'on' + event, function(){ handler.call( element ); });
		},
		forEach = function( elements, fn )
		{
			for( var i = 0; i < elements.length; i++ ) fn( elements[ i ], i );
		},
		addClass = function( element, className )
		{
			element.classList ? element.classList.add( className ) : element.className += ' ' + className;
		},
		removeClass = function( element, className )
		{
			element.classList ? element.classList.remove( className ) : element.className += element.className.replace( new RegExp( '(^|\\b)' + className.split( ' ' ).join( '|' ) + '(\\b|$)', 'gi' ), ' ' );
		};

	var addClassWhenEmail = function( selector, options )
	{
		var AddClassWhenEmail = function( selector, options )
		{
			var settings = {
								email:		'input[type="email"]',
								className:	'active'
				};

			for( var i in options )
				settings[ i ] = options[ i ];

			forEach( document.querySelectorAll( selector ), function( form )
			{
				var email = findElement( settings.email, form );
				if( email )
					addEventListener( email, 'keyup', function()
					{
						email.value != '' && /^([\w-\.]+@([\w-]+\.)+[\w-]{2,12})?$/.test( email.value ) ? addClass( form, settings.className ) : removeClass( form, settings.className );
					});
			});
		};

		return new AddClassWhenEmail( selector, options );
	};

	window.addClassWhenEmail = addClassWhenEmail;

}( document, window, 0 ));