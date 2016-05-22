/*jslint browser: true, undef: true *//*global Ext*/
/**
 *
 */
Ext.define('Jarvus.ace.field.AceOptionSelect', {
    extend: 'Ext.field.Select',


    requires: [
        'Jarvus.ace.field.AceOptionFieldBase'
    ],

    mixins: {
        acefield: 'Jarvus.ace.field.AceOptionFieldBase'
    },

    config: {
        option: null,

        displayField: 'text',
        valueField: 'value'
    },


    initialize: function() {
        var me = this;

        me.callParent();

        me.on('painted', function() {
            me.displayValue(me.getConfiguration().getOption(me.getOption()));
        }, me, {single: true});

    },

    listeners: [{
        'change' : function(select, rec) {
            select.getConfiguration().setOption(select.getOption(),rec.get('value'));
        }
    }],

    displayValue: function(val) {
        this.setValue(val);
    }

});
