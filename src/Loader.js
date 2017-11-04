Ext.define('Jarvus.ace.Loader', {
    singleton: true,
    mixins: ['Ext.mixin.Observable'],

    config: {
        autoLoad: true,
        disableCaching: false,
        modules: [
            'ext-modelist',
            // 'ext-whitespace',
            'mode-html.js',
            'mode-php.js',
            'mode-javascript.js',
            'mode-css.js',
            'mode-json.js',
            'mode-scss.js',
            'mode-sass.js',
            'mode-smarty.js',
            'mode-yaml.js',
            'mode-xml.js',
            'mode-svg.js',
            'mode-sh.js',
            'mode-sql.js',
            'mode-markdown.js',
            'mode-jsx.js',
            'theme-monokai.js'
        ]
    },

    ready: false,

    constructor: function(config) {
        var me = this;

        me.mixins.observable.constructor.call(me, config);

        if (me.getAutoLoad()) {
            me.load();
        }
    },

    load: function() {
        var me = this,
            modules = me.getModules(),
            disableCaching = me.getDisableCaching(),
            previousDisableCaching;

        if (me.ready || me.modulesLoaded) {
            return;
        }

        if (disableCaching !== null) {
            previousDisableCaching = Ext.Loader.getConfig('disableCaching');
            Ext.Loader.setConfig('disableCaching', disableCaching);
        }

        Ext.Loader.loadScript({
            url: Ext.resolveResource('<@jarvus-ace>ace/ace.js'),
            onLoad: function() {
                Ext.Loader.loadScript({
                    url: Ext.Array.map(modules, function(module) {
                        return Ext.resolveResource('<@jarvus-ace>ace/'+module);
                    }),
                    onLoad: function() {
                        if (disableCaching !== null) {
                            Ext.Loader.setConfig('disableCaching', previousDisableCaching);
                        }

                        me.ready = true;
                        me.fireEvent('aceready', window.ace);
                    }
                });
            },
            onError: function() {
                Ext.Logger.error('Failed to load ace');
            }
        });
    },

    withAce: function(onReady, scope) {
        var me = this;

        scope = scope || me;

        if (me.ready) {
            Ext.callback(onReady, scope, [window.ace]);
        } else {
            me.on('aceready', onReady, scope, { single: true });
        }
    }
});