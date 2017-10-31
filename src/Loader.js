Ext.define('Jarvus.ace.Loader', {
    singleton: true,
    mixins: ['Ext.mixin.Observable'],

    config: {
        autoLoad: true,
        disableCaching: false,
        modules: [
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
            modulesLength = modules.length,
            disableCaching = me.getDisableCaching(),
            previousDisableCaching,
            modulesLoaded,
            onModuleLoaded = function onModuleLoaded(options) {
                modulesLoaded.push(options.url);

                if (modulesLoaded.length == modulesLength) {
                    if (disableCaching !== null) {
                        Ext.Loader.setConfig('disableCaching', previousDisableCaching);
                    }

                    me.ready = true;
                    me.fireEvent('ready', window.ace);
                }
            };

        if (me.ready || me.modulesLoaded) {
            return;
        }

        modulesLoaded = me.modulesLoaded = [];

        if (disableCaching !== null) {
            previousDisableCaching = Ext.Loader.getConfig('disableCaching');
            Ext.Loader.setConfig('disableCaching', disableCaching);
        }

        Ext.Loader.loadScript({
            url: Ext.resolveResource('<@jarvus-ace>ace/ace.js'),
            onLoad: function() {
                var moduleIndex = 0;

                for (; moduleIndex < modulesLength; moduleIndex++) {
                    Ext.Loader.loadScript({
                        url: Ext.resolveResource('<@jarvus-ace>ace/'+modules[moduleIndex]),
                        onLoad: onModuleLoaded
                    });
                }
            },
            onError: function() {
                debugger;
            }
        });
    },

    onReady: function(onReady) {
        var me = this;

        if (me.ready) {
            onReady.call(me, window.ace);
        } else {
            me.on('ready', onReady, me, { single: true });
        }
    }
});