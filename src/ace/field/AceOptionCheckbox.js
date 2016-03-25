/*jslint browser: true, undef: true *//*global Ext*/
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

    addListeners: function(editor) {
        var me = this;

        me.on('change', function(checkbox, val) {
            if (editor) {
                editor.doOptionChange(me.getOption(),val);
            }
        });
    },

    displayCurrentValue: function(editor) {
        var me = this,
            val = editor.getOption(me.getOption());

        me.setValue(val);
    }
});
