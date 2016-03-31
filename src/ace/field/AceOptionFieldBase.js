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
     * @cfg {String} option the name of the configuration option corresponding to this field
     * @cfg {Jarvus.ace.util.AbstractConfiguration} configuration this component's configuration class
     */
    config: {
        option: null,
        configuration: 'Jarvus.ace.util.Configuration'
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
        console.warn('displayValue() should be implemented in classes that use this mixin');
    }

});
