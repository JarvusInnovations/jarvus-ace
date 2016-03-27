/*jslint browser: true, undef: true *//*global Ext*/
/**
 *
 */
Ext.define('Jarvus.ace.field.AceOptionFieldBase', {
    extend: 'Ext.Mixin',

    mixinConfig: {
        id: 'acefield'
    },

    /**
     * @cfg {String} aceSettingsField Identifies this component as an aceSettingsField
     * @cfg {String[]} editorItemIds an array of itemIDs of editors using this component
     * @cfg {Javus.ace.Editor[]} editors an array of editors using this component
     */
    config: {
        option: null,
        configuration: 'Jarvus.ace.util.Configuration',
        aceSettingsField: true,
        editorItemId: [],
        editors: []
    },

    applyConfiguration: function(configuration) {
        var me = this;

        if (typeof configuration == 'string') {
            Ext.syncRequire(configuration);
            configuration = Ext.ClassManager.get(configuration);
        }
        configuration.on('optionchange', function(config,option,val) {
            if (me.getOption() == option) {
                me.displayValue(val);
            }
        });

        return configuration;
    },

    displayValue: function() {
        console.warn('this should be implemented in classes that use mixin');
    }

});
