Ext.define('Jarvus.ace.Panel', {
    extend: 'Ext.Panel',
    xtype: 'acepanel',
    requires: [
        /* globals Jarvus */
        'Jarvus.ace.Loader'
    ],


    config: {
        path: null,
        line: null,

        mode: null,
        theme: 'ace/theme/monokai',
        tabSize: 4,
        softTabs: true,
        showPrintMargin: false,
        showInvisibles: true,
        displayIndentGuides: true
    },

    statics: {
        extensionModes: {
            tpl: 'smarty'
        },
        modeIcons: {
            _default: 'file-code-o',
            text: 'file-text-o',
        }
    },


    // lifecycle methods
    afterRender: function() {
        var me = this;

        me.callParent(arguments);

        Jarvus.ace.Loader.withAce(function(ace) {
            var aceEditor = ace.edit(me.getTargetEl().dom),
                aceSession = aceEditor.getSession();

            me.aceEditor = aceEditor;

            // configure editor
            aceEditor.setTheme(me.getTheme());
            aceEditor.setShowPrintMargin(me.getShowPrintMargin());
            aceEditor.setShowInvisibles(me.getShowInvisibles());
            aceEditor.setDisplayIndentGuides(me.getDisplayIndentGuides());
            aceSession.setTabSize(me.getTabSize());
            aceSession.setUseSoftTabs(me.getSoftTabs());

            // listen for changes to mark dirty
            aceEditor.on('input', Ext.bind(me.onEditorInput, me));

            // disable built in find dialog
            aceEditor.commands.removeCommand('find');

            // fire editorready event
            me.fireEvent('editorready', me, aceEditor, aceSession);
        });
    },


    // config handlers
    updatePath: function(path, oldPath) {
        var me = this;

        me.setTitle(path ? path.substr(path.lastIndexOf('/') + 1) : me.getInitialConfig('title'));

        Jarvus.ace.Loader.withAce(function(ace) {
            var aceModelist = ace.require('ace/ext/modelist'),
                mode;

            mode = aceModelist.modesByName[me.self.extensionModes[path.substr(path.lastIndexOf('.')+1)]];

            if (!mode) {
                mode = aceModelist.getModeForPath(path);
            }

            if (mode) {
                me.setMode(mode);
            }
        });

        me.fireEvent('pathchange', me, path, oldPath);
    },

    updateMode: function(mode, oldMode) {
        var me = this,
            modeIcons = me.self.modeIcons,
            iconCls = modeIcons[mode.name] || modeIcons._default;

        if (iconCls) {
            iconCls = 'x-fa fa-'+iconCls;
        }

        me.setIconCls(iconCls);

        me.withEditor(function (acePanel, aceEditor, aceSession) {
            aceSession.setMode(mode.mode);
        });

        me.fireEvent('modehange', me, mode, oldMode);
    },


    // event handlers
    onEditorInput: function() {
        var me = this,
            aceEditor = me.aceEditor,
            aceSession = aceEditor.getSession(),
            isClean = aceSession.getUndoManager().isClean();

        me.fireEvent('input', me, aceEditor, aceSession);

        if (me.dirty != !isClean) {
            me.dirty = !isClean;
            me.fireEvent('dirtychange', me, !isClean, aceEditor, aceSession);
        }
    },


    // public methods
    withEditor: function(onReady, scope) {
        var me = this,
            aceEditor = me.aceEditor;

        scope = scope || me;

        if (aceEditor) {
            onReady.call(scope, me, aceEditor, aceEditor.getSession());
        } else {
            me.on('editorready', onReady, scope, { single: true });
        }
    },

    loadContent: function(content, callback, scope) {
        var me = this;

        me.withEditor(function(acePanel, aceEditor, aceSession) {
            aceSession.setValue(content);
            me.dirty = false;
            Ext.callback(callback, scope || me);
        })
    },

    isDirty: function() {
        return this.dirty;
    }

    // setSplit: function(value) {
    //     var sp = this.split;

    //     if (value == 'none') {
    //         if (sp.getSplits() == 2) {
    //             secondSession = sp.getEditor(1).session;
    //         }
    //         sp.setSplits(1);
    //     } else {
    //         var newEditor = sp.getSplits() == 1;

    //         if (value == 'below') {
    //             sp.setOriantation(sp.BELOW);
    //         } else {
    //             sp.setOriantation(sp.BESIDE);
    //         }
    //         sp.setSplits(2);

    //         if (newEditor) {
    //             var session = this.secondSession || sp.getEditor(0).session;
    //             var newSession = sp.setSession(session, 1);

    //             newSession.name = session.name;
    //         }
    //     }
    // },
    // onResize: function() {
    //     debugger
    //     // this.aceEditor.container.style.width = this.el.dom.style.width;
    //     // this.aceEditor.container.style.height = this.el.dom.style.height;
    //     // this.aceEditor.resize();
    // },
    // onEditorChange: function() {

    //     if (this.loadedValue && !this.fileDirty) {
    //         this.fileDirty = true;
    //         this.tab.setText(this.tab.text+'*');
    //     }
    // },

    // onEditorUndo: function() {
    //     if (this.fileDirty && this.loadedValue == this.getValue()) {
    //         this.fileDirty = false;
    //         this.tab.setText(this.tab.text.substr(0, this.tab.text.length-1));
    //     }
    // },


    // loadFile: function(path) {

    //     if (path) {
    //         this.path = path;
    //     }

    //     this.setLoading({ msg: 'Opening /' + this.path }); // enable loading mask

    //     // console.log(this.isRevision);

    //     if (this.isRevision) {
    //         EmergenceEditor.store.DavClient.getRevision(this.path, this.revisionID, this.afterLoadFile, this);
    //     } else {
    //         EmergenceEditor.store.DavClient.getFile(this.path, this.afterLoadFile, this);
    //     }
    // },
    // afterLoadFile: function(response) {

    //     this.revisionID = response.getResponseHeader('X-VFS-ID');
    //     this.contentType = response.getResponseHeader('Content-Type');

    //     // set tab icon
    //     this.tab.setIcon(this.getIcon(this.contentType));

    //     // set editor mode
    //     var mode = this.getFileMode(this.contentType);

    //     if (mode) {
    //         this.aceEditor.getSession().setMode(new (require('ace/mode/' + mode).Mode)());
    //     }

    //     // set editor content
    //     this.setValue(response.responseText);

    //     this.scanCode(mode, response.responseText);

    //     // set line
    //     this.aceEditor.gotoLine(this.initialLine);

    //     // clear loading  mask
    //     this.setLoading(false);

    //     EmergenceEditor.app.fireEvent('afterloadfile', this, this.revisionID, response);
    // },
    // saveFile: function() {
    //     this.tab.setIcon('/img/loaders/spinner.gif');

    //     var fileData = this.getValue();

    //     EmergenceEditor.store.DavClient.writeFile(this.path, fileData, this.afterSaveFile, this);
    // },
    // afterSaveFile: function(response) {
    //     if (this.fileDirty) {
    //         this.fileDirty = false;
    //         this.tab.setText(this.tab.text.substr(0, this.tab.text.length-1));
    //     }

    //     this.loadedValue = response.request.options.params;

    //     this.tab.setIcon(this.getIcon(this.contentType));
    // },
    // getValue: function() {
    //     return this.aceEditor.getSession().getValue();
    // },

    // setValue: function(value) {
    //     this.aceEditor.getSession().setValue(value);
    //     this.loadedValue = value; // store original text for dirty tracking
    //     return true;
    // },


    // getFileMode: function(mimeType) {
    //     switch (mimeType) {
    //         case 'application/javascript':
    //             return 'javascript';

    //         case 'application/php':
    //             return 'php';

    //         case 'text/html':
    //         case 'text/x-c++':
    //         case 'text/plain':
    //             return 'html';

    //         case 'text/css':
    //             return 'css';

    //         case 'text/x-scss':
    //             return 'scss';

    //         case 'text/x-dwoo':
    //         case 'text/x-smarty':
    //         case 'text/x-html-template':
    //             return 'html';

    //         default:
    //             return false;
    //     }
    // },
    // getIcon: function(mimeType) {
    //     switch (mimeType) {
    //         case 'application/javascript':
    //             return '/img/icons/fugue/blue-document-text.png';

    //         case 'application/php':
    //             return '/img/icons/fugue/blue-document-php.png';

    //         case 'text/html':
    //         case 'text/x-c++':
    //         case 'text/plain':
    //             return '/img/icons/fugue/blue-document-text.png';

    //         case 'text/css':
    //             return '/img/icons/fugue/blue-document-text.png';

    //         default:
    //             return '/img/icons/fugue/blue-document.png';
    //     }
    // },
    // scanCode: function(mime, code) {
    //     switch (mime) {
    //         case 'application/javascript':
    //             return this.scanJS(code);

    //         case 'application/php':
    //             return this.scanPHP(code);

    //         default:
    //             return false;
    //     }
    // },
    // scanJS: function(code) {
    //     parse(code);
    // },
    // scanPHP: function(code) {

    // }
});