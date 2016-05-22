/*jslint browser: true, undef: true *//*global Ext*/
/**
 *
 */
Ext.define('Jarvus.ace.field.FontSizeSpinner', {
    extend: 'Jarvus.ace.field.AceOptionSpinner',
    xtype: 'jarvus-ace-field-fontsizespinner',

    config: {
        option: 'fontSize'
    },

    minValue: 6,
    maxValue: 32,
    stepValue: 1

});
