# jarvus-ace
An ExtJS 6 classic wrapper for the ACE editor

## Package usage
1.  Clone jarvus-ace repository into `${workspace.dir}/packages`
2.  Add `"jarvus-ace"` to the `"requires"` array in `${app.dir}/app.json`
3.  Add `"Jarvus.ace.Editor"` to `requires` array in your Ext JS classes that use the `jarvus-ace-editor` xtype

## Configuration
The jarvus-ace component allows you to configure Ace options and subscribe to Ace events

### Ace Options
The jarvus-ace component has an "options" configuration parameter that allows for the configuration of available
ACE options when the component is extended or created inline. To see a full list of available options and their
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

To set options after component instantiation, use the ``doOptionChange(option, value)`` method of Jarvus.ace.Editor.

Example:
```
   myJarvusAceInstance.doOptionChange('fontSize', 16);
```

### Ace Events
The jarvus-ace component has an "subscribe" configuration parameter that allows events to be relayed from ACE classes
to the component so they can be handled by an ExtJS controller.  The subscribe parameter should be an object with ACE
class names as properties and arrays of event names as values.

Example:
```
    // subcribe to ACE events
    subscribe: {
        'Editor': [
            'blur',
            'change'
        ],
        'EditSession': [
            'change'
        ],
        'Document': [
            'change'
        ],
    }
```

Subscribed events will be fired by the jarvus-ace component with the ACE class name and event name concatenated in
lower case.  So, if you subscribe to the change event in the Ace EditSession class, it will be fired by the jarvus-ace
component as ``editsessionchange``

### Form components for Ace Options
There are form components in the src/ace/field directory that can be included in an application for run time
modification of common ACE options.  These are simple extensions of Ext JS field classes with a mixin that handles
interaction with the ACE editor.  You may require and instantiate these classes in your application, or use them as
templates if you wish to create a form component for an ACE option that is not handled by the existing form component
classes.

## To do and known issues

* While the jarvus-ace component should work with both Ext JS 6 modern and classic toolkits, the form components
for adjusting ACE options in the src/ace/field directory will only work with the classic toolkit and will cause CMD build
errors if your application uses the modern toolkit.  A solution to this issue may be to move these field components to
their own repo with framework and toolkit specific branches.  For now, if you wish to use the jarvus-ace component with
the modern toolkit, delete the files in the src/ace/field directory and you should be able to build successfully.

* I am so far unable to figure out how to change back to the default keyboardHandler after changing to the vim or emacs
keyboard handler.  The ACE kitchen sink does it so I need to examine that code to discover how it is done.

* Test/adapt for compatibility with Ext JS 5? maybe...

