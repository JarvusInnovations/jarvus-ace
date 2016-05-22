/*jslint browser: true, undef: true *//*global Ext*/
/**
 *
 */
Ext.define('Jarvus.ace.field.AceOptionComboBox', {
    extend: 'Ext.form.field.ComboBox',

    requires: [
        'Jarvus.ace.field.AceOptionFieldBase'
    ],

    mixins: {
        acefield: 'Jarvus.ace.field.AceOptionFieldBase'
    },

    config: {
        option: null,

        displayField: 'text',
        valueField: 'value',
        queryMode: 'local',
        forceSelection: true,
        grow: true,
        growAppend: 'WW'
    },

    listeners: [{
        'render' : function(combo) {
            combo.displayValue(combo.getConfiguration().getOption(combo.getOption()));
        },
        'select' : function(combo,record) {
            combo.getConfiguration().setOption(combo.getOption(),record.get('value'));
        }
    }],

    displayValue: function(val) {
        var me = this,
            rec = me.getStore().query('value',val).first();

        if (rec) {
            Ext.Function.defer(me.select,100,me,[rec]);
        }
    }

});
