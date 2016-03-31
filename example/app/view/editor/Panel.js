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
