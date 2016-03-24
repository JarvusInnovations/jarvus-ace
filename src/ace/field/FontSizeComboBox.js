/*jslint browser: true, undef: true *//*global Ext*/
Ext.define('Jarvus.ace.field.FontSizeComboBox', {
    extend: 'Ext.form.field.ComboBox',
    xtype: 'jarvus-ace-field-fontsizecombobox',

    requires: [
        'Jarvus.ace.field.AceOptionField'
    ],

    mixins: {
        acefield: 'Jarvus.ace.field.AceOptionField'
    },

    config: {
        editor: null,
        option: 'fontSize'
    },

    displayField: 'text',
    valueField: 'value',
    queryMode: 'local',
    forceSelection: true,
    grow: true,
    growAppend: 'WW',

    store: {
        fields:['value','text'],
        data: [
            {value: 6,  text: '6px'},
            {value: 7,  text: '7px'},
            {value: 8,  text: '8px'},
            {value: 9,  text: '9px'},
            {value: 10,  text: '10px'},
            {value: 11,  text: '11px'},
            {value: 12,  text: '12px'},
            {value: 13,  text: '13px'},
            {value: 14,  text: '14px'},
            {value: 15,  text: '15px'},
            {value: 16,  text: '16px'},
            {value: 17,  text: '17px'},
            {value: 18,  text: '18px'},
            {value: 19,  text: '19px'},
            {value: 20,  text: '20px'},
            {value: 21,  text: '21px'},
            {value: 22,  text: '22px'},
            {value: 23,  text: '23px'},
            {value: 24,  text: '24px'},
            {value: 25,  text: '25px'},
            {value: 26,  text: '26px'},
            {value: 27,  text: '27px'},
            {value: 28,  text: '28px'},
            {value: 29,  text: '29px'},
            {value: 30,  text: '30px'}
        ]
    }

});
