/*jslint browser: true, undef: true *//*global Ext*/
Ext.define('Jarvus.ace.field.KeyboardHandlerComboBox', {
    extend: 'Jarvus.ace.field.AceOptionComboBox',
    xtype: 'jarvus-ace-field-keyboardhandlercombobox',

    config: {
        option: 'keyboardHandler'
    },

    store: {
        fields:['value','text'],
        data: [
            {value: 'ace/keyboard/vim',  text: 'Vim'},
            {value: 'ace/keyboard/emacs',  text: 'Emacs'}
        ]
    }

});
