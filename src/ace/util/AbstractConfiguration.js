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

    stateful: true,
    stateId: '',
    stateEvents: ['optionchange'],

    constructor: function (config) {
        var me = this;

        me.stateId = me.self.getName().toLowerCase().replace(/\./g,'-');

        me.mixins.observable.constructor.call(me, config);
        me.mixins.state.constructor.call(me, config);
    },

    // stateful apparently calls this function without checking if it exists
    getPlugins: function() { return []; },

    config: {
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

    getOption: function(key) {
        var options = this.getOptions();

        return options ? options[key] : null;
    },

    setOption: function(key, val) {
        var me = this,
            options = this.getOptions();

        if (options) {
            options[key] = val;
        }
        me.fireEvent('optionchange',me,key,val);
    },

    //@private
    getState: function() {
        var options = this.getOptions();

        if (options.mode) {
            delete(options.mode);
        }

        return {options: options};
    },

    //@private
    applyState: function(state) {
        if (state && state.options) {
            Ext.apply(this.setOptions(state.options));
        }
    }

});
