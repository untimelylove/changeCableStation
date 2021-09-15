(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/canvas-drag/index"],{

/***/ 49:
/*!************************************************************************!*\
  !*** C:/Users/fenghe/Desktop/变电站/变电站/components/canvas-drag/index.vue ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_5cd633be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=5cd633be& */ 50);
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ 52);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=css& */ 54);
/* harmony import */ var _H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_5cd633be___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_5cd633be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _index_vue_vue_type_template_id_5cd633be___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/canvas-drag/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 50:
/*!*******************************************************************************************************!*\
  !*** C:/Users/fenghe/Desktop/变电站/变电站/components/canvas-drag/index.vue?vue&type=template&id=5cd633be& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_5cd633be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=template&id=5cd633be& */ 51);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_5cd633be___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_5cd633be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_5cd633be___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_5cd633be___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 51:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/fenghe/Desktop/变电站/变电站/components/canvas-drag/index.vue?vue&type=template&id=5cd633be& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 52:
/*!*************************************************************************************************!*\
  !*** C:/Users/fenghe/Desktop/变电站/变电站/components/canvas-drag/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=script&lang=js& */ 53);
/* harmony import */ var _H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 53:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/fenghe/Desktop/变电站/变电站/components/canvas-drag/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//

// components/canvas-drag/index.js
var DELETE_ICON = '../pages/index/static/api.png'; // 删除按钮
// 删除按钮
var DRAG_ICON = '../pages/index/static/api.png'; // 缩放按钮
// 缩放按钮
var STROKE_COLOR = 'red';
var ROTATE_ENABLED = true;
var isMove = false; // 标识触摸后是否有移动，用来判断是否需要增加操作历史
// 标识触摸后是否有移动，用来判断是否需要增加操作历史
var DEBUG_MODE = false; // 打开调试后会渲染操作区域边框（无背景时有效）
// 打开调试后会渲染操作区域边框（无背景时有效）
var dragGraph = function dragGraph(_ref,












canvas, factor) {var _ref$x = _ref.x,x = _ref$x === void 0 ? 30 : _ref$x,_ref$y = _ref.y,y = _ref$y === void 0 ? 30 : _ref$y,w = _ref.w,h = _ref.h,type = _ref.type,text = _ref.text,_ref$fontSize = _ref.fontSize,fontSize = _ref$fontSize === void 0 ? 20 : _ref$fontSize,_ref$color = _ref.color,color = _ref$color === void 0 ? 'red' : _ref$color,_ref$url = _ref.url,url = _ref$url === void 0 ? null : _ref$url,_ref$rotate = _ref.rotate,rotate = _ref$rotate === void 0 ? 0 : _ref$rotate,_ref$sourceId = _ref.sourceId,sourceId = _ref$sourceId === void 0 ? null : _ref$sourceId,_ref$selected = _ref.selected,selected = _ref$selected === void 0 ? true : _ref$selected;
  if (type === 'text') {
    canvas.setFontSize(fontSize);
    var textWidth = canvas.measureText(text).width;
    var textHeight = fontSize + 10;
    this.centerX = x + textWidth / 2;
    this.centerY = y + textHeight / 2;
    this.w = textWidth;
    this.h = textHeight;
  } else {
    this.centerX = x + w / 2;
    this.centerY = y + h / 2;
    this.w = w;
    this.h = h;
  }

  this.x = x;
  this.y = y; // 4个顶点坐标

  this.square = [[this.x, this.y], [this.x + this.w, this.y], [this.x + this.w, this.y + this.h], [this.x, this.y + this.h]];
  this.fileUrl = url;
  this.text = text;
  this.fontSize = fontSize;
  this.color = color;
  this.ctx = canvas;
  this.rotate = rotate;
  this.type = type;
  this.selected = selected;
  this.factor = factor;
  this.sourceId = sourceId;
  this.MIN_WIDTH = 20;
  this.MIN_FONTSIZE = 10;
};
dragGraph.prototype = {
  /**
                         * 绘制元素
                         */
  paint: function paint() {
    this.ctx.save(); // 由于measureText获取文字宽度依赖于样式，所以如果是文字元素需要先设置样式

    var textWidth = 0;
    var textHeight = 0;

    if (this.type === 'text') {
      this.ctx.setFontSize(this.fontSize);
      this.ctx.setTextBaseline('middle');
      this.ctx.setTextAlign('center');
      this.ctx.setFillStyle(this.color);
      textWidth = this.ctx.measureText(this.text).width;
      textHeight = this.fontSize + 10; // 字体区域中心点不变，左上角位移

      this.x = this.centerX - textWidth / 2;
      this.y = this.centerY - textHeight / 2;
    } // 旋转元素


    this.ctx.translate(this.centerX, this.centerY);
    this.ctx.rotate(this.rotate * Math.PI / 180);
    this.ctx.translate(-this.centerX, -this.centerY); // 渲染元素

    if (this.type === 'text') {
      this.ctx.fillText(this.text, this.centerX, this.centerY);
    } else if (this.type === 'image') {
      this.ctx.drawImage(this.fileUrl, this.x, this.y, this.w, this.h);
    } // 如果是选中状态，绘制选择虚线框，和缩放图标、删除图标


    if (this.selected) {
      this.ctx.setLineDash([2, 5]);
      this.ctx.setLineWidth(2);
      this.ctx.setStrokeStyle(STROKE_COLOR);
      this.ctx.lineDashOffset = 6;

      if (this.type === 'text') {
        this.ctx.strokeRect(this.x, this.y, textWidth, textHeight);
        this.ctx.drawImage(DELETE_ICON, this.x - 15, this.y - 15, 30, 30);
        this.ctx.drawImage(DRAG_ICON, this.x + textWidth - 15, this.y + textHeight - 15, 30, 30);
      } else {
        this.ctx.strokeRect(this.x, this.y, this.w, this.h);
        this.ctx.drawImage(DELETE_ICON, this.x - 15, this.y - 15, 30, 30);
        this.ctx.drawImage(DRAG_ICON, this.x + this.w - 15, this.y + this.h - 15, 30, 30);
      }
    }

    this.ctx.restore();
  },

  /**
      * 给矩形描边
      * @private
      */
  _drawBorder: function _drawBorder() {
    var p = this.square;
    var ctx = this.ctx;
    this.ctx.save();
    this.ctx.beginPath();
    ctx.setStrokeStyle('orange');

    this._draw_line(this.ctx, p[0], p[1]);

    this._draw_line(this.ctx, p[1], p[2]);

    this._draw_line(this.ctx, p[2], p[3]);

    this._draw_line(this.ctx, p[3], p[0]);

    ctx.restore();
  },

  /**
      * 画一条线
      * @param ctx
      * @param a
      * @param b
      * @private
      */
  _draw_line: function _draw_line(ctx, a, b) {
    ctx.moveTo(a[0], a[1]);
    ctx.lineTo(b[0], b[1]);
    ctx.stroke();
  },

  /**
      * 判断点击的坐标落在哪个区域
      * @param {*} x 点击的坐标
      * @param {*} y 点击的坐标
      */
  isInGraph: function isInGraph(x, y) {
    // 删除区域左上角的坐标和区域的高度宽度
    var delW = 30;
    var delH = 30; // 旋转后的删除区域坐标

    var transformedDelCenter = this._rotatePoint(this.x, this.y, this.centerX, this.centerY, this.rotate);

    var transformDelX = transformedDelCenter[0] - delW / 2;
    var transformDelY = transformedDelCenter[1] - delH / 2; // 变换区域左上角的坐标和区域的高度宽度

    var scaleW = 30;
    var scaleH = 30;

    var transformedScaleCenter = this._rotatePoint(this.x + this.w, this.y + this.h, this.centerX, this.centerY, this.rotate); // 旋转后的变换区域坐标


    var transformScaleX = transformedScaleCenter[0] - scaleW / 2;
    var transformScaleY = transformedScaleCenter[1] - scaleH / 2; // 调试使用，标识可操作区域

    if (DEBUG_MODE) {
      // 标识删除按钮区域
      this.ctx.setLineWidth(1);
      this.ctx.setStrokeStyle('red');
      this.ctx.strokeRect(transformDelX, transformDelY, delW, delH); // 标识旋转/缩放按钮区域

      this.ctx.setLineWidth(1);
      this.ctx.setStrokeStyle('black');
      this.ctx.strokeRect(transformScaleX, transformScaleY, scaleW, scaleH); // 标识移动区域

      this._drawBorder();
    }

    if (x - transformScaleX >= 0 && y - transformScaleY >= 0 && transformScaleX + scaleW - x >= 0 && transformScaleY + scaleH - y >= 0) {
      // 缩放区域
      return 'transform';
    } else if (x - transformDelX >= 0 && y - transformDelY >= 0 && transformDelX + delW - x >= 0 && transformDelY + delH - y >= 0) {
      // 删除区域
      return 'del';
    } else if (this.insidePolygon(this.square, [x, y])) {
      return 'move';
    } // 不在选择区域里面


    return false;
  },

  /**
      *  判断一个点是否在多边形内部
      *  @param points 多边形坐标集合
      *  @param testPoint 测试点坐标
      *  返回true为真，false为假
      *  */
  insidePolygon: function insidePolygon(points, testPoint) {
    var x = testPoint[0],
    y = testPoint[1];
    var inside = false;

    for (var i = 0, j = points.length - 1; i < points.length; j = i++) {
      var xi = points[i][0],
      yi = points[i][1];
      var xj = points[j][0],
      yj = points[j][1];
      var intersect = yi > y != yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
      if (intersect) inside = !inside;
    }

    return inside;
  },

  /**
      * 计算旋转后矩形四个顶点的坐标（相对于画布）
      * @private
      */
  _rotateSquare: function _rotateSquare() {
    this.square = [this._rotatePoint(this.x, this.y, this.centerX, this.centerY, this.rotate), this._rotatePoint(this.x + this.w, this.y, this.centerX, this.centerY, this.rotate), this._rotatePoint(this.x + this.w, this.y + this.h, this.centerX, this.centerY, this.rotate), this._rotatePoint(this.x, this.y + this.h, this.centerX, this.centerY, this.rotate)];
  },

  /**
      * 计算旋转后的新坐标（相对于画布）
      * @param x
      * @param y
      * @param centerX
      * @param centerY
      * @param degrees
      * @returns {*[]}
      * @private
      */
  _rotatePoint: function _rotatePoint(x, y, centerX, centerY, degrees) {
    var newX = (x - centerX) * Math.cos(degrees * Math.PI / 180) - (y - centerY) * Math.sin(degrees * Math.PI / 180) + centerX;
    var newY = (x - centerX) * Math.sin(degrees * Math.PI / 180) + (y - centerY) * Math.cos(degrees * Math.PI / 180) + centerY;
    return [newX, newY];
  },

  /**
      *
      * @param {*} px 手指按下去的坐标
      * @param {*} py 手指按下去的坐标
      * @param {*} x 手指移动到的坐标
      * @param {*} y 手指移动到的坐标
      * @param {*} currentGraph 当前图层的信息
      */
  transform: function transform(px, py, x, y, currentGraph) {
    // 获取选择区域的宽度高度
    if (this.type === 'text') {
      this.ctx.setFontSize(this.fontSize);
      var textWidth = this.ctx.measureText(this.text).width;
      var textHeight = this.fontSize + 10;
      this.w = textWidth;
      this.h = textHeight; // 字体区域中心点不变，左上角位移

      this.x = this.centerX - textWidth / 2;
      this.y = this.centerY - textHeight / 2;
    } else {
      this.centerX = this.x + this.w / 2;
      this.centerY = this.y + this.h / 2;
    }

    var diffXBefore = px - this.centerX;
    var diffYBefore = py - this.centerY;
    var diffXAfter = x - this.centerX;
    var diffYAfter = y - this.centerY;
    var angleBefore = Math.atan2(diffYBefore, diffXBefore) / Math.PI * 180;
    var angleAfter = Math.atan2(diffYAfter, diffXAfter) / Math.PI * 180; // 旋转的角度

    if (ROTATE_ENABLED) {
      this.rotate = currentGraph.rotate + angleAfter - angleBefore;
    }

    var lineA = Math.sqrt(Math.pow(this.centerX - px, 2) + Math.pow(this.centerY - py, 2));
    var lineB = Math.sqrt(Math.pow(this.centerX - x, 2) + Math.pow(this.centerY - y, 2));

    if (this.type === 'image') {
      var resize_rito = lineB / lineA;
      var new_w = currentGraph.w * resize_rito;
      var new_h = currentGraph.h * resize_rito;

      if (currentGraph.w < currentGraph.h && new_w < this.MIN_WIDTH) {
        new_w = this.MIN_WIDTH;
        new_h = this.MIN_WIDTH * currentGraph.h / currentGraph.w;
      } else if (currentGraph.h < currentGraph.w && new_h < this.MIN_WIDTH) {
        new_h = this.MIN_WIDTH;
        new_w = this.MIN_WIDTH * currentGraph.w / currentGraph.h;
      }

      this.w = new_w;
      this.h = new_h;
      this.x = currentGraph.x - (new_w - currentGraph.w) / 2;
      this.y = currentGraph.y - (new_h - currentGraph.h) / 2;
    } else if (this.type === 'text') {
      var fontSize = currentGraph.fontSize * ((lineB - lineA) / lineA + 1);
      this.fontSize = fontSize <= this.MIN_FONTSIZE ? this.MIN_FONTSIZE : fontSize; // 旋转位移后重新计算坐标

      this.ctx.setFontSize(this.fontSize);
      var _textWidth = this.ctx.measureText(this.text).width;
      var _textHeight = this.fontSize + 10;
      this.w = _textWidth;
      this.h = _textHeight; // 字体区域中心点不变，左上角位移

      this.x = this.centerX - _textWidth / 2;
      this.y = this.centerY - _textHeight / 2;
    }
  },

  toPx: function toPx(rpx) {
    return rpx * this.factor;
  } };var _default2 =



{
  data: function data() {
    return {
      bgImage: '',
      history: [] };

  },

  components: {},
  props: {
    graph: {
      type: Object,
      default: function _default() {return {};} },

    bgColor: {
      type: String,
      default: '' },

    bgSourceId: {
      type: String,
      default: '' },

    width: {
      type: Number,
      default: 750 },

    height: {
      type: Number,
      default: 750 },

    enableUndo: {
      type: Boolean,
      default: false } },


  watch: {
    graph: {
      handler: 'onGraphChange',
      deep: true } },



  /**
                       * 绘制元素
                       */
  paint: function paint() {
    this.ctx.save(); // 由于measureText获取文字宽度依赖于样式，所以如果是文字元素需要先设置样式

    var textWidth = 0;
    var textHeight = 0;

    if (this.type === 'text') {
      this.ctx.setFontSize(this.fontSize);
      this.ctx.setTextBaseline('middle');
      this.ctx.setTextAlign('center');
      this.ctx.setFillStyle(this.color);
      textWidth = this.ctx.measureText(this.text).width;
      textHeight = this.fontSize + 10; // 字体区域中心点不变，左上角位移

      this.x = this.centerX - textWidth / 2;
      this.y = this.centerY - textHeight / 2;
    } // 旋转元素


    this.ctx.translate(this.centerX, this.centerY);
    this.ctx.rotate(this.rotate * Math.PI / 180);
    this.ctx.translate(-this.centerX, -this.centerY); // 渲染元素

    if (this.type === 'text') {
      this.ctx.fillText(this.text, this.centerX, this.centerY);
    } else if (this.type === 'image') {
      this.ctx.drawImage(this.fileUrl, this.x, this.y, this.w, this.h);
    } // 如果是选中状态，绘制选择虚线框，和缩放图标、删除图标


    if (this.selected) {
      this.ctx.setLineDash([2, 5]);
      this.ctx.setLineWidth(2);
      this.ctx.setStrokeStyle(STROKE_COLOR);
      this.ctx.lineDashOffset = 6;

      if (this.type === 'text') {
        this.ctx.strokeRect(this.x, this.y, textWidth, textHeight);
        this.ctx.drawImage(DELETE_ICON, this.x - 15, this.y - 15, 30, 30);
        this.ctx.drawImage(DRAG_ICON, this.x + textWidth - 15, this.y + textHeight - 15, 30, 30);
      } else {
        this.ctx.strokeRect(this.x, this.y, this.w, this.h);
        this.ctx.drawImage(DELETE_ICON, this.x - 15, this.y - 15, 30, 30);
        this.ctx.drawImage(DRAG_ICON, this.x + this.w - 15, this.y + this.h - 15, 30, 30);
      }
    }

    this.ctx.restore();
  },

  /**
      * 给矩形描边
      * @private
      */
  _drawBorder: function _drawBorder() {
    var p = this.square;
    var ctx = this.ctx;
    this.ctx.save();
    this.ctx.beginPath();
    ctx.setStrokeStyle('orange');

    this._draw_line(this.ctx, p[0], p[1]);

    this._draw_line(this.ctx, p[1], p[2]);

    this._draw_line(this.ctx, p[2], p[3]);

    this._draw_line(this.ctx, p[3], p[0]);

    ctx.restore();
  },

  /**
      * 画一条线
      * @param ctx
      * @param a
      * @param b
      * @private
      */
  _draw_line: function _draw_line(ctx, a, b) {
    ctx.moveTo(a[0], a[1]);
    ctx.lineTo(b[0], b[1]);
    ctx.stroke();
  },

  /**
      * 判断点击的坐标落在哪个区域
      * @param {*} x 点击的坐标
      * @param {*} y 点击的坐标
      */
  isInGraph: function isInGraph(x, y) {
    // 删除区域左上角的坐标和区域的高度宽度
    var delW = 30;
    var delH = 30; // 旋转后的删除区域坐标

    var transformedDelCenter = this._rotatePoint(this.x, this.y, this.centerX, this.centerY, this.rotate);

    var transformDelX = transformedDelCenter[0] - delW / 2;
    var transformDelY = transformedDelCenter[1] - delH / 2; // 变换区域左上角的坐标和区域的高度宽度

    var scaleW = 30;
    var scaleH = 30;

    var transformedScaleCenter = this._rotatePoint(this.x + this.w, this.y + this.h, this.centerX, this.centerY, this.rotate); // 旋转后的变换区域坐标


    var transformScaleX = transformedScaleCenter[0] - scaleW / 2;
    var transformScaleY = transformedScaleCenter[1] - scaleH / 2; // 调试使用，标识可操作区域

    if (DEBUG_MODE) {
      // 标识删除按钮区域
      this.ctx.setLineWidth(1);
      this.ctx.setStrokeStyle('red');
      this.ctx.strokeRect(transformDelX, transformDelY, delW, delH); // 标识旋转/缩放按钮区域

      this.ctx.setLineWidth(1);
      this.ctx.setStrokeStyle('black');
      this.ctx.strokeRect(transformScaleX, transformScaleY, scaleW, scaleH); // 标识移动区域

      this._drawBorder();
    }

    if (x - transformScaleX >= 0 && y - transformScaleY >= 0 && transformScaleX + scaleW - x >= 0 && transformScaleY + scaleH - y >= 0) {
      // 缩放区域
      return 'transform';
    } else if (x - transformDelX >= 0 && y - transformDelY >= 0 && transformDelX + delW - x >= 0 && transformDelY + delH - y >= 0) {
      // 删除区域
      return 'del';
    } else if (this.insidePolygon(this.square, [x, y])) {
      return 'move';
    } // 不在选择区域里面


    return false;
  },

  /**
      *  判断一个点是否在多边形内部
      *  @param points 多边形坐标集合
      *  @param testPoint 测试点坐标
      *  返回true为真，false为假
      *  */
  insidePolygon: function insidePolygon(points, testPoint) {
    var x = testPoint[0],
    y = testPoint[1];
    var inside = false;

    for (var i = 0, j = points.length - 1; i < points.length; j = i++) {
      var xi = points[i][0],
      yi = points[i][1];
      var xj = points[j][0],
      yj = points[j][1];
      var intersect = yi > y != yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
      if (intersect) inside = !inside;
    }

    return inside;
  },

  /**
      * 计算旋转后矩形四个顶点的坐标（相对于画布）
      * @private
      */
  _rotateSquare: function _rotateSquare() {
    this.square = [this._rotatePoint(this.x, this.y, this.centerX, this.centerY, this.rotate), this._rotatePoint(this.x + this.w, this.y, this.centerX, this.centerY, this.rotate), this._rotatePoint(this.x + this.w, this.y + this.h, this.centerX, this.centerY, this.rotate), this._rotatePoint(this.x, this.y + this.h, this.centerX, this.centerY, this.rotate)];
  },

  /**
      * 计算旋转后的新坐标（相对于画布）
      * @param x
      * @param y
      * @param centerX
      * @param centerY
      * @param degrees
      * @returns {*[]}
      * @private
      */
  _rotatePoint: function _rotatePoint(x, y, centerX, centerY, degrees) {
    var newX = (x - centerX) * Math.cos(degrees * Math.PI / 180) - (y - centerY) * Math.sin(degrees * Math.PI / 180) + centerX;
    var newY = (x - centerX) * Math.sin(degrees * Math.PI / 180) + (y - centerY) * Math.cos(degrees * Math.PI / 180) + centerY;
    return [newX, newY];
  },

  /**
      *
      * @param {*} px 手指按下去的坐标
      * @param {*} py 手指按下去的坐标
      * @param {*} x 手指移动到的坐标
      * @param {*} y 手指移动到的坐标
      * @param {*} currentGraph 当前图层的信息
      */
  transform: function transform(px, py, x, y, currentGraph) {
    // 获取选择区域的宽度高度
    if (this.type === 'text') {
      this.ctx.setFontSize(this.fontSize);
      var textWidth = this.ctx.measureText(this.text).width;
      var textHeight = this.fontSize + 10;
      this.w = textWidth;
      this.h = textHeight; // 字体区域中心点不变，左上角位移

      this.x = this.centerX - textWidth / 2;
      this.y = this.centerY - textHeight / 2;
    } else {
      this.centerX = this.x + this.w / 2;
      this.centerY = this.y + this.h / 2;
    }

    var diffXBefore = px - this.centerX;
    var diffYBefore = py - this.centerY;
    var diffXAfter = x - this.centerX;
    var diffYAfter = y - this.centerY;
    var angleBefore = Math.atan2(diffYBefore, diffXBefore) / Math.PI * 180;
    var angleAfter = Math.atan2(diffYAfter, diffXAfter) / Math.PI * 180; // 旋转的角度

    if (ROTATE_ENABLED) {
      this.rotate = currentGraph.rotate + angleAfter - angleBefore;
    }

    var lineA = Math.sqrt(Math.pow(this.centerX - px, 2) + Math.pow(this.centerY - py, 2));
    var lineB = Math.sqrt(Math.pow(this.centerX - x, 2) + Math.pow(this.centerY - y, 2));

    if (this.type === 'image') {
      var resize_rito = lineB / lineA;
      var new_w = currentGraph.w * resize_rito;
      var new_h = currentGraph.h * resize_rito;

      if (currentGraph.w < currentGraph.h && new_w < this.MIN_WIDTH) {
        new_w = this.MIN_WIDTH;
        new_h = this.MIN_WIDTH * currentGraph.h / currentGraph.w;
      } else if (currentGraph.h < currentGraph.w && new_h < this.MIN_WIDTH) {
        new_h = this.MIN_WIDTH;
        new_w = this.MIN_WIDTH * currentGraph.w / currentGraph.h;
      }

      this.w = new_w;
      this.h = new_h;
      this.x = currentGraph.x - (new_w - currentGraph.w) / 2;
      this.y = currentGraph.y - (new_h - currentGraph.h) / 2;
    } else if (this.type === 'text') {
      var fontSize = currentGraph.fontSize * ((lineB - lineA) / lineA + 1);
      this.fontSize = fontSize <= this.MIN_FONTSIZE ? this.MIN_FONTSIZE : fontSize; // 旋转位移后重新计算坐标

      this.ctx.setFontSize(this.fontSize);
      var _textWidth2 = this.ctx.measureText(this.text).width;
      var _textHeight2 = this.fontSize + 10;
      this.w = _textWidth2;
      this.h = _textHeight2; // 字体区域中心点不变，左上角位移

      this.x = this.centerX - _textWidth2 / 2;
      this.y = this.centerY - _textHeight2 / 2;
    }
  },

  toPx: function toPx(rpx) {
    return rpx * this.factor;
  },

  beforeMount: function beforeMount() {
    var sysInfo = wx.getSystemInfoSync();
    var screenWidth = sysInfo.screenWidth;
    this.factor = screenWidth / 750;

    if (typeof this.drawArr === 'undefined') {
      this.drawArr = [];
    }

    this.ctx = wx.createCanvasContext('canvas-drag', this);
    this.draw();
  },

  created: function created() {
    uni.downloadFile({
      url: DELETE_ICON, //仅为示例，并非真实的资源
      success: function success(res) {
        if (res.statusCode === 200) {
          console.log('下载成功：' + res.tempFilePath);
          DELETE_ICON = res.tempFilePath;
        }
      } });

    uni.downloadFile({
      url: DRAG_ICON, //仅为示例，并非真实的资源
      success: function success(res) {
        if (res.statusCode === 200) {
          console.log('下载成功：' + res.tempFilePath);
          DRAG_ICON = res.tempFilePath;
        }
      } });

  },

  methods: {
    toPx: function toPx(rpx) {
      return rpx * this.factor;
    },

    initBg: function initBg() {
      this.bgColor = '';
      this.bgSourceId = '';
      this.bgImage = '';
    },

    initHistory: function initHistory() {
      this.history = [];
    },

    recordHistory: function recordHistory() {var _this = this;
      if (!this.enableUndo) {
        return;
      }

      this.exportJson().then(function (imgArr) {
        _this.history.push(JSON.stringify(imgArr));
      }).catch(function (e) {
        console.error(e);
      });
    },

    undo: function undo() {
      if (!this.enableUndo) {
        console.log("\u540E\u9000\u529F\u80FD\u672A\u542F\u7528\uFF0C\u8BF7\u8BBE\u7F6EenableUndo=\"{{true}}\"");
        return;
      }

      if (this.history.length > 1) {
        this.history.pop();
        var newConfigObj = this.history[this.history.length - 1];
        this.initByArr(JSON.parse(newConfigObj));
      } else {
        console.log('已是第一步，不能回退');
      }
    },

    onGraphChange: function onGraphChange(n, o) {
      if (JSON.stringify(n) === '{}') return;
      this.drawArr.push(new dragGraph(Object.assign({
        x: 30,
        y: 30 },
      n), this.ctx, this.factor));
      this.draw(); // 参数有变化时记录历史

      this.recordHistory();
    },

    initByArr: function initByArr(newArr) {var _this2 = this;
      this.drawArr = []; // 重置绘画元素

      this.initBg(); // 重置绘画背景
      // 循环插入 drawArr

      newArr.forEach(function (item, index) {
        switch (item.type) {
          case 'bgColor':
            _this2.bgImage = '';
            _this2.bgSourceId = '';
            _this2.bgColor = item.color;
            break;

          case 'bgImage':
            _this2.bgColor = '';
            _this2.bgImage = item.url;

            if (item.sourceId) {
              _this2.bgSourceId = item.sourceId;
            }

            break;

          case 'image':
          case 'text':
            if (index === newArr.length - 1) {
              item.selected = true;
            } else {
              item.selected = false;
            }

            _this2.drawArr.push(new dragGraph(item, _this2.ctx, _this2.factor));
            break;}

      });
      this.draw();
    },

    draw: function draw() {var _this3 = this;
      if (this.bgImage !== '') {
        this.ctx.drawImage(this.bgImage, 0, 0, this.toPx(this.width), this.toPx(this.height));
      }

      if (this.bgColor !== '') {
        this.ctx.save();
        this.ctx.setFillStyle(this.bgColor);
        this.ctx.fillRect(0, 0, this.toPx(this.width), this.toPx(this.height));
        this.ctx.restore();
      }

      this.drawArr.forEach(function (item) {
        item.paint();
      });
      return new Promise(function (resolve) {
        _this3.ctx.draw(false, function () {
          resolve();
        });
      });
    },

    start: function start(e) {var _this4 = this;
      isMove = false; // 重置移动标识
      var _e$touches$ =



      e.touches[0],x = _e$touches$.x,y = _e$touches$.y;
      this.tempGraphArr = [];
      var lastDelIndex = null; // 记录最后一个需要删除的索引

      this.drawArr && this.drawArr.forEach(function (item, index) {
        var action = item.isInGraph(x, y);

        if (action) {
          item.action = action;
          _this4.tempGraphArr.push(item); // 保存点击时的坐标

          _this4.currentTouch = {
            x: x,
            y: y };


          if (action === 'del') {
            lastDelIndex = index; // 标记需要删除的元素
            item.selected = true;
          }
        } else {
          item.action = false;
          item.selected = false;
        }
      }); // 保存点击时元素的信息

      if (this.tempGraphArr.length > 0) {
        for (var i = 0; i < this.tempGraphArr.length; i++) {
          var lastIndex = this.tempGraphArr.length - 1; // 对最后一个元素做操作

          if (i === lastIndex) {
            // 未选中的元素，不执行删除和缩放操作
            if (lastDelIndex !== null && this.tempGraphArr[i].selected) {
              if (this.drawArr[lastDelIndex].action == 'del') {
                this.drawArr.splice(lastDelIndex, 1);
                this.ctx.clearRect(0, 0, this.toPx(this.width), this.toPx(this.height));
              }
            } else {
              this.tempGraphArr[lastIndex].selected = true;
              this.currentGraph = Object.assign({}, this.tempGraphArr[lastIndex]);
            }
          } else {
            // 不是最后一个元素，不需要选中，也不记录状态
            this.tempGraphArr[i].action = false;
            this.tempGraphArr[i].selected = false;
          }
        }
      }

      this.draw();
    },

    move: function move(e) {var _e$touches$2 =



      e.touches[0],x = _e$touches$2.x,y = _e$touches$2.y;

      if (this.tempGraphArr && this.tempGraphArr.length > 0) {
        isMove = true; // 有选中元素，并且有移动时，设置移动标识

        var currentGraph = this.tempGraphArr[this.tempGraphArr.length - 1];

        if (currentGraph.action === 'move') {
          currentGraph.centerX = this.currentGraph.centerX + (x - this.currentTouch.x);
          currentGraph.centerY = this.currentGraph.centerY + (y - this.currentTouch.y); // 使用中心点坐标计算位移，不使用 x,y 坐标，因为会受旋转影响。

          if (currentGraph.type !== 'text') {
            currentGraph.x = currentGraph.centerX - this.currentGraph.w / 2;
            currentGraph.y = currentGraph.centerY - this.currentGraph.h / 2;
          }
        } else if (currentGraph.action === 'transform') {
          currentGraph.transform(this.currentTouch.x, this.currentTouch.y, x, y, this.currentGraph);
        } // 更新4个坐标点（相对于画布的坐标系）


        currentGraph._rotateSquare();

        this.draw();
      }
    },

    end: function end(e) {
      this.tempGraphArr = [];

      if (isMove) {
        isMove = false; // 重置移动标识
        // 用户操作结束时记录历史

        this.recordHistory();
      }
    },

    exportFun: function exportFun() {var _this5 = this;
      return new Promise(function (resolve, reject) {
        _this5.drawArr = _this5.drawArr.map(function (item) {
          item.selected = false;
          return item;
        });
        _this5.draw().then(function () {
          wx.canvasToTempFilePath({
            canvasId: 'canvas-drag',
            success: function success(res) {
              resolve(res.tempFilePath);
            },
            fail: function fail(e) {
              reject(e);
            } },
          _this5);
        });
      });
    },

    exportJson: function exportJson() {var _this6 = this;
      return new Promise(function (resolve, reject) {
        var exportArr = _this6.drawArr.map(function (item) {
          item.selected = false;

          switch (item.type) {
            case 'image':
              return {
                type: 'image',
                url: item.fileUrl,
                y: item.y,
                x: item.x,
                w: item.w,
                h: item.h,
                rotate: item.rotate,
                sourceId: item.sourceId };

              break;

            case 'text':
              return {
                type: 'text',
                text: item.text,
                color: item.color,
                fontSize: item.fontSize,
                y: item.y,
                x: item.x,
                w: item.w,
                h: item.h,
                rotate: item.rotate };

              break;}

        });

        if (_this6.bgImage) {
          var tmp_img_config = {
            type: 'bgImage',
            url: _this6.bgImage };


          if (_this6.bgSourceId) {
            tmp_img_config['sourceId'] = _this6.bgSourceId;
          }

          exportArr.unshift(tmp_img_config);
        } else if (_this6.bgColor) {
          exportArr.unshift({
            type: 'bgColor',
            color: _this6.bgColor });

        }

        resolve(exportArr);
      });
    },

    changColor: function changColor(color) {
      var selected = this.drawArr.filter(function (item) {return item.selected;});

      if (selected.length > 0) {
        selected[0].color = color;
      }

      this.draw(); // 改变文字颜色时记录历史

      this.recordHistory();
    },

    changeBgColor: function changeBgColor(color) {
      this.bgImage = '';
      this.bgColor = color;
      this.draw(); // 改变背景颜色时记录历史

      this.recordHistory();
    },

    changeBgImage: function changeBgImage(newBgImg) {
      this.bgColor = '';

      if (typeof newBgImg == 'string') {
        this.bgSourceId = '';
        this.bgImage = newBgImg;
      } else {
        this.bgSourceId = newBgImg.sourceId;
        this.bgImage = newBgImg.url;
      }

      this.draw(); // 改变背景图片时记录历史

      this.recordHistory();
    },

    clearCanvas: function clearCanvas() {
      this.ctx.clearRect(0, 0, this.toPx(this.width), this.toPx(this.height));
      this.ctx.draw();
      this.drawArr = [];
      this.initBg(); // 重置绘画背景

      this.initHistory(); // 清空历史记录
    } } };exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 54:
/*!*********************************************************************************************************!*\
  !*** C:/Users/fenghe/Desktop/变电站/变电站/components/canvas-drag/index.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=style&index=0&lang=css& */ 55);
/* harmony import */ var _H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_feng_file_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 55:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/fenghe/Desktop/变电站/变电站/components/canvas-drag/index.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/canvas-drag/index.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/canvas-drag/index-create-component',
    {
        'components/canvas-drag/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(49))
        })
    },
    [['components/canvas-drag/index-create-component']]
]);
