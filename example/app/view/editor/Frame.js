/*jslint browser: true, undef: true *//*global Ext*/
Ext.define('JarvusAceDemo.view.editor.Frame', {
    extend: 'Ext.Panel',
    xtype: 'editor-frame',

    title: 'jarvus-ace package demo',

    requires: [
        'JarvusAceDemo.view.editor.Settings',
        'JarvusAceDemo.view.editor.Toolbar',
        'JarvusAceDemo.view.editor.Panel'
    ],

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    items: [{
        xtype: 'editor-settings',
        flex: 4
    },{
        xtype: 'editor-panel',
        flex: 10
    }],

    dockedItems: [{
        xtype: 'editor-toolbar',
        dock: 'top'
    }]

});
