/*jslint browser: true, undef: true *//*global Ext*/
/**
 *
 */
Ext.define('Jarvus.ace.field.ThemeSelect', {
    extend: 'Jarvus.ace.field.AceOptionSelect',
    xtype: 'jarvus-ace-field-themeselect',

    config: {
        option: 'theme'
    },

    options: [
        {value: 'light',  text: '------ Light themes ------'},
        {value: 'ace/theme/chrome',  text: 'Chrome'},
        {value: 'ace/theme/clouds',  text: 'Clouds'},
        {value: 'ace/theme/crimson_editor',  text: 'Crimson Editor'},
        {value: 'ace/theme/dawn',  text: 'Dawn'},
        {value: 'ace/theme/dreamweaver',  text: 'Dreamweaver'},
        {value: 'ace/theme/eclipse',  text: 'Eclipse'},
        {value: 'ace/theme/github',  text: 'GitHub'},
        {value: 'ace/theme/iplastic',  text: 'IPlastic'},
        {value: 'ace/theme/solarized_light',  text: 'Solarized Light'},
        {value: 'ace/theme/textmate',  text: 'TextMate'},
        {value: 'ace/theme/tomorrow',  text: 'Tomorrow'},
        {value: 'ace/theme/xcode',  text: 'XCode'},
        {value: 'ace/theme/kuroir',  text: 'Kuroir'},
        {value: 'ace/theme/katzenmilch',  text: 'KatzenMilch'},
        {value: 'ace/theme/sqlserver',  text: 'SQL Server'},
        {value: 'dark',  text: '------ Dark themes ------'},
        {value: 'ace/theme/ambiance',  text: 'Ambiance'},
        {value: 'ace/theme/chaos',  text: 'Chaos'},
        {value: 'ace/theme/clouds_midnight',  text: 'Clouds Midnight'},
        {value: 'ace/theme/cobalt',  text: 'Cobalt'},
        {value: 'ace/theme/idle_fingers',  text: 'idle Fingers'},
        {value: 'ace/theme/iceberg',  text: 'Iceberg'},
        {value: 'ace/theme/kr_theme',  text: 'krTheme'},
        {value: 'ace/theme/merbivore',  text: 'Merbivore'},
        {value: 'ace/theme/merbivore_soft',  text: 'Merbivore Soft'},
        {value: 'ace/theme/mono_industrial',  text: 'Mono Industrial'},
        {value: 'ace/theme/monokai',  text: 'Monokai'},
        {value: 'ace/theme/pastel_on_dark',  text: 'Pastel on dark'},
        {value: 'ace/theme/solarized_dark',  text: 'Solarized Dark'},
        {value: 'ace/theme/terminal',  text: 'Terminal'},
        {value: 'ace/theme/tomorrow_night',  text: 'Tomorrow Night'},
        {value: 'ace/theme/tomorrow_night_blue',  text: 'Tomorrow Night Blue'},
        {value: 'ace/theme/tomorrow_night_bright',  text: 'Tomorrow Night Bright'},
        {value: 'ace/theme/tomorrow_night_eighties',  text: 'Tomorrow Night 80s'},
        {value: 'ace/theme/twilight',  text: 'Twilight'},
        {value: 'ace/theme/vibrant_ink',  text: 'Vibrant Ink'}
    ]
});
