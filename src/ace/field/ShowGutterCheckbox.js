/*jslint browser: true, undef: true *//*global Ext*/
Ext.define('Jarvus.ace.field.ShowGutterCheckbox', {
    extend: 'Ext.form.field.Checkbox',
    xtype: 'jarvus-ace-field-showguttercheckbox',

    requires: [
        'Jarvus.ace.field.AceOptionField'
    ],

    mixins: {
        acefield: 'Jarvus.ace.field.AceOptionField'
    },

    config: {
        editor: null,
        option: 'showGutter'
    },

    fieldLabel: 'Show gutter'


});
