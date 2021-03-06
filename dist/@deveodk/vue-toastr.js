/*!
 * @deveodk/vue-toastr v1.0.4
 * (c) 2017 Jason Kelly
 * Released under the MIT License.
 */

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["@deveodk/vueToastr"] = factory();
	else
		root["@deveodk/vueToastr"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function () {
    function isObject(val) {
        return val !== null && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' && val.constructor !== Array;
    }

    function toArray(val) {
        return typeof val === 'string' || typeof val === 'number' ? [val] : val;
    }

    function extend(mainObj, appendObj) {
        var i = void 0,
            ii = void 0,
            key = void 0;
        var data = {};

        for (key in mainObj) {
            if (isObject(mainObj[key])) {
                data[key] = extend(mainObj[key], {});
            } else {
                data[key] = mainObj[key];
            }
        }

        for (i = 0, ii = appendObj.length; i < ii; i++) {
            for (key in appendObj[i]) {
                if (isObject(appendObj[i][key])) {
                    data[key] = extend(mainObj[key] || {}, [appendObj[i][key]]);
                } else {
                    data[key] = appendObj[i][key];
                }
            }
        }

        return data;
    }

    function compare(one, two) {
        var i = void 0,
            ii = void 0,
            key = void 0;

        if (Object.prototype.toString.call(one) === '[object Object]' && Object.prototype.toString.call(two) === '[object Object]') {
            for (key in one) {
                if (compare(one[key], two[key])) {
                    return true;
                }
            }

            return false;
        }

        one = toArray(one);
        two = toArray(two);

        if (one.constructor !== Array || two.constructor !== Array) {
            return false;
        }

        for (i = 0, ii = one.length; i < ii; i++) {
            if (two.indexOf(one[i]) >= 0) {
                return true;
            }
        }

        return false;
    }

    return {
        extend: extend,
        toArray: toArray,
        compare: compare
    };
}();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(6)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(4),
  /* template */
  __webpack_require__(9),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/tripham/work/Aduro/toastr/vue-toastr/src/components/wrapper.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] wrapper.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-17c2a164", Component.options)
  } else {
    hotAPI.reload("data-v-17c2a164", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//

exports.default = {
    name: 'vue-toastr',
    props: ['data'],
    created: function created() {
        if (this.data.timeout !== undefined && this.data.timeout !== 0) {
            this.setTimeout();
        }
    },

    methods: {
        // Enter Hover
        onMouseOver: function onMouseOver() {
            if (this.data.onMouseOver !== undefined) {
                this.data.onMouseOver();
            }
            if (!this.data.closeOnHover) {
                clearInterval(this.data.intervalId);
            }
        },

        // Leave Hover
        onMouseOut: function onMouseOut() {
            if (this.data.onMouseOut !== undefined) {
                this.data.onMouseOut();
            }
            if (!this.data.closeOnHover) {
                this.setTimeout();
            }
        },

        // Set timeout to close
        setTimeout: function (_setTimeout) {
            function setTimeout() {
                return _setTimeout.apply(this, arguments);
            }

            setTimeout.toString = function () {
                return _setTimeout.toString();
            };

            return setTimeout;
        }(function () {
            this.data.intervalId = setTimeout(function () {
                this.close();
            }.bind(this), this.data.timeout);
        }),

        // Clicked Toast
        clicked: function clicked() {
            if (this.data.onClicked !== undefined) {
                this.data.onClicked();
            }
            this.clickClose();
        },

        // Click Close?
        clickClose: function clickClose() {
            if (this.data.clickClose !== undefined && this.data.clickClose === false) {
                return;
            }
            this.close();
        },

        // Close Toast
        close: function close() {
            // if toast not manuel closed.
            if (this.$parent !== null) {
                this.$parent.Close(this.data);
            }
        }
    }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _vueToastr = __webpack_require__(7);

var _vueToastr2 = _interopRequireDefault(_vueToastr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'ToastrWrapper',
    components: {
        'vue-toastr': _vueToastr2.default
    },
    data: function data() {
        return {
            positions: ['toast-top-right', 'toast-bottom-right', 'toast-bottom-left', 'toast-top-left', 'toast-top-full-width', 'toast-bottom-full-width', 'toast-top-center', 'toast-bottom-center'],
            list: []
        };
    },

    methods: {
        addToast: function addToast(data) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var message = _step.value;

                    if (message.type === data.type && message.msg === data.msg && message.position === data.position && message.title === data.title) {
                        return;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            this.list.push(data);
            // if have onCreated
            if (typeof data.onCreated !== 'undefined') {
                // wait doom update after call cb
                this.$nextTick(function () {
                    data.onCreated();
                });
            }
        },
        removeToast: function removeToast(data) {
            // if have onClosed
            if (data.onClosed !== undefined) {
                data.onClosed();
            }
            this.list.splice(this.list.indexOf(data), 1);
        },
        Add: function Add(data) {
            return this.AddData(this.processObjectData(data));
        },
        AddData: function AddData(data) {
            if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) !== 'object') {
                return;
            }
            this.addToast(data);
        },
        processObjectData: function processObjectData(data) {
            // if Object
            if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object' && data.msg !== undefined) {
                if (data.position === undefined) {
                    data.position = this.defaultPosition;
                }
                if (data.type === undefined) {
                    data.type = this.defaultType;
                }
                if (data.timeout === undefined) {
                    data.timeout = this.defaultTimeout;
                }
                if (data.closeOnHover === undefined) {
                    data.closeOnHover = this.defaultCloseOnHover;
                }
                return data;
            }
            // if String
            return {
                msg: data.toString(),
                position: this.defaultPosition,
                type: this.defaultType,
                timeout: this.defaultTimeout,
                closeOnHover: this.defaultCloseOnHover
            };
        },
        error: function error(msg, title) {
            var data = this.processObjectData(msg);
            data['type'] = 'error';
            if (title !== undefined) {
                data['title'] = title;
            }
            return this.AddData(data);
        },
        success: function success(msg, title) {
            var data = this.processObjectData(msg);
            data['type'] = 'success';
            if (title !== undefined) {
                data['title'] = title;
            }
            return this.AddData(data);
        },
        warning: function warning(msg, title) {
            var data = this.processObjectData(msg);
            data['type'] = 'warning';
            if (title !== undefined) {
                data['title'] = title;
            }
            return this.AddData(data);
        },
        info: function info(msg, title) {
            var data = this.processObjectData(msg);
            data['type'] = 'info';
            if (title !== undefined) {
                data['title'] = title;
            }
            return this.AddData(data);
        },
        Close: function Close(data) {
            this.removeToast(data);
        }
    }
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.version = undefined;

var _wrapper = __webpack_require__(2);

var _wrapper2 = _interopRequireDefault(_wrapper);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function plugin(Vue, options) {
    var defaultOptions = {
        defaultPosition: 'toast-bottom-right',
        defaultType: 'success',
        defaultTimeout: 5000
    };

    options = _utils2.default.extend(defaultOptions, [options || {}]);

    var Comp = Vue.extend(_wrapper2.default);
    var vm = new Comp({
        data: {
            defaultPosition: options.defaultPosition,
            defaultType: options.defaultType,
            defaultTimeout: options.defaultTimeout
        }
    }).$mount();
    document.body.appendChild(vm.$el);

    Vue.prototype.$toastr = function (type, message, title) {
        if (message === undefined) {
            console.warn('Vue-Toastr: Warning you must specify a message');
            return;
        }
        switch (type) {
            case 'success':
                vm.success(message, title);
                break;
            case 'error':
                vm.error(message, title);
                break;
            case 'warning':
                vm.warning(message, title);
                break;
            case 'info':
                vm.info(message, title);
                break;
            case 'add':
                vm.Add(message);
                break;
        }
    };
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin);
}

exports.default = plugin;

var version = '__VERSION__';
// Export all components too
exports.version = version;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(3),
  /* template */
  __webpack_require__(8),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/tripham/work/Aduro/toastr/vue-toastr/src/components/vue-toastr.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vue-toastr.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-07333491", Component.options)
  } else {
    hotAPI.reload("data-v-07333491", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: 'toast toast-' + _vm.data.type,
    staticStyle: {
      "display": "block"
    },
    on: {
      "click": function($event) {
        _vm.clicked()
      },
      "mouseover": _vm.onMouseOver,
      "mouseout": _vm.onMouseOut
    }
  }, [_c('div', {
    staticClass: "toast-title",
    domProps: {
      "innerHTML": _vm._s(_vm.data.title)
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "toast-message",
    domProps: {
      "innerHTML": _vm._s(_vm.data.msg)
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-07333491", module.exports)
  }
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', _vm._l((_vm.positions), function(position) {
    return _c('div', {
      class: 'toast-container ' + position
    }, [_vm._l((_vm.list), function(optionsArray, index) {
      return [(optionsArray.position === position) ? _c('vue-toastr', {
        key: index,
        attrs: {
          "data": optionsArray
        }
      }) : _vm._e()]
    })], 2)
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-17c2a164", module.exports)
  }
}

/***/ })
/******/ ]);
});