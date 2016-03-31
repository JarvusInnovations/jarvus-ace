/*jslint browser: true, undef: true *//*global Ext*/
/**
 *
 */
Ext.define('Jarvus.ace.field.AceOptionCheckbox', {
    extend: 'Ext.form.field.Checkbox',

    requires: [
        'Jarvus.ace.field.AceOptionFieldBase'
    ],

    mixins: {
        acefield: 'Jarvus.ace.field.AceOptionFieldBase'
    },

    config: {
        option: null
    },

    listeners: [{
        'render' : function(checkbox) {
            checkbox.displayValue(checkbox.getConfiguration().getOption(checkbox.getOption()));
        },
        'change' : function(checkbox, val) {
            checkbox.getConfiguration().setOption(checkbox.getOption(),val);
        }
    }],

    displayValue: function(val) {
        this.setValue(val);
    }

});
