# jarvus-ace
An ExtJS wrapper for the ACE editor

## Package usage
1.  Clone jarvus-ace repository into `${workspace.dir}/packages`
2.  Add `"jarvus-ace"` to the `"requires"` array in `${app.dir}/app.json`
3.  Add `"Jarvus.ace.Editor"` to `requires` array in your Ext JS classes that use the `jarvus-ace-editor` xtype

## Configuration
The jarvus-ace component allows you to configure Ace options and subscribe to Ace events

### Ace Options
The jarvus-ace component has an "options" configuration parameter that allows for the configuration of available
ACE options when the componet is extended or created inline. To see a full list of available options and thier
defaults, see the options object in the config attribute of Jarvus.ace.Editor located at src/ace/Editor.js

Example:
```
    // Ace configuration
    options: {
        theme: 'ace/theme/monokai',
        mode: 'ace/mode/javascript',
        keyboardHandler: 'ace/keyboard/vim',
        showPrintMargin: true,
        printMarginColumn: 20,
        fontSize: 24
    },
```

To set options after component instantiation, doOptionChange(option, value) method of Jarvus.ace.Editor.

Example:
```
   myJarvusAceInstance.doOptionChange('fontSize', 16);
```


