# jarvus-ace
An ExtJS 6 classic wrapper for the ACE editor

## Package usage
1.  Clone jarvus-ace repository into `${workspace.dir}/packages`
2.  Add `"jarvus-ace"` to the `"requires"` array in `${app.dir}/app.json`
3.  Add `"Jarvus.ace.Editor"` to `requires` array in your Ext JS classes that use the `jarvus-ace-editor` xtype

## Configuration
The jarvus-ace component allows you to configure Ace options and subscribe to Ace events

### Ace Options
The jarvus-ace component uses a singleton configuration class to set the editor's default options.  To see
a full list of available options and their defaults, see the options object in the config attribute of
Jarvus.ace.util.AbstractConfiguration located at src/ace/util.AbstractConfiguration.js.  To alter the
default option values, you can create an override of this class and require it in your Application.

Example:
```
/*
 * app/AceConfiguration.js
 */
Ext.define('MyApplication.AceConfiguration', {
    override: 'Jarvus.ace.util.AbstractConfiguration',

    config: {
        options: {
            theme: 'ace/theme/monokai',
            mode: 'ace/mode/javascript',
            keyboardHandler: 'ace/keyboard/vim',
            fontSize: 24
        }
    }
});
```
The editor configuration is stateful and the most recent editor option configuration will take precedence over
the default values.  If you do not wish for the editor state to be restored over the default options, set
``stateful: false`` in your custom configuration class.

To set options after component instantiation, use the ``setOption(option, value)`` method of
Jarvus.ace.util.AbstractConfiguration.

Example:
```
   myJarvusAceInstance.getConfiguration().setOption('fontSize',16);
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
        'EditorSession': [
            'change'
        ],
        'Document': [
            'change'
        ],
    }
```

Subscribed events will be fired by the jarvus-ace component with the ACE class name and event name concatenated in
lower case.  So, if you subscribe to the change event in the Ace EditSession class, it will be fired by the jarvus-ace
component as ``editorsessionchange``

### Form components for Ace Options
There are form components in the src/ace/field directory that can be included in an application for run time
modification of common ACE options.  These are simple extensions of two base field classes: Jarvus.ace.field.AceOptionCheckbox
for options with boolean values and Jarvus.ace.field.AceOptionComboBox for options with a number of possible options.

