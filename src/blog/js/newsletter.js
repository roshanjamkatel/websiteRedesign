;( function( $, window, document, undefined )
{
    'use strict';

    var form        = '.newsletter',
        className   = 'newsletter--active',
        email       = 'input[type="email"]';

    $( form ).each( function()
    {
        var $form   = $( this ),
            $email  = $form.find( email ),
            val     = '';

        $email.on( 'keyup.addClassWhenEmail', function()
        {
            val = $email.val();
            $form.toggleClass( className, val != '' && /^([\w-\.]+@([\w-]+\.)+[\w-]{2,12})?$/.test( val ) );
        });
    });
})( jQuery, window, document );
