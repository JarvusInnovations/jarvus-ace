
/*jslint browser: true, undef: true *//*global Ext*/
/**
 *
 */
Ext.define('Jarvus.ace.field.AceOptionCheckbox', {
    extend: 'Ext.field.Checkbox',

    requires: [
        'Jarvus.ace.field.AceOptionFieldBase'
    ],

    mixins: {
        acefield: 'Jarvus.ace.field.AceOptionFieldBase'
    },

    config: {
        option: null
    },

    initialize: function() {
        var me = this;

        me.callParent();

        me.on('painted', function() {
            me.displayValue(me.getConfiguration().getOption(me.getOption()));
        }, me, {single: true});
    },

    listeners: [{
        'change' : function(checkbox, val) {
            checkbox.getConfiguration().setOption(checkbox.getOption(),val);
        }
    }],

    displayValue: function(val) {
        this.setValue(val);
    }

});
