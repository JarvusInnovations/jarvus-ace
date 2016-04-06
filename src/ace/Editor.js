/*jslint browser: true, undef: true *//*global Ext*/
/**
 *
 */
Ext.define('Jarvus.ace.Editor', {
    extend: 'Ext.Component',
    xtype: 'jarvus-ace-editor',

    config: {
        configuration: 'Jarvus.ace.util.Configuration',
        ace: null,
        subscribe: null
    },

    afterRender: function() {
        var me = this;

        me.initAce();
        me.attachEvents();
    },

    applyConfiguration: function(configuration) {
        var me = this;

        // Require and get reference to singleton configuration class.
        if (typeof configuration == 'string') {
            Ext.syncRequire(configuration);
            configuration = Ext.ClassManager.get(configuration);
        }
        // listen for configuration changes and update ace editor options
        configuration.on('optionchange', function(config,option,val) {
            if (me.getAce()) {
                me.getAce().setOption(option,val);
            }
        });

        return configuration;
    },

    initAce: function() {
        var me = this,
            config = this.getConfiguration(),
            editor;

        if (!me.getAce()) {
            me.setAce(ace.edit(me.el.id));
        }
        editor = me.getAce();

        // TODO: Remove this when its absence no longer causes a warning in future ACE version
        editor.$blockScrolling = 'Infinity';

        editor.setOptions(Ext.apply({},config.getOptions()));

    },

    attachEvents: function() {
        var me = this,
            subscribe = me.getSubscribe();

        if (subscribe) {
            Ext.iterate(subscribe, function(eventClass,eventNames) {
                Ext.each(eventNames, function(eventName) {
                    me.bubbleEvent(eventClass, eventName);
                });
            });
        }
    },

    bubbleEvent: function(eventClass, eventName) {
        var me = this,
            aceClass = null;

        switch (eventClass) {
            case 'Document':
                aceClass = me.getAce().getSession().getDocument();
                break;
            case 'Editor':
                aceClass = me.getAce();
                break;
            case 'EditorSession':
                aceClass = me.getAce().getSession();
                break;
            case 'Selection':
                aceClass = me.getAce().getSession().getSelection();
                break;
            default:
                console.warn(eventClass+' is not a recognized Ace Editor class');
        }

        if (aceClass) {
            aceClass.on(eventName, function() {
                //console.log((eventClass+eventName).toLowerCase());
                me.fireEvent((eventClass+eventName).toLowerCase(),arguments);
            });
        }
    }

    // TODO: should this be necessary?  getting no height with fit layout.
    /*
    syncSize: function() {
        var me = this,
            size = me.up('container').getSize();

        me.setHeight(size.height);
        me.setWidth(size.width);
    }
    */

});
