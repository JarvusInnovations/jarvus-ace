/*jslint browser: true, undef: true *//*global Ext*/
Ext.define('Jarvus.ace.field.KeyboardHandlerComboBox', {
    extend: 'Ext.form.field.ComboBox',
    xtype: 'jarvus-ace-field-keyboardhandlercombobox',

    requires: [
        'Jarvus.ace.field.AceOptionField'
    ],

    mixins: {
        acefield: 'Jarvus.ace.field.AceOptionField'
    },

    config: {
        editor: null,
        option: 'keyboardHandler'
    },

    displayField: 'text',
    valueField: 'value',
    queryMode: 'local',
    forceSelection: true,
    grow: true,
    growAppend: 'WW',

    store: {
        fields:['value','text'],
        data: [
            {value: 'ace/keyboard/vim',  text: 'Vim'},
            {value: 'ace/keyboard/emacs',  text: 'Emacs'}
        ]
    }

});
