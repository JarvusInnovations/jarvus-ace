/*jslint browser: true, undef: true*//*global Ext*/

/**
 * A default singleton instance for {@link Jarvus.ace.util.AbstractConfiguration}
 */
Ext.define('Jarvus.ace.util.Configuration', {
    extend: 'Jarvus.ace.util.AbstractConfiguration',
    singleton: true,


    constructor: function(config) {
        this.initConfig(config);

        this.callParent([config]);
    }


});
