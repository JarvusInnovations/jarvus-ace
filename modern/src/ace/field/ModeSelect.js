/*jslint browser: true, undef: true *//*global Ext*/
/**
 *
 */
Ext.define('Jarvus.ace.field.ModeSelect', {
    extend: 'Jarvus.ace.field.AceOptionSelect',
    xtype: 'jarvus-ace-field-modeselect',

    config: {
        option: 'mode'
    },

    options: [
        {value: 'ace/mode/abap',  text: 'ABAP'},
        {value: 'ace/mode/abc',  text: 'ABC'},
        {value: 'ace/mode/actionscript',  text: 'ActionScript'},
        {value: 'ace/mode/ada',  text: 'ADA'},
        {value: 'ace/mode/apache_conf',  text: 'Apache Conf'},
        {value: 'ace/mode/asciidoc',  text: 'AsciiDoc'},
        {value: 'ace/mode/assembly_x86',  text: 'Assembly x86'},
        {value: 'ace/mode/autohotkey',  text: 'AutoHotKey'},
        {value: 'ace/mode/batchfile',  text: 'BatchFile'},
        {value: 'ace/mode/c_cpp',  text: 'C and C++'},
        {value: 'ace/mode/c9search',  text: 'C9Search'},
        {value: 'ace/mode/cirru',  text: 'Cirru'},
        {value: 'ace/mode/clojure',  text: 'Clojure'},
        {value: 'ace/mode/cobol',  text: 'Cobol'},
        {value: 'ace/mode/coffee',  text: 'CoffeeScript'},
        {value: 'ace/mode/coldfusion',  text: 'ColdFusion'},
        {value: 'ace/mode/csharp',  text: 'C#'},
        {value: 'ace/mode/css',  text: 'CSS'},
        {value: 'ace/mode/curly',  text: 'Curly'},
        {value: 'ace/mode/d',  text: 'D'},
        {value: 'ace/mode/dart',  text: 'Dart'},
        {value: 'ace/mode/diff',  text: 'Diff'},
        {value: 'ace/mode/dockerfile',  text: 'Dockerfile'},
        {value: 'ace/mode/dot',  text: 'Dot'},
        {value: 'ace/mode/dummy',  text: 'Dummy'},
        {value: 'ace/mode/dummysyntax',  text: 'DummySyntax'},
        {value: 'ace/mode/eiffel',  text: 'Eiffel'},
        {value: 'ace/mode/ejs',  text: 'EJS'},
        {value: 'ace/mode/elixir',  text: 'Elixir'},
        {value: 'ace/mode/elm',  text: 'Elm'},
        {value: 'ace/mode/erlang',  text: 'Erlang'},
        {value: 'ace/mode/forth',  text: 'Forth'},
        {value: 'ace/mode/ftl',  text: 'FreeMarker'},
        {value: 'ace/mode/gcode',  text: 'Gcode'},
        {value: 'ace/mode/gherkin',  text: 'Gherkin'},
        {value: 'ace/mode/gitignore',  text: 'Gitignore'},
        {value: 'ace/mode/glsl',  text: 'Glsl'},
        {value: 'ace/mode/gobstones',  text: 'Gobstones'},
        {value: 'ace/mode/golang',  text: 'Go'},
        {value: 'ace/mode/groovy',  text: 'Groovy'},
        {value: 'ace/mode/haml',  text: 'HAML'},
        {value: 'ace/mode/handlebars',  text: 'Handlebars'},
        {value: 'ace/mode/haskell',  text: 'Haskell'},
        {value: 'ace/mode/haxe',  text: 'haXe'},
        {value: 'ace/mode/html',  text: 'HTML'},
        {value: 'ace/mode/html_elixir',  text: 'HTML (Elixir)'},
        {value: 'ace/mode/html_ruby',  text: 'HTML (Ruby)'},
        {value: 'ace/mode/ini',  text: 'INI'},
        {value: 'ace/mode/io',  text: 'Io'},
        {value: 'ace/mode/jack',  text: 'Jack'},
        {value: 'ace/mode/jade',  text: 'Jade'},
        {value: 'ace/mode/java',  text: 'Java'},
        {value: 'ace/mode/javascript',  text: 'JavaScript'},
        {value: 'ace/mode/json',  text: 'JSON'},
        {value: 'ace/mode/jsoniq',  text: 'JSONiq'},
        {value: 'ace/mode/jsp',  text: 'JSP'},
        {value: 'ace/mode/jsx',  text: 'JSX'},
        {value: 'ace/mode/julia',  text: 'Julia'},
        {value: 'ace/mode/latex',  text: 'LaTeX'},
        {value: 'ace/mode/lean',  text: 'Lean'},
        {value: 'ace/mode/less',  text: 'LESS'},
        {value: 'ace/mode/liquid',  text: 'Liquid'},
        {value: 'ace/mode/lisp',  text: 'Lisp'},
        {value: 'ace/mode/livescript',  text: 'LiveScript'},
        {value: 'ace/mode/logiql',  text: 'LogiQL'},
        {value: 'ace/mode/lsl',  text: 'LSL'},
        {value: 'ace/mode/lua',  text: 'Lua'},
        {value: 'ace/mode/luapage',  text: 'LuaPage'},
        {value: 'ace/mode/lucene',  text: 'Lucene'},
        {value: 'ace/mode/makefile',  text: 'Makefile'},
        {value: 'ace/mode/markdown',  text: 'Markdown'},
        {value: 'ace/mode/mask',  text: 'Mask'},
        {value: 'ace/mode/matlab',  text: 'MATLAB'},
        {value: 'ace/mode/maze',  text: 'Maze'},
        {value: 'ace/mode/mel',  text: 'MEL'},
        {value: 'ace/mode/mushcode',  text: 'MUSHCode'},
        {value: 'ace/mode/mysql',  text: 'MySQL'},
        {value: 'ace/mode/nix',  text: 'Nix'},
        {value: 'ace/mode/nsis',  text: 'NSIS'},
        {value: 'ace/mode/objectivec',  text: 'Objective-C'},
        {value: 'ace/mode/ocaml',  text: 'OCaml'},
        {value: 'ace/mode/pascal',  text: 'Pascal'},
        {value: 'ace/mode/perl',  text: 'Perl'},
        {value: 'ace/mode/pgsql',  text: 'pgSQL'},
        {value: 'ace/mode/php',  text: 'PHP'},
        {value: 'ace/mode/powershell',  text: 'Powershell'},
        {value: 'ace/mode/praat',  text: 'Praat'},
        {value: 'ace/mode/prolog',  text: 'Prolog'},
        {value: 'ace/mode/properties',  text: 'Properties'},
        {value: 'ace/mode/protobuf',  text: 'Protobuf'},
        {value: 'ace/mode/python',  text: 'Python'},
        {value: 'ace/mode/r',  text: 'R'},
        {value: 'ace/mode/razor',  text: 'Razor'},
        {value: 'ace/mode/rdoc',  text: 'RDoc'},
        {value: 'ace/mode/rhtml',  text: 'RHTML'},
        {value: 'ace/mode/rst',  text: 'RST'},
        {value: 'ace/mode/ruby',  text: 'Ruby'},
        {value: 'ace/mode/rust',  text: 'Rust'},
        {value: 'ace/mode/sass',  text: 'SASS'},
        {value: 'ace/mode/scad',  text: 'SCAD'},
        {value: 'ace/mode/scala',  text: 'Scala'},
        {value: 'ace/mode/scheme',  text: 'Scheme'},
        {value: 'ace/mode/scss',  text: 'SCSS'},
        {value: 'ace/mode/sh',  text: 'SH'},
        {value: 'ace/mode/sjs',  text: 'SJS'},
        {value: 'ace/mode/smarty',  text: 'Smarty'},
        {value: 'ace/mode/snippets',  text: 'snippets'},
        {value: 'ace/mode/soy_template',  text: 'Soy Template'},
        {value: 'ace/mode/space',  text: 'Space'},
        {value: 'ace/mode/sql',  text: 'SQL'},
        {value: 'ace/mode/sqlserver',  text: 'SQLServer'},
        {value: 'ace/mode/stylus',  text: 'Stylus'},
        {value: 'ace/mode/svg',  text: 'SVG'},
        {value: 'ace/mode/swift',  text: 'Swift'},
        {value: 'ace/mode/tcl',  text: 'Tcl'},
        {value: 'ace/mode/tex',  text: 'Tex'},
        {value: 'ace/mode/text',  text: 'Text'},
        {value: 'ace/mode/textile',  text: 'Textile'},
        {value: 'ace/mode/toml',  text: 'Toml'},
        {value: 'ace/mode/twig',  text: 'Twig'},
        {value: 'ace/mode/typescript',  text: 'Typescript'},
        {value: 'ace/mode/vala',  text: 'Vala'},
        {value: 'ace/mode/vbscript',  text: 'VBScript'},
        {value: 'ace/mode/velocity',  text: 'Velocity'},
        {value: 'ace/mode/verilog',  text: 'Verilog'},
        {value: 'ace/mode/vhdl',  text: 'VHDL'},
        {value: 'ace/mode/wollok',  text: 'Wollok'},
        {value: 'ace/mode/xml',  text: 'XML'},
        {value: 'ace/mode/xquery',  text: 'XQuery'},
        {value: 'ace/mode/yaml',  text: 'YAML'},
        {value: 'ace/mode/django',  text: 'Django'}
    ]
});
