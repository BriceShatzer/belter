!function(root, factory) {
    "object" == typeof exports && "object" == typeof module ? module.exports = factory() : "function" == typeof define && define.amd ? define("mylibrary", [], factory) : "object" == typeof exports ? exports.mylibrary = factory() : root.mylibrary = factory();
}("undefined" != typeof self ? self : this, function() {
    return function(modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) return installedModules[moduleId].exports;
            var module = installedModules[moduleId] = {
                i: moduleId,
                l: !1,
                exports: {}
            };
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            module.l = !0;
            return module.exports;
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.d = function(exports, name, getter) {
            __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
                configurable: !1,
                enumerable: !0,
                get: getter
            });
        };
        __webpack_require__.n = function(module) {
            var getter = module && module.__esModule ? function() {
                return module.default;
            } : function() {
                return module;
            };
            __webpack_require__.d(getter, "a", getter);
            return getter;
        };
        __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
        __webpack_require__.p = "";
        return __webpack_require__(__webpack_require__.s = "./src/index.js");
    }({
        "./node_modules/Base64/base64.js": function(module, exports, __webpack_require__) {
            "use strict";
            !function() {
                var object = exports, chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                function InvalidCharacterError(message) {
                    this.message = message;
                }
                InvalidCharacterError.prototype = new Error();
                InvalidCharacterError.prototype.name = "InvalidCharacterError";
                object.btoa || (object.btoa = function(input) {
                    for (var block, charCode, str = String(input), idx = 0, map = chars, output = ""; str.charAt(0 | idx) || (map = "=", 
                    idx % 1); output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {
                        if ((charCode = str.charCodeAt(idx += .75)) > 255) throw new InvalidCharacterError("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
                        block = block << 8 | charCode;
                    }
                    return output;
                });
                object.atob || (object.atob = function(input) {
                    var str = String(input).replace(/[=]+$/, "");
                    if (str.length % 4 == 1) throw new InvalidCharacterError("'atob' failed: The string to be decoded is not correctly encoded.");
                    for (var bs, buffer, bc = 0, idx = 0, output = ""; buffer = str.charAt(idx++); ~buffer && (bs = bc % 4 ? 64 * bs + buffer : buffer, 
                    bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0) buffer = chars.indexOf(buffer);
                    return output;
                });
            }();
        },
        "./node_modules/cross-domain-utils/src/index.js": function(module, exports, __webpack_require__) {
            "use strict";
            exports.__esModule = !0;
            var _utils = __webpack_require__("./node_modules/cross-domain-utils/src/utils.js");
            Object.keys(_utils).forEach(function(key) {
                "default" !== key && "__esModule" !== key && Object.defineProperty(exports, key, {
                    enumerable: !0,
                    get: function() {
                        return _utils[key];
                    }
                });
            });
            var _types = __webpack_require__("./node_modules/cross-domain-utils/src/types.js");
            Object.keys(_types).forEach(function(key) {
                "default" !== key && "__esModule" !== key && Object.defineProperty(exports, key, {
                    enumerable: !0,
                    get: function() {
                        return _types[key];
                    }
                });
            });
        },
        "./node_modules/cross-domain-utils/src/types.js": function(module, exports, __webpack_require__) {
            "use strict";
        },
        "./node_modules/cross-domain-utils/src/util.js": function(module, exports, __webpack_require__) {
            "use strict";
            exports.__esModule = !0;
            exports.isRegex = function(item) {
                return "[object RegExp]" === Object.prototype.toString.call(item);
            };
            exports.noop = function() {};
        },
        "./node_modules/cross-domain-utils/src/utils.js": function(module, exports, __webpack_require__) {
            "use strict";
            exports.__esModule = !0;
            exports.isFileProtocol = function() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window).location.protocol === CONSTANTS.FILE_PROTOCOL;
            };
            exports.isAboutProtocol = isAboutProtocol;
            exports.getParent = getParent;
            exports.getOpener = getOpener;
            exports.canReadFromWindow = canReadFromWindow;
            exports.getActualDomain = getActualDomain;
            exports.getDomain = getDomain;
            exports.isBlankDomain = function(win) {
                try {
                    if (!win.location.href) return !0;
                    if ("about:blank" === win.location.href) return !0;
                } catch (err) {}
                return !1;
            };
            exports.isActuallySameDomain = isActuallySameDomain;
            exports.isSameDomain = isSameDomain;
            exports.getParents = getParents;
            exports.isAncestorParent = isAncestorParent;
            exports.getFrames = getFrames;
            exports.getAllChildFrames = getAllChildFrames;
            exports.getTop = getTop;
            exports.getAllFramesInWindow = getAllFramesInWindow;
            exports.isTop = function(win) {
                return win === getTop(win);
            };
            exports.isFrameWindowClosed = isFrameWindowClosed;
            exports.isWindowClosed = isWindowClosed;
            exports.linkFrameWindow = function(frame) {
                !function() {
                    for (var i = 0; i < iframeFrames.length; i++) if (isFrameWindowClosed(iframeFrames[i])) {
                        iframeFrames.splice(i, 1);
                        iframeWindows.splice(i, 1);
                    }
                    for (var _i5 = 0; _i5 < iframeWindows.length; _i5++) if (isWindowClosed(iframeWindows[_i5])) {
                        iframeFrames.splice(_i5, 1);
                        iframeWindows.splice(_i5, 1);
                    }
                }();
                if (frame && frame.contentWindow) try {
                    iframeWindows.push(frame.contentWindow);
                    iframeFrames.push(frame);
                } catch (err) {}
            };
            exports.getUserAgent = function(win) {
                return (win = win || window).navigator.mockUserAgent || win.navigator.userAgent;
            };
            exports.getFrameByName = getFrameByName;
            exports.findChildFrameByName = findChildFrameByName;
            exports.findFrameByName = function(win, name) {
                var frame;
                return (frame = getFrameByName(win, name)) ? frame : findChildFrameByName(getTop(win) || win, name);
            };
            exports.isParent = function(win, frame) {
                var frameParent = getParent(frame);
                if (frameParent) return frameParent === win;
                var _iterator6 = getFrames(win), _isArray6 = Array.isArray(_iterator6), _i8 = 0;
                for (_iterator6 = _isArray6 ? _iterator6 : _iterator6[Symbol.iterator](); ;) {
                    var _ref6;
                    if (_isArray6) {
                        if (_i8 >= _iterator6.length) break;
                        _ref6 = _iterator6[_i8++];
                    } else {
                        if ((_i8 = _iterator6.next()).done) break;
                        _ref6 = _i8.value;
                    }
                    if (_ref6 === frame) return !0;
                }
                return !1;
            };
            exports.isOpener = function(parent, child) {
                return parent === getOpener(child);
            };
            exports.getAncestor = getAncestor;
            exports.getAncestors = function(win) {
                for (var results = [], ancestor = win; ancestor; ) (ancestor = getAncestor(ancestor)) && results.push(ancestor);
                return results;
            };
            exports.isAncestor = function(parent, child) {
                var actualParent = getAncestor(child);
                if (actualParent) return actualParent === parent;
                if (child === parent) return !1;
                if (getTop(child) === child) return !1;
                var _iterator7 = getFrames(parent), _isArray7 = Array.isArray(_iterator7), _i9 = 0;
                for (_iterator7 = _isArray7 ? _iterator7 : _iterator7[Symbol.iterator](); ;) {
                    var _ref7;
                    if (_isArray7) {
                        if (_i9 >= _iterator7.length) break;
                        _ref7 = _iterator7[_i9++];
                    } else {
                        if ((_i9 = _iterator7.next()).done) break;
                        _ref7 = _i9.value;
                    }
                    if (_ref7 === child) return !0;
                }
                return !1;
            };
            exports.isPopup = isPopup;
            exports.isIframe = isIframe;
            exports.isFullpage = function() {
                return Boolean(!isIframe() && !isPopup());
            };
            exports.getDistanceFromTop = getDistanceFromTop;
            exports.getNthParent = getNthParent;
            exports.getNthParentFromTop = function(win) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                return getNthParent(win, getDistanceFromTop(win) - n);
            };
            exports.isSameTopWindow = function(win1, win2) {
                var top1 = getTop(win1) || win1, top2 = getTop(win2) || win2;
                try {
                    if (top1 && top2) return top1 === top2;
                } catch (err) {}
                var allFrames1 = getAllFramesInWindow(win1), allFrames2 = getAllFramesInWindow(win2);
                if (anyMatch(allFrames1, allFrames2)) return !0;
                var opener1 = getOpener(top1), opener2 = getOpener(top2);
                return !(opener1 && anyMatch(getAllFramesInWindow(opener1), allFrames2) || (opener2 && anyMatch(getAllFramesInWindow(opener2), allFrames1), 
                1));
            };
            exports.matchDomain = function matchDomain(pattern, origin) {
                if ("string" == typeof pattern) {
                    if ("string" == typeof origin) return pattern === CONSTANTS.WILDCARD || origin === pattern;
                    if ((0, _util.isRegex)(origin)) return !1;
                    if (Array.isArray(origin)) return !1;
                }
                return (0, _util.isRegex)(pattern) ? (0, _util.isRegex)(origin) ? pattern.toString() === origin.toString() : !Array.isArray(origin) && Boolean(origin.match(pattern)) : !!Array.isArray(pattern) && (Array.isArray(origin) ? JSON.stringify(pattern) === JSON.stringify(origin) : !(0, 
                _util.isRegex)(origin) && pattern.some(function(subpattern) {
                    return matchDomain(subpattern, origin);
                }));
            };
            exports.stringifyDomainPattern = function(pattern) {
                return Array.isArray(pattern) ? "(" + pattern.join(" | ") + ")" : (0, _util.isRegex)(pattern) ? "RegExp(" + pattern.toString() : pattern.toString();
            };
            exports.getDomainFromUrl = function(url) {
                return url.match(/^(https?|mock|file):\/\//) ? url.split("/").slice(0, 3).join("/") : getDomain();
            };
            exports.onCloseWindow = function(win, callback) {
                var delay = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3, maxtime = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1 / 0, timeout = void 0;
                !function check() {
                    if (isWindowClosed(win)) {
                        timeout && clearTimeout(timeout);
                        return callback();
                    }
                    if (maxtime <= 0) clearTimeout(timeout); else {
                        maxtime -= delay;
                        timeout = setTimeout(check, delay);
                    }
                }();
                return {
                    cancel: function() {
                        timeout && clearTimeout(timeout);
                    }
                };
            };
            exports.isWindow = function(obj) {
                try {
                    if (obj === window) return !0;
                } catch (err) {
                    if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
                }
                try {
                    if ("[object Window]" === Object.prototype.toString.call(obj)) return !0;
                } catch (err) {
                    if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
                }
                try {
                    if (window.Window && obj instanceof window.Window) return !0;
                } catch (err) {
                    if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
                }
                try {
                    if (obj && obj.self === obj) return !0;
                } catch (err) {
                    if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
                }
                try {
                    if (obj && obj.parent === obj) return !0;
                } catch (err) {
                    if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
                }
                try {
                    if (obj && obj.top === obj) return !0;
                } catch (err) {
                    if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
                }
                try {
                    (0, _util.noop)(obj == obj);
                } catch (err) {
                    return !0;
                }
                try {
                    (0, _util.noop)(obj && obj.__cross_domain_utils_window_check__);
                } catch (err) {
                    return !0;
                }
                return !1;
            };
            var _util = __webpack_require__("./node_modules/cross-domain-utils/src/util.js"), CONSTANTS = {
                MOCK_PROTOCOL: "mock:",
                FILE_PROTOCOL: "file:",
                ABOUT_PROTOCOL: "about:",
                WILDCARD: "*"
            }, IE_WIN_ACCESS_ERROR = "Call was rejected by callee.\r\n";
            function isAboutProtocol() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window).location.protocol === CONSTANTS.ABOUT_PROTOCOL;
            }
            function getParent(win) {
                if (win) try {
                    if (win.parent && win.parent !== win) return win.parent;
                } catch (err) {}
            }
            function getOpener(win) {
                if (win && !getParent(win)) try {
                    return win.opener;
                } catch (err) {}
            }
            function canReadFromWindow(win) {
                try {
                    (0, _util.noop)(win && win.location && win.location.href);
                    return !0;
                } catch (err) {}
                return !1;
            }
            function getActualDomain(win) {
                var location = win.location;
                if (!location) throw new Error("Can not read window location");
                var protocol = location.protocol;
                if (!protocol) throw new Error("Can not read window protocol");
                if (protocol === CONSTANTS.FILE_PROTOCOL) return CONSTANTS.FILE_PROTOCOL + "//";
                if (protocol === CONSTANTS.ABOUT_PROTOCOL) {
                    var parent = getParent(win);
                    return parent && canReadFromWindow(win) ? getActualDomain(parent) : CONSTANTS.ABOUT_PROTOCOL + "//";
                }
                var host = location.host;
                if (!host) throw new Error("Can not read window host");
                return protocol + "//" + host;
            }
            function getDomain(win) {
                var domain = getActualDomain(win = win || window);
                return domain && win.mockDomain && 0 === win.mockDomain.indexOf(CONSTANTS.MOCK_PROTOCOL) ? win.mockDomain : domain;
            }
            function isActuallySameDomain(win) {
                try {
                    if (win === window) return !0;
                } catch (err) {}
                try {
                    var desc = Object.getOwnPropertyDescriptor(win, "location");
                    if (desc && !1 === desc.enumerable) return !1;
                } catch (err) {}
                try {
                    if (isAboutProtocol(win) && canReadFromWindow(win)) return !0;
                } catch (err) {}
                try {
                    if (getActualDomain(win) === getActualDomain(window)) return !0;
                } catch (err) {}
                return !1;
            }
            function isSameDomain(win) {
                if (!isActuallySameDomain(win)) return !1;
                try {
                    if (win === window) return !0;
                    if (isAboutProtocol(win) && canReadFromWindow(win)) return !0;
                    if (getDomain(window) === getDomain(win)) return !0;
                } catch (err) {}
                return !1;
            }
            function getParents(win) {
                var result = [];
                try {
                    for (;win.parent !== win; ) {
                        result.push(win.parent);
                        win = win.parent;
                    }
                } catch (err) {}
                return result;
            }
            function isAncestorParent(parent, child) {
                if (!parent || !child) return !1;
                var childParent = getParent(child);
                return childParent ? childParent === parent : -1 !== getParents(child).indexOf(parent);
            }
            function getFrames(win) {
                var result = [], frames = void 0;
                try {
                    frames = win.frames;
                } catch (err) {
                    frames = win;
                }
                var len = void 0;
                try {
                    len = frames.length;
                } catch (err) {}
                if (0 === len) return result;
                if (len) {
                    for (var i = 0; i < len; i++) {
                        var frame = void 0;
                        try {
                            frame = frames[i];
                        } catch (err) {
                            continue;
                        }
                        result.push(frame);
                    }
                    return result;
                }
                for (var _i = 0; _i < 100; _i++) {
                    var _frame = void 0;
                    try {
                        _frame = frames[_i];
                    } catch (err) {
                        return result;
                    }
                    if (!_frame) return result;
                    result.push(_frame);
                }
                return result;
            }
            function getAllChildFrames(win) {
                var result = [], _iterator = getFrames(win), _isArray = Array.isArray(_iterator), _i2 = 0;
                for (_iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                    var _ref;
                    if (_isArray) {
                        if (_i2 >= _iterator.length) break;
                        _ref = _iterator[_i2++];
                    } else {
                        if ((_i2 = _iterator.next()).done) break;
                        _ref = _i2.value;
                    }
                    var frame = _ref;
                    result.push(frame);
                    var _iterator2 = getAllChildFrames(frame), _isArray2 = Array.isArray(_iterator2), _i3 = 0;
                    for (_iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator](); ;) {
                        var _ref2;
                        if (_isArray2) {
                            if (_i3 >= _iterator2.length) break;
                            _ref2 = _iterator2[_i3++];
                        } else {
                            if ((_i3 = _iterator2.next()).done) break;
                            _ref2 = _i3.value;
                        }
                        var childFrame = _ref2;
                        result.push(childFrame);
                    }
                }
                return result;
            }
            function getTop(win) {
                if (win) {
                    try {
                        if (win.top) return win.top;
                    } catch (err) {}
                    if (getParent(win) === win) return win;
                    try {
                        if (isAncestorParent(window, win) && window.top) return window.top;
                    } catch (err) {}
                    try {
                        if (isAncestorParent(win, window) && window.top) return window.top;
                    } catch (err) {}
                    var _iterator3 = getAllChildFrames(win), _isArray3 = Array.isArray(_iterator3), _i4 = 0;
                    for (_iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator](); ;) {
                        var _ref3;
                        if (_isArray3) {
                            if (_i4 >= _iterator3.length) break;
                            _ref3 = _iterator3[_i4++];
                        } else {
                            if ((_i4 = _iterator3.next()).done) break;
                            _ref3 = _i4.value;
                        }
                        var frame = _ref3;
                        try {
                            if (frame.top) return frame.top;
                        } catch (err) {}
                        if (getParent(frame) === frame) return frame;
                    }
                }
            }
            function getAllFramesInWindow(win) {
                var top = getTop(win);
                return getAllChildFrames(top).concat(top);
            }
            function isFrameWindowClosed(frame) {
                if (!frame.contentWindow) return !0;
                if (!frame.parentNode) return !0;
                var doc = frame.ownerDocument;
                return !(!doc || !doc.body || doc.body.contains(frame));
            }
            var iframeWindows = [], iframeFrames = [];
            function isWindowClosed(win) {
                var allowMock = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                try {
                    if (win === window) return !1;
                } catch (err) {
                    return !0;
                }
                try {
                    if (!win) return !0;
                } catch (err) {
                    return !0;
                }
                try {
                    if (win.closed) return !0;
                } catch (err) {
                    return !err || err.message !== IE_WIN_ACCESS_ERROR;
                }
                if (allowMock && isSameDomain(win)) try {
                    if (win.mockclosed) return !0;
                } catch (err) {}
                try {
                    if (!win.parent || !win.top) return !0;
                } catch (err) {}
                try {
                    (0, _util.noop)(win == win);
                } catch (err) {
                    return !0;
                }
                var iframeIndex = function(collection, item) {
                    for (var i = 0; i < collection.length; i++) try {
                        if (collection[i] === item) return i;
                    } catch (err) {}
                    return -1;
                }(iframeWindows, win);
                if (-1 !== iframeIndex) {
                    var frame = iframeFrames[iframeIndex];
                    if (frame && isFrameWindowClosed(frame)) return !0;
                }
                return !1;
            }
            function getFrameByName(win, name) {
                var winFrames = getFrames(win), _iterator4 = winFrames, _isArray4 = Array.isArray(_iterator4), _i6 = 0;
                for (_iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator](); ;) {
                    var _ref4;
                    if (_isArray4) {
                        if (_i6 >= _iterator4.length) break;
                        _ref4 = _iterator4[_i6++];
                    } else {
                        if ((_i6 = _iterator4.next()).done) break;
                        _ref4 = _i6.value;
                    }
                    var childFrame = _ref4;
                    try {
                        if (isSameDomain(childFrame) && childFrame.name === name && -1 !== winFrames.indexOf(childFrame)) return childFrame;
                    } catch (err) {}
                }
                try {
                    if (-1 !== winFrames.indexOf(win.frames[name])) return win.frames[name];
                } catch (err) {}
                try {
                    if (-1 !== winFrames.indexOf(win[name])) return win[name];
                } catch (err) {}
            }
            function findChildFrameByName(win, name) {
                var frame = getFrameByName(win, name);
                if (frame) return frame;
                var _iterator5 = getFrames(win), _isArray5 = Array.isArray(_iterator5), _i7 = 0;
                for (_iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator](); ;) {
                    var _ref5;
                    if (_isArray5) {
                        if (_i7 >= _iterator5.length) break;
                        _ref5 = _iterator5[_i7++];
                    } else {
                        if ((_i7 = _iterator5.next()).done) break;
                        _ref5 = _i7.value;
                    }
                    var namedFrame = findChildFrameByName(_ref5, name);
                    if (namedFrame) return namedFrame;
                }
            }
            function getAncestor(win) {
                return getOpener(win = win || window) || getParent(win) || void 0;
            }
            function isPopup() {
                return Boolean(getOpener(window));
            }
            function isIframe() {
                return Boolean(getParent(window));
            }
            function anyMatch(collection1, collection2) {
                var _iterator8 = collection1, _isArray8 = Array.isArray(_iterator8), _i10 = 0;
                for (_iterator8 = _isArray8 ? _iterator8 : _iterator8[Symbol.iterator](); ;) {
                    var _ref8;
                    if (_isArray8) {
                        if (_i10 >= _iterator8.length) break;
                        _ref8 = _iterator8[_i10++];
                    } else {
                        if ((_i10 = _iterator8.next()).done) break;
                        _ref8 = _i10.value;
                    }
                    var item1 = _ref8, _iterator9 = collection2, _isArray9 = Array.isArray(_iterator9), _i11 = 0;
                    for (_iterator9 = _isArray9 ? _iterator9 : _iterator9[Symbol.iterator](); ;) {
                        var _ref9;
                        if (_isArray9) {
                            if (_i11 >= _iterator9.length) break;
                            _ref9 = _iterator9[_i11++];
                        } else {
                            if ((_i11 = _iterator9.next()).done) break;
                            _ref9 = _i11.value;
                        }
                        if (item1 === _ref9) return !0;
                    }
                }
                return !1;
            }
            function getDistanceFromTop() {
                for (var distance = 0, parent = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window; parent; ) (parent = getParent(parent)) && (distance += 1);
                return distance;
            }
            function getNthParent(win) {
                for (var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, parent = win, i = 0; i < n; i++) {
                    if (!parent) return;
                    parent = getParent(parent);
                }
                return parent;
            }
        },
        "./node_modules/hi-base32/src/base32.js": function(module, exports, __webpack_require__) {
            "use strict";
            (function(process, global, module) {
                var __WEBPACK_AMD_DEFINE_RESULT__, _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
                    return typeof obj;
                } : function(obj) {
                    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                };
                !function() {
                    var root = "object" === ("undefined" == typeof window ? "undefined" : _typeof(window)) ? window : {};
                    !root.HI_BASE32_NO_NODE_JS && "object" === (void 0 === process ? "undefined" : _typeof(process)) && process.versions && process.versions.node && (root = global);
                    var COMMON_JS = !root.HI_BASE32_NO_COMMON_JS && "object" === _typeof(module) && module.exports, AMD = __webpack_require__("./node_modules/webpack/buildin/amd-options.js"), BASE32_ENCODE_CHAR = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567".split(""), BASE32_DECODE_CHAR = {
                        A: 0,
                        B: 1,
                        C: 2,
                        D: 3,
                        E: 4,
                        F: 5,
                        G: 6,
                        H: 7,
                        I: 8,
                        J: 9,
                        K: 10,
                        L: 11,
                        M: 12,
                        N: 13,
                        O: 14,
                        P: 15,
                        Q: 16,
                        R: 17,
                        S: 18,
                        T: 19,
                        U: 20,
                        V: 21,
                        W: 22,
                        X: 23,
                        Y: 24,
                        Z: 25,
                        2: 26,
                        3: 27,
                        4: 28,
                        5: 29,
                        6: 30,
                        7: 31
                    }, blocks = [ 0, 0, 0, 0, 0, 0, 0, 0 ], throwInvalidUtf8 = function(position, partial) {
                        partial.length > 10 && (partial = "..." + partial.substr(-10));
                        var err = new Error("Decoded data is not valid UTF-8. Maybe try base32.decode.asBytes()? Partial data after reading " + position + " bytes: " + partial + " <-");
                        err.position = position;
                        throw err;
                    }, decodeAsBytes = function(base32Str) {
                        if (!/^[A-Z2-7=]+$/.test(base32Str)) throw new Error("Invalid base32 characters");
                        for (var v1, v2, v3, v4, v5, v6, v7, v8, bytes = [], index = 0, length = (base32Str = base32Str.replace(/=/g, "")).length, i = 0, count = length >> 3 << 3; i < count; ) {
                            v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v5 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v6 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v7 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v8 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            bytes[index++] = 255 & (v1 << 3 | v2 >>> 2);
                            bytes[index++] = 255 & (v2 << 6 | v3 << 1 | v4 >>> 4);
                            bytes[index++] = 255 & (v4 << 4 | v5 >>> 1);
                            bytes[index++] = 255 & (v5 << 7 | v6 << 2 | v7 >>> 3);
                            bytes[index++] = 255 & (v7 << 5 | v8);
                        }
                        var remain = length - count;
                        if (2 === remain) {
                            v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            bytes[index++] = 255 & (v1 << 3 | v2 >>> 2);
                        } else if (4 === remain) {
                            v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            bytes[index++] = 255 & (v1 << 3 | v2 >>> 2);
                            bytes[index++] = 255 & (v2 << 6 | v3 << 1 | v4 >>> 4);
                        } else if (5 === remain) {
                            v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v5 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            bytes[index++] = 255 & (v1 << 3 | v2 >>> 2);
                            bytes[index++] = 255 & (v2 << 6 | v3 << 1 | v4 >>> 4);
                            bytes[index++] = 255 & (v4 << 4 | v5 >>> 1);
                        } else if (7 === remain) {
                            v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v5 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v6 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v7 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            bytes[index++] = 255 & (v1 << 3 | v2 >>> 2);
                            bytes[index++] = 255 & (v2 << 6 | v3 << 1 | v4 >>> 4);
                            bytes[index++] = 255 & (v4 << 4 | v5 >>> 1);
                            bytes[index++] = 255 & (v5 << 7 | v6 << 2 | v7 >>> 3);
                        }
                        return bytes;
                    }, decode = function(base32Str, asciiOnly) {
                        if (!asciiOnly) return function(bytes) {
                            for (var b, c, str = "", length = bytes.length, i = 0, followingChars = 0; i < length; ) if ((b = bytes[i++]) <= 127) str += String.fromCharCode(b); else {
                                if (b > 191 && b <= 223) {
                                    c = 31 & b;
                                    followingChars = 1;
                                } else if (b <= 239) {
                                    c = 15 & b;
                                    followingChars = 2;
                                } else if (b <= 247) {
                                    c = 7 & b;
                                    followingChars = 3;
                                } else throwInvalidUtf8(i, str);
                                for (var j = 0; j < followingChars; ++j) {
                                    ((b = bytes[i++]) < 128 || b > 191) && throwInvalidUtf8(i, str);
                                    c <<= 6;
                                    c += 63 & b;
                                }
                                c >= 55296 && c <= 57343 && throwInvalidUtf8(i, str);
                                c > 1114111 && throwInvalidUtf8(i, str);
                                if (c <= 65535) str += String.fromCharCode(c); else {
                                    c -= 65536;
                                    str += String.fromCharCode(55296 + (c >> 10));
                                    str += String.fromCharCode(56320 + (1023 & c));
                                }
                            }
                            return str;
                        }(decodeAsBytes(base32Str));
                        if (!/^[A-Z2-7=]+$/.test(base32Str)) throw new Error("Invalid base32 characters");
                        var v1, v2, v3, v4, v5, v6, v7, v8, str = "", length = base32Str.indexOf("=");
                        -1 === length && (length = base32Str.length);
                        for (var i = 0, count = length >> 3 << 3; i < count; ) {
                            v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v5 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v6 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v7 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v8 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            str += String.fromCharCode(255 & (v1 << 3 | v2 >>> 2)) + String.fromCharCode(255 & (v2 << 6 | v3 << 1 | v4 >>> 4)) + String.fromCharCode(255 & (v4 << 4 | v5 >>> 1)) + String.fromCharCode(255 & (v5 << 7 | v6 << 2 | v7 >>> 3)) + String.fromCharCode(255 & (v7 << 5 | v8));
                        }
                        var remain = length - count;
                        if (2 === remain) {
                            v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            str += String.fromCharCode(255 & (v1 << 3 | v2 >>> 2));
                        } else if (4 === remain) {
                            v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            str += String.fromCharCode(255 & (v1 << 3 | v2 >>> 2)) + String.fromCharCode(255 & (v2 << 6 | v3 << 1 | v4 >>> 4));
                        } else if (5 === remain) {
                            v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v5 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            str += String.fromCharCode(255 & (v1 << 3 | v2 >>> 2)) + String.fromCharCode(255 & (v2 << 6 | v3 << 1 | v4 >>> 4)) + String.fromCharCode(255 & (v4 << 4 | v5 >>> 1));
                        } else if (7 === remain) {
                            v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v5 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v6 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v7 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            str += String.fromCharCode(255 & (v1 << 3 | v2 >>> 2)) + String.fromCharCode(255 & (v2 << 6 | v3 << 1 | v4 >>> 4)) + String.fromCharCode(255 & (v4 << 4 | v5 >>> 1)) + String.fromCharCode(255 & (v5 << 7 | v6 << 2 | v7 >>> 3));
                        }
                        return str;
                    }, exports = {
                        encode: function(input, asciiOnly) {
                            var notString = "string" != typeof input;
                            notString && input.constructor === ArrayBuffer && (input = new Uint8Array(input));
                            return notString ? function(bytes) {
                                for (var v1, v2, v3, v4, v5, base32Str = "", length = bytes.length, i = 0, count = 5 * parseInt(length / 5); i < count; ) {
                                    v1 = bytes[i++];
                                    v2 = bytes[i++];
                                    v3 = bytes[i++];
                                    v4 = bytes[i++];
                                    v5 = bytes[i++];
                                    base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[31 & (v1 << 2 | v2 >>> 6)] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[31 & (v2 << 4 | v3 >>> 4)] + BASE32_ENCODE_CHAR[31 & (v3 << 1 | v4 >>> 7)] + BASE32_ENCODE_CHAR[v4 >>> 2 & 31] + BASE32_ENCODE_CHAR[31 & (v4 << 3 | v5 >>> 5)] + BASE32_ENCODE_CHAR[31 & v5];
                                }
                                var remain = length - count;
                                if (1 === remain) {
                                    v1 = bytes[i];
                                    base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[v1 << 2 & 31] + "======";
                                } else if (2 === remain) {
                                    v1 = bytes[i++];
                                    v2 = bytes[i];
                                    base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[31 & (v1 << 2 | v2 >>> 6)] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[v2 << 4 & 31] + "====";
                                } else if (3 === remain) {
                                    v1 = bytes[i++];
                                    v2 = bytes[i++];
                                    v3 = bytes[i];
                                    base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[31 & (v1 << 2 | v2 >>> 6)] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[31 & (v2 << 4 | v3 >>> 4)] + BASE32_ENCODE_CHAR[v3 << 1 & 31] + "===";
                                } else if (4 === remain) {
                                    v1 = bytes[i++];
                                    v2 = bytes[i++];
                                    v3 = bytes[i++];
                                    v4 = bytes[i];
                                    base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[31 & (v1 << 2 | v2 >>> 6)] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[31 & (v2 << 4 | v3 >>> 4)] + BASE32_ENCODE_CHAR[31 & (v3 << 1 | v4 >>> 7)] + BASE32_ENCODE_CHAR[v4 >>> 2 & 31] + BASE32_ENCODE_CHAR[v4 << 3 & 31] + "=";
                                }
                                return base32Str;
                            }(input) : asciiOnly ? function(str) {
                                for (var v1, v2, v3, v4, v5, base32Str = "", length = str.length, i = 0, count = 5 * parseInt(length / 5); i < count; ) {
                                    v1 = str.charCodeAt(i++);
                                    v2 = str.charCodeAt(i++);
                                    v3 = str.charCodeAt(i++);
                                    v4 = str.charCodeAt(i++);
                                    v5 = str.charCodeAt(i++);
                                    base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[31 & (v1 << 2 | v2 >>> 6)] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[31 & (v2 << 4 | v3 >>> 4)] + BASE32_ENCODE_CHAR[31 & (v3 << 1 | v4 >>> 7)] + BASE32_ENCODE_CHAR[v4 >>> 2 & 31] + BASE32_ENCODE_CHAR[31 & (v4 << 3 | v5 >>> 5)] + BASE32_ENCODE_CHAR[31 & v5];
                                }
                                var remain = length - count;
                                if (1 === remain) {
                                    v1 = str.charCodeAt(i);
                                    base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[v1 << 2 & 31] + "======";
                                } else if (2 === remain) {
                                    v1 = str.charCodeAt(i++);
                                    v2 = str.charCodeAt(i);
                                    base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[31 & (v1 << 2 | v2 >>> 6)] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[v2 << 4 & 31] + "====";
                                } else if (3 === remain) {
                                    v1 = str.charCodeAt(i++);
                                    v2 = str.charCodeAt(i++);
                                    v3 = str.charCodeAt(i);
                                    base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[31 & (v1 << 2 | v2 >>> 6)] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[31 & (v2 << 4 | v3 >>> 4)] + BASE32_ENCODE_CHAR[v3 << 1 & 31] + "===";
                                } else if (4 === remain) {
                                    v1 = str.charCodeAt(i++);
                                    v2 = str.charCodeAt(i++);
                                    v3 = str.charCodeAt(i++);
                                    v4 = str.charCodeAt(i);
                                    base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[31 & (v1 << 2 | v2 >>> 6)] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[31 & (v2 << 4 | v3 >>> 4)] + BASE32_ENCODE_CHAR[31 & (v3 << 1 | v4 >>> 7)] + BASE32_ENCODE_CHAR[v4 >>> 2 & 31] + BASE32_ENCODE_CHAR[v4 << 3 & 31] + "=";
                                }
                                return base32Str;
                            }(input) : function(str) {
                                var v1, v2, v3, v4, v5, code, i, end = !1, base32Str = "", index = 0, start = 0, length = str.length;
                                do {
                                    blocks[0] = blocks[5];
                                    blocks[1] = blocks[6];
                                    blocks[2] = blocks[7];
                                    for (i = start; index < length && i < 5; ++index) if ((code = str.charCodeAt(index)) < 128) blocks[i++] = code; else if (code < 2048) {
                                        blocks[i++] = 192 | code >> 6;
                                        blocks[i++] = 128 | 63 & code;
                                    } else if (code < 55296 || code >= 57344) {
                                        blocks[i++] = 224 | code >> 12;
                                        blocks[i++] = 128 | code >> 6 & 63;
                                        blocks[i++] = 128 | 63 & code;
                                    } else {
                                        code = 65536 + ((1023 & code) << 10 | 1023 & str.charCodeAt(++index));
                                        blocks[i++] = 240 | code >> 18;
                                        blocks[i++] = 128 | code >> 12 & 63;
                                        blocks[i++] = 128 | code >> 6 & 63;
                                        blocks[i++] = 128 | 63 & code;
                                    }
                                    start = i - 5;
                                    index === length && ++index;
                                    index > length && i < 6 && (end = !0);
                                    v1 = blocks[0];
                                    if (i > 4) {
                                        v2 = blocks[1];
                                        v3 = blocks[2];
                                        v4 = blocks[3];
                                        v5 = blocks[4];
                                        base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[31 & (v1 << 2 | v2 >>> 6)] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[31 & (v2 << 4 | v3 >>> 4)] + BASE32_ENCODE_CHAR[31 & (v3 << 1 | v4 >>> 7)] + BASE32_ENCODE_CHAR[v4 >>> 2 & 31] + BASE32_ENCODE_CHAR[31 & (v4 << 3 | v5 >>> 5)] + BASE32_ENCODE_CHAR[31 & v5];
                                    } else if (1 === i) base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[v1 << 2 & 31] + "======"; else if (2 === i) {
                                        v2 = blocks[1];
                                        base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[31 & (v1 << 2 | v2 >>> 6)] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[v2 << 4 & 31] + "====";
                                    } else if (3 === i) {
                                        v2 = blocks[1];
                                        v3 = blocks[2];
                                        base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[31 & (v1 << 2 | v2 >>> 6)] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[31 & (v2 << 4 | v3 >>> 4)] + BASE32_ENCODE_CHAR[v3 << 1 & 31] + "===";
                                    } else {
                                        v2 = blocks[1];
                                        v3 = blocks[2];
                                        v4 = blocks[3];
                                        base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[31 & (v1 << 2 | v2 >>> 6)] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[31 & (v2 << 4 | v3 >>> 4)] + BASE32_ENCODE_CHAR[31 & (v3 << 1 | v4 >>> 7)] + BASE32_ENCODE_CHAR[v4 >>> 2 & 31] + BASE32_ENCODE_CHAR[v4 << 3 & 31] + "=";
                                    }
                                } while (!end);
                                return base32Str;
                            }(input);
                        },
                        decode: decode
                    };
                    decode.asBytes = decodeAsBytes;
                    if (COMMON_JS) module.exports = exports; else {
                        root.base32 = exports;
                        AMD && void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = function() {
                            return exports;
                        }.call(exports, __webpack_require__, exports, module)) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
                    }
                }();
            }).call(exports, __webpack_require__("./node_modules/process/browser.js"), __webpack_require__("./node_modules/webpack/buildin/global.js"), __webpack_require__("./node_modules/webpack/buildin/module.js")(module));
        },
        "./node_modules/process/browser.js": function(module, exports, __webpack_require__) {
            "use strict";
            var cachedSetTimeout, cachedClearTimeout, process = module.exports = {};
            function defaultSetTimout() {
                throw new Error("setTimeout has not been defined");
            }
            function defaultClearTimeout() {
                throw new Error("clearTimeout has not been defined");
            }
            !function() {
                try {
                    cachedSetTimeout = "function" == typeof setTimeout ? setTimeout : defaultSetTimout;
                } catch (e) {
                    cachedSetTimeout = defaultSetTimout;
                }
                try {
                    cachedClearTimeout = "function" == typeof clearTimeout ? clearTimeout : defaultClearTimeout;
                } catch (e) {
                    cachedClearTimeout = defaultClearTimeout;
                }
            }();
            function runTimeout(fun) {
                if (cachedSetTimeout === setTimeout) return setTimeout(fun, 0);
                if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
                    cachedSetTimeout = setTimeout;
                    return setTimeout(fun, 0);
                }
                try {
                    return cachedSetTimeout(fun, 0);
                } catch (e) {
                    try {
                        return cachedSetTimeout.call(null, fun, 0);
                    } catch (e) {
                        return cachedSetTimeout.call(this, fun, 0);
                    }
                }
            }
            var currentQueue, queue = [], draining = !1, queueIndex = -1;
            function cleanUpNextTick() {
                if (draining && currentQueue) {
                    draining = !1;
                    currentQueue.length ? queue = currentQueue.concat(queue) : queueIndex = -1;
                    queue.length && drainQueue();
                }
            }
            function drainQueue() {
                if (!draining) {
                    var timeout = runTimeout(cleanUpNextTick);
                    draining = !0;
                    for (var len = queue.length; len; ) {
                        currentQueue = queue;
                        queue = [];
                        for (;++queueIndex < len; ) currentQueue && currentQueue[queueIndex].run();
                        queueIndex = -1;
                        len = queue.length;
                    }
                    currentQueue = null;
                    draining = !1;
                    !function(marker) {
                        if (cachedClearTimeout === clearTimeout) return clearTimeout(marker);
                        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
                            cachedClearTimeout = clearTimeout;
                            return clearTimeout(marker);
                        }
                        try {
                            cachedClearTimeout(marker);
                        } catch (e) {
                            try {
                                return cachedClearTimeout.call(null, marker);
                            } catch (e) {
                                return cachedClearTimeout.call(this, marker);
                            }
                        }
                    }(timeout);
                }
            }
            process.nextTick = function(fun) {
                var args = new Array(arguments.length - 1);
                if (arguments.length > 1) for (var i = 1; i < arguments.length; i++) args[i - 1] = arguments[i];
                queue.push(new Item(fun, args));
                1 !== queue.length || draining || runTimeout(drainQueue);
            };
            function Item(fun, array) {
                this.fun = fun;
                this.array = array;
            }
            Item.prototype.run = function() {
                this.fun.apply(null, this.array);
            };
            process.title = "browser";
            process.browser = !0;
            process.env = {};
            process.argv = [];
            process.version = "";
            process.versions = {};
            function noop() {}
            process.on = noop;
            process.addListener = noop;
            process.once = noop;
            process.off = noop;
            process.removeListener = noop;
            process.removeAllListeners = noop;
            process.emit = noop;
            process.prependListener = noop;
            process.prependOnceListener = noop;
            process.listeners = function(name) {
                return [];
            };
            process.binding = function(name) {
                throw new Error("process.binding is not supported");
            };
            process.cwd = function() {
                return "/";
            };
            process.chdir = function(dir) {
                throw new Error("process.chdir is not supported");
            };
            process.umask = function() {
                return 0;
            };
        },
        "./node_modules/webpack/buildin/amd-options.js": function(module, exports) {
            (function(__webpack_amd_options__) {
                module.exports = __webpack_amd_options__;
            }).call(exports, {});
        },
        "./node_modules/webpack/buildin/global.js": function(module, exports, __webpack_require__) {
            "use strict";
            var g, _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
            g = function() {
                return this;
            }();
            try {
                g = g || Function("return this")() || (0, eval)("this");
            } catch (e) {
                "object" === ("undefined" == typeof window ? "undefined" : _typeof(window)) && (g = window);
            }
            module.exports = g;
        },
        "./node_modules/webpack/buildin/module.js": function(module, exports, __webpack_require__) {
            "use strict";
            module.exports = function(module) {
                if (!module.webpackPolyfill) {
                    module.deprecate = function() {};
                    module.paths = [];
                    module.children || (module.children = []);
                    Object.defineProperty(module, "loaded", {
                        enumerable: !0,
                        get: function() {
                            return module.l;
                        }
                    });
                    Object.defineProperty(module, "id", {
                        enumerable: !0,
                        get: function() {
                            return module.i;
                        }
                    });
                    module.webpackPolyfill = 1;
                }
                return module;
            };
        },
        "./node_modules/zalgo-promise/src/exceptions.js": function(module, exports, __webpack_require__) {
            "use strict";
            exports.__esModule = !0;
            exports.dispatchPossiblyUnhandledError = function(err) {
                if (-1 === (0, _global.getGlobal)().dispatchedErrors.indexOf(err)) {
                    (0, _global.getGlobal)().dispatchedErrors.push(err);
                    setTimeout(function() {
                        throw err;
                    }, 1);
                    for (var j = 0; j < (0, _global.getGlobal)().possiblyUnhandledPromiseHandlers.length; j++) (0, 
                    _global.getGlobal)().possiblyUnhandledPromiseHandlers[j](err);
                }
            };
            exports.onPossiblyUnhandledException = function(handler) {
                (0, _global.getGlobal)().possiblyUnhandledPromiseHandlers.push(handler);
                return {
                    cancel: function() {
                        (0, _global.getGlobal)().possiblyUnhandledPromiseHandlers.splice((0, _global.getGlobal)().possiblyUnhandledPromiseHandlers.indexOf(handler), 1);
                    }
                };
            };
            var _global = __webpack_require__("./node_modules/zalgo-promise/src/global.js");
        },
        "./node_modules/zalgo-promise/src/global.js": function(module, exports, __webpack_require__) {
            "use strict";
            (function(global) {
                exports.__esModule = !0;
                exports.getGlobal = function() {
                    var glob = void 0;
                    if ("undefined" != typeof window) glob = window; else {
                        if (void 0 === global) throw new TypeError("Can not find global");
                        glob = global;
                    }
                    var zalgoGlobal = glob.__zalgopromise__ = glob.__zalgopromise__ || {};
                    zalgoGlobal.flushPromises = zalgoGlobal.flushPromises || [];
                    zalgoGlobal.activeCount = zalgoGlobal.activeCount || 0;
                    zalgoGlobal.possiblyUnhandledPromiseHandlers = zalgoGlobal.possiblyUnhandledPromiseHandlers || [];
                    zalgoGlobal.dispatchedErrors = zalgoGlobal.dispatchedErrors || [];
                    return zalgoGlobal;
                };
            }).call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js"));
        },
        "./node_modules/zalgo-promise/src/index.js": function(module, exports, __webpack_require__) {
            "use strict";
            exports.__esModule = !0;
            var _promise = __webpack_require__("./node_modules/zalgo-promise/src/promise.js");
            Object.defineProperty(exports, "ZalgoPromise", {
                enumerable: !0,
                get: function() {
                    return _promise.ZalgoPromise;
                }
            });
        },
        "./node_modules/zalgo-promise/src/promise.js": function(module, exports, __webpack_require__) {
            "use strict";
            exports.__esModule = !0;
            exports.ZalgoPromise = void 0;
            var _utils = __webpack_require__("./node_modules/zalgo-promise/src/utils.js"), _exceptions = __webpack_require__("./node_modules/zalgo-promise/src/exceptions.js"), _global = __webpack_require__("./node_modules/zalgo-promise/src/global.js"), ZalgoPromise = function() {
                function ZalgoPromise(handler) {
                    var _this = this;
                    !function(instance, Constructor) {
                        if (!(instance instanceof ZalgoPromise)) throw new TypeError("Cannot call a class as a function");
                    }(this);
                    this.resolved = !1;
                    this.rejected = !1;
                    this.errorHandled = !1;
                    this.handlers = [];
                    if (handler) {
                        var _result = void 0, _error = void 0, resolved = !1, rejected = !1, isAsync = !1;
                        try {
                            handler(function(res) {
                                if (isAsync) _this.resolve(res); else {
                                    resolved = !0;
                                    _result = res;
                                }
                            }, function(err) {
                                if (isAsync) _this.reject(err); else {
                                    rejected = !0;
                                    _error = err;
                                }
                            });
                        } catch (err) {
                            this.reject(err);
                            return;
                        }
                        isAsync = !0;
                        resolved ? this.resolve(_result) : rejected && this.reject(_error);
                    }
                }
                ZalgoPromise.prototype.resolve = function(result) {
                    if (this.resolved || this.rejected) return this;
                    if ((0, _utils.isPromise)(result)) throw new Error("Can not resolve promise with another promise");
                    this.resolved = !0;
                    this.value = result;
                    this.dispatch();
                    return this;
                };
                ZalgoPromise.prototype.reject = function(error) {
                    var _this2 = this;
                    if (this.resolved || this.rejected) return this;
                    if ((0, _utils.isPromise)(error)) throw new Error("Can not reject promise with another promise");
                    if (!error) {
                        var _err = error && "function" == typeof error.toString ? error.toString() : Object.prototype.toString.call(error);
                        error = new Error("Expected reject to be called with Error, got " + _err);
                    }
                    this.rejected = !0;
                    this.error = error;
                    this.errorHandled || setTimeout(function() {
                        _this2.errorHandled || (0, _exceptions.dispatchPossiblyUnhandledError)(error);
                    }, 1);
                    this.dispatch();
                    return this;
                };
                ZalgoPromise.prototype.asyncReject = function(error) {
                    this.errorHandled = !0;
                    this.reject(error);
                };
                ZalgoPromise.prototype.dispatch = function() {
                    var _this3 = this, dispatching = this.dispatching, resolved = this.resolved, rejected = this.rejected, handlers = this.handlers;
                    if (!dispatching && (resolved || rejected)) {
                        this.dispatching = !0;
                        (0, _global.getGlobal)().activeCount += 1;
                        for (var _loop = function(i) {
                            var _handlers$i = handlers[i], onSuccess = _handlers$i.onSuccess, onError = _handlers$i.onError, promise = _handlers$i.promise, result = void 0;
                            if (resolved) try {
                                result = onSuccess ? onSuccess(_this3.value) : _this3.value;
                            } catch (err) {
                                promise.reject(err);
                                return "continue";
                            } else if (rejected) {
                                if (!onError) {
                                    promise.reject(_this3.error);
                                    return "continue";
                                }
                                try {
                                    result = onError(_this3.error);
                                } catch (err) {
                                    promise.reject(err);
                                    return "continue";
                                }
                            }
                            if (result instanceof ZalgoPromise && (result.resolved || result.rejected)) {
                                result.resolved ? promise.resolve(result.value) : promise.reject(result.error);
                                result.errorHandled = !0;
                            } else (0, _utils.isPromise)(result) ? result instanceof ZalgoPromise && (result.resolved || result.rejected) ? result.resolved ? promise.resolve(result.value) : promise.reject(result.error) : result.then(function(res) {
                                promise.resolve(res);
                            }, function(err) {
                                promise.reject(err);
                            }) : promise.resolve(result);
                        }, i = 0; i < handlers.length; i++) _loop(i);
                        handlers.length = 0;
                        this.dispatching = !1;
                        (0, _global.getGlobal)().activeCount -= 1;
                        0 === (0, _global.getGlobal)().activeCount && ZalgoPromise.flushQueue();
                    }
                };
                ZalgoPromise.prototype.then = function(onSuccess, onError) {
                    if (onSuccess && "function" != typeof onSuccess && !onSuccess.call) throw new Error("Promise.then expected a function for success handler");
                    if (onError && "function" != typeof onError && !onError.call) throw new Error("Promise.then expected a function for error handler");
                    var promise = new ZalgoPromise();
                    this.handlers.push({
                        promise: promise,
                        onSuccess: onSuccess,
                        onError: onError
                    });
                    this.errorHandled = !0;
                    this.dispatch();
                    return promise;
                };
                ZalgoPromise.prototype.catch = function(onError) {
                    return this.then(void 0, onError);
                };
                ZalgoPromise.prototype.finally = function(handler) {
                    return this.then(function(result) {
                        return ZalgoPromise.try(handler).then(function() {
                            return result;
                        });
                    }, function(err) {
                        return ZalgoPromise.try(handler).then(function() {
                            throw err;
                        });
                    });
                };
                ZalgoPromise.prototype.timeout = function(time, err) {
                    var _this4 = this;
                    if (this.resolved || this.rejected) return this;
                    var timeout = setTimeout(function() {
                        _this4.resolved || _this4.rejected || _this4.reject(err || new Error("Promise timed out after " + time + "ms"));
                    }, time);
                    return this.then(function(result) {
                        clearTimeout(timeout);
                        return result;
                    });
                };
                ZalgoPromise.prototype.toPromise = function() {
                    if ("undefined" == typeof Promise) throw new TypeError("Could not find Promise");
                    return Promise.resolve(this);
                };
                ZalgoPromise.resolve = function(value) {
                    return value instanceof ZalgoPromise ? value : (0, _utils.isPromise)(value) ? new ZalgoPromise(function(resolve, reject) {
                        return value.then(resolve, reject);
                    }) : new ZalgoPromise().resolve(value);
                };
                ZalgoPromise.reject = function(error) {
                    return new ZalgoPromise().reject(error);
                };
                ZalgoPromise.all = function(promises) {
                    var promise = new ZalgoPromise(), count = promises.length, results = [];
                    if (!count) {
                        promise.resolve(results);
                        return promise;
                    }
                    for (var _loop2 = function(i) {
                        var prom = promises[i];
                        if (prom instanceof ZalgoPromise) {
                            if (prom.resolved) {
                                results[i] = prom.value;
                                count -= 1;
                                return "continue";
                            }
                        } else if (!(0, _utils.isPromise)(prom)) {
                            results[i] = prom;
                            count -= 1;
                            return "continue";
                        }
                        ZalgoPromise.resolve(prom).then(function(result) {
                            results[i] = result;
                            0 == (count -= 1) && promise.resolve(results);
                        }, function(err) {
                            promise.reject(err);
                        });
                    }, i = 0; i < promises.length; i++) _loop2(i);
                    0 === count && promise.resolve(results);
                    return promise;
                };
                ZalgoPromise.hash = function(promises) {
                    var result = {};
                    return ZalgoPromise.all(Object.keys(promises).map(function(key) {
                        return ZalgoPromise.resolve(promises[key]).then(function(value) {
                            result[key] = value;
                        });
                    })).then(function() {
                        return result;
                    });
                };
                ZalgoPromise.map = function(items, method) {
                    return ZalgoPromise.all(items.map(method));
                };
                ZalgoPromise.onPossiblyUnhandledException = function(handler) {
                    return (0, _exceptions.onPossiblyUnhandledException)(handler);
                };
                ZalgoPromise.try = function(method, context, args) {
                    var result = void 0;
                    try {
                        result = method.apply(context, args || []);
                    } catch (err) {
                        return ZalgoPromise.reject(err);
                    }
                    return ZalgoPromise.resolve(result);
                };
                ZalgoPromise.delay = function(_delay) {
                    return new ZalgoPromise(function(resolve) {
                        setTimeout(resolve, _delay);
                    });
                };
                ZalgoPromise.isPromise = function(value) {
                    return !!(value && value instanceof ZalgoPromise) || (0, _utils.isPromise)(value);
                };
                ZalgoPromise.flush = function() {
                    var promise = new ZalgoPromise();
                    (0, _global.getGlobal)().flushPromises.push(promise);
                    0 === (0, _global.getGlobal)().activeCount && ZalgoPromise.flushQueue();
                    return promise;
                };
                ZalgoPromise.flushQueue = function() {
                    var promisesToFlush = (0, _global.getGlobal)().flushPromises;
                    (0, _global.getGlobal)().flushPromises = [];
                    var _iterator = promisesToFlush, _isArray = Array.isArray(_iterator), _i = 0;
                    for (_iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                        var _ref;
                        if (_isArray) {
                            if (_i >= _iterator.length) break;
                            _ref = _iterator[_i++];
                        } else {
                            if ((_i = _iterator.next()).done) break;
                            _ref = _i.value;
                        }
                        _ref.resolve();
                    }
                };
                return ZalgoPromise;
            }();
            exports.ZalgoPromise = ZalgoPromise;
        },
        "./node_modules/zalgo-promise/src/utils.js": function(module, exports, __webpack_require__) {
            "use strict";
            exports.__esModule = !0;
            exports.isPromise = function(item) {
                try {
                    if (!item) return !1;
                    if ("undefined" != typeof Promise && item instanceof Promise) return !0;
                    if ("undefined" != typeof window && window.Window && item instanceof window.Window) return !1;
                    if ("undefined" != typeof window && window.constructor && item instanceof window.constructor) return !1;
                    var _toString = {}.toString;
                    if (_toString) {
                        var name = _toString.call(item);
                        if ("[object Window]" === name || "[object global]" === name || "[object DOMWindow]" === name) return !1;
                    }
                    if ("function" == typeof item.then) return !0;
                } catch (err) {
                    return !1;
                }
                return !1;
            };
        },
        "./src/device.js": function(module, exports, __webpack_require__) {
            "use strict";
            (function(process) {
                exports.__esModule = !0;
                exports.getUserAgent = getUserAgent;
                exports.isDevice = function() {
                    return !!getUserAgent().match(/Android|webOS|iPhone|iPad|iPod|bada|Symbian|Palm|CriOS|BlackBerry|IEMobile|WindowsMobile|Opera Mini/i);
                };
                exports.isWebView = function() {
                    var userAgent = getUserAgent();
                    return /(iPhone|iPod|iPad|Macintosh).*AppleWebKit(?!.*Safari)/i.test(userAgent) || /\bwv\b/.test(userAgent) || /Android.*Version\/(\d)\.(\d)/i.test(userAgent);
                };
                exports.isStandAlone = isStandAlone;
                exports.isFacebookWebView = isFacebookWebView;
                exports.isFirefoxIOS = isFirefoxIOS;
                exports.isEdgeIOS = isEdgeIOS;
                exports.isOperaMini = isOperaMini;
                exports.isAndroid = isAndroid;
                exports.isIos = isIos;
                exports.isGoogleSearchApp = isGoogleSearchApp;
                exports.isQQBrowser = isQQBrowser;
                exports.isIosWebview = isIosWebview;
                exports.isAndroidWebview = isAndroidWebview;
                exports.isIE = function() {
                    return !!window.document.documentMode || Boolean(window.navigator && window.navigator.userAgent && /Edge|MSIE/i.test(window.navigator.userAgent));
                };
                exports.isIECompHeader = function() {
                    var mHttp = window.document.querySelector('meta[http-equiv="X-UA-Compatible"]'), mContent = window.document.querySelector('meta[content="IE=edge"]');
                    return !(!mHttp || !mContent);
                };
                exports.isElectron = isElectron;
                exports.isIEIntranet = function() {
                    if (window.document.documentMode) try {
                        var status = window.status;
                        window.status = "testIntranetMode";
                        if ("testIntranetMode" === window.status) {
                            window.status = status;
                            return !0;
                        }
                        return !1;
                    } catch (err) {
                        return !1;
                    }
                    return !1;
                };
                exports.isMacOsCna = isMacOsCna;
                exports.supportsPopups = function() {
                    var ua = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : getUserAgent();
                    return !(isIosWebview(ua) || isAndroidWebview(ua) || isOperaMini(ua) || isFirefoxIOS(ua) || isEdgeIOS(ua) || isFacebookWebView(ua) || isQQBrowser(ua) || isElectron() || isMacOsCna() || isStandAlone());
                };
                function getUserAgent() {
                    return window.navigator.mockUserAgent || window.navigator.userAgent;
                }
                function isStandAlone() {
                    return !0 === window.navigator.standalone || window.matchMedia("(display-mode: standalone)").matches;
                }
                function isFacebookWebView() {
                    var ua = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : getUserAgent();
                    return -1 !== ua.indexOf("FBAN") || -1 !== ua.indexOf("FBAV");
                }
                function isFirefoxIOS() {
                    var ua = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : getUserAgent();
                    return /FxiOS/i.test(ua);
                }
                function isEdgeIOS() {
                    var ua = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : getUserAgent();
                    return /EdgiOS/i.test(ua);
                }
                function isOperaMini() {
                    return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : getUserAgent()).indexOf("Opera Mini") > -1;
                }
                function isAndroid() {
                    var ua = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : getUserAgent();
                    return /Android/.test(ua);
                }
                function isIos() {
                    var ua = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : getUserAgent();
                    return /iPhone|iPod|iPad/.test(ua);
                }
                function isGoogleSearchApp() {
                    var ua = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : getUserAgent();
                    return /\bGSA\b/.test(ua);
                }
                function isQQBrowser() {
                    var ua = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : getUserAgent();
                    return /QQBrowser/.test(ua);
                }
                function isIosWebview() {
                    var ua = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : getUserAgent();
                    return !!isIos(ua) && (!!isGoogleSearchApp(ua) || /.+AppleWebKit(?!.*Safari)/.test(ua));
                }
                function isAndroidWebview() {
                    var ua = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : getUserAgent();
                    return !!isAndroid(ua) && /Version\/[\d.]+/.test(ua) && !isOperaMini(ua);
                }
                function isElectron() {
                    return !(void 0 === process || !process.versions || !process.versions.electron);
                }
                function isMacOsCna() {
                    var userAgent = getUserAgent();
                    return /Macintosh.*AppleWebKit(?!.*Safari)/i.test(userAgent);
                }
            }).call(exports, __webpack_require__("./node_modules/process/browser.js"));
        },
        "./src/dom.js": function(module, exports, __webpack_require__) {
            "use strict";
            exports.__esModule = !0;
            exports.enablePerformance = exports.parseQuery = exports.waitForDocumentReady = void 0;
            exports.isDocumentReady = isDocumentReady;
            exports.waitForDocumentBody = function() {
                return waitForDocumentReady.then(function() {
                    if (document.body) return document.body;
                    throw new Error("Document ready but document.body not present");
                });
            };
            exports.getQueryParam = function(name) {
                return parseQuery(window.location.search.slice(1))[name];
            };
            exports.urlWillRedirectPage = urlWillRedirectPage;
            exports.extendUrl = function(url) {
                var params = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, hasHash = url.indexOf("#") > 0, _url$split = url.split("#"), serverUrl = _url$split[0], hash = _url$split[1];
                if (hash && !serverUrl) {
                    var _ref2 = [ "#" + hash, "" ];
                    serverUrl = _ref2[0];
                    hash = _ref2[1];
                }
                var _serverUrl$split = serverUrl.split("?"), originalUrl = _serverUrl$split[0], originalQueryString = _serverUrl$split[1];
                if (originalQueryString) {
                    var originalQuery = parseQuery(originalQueryString);
                    for (var _key in originalQuery) params.hasOwnProperty(_key) || (params[_key] = originalQuery[_key]);
                }
                var newQueryString = Object.keys(params).filter(function(key) {
                    return key && params[key];
                }).sort().map(function(key) {
                    return encodeURIComponent(key) + "=" + encodeURIComponent(params[key]);
                }).join("&"), newUrl = originalUrl;
                newQueryString && (newUrl = newUrl + "?" + newQueryString);
                hasHash && (newUrl = newUrl + "#" + (hash || ""));
                return newUrl;
            };
            exports.redirect = function(url) {
                var win = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window;
                return new _src.ZalgoPromise(function(resolve) {
                    setTimeout(function() {
                        win.location = url;
                        urlWillRedirectPage(url) || resolve();
                    }, 1);
                });
            };
            exports.hasMetaViewPort = function() {
                var meta = document.querySelector("meta[name=viewport]");
                return !((0, _device.isDevice)() && window.screen.width < 660 && !meta);
            };
            exports.isElementVisible = function(el) {
                return Boolean(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
            };
            exports.getPageRenderTime = function() {
                return waitForDocumentReady().then(function() {
                    if (enablePerformance()) {
                        var timing = window.performance.timing;
                        return timing.connectEnd && timing.domInteractive ? timing.domInteractive - timing.connectEnd : void 0;
                    }
                });
            };
            exports.htmlEncode = function() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString().replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/\//g, "&#x2F;");
            };
            var _src = __webpack_require__("./node_modules/zalgo-promise/src/index.js"), _util = __webpack_require__("./src/util.js"), _device = __webpack_require__("./src/device.js");
            function isDocumentReady() {
                return Boolean(document.body) && "complete" === document.readyState;
            }
            var waitForDocumentReady = exports.waitForDocumentReady = (0, _util.memoize)(function() {
                return new _src.ZalgoPromise(function(resolve) {
                    if (isDocumentReady()) return resolve();
                    var interval = setInterval(function() {
                        if (isDocumentReady()) {
                            clearInterval(interval);
                            return resolve();
                        }
                    }, 10);
                });
            }), parseQuery = exports.parseQuery = (0, _util.memoize)(function(queryString) {
                var params = {};
                if (!queryString) return params;
                if (-1 === queryString.indexOf("=")) return params;
                var _iterator = queryString.split("&"), _isArray = Array.isArray(_iterator), _i = 0;
                for (_iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                    var _ref;
                    if (_isArray) {
                        if (_i >= _iterator.length) break;
                        _ref = _iterator[_i++];
                    } else {
                        if ((_i = _iterator.next()).done) break;
                        _ref = _i.value;
                    }
                    var pair = _ref;
                    (pair = pair.split("="))[0] && pair[1] && (params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]));
                }
                return params;
            });
            function urlWillRedirectPage(url) {
                return -1 === url.indexOf("#") || 0 !== url.indexOf("#") && url.split("#")[0] !== window.location.href.split("#")[0];
            }
            var enablePerformance = exports.enablePerformance = (0, _util.memoize)(function() {
                return Boolean(window.performance && performance.now && performance.timing && performance.timing.connectEnd && performance.timing.navigationStart && Math.abs(performance.now() - Date.now()) > 1e3 && performance.now() - (performance.timing.connectEnd - performance.timing.navigationStart) > 0);
            });
        },
        "./src/experiment.js": function(module, exports, __webpack_require__) {
            "use strict";
            exports.__esModule = !0;
            exports.experiment = function(_ref) {
                var group, name = _ref.name, _ref$sample = _ref.sample, sample = void 0 === _ref$sample ? 50 : _ref$sample, _ref$logTreatment = _ref.logTreatment, logTreatment = void 0 === _ref$logTreatment ? _util.noop : _ref$logTreatment, _ref$logCheckpoint = _ref.logCheckpoint, logCheckpoint = void 0 === _ref$logCheckpoint ? _util.noop : _ref$logCheckpoint, throttle = function(name) {
                    return storage.getState(function(state) {
                        state.throttlePercentiles = state.throttlePercentiles || {};
                        state.throttlePercentiles[name] = state.throttlePercentiles[name] || Math.floor(100 * Math.random());
                        return state.throttlePercentiles[name];
                    });
                }(name);
                group = throttle < sample ? THROTTLE_GROUP.TEST : sample >= 50 || sample <= throttle && throttle < 2 * sample ? THROTTLE_GROUP.CONTROL : THROTTLE_GROUP.THROTTLE;
                var treatment = name + "_" + group, started = !1, forced = !1;
                try {
                    window.localStorage && window.localStorage.getItem(name) && (forced = !0);
                } catch (err) {}
                return {
                    isEnabled: function() {
                        return group === THROTTLE_GROUP.TEST || forced;
                    },
                    isDisabled: function() {
                        return group !== THROTTLE_GROUP.TEST && !forced;
                    },
                    getTreatment: function() {
                        return treatment;
                    },
                    log: function(checkpoint) {
                        var payload = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (!started) return this;
                        isEventUnique(name + "_" + treatment) && logTreatment({
                            name: name,
                            treatment: treatment
                        });
                        isEventUnique(name + "_" + treatment + "_" + checkpoint) && logCheckpoint({
                            name: name,
                            treatment: treatment,
                            checkpoint: checkpoint,
                            payload: payload
                        });
                        return this;
                    },
                    logStart: function() {
                        var payload = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        started = !0;
                        return this.log("start", payload);
                    },
                    logComplete: function() {
                        var payload = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return this.log("complete", payload);
                    }
                };
            };
            var _storage = __webpack_require__("./src/storage.js"), _util = __webpack_require__("./src/util.js"), storage = (0, 
            _storage.getStorage)({
                name: "belter_experiment"
            });
            function isEventUnique(name) {
                return storage.getSessionState(function(state) {
                    state.loggedBeacons = state.loggedBeacons || [];
                    if (-1 === state.loggedBeacons.indexOf(name)) {
                        state.loggedBeacons.push(name);
                        return !0;
                    }
                    return !1;
                });
            }
            var THROTTLE_GROUP = {
                TEST: "test",
                CONTROL: "control",
                THROTTLE: "throttle"
            };
        },
        "./src/global.js": function(module, exports, __webpack_require__) {
            "use strict";
            exports.__esModule = !0;
            exports.getGlobalNameSpace = function(_ref) {
                var name = _ref.name, _ref$version = _ref.version, version = void 0 === _ref$version ? "latest" : _ref$version, global = (0, 
                _util.getGlobal)(), globalKey = "__" + name + "__" + version + "_global__", namespace = global[globalKey] = global[globalKey] || {};
                return {
                    get: function(key, defValue) {
                        defValue = defValue || {};
                        return namespace[key] = namespace[key] || defValue;
                    }
                };
            };
            var _util = __webpack_require__("./src/util.js");
        },
        "./src/http.js": function(module, exports, __webpack_require__) {
            "use strict";
            exports.__esModule = !0;
            var _extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                }
                return target;
            }, _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
            exports.request = request;
            var _src = __webpack_require__("./node_modules/zalgo-promise/src/index.js");
            __webpack_require__("./node_modules/cross-domain-utils/src/index.js");
            var HEADERS = {
                CONTENT_TYPE: "content-type",
                ACCEPT: "accept"
            }, headerBuilders = [];
            function request(_ref2) {
                var url = _ref2.url, _ref2$method = _ref2.method, method = void 0 === _ref2$method ? "get" : _ref2$method, _ref2$headers = _ref2.headers, headers = void 0 === _ref2$headers ? {} : _ref2$headers, json = _ref2.json, data = _ref2.data, body = _ref2.body, _ref2$win = _ref2.win, win = void 0 === _ref2$win ? window : _ref2$win, _ref2$timeout = _ref2.timeout, timeout = void 0 === _ref2$timeout ? 0 : _ref2$timeout;
                return new _src.ZalgoPromise(function(resolve, reject) {
                    if (json && data || json && body || data && json) throw new Error("Only options.json or options.data or options.body should be passed");
                    var normalizedHeaders = {}, _iterator2 = Object.keys(headers), _isArray2 = Array.isArray(_iterator2), _i2 = 0;
                    for (_iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator](); ;) {
                        var _ref3;
                        if (_isArray2) {
                            if (_i2 >= _iterator2.length) break;
                            _ref3 = _iterator2[_i2++];
                        } else {
                            if ((_i2 = _iterator2.next()).done) break;
                            _ref3 = _i2.value;
                        }
                        var _key3 = _ref3;
                        normalizedHeaders[_key3.toLowerCase()] = headers[_key3];
                    }
                    json ? normalizedHeaders[HEADERS.CONTENT_TYPE] = normalizedHeaders[HEADERS.CONTENT_TYPE] || "application/json" : (data || body) && (normalizedHeaders[HEADERS.CONTENT_TYPE] = normalizedHeaders[HEADERS.CONTENT_TYPE] || "application/x-www-form-urlencoded; charset=utf-8");
                    normalizedHeaders[HEADERS.ACCEPT] = normalizedHeaders[HEADERS.ACCEPT] || "application/json";
                    var _iterator3 = headerBuilders, _isArray3 = Array.isArray(_iterator3), _i3 = 0;
                    for (_iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator](); ;) {
                        var _ref4;
                        if (_isArray3) {
                            if (_i3 >= _iterator3.length) break;
                            _ref4 = _iterator3[_i3++];
                        } else {
                            if ((_i3 = _iterator3.next()).done) break;
                            _ref4 = _i3.value;
                        }
                        var builtHeaders = _ref4(), _iterator4 = Object.keys(builtHeaders), _isArray4 = Array.isArray(_iterator4), _i4 = 0;
                        for (_iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator](); ;) {
                            var _ref5;
                            if (_isArray4) {
                                if (_i4 >= _iterator4.length) break;
                                _ref5 = _iterator4[_i4++];
                            } else {
                                if ((_i4 = _iterator4.next()).done) break;
                                _ref5 = _i4.value;
                            }
                            var _key4 = _ref5;
                            normalizedHeaders[_key4.toLowerCase()] = builtHeaders[_key4];
                        }
                    }
                    var xhr = new win.XMLHttpRequest();
                    xhr.addEventListener("load", function() {
                        var responseHeaders = function() {
                            var result = {}, _iterator = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").trim().split("\n"), _isArray = Array.isArray(_iterator), _i = 0;
                            for (_iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                                var _ref;
                                if (_isArray) {
                                    if (_i >= _iterator.length) break;
                                    _ref = _iterator[_i++];
                                } else {
                                    if ((_i = _iterator.next()).done) break;
                                    _ref = _i.value;
                                }
                                var _line$split = _ref.split(":"), _key = _line$split[0], values = _line$split.slice(1);
                                result[_key.toLowerCase()] = values.join(":").trim();
                            }
                            return result;
                        }(this.getAllResponseHeaders());
                        if (!this.status) return reject(new Error("Request to " + method.toLowerCase() + " " + url + " failed: no response status code."));
                        var contentType = responseHeaders["content-type"], isJSON = contentType && (0 === contentType.indexOf("application/json") || 0 === contentType.indexOf("text/json")), res = this.responseText;
                        try {
                            res = JSON.parse(this.responseText);
                        } catch (err) {
                            if (isJSON) return reject(new Error("Invalid json: " + this.responseText + "."));
                        }
                        if (this.status >= 400) {
                            var message = "Request to " + method.toLowerCase() + " " + url + " failed with " + this.status + " error.";
                            if (res) {
                                "object" === (void 0 === res ? "undefined" : _typeof(res)) && null !== res && (res = JSON.stringify(res, null, 4));
                                message = message + "\n\n" + res + "\n";
                            }
                            return reject(new Error(message));
                        }
                        return resolve(res);
                    }, !1);
                    xhr.addEventListener("error", function(evt) {
                        reject(new Error("Request to " + method.toLowerCase() + " " + url + " failed: " + evt.toString() + "."));
                    }, !1);
                    xhr.open(method, url, !0);
                    for (var _key2 in normalizedHeaders) normalizedHeaders.hasOwnProperty(_key2) && xhr.setRequestHeader(_key2, normalizedHeaders[_key2]);
                    json ? body = JSON.stringify(json) : data && (body = Object.keys(data).map(function(key) {
                        return encodeURIComponent(key) + "=" + (data ? encodeURIComponent(data[key]) : "");
                    }).join("&"));
                    xhr.timeout = timeout;
                    xhr.ontimeout = function() {
                        reject(new Error("Request to " + method.toLowerCase() + " " + url + " has timed out"));
                    };
                    xhr.send(body);
                });
            }
            request.get = function(url) {
                var options = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return request(_extends({
                    method: "get",
                    url: url
                }, options));
            };
            request.post = function(url, data) {
                var options = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return request(_extends({
                    method: "post",
                    url: url,
                    data: data
                }, options));
            };
            request.addHeaderBuilder = function(method) {
                headerBuilders.push(method);
            };
        },
        "./src/index.js": function(module, exports, __webpack_require__) {
            "use strict";
            exports.__esModule = !0;
            var _device = __webpack_require__("./src/device.js");
            Object.keys(_device).forEach(function(key) {
                "default" !== key && "__esModule" !== key && Object.defineProperty(exports, key, {
                    enumerable: !0,
                    get: function() {
                        return _device[key];
                    }
                });
            });
            var _dom = __webpack_require__("./src/dom.js");
            Object.keys(_dom).forEach(function(key) {
                "default" !== key && "__esModule" !== key && Object.defineProperty(exports, key, {
                    enumerable: !0,
                    get: function() {
                        return _dom[key];
                    }
                });
            });
            var _experiment = __webpack_require__("./src/experiment.js");
            Object.keys(_experiment).forEach(function(key) {
                "default" !== key && "__esModule" !== key && Object.defineProperty(exports, key, {
                    enumerable: !0,
                    get: function() {
                        return _experiment[key];
                    }
                });
            });
            var _global = __webpack_require__("./src/global.js");
            Object.keys(_global).forEach(function(key) {
                "default" !== key && "__esModule" !== key && Object.defineProperty(exports, key, {
                    enumerable: !0,
                    get: function() {
                        return _global[key];
                    }
                });
            });
            var _jsx = __webpack_require__("./src/jsx.jsx");
            Object.keys(_jsx).forEach(function(key) {
                "default" !== key && "__esModule" !== key && Object.defineProperty(exports, key, {
                    enumerable: !0,
                    get: function() {
                        return _jsx[key];
                    }
                });
            });
            var _storage = __webpack_require__("./src/storage.js");
            Object.keys(_storage).forEach(function(key) {
                "default" !== key && "__esModule" !== key && Object.defineProperty(exports, key, {
                    enumerable: !0,
                    get: function() {
                        return _storage[key];
                    }
                });
            });
            var _util = __webpack_require__("./src/util.js");
            Object.keys(_util).forEach(function(key) {
                "default" !== key && "__esModule" !== key && Object.defineProperty(exports, key, {
                    enumerable: !0,
                    get: function() {
                        return _util[key];
                    }
                });
            });
            var _http = __webpack_require__("./src/http.js");
            Object.keys(_http).forEach(function(key) {
                "default" !== key && "__esModule" !== key && Object.defineProperty(exports, key, {
                    enumerable: !0,
                    get: function() {
                        return _http[key];
                    }
                });
            });
        },
        "./src/jsx.jsx": function(module, exports, __webpack_require__) {
            "use strict";
            exports.__esModule = !0;
            exports.JsxHTMLNodeContainer = exports.JsxHTMLNode = void 0;
            var _extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                }
                return target;
            };
            exports.jsxToHTML = jsxToHTML;
            exports.jsxRender = function(template, renderers) {
                var nodes = (0, _util.regexMap)(template, /\{\s*([a-z]+)(?::\s*([^} ]+))?\s*\}|([^${}]+)/g, function(match, type, value, text) {
                    if (type) {
                        if (!renderers[type]) throw new Error("Can not render type: " + type);
                        return renderers[type](value);
                    }
                    return text && text.trim() && renderers.text ? /<br>/.test(text) ? renderers.break(text) : renderers.text(text) : text;
                });
                return new JsxHTMLNodeContainer(nodes);
            };
            exports.Fragment = function(props, children) {
                return new JsxHTMLNodeContainer(children);
            };
            exports.SVG = function(props) {
                var svg = props.svg, otherProps = function(obj, keys) {
                    var target = {};
                    for (var i in obj) keys.indexOf(i) >= 0 || Object.prototype.hasOwnProperty.call(obj, i) && (target[i] = obj[i]);
                    return target;
                }(props, [ "svg" ]);
                if (!svg || "string" != typeof svg) throw new TypeError("Expected svg prop to be a string");
                return jsxToHTML("img", _extends({
                    src: (0, _util.svgToBase64)(svg)
                }, otherProps));
            };
            var _util = __webpack_require__("./src/util.js");
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
            }
            function htmlEncode() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString().replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/\//g, "&#x2F;");
            }
            var JsxHTMLNode = exports.JsxHTMLNode = function() {
                function JsxHTMLNode(name, props, children) {
                    _classCallCheck(this, JsxHTMLNode);
                    this.name = name;
                    this.props = props;
                    this.children = children;
                }
                JsxHTMLNode.prototype.toString = function() {
                    return "<" + this.name + (this.props ? " " : "") + (this.props ? this.propsToString() : "") + ">" + this.childrenToString() + "</" + this.name + ">";
                };
                JsxHTMLNode.prototype.propsToString = function() {
                    var props = this.props;
                    return props ? Object.keys(props).filter(function(key) {
                        return "innerHTML" !== key && props && !1 !== props[key];
                    }).map(function(key) {
                        if (props) {
                            var val = props[key];
                            if (!0 === val) return "" + htmlEncode(key);
                            if ("string" == typeof val) return htmlEncode(key) + '="' + htmlEncode(val) + '"';
                        }
                        return "";
                    }).filter(Boolean).join(" ") : "";
                };
                JsxHTMLNode.prototype.childrenToString = function() {
                    if (this.props && this.props.innerHTML) return this.props.innerHTML;
                    if (!this.children) return "";
                    var result = "";
                    !function iterate(children) {
                        var _iterator = children, _isArray = Array.isArray(_iterator), _i = 0;
                        for (_iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                            var _ref;
                            if (_isArray) {
                                if (_i >= _iterator.length) break;
                                _ref = _iterator[_i++];
                            } else {
                                if ((_i = _iterator.next()).done) break;
                                _ref = _i.value;
                            }
                            var child = _ref;
                            null !== child && void 0 !== child && (Array.isArray(child) ? iterate(child) : result += child instanceof JsxHTMLNode ? child.toString() : htmlEncode(child));
                        }
                    }(this.children);
                    return result;
                };
                return JsxHTMLNode;
            }(), JsxHTMLNodeContainer = exports.JsxHTMLNodeContainer = function(_JsxHTMLNode) {
                !function(subClass, superClass) {
                    if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                    subClass.prototype = Object.create(superClass && superClass.prototype, {
                        constructor: {
                            value: subClass,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
                }(JsxHTMLNodeContainer, _JsxHTMLNode);
                function JsxHTMLNodeContainer(children) {
                    _classCallCheck(this, JsxHTMLNodeContainer);
                    return function(self, call) {
                        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !call || "object" != typeof call && "function" != typeof call ? self : call;
                    }(this, _JsxHTMLNode.call(this, "", {}, children));
                }
                JsxHTMLNodeContainer.prototype.toString = function() {
                    return this.childrenToString();
                };
                return JsxHTMLNodeContainer;
            }(JsxHTMLNode);
            function jsxToHTML(element) {
                for (var props = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) children[_key - 2] = arguments[_key];
                if ("string" == typeof element) return new JsxHTMLNode(element, props, children);
                if ("function" == typeof element) return element(props, children);
                throw new TypeError("Expected jsx Element to be a string or a function");
            }
        },
        "./src/storage.js": function(module, exports, __webpack_require__) {
            "use strict";
            exports.__esModule = !0;
            exports.getStorage = function(_ref) {
                var name = _ref.name, _ref$version = _ref.version, version = void 0 === _ref$version ? "latest" : _ref$version, _ref$lifetime = _ref.lifetime, lifetime = void 0 === _ref$lifetime ? 3e5 : _ref$lifetime, STORAGE_KEY = "__" + name + "_" + version + "_storage__";
                if (storeCache[STORAGE_KEY]) return storeCache[STORAGE_KEY];
                var accessedStorage = void 0;
                function getState(handler) {
                    var localStorageEnabled = (0, _util.isLocalStorageEnabled)(), storage = void 0;
                    accessedStorage && (storage = accessedStorage);
                    if (!storage && localStorageEnabled) {
                        var rawStorage = window.localStorage.getItem(STORAGE_KEY);
                        rawStorage && (storage = JSON.parse(rawStorage));
                    }
                    storage || (storage = window[STORAGE_KEY]);
                    storage || (storage = {
                        id: (0, _util.uniqueID)()
                    });
                    storage.id || (storage.id = (0, _util.uniqueID)());
                    accessedStorage = storage;
                    var result = handler(storage);
                    localStorageEnabled ? window.localStorage.setItem(STORAGE_KEY, JSON.stringify(storage)) : window[STORAGE_KEY] = storage;
                    accessedStorage = null;
                    return result;
                }
                function getSession(handler) {
                    return getState(function(storage) {
                        var session = storage.__session__, now = Date.now();
                        session && now - session.created > lifetime && (session = null);
                        session || (session = {
                            guid: (0, _util.uniqueID)(),
                            created: now
                        });
                        storage.__session__ = session;
                        return handler(session);
                    });
                }
                return {
                    getState: getState,
                    getID: function() {
                        return getState(function(storage) {
                            return storage.id;
                        });
                    },
                    getSessionState: function(handler) {
                        return getSession(function(session) {
                            session.state = session.state || {};
                            return handler(session.state);
                        });
                    },
                    getSessionID: function() {
                        return getSession(function(session) {
                            return session.guid;
                        });
                    }
                };
            };
            var _util = __webpack_require__("./src/util.js"), storeCache = {};
        },
        "./src/util.js": function(module, exports, __webpack_require__) {
            "use strict";
            (function(global) {
                exports.__esModule = !0;
                exports.isLocalStorageEnabled = void 0;
                exports.getGlobal = getGlobal;
                exports.memoize = memoize;
                exports.noop = function() {};
                exports.once = function(method) {
                    var called = !1;
                    return function() {
                        if (!called) {
                            called = !0;
                            return method.apply(this, arguments);
                        }
                    };
                };
                exports.uniqueID = function() {
                    var chars = "0123456789abcdef";
                    return "xxxxxxxxxx".replace(/./g, function() {
                        return chars.charAt(Math.floor(Math.random() * chars.length));
                    }) + "_" + _hiBase2.default.encode(new Date().toISOString().slice(11, 19).replace("T", ".")).replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
                };
                exports.hashStr = function(str) {
                    for (var hash = 0, i = 0; i < str.length; i++) hash += str[i].charCodeAt(0) * Math.pow(i % 10 + 1, 5);
                    return Math.floor(Math.pow(Math.sqrt(hash), 5));
                };
                exports.strHashStr = function(str) {
                    for (var hash = "", i = 0; i < str.length; i++) {
                        var total = str[i].charCodeAt(0) * i;
                        str[i + 1] && (total += str[i + 1].charCodeAt(0) * (i - 1));
                        hash += String.fromCharCode(97 + Math.abs(total) % 26);
                    }
                    return hash;
                };
                exports.match = function(str, pattern) {
                    var regmatch = str.match(pattern);
                    if (regmatch) return regmatch[1];
                };
                exports.eventEmitter = function() {
                    var listeners = [];
                    return {
                        listen: function(method) {
                            listeners.push(method);
                            return {
                                cancel: function() {
                                    listeners.splice(listeners.indexOf(method), 1);
                                }
                            };
                        },
                        once: function(method) {
                            var listener = this.listen(function() {
                                method.apply(null, arguments);
                                listener.cancel();
                            });
                        },
                        trigger: function() {
                            var _iterator = listeners, _isArray = Array.isArray(_iterator), _i = 0;
                            for (_iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                                var _ref;
                                if (_isArray) {
                                    if (_i >= _iterator.length) break;
                                    _ref = _iterator[_i++];
                                } else {
                                    if ((_i = _iterator.next()).done) break;
                                    _ref = _i.value;
                                }
                                _ref.apply(void 0, arguments);
                            }
                        }
                    };
                };
                exports.awaitKey = function(obj, key) {
                    return new _src.ZalgoPromise(function(resolve) {
                        var value = obj[key];
                        if (value) return resolve(value);
                        delete obj[key];
                        Object.defineProperty(obj, key, {
                            configurable: !0,
                            set: function(item) {
                                (value = item) && resolve(value);
                            },
                            get: function() {
                                return value;
                            }
                        });
                    });
                };
                exports.stringifyError = function stringifyError(err) {
                    var level = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                    if (level >= 3) return "stringifyError stack overflow";
                    try {
                        if (!err) return "<unknown error: " + Object.prototype.toString.call(err) + ">";
                        if ("string" == typeof err) return err;
                        if (err instanceof Error) {
                            var stack = err && err.stack, message = err && err.message;
                            if (stack && message) return -1 !== stack.indexOf(message) ? stack : message + "\n" + stack;
                            if (stack) return stack;
                            if (message) return message;
                        }
                        return "function" == typeof err.toString ? err.toString() : Object.prototype.toString.call(err);
                    } catch (newErr) {
                        return "Error while stringifying error: " + stringifyError(newErr, level + 1);
                    }
                };
                exports.stringifyErrorMessage = function(err) {
                    var defaultMessage = "<unknown error: " + Object.prototype.toString.call(err) + ">";
                    return err ? err instanceof Error ? err.message || defaultMessage : "string" == typeof err.message && err.message || defaultMessage : defaultMessage;
                };
                exports.stringify = function(item) {
                    return "string" == typeof item ? item : item && "function" == typeof item.toString ? item.toString() : Object.prototype.toString.call(item);
                };
                exports.domainMatches = function(hostname, domain) {
                    var index = (hostname = hostname.split("://")[1]).indexOf(domain);
                    return -1 !== index && hostname.slice(index) === domain;
                };
                exports.patchMethod = function(obj, name, handler) {
                    var original = obj[name];
                    obj[name] = function() {
                        var _this = this, _arguments = arguments;
                        return handler({
                            context: this,
                            args: Array.prototype.slice.call(arguments),
                            original: original,
                            callOriginal: function() {
                                return original.apply(_this, _arguments);
                            }
                        });
                    };
                };
                exports.extend = function(obj, source) {
                    if (!source) return obj;
                    if (Object.assign) return Object.assign(obj, source);
                    for (var _key2 in source) source.hasOwnProperty(_key2) && (obj[_key2] = source[_key2]);
                    return obj;
                };
                exports.values = function(obj) {
                    var result = [];
                    for (var _key3 in obj) obj.hasOwnProperty(_key3) && result.push(obj[_key3]);
                    return result;
                };
                exports.perc = function(pixels, percentage) {
                    return Math.round(pixels * percentage / 100);
                };
                exports.min = function() {
                    return Math.min.apply(Math, arguments);
                };
                exports.max = function() {
                    return Math.max.apply(Math, arguments);
                };
                exports.regexMap = function(str, regex, handler) {
                    var results = [];
                    str.replace(regex, function() {
                        results.push(handler.apply(null, arguments));
                    });
                    return results;
                };
                exports.svgToBase64 = function(svg) {
                    return "data:image/svg+xml;base64," + (0, _Base.btoa)(svg);
                };
                exports.objFilter = function(obj) {
                    var filter = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Boolean, result = {};
                    for (var _key4 in obj) obj.hasOwnProperty(_key4) && filter(obj[_key4], _key4) && (result[_key4] = obj[_key4]);
                    return result;
                };
                var obj, _hiBase2 = (obj = __webpack_require__("./node_modules/hi-base32/src/base32.js")) && obj.__esModule ? obj : {
                    default: obj
                }, _Base = __webpack_require__("./node_modules/Base64/base64.js"), _src = __webpack_require__("./node_modules/zalgo-promise/src/index.js");
                function getGlobal() {
                    if ("undefined" != typeof window) return window;
                    if (void 0 !== global) return global;
                    throw new Error("No global found");
                }
                function memoize(method) {
                    var options = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, cache = {};
                    return function() {
                        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                        var key = void 0;
                        try {
                            key = JSON.stringify(Array.prototype.slice.call(arguments));
                        } catch (err) {
                            throw new Error("Arguments not serializable -- can not be used to memoize");
                        }
                        var time = options.time;
                        cache[key] && time && Date.now() - cache[key].time < time && delete cache[key];
                        var glob = getGlobal();
                        glob.__CACHE_START_TIME__ && cache[key] && cache[key].time < glob.__CACHE_START_TIME__ && delete cache[key];
                        if (cache[key]) return cache[key].value;
                        cache[key] = {
                            time: Date.now(),
                            value: method.apply(this, arguments)
                        };
                        return cache[key].value;
                    };
                }
                exports.isLocalStorageEnabled = memoize(function() {
                    try {
                        if ("undefined" == typeof window) return !1;
                        if (window.localStorage) {
                            var _value = Math.random().toString();
                            window.localStorage.setItem("__test__localStorage__", _value);
                            var result = window.localStorage.getItem("__test__localStorage__");
                            window.localStorage.removeItem("__test__localStorage__");
                            if (_value === result) return !0;
                        }
                    } catch (err) {}
                    return !1;
                });
            }).call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js"));
        }
    });
});
//# sourceMappingURL=mylibrary.js.map
//# sourceMappingURL=mylibrary.js.map