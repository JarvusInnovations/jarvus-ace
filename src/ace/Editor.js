/*jslint browser: true, undef: true *//*global Ext,ace*/
Ext.define('Jarvus.ace.Editor', {
    extend: 'Ext.Component',
    xtype: 'jarvus-ace-editor',

    config: {
        editor: null,
        parentContainer: null,

        theme: '',
        mode: '',
        fontSize: 12,
        keyboardHandler: '',
        showPrintMargin: false,
        printMarginColumn: 80,
        useWrapMode: false,

        subscribe: null
    },

    initComponent: function() {
        var me = this;

        me.setParentContainer(me.up('container'));
    },

    afterRender: function() {
        var me = this;
        console.log('afterrender');

        me.initEditor();
        me.syncSize();
    },

    initEditor: function() {
        var me = this,
            editor;

        if (!me.getEditor()) {
            me.setEditor(ace.edit(me.el.id));
        }
        editor = me.getEditor();

        // Config options
        me.setTheme(me.getTheme());
        me.setMode(me.getMode());
        me.setFontSize(me.getFontSize());
        me.setKeyboardHandler(me.getKeyboardHandler());
        me.setShowPrintMargin(me.getShowPrintMargin());
        me.setPrintMarginColumn(me.getPrintMarginColumn());
        me.setUseWrapMode(me.getUseWrapMode());

        me.attachEvents();
    },

    applyTheme: function(theme) {
        console.log('applying theme: '+theme);
        var editor = this.getEditor();

        if (editor) {
            editor.setTheme(theme);
        }
        return theme;
    },

    applyMode: function(mode) {
        var editor = this.getEditor();

        if (editor) {
            editor.getSession().setMode(mode);
        }
        return mode;
    },

    applyFontSize: function(fontSize) {
        var editor = this.getEditor();

        if (editor) {
            editor.setFontSize(fontSize);
        }
        return fontSize;
    },

    applyKeyboardHandler: function(keyboardHandler) {
        var editor = this.getEditor();

        if (editor) {
            editor.setKeyboardHandler(keyboardHandler);
        }
        return keyboardHandler;
    },

    applyShowPrintMargin: function(showPrintMargin) {
        var editor = this.getEditor();

        if (editor) {
            editor.setShowPrintMargin(showPrintMargin);
        }
        return showPrintMargin;
    },

    applyPrintMarginColumn: function(printMarginColumn) {
        var editor = this.getEditor();

        if (editor) {
            editor.setPrintMarginColumn(printMarginColumn);
        }
        return printMarginColumn;
    },

    applyUseWrapMode: function(useWrapMode) {
        var editor = this.getEditor();

        if (editor) {
            editor.getSession().setUseWrapMode(useWrapMode);
        }
        return useWrapMode;
    },

    attachEvents: function() {
        var me = this,
            domains = me.getSubscribe();

        if (domains) {
            Ext.iterate(domains, function(domain,events) {
                Ext.each(events, function(e) {
                    me.bubbleEvent(domain,e);
                });
            });
        }
    },

    bubbleEvent: function(eventDomain, eventName) {
        var me = this,
            editorClass = null;

        switch (eventDomain) {
            case 'Editor':
                editorClass = me.getEditor();
                break;
            case 'EditorSession':
                editorClass = me.getEditor().getSession();
                break;
        }

        if (editorClass) {
            editorClass.on(eventName, function() {
                console.log((eventDomain+eventName).toLowerCase());
                me.fireEvent((eventDomain+eventName).toLowerCase(),arguments);
            });
        }
    },

    // TODO: should this be necessary?  getting no height with fit layout.
    syncSize: function() {
        var me = this,
            size = me.getParentContainer().getSize();

        me.setHeight(size.height);
        me.setWidth(size.width);
    }

});
