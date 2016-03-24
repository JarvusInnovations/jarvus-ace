/*jslint browser: true, undef: true *//*global Ext*/
Ext.define('JarvusAceDemo.view.editor.Toolbar', {
    extend: 'Ext.toolbar.Toolbar',
    xtype: 'editor-toolbar',

    requires: [
        'Jarvus.ace.field.ThemeComboBox',
        'Jarvus.ace.field.ModeComboBox',
        'Jarvus.ace.field.FontSizeComboBox',
        'Jarvus.ace.field.KeyboardHandlerComboBox',
        'Jarvus.ace.field.ShowInvisiblesCheckbox',
        'Jarvus.ace.field.ShowGutterCheckbox'
    ],

    items: [{
        xtype: 'jarvus-ace-field-themecombobox'
    },{
        xtype: 'jarvus-ace-field-fontsizecombobox'
    },{
        xtype: 'jarvus-ace-field-modecombobox'
    },{
        xtype: 'jarvus-ace-field-keyboardhandlercombobox'
    },{
        xtype: 'jarvus-ace-field-showinvisiblescheckbox'
    },{
        xtype: 'jarvus-ace-field-showguttercheckbox'
    }]

});
