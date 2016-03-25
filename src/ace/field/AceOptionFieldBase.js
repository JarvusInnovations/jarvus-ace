/*jslint browser: true, undef: true *//*global Ext*/
Ext.define('Jarvus.ace.field.AceOptionFieldBase', {
    extend: 'Ext.Mixin',

    mixinConfig: {
        id: 'acefield'
    },

    /**
     * @cfg {String} aceSettingsField Identifies this component as an aceSettingsField
     * @cfg {String[]} editorItemIds an array of itemIDs of editors using this component
     * @cfg {Javus.ace.Editor[]} editors an array of editors using this component
     */
    config: {
        aceSettingsField: true,
        editorItemId: [],
        editors: []
    },

    /**
     * @private
     * Configure ItemID of editors to connect to this component
     *
     * @param {String/String[]} editorItemId ItemId of the editor to add, or an an array of ItemIds
     */
    applyEditorItemId: function(editorItemId) {
        return Ext.isString(editorItemId) ? [editorItemId] : editorItemId;
    },

    /**
     * @private
     * Determine if this component is associated with the editor(s) using the passed ItemId.
     * This method is used by a ComponentQuery in instances of {Jarvus.ace.Editor} when they are rendered
     * to determine if they should associate themselves with this component
     *
     * @param {String} editorItemId ItemId of the editor to check association with this component
     */
    hasEditorItemId: function(editorItemId) {
        var me = this;
            myEditorItemIds = me.getEditorItemId();

        if (myEditorItemIds && Ext.isArray(myEditorItemIds)) {
            return myEditorItemIds.indexOf(editorItemId)>=0;
        }
        return false;
    },

    /**
     * Associate an editor with this component.
     *
     * @param {Javus.ace.Editor[]}  editor the editor to be associated with this component
     */
    applyEditors: function (editor) {
        var me = this,
            editorLength,
            i = 0;
            editors = me.getEditors();

        if (!Ext.isArray(editor)) {
            editor = [editor];
        }

        editorLength = editor.length;

        for (;i<editorLength;i++) {
            me.initEditorRelationship(editor[i]);
        }

        return Ext.Array.merge(editors,editor);
    },

    initEditorRelationship: function(editor) {
        var me = this;

        me.displayCurrentValue(editor);

        editor.on('optionschange', function() {
            me.displayCurrentValue(editor);
        });

        me.addListeners(editor);
    },

    addListeners: function() {
        console.warn('this should be implemented in classes that use mixin');
    },

    displayCurrentValue: function() {
        console.warn('this should be implemented in classes that use mixin');
    }
});
