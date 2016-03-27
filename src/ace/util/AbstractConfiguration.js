/*jslint browser: true, undef: true *//*global Ext*/
/**
 * @abstract
 * An abstract class for singletons that manages editor configuration and state
 */
Ext.define('Jarvus.ace.util.AbstractConfiguration', {
    mixins: [
        'Ext.mixin.Observable',
        'Ext.state.Stateful'
    ],

    constructor: function (config) {
        var me = this;

        me.mixins.observable.constructor.call(me, config);
        me.mixins.state.constructor.call(me);
    },

    stateful: true,
    stateId: 'jarvus-ace-editor',
    stateEvents: ['optionchanged'],

    addStateEvents: function(){},

    config: {
    plugins: [],
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
        }
    },

    get: function(key) {
        var options = this.getOptions();

        return options ? options[key] : null;
    },

    set: function(key, val) {
        var me = this,
            options = this.getOptions();

        if (options) {
            options[key] = val;
        }
    //    me.saveState();
        me.fireEvent('optionchange',me,key,val);
    },


    //@private
    getState: function() {
        console.log('saving state....');
        var me = this;

        return {options: me.getOptions()};
    },

    //@private
    applyState: function(state) {
        console.log('********* Apply State *********');
        console.log(state);
        var me = this,
            options = Ext.apply({},me.getOptions());

        if (state) {
            if (state.options) {
                Ext.apply(options,state.options);
                me.setOptions(options);
            }
        }
    }

});
