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
            checkbox.displayValue(checkbox.getConfiguration().get(checkbox.getOption()));
        },
        'change' : function(checkbox, val) {
            checkbox.getConfiguration().set(checkbox.getOption(),val);
        }
    }],

    displayValue: function(val) {
        this.setValue(val);
    }

});
