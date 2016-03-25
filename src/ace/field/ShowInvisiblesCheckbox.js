/*jslint browser: true, undef: true *//*global Ext*/
Ext.define('Jarvus.ace.field.ShowInvisiblesCheckbox', {
    extend: 'Jarvus.ace.field.AceOptionCheckbox',
    xtype: 'jarvus-ace-field-showinvisiblescheckbox',

    config: {
        option: 'showInvisibles',
        fieldLabel: 'Show invisibles'
    }

});
