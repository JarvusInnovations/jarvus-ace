/*jslint browser: true, undef: true *//*global Ext*/
Ext.define('Jarvus.ace.field.AceOptionField', {
    extend: 'Ext.Mixin',

    mixinConfig: {
        id: 'acefield'
    },

    aceSettingsField: true,

/*
    listeners: [{
        'select' : function(combo,record) {
            if (this.getEditor()) {
                this.getEditor().doOptionChange(this.getOption(),record.get('value'));
            }
        },
        'change' : function(checkbox, val) {
            record.get('value');
            if (this.getEditor()) {
                this.getEditor().doOptionChange(this.getOption(),val);
            }
        }
    }],
*/

    addListeners: function() {
        var me = this,
            fieldType = this.superclass.xtype;

        if (fieldType == 'combobox') {
            me.on('select', function(combo,record) {
                if (me.getEditor()) {
                    me.getEditor().doOptionChange(me.getOption(),record.get('value'));
                }
            });
        } else if (fieldType == 'checkboxfield') {
            me.on('change', function(checkbox, val) {
                if (me.getEditor()) {
                    me.getEditor().doOptionChange(me.getOption(),val);
                }
            });
        }
    },

    updateEditor: function(editor) {
        var me = this;

        me.displayCurrentValue();
        me.addListeners();

        editor.on('optionschange', function() {
            console.log('optionschange');
            me.displayCurrentValue();
        });
    },

    displayCurrentValue: function() {
        var me = this,
            fieldType = this.superclass.xtype;

        if (fieldType == 'combobox') {
            me.selectCurrent();
        } else if (fieldType == 'checkboxfield') {
            me.checkCurrent();
        }
    },

    selectCurrent: function() {
        var me = this,
            ace = me.getEditor().getEditor(),
            rec = me.getStore().query('value',ace.getOption(me.getOption())).first();

        if (rec) {
            Ext.Function.defer(me.select,100,me,[rec]);
        }
    },

    checkCurrent: function() {
        var me = this,
            ace = me.getEditor().getEditor(),
            val = ace.getOption(me.getOption());

        me.setValue(val);
    }
});
