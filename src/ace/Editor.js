/*jslint browser: true, undef: true *//*global Ext,ace*/
Ext.define('Jarvus.ace.Editor', {
    extend: 'Ext.Component',
    xtype: 'jarvus-ace-editor',

    stateful: true,
    stateId: 'jarvus-ace-editor',

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

        me.applyState();

        // Config options
        //me.setTheme(me.getTheme());
        editor.setTheme(me.getTheme());
        me.setMode(me.getMode());
        me.setFontSize(me.getFontSize());
        me.setKeyboardHandler(me.getKeyboardHandler());
        me.setShowPrintMargin(me.getShowPrintMargin());
        me.setPrintMarginColumn(me.getPrintMarginColumn());
        me.setUseWrapMode(me.getUseWrapMode());

        me.attachEvents();
    },

    applyTheme: function(theme) {
        var editor = this.getEditor();

        if (editor) {
            editor.setTheme(theme);
        }
        return theme;
    },

    updateTheme: function() {
        var me = this;

        if (me.getEditor()) {
            me.saveState();
            me.fireEvent('themechange');
        }
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
                aceClass = me.getEditor().getSession().getDocument();
                break;
            case 'Editor':
                aceClass = me.getEditor();
                break;
            case 'EditorSession':
                aceClass = me.getEditor().getSession();
                break;
            case 'Selection':
                aceClass = me.getEditor().getSession().getSelection();
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
    },

    getState: function() {
        return { theme: this.getTheme() };
    },

    applyState: function(state) {
        var me = this;

        if (state) {
            if (state.theme) {
                me.setTheme(state.theme);
            }
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
