Ext.define('Jarvus.ace.Util', {
    singleton: true,


    basename: function(path) {
        return path.substr(path.lastIndexOf('/') + 1);
    },

    extension: function(path) {
        return path.substr(path.lastIndexOf('.')+1);
    }
});