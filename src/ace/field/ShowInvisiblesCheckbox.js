/*jslint browser: true, undef: true *//*global Ext*/
Ext.define('Jarvus.ace.field.ShowInvisiblesCheckbox', {
    extend: 'Ext.form.field.Checkbox',
    xtype: 'jarvus-ace-field-showinvisiblescheckbox',

    requires: [
        'Jarvus.ace.field.AceOptionField'
    ],

    mixins: {
        acefield: 'Jarvus.ace.field.AceOptionField'
    },

    config: {
        editor: null,
        option: 'showInvisibles'
    },

    fieldLabel: 'Show invisibles'

});
