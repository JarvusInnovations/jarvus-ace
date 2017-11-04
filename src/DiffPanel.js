Ext.define('Jarvus.ace.DiffPanel', {
    extend: 'Ext.Panel',
    xtype: 'acediffpanel',
    requires: [
        /* globals Jarvus */
        'Jarvus.ace.Loader',
        'Jarvus.ace.Panel'
    ],


    config: {
        left: null,
        right: null,

        theme: 'ace/theme/monokai',
        tabSize: 4,
        softTabs: true,
        showPrintMargin: false,
        showInvisibles: true,
        displayIndentGuides: true
    },

    componentCls: 'acediffpanel',

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    items: [
        {
            flex: 1,
            itemId: 'editor-left',

            xtype: 'component',
        },
        {
            width: 100,
            itemId: 'gutter',

            xtype: 'component',
            cls: 'gutter'
        },
        {
            flex: 1,
            itemId: 'editor-right',

            xtype: 'component'
        }
    ],


    // lifecycle methods
    constructor: function() {
        this.ready = false;

        this.callParent(arguments);
    },

    afterRender: function() {
        var me = this;

        me.callParent(arguments);

        Jarvus.ace.Loader.withDiff(me.loadIfReady, me);
    },


    // config handlers
    applyLeft: function(left) {
        var me = this;

        if (left && !left.mode && left.path) {
            me.withModeFromPath(left.path, function(mode) {
                left.mode = 'ace/mode/'+mode.name;
                me.loadIfReady();
            });
        }

        return left;
    },

    updateLeft: function(left, oldLeft) {
        this.fireEvent('leftchange', this, left, oldLeft);
    },

    applyRight: function(right) {
        var me = this;

        if (right && !right.mode && right.path) {
            me.withModeFromPath(right.path, function(mode) {
                right.mode = 'ace/mode/'+mode.name;
                me.loadIfReady();
            });
        }

        if (right && right.path) {
            me.setTitle(me.getInitialConfig('title') + ': ' + right.path.substr(right.path.lastIndexOf('/') + 1));
        }

        return right;
    },

    updateRight: function(right, oldRight) {
        this.fireEvent('rightchange', this, right, oldRight);
    },


    // internal methods
    withModeFromPath: function(path, callback, scope) {
        Jarvus.ace.Loader.withAce(function(ace) {
            var aceModelist = ace.require('ace/ext/modelist'),
                mode;

            mode = aceModelist.modesByName[Jarvus.ace.Panel.extensionModes[path.substr(path.lastIndexOf('.')+1)]];

            if (!mode) {
                mode = aceModelist.getModeForPath(path);
            }

            Ext.callback(callback, scope, [mode]);
        });
    },

    loadIfReady: function() {
        var me = this,
            left, right;

        if (me.ready || !me.rendered || !(left = me.getLeft()) || !(right = me.getRight())) {
            return;
        }

        me.ready = true;

        Jarvus.ace.Loader.withDiff(function(AceDiff) {
            me.differ = new AceDiff({
                theme: me.getTheme(),
                left: Ext.applyIf({
                    el: me.getComponent('editor-left').el.dom,
                    editable: false,
                    copyLinkEnabled: false
                }, left),
                right: Ext.applyIf({
                    el: me.getComponent('editor-right').el.dom,
                    editable: false,
                    copyLinkEnabled: false
                }, right),
                gutter: {
                    el: me.getComponent('gutter').el.dom
                }
            });
        });
    }
});