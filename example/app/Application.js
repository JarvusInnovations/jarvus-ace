/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('JarvusAceDemo.Application', {
    extend: 'Ext.app.Application',

    name: 'JarvusAceDemo',

    controllers: [
        'Editor'
    ],

    init: function () {
        Ext.state.Manager.setProvider(new Ext.state.CookieProvider());
    },

    launch: function () {
        // TODO - Launch the application
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
