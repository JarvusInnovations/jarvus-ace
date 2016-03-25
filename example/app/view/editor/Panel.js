/*jslint browser: true, undef: true *//*global Ext*/
Ext.define('JarvusAceDemo.view.editor.Panel', {
    extend: 'Ext.Panel',
    xtype: 'editor-panel',

    requires: [
        'Jarvus.ace.Editor'
    ],

    layout: 'fit',

    items: [{
        xtype: 'jarvus-ace-editor',

        // Ace configuration
        options: {
            theme: 'ace/theme/monokai',
            mode: 'ace/mode/javascript',
            keyboardHandler: 'ace/keyboard/vim',
            showPrintMargin: true,
            printMarginColumn: 20,
            fontSize: 24
        },

        // subcribe to ACE events
        subscribe: {
            'Document': [
                'change'
            ],
            'Editor': [
                'blur',
                'change'
            ],
            'EditSession': [
                'change'
            ],
            'Selection': [
                'selectionchange'
            ]
        }
    }]

});
