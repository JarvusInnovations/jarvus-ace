/*jslint browser: true, undef: true *//*global Ext,ace*/
Ext.define('Jarvus.ace.Editor', {
    extend: 'Ext.Component',
    xtype: 'jarvus-ace-editor',

    stateful: true,
    stateId: 'jarvus-ace-editor',

    config: {
        editor: null,
        parentContainer: null,

        options: {
            animatedScroll: false,
            autoScrollEditorIntoView: undefined,
            behavioursEnabled: true,
            cursorStyle: "ace",
            displayIndentGuides: true,
            dragDelay: 0,
            dragEnabled: true,
            enableBlockSelect: true,
            enableMultiselect: true,
            fadeFoldWidgets: false,
            firstLineNumber: 1,
            fixedWidthGutter: undefined,
            focusTimout: 0,
            //foldStyle: undefined, //TODO: error: misspelled option "foldStyle"
            fontFamily: undefined,
            fontSize: 12,
            hScrollBarAlwaysVisible: false,
            highlightActiveLine: true,
            highlightGutterLine: true,
            highlightSelectedWord: true,
            indentedSoftWrap: true,
            keyboardHandler: undefined,
            maxLines: undefined,
            mergeUndoDeltas: true,
            minLines: undefined,
            mode: "ace/mode/text",
            newLineMode: "auto",
            overwrite: false,
            printMargin: 80,
            printMarginColumn: 80,
            readOnly: false,
            scrollPastEnd: 0,
            scrollSpeed: 2,
            selectionStyle: "line",
            showFoldWidgets: true,
            showGutter: true,
            showInvisibles: false,
            showLineNumbers: true,
            showPrintMargin: true,
            tabSize: 4,
            theme: undefined,
            tooltipFollowsMouse: true,
            useSoftTabs: true,
            useWorker: true,
            vScrollBarAlwaysVisible: false,
            wrap: "off",
            wrapBehavioursEnabled: true
        },

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
            options = me.getOptions(),
            editor;

        if (!me.getEditor()) {
            me.setEditor(ace.edit(me.el.id));
        }
        editor = me.getEditor();

        editor.setOptions(options);

        me.attachEvents();
    },

    doOptionChange: function(option,value) {
        var me = this,
            options = me.getOptions();

        options[option] = value;
        me.setOptions(options);

        me.fireEvent('optionchange');
    },

    applyOptions: function(options) {
        return Ext.apply({},options);
    },

    updateOptions: function() {
        var me = this,
            editor = me.getEditor(),
            options = me.getOptions();

        if (editor) {
            me.saveState();
            editor.setOptions(options);
            me.fireEvent('optionschange');
        }
    },

    getOption: function(option) {
        var options = this.getOptions();

        return options[option];
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
        var me = this;

        return {options: me.getOptions()};
    },

    applyState: function(state) {
        var me = this,
            options = Ext.apply({},me.getOptions());

        if (state) {
            if (state.options) {
                Ext.apply(options,state.options);
                me.setOptions(options);
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
