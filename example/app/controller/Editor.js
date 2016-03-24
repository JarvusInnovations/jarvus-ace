/*jslint browser: true, undef: true *//*global Ext*/
Ext.define('JarvusAceDemo.controller.Editor', {
    extend: 'Ext.app.Controller',

    // entry points
    control: {
        'jarvus-ace-editor': {
            afterrender: 'onJarvusAceAfterRender',
            documentchange: 'onDocumentChange',
            editorblur: 'onEditorBlur',
            editorchange: 'onEditorChange'
        }
    },

    // controller configuration
    views: [
        'editor.Frame',
        'editor.Panel',
        'editor.Settings'
    ],

    refs: {
        editor: 'jarvus-ace-editor'
    },

    // event handlers
    onJarvusAceAfterRender: function() {
        this.getEditor().getEditor().getSession().setValue(
            'function foo(items, nada) {\n' +
            '    for (var i=0; i<items.length; i++) {\n' +
            '        alert(items[i] + "jarvus");\n' +
            '    }   // Real Tab.\n' +
            '}\n'
        );
    },

    onEditorBlur: function() {
        console.log('editor blur');
    },

    onEditorChange: function() {
        console.log('editor change');
    },

    onDocumentChange: function() {
        console.log('document change');
    }

});
