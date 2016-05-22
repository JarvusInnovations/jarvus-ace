/*jslint browser: true, undef: true *//*global Ext*/
/**
 *
 */
Ext.define('Jarvus.ace.field.KeyboardHandlerSelect', {
    extend: 'Jarvus.ace.field.AceOptionSelect',
    xtype: 'jarvus-ace-field-keyboardhandlerselect',

    config: {
        option: 'keyboardHandler'
    },

    options: [
        {value: null,  text: 'Default'},
        {value: 'ace/keyboard/vim',  text: 'Vim'},
        {value: 'ace/keyboard/emacs',  text: 'Emacs'}
    ]
});
