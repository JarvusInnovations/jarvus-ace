ace.define("ace/theme/iceberg",["require","exports","module","ace/lib/dom"], function(require, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-iceberg";
exports.cssText = ".ace-iceberg .ace_gutter {\
background: #121314;\
color: #adafb2\
}\
.ace-iceberg .ace_print-margin {\
width: 1px;\
background: #112\
}\
.ace-iceberg {\
background-color: #000;\
color: #C5C8C6\
}\
.ace-iceberg .ace_cursor {\
color: #AEAFAD\
}\
.ace-iceberg .ace_marker-layer .ace_selection {\
background: #373B41\
}\
.ace-iceberg.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #1D1F21;\
}\
.ace-iceberg .ace_marker-layer .ace_step {\
background: rgb(102, 82, 0)\
}\
.ace-iceberg .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #4B4E55\
}\
.ace-iceberg .ace_marker-layer .ace_active-line {\
background: #282A2E\
}\
.ace-iceberg .ace_gutter-active-line {\
background-color: #282A2E\
}\
.ace-iceberg .ace_marker-layer .ace_selected-word {\
border: 1px solid #373B41\
}\
.ace-iceberg .ace_invisible {\
color: #4B4E55\
}\
.ace-iceberg .ace_keyword,\
.ace-iceberg .ace_meta,\
.ace-iceberg .ace_storage,\
.ace-iceberg .ace_storage.ace_type,\
.ace-iceberg .ace_support.ace_type {\
color: #84a0c6\
}\
.ace-iceberg .ace_keyword.ace_operator {\
color: #84a0c6\
}\
.ace-iceberg .ace_constant.ace_character,\
.ace-iceberg .ace_constant.ace_language,\
.ace-iceberg .ace_constant.ace_numeric,\
.ace-iceberg .ace_keyword.ace_other.ace_unit,\
.ace-iceberg .ace_support.ace_constant,\
.ace-iceberg .ace_variable.ace_parameter {\
color: #92c37c\
}\
.ace-iceberg .ace_constant.ace_other {\
color: #CED1CF\
}\
.ace-iceberg .ace_invalid {\
color: #CED2CF;\
background-color: #DF5F5F\
}\
.ace-iceberg .ace_invalid.ace_deprecated {\
color: #CED2CF;\
background-color: #B798BF\
}\
.ace-iceberg .ace_fold {\
background-color: #81A2BE;\
border-color: #C5C8C6\
}\
.ace-iceberg .ace_entity.ace_name.ace_function,\
.ace-iceberg .ace_variable {\
color: #81A2BE\
}\
.ace-iceberg .ace_support.ace_function {\
color: #e7a165\
}\
.ace-iceberg .ace_support.ace_class,\
.ace-iceberg .ace_support.ace_type {\
color: #F0C674\
}\
.ace-iceberg .ace_heading,\
.ace-iceberg .ace_markup.ace_heading {\
color: #B5BD68\
}\
.ace-iceberg .ace_string {\
color: #87afaf\
}\
.ace-iceberg .ace_entity.ace_name.ace_tag,\
.ace-iceberg .ace_entity.ace_other.ace_attribute-name,\
.ace-iceberg .ace_meta.ace_tag,\
.ace-iceberg .ace_string.ace_regexp,\
.ace-iceberg .ace_variable {\
color: #87afaf\
}\
.ace-iceberg .ace_comment {\
color: #969896\
}\
.ace-iceberg .ace_indent-guide {\
border-right: 1px dotted #112;\
background: none\
}";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
