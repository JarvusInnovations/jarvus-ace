/*jslint browser: true, undef: true *//*global Ext*/
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

    addListeners: function(editor) {
        var me = this;

        me.on('select', function(combo,record) {
            if (editor) {
                editor.doOptionChange(me.getOption(),record.get('value'));
            }
        });
    },

    displayCurrentValue: function(editor) {
        var me = this,
            val = editor.getOption(me.getOption());
            rec = me.getStore().query('value',val).first();

        if (rec) {
            Ext.Function.defer(me.select,100,me,[rec]);
        }
    }

});
