/*jslint browser: true, undef: true *//*global Ext*/
Ext.define('JarvusAceDemo.view.editor.Settings', {
    extend: 'Ext.Panel',
    xtype: 'editor-settings',

    requires: [
        'Jarvus.ace.field.ThemeComboBox',
        'Jarvus.ace.field.ModeComboBox',
        'Jarvus.ace.field.FontSizeComboBox',
        'Jarvus.ace.field.KeyboardHandlerComboBox',
        'Jarvus.ace.field.ShowInvisiblesCheckbox',
        'Jarvus.ace.field.ShowGutterCheckbox'
    ],

    layout: 'form',

    items: [{
        xtype: 'jarvus-ace-field-themecombobox',
        fieldLabel: 'theme'
    },{
        xtype: 'jarvus-ace-field-fontsizecombobox',
        fieldLabel: 'Font size'
    },{
        xtype: 'jarvus-ace-field-modecombobox',
        fieldLabel: 'mode'
    },{
        xtype: 'jarvus-ace-field-keyboardhandlercombobox',
        fieldLabel: 'keyboard'
    },{
        xtype: 'jarvus-ace-field-showinvisiblescheckbox'
    },{
        xtype: 'jarvus-ace-field-showguttercheckbox'
    }]

});
