(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+nxj":
    /*!******************************************************!*\
      !*** ./src/generated/api/api/sampleTypes.service.ts ***!
      \******************************************************/

    /*! exports provided: SampleTypesService */

    /***/
    function nxj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SampleTypesService", function () {
        return SampleTypesService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../encoder */
      "i0KE");
      /* harmony import */


      var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../variables */
      "G5Mf");
      /* harmony import */


      var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../configuration */
      "PKcu");
      /**
       *
       * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
       *
       * The version of the OpenAPI document: 0.0.0
       *
       *
       * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
       * https://openapi-generator.tech
       * Do not edit the class manually.
       */

      /* tslint:disable:no-unused-variable member-ordering */


      var SampleTypesService = /*#__PURE__*/function () {
        function SampleTypesService(httpClient, basePath, configuration) {
          _classCallCheck(this, SampleTypesService);

          this.httpClient = httpClient;
          this.basePath = 'http://localhost';
          this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();

          if (configuration) {
            this.configuration = configuration;
          }

          if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
              basePath = this.basePath;
            }

            this.configuration.basePath = basePath;
          }

          this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpParameterCodec"]();
        }

        _createClass(SampleTypesService, [{
          key: "addToHttpParams",
          value: function addToHttpParams(httpParams, value, key) {
            if (typeof value === "object" && value instanceof Date === false) {
              httpParams = this.addToHttpParamsRecursive(httpParams, value);
            } else {
              httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
            }

            return httpParams;
          }
        }, {
          key: "addToHttpParamsRecursive",
          value: function addToHttpParamsRecursive(httpParams, value, key) {
            var _this = this;

            if (value == null) {
              return httpParams;
            }

            if (typeof value === "object") {
              if (Array.isArray(value)) {
                value.forEach(function (elem) {
                  return httpParams = _this.addToHttpParamsRecursive(httpParams, elem, key);
                });
              } else if (value instanceof Date) {
                if (key != null) {
                  httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                } else {
                  throw Error("key may not be null if value is Date");
                }
              } else {
                Object.keys(value).forEach(function (k) {
                  return httpParams = _this.addToHttpParamsRecursive(httpParams, value[k], key != null ? "".concat(key, ".").concat(k) : k);
                });
              }
            } else if (key != null) {
              httpParams = httpParams.append(key, value);
            } else {
              throw Error("key may not be null if value is not object or array");
            }

            return httpParams;
          }
        }, {
          key: "sampleTypesList",
          value: function sampleTypesList() {
            var observe = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'body';
            var reportProgress = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var options = arguments.length > 2 ? arguments[2] : undefined;
            var headers = this.defaultHeaders;
            var credential; // authentication (jwtAuth) required

            credential = this.configuration.lookupCredential('jwtAuth');

            if (credential) {
              headers = headers.set('Authorization', 'Bearer ' + credential);
            }

            var httpHeaderAcceptSelected = options && options.httpHeaderAccept;

            if (httpHeaderAcceptSelected === undefined) {
              // to determine the Accept header
              var httpHeaderAccepts = ['application/json'];
              httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            }

            if (httpHeaderAcceptSelected !== undefined) {
              headers = headers.set('Accept', httpHeaderAcceptSelected);
            }

            var responseType = 'json';

            if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
              responseType = 'text';
            }

            return this.httpClient.get("".concat(this.configuration.basePath, "/backend/masterdata/sample-types/"), {
              responseType: responseType,
              withCredentials: this.configuration.withCredentials,
              headers: headers,
              observe: observe,
              reportProgress: reportProgress
            });
          }
        }]);

        return SampleTypesService;
      }();

      SampleTypesService.ɵfac = function SampleTypesService_Factory(t) {
        return new (t || SampleTypesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], 8));
      };

      SampleTypesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SampleTypesService,
        factory: SampleTypesService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SampleTypesService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"]]
            }]
          }, {
            type: _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "/+nv":
    /*!************************************************************************!*\
      !*** ./src/generated/api/model/userAssessmentProductRecommendation.ts ***!
      \************************************************************************/

    /*! no exports provided */

    /***/
    function nv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /**
       *
       * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
       *
       * The version of the OpenAPI document: 0.0.0
       *
       *
       * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
       * https://openapi-generator.tech
       * Do not edit the class manually.
       */

      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/volansmacmini/Documents/Angular/Git/ewnAng/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0jaD":
    /*!*****************************************************!*\
      !*** ./src/generated/api/api/mycotoxins.service.ts ***!
      \*****************************************************/

    /*! exports provided: MycotoxinsService */

    /***/
    function jaD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MycotoxinsService", function () {
        return MycotoxinsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../encoder */
      "i0KE");
      /* harmony import */


      var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../variables */
      "G5Mf");
      /* harmony import */


      var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../configuration */
      "PKcu");
      /**
       *
       * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
       *
       * The version of the OpenAPI document: 0.0.0
       *
       *
       * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
       * https://openapi-generator.tech
       * Do not edit the class manually.
       */

      /* tslint:disable:no-unused-variable member-ordering */


      var MycotoxinsService = /*#__PURE__*/function () {
        function MycotoxinsService(httpClient, basePath, configuration) {
          _classCallCheck(this, MycotoxinsService);

          this.httpClient = httpClient;
          this.basePath = 'http://localhost';
          this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();

          if (configuration) {
            this.configuration = configuration;
          }

          if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
              basePath = this.basePath;
            }

            this.configuration.basePath = basePath;
          }

          this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpParameterCodec"]();
        }

        _createClass(MycotoxinsService, [{
          key: "addToHttpParams",
          value: function addToHttpParams(httpParams, value, key) {
            if (typeof value === "object" && value instanceof Date === false) {
              httpParams = this.addToHttpParamsRecursive(httpParams, value);
            } else {
              httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
            }

            return httpParams;
          }
        }, {
          key: "addToHttpParamsRecursive",
          value: function addToHttpParamsRecursive(httpParams, value, key) {
            var _this2 = this;

            if (value == null) {
              return httpParams;
            }

            if (typeof value === "object") {
              if (Array.isArray(value)) {
                value.forEach(function (elem) {
                  return httpParams = _this2.addToHttpParamsRecursive(httpParams, elem, key);
                });
              } else if (value instanceof Date) {
                if (key != null) {
                  httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                } else {
                  throw Error("key may not be null if value is Date");
                }
              } else {
                Object.keys(value).forEach(function (k) {
                  return httpParams = _this2.addToHttpParamsRecursive(httpParams, value[k], key != null ? "".concat(key, ".").concat(k) : k);
                });
              }
            } else if (key != null) {
              httpParams = httpParams.append(key, value);
            } else {
              throw Error("key may not be null if value is not object or array");
            }

            return httpParams;
          }
        }, {
          key: "mycotoxinsList",
          value: function mycotoxinsList() {
            var observe = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'body';
            var reportProgress = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var options = arguments.length > 2 ? arguments[2] : undefined;
            var headers = this.defaultHeaders;
            var credential; // authentication (jwtAuth) required

            credential = this.configuration.lookupCredential('jwtAuth');

            if (credential) {
              headers = headers.set('Authorization', 'Bearer ' + credential);
            }

            var httpHeaderAcceptSelected = options && options.httpHeaderAccept;

            if (httpHeaderAcceptSelected === undefined) {
              // to determine the Accept header
              var httpHeaderAccepts = ['application/json'];
              httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            }

            if (httpHeaderAcceptSelected !== undefined) {
              headers = headers.set('Accept', httpHeaderAcceptSelected);
            }

            var responseType = 'json';

            if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
              responseType = 'text';
            }

            return this.httpClient.get("".concat(this.configuration.basePath, "/backend/masterdata/mycotoxins/"), {
              responseType: responseType,
              withCredentials: this.configuration.withCredentials,
              headers: headers,
              observe: observe,
              reportProgress: reportProgress
            });
          }
        }]);

        return MycotoxinsService;
      }();

      MycotoxinsService.ɵfac = function MycotoxinsService_Factory(t) {
        return new (t || MycotoxinsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], 8));
      };

      MycotoxinsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: MycotoxinsService,
        factory: MycotoxinsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MycotoxinsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"]]
            }]
          }, {
            type: _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "0nVU":
    /*!***************************************************************!*\
      !*** ./src/app/services/valid-access-token-holder.service.ts ***!
      \***************************************************************/

    /*! exports provided: ValidAccessTokenHolderService */

    /***/
    function nVU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ValidAccessTokenHolderService", function () {
        return ValidAccessTokenHolderService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var ValidAccessTokenHolderService = /*#__PURE__*/function () {
        function ValidAccessTokenHolderService() {
          _classCallCheck(this, ValidAccessTokenHolderService);

          this.currentValidAccessToken$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        }

        _createClass(ValidAccessTokenHolderService, [{
          key: "currentValidAccessToken",
          get: function get() {
            return this.currentValidAccessToken$;
          }
        }, {
          key: "setAccessToken",
          value: function setAccessToken(token) {
            this.currentValidAccessToken$.next(token);
          }
        }]);

        return ValidAccessTokenHolderService;
      }();

      ValidAccessTokenHolderService.ɵfac = function ValidAccessTokenHolderService_Factory(t) {
        return new (t || ValidAccessTokenHolderService)();
      };

      ValidAccessTokenHolderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ValidAccessTokenHolderService,
        factory: ValidAccessTokenHolderService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValidAccessTokenHolderService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "1ooM":
    /*!*************************************************************************!*\
      !*** ./src/app/modules/pages/change-password/change-password.module.ts ***!
      \*************************************************************************/

    /*! exports provided: ChangePasswordModule */

    /***/
    function ooM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChangePasswordModule", function () {
        return ChangePasswordModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _change_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./change-password.component */
      "Yk9B");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../components/components.module */
      "aDnW");

      var ChangePasswordModule = /*#__PURE__*/_createClass(function ChangePasswordModule() {
        _classCallCheck(this, ChangePasswordModule);
      });

      ChangePasswordModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ChangePasswordModule
      });
      ChangePasswordModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ChangePasswordModule_Factory(t) {
          return new (t || ChangePasswordModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChangePasswordModule, {
          declarations: [_change_password_component__WEBPACK_IMPORTED_MODULE_2__["ChangePasswordComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangePasswordModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_change_password_component__WEBPACK_IMPORTED_MODULE_2__["ChangePasswordComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "225s":
    /*!************************************************!*\
      !*** ./src/generated/api/model/tokenVerify.ts ***!
      \************************************************/

    /*! no exports provided */

    /***/
    function s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /**
       *
       * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
       *
       * The version of the OpenAPI document: 0.0.0
       *
       *
       * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
       * https://openapi-generator.tech
       * Do not edit the class manually.
       */

      /***/

    },

    /***/
    "23XS":
    /*!************************************************************************!*\
      !*** ./src/app/modules/pages/lost-password/lost-password.component.ts ***!
      \************************************************************************/

    /*! exports provided: LostPasswordComponent */

    /***/
    function XS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LostPasswordComponent", function () {
        return LostPasswordComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _generated_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../generated/api */
      "UIhn");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _components_button_spinner_button_spinner_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../components/button-spinner/button-spinner.component */
      "BYpc");

      function LostPasswordComponent_ng_container_3_ng_container_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx_r2.error));
        }
      }

      function LostPasswordComponent_ng_container_3_ng_container_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please enter your email.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function LostPasswordComponent_ng_container_3_ng_container_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please re-check your email.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function LostPasswordComponent_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LostPasswordComponent_ng_container_3_Template_form_ngSubmit_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Please enter the email address of your account:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LostPasswordComponent_ng_container_3_ng_container_10_Template, 4, 3, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LostPasswordComponent_ng_container_3_ng_container_11_Template, 3, 0, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LostPasswordComponent_ng_container_3_ng_container_12_Template, 3, 0, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-button-spinner", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Generate a new password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 9, "To reset your password, please enter your email address. MasterRisk will send you a new password for your account. If you do not know the email address that is linked to your account or it is no longer valid, please contact leila.martincarrasco@ew-nutrition.com for further assistance."), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.formGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.controls.email)("errorStateMatcher", ctx_r0.emailErrorMatcher);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.error != null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.error == null && (ctx_r0.controls.email.errors == null ? null : ctx_r0.controls.email.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.error == null && (ctx_r0.controls.email.errors == null ? null : ctx_r0.controls.email.errors.email));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("spinning", ctx_r0.loading);
        }
      }

      function LostPasswordComponent_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "LOSTPASSWORD_SUCCESSTEXT"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      var LostPasswordComponent = /*#__PURE__*/function () {
        function LostPasswordComponent(matDialog, apiService, translateService) {
          _classCallCheck(this, LostPasswordComponent);

          this.matDialog = matDialog;
          this.apiService = apiService;
          this.translateService = translateService;
          this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.loading = false;
          this.submitted = false;
          this.error = null;
          this.controls = {
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email])
          };
          this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](this.controls);
          var component = this;
          this.emailErrorMatcher = new ( /*#__PURE__*/function (_angular_material_cor) {
            _inherits(_class, _angular_material_cor);

            var _super = _createSuper(_class);

            function _class() {
              _classCallCheck(this, _class);

              return _super.apply(this, arguments);
            }

            _createClass(_class, [{
              key: "isErrorState",
              value: function isErrorState(control, form) {
                return _get(_getPrototypeOf(_class.prototype), "isErrorState", this).call(this, control, form) || component.error != null;
              }
            }]);

            return _class;
          }(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["ErrorStateMatcher"]))();
        }

        _createClass(LostPasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "submit",
          value: function submit() {
            var _this3 = this;

            if (this.formGroup.valid) {
              this.loading = true;
              this.error = null;
              this.apiService.apiPasswordResetCreate({
                email: this.controls.email.value
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$)).subscribe({
                next: function next() {
                  _this3.loading = false;
                  _this3.submitted = true;
                },
                error: function error(err) {
                  _this3.loading = false;
                  console.error('Lost Password failed', err);

                  if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpErrorResponse"] && Math.floor(err.status / 100) === 4 && typeof err.error === 'object' && Array.isArray(err.error.password)) {
                    _this3.error = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(err.error.password.map(function (p) {
                      return String(p);
                    }).join(', '));
                  } else {
                    _this3.error = _this3.translateService.get('LOSTPASSWORD_FAILED');
                  }
                }
              });
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroyed$.next();
            this.destroyed$.complete();
          }
        }]);

        return LostPasswordComponent;
      }();

      LostPasswordComponent.ɵfac = function LostPasswordComponent_Factory(t) {
        return new (t || LostPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_generated_api__WEBPACK_IMPORTED_MODULE_7__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]));
      };

      LostPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LostPasswordComponent,
        selectors: [["app-lost-password"]],
        decls: 5,
        vars: 2,
        consts: [[1, "registration-container"], ["ngx-translate", ""], [4, "ngIf"], [3, "innerHTML"], [1, "form-container", 3, "formGroup", "ngSubmit"], ["appearance", "standard"], ["matInput", "", 3, "formControl", "errorStateMatcher"], [1, "button-container"], ["mat-flat-button", "", "color", "primary", "type", "submit", 3, "disabled"], [3, "spinning"]],
        template: function LostPasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Forgot your password?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LostPasswordComponent_ng_container_3_Template, 18, 11, "ng-container", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LostPasswordComponent_ng_container_4_Template, 3, 3, "ng-container", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.submitted);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted);
          }
        },
        directives: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatError"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _components_button_spinner_button_spinner_component__WEBPACK_IMPORTED_MODULE_13__["ButtonSpinnerComponent"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]],
        styles: ["[_nghost-%COMP%] {\n  display: block;\n  padding: 24px;\n}\n\n.form-container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 30em;\n  max-width: 100%;\n  margin: 0 auto;\n  flex-direction: column;\n  align-items: flex-end;\n}\n\n.form-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.form-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%] {\n  margin-top: 1em;\n  display: flex;\n  align-items: center;\n}\n\n.form-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%] {\n  margin-left: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlcy9sb3N0LXBhc3N3b3JkL2xvc3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUVBLHNCQUFBO0VBQ0EscUJBQUE7QUFBRjs7QUFFRTtFQUNFLFdBQUE7QUFBSjs7QUFHRTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFFSTtFQUNFLGdCQUFBO0FBQU4iLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3BhZ2VzL2xvc3QtcGFzc3dvcmQvbG9zdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDI0cHg7XG59XG5cbi5mb3JtLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAzMGVtO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblxuICBtYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXQtc3Bpbm5lciB7XG4gICAgICBtYXJnaW4tbGVmdDogMWVtO1xuICAgIH1cbiAgfVxuXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LostPasswordComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-lost-password',
            templateUrl: './lost-password.component.html',
            styleUrls: ['./lost-password.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
          }, {
            type: _generated_api__WEBPACK_IMPORTED_MODULE_7__["ApiService"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "2hhN":
    /*!**************************************!*\
      !*** ./src/generated/api/api/api.ts ***!
      \**************************************/

    /*! exports provided: ApiService, AssessmentService, BackendService, ComponentsService, CountriesService, CustomersService, DatabaseService, LaboratoriesService, LanguagesService, LevelsService, MycotoxinsService, ProductsService, RegisterService, SampleTypesService, SendReportService, SpeciesService, TranslationsService, UserService, SampleFormService, APIS */

    /***/
    function hhN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "APIS", function () {
        return APIS;
      });
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./api.service */
      "l0ZV");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ApiService", function () {
        return _api_service__WEBPACK_IMPORTED_MODULE_0__["ApiService"];
      });
      /* harmony import */


      var _assessment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./assessment.service */
      "tsFp");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AssessmentService", function () {
        return _assessment_service__WEBPACK_IMPORTED_MODULE_1__["AssessmentService"];
      });
      /* harmony import */


      var _backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./backend.service */
      "Od1l");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BackendService", function () {
        return _backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"];
      });
      /* harmony import */


      var _components_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components.service */
      "hk9R");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ComponentsService", function () {
        return _components_service__WEBPACK_IMPORTED_MODULE_3__["ComponentsService"];
      });
      /* harmony import */


      var _countries_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./countries.service */
      "91ms");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CountriesService", function () {
        return _countries_service__WEBPACK_IMPORTED_MODULE_4__["CountriesService"];
      });
      /* harmony import */


      var _customers_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./customers.service */
      "KEyS");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CustomersService", function () {
        return _customers_service__WEBPACK_IMPORTED_MODULE_5__["CustomersService"];
      });
      /* harmony import */


      var _database_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./database.service */
      "nyO7");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DatabaseService", function () {
        return _database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"];
      });
      /* harmony import */


      var _laboratories_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./laboratories.service */
      "v/rv");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LaboratoriesService", function () {
        return _laboratories_service__WEBPACK_IMPORTED_MODULE_7__["LaboratoriesService"];
      });
      /* harmony import */


      var _languages_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./languages.service */
      "SpI0");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LanguagesService", function () {
        return _languages_service__WEBPACK_IMPORTED_MODULE_8__["LanguagesService"];
      });
      /* harmony import */


      var _levels_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./levels.service */
      "ShwF");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LevelsService", function () {
        return _levels_service__WEBPACK_IMPORTED_MODULE_9__["LevelsService"];
      });
      /* harmony import */


      var _mycotoxins_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./mycotoxins.service */
      "0jaD");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MycotoxinsService", function () {
        return _mycotoxins_service__WEBPACK_IMPORTED_MODULE_10__["MycotoxinsService"];
      });
      /* harmony import */


      var _products_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./products.service */
      "RhRe");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ProductsService", function () {
        return _products_service__WEBPACK_IMPORTED_MODULE_11__["ProductsService"];
      });
      /* harmony import */


      var _register_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./register.service */
      "8fyL");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "RegisterService", function () {
        return _register_service__WEBPACK_IMPORTED_MODULE_12__["RegisterService"];
      });
      /* harmony import */


      var _sampleTypes_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./sampleTypes.service */
      "+nxj");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SampleTypesService", function () {
        return _sampleTypes_service__WEBPACK_IMPORTED_MODULE_13__["SampleTypesService"];
      });
      /* harmony import */


      var _sendReport_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./sendReport.service */
      "ExV1");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SendReportService", function () {
        return _sendReport_service__WEBPACK_IMPORTED_MODULE_14__["SendReportService"];
      });
      /* harmony import */


      var _species_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./species.service */
      "aXZw");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SpeciesService", function () {
        return _species_service__WEBPACK_IMPORTED_MODULE_15__["SpeciesService"];
      });
      /* harmony import */


      var _translations_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./translations.service */
      "ruCz");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TranslationsService", function () {
        return _translations_service__WEBPACK_IMPORTED_MODULE_16__["TranslationsService"];
      });
      /* harmony import */


      var _user_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./user.service */
      "8/OK");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return _user_service__WEBPACK_IMPORTED_MODULE_17__["UserService"];
      });
      /* harmony import */


      var _sampleform_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./sampleform.service */
      "IewB");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SampleFormService", function () {
        return _sampleform_service__WEBPACK_IMPORTED_MODULE_18__["SampleFormService"];
      });

      var APIS = [_api_service__WEBPACK_IMPORTED_MODULE_0__["ApiService"], _assessment_service__WEBPACK_IMPORTED_MODULE_1__["AssessmentService"], _backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"], _components_service__WEBPACK_IMPORTED_MODULE_3__["ComponentsService"], _countries_service__WEBPACK_IMPORTED_MODULE_4__["CountriesService"], _customers_service__WEBPACK_IMPORTED_MODULE_5__["CustomersService"], _database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"], _laboratories_service__WEBPACK_IMPORTED_MODULE_7__["LaboratoriesService"], _languages_service__WEBPACK_IMPORTED_MODULE_8__["LanguagesService"], _levels_service__WEBPACK_IMPORTED_MODULE_9__["LevelsService"], _mycotoxins_service__WEBPACK_IMPORTED_MODULE_10__["MycotoxinsService"], _products_service__WEBPACK_IMPORTED_MODULE_11__["ProductsService"], _register_service__WEBPACK_IMPORTED_MODULE_12__["RegisterService"], _sampleTypes_service__WEBPACK_IMPORTED_MODULE_13__["SampleTypesService"], _sendReport_service__WEBPACK_IMPORTED_MODULE_14__["SendReportService"], _species_service__WEBPACK_IMPORTED_MODULE_15__["SpeciesService"], _translations_service__WEBPACK_IMPORTED_MODULE_16__["TranslationsService"], _user_service__WEBPACK_IMPORTED_MODULE_17__["UserService"], _sampleform_service__WEBPACK_IMPORTED_MODULE_18__["SampleFormService"]];
      /***/
    },

    /***/
    "2oaB":
    /*!*********************************************************!*\
      !*** ./src/app/modules/pages/imprint/imprint.module.ts ***!
      \*********************************************************/

    /*! exports provided: ImprintModule */

    /***/
    function oaB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImprintModule", function () {
        return ImprintModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _imprint_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./imprint.component */
      "Gg+M");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var ImprintModule = /*#__PURE__*/_createClass(function ImprintModule() {
        _classCallCheck(this, ImprintModule);
      });

      ImprintModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ImprintModule
      });
      ImprintModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ImprintModule_Factory(t) {
          return new (t || ImprintModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ImprintModule, {
          declarations: [_imprint_component__WEBPACK_IMPORTED_MODULE_2__["ImprintComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImprintModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_imprint_component__WEBPACK_IMPORTED_MODULE_2__["ImprintComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "3aqe":
    /*!***********************************************!*\
      !*** ./src/app/services/form-data.service.ts ***!
      \***********************************************/

    /*! exports provided: concentrationUnits, FormDataService */

    /***/
    function aqe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "concentrationUnits", function () {
        return concentrationUnits;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormDataService", function () {
        return FormDataService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./data.service */
      "EnSQ");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _modules_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../modules/components/alert/alert.component */
      "bTKV");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _result_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./result.service */
      "sDgk");
      /* harmony import */


      var _login_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./login.service */
      "EFyh");
      /* harmony import */


      var _language_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./language.service */
      "kyOO");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var concentrationUnits = [{
        text: 'ppb (µg/kg)',
        toPPB: function toPPB(input) {
          return input;
        }
      }, {
        text: 'ppm (mg/kg)',
        toPPB: function toPPB(input) {
          return input * 1000;
        }
      }];

      var FormDataService = /*#__PURE__*/function () {
        function FormDataService(matDialog, router, dataService, resultService, loginService, languageService, translateService) {
          var _this4 = this;

          _classCallCheck(this, FormDataService);

          this.matDialog = matDialog;
          this.router = router;
          this.dataService = dataService;
          this.resultService = resultService;
          this.loginService = loginService;
          this.languageService = languageService;
          this.translateService = translateService;
          this.speciesNewFormControls = {
            speciesNew: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          };
          this.speciesNewForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](this.speciesNewFormControls);
          this.generalFormControls = {
            customerName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            species: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            laboratory: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            sampleType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            recipients: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([FormDataService.createRecipientControl()])
          };
          this.generalForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](this.generalFormControls);
          this.samplesFormArray = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([FormDataService.createSamplesRow(true)]);
          this.samplesFormControls = {
            formArray: this.samplesFormArray
          };
          this.samplesForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](this.samplesFormControls);
          this.concentrationForms = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([FormDataService.createConcentrationForm()]);
          this.completeConcentrationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            entries: this.concentrationForms
          });
          this.productSelectionControls = {
            selectedProduct: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          };
          this.productSelectionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](this.productSelectionControls);
          this.allControls = {
            generalForm: this.generalForm,
            speciesNewForm: this.speciesNewForm,
            samplesForm: this.samplesForm,
            concentrationForm: this.completeConcentrationForm,
            productSelectionForm: this.productSelectionForm
          };
          this.completeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](this.allControls);
          this.reset$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          this.currentStep$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](0);
          this.data = null;
          this.loggedIn = false;
          this.currentUser = null;
          this.currentSampleType = null;
          this.apiErrors$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["ReplaySubject"](1);
          this.sampleType = this.observeIdSelection(this.generalFormControls.sampleType, function (d) {
            return d.sampleTypes;
          });
          this.species = this.observeIdSelection(this.generalFormControls.species, function (d) {
            return d.species;
          });
          this.country = this.observeIdSelection(this.generalFormControls.country, function (d) {
            return d.countries;
          });
          this.validComponents = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([this.sampleType, this.species]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                sampleType = _ref2[0],
                species = _ref2[1];

            if (sampleType == null || species == null) {
              return [null];
            } else {
              return _this4.dataService.getComponents(sampleType.id, species.id);
            }
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
          this.validComponentsIdx = this.validComponents.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (components) {
            return components == null ? null : Object(_data_service__WEBPACK_IMPORTED_MODULE_2__["makeIndex"])(components);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
          this.onResultStep = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([this.currentStep$, this.loginService.loggedIn]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2),
                currentStep = _ref4[0],
                loggedIn = _ref4[1];

            return currentStep === (loggedIn ? 4 : 3);
          }));
          this.onProductSelectStep = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([this.currentStep$, this.loginService.loggedIn]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_ref5) {
            var _ref6 = _slicedToArray(_ref5, 2),
                currentStep = _ref6[0],
                loggedIn = _ref6[1];

            return loggedIn && currentStep === 3;
          }));
          this.processedProducts = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([this.country, this.species]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_ref7) {
            var _ref8 = _slicedToArray(_ref7, 2),
                country = _ref8[0],
                species = _ref8[1];

            if (country == null || species == null) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
            } else {
              return _this4.dataService.get('products').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (products) {
                return _this4.dataService.processProducts(country.id, products).filter(function (product) {
                  var _a; // OpenAPI generator is broken


                  return (_a = species.has_products) === null || _a === void 0 ? void 0 : _a.includes(product.id);
                });
              }));
            }
          }));
          this.sampleFormInfo = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([this.samplesFormArray.valueChanges, this.validComponents]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_ref9) {
            var _ref10 = _slicedToArray(_ref9, 2),
                components = _ref10[1];

            return _this4.samplesFormArray.controls.map(function (sampleForm) {
              var _a;

              return {
                component: components === null || components === void 0 ? void 0 : components.find(function (c) {
                  return c.id === sampleForm.get('component').value;
                }),
                sampleName: (_a = sampleForm.get('name').value) !== null && _a !== void 0 ? _a : null,
                inclusionRate: components === null || components === void 0 ? void 0 : components.find(function (c) {
                  return c.id === sampleForm.get('inclusionRate').value;
                })
              };
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
          this.sampleType.subscribe(function (sampleType) {
            _this4.currentSampleType = sampleType !== null && sampleType !== void 0 ? sampleType : null;

            _this4.updateInclusionRateState();
          });
          this.loginService.currentUser.subscribe(function (currentUser) {
            _this4.loggedIn = currentUser != null;
            _this4.currentUser = currentUser;

            _this4.updateLoginState();
          });
          this.dataService.data.subscribe(function (data) {
            _this4.data = data;

            var _iterator = _createForOfIteratorHelper(_this4.concentrationForms.controls),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var concentrationForm = _step.value;

                _this4.updateMycotoxinRows(concentrationForm);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          });
          this.productSelectionForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
            return _this4.productSelectionControls.selectedProduct.value == null ? [null] : _this4.loginService.loggedIn.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (loggedIn) {
              return loggedIn ? 4 : 3;
            }));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (step) {
            return step != null;
          })).subscribe(function (step) {
            return _this4.setCurrentStep(step);
          });
          this.apiOutput = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([this.completeForm.valueChanges, this.completeForm.statusChanges, this.currentStep]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
            return _this4.dataService.data;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
            if (_this4.completeForm.invalid || _this4.currentStep$.getValue() !== (_this4.loggedIn ? 4 : 3)) {
              return [null];
            } else {
              return _this4.getResultInput();
            }
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["throttleTime"])(500, undefined, {
            leading: false,
            trailing: true
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (resultInput) {
            if (resultInput == null) {
              _this4.apiErrors$.next(null);

              return [null];
            } else {
              return _this4.resultService.getResults(resultInput).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
                return _this4.apiErrors$.next(null);
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
                console.warn('Failed getting API result', err);

                _this4.apiErrors$.next(err);

                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
              }));
            }
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(function (a, b) {
            return a == null === (b == null);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
          this.resultOutput = this.apiOutput.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (apiOutput) {
            return _this4.makeResultOutput(apiOutput);
          }));
        }

        _createClass(FormDataService, [{
          key: "apiErrors",
          get: function get() {
            return this.apiErrors$;
          }
        }, {
          key: "makeMovingRiskData",
          value: function makeMovingRiskData(apiMovingRisks, allLevels) {
            return apiMovingRisks === null || apiMovingRisks === void 0 ? void 0 : apiMovingRisks.map(function (risk) {
              var avgRiskFactorNumber = parseFloat(risk.avg_risk_factor);
              var roundedLevelFactor = Math.round(avgRiskFactorNumber);
              var matchingLevel = allLevels.find(function (l) {
                return l.level_factor === roundedLevelFactor;
              });
              return {
                count: risk.number_of_assessments,
                date: new Date(Date.parse(risk.month)),
                level: matchingLevel,
                rawLevel: avgRiskFactorNumber
              };
            });
          }
        }, {
          key: "makeResultOutput",
          value: function makeResultOutput(apiOutput) {
            var _this5 = this;

            if (apiOutput == null) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
            } else {
              var date = apiOutput.created_at == null ? null : new Date(Date.parse(apiOutput.created_at));
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([this.dataService.getIdx('species').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (species) {
                return species.get(apiOutput.species);
              })), this.dataService.getIdx('sampleTypes').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (sampleTypes) {
                return sampleTypes.get(apiOutput.sample_type);
              })), this.languageService.currentLanguage, this.dataService.get('products').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (products) {
                return _this5.dataService.processProducts(apiOutput.country, products);
              })), this.dataService.getIdx('levels'), this.dataService.getComponentsIdx(apiOutput.sample_type, apiOutput.species), this.dataService.getIdx('countries').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (countries) {
                return countries.get(apiOutput.country);
              }))]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_ref11) {
                var _ref12 = _slicedToArray(_ref11, 7),
                    species = _ref12[0],
                    sampleType = _ref12[1],
                    currentLanguage = _ref12[2],
                    processedProducts = _ref12[3],
                    levels = _ref12[4],
                    components = _ref12[5],
                    country = _ref12[6];

                var _a, _b;

                var allLevels = Array.from(levels.values());

                var movingRiskData = _this5.makeMovingRiskData(apiOutput.moving_risks, allLevels);

                return {
                  apiData: apiOutput,
                  movingRiskData: movingRiskData,
                  species: species,
                  sampleType: sampleType,
                  dateString: date === null || date === void 0 ? void 0 : date.toLocaleDateString(currentLanguage, {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit"
                  }),
                  country: country,
                  totalBwFactor: apiOutput.total_bw_factor == null ? null : parseFloat(apiOutput.total_bw_factor),
                  totalFcrFactor: apiOutput.total_fcr_factor == null ? null : parseFloat(apiOutput.total_fcr_factor),
                  samples: apiOutput.samples.map(function (sample) {
                    var _a, _b, _c, _d, _e, _f, _g;

                    return {
                      apiData: sample,
                      recommendation: sample.product_recommendation == null ? null : {
                        product: sample.product_recommendation.product == null ? null : (_a = processedProducts.find(function (p) {
                          var _a;

                          return p.id === ((_a = sample.product_recommendation) === null || _a === void 0 ? void 0 : _a.product);
                        })) !== null && _a !== void 0 ? _a : null,
                        text: (_c = (_b = sample.product_recommendation) === null || _b === void 0 ? void 0 : _b.text) !== null && _c !== void 0 ? _c : null
                      },
                      sampleRisk: sample.risk == null ? null : (_d = _this5.data.levels.find(function (lvl) {
                        return lvl.id === sample.risk;
                      })) !== null && _d !== void 0 ? _d : null,
                      component: (_e = components.get(sample.component)) !== null && _e !== void 0 ? _e : null,
                      inclusionRateDisplay: sampleType.has_inclusion_rate ? (_g = (_f = sample.inclusion_rate) === null || _f === void 0 ? void 0 : _f.toLocaleString(currentLanguage)) !== null && _g !== void 0 ? _g : '--' : null,
                      bwFactor: sample.bw_factor == null ? null : parseFloat(sample.bw_factor),
                      fcrFactor: sample.fcr_factor == null ? null : parseFloat(sample.fcr_factor)
                    };
                  }),
                  mycotoxinRows: _this5.data.mycotoxins.map(function (mycotoxin) {
                    return {
                      mycotoxin: mycotoxin,
                      values: apiOutput.samples.map(function (sampleEntry) {
                        var _a, _b, _c;

                        var contaminationEntry = sampleEntry.contaminations.find(function (entry) {
                          return entry.mycotoxin === mycotoxin.id;
                        });
                        var display = (_b = (_a = contaminationEntry === null || contaminationEntry === void 0 ? void 0 : contaminationEntry.value) === null || _a === void 0 ? void 0 : _a.toLocaleString(currentLanguage)) !== null && _b !== void 0 ? _b : 'nt';
                        return {
                          display: display,
                          level: (contaminationEntry === null || contaminationEntry === void 0 ? void 0 : contaminationEntry.level) == null ? null : (_c = _this5.data.levels.find(function (lvl) {
                            return lvl.id === contaminationEntry.level;
                          })) !== null && _c !== void 0 ? _c : null
                        };
                      })
                    };
                  }),
                  totalRecommendedProduct: apiOutput.total_product_recommendation == null ? null : {
                    product: (_a = processedProducts.find(function (p) {
                      return p.id === apiOutput.total_product_recommendation.product;
                    })) !== null && _a !== void 0 ? _a : null,
                    text: apiOutput.total_product_recommendation.text
                  },
                  totalRiskLevel: apiOutput.total_risk == null ? null : (_b = levels.get(apiOutput.total_risk)) !== null && _b !== void 0 ? _b : null
                };
              }));
            }
          }
        }, {
          key: "reset",
          get: function get() {
            return this.reset$;
          }
        }, {
          key: "currentStep",
          get: function get() {
            return this.currentStep$;
          }
        }, {
          key: "setCurrentStep",
          value: function setCurrentStep(index) {
            this.currentStep$.next(index);
          }
        }, {
          key: "goToRoot",
          value: function goToRoot() {
            var _this6 = this;

            if (this.router.url === '/') {
              if (this.generalForm.dirty) {
                var dialog = this.matDialog.open(_modules_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__["AlertComponent"], {
                  autoFocus: false,
                  data: {
                    title: 'RESET_DATA_HEADER',
                    message: 'RESET_DATA_MESSAGE',
                    buttons: [{
                      id: 'yes',
                      text: 'GENERAL_YES',
                      role: 'primary'
                    }, {
                      id: 'no',
                      text: 'GENERAL_NO'
                    }]
                  }
                });
                dialog.afterClosed().subscribe(function (result) {
                  if ((result === null || result === void 0 ? void 0 : result.button) === 'yes') {
                    _this6.resetAll();
                  }
                });
              } else {
                this.resetAll();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(undefined);
              }
            } else {
              this.router.navigate(['/']);
            }
          }
        }, {
          key: "resetAll",
          value: function resetAll() {
            this.completeForm.reset();
            this.samplesFormArray.clear();
            this.samplesFormArray.push(FormDataService.createSamplesRow(true));
            this.concentrationForms.clear();
            var concentrationForm = FormDataService.createConcentrationForm();
            this.concentrationForms.push(concentrationForm);
            this.generalFormControls.recipients.clear();
            this.generalFormControls.recipients.push(FormDataService.createRecipientControl());
            this.updateLoginState();
            this.updateInclusionRateState();
            this.updateMycotoxinRows(concentrationForm);
            this.reset$.next();
            this.setCurrentStep(0); // need to do this twice, because the 2nd time we potentially autofill the email

            this.updateLoginState();
          }
        }, {
          key: "addRecipient",
          value: function addRecipient() {
            this.generalFormControls.recipients.push(FormDataService.createRecipientControl());
            this.updateLoginState();
          }
        }, {
          key: "removeRecipient",
          value: function removeRecipient(index) {
            this.generalFormControls.recipients.removeAt(index);
          }
        }, {
          key: "addSample",
          value: function addSample() {
            this.samplesFormArray.push(FormDataService.createSamplesRow());
            var newConcentrationForm = FormDataService.createConcentrationForm();
            this.concentrationForms.push(newConcentrationForm);
            this.updateMycotoxinRows(newConcentrationForm);
            this.updateInclusionRateState();
          }
        }, {
          key: "removeSample",
          value: function removeSample(index) {
            this.samplesFormArray.removeAt(index);
            this.concentrationForms.removeAt(index);
          }
        }, {
          key: "getResultInput",
          value: function getResultInput() {
            var _this7 = this;

            var sampleNames$ = this.samplesFormArray.controls.map(function (sampleForm, sampleIndex) {
              var givenName = sampleForm.get('name').value;

              if (givenName == null || /^\s*$/.test(givenName)) {
                return _this7.translateService.get('STEPTWO_SAMPLENAME_DEFAULT', {
                  index: sampleIndex + 1
                }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])());
              } else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(givenName);
              }
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(sampleNames$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["defaultIfEmpty"])([]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (sampleNames) {
              var _a, _b, _c, _d;

              return {
                generalForm: {
                  customerName: typeof _this7.generalFormControls.customerName.value === 'string' ? _this7.generalFormControls.customerName.value : (_b = (_a = _this7.generalFormControls.customerName.value) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : '',
                  customerId: typeof _this7.generalFormControls.customerName.value === 'string' ? null : (_c = _this7.generalFormControls.customerName.value) === null || _c === void 0 ? void 0 : _c.id,
                  countryId: _this7.generalFormControls.country.value,
                  speciesId: _this7.generalFormControls.species.value,
                  testLaboratoryId: _this7.generalFormControls.laboratory.value,
                  sampleTypeId: _this7.generalFormControls.sampleType.value,
                  recipientEmails: _this7.loggedIn ? _this7.generalFormControls.recipients.controls.map(function (c) {
                    return c.value;
                  }) : []
                },
                samplesForm: {
                  samples: _this7.samplesFormArray.controls.map(function (samplesForm, samplesIdx) {
                    var inclusionRateValue = samplesForm.get('inclusionRate').value;
                    var parsedInclusionRate = null;

                    if (inclusionRateValue == null) {
                      parsedInclusionRate = null;
                    } else if (typeof inclusionRateValue === 'string') {
                      parsedInclusionRate = parseInt(inclusionRateValue);
                    } else if (typeof inclusionRateValue === 'number') {
                      parsedInclusionRate = inclusionRateValue;
                    }

                    if (parsedInclusionRate != null && (!isFinite(parsedInclusionRate) || parsedInclusionRate < 0)) {
                      parsedInclusionRate = null;
                    }

                    return {
                      sampleName: sampleNames[samplesIdx],
                      componentId: samplesForm.get('component').value,
                      inclusionRate: parsedInclusionRate
                    };
                  })
                },
                concentrationForm: {
                  entries: _this7.concentrationForms.controls.map(function (concentrationForm) {
                    var concentrationEntries = concentrationForm.get('concentrations');

                    if (_this7.data == null || concentrationEntries.length !== _this7.data.mycotoxins.length) {
                      return {
                        concentrations: []
                      };
                    } else {
                      return {
                        concentrations: concentrationEntries.controls.map(function (concentrationRowForm, mycotoxinIndex) {
                          var value = concentrationRowForm.get('unit').value.toPPB(concentrationRowForm.get('value').value);
                          return {
                            mycotoxinId: _this7.data.mycotoxins[mycotoxinIndex].id,
                            value: value
                          };
                        })
                      };
                    }
                  })
                },
                selectedProductId: (_d = _this7.productSelectionControls.selectedProduct.value) === null || _d === void 0 ? void 0 : _d.productId
              };
            }));
          }
        }, {
          key: "observeIdSelection",
          value: function observeIdSelection(control, getter) {
            var _this8 = this;

            return control.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(control.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (currentId) {
              if (currentId == null) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
              } else {
                return _this8.dataService.dataIdx.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (idx) {
                  var _a;

                  return (_a = getter(idx).get(currentId)) !== null && _a !== void 0 ? _a : null;
                }));
              }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
          }
        }, {
          key: "updateMycotoxinRows",
          value: function updateMycotoxinRows(concentrationForm) {
            var concentrations = concentrationForm.get('concentrations');

            if (this.data == null) {
              concentrations.clear();
            } else {
              if (concentrations.length !== this.data.mycotoxins.length) {
                concentrations.clear();

                var _iterator2 = _createForOfIteratorHelper(this.data.mycotoxins),
                    _step2;

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var mycotoxin = _step2.value;
                    concentrations.push(FormDataService.createConcentrationRow());
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
              }
            }
          }
        }, {
          key: "updateInclusionRateState",
          value: function updateInclusionRateState() {
            var _a, _b;

            var showInclusionRate = (_b = (_a = this.currentSampleType) === null || _a === void 0 ? void 0 : _a.has_inclusion_rate) !== null && _b !== void 0 ? _b : false;

            var _iterator3 = _createForOfIteratorHelper(this.inclusionRateOnlyFields()),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var control = _step3.value;

                if (showInclusionRate) {
                  control.enable();
                } else {
                  control.disable();
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
        }, {
          key: "inclusionRateOnlyFields",
          value: /*#__PURE__*/_regeneratorRuntime().mark(function inclusionRateOnlyFields() {
            var _iterator4, _step4, row;

            return _regeneratorRuntime().wrap(function inclusionRateOnlyFields$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _iterator4 = _createForOfIteratorHelper(this.samplesFormArray.controls);
                  _context.prev = 1;

                  _iterator4.s();

                case 3:
                  if ((_step4 = _iterator4.n()).done) {
                    _context.next = 9;
                    break;
                  }

                  row = _step4.value;
                  _context.next = 7;
                  return row.get('inclusionRate');

                case 7:
                  _context.next = 3;
                  break;

                case 9:
                  _context.next = 14;
                  break;

                case 11:
                  _context.prev = 11;
                  _context.t0 = _context["catch"](1);

                  _iterator4.e(_context.t0);

                case 14:
                  _context.prev = 14;

                  _iterator4.f();

                  return _context.finish(14);

                case 17:
                case "end":
                  return _context.stop();
              }
            }, inclusionRateOnlyFields, this, [[1, 11, 14, 17]]);
          })
        }, {
          key: "updateLoginState",
          value: function updateLoginState() {
            var _iterator5 = _createForOfIteratorHelper(this.loginOnlyFields()),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var ctrl = _step5.value;

                if (this.loggedIn) {
                  ctrl.enable();
                } else {
                  ctrl.disable();
                }
              } // console.log("updateLoginState", this.currentUser, this.generalFormControls.recipients.at(0).value);

            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }

            if (this.currentUser != null && this.generalFormControls.recipients.length === 1 && !this.generalFormControls.recipients.at(0).value) {
              // console.log("updating state")
              this.generalFormControls.recipients.at(0).setValue(this.currentUser.email);
            }
          }
        }, {
          key: "loginOnlyFields",
          value: /*#__PURE__*/_regeneratorRuntime().mark(function loginOnlyFields() {
            return _regeneratorRuntime().wrap(function loginOnlyFields$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  return _context2.delegateYield([this.generalFormControls.customerName, this.generalFormControls.laboratory, this.generalFormControls.recipients], "t0", 1);

                case 1:
                  _context2.next = 3;
                  return this.generalFormControls.recipients;

                case 3:
                  _context2.next = 5;
                  return this.productSelectionForm;

                case 5:
                case "end":
                  return _context2.stop();
              }
            }, loginOnlyFields, this);
          })
        }], [{
          key: "createRecipientControl",
          value: function createRecipientControl() {
            return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, []);
          }
        }, {
          key: "createSamplesRow",
          value: function createSamplesRow() {
            var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var group; // if (i) {

            group = {
              component: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              inclusionRate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
            }; // } else {
            //     group = {
            //         component: new FormControl(null),
            //         name: new FormControl(null),
            //         inclusionRate: new FormControl(null, [
            //             Validators.min(0), Validators.max(100),
            //             Validators.pattern(/^\d*$/)
            //         ])
            //     };
            // }

            return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](group);
          }
        }, {
          key: "createConcentrationForm",
          value: function createConcentrationForm() {
            return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              concentrations: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([])
            });
          }
        }, {
          key: "createConcentrationRow",
          value: function createConcentrationRow() {
            return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              value: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^\d*$/)]),
              unit: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](concentrationUnits[0])
            });
          }
        }]);

        return FormDataService;
      }();

      FormDataService.ɵfac = function FormDataService_Factory(t) {
        return new (t || FormDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_result_service__WEBPACK_IMPORTED_MODULE_8__["ResultService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_login_service__WEBPACK_IMPORTED_MODULE_9__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_language_service__WEBPACK_IMPORTED_MODULE_10__["LanguageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"]));
      };

      FormDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: FormDataService,
        factory: FormDataService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormDataService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
          }, {
            type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
          }, {
            type: _result_service__WEBPACK_IMPORTED_MODULE_8__["ResultService"]
          }, {
            type: _login_service__WEBPACK_IMPORTED_MODULE_9__["LoginService"]
          }, {
            type: _language_service__WEBPACK_IMPORTED_MODULE_10__["LanguageService"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "3la9":
    /*!********************************************************!*\
      !*** ./src/generated/api/model/productCountryRules.ts ***!
      \********************************************************/

    /*! no exports provided */

    /***/
    function la9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /**
       *
       * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
       *
       * The version of the OpenAPI document: 0.0.0
       *
       *
       * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
       * https://openapi-generator.tech
       * Do not edit the class manually.
       */

      /***/

    },

    /***/
    "5/Y3":
    /*!*************************************************************!*\
      !*** ./src/generated/api/model/userAssessmentMovingRisk.ts ***!
      \*************************************************************/

    /*! no exports provided */

    /***/
    function Y3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /**
       *
       * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
       *
       * The version of the OpenAPI document: 0.0.0
       *
       *
       * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
       * https://openapi-generator.tech
       * Do not edit the class manually.
       */

      /***/

    },

    /***/
    "5V3w":
    /*!**********************************************!*\
      !*** ./src/app/services/chart-js.service.ts ***!
      \**********************************************/

    /*! exports provided: ChartJsService */

    /***/
    function V3w(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartJsService", function () {
        return ChartJsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var ChartJsService = /*#__PURE__*/_createClass(function ChartJsService() {
        _classCallCheck(this, ChartJsService);

        this.chartJs = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (subscriber) {
          __webpack_require__.e(
          /*! import() | chart-js */
          "chart-js").then(__webpack_require__.t.bind(null,
          /*! chart.js */
          "MO+k", 7)).then(function (chartJs) {
            subscriber.next(chartJs);
            subscriber.complete();
          })["catch"](function (err) {
            return subscriber.error(err);
          });
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1));
      });

      ChartJsService.ɵfac = function ChartJsService_Factory(t) {
        return new (t || ChartJsService)();
      };

      ChartJsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ChartJsService,
        factory: ChartJsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartJsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "8/OK":
    /*!***********************************************!*\
      !*** ./src/generated/api/api/user.service.ts ***!
      \***********************************************/

    /*! exports provided: UserService */

    /***/
    function OK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return UserService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../encoder */
      "i0KE");
      /* harmony import */


      var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../variables */
      "G5Mf");
      /* harmony import */


      var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../configuration */
      "PKcu");
      /**
       *
       * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
       *
       * The version of the OpenAPI document: 0.0.0
       *
       *
       * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
       * https://openapi-generator.tech
       * Do not edit the class manually.
       */

      /* tslint:disable:no-unused-variable member-ordering */


      var UserService = /*#__PURE__*/function () {
        function UserService(httpClient, basePath, configuration) {
          _classCallCheck(this, UserService);

          this.httpClient = httpClient;
          this.basePath = 'http://localhost';
          this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();

          if (configuration) {
            this.configuration = configuration;
          }

          if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
              basePath = this.basePath;
            }

            this.configuration.basePath = basePath;
          }

          this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpParameterCodec"]();
        }

        _createClass(UserService, [{
          key: "addToHttpParams",
          value: function addToHttpParams(httpParams, value, key) {
            if (typeof value === "object" && value instanceof Date === false) {
              httpParams = this.addToHttpParamsRecursive(httpParams, value);
            } else {
              httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
            }

            return httpParams;
          }
        }, {
          key: "addToHttpParamsRecursive",
          value: function addToHttpParamsRecursive(httpParams, value, key) {
            var _this9 = this;

            if (value == null) {
              return httpParams;
            }

            if (typeof value === "object") {
              if (Array.isArray(value)) {
                value.forEach(function (elem) {
                  return httpParams = _this9.addToHttpParamsRecursive(httpParams, elem, key);
                });
              } else if (value instanceof Date) {
                if (key != null) {
                  httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                } else {
                  throw Error("key may not be null if value is Date");
                }
              } else {
                Object.keys(value).forEach(function (k) {
                  return httpParams = _this9.addToHttpParamsRecursive(httpParams, value[k], key != null ? "".concat(key, ".").concat(k) : k);
                });
              }
            } else if (key != null) {
              httpParams = httpParams.append(key, value);
            } else {
              throw Error("key may not be null if value is not object or array");
            }

            return httpParams;
          }
        }, {
          key: "userChangePasswordPartialUpdate",
          value: function userChangePasswordPartialUpdate(patchedChangePassword) {
            var observe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'body';
            var reportProgress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var options = arguments.length > 3 ? arguments[3] : undefined;
            var headers = this.defaultHeaders;
            var credential; // authentication (jwtAuth) required

            credential = this.configuration.lookupCredential('jwtAuth');

            if (credential) {
              headers = headers.set('Authorization', 'Bearer ' + credential);
            }

            var httpHeaderAcceptSelected = options && options.httpHeaderAccept;

            if (httpHeaderAcceptSelected === undefined) {
              // to determine the Accept header
              var httpHeaderAccepts = ['application/json'];
              httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            }

            if (httpHeaderAcceptSelected !== undefined) {
              headers = headers.set('Accept', httpHeaderAcceptSelected);
            } // to determine the Content-Type header


            var consumes = ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);

            if (httpContentTypeSelected !== undefined) {
              headers = headers.set('Content-Type', httpContentTypeSelected);
            }

            var responseType = 'json';

            if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
              responseType = 'text';
            }

            return this.httpClient.patch("".concat(this.configuration.basePath, "/backend/masterdata/user/change-password/"), patchedChangePassword, {
              responseType: responseType,
              withCredentials: this.configuration.withCredentials,
              headers: headers,
              observe: observe,
              reportProgress: reportProgress
            });
          }
        }, {
          key: "userChangePasswordUpdate",
          value: function userChangePasswordUpdate(changePassword) {
            var observe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'body';
            var reportProgress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var options = arguments.length > 3 ? arguments[3] : undefined;

            if (changePassword === null || changePassword === undefined) {
              throw new Error('Required parameter changePassword was null or undefined when calling userChangePasswordUpdate.');
            }

            var headers = this.defaultHeaders;
            var credential; // authentication (jwtAuth) required

            credential = this.configuration.lookupCredential('jwtAuth');

            if (credential) {
              headers = headers.set('Authorization', 'Bearer ' + credential);
            }

            var httpHeaderAcceptSelected = options && options.httpHeaderAccept;

            if (httpHeaderAcceptSelected === undefined) {
              // to determine the Accept header
              var httpHeaderAccepts = ['application/json'];
              httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            }

            if (httpHeaderAcceptSelected !== undefined) {
              headers = headers.set('Accept', httpHeaderAcceptSelected);
            } // to determine the Content-Type header


            var consumes = ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);

            if (httpContentTypeSelected !== undefined) {
              headers = headers.set('Content-Type', httpContentTypeSelected);
            }

            var responseType = 'json';

            if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
              responseType = 'text';
            }

            return this.httpClient.put("".concat(this.configuration.basePath, "/backend/masterdata/user/change-password/"), changePassword, {
              responseType: responseType,
              withCredentials: this.configuration.withCredentials,
              headers: headers,
              observe: observe,
              reportProgress: reportProgress
            });
          }
        }, {
          key: "userRetrieve",
          value: function userRetrieve() {
            var observe = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'body';
            var reportProgress = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var options = arguments.length > 2 ? arguments[2] : undefined;
            var headers = this.defaultHeaders;
            var credential; // authentication (jwtAuth) required

            credential = this.configuration.lookupCredential('jwtAuth');

            if (credential) {
              headers = headers.set('Authorization', 'Bearer ' + credential);
            }

            var httpHeaderAcceptSelected = options && options.httpHeaderAccept;

            if (httpHeaderAcceptSelected === undefined) {
              // to determine the Accept header
              var httpHeaderAccepts = ['application/json'];
              httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            }

            if (httpHeaderAcceptSelected !== undefined) {
              headers = headers.set('Accept', httpHeaderAcceptSelected);
            }

            var responseType = 'json';

            if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
              responseType = 'text';
            }

            return this.httpClient.get("".concat(this.configuration.basePath, "/backend/masterdata/user/"), {
              responseType: responseType,
              withCredentials: this.configuration.withCredentials,
              headers: headers,
              observe: observe,
              reportProgress: reportProgress
            });
          }
        }]);

        return UserService;
      }();

      UserService.ɵfac = function UserService_Factory(t) {
        return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], 8));
      };

      UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: UserService,
        factory: UserService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"]]
            }]
          }, {
            type: _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "8fyL":
    /*!***************************************************!*\
      !*** ./src/generated/api/api/register.service.ts ***!
      \***************************************************/

    /*! exports provided: RegisterService */

    /***/
    function fyL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterService", function () {
        return RegisterService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../encoder */
      "i0KE");
      /* harmony import */


      var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../variables */
      "G5Mf");
      /* harmony import */


      var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../configuration */
      "PKcu");
      /**
       *
       * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
       *
       * The version of the OpenAPI document: 0.0.0
       *
       *
       * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
       * https://openapi-generator.tech
       * Do not edit the class manually.
       */

      /* tslint:disable:no-unused-variable member-ordering */


      var RegisterService = /*#__PURE__*/function () {
        function RegisterService(httpClient, basePath, configuration) {
          _classCallCheck(this, RegisterService);

          this.httpClient = httpClient;
          this.basePath = 'http://localhost';
          this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();

          if (configuration) {
            this.configuration = configuration;
          }

          if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
              basePath = this.basePath;
            }

            this.configuration.basePath = basePath;
          }

          this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpParameterCodec"]();
        }

        _createClass(RegisterService, [{
          key: "addToHttpParams",
          value: function addToHttpParams(httpParams, value, key) {
            if (typeof value === "object" && value instanceof Date === false) {
              httpParams = this.addToHttpParamsRecursive(httpParams, value);
            } else {
              httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
            }

            return httpParams;
          }
        }, {
          key: "addToHttpParamsRecursive",
          value: function addToHttpParamsRecursive(httpParams, value, key) {
            var _this10 = this;

            if (value == null) {
              return httpParams;
            }

            if (typeof value === "object") {
              if (Array.isArray(value)) {
                value.forEach(function (elem) {
                  return httpParams = _this10.addToHttpParamsRecursive(httpParams, elem, key);
                });
              } else if (value instanceof Date) {
                if (key != null) {
                  httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                } else {
                  throw Error("key may not be null if value is Date");
                }
              } else {
                Object.keys(value).forEach(function (k) {
                  return httpParams = _this10.addToHttpParamsRecursive(httpParams, value[k], key != null ? "".concat(key, ".").concat(k) : k);
                });
              }
            } else if (key != null) {
              httpParams = httpParams.append(key, value);
            } else {
              throw Error("key may not be null if value is not object or array");
            }

            return httpParams;
          }
        }, {
          key: "registerCreate",
          value: function registerCreate(registrationRequest) {
            var observe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'body';
            var reportProgress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var options = arguments.length > 3 ? arguments[3] : undefined;

            if (registrationRequest === null || registrationRequest === undefined) {
              throw new Error('Required parameter registrationRequest was null or undefined when calling registerCreate.');
            }

            var headers = this.defaultHeaders;
            var credential; // authentication (jwtAuth) required

            credential = this.configuration.lookupCredential('jwtAuth');

            if (credential) {
              headers = headers.set('Authorization', 'Bearer ' + credential);
            }

            var httpHeaderAcceptSelected = options && options.httpHeaderAccept;

            if (httpHeaderAcceptSelected === undefined) {
              // to determine the Accept header
              var httpHeaderAccepts = ['application/json'];
              httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            }

            if (httpHeaderAcceptSelected !== undefined) {
              headers = headers.set('Accept', httpHeaderAcceptSelected);
            } // to determine the Content-Type header


            var consumes = ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);

            if (httpContentTypeSelected !== undefined) {
              headers = headers.set('Content-Type', httpContentTypeSelected);
            }

            var responseType = 'json';

            if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
              responseType = 'text';
            }

            return this.httpClient.post("".concat(this.configuration.basePath, "/backend/masterdata/register/"), registrationRequest, {
              responseType: responseType,
              withCredentials: this.configuration.withCredentials,
              headers: headers,
              observe: observe,
              reportProgress: reportProgress
            });
          }
        }]);

        return RegisterService;
      }();

      RegisterService.ɵfac = function RegisterService_Factory(t) {
        return new (t || RegisterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], 8));
      };

      RegisterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: RegisterService,
        factory: RegisterService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"]]
            }]
          }, {
            type: _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "91ms":
    /*!****************************************************!*\
      !*** ./src/generated/api/api/countries.service.ts ***!
      \****************************************************/

    /*! exports provided: CountriesService */

    /***/
    function ms(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CountriesService", function () {
        return CountriesService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../encoder */
      "i0KE");
      /* harmony import */


      var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../variables */
      "G5Mf");
      /* harmony import */


      var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../configuration */
      "PKcu");
      /**
       *
       * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
       *
       * The version of the OpenAPI document: 0.0.0
       *
       *
       * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
       * https://openapi-generator.tech
       * Do not edit the class manually.
       */

      /* tslint:disable:no-unused-variable member-ordering */


      var CountriesService = /*#__PURE__*/function () {
        function CountriesService(httpClient, basePath, configuration) {
          _classCallCheck(this, CountriesService);

          this.httpClient = httpClient;
          this.basePath = 'http://localhost';
          this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();

          if (configuration) {
            this.configuration = configuration;
          }

          if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
              basePath = this.basePath;
            }

            this.configuration.basePath = basePath;
          }

          this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpParameterCodec"]();
        }

        _createClass(CountriesService, [{
          key: "addToHttpParams",
          value: function addToHttpParams(httpParams, value, key) {
            if (typeof value === "object" && value instanceof Date === false) {
              httpParams = this.addToHttpParamsRecursive(httpParams, value);
            } else {
              httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
            }

            return httpParams;
          }
        }, {
          key: "addToHttpParamsRecursive",
          value: function addToHttpParamsRecursive(httpParams, value, key) {
            var _this11 = this;

            if (value == null) {
              return httpParams;
            }

            if (typeof value === "object") {
              if (Array.isArray(value)) {
                value.forEach(function (elem) {
                  return httpParams = _this11.addToHttpParamsRecursive(httpParams, elem, key);
                });
              } else if (value instanceof Date) {
                if (key != null) {
                  httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                } else {
                  throw Error("key may not be null if value is Date");
                }
              } else {
                Object.keys(value).forEach(function (k) {
                  return httpParams = _this11.addToHttpParamsRecursive(httpParams, value[k], key != null ? "".concat(key, ".").concat(k) : k);
                });
              }
            } else if (key != null) {
              httpParams = httpParams.append(key, value);
            } else {
              throw Error("key may not be null if value is not object or array");
            }

            return httpParams;
          }
        }, {
          key: "countriesList",
          value: function countriesList() {
            var observe = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'body';
            var reportProgress = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var options = arguments.length > 2 ? arguments[2] : undefined;
            var headers = this.defaultHeaders;
            var credential; // authentication (jwtAuth) required

            credential = this.configuration.lookupCredential('jwtAuth');

            if (credential) {
              headers = headers.set('Authorization', 'Bearer ' + credential);
            }

            var httpHeaderAcceptSelected = options && options.httpHeaderAccept;

            if (httpHeaderAcceptSelected === undefined) {
              // to determine the Accept header
              var httpHeaderAccepts = ['application/json'];
              httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            }

            if (httpHeaderAcceptSelected !== undefined) {
              headers = headers.set('Accept', httpHeaderAcceptSelected);
            }

            var responseType = 'json';

            if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
              responseType = 'text';
            }

            return this.httpClient.get("".concat(this.configuration.basePath, "/backend/masterdata/countries/"), {
              responseType: responseType,
              withCredentials: this.configuration.withCredentials,
              headers: headers,
              observe: observe,
              reportProgress: reportProgress
            });
          }
        }]);

        return CountriesService;
      }();

      CountriesService.ɵfac = function CountriesService_Factory(t) {
        return new (t || CountriesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], 8));
      };

      CountriesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CountriesService,
        factory: CountriesService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountriesService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"]]
            }]
          }, {
            type: _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "9WSC":
    /*!*********************************************!*\
      !*** ./src/generated/api/model/products.ts ***!
      \*********************************************/

    /*! no exports provided */

    /***/
    function WSC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    "AA5N":
    /*!******************************************!*\
      !*** ./src/generated/api/model/level.ts ***!
      \******************************************/

    /*! no exports provided */

    /***/
    function AA5N(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /**
       *
       * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
       *
       * The version of the OpenAPI document: 0.0.0
       *
       *
       * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
       * https://openapi-generator.tech
       * Do not edit the class manually.
       */

      /***/

    },

    /***/
    "AjoW":
    /*!**********************************************************!*\
      !*** ./src/generated/api/model/paginatedDatabaseList.ts ***!
      \**********************************************************/

    /*! no exports provided */

    /***/
    function AjoW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        // api: 'http://localhost:8000'
        // api: 'https://masterrisktool.com'
        // api: 'https://apiewn.unilink360.com'
        api: 'https://elsaadmin.ew-nutrition.com'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "BU5b":
    /*!***********************************************************************!*\
      !*** ./src/app/modules/pages/reset-password/reset-password.module.ts ***!
      \***********************************************************************/

    /*! exports provided: ResetPasswordModule */

    /***/
    function BU5b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResetPasswordModule", function () {
        return ResetPasswordModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _reset_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./reset-password.component */
      "N217");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");

      var ResetPasswordModule = /*#__PURE__*/_createClass(function ResetPasswordModule() {
        _classCallCheck(this, ResetPasswordModule);
      });

      ResetPasswordModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ResetPasswordModule
      });
      ResetPasswordModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ResetPasswordModule_Factory(t) {
          return new (t || ResetPasswordModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ResetPasswordModule, {
          declarations: [_reset_password_component__WEBPACK_IMPORTED_MODULE_2__["ResetPasswordComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetPasswordModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_reset_password_component__WEBPACK_IMPORTED_MODULE_2__["ResetPasswordComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "BYpc":
    /*!*******************************************************************************!*\
      !*** ./src/app/modules/components/button-spinner/button-spinner.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: ButtonSpinnerComponent */

    /***/
    function BYpc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonSpinnerComponent", function () {
        return ButtonSpinnerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");

      var ButtonSpinnerComponent = /*#__PURE__*/function () {
        function ButtonSpinnerComponent() {
          _classCallCheck(this, ButtonSpinnerComponent);

          this.spinning$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.debouncedSpinning = false;
          this.spinning = true;
        }

        _createClass(ButtonSpinnerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this12 = this;

            this.spinning$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounce"])(function (spinning) {
              return !spinning ? rxjs__WEBPACK_IMPORTED_MODULE_1__["EMPTY"] : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(500);
            })).subscribe(function (debouncedSpinning) {
              return _this12.debouncedSpinning = debouncedSpinning;
            });
            this.debouncedSpinning = this.spinning;
            this.spinning$.next(this.spinning);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.spinning && !changes.spinning.firstChange) {
              this.spinning$.next(this.spinning);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.spinning$.complete();
          }
        }]);

        return ButtonSpinnerComponent;
      }();

      ButtonSpinnerComponent.ɵfac = function ButtonSpinnerComponent_Factory(t) {
        return new (t || ButtonSpinnerComponent)();
      };

      ButtonSpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ButtonSpinnerComponent,
        selectors: [["app-button-spinner"]],
        inputs: {
          spinning: "spinning"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 1,
        vars: 2,
        consts: [["color", "accent", "diameter", "30"]],
        template: function ButtonSpinnerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visible", ctx.debouncedSpinning);
          }
        },
        directives: [_angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__["MatSpinner"]],
        styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n[_nghost-%COMP%]   mat-spinner[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n[_nghost-%COMP%]   mat-spinner.visible[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21wb25lbnRzL2J1dHRvbi1zcGlubmVyL2J1dHRvbi1zcGlubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNFO0VBQ0Usa0JBQUE7QUFDSjtBQUVFO0VBQ0UsbUJBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tcG9uZW50cy9idXR0b24tc3Bpbm5lci9idXR0b24tc3Bpbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIG1hdC1zcGlubmVyIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cblxuICBtYXQtc3Bpbm5lci52aXNpYmxlIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG5cbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonSpinnerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-button-spinner',
            templateUrl: './button-spinner.component.html',
            styleUrls: ['./button-spinner.component.scss']
          }]
        }], function () {
          return [];
        }, {
          spinning: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "CIl6":
    /*!*******************************************************!*\
      !*** ./src/generated/api/model/databaseAssessment.ts ***!
      \*******************************************************/

    /*! no exports provided */

    /***/
    function CIl6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /**
       *
       * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
       *
       * The version of the OpenAPI document: 0.0.0
       *
       *
       * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
       * https://openapi-generator.tech
       * Do not edit the class manually.
       */

      /***/

    },

    /***/
    "DFA3":
    /*!***********************************************!*\
      !*** ./src/generated/api/model/components.ts ***!
      \***********************************************/

    /*! no exports provided */

    /***/
    function DFA3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /**
       *
       * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
       *
       * The version of the OpenAPI document: 0.0.0
       *
       *
       * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
       * https://openapi-generator.tech
       * Do not edit the class manually.
       */

      /***/

    },

    /***/
    "DM3v":
    /*!***************************************************!*\
      !*** ./src/generated/api/model/changePassword.ts ***!
      \***************************************************/

    /*! no exports provided */

    /***/
    function DM3v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /**
       *
       * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
       *
       * The version of the OpenAPI document: 0.0.0
       *
       *
       * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
       * https://openapi-generator.tech
       * Do not edit the class manually.
       */

      /***/

    },

    /***/
    "DRYZ":
    /*!***************************************************!*\
      !*** ./src/app/services/local-storage.service.ts ***!
      \***************************************************/

    /*! exports provided: LocalStorageService */

    /***/
    function DRYZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocalStorageService", function () {
        return LocalStorageService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var LocalStorageService = /*#__PURE__*/function () {
        function LocalStorageService() {
          _classCallCheck(this, LocalStorageService);
        }

        _createClass(LocalStorageService, [{
          key: "newHandle",
          value: function newHandle(key, reader, writer) {
            var read = function read() {
              var raw = localStorage.getItem(key);

              if (raw == null) {
                return null;
              } else {
                return reader(raw);
              }
            };

            var value$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](read());
            return {
              get value() {
                return value$;
              },

              get currentValue() {
                return value$.getValue();
              },

              setValue: function setValue(newValue) {
                value$.next(newValue);

                if (newValue == null) {
                  localStorage.removeItem(key);
                } else {
                  localStorage.setItem(key, writer(newValue));
                }
              },
              subscribe: function subscribe() {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(window, 'storage').subscribe(function () {
                  value$.next(read());
                });
              }
            };
          }
        }]);

        return LocalStorageService;
      }();

      LocalStorageService.ɵfac = function LocalStorageService_Factory(t) {
        return new (t || LocalStorageService)();
      };

      LocalStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LocalStorageService,
        factory: LocalStorageService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalStorageService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "Dd2U":
    /*!*******************************************************!*\
      !*** ./src/generated/api/model/databaseAccessEnum.ts ***!
      \*******************************************************/

    /*! exports provided: DatabaseAccessEnum */

    /***/
    function Dd2U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatabaseAccessEnum", function () {
        return DatabaseAccessEnum;
      });
      /**
       *
       * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
       *
       * The version of the OpenAPI document: 0.0.0
       *
       *
       * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
       * https://openapi-generator.tech
       * Do not edit the class manually.
       */


      var DatabaseAccessEnum = {
        None: 'none',
        Own: 'own',
        Countries: 'countries',
        All: 'all'
      };
      /***/
    },

    /***/
    "EFyh":
    /*!*******************************************!*\
      !*** ./src/app/services/login.service.ts ***!
      \*******************************************/

    /*! exports provided: LoginService */

    /***/
    function EFyh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginService", function () {
        return LoginService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _access_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./access-token.service */
      "kCo0");
      /* harmony import */


      var _valid_access_token_holder_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./valid-access-token-holder.service */
      "0nVU");
      /* harmony import */


      var _generated_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../generated/api */
      "UIhn");

      var LoginService = /*#__PURE__*/function () {
        function LoginService(accessTokenService, validAccessTokenHolderService, apiService, userService) {
          var _this13 = this;

          _classCallCheck(this, LoginService);

          this.accessTokenService = accessTokenService;
          this.validAccessTokenHolderService = validAccessTokenHolderService;
          this.apiService = apiService;
          this.userService = userService;
          this.gettingTokens$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
          this.currentValidAccessToken = this.accessTokenService.tokens.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (tokens) {
            return tokens === null || tokens === void 0 ? void 0 : tokens.access;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (accessToken) {
            if (accessToken == null) {
              // console.log('// no token: not logged in, valid token will also be null');
              // no token: not logged in, valid token will also be null
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            } else if (accessToken.expires < new Date()) {
              // console.log('token expired');
              // if it is expired already, subscription below will refresh it
              // and we will then get the new one here
              // so do nothing here yet
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
            } else {
              // console.log('// we have a token that we think is valid')
              // we have a token that we think is valid
              // check that it actually is valid
              return _this13.apiService.apiTokenVerifyCreate({
                token: accessToken.token
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mapTo"])(accessToken), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
                console.warn('Token verify failed', err);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
              }));
            }
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])(1));
          this.currentValidAccessToken.subscribe(function (token) {
            return _this13.validAccessTokenHolderService.setAccessToken(token === null || token === void 0 ? void 0 : token.token);
          });
          this.currentUser = this.currentValidAccessToken.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (accessToken) {
            return accessToken == null ? [null] : _this13.userService.userRetrieve();
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])(1));
          this.loggedIn = this.currentUser.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (user) {
            return user != null;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])());
          this.accessTokenService.tokens.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (tokens) {
            if (tokens == null) {
              // console.log("tokens are null");
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
            } else {
              return (tokens.access.expires.getTime() <= Date.now() ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(1) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(tokens.access.expires)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])(), // tap(t => console.log("token expired", t)),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mapTo"])(tokens));
            }
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (tokens) {
            return _this13.gettingTokens$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])(function (getting) {
              return !getting;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function () {
              return _this13.gettingTokens$.next(true);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function () {
              return _this13.refreshAccessToken(tokens);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (newTokens) {
              return _this13.accessTokenService.setTokens(newTokens);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () {
              return _this13.gettingTokens$.next(false);
            }));
          })).subscribe();
        }

        _createClass(LoginService, [{
          key: "isLoggedIn",
          get: function get() {
            return this.currentUser.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (u) {
              return u != null;
            }));
          }
        }, {
          key: "login",
          value: function login(email, password) {
            var _this14 = this;

            return this.gettingTokens$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])(function (getting) {
              return !getting;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function () {
              return _this14.gettingTokens$.next(true);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function () {
              return _this14.apiService.apiTokenCreate({
                email: email,
                password: password
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (result) {
              _this14.accessTokenService.setTokens({
                access: result.access,
                refresh: result.refresh
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mapTo"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              var _a;

              if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpErrorResponse"] && err.status === 401) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.detail) || err.message);
              } else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
              }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () {
              return _this14.gettingTokens$.next(false);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["share"])());
          }
        }, {
          key: "logout",
          value: function logout() {
            var _this15 = this;

            return this.gettingTokens$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])(function (getting) {
              return !getting;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function () {
              return _this15.accessTokenService.setTokens(null);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mapTo"])(undefined));
          }
        }, {
          key: "refreshAccessToken",
          value: function refreshAccessToken(tokens) {
            return this.apiService.apiTokenRefreshCreate({
              refresh: tokens.refresh.token
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (apiResponse) {
              return {
                access: apiResponse.access,
                refresh: tokens.refresh.token
              };
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              console.error('Failed refreshing token', err);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            }));
          }
        }]);

        return LoginService;
      }();

      LoginService.ɵfac = function LoginService_Factory(t) {
        return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_access_token_service__WEBPACK_IMPORTED_MODULE_4__["AccessTokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_valid_access_token_holder_service__WEBPACK_IMPORTED_MODULE_5__["ValidAccessTokenHolderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_generated_api__WEBPACK_IMPORTED_MODULE_6__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_generated_api__WEBPACK_IMPORTED_MODULE_6__["UserService"]));
      };

      LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LoginService,
        factory: LoginService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _access_token_service__WEBPACK_IMPORTED_MODULE_4__["AccessTokenService"]
          }, {
            type: _valid_access_token_holder_service__WEBPACK_IMPORTED_MODULE_5__["ValidAccessTokenHolderService"]
          }, {
            type: _generated_api__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
          }, {
            type: _generated_api__WEBPACK_IMPORTED_MODULE_6__["UserService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "EnSQ":
    /*!******************************************!*\
      !*** ./src/app/services/data.service.ts ***!
      \******************************************/

    /*! exports provided: makeIndex, DataService */

    /***/
    function EnSQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "makeIndex", function () {
        return makeIndex;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataService", function () {
        return DataService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _generated_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../generated/api */
      "UIhn");
      /* harmony import */


      var _login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./login.service */
      "EFyh");
      /* harmony import */


      var _language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./language.service */
      "kyOO");

      function makeIndex(input) {
        return new Map(input.map(function (value) {
          return [value.id, value];
        }));
      }

      var DataService = /*#__PURE__*/function () {
        function DataService(countryService, speciesService, laboratoriesService, sampleTypesService, componentsService, mycotoxinsService, productsService, levelsService, loginService, languageService) {
          var _this16 = this;

          _classCallCheck(this, DataService);

          this.countryService = countryService;
          this.speciesService = speciesService;
          this.laboratoriesService = laboratoriesService;
          this.sampleTypesService = sampleTypesService;
          this.componentsService = componentsService;
          this.mycotoxinsService = mycotoxinsService;
          this.productsService = productsService;
          this.levelsService = levelsService;
          this.loginService = loginService;
          this.languageService = languageService;
          this.state$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('initial');
          this.data$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
          this.componentsLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
          this.lastComponents$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
          this.loading = this.state$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (state) {
            return state === 'loading' || state === 'initial';
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])());
          this.dataIdx$ = this.data$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (apiData) {
            if (apiData == null) return null;
            return {
              sampleTypes: makeIndex(apiData.sampleTypes),
              species: makeIndex(apiData.species),
              countries: makeIndex(apiData.countries),
              levels: makeIndex(apiData.levels),
              products: makeIndex(apiData.products),
              components: makeIndex(apiData.components)
            };
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1));
          var languageChange = this.languageService.currentLanguage.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])());
          var tokenChange = this.loginService.currentValidAccessToken.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(function (a, b) {
            return (a === null || a === void 0 ? void 0 : a.userId) === (b === null || b === void 0 ? void 0 : b.userId);
          }));
          Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([languageChange, tokenChange]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["throttleTime"])(400, undefined, {
            leading: true,
            trailing: true
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () {
            return _this16.reload();
          })).subscribe();
        }

        _createClass(DataService, [{
          key: "data",
          get: function get() {
            return this.data$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (d) {
              return d != null;
            }));
          }
        }, {
          key: "dataIdx",
          get: function get() {
            return this.dataIdx$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (d) {
              return d != null;
            }));
          }
        }, {
          key: "get",
          value: function get(key) {
            return this.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
              return data[key];
            }));
          }
        }, {
          key: "getIdx",
          value: function getIdx(key) {
            return this.dataIdx.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
              return data[key];
            }));
          }
        }, {
          key: "getComponents",
          value: function getComponents(sampleTypeId, speciesId) {
            return this.doGetComponents(sampleTypeId, speciesId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1));
          }
        }, {
          key: "getComponentsIdx",
          value: function getComponentsIdx(sampleTypeId, speciesId) {
            return this.doGetComponents(sampleTypeId, speciesId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (components) {
              return makeIndex(components);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1));
          }
        }, {
          key: "reload",
          value: function reload() {
            var _this17 = this;

            return this.awaitNotLoading().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () {
              return _this17.doReload();
            }));
          }
        }, {
          key: "processProducts",
          value: function processProducts(countryId, products) {
            return products.map(function (product) {
              var countryRule = product.product_country_rules.find(function (rule) {
                return rule.country === countryId;
              });

              if (countryRule == null) {
                return product;
              } else {
                return Object.assign({
                  id: product.id
                }, countryRule);
              }
            });
          }
        }, {
          key: "doGetComponents",
          value: function doGetComponents(sampleTypeId, speciesId) {
            var _this18 = this;

            return this.languageService.currentLanguage.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (languageId) {
              return _this18.getComponentsOnce(languageId, sampleTypeId, speciesId);
            }));
          }
        }, {
          key: "getComponentsOnce",
          value: function getComponentsOnce(languageId, sampleTypeId, speciesId) {
            var _this19 = this;

            return this.awaitComponentsNotLoading().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () {
              return _this19.componentsLoading$.next(true);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () {
              return _this19.maybeGetComponentsFromCache(languageId, sampleTypeId, speciesId);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
              return _this19.componentsLoading$.next(false);
            }));
          }
        }, {
          key: "maybeGetComponentsFromCache",
          value: function maybeGetComponentsFromCache(languageId, sampleTypeId, speciesId) {
            var _this20 = this;

            var current = this.lastComponents$.getValue();

            if (current == null || current.sampleTypeId !== sampleTypeId || current.speciesId !== speciesId || current.languageId !== languageId) {
              return this.componentsService.componentsList2(sampleTypeId, speciesId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (components) {
                return _this20.lastComponents$.next({
                  languageId: languageId,
                  sampleTypeId: sampleTypeId,
                  speciesId: speciesId,
                  components: components
                });
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["single"])());
            } else {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(current.components);
            }
          }
        }, {
          key: "awaitComponentsNotLoading",
          value: function awaitComponentsNotLoading() {
            return this.componentsLoading$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["skipWhile"])(function (loading) {
              return loading;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])(undefined));
          }
        }, {
          key: "awaitNotLoading",
          value: function awaitNotLoading() {
            return this.state$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["skipWhile"])(function (state) {
              return state === 'loading';
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])(undefined));
          }
        }, {
          key: "doReload",
          value: function doReload() {
            var _this21 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])({
              countries: this.countryService.countriesList(),
              species: this.speciesService.speciesList(),
              laboratories: this.laboratoriesService.laboratoriesList(),
              sampleTypes: this.sampleTypesService.sampleTypesList(),
              mycotoxins: this.mycotoxinsService.mycotoxinsList(),
              products: this.productsService.productsList(),
              levels: this.levelsService.levelsList(),
              components: this.componentsService.componentsList()
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) {
              _this21.data$.next(data);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])('loaded'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
              console.warn('Failed loading country data', err);
              return ['error'];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])('loading'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (state) {
              return _this21.state$.next(state);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])(undefined));
          }
        }]);

        return DataService;
      }();

      DataService.ɵfac = function DataService_Factory(t) {
        return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_generated_api__WEBPACK_IMPORTED_MODULE_3__["CountriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_generated_api__WEBPACK_IMPORTED_MODULE_3__["SpeciesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_generated_api__WEBPACK_IMPORTED_MODULE_3__["LaboratoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_generated_api__WEBPACK_IMPORTED_MODULE_3__["SampleTypesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_generated_api__WEBPACK_IMPORTED_MODULE_3__["ComponentsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_generated_api__WEBPACK_IMPORTED_MODULE_3__["MycotoxinsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_generated_api__WEBPACK_IMPORTED_MODULE_3__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_generated_api__WEBPACK_IMPORTED_MODULE_3__["LevelsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_language_service__WEBPACK_IMPORTED_MODULE_5__["LanguageService"]));
      };

      DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: DataService,
        factory: DataService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _generated_api__WEBPACK_IMPORTED_MODULE_3__["CountriesService"]
          }, {
            type: _generated_api__WEBPACK_IMPORTED_MODULE_3__["SpeciesService"]
          }, {
            type: _generated_api__WEBPACK_IMPORTED_MODULE_3__["LaboratoriesService"]
          }, {
            type: _generated_api__WEBPACK_IMPORTED_MODULE_3__["SampleTypesService"]
          }, {
            type: _generated_api__WEBPACK_IMPORTED_MODULE_3__["ComponentsService"]
          }, {
            type: _generated_api__WEBPACK_IMPORTED_MODULE_3__["MycotoxinsService"]
          }, {
            type: _generated_api__WEBPACK_IMPORTED_MODULE_3__["ProductsService"]
          }, {
            type: _generated_api__WEBPACK_IMPORTED_MODULE_3__["LevelsService"]
          }, {
            type: _login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]
          }, {
            type: _language_service__WEBPACK_IMPORTED_MODULE_5__["LanguageService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ExV1":
    /*!*****************************************************!*\
      !*** ./src/generated/api/api/sendReport.service.ts ***!
      \*****************************************************/

    /*! exports provided: SendReportService */

    /***/
    function ExV1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SendReportService", function () {
        return SendReportService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../encoder */
      "i0KE");
      /* harmony import */


      var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../variables */
      "G5Mf");
      /* harmony import */


      var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../configuration */
      "PKcu");
      /**
       *
       * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
       *
       * The version of the OpenAPI document: 0.0.0
       *
       *
       * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
       * https://openapi-generator.tech
       * Do not edit the class manually.
       */

      /* tslint:disable:no-unused-variable member-ordering */


      var SendReportService = /*#__PURE__*/function () {
        function SendReportService(httpClient, basePath, configuration) {
          _classCallCheck(this, SendReportService);

          this.httpClient = httpClient;
          this.basePath = 'http://localhost';
          this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();

          if (configuration) {
            this.configuration = configuration;
          }

          if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
              basePath = this.basePath;
            }

            this.configuration.basePath = basePath;
          }

          this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpParameterCodec"]();
        }

        _createClass(SendReportService, [{
          key: "addToHttpParams",
          value: function addToHttpParams(httpParams, value, key) {
            if (typeof value === "object" && value instanceof Date === false) {
              httpParams = this.addToHttpParamsRecursive(httpParams, value);
            } else {
              httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
            }

            return httpParams;
          }
        }, {
          key: "addToHttpParamsRecursive",
          value: function addToHttpParamsRecursive(httpParams, value, key) {
            var _this22 = this;

            if (value == null) {
              return httpParams;
            }

            if (typeof value === "object") {
              if (Array.isArray(value)) {
                value.forEach(function (elem) {
                  return httpParams = _this22.addToHttpParamsRecursive(httpParams, elem, key);
                });
              } else if (value instanceof Date) {
                if (key != null) {
                  httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                } else {
                  throw Error("key may not be null if value is Date");
                }
              } else {
                Object.keys(value).forEach(function (k) {
                  return httpParams = _this22.addToHttpParamsRecursive(httpParams, value[k], key != null ? "".concat(key, ".").concat(k) : k);
                });
              }
            } else if (key != null) {
              httpParams = httpParams.append(key, value);
            } else {
              throw Error("key may not be null if value is not object or array");
            }

            return httpParams;
          }
        }, {
          key: "sendReportCreate",
          value: function sendReportCreate(assessmentId, secretToken) {
            var observe = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'body';
            var reportProgress = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
            var options = arguments.length > 4 ? arguments[4] : undefined;

            if (assessmentId === null || assessmentId === undefined) {
              throw new Error('Required parameter assessmentId was null or undefined when calling sendReportCreate.');
            }

            if (secretToken === null || secretToken === undefined) {
              throw new Error('Required parameter secretToken was null or undefined when calling sendReportCreate.');
            }

            var headers = this.defaultHeaders;
            var credential; // authentication (jwtAuth) required

            credential = this.configuration.lookupCredential('jwtAuth');

            if (credential) {
              headers = headers.set('Authorization', 'Bearer ' + credential);
            }

            var httpHeaderAcceptSelected = options && options.httpHeaderAccept;

            if (httpHeaderAcceptSelected === undefined) {
              // to determine the Accept header
              var httpHeaderAccepts = [];
              httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            }

            if (httpHeaderAcceptSelected !== undefined) {
              headers = headers.set('Accept', httpHeaderAcceptSelected);
            }

            var responseType = 'json';

            if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
              responseType = 'text';
            }

            return this.httpClient.post("".concat(this.configuration.basePath, "/backend/masterdata/send-report/").concat(encodeURIComponent(String(assessmentId)), "/").concat(encodeURIComponent(String(secretToken)), "/"), null, {
              responseType: responseType,
              withCredentials: this.configuration.withCredentials,
              headers: headers,
              observe: observe,
              reportProgress: reportProgress
            });
          }
        }]);

        return SendReportService;
      }();

      SendReportService.ɵfac = function SendReportService_Factory(t) {
        return new (t || SendReportService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], 8));
      };

      SendReportService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SendReportService,
        factory: SendReportService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SendReportService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"]]
            }]
          }, {
            type: _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "FOGl":
    /*!******************************!*\
      !*** ./src/app/util/data.ts ***!
      \******************************/

    /*! exports provided: isRawTokenPair */

    /***/
    function FOGl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isRawTokenPair", function () {
        return isRawTokenPair;
      });

      function isRawTokenPair(input) {
        return typeof input === 'object' && typeof input['refresh'] === 'string' && typeof input['access'] === 'string';
      }
      /***/

    },

    /***/
    "G5Mf":
    /*!****************************************!*\
      !*** ./src/generated/api/variables.ts ***!
      \****************************************/

    /*! exports provided: BASE_PATH, COLLECTION_FORMATS */

    /***/
    function G5Mf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BASE_PATH", function () {
        return BASE_PATH;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "COLLECTION_FORMATS", function () {
        return COLLECTION_FORMATS;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var BASE_PATH = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('basePath');
      var COLLECTION_FORMATS = {
        'csv': ',',
        'tsv': '   ',
        'ssv': ' ',
        'pipes': '|'
      };
      /***/
    },

    /***/
    "GaGO":
    /*!*******************************************************************************!*\
      !*** ./src/app/modules/components/tutorial-popup/tutorial-popup.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: TutorialPopupComponent */

    /***/
    function GaGO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TutorialPopupComponent", function () {
        return TutorialPopupComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var _c0 = ["videoElement"];

      var TutorialPopupComponent = /*#__PURE__*/function () {
        function TutorialPopupComponent() {
          _classCallCheck(this, TutorialPopupComponent);
        }

        _createClass(TutorialPopupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.videoElement.nativeElement.play()["catch"](function (err) {
              console.error('Failed playing video', err);
            });
          }
        }]);

        return TutorialPopupComponent;
      }();

      TutorialPopupComponent.ɵfac = function TutorialPopupComponent_Factory(t) {
        return new (t || TutorialPopupComponent)();
      };

      TutorialPopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TutorialPopupComponent,
        selectors: [["app-tutorial-popup"]],
        viewQuery: function TutorialPopupComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.videoElement = _t.first);
          }
        },
        decls: 3,
        vars: 0,
        consts: [[1, "tutorial"], ["src", "/assets/tutorial_en.mp4", "controls", ""], ["videoElement", ""]],
        template: function TutorialPopupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "video", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tcG9uZW50cy90dXRvcmlhbC1wb3B1cC90dXRvcmlhbC1wb3B1cC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TutorialPopupComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-tutorial-popup',
            templateUrl: './tutorial-popup.component.html',
            styleUrls: ['./tutorial-popup.component.scss']
          }]
        }], function () {
          return [];
        }, {
          videoElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['videoElement']
          }]
        });
      })();
      /***/

    },

    /***/
    "Gg+M":
    /*!************************************************************!*\
      !*** ./src/app/modules/pages/imprint/imprint.component.ts ***!
      \************************************************************/

    /*! exports provided: ImprintComponent */

    /***/
    function GgM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImprintComponent", function () {
        return ImprintComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var ImprintComponent = /*#__PURE__*/_createClass(function ImprintComponent() {
        _classCallCheck(this, ImprintComponent);
      });

      ImprintComponent.ɵfac = function ImprintComponent_Factory(t) {
        return new (t || ImprintComponent)();
      };

      ImprintComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ImprintComponent,
        selectors: [["app-imprint"]],
        decls: 4,
        vars: 3,
        consts: [["ngx-translate", ""], [3, "innerHTML"]],
        template: function ImprintComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "IMPRINT_HEADER");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "IMPRINT_TEXT"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
          }
        },
        directives: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateDirective"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]],
        styles: ["[_nghost-%COMP%] {\n  display: block;\n  padding: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlcy9pbXByaW50L2ltcHJpbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wYWdlcy9pbXByaW50L2ltcHJpbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAyNHB4O1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImprintComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-imprint',
            templateUrl: './imprint.component.html',
            styleUrls: ['./imprint.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "GmzA":
    /*!********************************************************!*\
      !*** ./src/generated/api/model/userAssessmentInput.ts ***!
      \********************************************************/

    /*! no exports provided */

    /***/
    function GmzA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    "IewB":
    /*!*****************************************************!*\
      !*** ./src/generated/api/api/sampleform.service.ts ***!
      \*****************************************************/

    /*! exports provided: SampleFormService */

    /***/
    function IewB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SampleFormService", function () {
        return SampleFormService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../encoder */
      "i0KE");
      /* harmony import */


      var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../variables */
      "G5Mf");
      /* harmony import */


      var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../configuration */
      "PKcu");
      /**
       *
       * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
       *
       * The version of the OpenAPI document: 0.0.0
       *
       *
       * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
       * https://openapi-generator.tech
       * Do not edit the class manually.
       */

      /* tslint:disable:no-unused-variable member-ordering */


      var SampleFormService = /*#__PURE__*/function () {
        function SampleFormService(httpClient, basePath, configuration) {
          _classCallCheck(this, SampleFormService);

          this.httpClient = httpClient;
          this.basePath = 'http://localhost';
          this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();

          if (configuration) {
            this.configuration = configuration;
          }

          if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
              basePath = this.basePath;
            }

            this.configuration.basePath = basePath;
          }

          this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpParameterCodec"]();
        }

        _createClass(SampleFormService, [{
          key: "addToHttpParams",
          value: function addToHttpParams(httpParams, value, key) {
            if (typeof value === "object" && value instanceof Date === false) {
              httpParams = this.addToHttpParamsRecursive(httpParams, value);
            } else {
              httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
            }

            return httpParams;
          }
        }, {
          key: "addToHttpParamsRecursive",
          value: function addToHttpParamsRecursive(httpParams, value, key) {
            var _this23 = this;

            if (value == null) {
              return httpParams;
            }

            if (typeof value === "object") {
              if (Array.isArray(value)) {
                value.forEach(function (elem) {
                  return httpParams = _this23.addToHttpParamsRecursive(httpParams, elem, key);
                });
              } else if (value instanceof Date) {
                if (key != null) {
                  httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                } else {
                  throw Error("key may not be null if value is Date");
                }
              } else {
                Object.keys(value).forEach(function (k) {
                  return httpParams = _this23.addToHttpParamsRecursive(httpParams, value[k], key != null ? "".concat(key, ".").concat(k) : k);
                });
              }
            } else if (key != null) {
              httpParams = httpParams.append(key, value);
            } else {
              throw Error("key may not be null if value is not object or array");
            }

            return httpParams;
          }
        }, {
          key: "sampleFormCreate",
          value: function sampleFormCreate(userAssessmentInput) {
            var observe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'body';
            var reportProgress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var options = arguments.length > 3 ? arguments[3] : undefined;

            if (userAssessmentInput === null || userAssessmentInput === undefined) {
              throw new Error('Required parameter userAssessmentInput was null or undefined when calling sampleFormCreate.');
            }

            var headers = this.defaultHeaders;
            var credential; // authentication (jwtAuth) required

            credential = this.configuration.lookupCredential('jwtAuth');

            if (credential) {
              headers = headers.set('Authorization', 'Bearer ' + credential);
            }

            var httpHeaderAcceptSelected = options && options.httpHeaderAccept;

            if (httpHeaderAcceptSelected === undefined) {
              // to determine the Accept header
              var httpHeaderAccepts = ['application/json'];
              httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            }

            if (httpHeaderAcceptSelected !== undefined) {
              headers = headers.set('Accept', httpHeaderAcceptSelected);
            } // to determine the Content-Type header


            var consumes = ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);

            if (httpContentTypeSelected !== undefined) {
              headers = headers.set('Content-Type', httpContentTypeSelected);
            }

            var responseType = 'json';

            if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
              responseType = 'text';
            }

            return this.httpClient.post("".concat(this.configuration.basePath, "/backend/masterdata/axxess/"), userAssessmentInput, {
              responseType: responseType,
              withCredentials: this.configuration.withCredentials,
              headers: headers,
              observe: observe,
              reportProgress: reportProgress
            });
          }
        }]);

        return SampleFormService;
      }();

      SampleFormService.ɵfac = function SampleFormService_Factory(t) {
        return new (t || SampleFormService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], 8));
      };

      SampleFormService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SampleFormService,
        factory: SampleFormService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SampleFormService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"]]
            }]
          }, {
            type: _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "JnoF":
    /*!*******************************************************************************!*\
      !*** ./src/app/modules/components/navigation-bar/navigation-bar.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: NavigationBarComponent */

    /***/
    function JnoF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavigationBarComponent", function () {
        return NavigationBarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../sign-in/sign-in.component */
      "ZteZ");
      /* harmony import */


      var _moving_risk_popup_moving_risk_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../moving-risk-popup/moving-risk-popup.component */
      "TIiB");
      /* harmony import */


      var _services_form_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../services/form-data.service */
      "3aqe");
      /* harmony import */


      var _services_layout_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../services/layout.service */
      "nqAl");
      /* harmony import */


      var _services_language_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../services/language.service */
      "kyOO");
      /* harmony import */


      var _services_login_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../services/login.service */
      "EFyh");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");

      function NavigationBarComponent_mat_option_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var lang_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", lang_r3.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lang_r3.localName);
        }
      }

      function NavigationBarComponent_div_8_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationBarComponent_div_8_ng_container_1_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r6.signIn();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sign In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Create an account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationBarComponent_div_8_ng_container_1_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r8.showTutorial.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Tutorial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function NavigationBarComponent_div_8_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", null, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationBarComponent_div_8_ng_container_2_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r10.signIn();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Sign In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Create an account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationBarComponent_div_8_ng_container_2_Template_button_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r12.showTutorial.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Tutorial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r9);
        }
      }

      function NavigationBarComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavigationBarComponent_div_8_ng_container_1_Template, 10, 0, "ng-container", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavigationBarComponent_div_8_ng_container_2_Template, 15, 1, "ng-container", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.desktopView);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.desktopView);
        }
      }

      function NavigationBarComponent_div_9_button_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "table_chart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "DATA_VIEW_NAVLINKTITLE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NavigationBarComponent_div_9_button_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationBarComponent_div_9_button_8_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r16.openMovingRisk();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "insights");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "MOVING_RISK_REPORT_NAVLINKTITLE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NavigationBarComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "account_circle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-menu", null, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NavigationBarComponent_div_9_button_7_Template, 5, 0, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NavigationBarComponent_div_9_button_8_Template, 5, 0, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "lock");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "CHANGEPASSWORD_NAVLINKTITLE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationBarComponent_div_9_Template_button_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r18.showTutorial.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "help");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "SIGNINBARCOMPONENT_TUTORIAL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationBarComponent_div_9_Template_button_click_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r20.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "SIGNINBARCOMPONENT_SIGNOUT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r2.currentUser.name || ctx_r2.currentUser.email, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.currentUser.database_access != null && ctx_r2.currentUser.database_access !== "none");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.currentUser.customer_database_access);
        }
      }

      var NavigationBarComponent = /*#__PURE__*/function () {
        function NavigationBarComponent(formDataService, layoutService, languageService, loginService, matDialog, router) {
          _classCallCheck(this, NavigationBarComponent);

          this.formDataService = formDataService;
          this.layoutService = layoutService;
          this.languageService = languageService;
          this.loginService = loginService;
          this.matDialog = matDialog;
          this.router = router;
          this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.showTutorial = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.currentUser = null;
          this.knownLanguages = [];
          this.controls = {
            language: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null)
          };
          this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](this.controls);
          this.desktopView = false;
        }

        _createClass(NavigationBarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this24 = this;

            this.languageService.currentLanguage.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$)).subscribe(function (language) {
              _this24.controls.language.setValue(language, {
                emitEvent: false
              });
            });
            this.controls.language.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$)).subscribe(function (newLanguage) {
              _this24.languageService.setLanguage(newLanguage);
            });
            this.languageService.knownLanguages.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$)).subscribe(function (knownLanguages) {
              _this24.knownLanguages = knownLanguages;
            });
            this.loginService.currentUser.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$)).subscribe(function (currentUser) {
              _this24.currentUser = currentUser;
            });
            this.layoutService.stepperVerticalMode.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$)).subscribe(function (verticalMode) {
              return _this24.desktopView = !verticalMode;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroyed$.next();
            this.destroyed$.complete();
          }
        }, {
          key: "signIn",
          value: function signIn() {
            this.matDialog.open(_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__["SignInComponent"], {
              autoFocus: false
            });
          }
        }, {
          key: "reset",
          value: function reset() {
            this.formDataService.goToRoot();
          }
        }, {
          key: "logout",
          value: function logout() {
            this.loginService.logout().subscribe();
          }
        }, {
          key: "openMovingRisk",
          value: function openMovingRisk() {
            this.matDialog.open(_moving_risk_popup_moving_risk_popup_component__WEBPACK_IMPORTED_MODULE_5__["MovingRiskPopupComponent"], {
              autoFocus: false
            });
          }
        }]);

        return NavigationBarComponent;
      }();

      NavigationBarComponent.ɵfac = function NavigationBarComponent_Factory(t) {
        return new (t || NavigationBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_form_data_service__WEBPACK_IMPORTED_MODULE_6__["FormDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_7__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_language_service__WEBPACK_IMPORTED_MODULE_8__["LanguageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_9__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]));
      };

      NavigationBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavigationBarComponent,
        selectors: [["app-navigation-bar"]],
        outputs: {
          showTutorial: "showTutorial"
        },
        decls: 13,
        vars: 5,
        consts: [[1, "nav-bar-container"], [1, "nav-bar-inner"], [3, "formGroup"], [1, "language-selector"], ["matPrefix", ""], [3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "right", 4, "ngIf"], [1, "header-cta"], [3, "click", "mousedown"], ["src", "/assets/img/logo_masterrisk.png", "alt", "MasterRisk", 1, "logoimage"], [3, "value"], [1, "right"], [4, "ngIf"], ["mat-stroked-button", "", 1, "ew-stroke-button", "ew-small-button", 3, "click"], ["ngx-translate", ""], ["mat-stroked-button", "", "routerLink", "/registration", 1, "ew-stroke-button", "ew-small-button"], ["mat-icon-button", "", "color", "accent", 3, "matMenuTriggerFor"], ["signInMenu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", "", "routerLink", "/registration"], ["mat-button", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", "routerLink", "/data", 4, "ngIf"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", "routerLink", "/change-password"], ["mat-menu-item", "", "routerLink", "/data"]],
        template: function NavigationBarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "language");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-select", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NavigationBarComponent_mat_option_7_Template, 2, 2, "mat-option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NavigationBarComponent_div_8_Template, 3, 2, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NavigationBarComponent_div_9_Template, 24, 4, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationBarComponent_Template_button_click_11_listener() {
              return ctx.reset();
            })("mousedown", function NavigationBarComponent_Template_button_mousedown_11_listener($event) {
              return $event.preventDefault();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.controls.language);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.knownLanguages);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser == null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser != null);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatPrefix"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["TranslateDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLink"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuItem"]],
        styles: [".nav-bar-container[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  min-height: 13.4375rem;\n  padding: 0 16px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: stretch;\n}\n.nav-bar-container[_ngcontent-%COMP%]   .header-cta[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 3.125rem;\n  width: 100%;\n}\n.nav-bar-container[_ngcontent-%COMP%]   .header-cta[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 3.75rem;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.nav-bar-container[_ngcontent-%COMP%]   .header-cta[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: block;\n  border: none;\n  background: none;\n  margin: 0 auto;\n  cursor: pointer;\n}\n.nav-bar-container[_ngcontent-%COMP%]   .nav-bar-inner[_ngcontent-%COMP%] {\n  display: flex;\n  max-width: 1170px;\n  width: 100%;\n  margin: 0 auto;\n}\n.nav-bar-container[_ngcontent-%COMP%]   .element[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n}\n.nav-bar-container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  margin-left: auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  align-items: center;\n}\n.nav-bar-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:last-child):not(.mat-icon-button) {\n  margin-right: 1em;\n}\n.nav-bar-container[_ngcontent-%COMP%]   .language-selector[_ngcontent-%COMP%]   mat-icon[matPrefix][_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  margin-right: 0.4em;\n  position: relative;\n  top: 0.15em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21wb25lbnRzL25hdmlnYXRpb24tYmFyL25hdmlnYXRpb24tYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsbUJDRlk7RURHWixzQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0FBREY7QUFHRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0FBREo7QUFFSTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0FBQU47QUFFSTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUFOO0FBSUU7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQUZKO0FBS0U7RUFDRSxjQUFBO0FBSEo7QUFNRTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBSko7QUFPRTtFQUNFLGlCQUFBO0FBTEo7QUFRRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFOSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tcG9uZW50cy9uYXZpZ2F0aW9uLWJhci9uYXZpZ2F0aW9uLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvY29sb3JzXCI7XG5cbi5uYXYtYmFyLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6ICRld1NlY29uZGFyeTtcbiAgbWluLWhlaWdodDogMTMuNDM3NXJlbTtcbiAgcGFkZGluZzogMCAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuXG4gIC5oZWFkZXItY3RhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IDMuMTI1cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGltZyB7XG4gICAgICBoZWlnaHQ6IDMuNzVyZW07XG4gICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIH1cbiAgICBidXR0b24ge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG5cbiAgLm5hdi1iYXItaW5uZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWF4LXdpZHRoOiAxMTcwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cblxuICAuZWxlbWVudCB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gIH1cblxuICAucmlnaHQge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIGJ1dHRvbjpub3QoOmxhc3QtY2hpbGQpOm5vdCgubWF0LWljb24tYnV0dG9uKSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gIH1cblxuICAubGFuZ3VhZ2Utc2VsZWN0b3IgbWF0LWljb25bbWF0UHJlZml4XSB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNGVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDAuMTVlbTtcbiAgfVxuXG59IiwiJGV3UHJpbWFyeTogI2U4ZTEwMDtcbiRld1NlY29uZGFyeTogI2Y1ZjVmNTtcbiRld1RleHQ6ICMyODI4Mjg7XG5cbiRld1ByaW1hcnlQYWxldHRlOiAoXG4gICAgICAgIDUwIDogI2ZjZmJlMSxcbiAgICAgICAgMTAwIDogI2Y4ZjZiMyxcbiAgICAgICAgMjAwIDogI2Y0ZjA4MCxcbiAgICAgICAgMzAwIDogI2VmZWE0ZCxcbiAgICAgICAgNDAwIDogI2ViZTYyNyxcbiAgICAgICAgNTAwIDogI2U4ZTEwMSxcbiAgICAgICAgNjAwIDogI2U1ZGQwMSxcbiAgICAgICAgNzAwIDogI2UyZDkwMSxcbiAgICAgICAgODAwIDogI2RlZDUwMSxcbiAgICAgICAgOTAwIDogI2Q4Y2QwMCxcbiAgICAgICAgQTEwMCA6ICNmZmZmZmYsXG4gICAgICAgIEEyMDAgOiAjZmZmY2NkLFxuICAgICAgICBBNDAwIDogI2ZmZjk5YSxcbiAgICAgICAgQTcwMCA6ICNmZmY3ODAsXG4gICAgICAgIGNvbnRyYXN0OiAoXG4gICAgICAgICAgICAgICAgNTAgOiAjMDAwMDAwLFxuICAgICAgICAgICAgICAgIDEwMCA6ICMwMDAwMDAsXG4gICAgICAgICAgICAgICAgMjAwIDogIzAwMDAwMCxcbiAgICAgICAgICAgICAgICAzMDAgOiAjMDAwMDAwLFxuICAgICAgICAgICAgICAgIDQwMCA6ICMwMDAwMDAsXG4gICAgICAgICAgICAgICAgNTAwIDogIzAwMDAwMCxcbiAgICAgICAgICAgICAgICA2MDAgOiAjMDAwMDAwLFxuICAgICAgICAgICAgICAgIDcwMCA6ICMwMDAwMDAsXG4gICAgICAgICAgICAgICAgODAwIDogIzAwMDAwMCxcbiAgICAgICAgICAgICAgICA5MDAgOiAjMDAwMDAwLFxuICAgICAgICAgICAgICAgIEExMDAgOiAjMDAwMDAwLFxuICAgICAgICAgICAgICAgIEEyMDAgOiAjMDAwMDAwLFxuICAgICAgICAgICAgICAgIEE0MDAgOiAjMDAwMDAwLFxuICAgICAgICAgICAgICAgIEE3MDAgOiAjMDAwMDAwLFxuICAgICAgICApXG4pO1xuXG4kZXdTZWNvbmRhcnlQYWxldHRlOiAgKFxuICAgICAgICA1MCA6ICNlMWUxZTQsXG4gICAgICAgIDEwMCA6ICNiNWI1YmMsXG4gICAgICAgIDIwMCA6ICM4NDg0OGYsXG4gICAgICAgIDMwMCA6ICM1MjUyNjIsXG4gICAgICAgIDQwMCA6ICMyZDJkNDAsXG4gICAgICAgIDUwMCA6ICMwODA4MWUsXG4gICAgICAgIDYwMCA6ICMwNzA3MWEsXG4gICAgICAgIDcwMCA6ICMwNjA2MTYsXG4gICAgICAgIDgwMCA6ICMwNDA0MTIsXG4gICAgICAgIDkwMCA6ICMwMjAyMGEsXG4gICAgICAgIEExMDAgOiAjNGY0ZmZmLFxuICAgICAgICBBMjAwIDogIzFjMWNmZixcbiAgICAgICAgQTQwMCA6ICMwMDAwZTgsXG4gICAgICAgIEE3MDAgOiAjMDAwMGNlLFxuICAgICAgICBjb250cmFzdDogKFxuICAgICAgICAgICAgICAgIDUwIDogIzAwMDAwMCxcbiAgICAgICAgICAgICAgICAxMDAgOiAjMDAwMDAwLFxuICAgICAgICAgICAgICAgIDIwMCA6ICMwMDAwMDAsXG4gICAgICAgICAgICAgICAgMzAwIDogI2ZmZmZmZixcbiAgICAgICAgICAgICAgICA0MDAgOiAjZmZmZmZmLFxuICAgICAgICAgICAgICAgIDUwMCA6ICNmZmZmZmYsXG4gICAgICAgICAgICAgICAgNjAwIDogI2ZmZmZmZixcbiAgICAgICAgICAgICAgICA3MDAgOiAjZmZmZmZmLFxuICAgICAgICAgICAgICAgIDgwMCA6ICNmZmZmZmYsXG4gICAgICAgICAgICAgICAgOTAwIDogI2ZmZmZmZixcbiAgICAgICAgICAgICAgICBBMTAwIDogI2ZmZmZmZixcbiAgICAgICAgICAgICAgICBBMjAwIDogI2ZmZmZmZixcbiAgICAgICAgICAgICAgICBBNDAwIDogI2ZmZmZmZixcbiAgICAgICAgICAgICAgICBBNzAwIDogI2ZmZmZmZixcbiAgICAgICAgKVxuKTsiXX0= */", ".nav-bar-container[_ngcontent-serverApp-c135][_ngcontent-%COMP%]   .header-cta[_ngcontent-serverApp-c135][_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding-bottom: 2.125rem !important;\n    width: 100%;\n}\n\n.nav-bar-container[_ngcontent-serverApp-c135][_ngcontent-%COMP%]   .header-cta[_ngcontent-serverApp-c135][_ngcontent-%COMP%]   img[_ngcontent-serverApp-c135][_ngcontent-%COMP%] {\n    height: auto;\n    -o-object-fit: contain;\n    object-fit: contain;\n}\n\n.logoimage[_ngcontent-%COMP%]{\n    width: 270px;\nmargin-top: 20px;\n}"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationBarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-navigation-bar',
            templateUrl: './navigation-bar.component.html',
            styleUrls: ['./navigation-bar.component.scss']
          }]
        }], function () {
          return [{
            type: _services_form_data_service__WEBPACK_IMPORTED_MODULE_6__["FormDataService"]
          }, {
            type: _services_layout_service__WEBPACK_IMPORTED_MODULE_7__["LayoutService"]
          }, {
            type: _services_language_service__WEBPACK_IMPORTED_MODULE_8__["LanguageService"]
          }, {
            type: _services_login_service__WEBPACK_IMPORTED_MODULE_9__["LoginService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]
          }];
        }, {
          showTutorial: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "KEyS":
    /*!****************************************************!*\
      !*** ./src/generated/api/api/customers.service.ts ***!
      \****************************************************/

    /*! exports provided: CustomersService */

    /***/
    function KEyS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomersService", function () {
        return CustomersService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../encoder */
      "i0KE");
      /* harmony import */


      var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../variables */
      "G5Mf");
      /* harmony import */


      var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../configuration */
      "PKcu");
      /**
       *
       * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
       *
       * The version of the OpenAPI document: 0.0.0
       *
       *
       * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
       * https://openapi-generator.tech
       * Do not edit the class manually.
       */

      /* tslint:disable:no-unused-variable member-ordering */


      var CustomersService = /*#__PURE__*/function () {
        function CustomersService(httpClient, basePath, configuration) {
          _classCallCheck(this, CustomersService);

          this.httpClient = httpClient;
          this.basePath = 'http://localhost';
          this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();

          if (configuration) {
            this.configuration = configuration;
          }

          if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
              basePath = this.basePath;
            }

            this.configuration.basePath = basePath;
          }

          this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpParameterCodec"]();
        }

        _createClass(CustomersService, [{
          key: "addToHttpParams",
          value: function addToHttpParams(httpParams, value, key) {
            if (typeof value === "object" && value instanceof Date === false) {
              httpParams = this.addToHttpParamsRecursive(httpParams, value);
            } else {
              httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
            }

            return httpParams;
          }
        }, {
          key: "addToHttpParamsRecursive",
          value: function addToHttpParamsRecursive(httpParams, value, key) {
            var _this25 = this;

            if (value == null) {
              return httpParams;
            }

            if (typeof value === "object") {
              if (Array.isArray(value)) {
                value.forEach(function (elem) {
                  return httpParams = _this25.addToHttpParamsRecursive(httpParams, elem, key);
                });
              } else if (value instanceof Date) {
                if (key != null) {
                  httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                } else {
                  throw Error("key may not be null if value is Date");
                }
              } else {
                Object.keys(value).forEach(function (k) {
                  return httpParams = _this25.addToHttpParamsRecursive(httpParams, value[k], key != null ? "".concat(key, ".").concat(k) : k);
                });
              }
            } else if (key != null) {
              httpParams = httpParams.append(key, value);
            } else {
              throw Error("key may not be null if value is not object or array");
            }

            return httpParams;
          }
        }, {
          key: "customersCreate",
          value: function customersCreate(customer) {
            var observe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'body';
            var reportProgress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var options = arguments.length > 3 ? arguments[3] : undefined;

            if (customer === null || customer === undefined) {
              throw new Error('Required parameter customer was null or undefined when calling customersCreate.');
            }

            var headers = this.defaultHeaders;
            var credential; // authentication (jwtAuth) required

            credential = this.configuration.lookupCredential('jwtAuth');

            if (credential) {
              headers = headers.set('Authorization', 'Bearer ' + credential);
            }

            var httpHeaderAcceptSelected = options && options.httpHeaderAccept;

            if (httpHeaderAcceptSelected === undefined) {
              // to determine the Accept header
              var httpHeaderAccepts = ['application/json'];
              httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            }

            if (httpHeaderAcceptSelected !== undefined) {
              headers = headers.set('Accept', httpHeaderAcceptSelected);
            } // to determine the Content-Type header


            var consumes = ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);

            if (httpContentTypeSelected !== undefined) {
              headers = headers.set('Content-Type', httpContentTypeSelected);
            }

            var responseType = 'json';

            if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
              responseType = 'text';
            }

            return this.httpClient.post("".concat(this.configuration.basePath, "/backend/masterdata/customers/"), customer, {
              responseType: responseType,
              withCredentials: this.configuration.withCredentials,
              headers: headers,
              observe: observe,
              reportProgress: reportProgress
            });
          }
        }, {
          key: "customersList",
          value: function customersList(page, pageSize, search) {
            var observe = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'body';
            var reportProgress = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
            var options = arguments.length > 5 ? arguments[5] : undefined;
            var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({
              encoder: this.encoder
            });

            if (page !== undefined && page !== null) {
              queryParameters = this.addToHttpParams(queryParameters, page, 'page');
            }

            if (pageSize !== undefined && pageSize !== null) {
              queryParameters = this.addToHttpParams(queryParameters, pageSize, 'page_size');
            }

            if (search !== undefined && search !== null) {
              queryParameters = this.addToHttpParams(queryParameters, search, 'search');
            }

            var headers = this.defaultHeaders;
            var credential; // authentication (jwtAuth) required

            credential = this.configuration.lookupCredential('jwtAuth');

            if (credential) {
              headers = headers.set('Authorization', 'Bearer ' + credential);
            }

            var httpHeaderAcceptSelected = options && options.httpHeaderAccept;

            if (httpHeaderAcceptSelected === undefined) {
              // to determine the Accept header
              var httpHeaderAccepts = ['application/json'];
              httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            }

            if (httpHeaderAcceptSelected !== undefined) {
              headers = headers.set('Accept', httpHeaderAcceptSelected);
            }

            var responseType = 'json';

            if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
              responseType = 'text';
            }

            return this.httpClient.get("".concat(this.configuration.basePath, "/backend/masterdata/customers/"), {
              params: queryParameters,
              responseType: responseType,
              withCredentials: this.configuration.withCredentials,
              headers: headers,
              observe: observe,
              reportProgress: reportProgress
            });
          }
        }, {
          key: "customersMovingRiskList",
          value: function customersMovingRiskList(customerId, forMonths, speciesId) {
            var observe = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'body';
            var reportProgress = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
            var options = arguments.length > 5 ? arguments[5] : undefined;

            if (customerId === null || customerId === undefined) {
              throw new Error('Required parameter customerId was null or undefined when calling customersMovingRiskList.');
            }

            if (forMonths === null || forMonths === undefined) {
              throw new Error('Required parameter forMonths was null or undefined when calling customersMovingRiskList.');
            }

            if (speciesId === null || speciesId === undefined) {
              throw new Error('Required parameter speciesId was null or undefined when calling customersMovingRiskList.');
            }

            var headers = this.defaultHeaders;
            var credential; // authentication (jwtAuth) required

            credential = this.configuration.lookupCredential('jwtAuth');

            if (credential) {
              headers = headers.set('Authorization', 'Bearer ' + credential);
            }

            var httpHeaderAcceptSelected = options && options.httpHeaderAccept;

            if (httpHeaderAcceptSelected === undefined) {
              // to determine the Accept header
              var httpHeaderAccepts = ['application/json'];
              httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            }

            if (httpHeaderAcceptSelected !== undefined) {
              headers = headers.set('Accept', httpHeaderAcceptSelected);
            }

            var responseType = 'json';

            if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
              responseType = 'text';
            }

            return this.httpClient.get("".concat(this.configuration.basePath, "/backend/masterdata/customers/").concat(encodeURIComponent(String(customerId)), "/moving-risk/").concat(encodeURIComponent(String(speciesId)), "/").concat(encodeURIComponent(String(forMonths)), "/"), {
              responseType: responseType,
              withCredentials: this.configuration.withCredentials,
              headers: headers,
              observe: observe,
              reportProgress: reportProgress
            });
          }
        }, {
          key: "customersMovingRiskSendReportCreate",
          value: function customersMovingRiskSendReportCreate(customerId, forMonths, speciesId) {
            var observe = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'body';
            var reportProgress = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
            var options = arguments.length > 5 ? arguments[5] : undefined;

            if (customerId === null || customerId === undefined) {
              throw new Error('Required parameter customerId was null or undefined when calling customersMovingRiskSendReportCreate.');
            }

            if (forMonths === null || forMonths === undefined) {
              throw new Error('Required parameter forMonths was null or undefined when calling customersMovingRiskSendReportCreate.');
            }

            if (speciesId === null || speciesId === undefined) {
              throw new Error('Required parameter speciesId was null or undefined when calling customersMovingRiskSendReportCreate.');
            }

            var headers = this.defaultHeaders;
            var credential; // authentication (jwtAuth) required

            credential = this.configuration.lookupCredential('jwtAuth');

            if (credential) {
              headers = headers.set('Authorization', 'Bearer ' + credential);
            }

            var httpHeaderAcceptSelected = options && options.httpHeaderAccept;

            if (httpHeaderAcceptSelected === undefined) {
              // to determine the Accept header
              var httpHeaderAccepts = [];
              httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            }

            if (httpHeaderAcceptSelected !== undefined) {
              headers = headers.set('Accept', httpHeaderAcceptSelected);
            }

            var responseType = 'json';

            if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
              responseType = 'text';
            }

            return this.httpClient.post("".concat(this.configuration.basePath, "/backend/masterdata/customers/").concat(encodeURIComponent(String(customerId)), "/moving-risk/").concat(encodeURIComponent(String(speciesId)), "/").concat(encodeURIComponent(String(forMonths)), "/send-report/"), null, {
              responseType: responseType,
              withCredentials: this.configuration.withCredentials,
              headers: headers,
              observe: observe,
              reportProgress: reportProgress
            });
          }
        }]);

        return CustomersService;
      }();

      CustomersService.ɵfac = function CustomersService_Factory(t) {
        return new (t || CustomersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], 8));
      };

      CustomersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CustomersService,
        factory: CustomersService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomersService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"]]
            }]
          }, {
            type: _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "KgAc":
    /*!*******************************************************************!*\
      !*** ./src/app/modules/pages/registration/registration.module.ts ***!
      \*******************************************************************/

    /*! exports provided: RegistrationModule */

    /***/
    function KgAc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistrationModule", function () {
        return RegistrationModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _registration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./registration.component */
      "QJbD");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../components/components.module */
      "aDnW");

      var RegistrationModule = /*#__PURE__*/_createClass(function RegistrationModule() {
        _classCallCheck(this, RegistrationModule);
      });

      RegistrationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: RegistrationModule
      });
      RegistrationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function RegistrationModule_Factory(t) {
          return new (t || RegistrationModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_10__["ComponentsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RegistrationModule, {
          declarations: [_registration_component__WEBPACK_IMPORTED_MODULE_2__["RegistrationComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_10__["ComponentsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_registration_component__WEBPACK_IMPORTED_MODULE_2__["RegistrationComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_10__["ComponentsModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "LfsN":
    /*!******************************************!*\
      !*** ./src/generated/api/model/token.ts ***!
      \******************************************/

    /*! no exports provided */

    /***/
    function LfsN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /**
       *
       * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
       *
       * The version of the OpenAPI document: 0.0.0
       *
       *
       * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
       * https://openapi-generator.tech
       * Do not edit the class manually.
       */

      /***/

    },

    /***/
    "Lmu/":
    /*!****************************************************!*\
      !*** ./src/generated/api/model/tokenObtainPair.ts ***!
      \****************************************************/

    /*! no exports provided */

    /***/
    function Lmu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /**
       *
       * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
       *
       * The version of the OpenAPI document: 0.0.0
       *
       *
       * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
       * https://openapi-generator.tech
       * Do not edit the class manually.
       */

      /***/

    },

    /***/
    "N1To":
    /*!**************************************!*\
      !*** ./src/app/util/social-links.ts ***!
      \**************************************/

    /*! exports provided: socialLinks */

    /***/
    function N1To(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "socialLinks", function () {
        return socialLinks;
      });

      var socialLinks = [{
        icon: 'linkedin',
        link: 'https://de.linkedin.com/company/ew-nutrition',
        name: 'LinkedIn',
        "class": 'linkedin'
      }, {
        icon: 'twitter',
        link: 'https://twitter.com/ewnutritiongmbh',
        name: 'Twitter',
        "class": 'twitter'
      }, {
        icon: 'youtube',
        link: 'https://www.youtube.com/channel/UCIvcb19uSOJXrUecTY8n_dA',
        name: 'YouTube',
        "class": 'youtube'
      }, {
        icon: 'instagram',
        link: 'https://www.instagram.com/ewnutrition/',
        name: 'Instagram',
        "class": 'instagram'
      }];
      /***/
    },

    /***/
    "N217":
    /*!**************************************************************************!*\
      !*** ./src/app/modules/pages/reset-password/reset-password.component.ts ***!
      \**************************************************************************/

    /*! exports provided: ResetPasswordComponent */

    /***/
    function N217(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function () {
        return ResetPasswordComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _generated_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../generated/api */
      "UIhn");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");

      function ResetPasswordComponent_ng_container_2_ng_container_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " RESET_PASSWORD_TOKEN_ERROR_REQUIRED ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function ResetPasswordComponent_ng_container_2_ng_container_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r3.error), " ");
        }
      }

      function ResetPasswordComponent_ng_container_2_ng_container_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " RESET_PASSWORD_NEW_PASSWORD_ERROR_REQUIRED ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          visibility: a0
        };
      };

      function ResetPasswordComponent_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ResetPasswordComponent_ng_container_2_Template_form_ngSubmit_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "RESET_PASSWORD_TOKEN_LABEL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ResetPasswordComponent_ng_container_2_ng_container_8_Template, 3, 0, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "RESET_PASSWORD_NEW_PASSWORD_LABEL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ResetPasswordComponent_ng_container_2_ng_container_15_Template, 3, 3, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ResetPasswordComponent_ng_container_2_ng_container_16_Template, 3, 0, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "RESET_PASSWORD_SUBMIT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "mat-spinner", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.formGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.controls.token);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.controls.token.errors == null ? null : ctx_r0.controls.token.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.controls.newPassword)("errorStateMatcher", ctx_r0.passwordErrorMatcher);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.error != null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.error == null && (ctx_r0.controls.newPassword.errors == null ? null : ctx_r0.controls.newPassword.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx_r0.loading ? "visible" : "hidden"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 30);
        }
      }

      function ResetPasswordComponent_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "LOSTPASSWORD_SUCCESSTEXT"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      var ResetPasswordComponent = /*#__PURE__*/function () {
        function ResetPasswordComponent(route, apiService, translateService) {
          _classCallCheck(this, ResetPasswordComponent);

          this.route = route;
          this.apiService = apiService;
          this.translateService = translateService;
          this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.controls = {
            token: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
          };
          this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"](this.controls);
          this.submitted = false;
          this.error = null;
          this.loading = false;
          this.valid = true;
          this.token = null;
          var component = this;
          this.passwordErrorMatcher = new ( /*#__PURE__*/function (_angular_material_cor2) {
            _inherits(_class2, _angular_material_cor2);

            var _super2 = _createSuper(_class2);

            function _class2() {
              _classCallCheck(this, _class2);

              return _super2.apply(this, arguments);
            }

            _createClass(_class2, [{
              key: "isErrorState",
              value: function isErrorState(control, form) {
                return _get(_getPrototypeOf(_class2.prototype), "isErrorState", this).call(this, control, form) || component.error != null;
              }
            }]);

            return _class2;
          }(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"]))();
        }

        _createClass(ResetPasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this26 = this;

            this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$)).subscribe(function (routeParams) {
              _this26.token = routeParams['token'];

              if (_this26.token) {
                _this26.controls.token.setValue(_this26.token);

                _this26.controls.token.disable();
              } else {
                _this26.controls.token.enable();
              }
            });
          }
        }, {
          key: "hasToken",
          get: function get() {
            return this.token != null;
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this27 = this;

            if (this.formGroup.valid) {
              this.loading = true;
              this.error = null;
              this.apiService.apiPasswordResetConfirmCreate({
                password: this.controls.newPassword.value,
                token: this.controls.token.value
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$)).subscribe({
                next: function next() {
                  _this27.loading = false;
                  _this27.submitted = true;
                },
                error: function error(err) {
                  _this27.loading = false;
                  console.error('Reset Password failed', err);

                  if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpErrorResponse"] && Math.floor(err.status / 100) === 4 && typeof err.error === 'object' && Array.isArray(err.error.password)) {
                    _this27.error = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(err.error.password.map(function (p) {
                      return String(p);
                    }).join(', '));
                  } else {
                    _this27.error = _this27.translateService.get('RESETPASSWORD_FAILED');
                  }
                }
              });
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroyed$.next();
            this.destroyed$.complete();
          }
        }]);

        return ResetPasswordComponent;
      }();

      ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) {
        return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_generated_api__WEBPACK_IMPORTED_MODULE_7__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]));
      };

      ResetPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ResetPasswordComponent,
        selectors: [["app-reset-password"]],
        decls: 4,
        vars: 2,
        consts: [["ngx-translate", ""], [4, "ngIf"], [1, "form-container", 3, "formGroup", "ngSubmit"], ["matInput", "", 3, "formControl"], ["matInput", "", 3, "formControl", "errorStateMatcher"], [1, "button-container"], ["mat-flat-button", "", "color", "primary"], [3, "diameter"], [3, "innerHTML"]],
        template: function ResetPasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "RESET_PASSWORD_HEADER");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ResetPasswordComponent_ng_container_2_Template, 22, 12, "ng-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ResetPasswordComponent_ng_container_3_Template, 3, 3, "ng-container", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.submitted);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted);
          }
        },
        directives: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatError"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatSpinner"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]],
        styles: ["[_nghost-%COMP%] {\n  display: block;\n  padding: 24px;\n}\n\n.form-container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 30em;\n  max-width: 100%;\n  margin: 0 auto;\n  flex-direction: column;\n  align-items: flex-end;\n}\n\n.form-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.form-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%] {\n  margin-top: 1em;\n  display: flex;\n  align-items: center;\n}\n\n.form-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%] {\n  margin-left: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlcy9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBRUEsc0JBQUE7RUFDQSxxQkFBQTtBQUFGOztBQUVFO0VBQ0UsV0FBQTtBQUFKOztBQUdFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQURKOztBQUVJO0VBQ0UsZ0JBQUE7QUFBTiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAyNHB4O1xufVxuXG4uZm9ybS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMzBlbTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcblxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG5cbiAgbWF0LWZvcm0tZmllbGQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmJ1dHRvbi1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWF0LXNwaW5uZXIge1xuICAgICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICB9XG4gIH1cbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetPasswordComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-reset-password',
            templateUrl: './reset-password.component.html',
            styleUrls: ['./reset-password.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
          }, {
            type: _generated_api__WEBPACK_IMPORTED_MODULE_7__["ApiService"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "NlTa":
    /*!***********************************************************************!*\
      !*** ./src/app/modules/components/social-bar/social-bar.component.ts ***!
      \***********************************************************************/

    /*! exports provided: SocialBarComponent */

    /***/
    function NlTa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SocialBarComponent", function () {
        return SocialBarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _util_social_links__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../util/social-links */
      "N1To");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_form_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../services/form-data.service */
      "3aqe");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");

      var SocialBarComponent = /*#__PURE__*/function () {
        function SocialBarComponent(router, formDataService) {
          _classCallCheck(this, SocialBarComponent);

          this.router = router;
          this.formDataService = formDataService;
          this.socialLinks = _util_social_links__WEBPACK_IMPORTED_MODULE_1__["socialLinks"];
        }

        _createClass(SocialBarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goToHome",
          value: function goToHome() {
            this.formDataService.goToRoot();
          }
        }]);

        return SocialBarComponent;
      }();

      SocialBarComponent.ɵfac = function SocialBarComponent_Factory(t) {
        return new (t || SocialBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_form_data_service__WEBPACK_IMPORTED_MODULE_3__["FormDataService"]));
      };

      SocialBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SocialBarComponent,
        selectors: [["app-social-bar"]],
        decls: 4,
        vars: 0,
        consts: [["color", "primary"], [1, "socialbar"], [1, "title", 3, "click"], ["src", "/assets/img/logo-top.png", "alt", "MasterRisk", 1, "logo-top"]],
        template: function SocialBarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SocialBarComponent_Template_span_click_2_listener() {
              return ctx.goToHome();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarRow"]],
        styles: ["[_nghost-%COMP%]   .socialbar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n[_nghost-%COMP%]   .fill[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  text-decoration: none;\n  flex: 0 0 auto;\n  color: #282828;\n  font-size: 1.5rem;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%]   .first-word[_ngcontent-%COMP%] {\n  font-weight: 800;\n}\n[_nghost-%COMP%]   .logo-top[_ngcontent-%COMP%] {\n  width: 100px;\n}\n[_nghost-%COMP%]   .socialIcons[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n}\n[_nghost-%COMP%]   .socialIcons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 1.2em;\n  width: auto;\n  filter: invert(33%) sepia(1%) saturate(0%) hue-rotate(106deg) brightness(96%) contrast(91%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21wb25lbnRzL3NvY2lhbC1iYXIvc29jaWFsLWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUZKO0FBS0U7RUFDRSxjQUFBO0FBSEo7QUFNRTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGNDYks7RURjTCxpQkFBQTtFQUNBLGVBQUE7QUFKSjtBQU1JO0VBQ0UsZ0JBQUE7QUFKTjtBQU9BO0VBQ0UsWUFBQTtBQUxGO0FBT0U7RUFDRSxjQUFBO0FBTEo7QUFRTTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsMkZBQUE7QUFOUiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tcG9uZW50cy9zb2NpYWwtYmFyL3NvY2lhbC1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL2NvbG9yc1wiO1xuXG46aG9zdCB7XG4gIC5zb2NpYWxiYXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuXG4gIC5maWxsIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIGNvbG9yOiAkZXdUZXh0O1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIC5maXJzdC13b3JkIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgfVxuICB9XG4ubG9nby10b3B7XG4gIHdpZHRoOiAxMDBweDtcbn1cbiAgLnNvY2lhbEljb25zIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcblxuICAgIGEge1xuICAgICAgaW1nIHtcbiAgICAgICAgaGVpZ2h0OiAxLjJlbTtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIGZpbHRlcjogaW52ZXJ0KDMzJSkgc2VwaWEoMSUpIHNhdHVyYXRlKDAlKSBodWUtcm90YXRlKDEwNmRlZykgYnJpZ2h0bmVzcyg5NiUpIGNvbnRyYXN0KDkxJSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIkZXdQcmltYXJ5OiAjZThlMTAwO1xuJGV3U2Vjb25kYXJ5OiAjZjVmNWY1O1xuJGV3VGV4dDogIzI4MjgyODtcblxuJGV3UHJpbWFyeVBhbGV0dGU6IChcbiAgICAgICAgNTAgOiAjZmNmYmUxLFxuICAgICAgICAxMDAgOiAjZjhmNmIzLFxuICAgICAgICAyMDAgOiAjZjRmMDgwLFxuICAgICAgICAzMDAgOiAjZWZlYTRkLFxuICAgICAgICA0MDAgOiAjZWJlNjI3LFxuICAgICAgICA1MDAgOiAjZThlMTAxLFxuICAgICAgICA2MDAgOiAjZTVkZDAxLFxuICAgICAgICA3MDAgOiAjZTJkOTAxLFxuICAgICAgICA4MDAgOiAjZGVkNTAxLFxuICAgICAgICA5MDAgOiAjZDhjZDAwLFxuICAgICAgICBBMTAwIDogI2ZmZmZmZixcbiAgICAgICAgQTIwMCA6ICNmZmZjY2QsXG4gICAgICAgIEE0MDAgOiAjZmZmOTlhLFxuICAgICAgICBBNzAwIDogI2ZmZjc4MCxcbiAgICAgICAgY29udHJhc3Q6IChcbiAgICAgICAgICAgICAgICA1MCA6ICMwMDAwMDAsXG4gICAgICAgICAgICAgICAgMTAwIDogIzAwMDAwMCxcbiAgICAgICAgICAgICAgICAyMDAgOiAjMDAwMDAwLFxuICAgICAgICAgICAgICAgIDMwMCA6ICMwMDAwMDAsXG4gICAgICAgICAgICAgICAgNDAwIDogIzAwMDAwMCxcbiAgICAgICAgICAgICAgICA1MDAgOiAjMDAwMDAwLFxuICAgICAgICAgICAgICAgIDYwMCA6ICMwMDAwMDAsXG4gICAgICAgICAgICAgICAgNzAwIDogIzAwMDAwMCxcbiAgICAgICAgICAgICAgICA4MDAgOiAjMDAwMDAwLFxuICAgICAgICAgICAgICAgIDkwMCA6ICMwMDAwMDAsXG4gICAgICAgICAgICAgICAgQTEwMCA6ICMwMDAwMDAsXG4gICAgICAgICAgICAgICAgQTIwMCA6ICMwMDAwMDAsXG4gICAgICAgICAgICAgICAgQTQwMCA6ICMwMDAwMDAsXG4gICAgICAgICAgICAgICAgQTcwMCA6ICMwMDAwMDAsXG4gICAgICAgIClcbik7XG5cbiRld1NlY29uZGFyeVBhbGV0dGU6ICAoXG4gICAgICAgIDUwIDogI2UxZTFlNCxcbiAgICAgICAgMTAwIDogI2I1YjViYyxcbiAgICAgICAgMjAwIDogIzg0ODQ4ZixcbiAgICAgICAgMzAwIDogIzUyNTI2MixcbiAgICAgICAgNDAwIDogIzJkMmQ0MCxcbiAgICAgICAgNTAwIDogIzA4MDgxZSxcbiAgICAgICAgNjAwIDogIzA3MDcxYSxcbiAgICAgICAgNzAwIDogIzA2MDYxNixcbiAgICAgICAgODAwIDogIzA0MDQxMixcbiAgICAgICAgOTAwIDogIzAyMDIwYSxcbiAgICAgICAgQTEwMCA6ICM0ZjRmZmYsXG4gICAgICAgIEEyMDAgOiAjMWMxY2ZmLFxuICAgICAgICBBNDAwIDogIzAwMDBlOCxcbiAgICAgICAgQTcwMCA6ICMwMDAwY2UsXG4gICAgICAgIGNvbnRyYXN0OiAoXG4gICAgICAgICAgICAgICAgNTAgOiAjMDAwMDAwLFxuICAgICAgICAgICAgICAgIDEwMCA6ICMwMDAwMDAsXG4gICAgICAgICAgICAgICAgMjAwIDogIzAwMDAwMCxcbiAgICAgICAgICAgICAgICAzMDAgOiAjZmZmZmZmLFxuICAgICAgICAgICAgICAgIDQwMCA6ICNmZmZmZmYsXG4gICAgICAgICAgICAgICAgNTAwIDogI2ZmZmZmZixcbiAgICAgICAgICAgICAgICA2MDAgOiAjZmZmZmZmLFxuICAgICAgICAgICAgICAgIDcwMCA6ICNmZmZmZmYsXG4gICAgICAgICAgICAgICAgODAwIDogI2ZmZmZmZixcbiAgICAgICAgICAgICAgICA5MDAgOiAjZmZmZmZmLFxuICAgICAgICAgICAgICAgIEExMDAgOiAjZmZmZmZmLFxuICAgICAgICAgICAgICAgIEEyMDAgOiAjZmZmZmZmLFxuICAgICAgICAgICAgICAgIEE0MDAgOiAjZmZmZmZmLFxuICAgICAgICAgICAgICAgIEE3MDAgOiAjZmZmZmZmLFxuICAgICAgICApXG4pOyJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialBarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-social-bar',
            templateUrl: './social-bar.component.html',
            styleUrls: ['./social-bar.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _services_form_data_service__WEBPACK_IMPORTED_MODULE_3__["FormDataService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "OBCW":
    /*!***************************************************************!*\
      !*** ./src/app/modules/components/result/result.component.ts ***!
      \***************************************************************/

    /*! exports provided: ResultComponent */

    /***/
    function OBCW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResultComponent", function () {
        return ResultComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _alert_alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../alert/alert.component */
      "bTKV");
      /* harmony import */


      var jspdf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! jspdf */
      "i680");
      /* harmony import */


      var html2canvas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! html2canvas */
      "wOnQ");
      /* harmony import */


      var html2canvas__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _services_chart_js_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../services/chart-js.service */
      "5V3w");
      /* harmony import */


      var _generated_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../generated/api */
      "UIhn");
      /* harmony import */


      var _services_login_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../services/login.service */
      "EFyh");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _services_current_language_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../services/current-language.service */
      "pBAh");
      /* harmony import */


      var _services_data_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../services/data.service */
      "EnSQ");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");

      var _c0 = ["pdfElement"];
      var _c1 = ["canvasElement"];

      function ResultComponent_ng_container_0_ng_container_1_tr_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r7 == null ? null : row_r7.ingredients);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r7 == null ? null : row_r7.inclusion_percentage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r7 == null ? null : row_r7.me_kcal);
        }
      }

      function ResultComponent_ng_container_0_ng_container_1_div_75_button_1_ng_container_1_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "STEPFOUR_SEND");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ResultComponent_ng_container_0_ng_container_1_div_75_button_1_ng_container_1_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "STEPFOUR_POPUP_HEADING");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ResultComponent_ng_container_0_ng_container_1_div_75_button_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResultComponent_ng_container_0_ng_container_1_div_75_button_1_ng_container_1_span_1_Template, 2, 0, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ResultComponent_ng_container_0_ng_container_1_div_75_button_1_ng_container_1_span_2_Template, 2, 0, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r10.reportSent);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.reportSent);
        }
      }

      function ResultComponent_ng_container_0_ng_container_1_div_75_button_1_mat_spinner_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 32);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 20);
        }
      }

      function ResultComponent_ng_container_0_ng_container_1_div_75_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResultComponent_ng_container_0_ng_container_1_div_75_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

            return ctx_r14.sendClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResultComponent_ng_container_0_ng_container_1_div_75_button_1_ng_container_1_Template, 3, 2, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ResultComponent_ng_container_0_ng_container_1_div_75_button_1_mat_spinner_2_Template, 1, 1, "mat-spinner", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r9.reportSent);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r9.sending);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.sending);
        }
      }

      function ResultComponent_ng_container_0_ng_container_1_div_75_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResultComponent_ng_container_0_ng_container_1_div_75_button_1_Template, 3, 3, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResultComponent_ng_container_0_ng_container_1_div_75_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r16.restartClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Make New Assignment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResultComponent_ng_container_0_ng_container_1_div_75_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r18.convetToPDF();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Download");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.loggedIn);
        }
      }

      function ResultComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Species");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Broilers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Energy Upfit By AxxessXY in Complete Diet:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Total Sol AX%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Total Sol AX%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Total Sol AX%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Formulation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "table", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "tr", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Ingredients");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Inclusion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "ME, Kcal/Kg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, ResultComponent_ng_container_0_ng_container_1_tr_59_Template, 7, 3, "tr", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "table", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Ax Free Ingredeant");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Total Formulation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, ResultComponent_ng_container_0_ng_container_1_div_75_Template, 8, 1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.summary == null ? null : ctx_r3.summary.Total_Sol_AX_percent);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.summary == null ? null : ctx_r3.summary.Total_Formulation_Insol_AX_percentage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.summary == null ? null : ctx_r3.summary.Total_Improved_ME_Kcal_per_kg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.summary == null ? null : ctx_r3.summary.Axxess_XY);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.resultOutput);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.summary == null ? null : ctx_r3.summary.AX_free_ingredients);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.summary == null ? null : ctx_r3.summary.Total_Formulation_Inclusion_percentage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.summary == null ? null : ctx_r3.summary.Total_Formulation_ME_KCALperkg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.showButtons);
        }
      }

      function ResultComponent_ng_container_0_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "STEPFOUR_API_ERROR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function ResultComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResultComponent_ng_container_0_ng_container_1_Template, 76, 9, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ResultComponent_ng_container_0_ng_container_2_Template, 3, 0, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.apiErrors == null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.apiErrors != null);
        }
      }

      function ResultComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var ResultComponent = /*#__PURE__*/function () {
        function ResultComponent(chartJsService, sendReportService, loginService, matDialog, translateService, languageService, dataService, httpCLient) {
          _classCallCheck(this, ResultComponent);

          this.chartJsService = chartJsService;
          this.sendReportService = sendReportService;
          this.loginService = loginService;
          this.matDialog = matDialog;
          this.translateService = translateService;
          this.languageService = languageService;
          this.dataService = dataService;
          this.httpCLient = httpCLient;
          this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.resultOutput$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
          this.resultOutput = null;
          this.apiErrors = null;
          this.externalReport = false;
          this.showButtons = true;
          this.restart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.joinedEmailRecipients = null;
          this.sending$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.loggedIn = false;
          this.haveCharts = false;
          this.chartsLoaded = false;
          this.sending = false;
          this.reportSent = false;
          this.fillerColumns = [];
          this.levels = null;
        }

        _createClass(ResultComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this28 = this;

            this.dataService.get('levels').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$)).subscribe(function (levels) {
              return _this28.levels = levels;
            });
            this.resultOutput$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$)).subscribe(function (resultOutput) {
              var _a, _b, _c, _d;

              _this28.summary = (_a = _this28.resultOutput) === null || _a === void 0 ? void 0 : _a.pop();
              _this28.joinedEmailRecipients = (_d = (_c = (_b = resultOutput === null || resultOutput === void 0 ? void 0 : resultOutput.apiData) === null || _b === void 0 ? void 0 : _b.email_recipients) === null || _c === void 0 ? void 0 : _c.join(', ')) !== null && _d !== void 0 ? _d : null;
              _this28.species = resultOutput === null || resultOutput === void 0 ? void 0 : resultOutput.species;
              _this28.fillerColumns = resultOutput == null ? [] : Array.from({
                length: 5 - resultOutput.samples.length
              });
            });
            this.resultOutput = {
              "sampleType": [{
                "id": "feeds",
                "text": "Complete Feeds",
                "has_inclusion_rate": false,
                "has_total_risk": false,
                "has_bw_loss_and_fcr_graph": true
              }, {
                "id": "diet",
                "text": "Diet Components",
                "has_inclusion_rate": true,
                "has_total_risk": true,
                "has_bw_loss_and_fcr_graph": true
              }, {
                "id": "materials",
                "text": "Raw Materials",
                "has_inclusion_rate": false,
                "has_total_risk": false,
                "has_bw_loss_and_fcr_graph": false
              }],
              "species": [{
                "id": "shrimp",
                "text": "Aqua Shrimp",
                "has_products": ["MsFm", "MsGld"]
              }, {
                "id": "tilapia",
                "text": "Aqua Tilapia",
                "has_products": ["MsFm", "MsGld"]
              }, {
                "id": "breeders",
                "text": "Poultry Breeders",
                "has_products": ["MsFm", "MsGld", "SL", "SLM", "SLM2", "SLP", "SLP2.0"]
              }, {
                "id": "broilers",
                "text": "Poultry Broilers",
                "has_products": ["MsFm", "MsGld", "SL", "SLM", "SLM2", "SLP", "SLP2.0"]
              }, {
                "id": "layers",
                "text": "Poultry Layers",
                "has_products": ["MsFm", "MsGld", "SL", "SLM", "SLM2", "SLP", "SLP2.0"]
              }, {
                "id": "pullets",
                "text": "Poultry Pullets",
                "has_products": ["MsFm", "MsGld", "SL", "SLM", "SLM2", "SLP", "SLP2.0"]
              }, {
                "id": "chicks",
                "text": "Poultry Starters",
                "has_products": ["MsFm", "MsGld", "SL", "SLM", "SLM2", "SLP", "SLP2.0"]
              }, {
                "id": "beef",
                "text": "Ruminants Beef Cattle",
                "has_products": ["MsFm", "MsP"]
              }, {
                "id": "calves",
                "text": "Ruminants Calves",
                "has_products": ["MsFm", "MsGld", "MsP"]
              }, {
                "id": "dairy",
                "text": "Ruminants Dairy Cows",
                "has_products": ["MsFm", "MsGld", "MsP"]
              }, {
                "id": "fattening",
                "text": "Swine Growing-Finisher",
                "has_products": ["MsFm", "MsGld", "SL", "SLM", "SLM2", "SLP", "SLP2.0"]
              }, {
                "id": "piglets",
                "text": "Swine Piglets",
                "has_products": ["MsFm", "MsGld", "SL", "SLM", "SLM2", "SLP", "SLP2.0"]
              }, {
                "id": "sows",
                "text": "Swine Sows",
                "has_products": ["MsFm", "MsGld", "SL", "SLM", "SLM2", "SLP", "SLP2.0"]
              }],
              "apiData": {
                "author": "xxx"
              },
              "sampleTypes": {
                "id": "feeds",
                "text": "Complete Feeds",
                "has_inclusion_rate": false,
                "has_total_risk": false,
                "has_bw_loss_and_fcr_graph": true
              }
            }; // this.loginService.loggedIn.pipe(
            //     takeUntil(this.destroyed$)
            // ).subscribe(loggedIn => this.loggedIn = loggedIn);
            // this.sending$.pipe(
            //     debounceTime(200),
            //     takeUntil(this.destroyed$)
            // ).subscribe(sending => this.sending = sending);

            var chartJsData = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([this.resultOutput$, this.translateService.get('SAMPLE')]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_ref13) {
              var _ref14 = _slicedToArray(_ref13, 2),
                  resultOutput = _ref14[0],
                  sampleText = _ref14[1];

              var _a, _b, _c;

              if (resultOutput == null || !((_a = resultOutput === null || resultOutput === void 0 ? void 0 : resultOutput.sampleType) === null || _a === void 0 ? void 0 : _a.has_bw_loss_and_fcr_graph)) {
                return null;
              } else if (!resultOutput.samples.some(function (s) {
                return s.fcrFactor != null || s.bwFactor != null;
              }) && resultOutput.totalBwFactor == null && resultOutput.totalFcrFactor == null) {
                return null;
              } else {
                var defaultDatasetProps = {
                  backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
                  borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
                  borderWidth: 1,
                  maxBarThickness: 60
                };
                var defaultOptions = {
                  legend: {
                    display: false
                  }
                };
                var labels = resultOutput.sampleType.has_total_risk ? [sampleText] : resultOutput.apiData.samples.map(function (sample) {
                  return sample.name;
                });
                return [{
                  type: 'bar',
                  data: {
                    labels: labels,
                    datasets: [Object.assign({
                      data: resultOutput.sampleType.has_total_risk ? [(_b = resultOutput.totalBwFactor) !== null && _b !== void 0 ? _b : 0] : resultOutput.samples.map(function (sample) {
                        var _a;

                        return (_a = sample.bwFactor) !== null && _a !== void 0 ? _a : 0;
                      })
                    }, defaultDatasetProps)]
                  },
                  options: Object.assign(Object.assign({}, defaultOptions), {
                    scales: {
                      yAxes: [{
                        ticks: {
                          suggestedMax: 0
                        }
                      }]
                    }
                  })
                }, {
                  type: 'bar',
                  data: {
                    labels: labels,
                    datasets: [Object.assign({
                      data: resultOutput.sampleType.has_total_risk ? [(_c = resultOutput.totalFcrFactor) !== null && _c !== void 0 ? _c : 0] : resultOutput.samples.map(function (sample) {
                        var _a;

                        return (_a = sample.fcrFactor) !== null && _a !== void 0 ? _a : 0;
                      })
                    }, defaultDatasetProps)]
                  },
                  options: Object.assign(Object.assign({}, defaultOptions), {
                    scales: {
                      yAxes: [{
                        ticks: {
                          suggestedMin: 0
                        }
                      }]
                    }
                  })
                }];
              }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$));
            this.chartJsAndData$ = chartJsData.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (data) {
              return data == null ? [null] : _this28.chartJsService.chartJs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (chartJs) {
                return [chartJs, data];
              }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$));
            this.chartJsAndData$.subscribe(function (chartJsAndData) {
              _this28.chartsLoaded = chartJsAndData != null;
            });
            chartJsData.subscribe(function (chartJsData) {
              _this28.haveCharts = chartJsData != null;
            });
            this.resultOutput$.subscribe(function (resultOutput) {
              var _a, _b;

              _this28.reportSent = false;
              _this28.movingRiskData = ((_b = (_a = resultOutput === null || resultOutput === void 0 ? void 0 : resultOutput.movingRiskData) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) > 1 ? resultOutput.movingRiskData : null;
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this29 = this;

            var latestCanvas = this.canvasElements.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
              return _this29.canvasElements.toArray().map(function (c) {
                return c.nativeElement;
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(function (a, b) {
              if (a.length !== b.length) {
                return false;
              } else {
                return !a.some(function (v, idx) {
                  return b[idx] !== v;
                });
              }
            }));
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([latestCanvas, this.chartJsAndData$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$)).subscribe(function (_ref15) {
              var _ref16 = _slicedToArray(_ref15, 2),
                  canvasElements = _ref16[0],
                  chartJsAndData = _ref16[1];

              if (chartJsAndData != null) {
                ResultComponent.renderCharts(canvasElements, chartJsAndData[0], chartJsAndData[1]);
              }
            });
          }
        }, {
          key: "ready",
          value: function ready() {
            return this.resultOutput != null && this.levels != null || this.apiErrors != null;
          }
        }, {
          key: "restartClick",
          value: function restartClick() {
            this.restart.emit();
          }
        }, {
          key: "sendClick",
          value: function sendClick() {
            var _this30 = this;

            if (this.resultOutput != null) {
              this.sending$.next(true);
              this.sendReportService.sendReportCreate(this.resultOutput.apiData.id, this.resultOutput.apiData.secret_token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
                return _this30.sending$.next(false);
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$)).subscribe({
                next: function next() {
                  _this30.reportSent = true;
                },
                error: function error(err) {
                  console.error('Failed sending report', err);

                  _this30.matDialog.open(_alert_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"], {
                    autoFocus: false,
                    data: {
                      icon: 'error',
                      iconColor: 'warn',
                      title: 'Failed sending report',
                      message: 'Your report could not be sent. Please try again later.',
                      buttons: [{
                        id: '',
                        text: 'GENERAL_OK'
                      }]
                    }
                  });
                }
              });
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.resultOutput) {
              this.resultOutput$.next(this.resultOutput);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroyed$.next();
            this.destroyed$.complete();
            this.resultOutput$.complete();
          }
        }, {
          key: "convetToPDF",
          value: function convetToPDF() {
            var _this31 = this;

            this.httpCLient.get('/assets/result.html', {
              responseType: 'text'
            }).subscribe(function (data) {
              var _a, _b, _c, _d, _e, _f, _g, _h;

              var tr = "";

              _this31.resultOutput.forEach(function (element) {
                tr = "".concat(tr, "  <tr>\n                <td width=\"50%\" valign=\"top\"\n                style=\"font-size:9px;color:#000; font-weight:500; font-family:Inter, sans-serif; text-align:left; padding:0px 0px 0px 20px; line-height: 25px; \">\n                ").concat(element === null || element === void 0 ? void 0 : element.ingredients, "</td>\n                <td width=\"20%\" valign=\"top\"\n                style=\"font-size:9px;color:#000; font-weight:500; font-family:Inter, sans-serif; text-align:center; padding:0px 0px 0px 0px; line-height: 25px; \">\n                ").concat(element === null || element === void 0 ? void 0 : element.inclusion_percentage, "</td>\n                <td width=\"30%\" valign=\"top\"\n              style=\"font-size:9px;color:#000; font-weight:500; font-family:Inter, sans-serif; text-align:center; padding:0px 0px 0px 0px; line-height: 25px; \">\n              ").concat(element === null || element === void 0 ? void 0 : element.me_kcal, "</td>\n            </tr>");
              });

              _this31.htmlData = data.replace('__Total_Sol_AX_percent', (_a = _this31.summary) === null || _a === void 0 ? void 0 : _a.Total_Sol_AX_percent).replace('__Total_Formulation_Insol_AX_percentage', (_b = _this31.summary) === null || _b === void 0 ? void 0 : _b.Total_Formulation_Insol_AX_percentage).replace('__Total_Sol_AX_percent', (_c = _this31.summary) === null || _c === void 0 ? void 0 : _c.Total_Sol_AX_percent).replace('__Total_Improved_ME_Kcal_per_kg', (_d = _this31.summary) === null || _d === void 0 ? void 0 : _d.Total_Improved_ME_Kcal_per_kg).replace('__Axxess_XY', (_e = _this31.summary) === null || _e === void 0 ? void 0 : _e.Axxess_XY).replace('__FORMULATUION', tr).replace('__AX_free_ingredients', (_f = _this31.summary) === null || _f === void 0 ? void 0 : _f.AX_free_ingredients).replace('__Total_Formulation_Inclusion_percentage', (_g = _this31.summary) === null || _g === void 0 ? void 0 : _g.Total_Formulation_Inclusion_percentage).replace('__Total_Formulation_ME_KCALperkg', (_h = _this31.summary) === null || _h === void 0 ? void 0 : _h.Total_Formulation_ME_KCALperkg);
              var iframe = document.createElement("iframe");
              document.body.appendChild(iframe); // 👈 still required

              iframe.contentWindow.document.open();
              iframe.contentWindow.document.write(_this31.htmlData);
              iframe.contentWindow.document.close();
              html2canvas__WEBPACK_IMPORTED_MODULE_5___default()(iframe.contentWindow.document.body).then(function (canvas) {
                // Few necessary setting options
                var imgWidth = 208;
                var pageHeight = 295;
                var imgHeight = canvas.height * imgWidth / canvas.width;
                var heightLeft = imgHeight;
                var contentDataURL = canvas.toDataURL('image/png');
                var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_4__["default"]('p', 'mm', 'a4'); // A4 size page of PDF

                var position = 0;
                pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
                pdf.save('new-file.pdf'); // Generated PDF
              });
            });
          }
        }], [{
          key: "renderCharts",
          value: function renderCharts(canvasElements, chartJs, charts) {
            if (canvasElements.length !== charts.length) {
              return;
            } else {
              for (var idx = 0; idx < canvasElements.length; idx++) {
                new chartJs.Chart(canvasElements[idx], charts[idx]);
              }
            }
          }
        }]);

        return ResultComponent;
      }();

      ResultComponent.ɵfac = function ResultComponent_Factory(t) {
        return new (t || ResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_chart_js_service__WEBPACK_IMPORTED_MODULE_6__["ChartJsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_generated_api__WEBPACK_IMPORTED_MODULE_7__["SendReportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_8__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_current_language_service__WEBPACK_IMPORTED_MODULE_11__["CurrentLanguageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_12__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"]));
      };

      ResultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ResultComponent,
        selectors: [["app-result"]],
        viewQuery: function ResultComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.pdfElement = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvasElements = _t);
          }
        },
        inputs: {
          resultOutput: "resultOutput",
          apiErrors: "apiErrors",
          externalReport: "externalReport",
          showButtons: "showButtons"
        },
        outputs: {
          restart: "restart"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 3,
        vars: 2,
        consts: [[4, "ngIf", "ngIfElse"], ["spinner", ""], [4, "ngIf"], [1, "results-table", 2, "width", "100%"], [1, "sample-header--first"], ["scope", "row", 1, "sample-header__head", "bgnone"], ["ngx-translate", ""], ["scope", "row", 1, "second-td", "bgnone", "bdrtop"], ["scope", "row", 1, "ample-header__head", "bgnone"], [1, "sample-header--second"], ["scope", "row", "ngx-translate", ""], [1, "bgnone"], [1, "bgnone", "bdrtop"], ["scope", "row", "ngx-translate", "", 1, "bgnone"], [1, "small-disclaimer", "heading"], ["cellPadding", "0", "cellSpacing", "0", "border", "0", 1, "generaltable"], [1, "sample-header", "sample-header--first"], ["scope", "row", 1, "sample-header__head", "leftalign"], ["scope", "row", 1, "sample-header__head", "centeralign"], [4, "ngFor", "ngForOf"], ["cellPadding", "0", "cellSpacing", "10", "border", "0", 1, "btable"], ["colspan", "2", "scope", "row", "ngx-translate", ""], ["colspan", "2"], ["scope", "row", "colspan", "2"], ["class", "button-container", 4, "ngIf"], ["scope", "row", "ngx-translate", "", 1, "leftalign", "bgbdrnone"], [1, "button-container"], ["mat-flat-button", "", "color", "primary", 3, "disabled", "click", 4, "ngIf"], ["mat-flat-button", "", "color", "primary", 3, "click"], ["mat-flat-button", "", "color", "primary", 3, "disabled", "click"], ["color", "accent", 3, "diameter", 4, "ngIf"], ["ngx-translate", "", 4, "ngIf"], ["color", "accent", 3, "diameter"], [1, "spinner"], ["color", "primary"]],
        template: function ResultComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ResultComponent_ng_container_0_Template, 3, 2, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResultComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ready())("ngIfElse", _r1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__["MatSpinner"]],
        styles: ["h3[_ngcontent-%COMP%] {\n  margin-top: 1em;\n}\n\n.general-info-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .general-info-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.results-table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n\n.results-table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  table-layout: fixed;\n  width: 100%;\n  min-width: 65em;\n}\n\n@media print {\n  .results-table[_ngcontent-%COMP%] {\n    min-width: 0;\n    width: 100%;\n    page-break-inside: avoid;\n  }\n}\n\n.results-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .results-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border: 2px solid #eee;\n  padding: 0.5em 0.7em;\n  background: #f7f7f7;\n  text-align: center;\n  color: #282828;\n  font-size: 0.9375em;\n  width: 16%;\n}\n\n@media print {\n  .results-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .results-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background: white;\n    border-color: #282828;\n    border-width: 1px;\n    color: #282828 !important;\n    padding: 0;\n    overflow-wrap: break-word;\n    font-size: 7pt;\n    line-height: 10.5pt;\n    font-weight: 400;\n  }\n}\n\n.results-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child, .results-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  white-space: nowrap;\n  width: 20%;\n}\n\n@media print {\n  .results-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child, .results-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n    font-weight: 600;\n    font-size: 9pt;\n    line-height: 10.5pt;\n    text-align: left;\n  }\n}\n\n.results-table[_ngcontent-%COMP%]   .recommendations-table-header[_ngcontent-%COMP%]:nth-child(2)   td[_ngcontent-%COMP%], .results-table[_ngcontent-%COMP%]   .recommendations-table-header[_ngcontent-%COMP%]:nth-child(2)   th[_ngcontent-%COMP%] {\n  border-top: 0;\n}\n\n.results-table[_ngcontent-%COMP%]   .recommendations-table-header[_ngcontent-%COMP%]:nth-child(1)   td[_ngcontent-%COMP%], .results-table[_ngcontent-%COMP%]   .recommendations-table-header[_ngcontent-%COMP%]:nth-child(1)   th[_ngcontent-%COMP%] {\n  border-bottom: 0;\n}\n\n@media print {\n  .results-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    padding: 0.5em 0.5em;\n  }\n}\n\n.results-table[_ngcontent-%COMP%]   .sample-header[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .results-table[_ngcontent-%COMP%]   .sample-header[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #e8e100;\n  font-weight: 400;\n}\n\n@media print {\n  .results-table[_ngcontent-%COMP%]   .sample-header[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .results-table[_ngcontent-%COMP%]   .sample-header[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background: #f5f5f5;\n    color: black;\n    font-weight: 600;\n    font-size: 9pt;\n    line-height: 10.5pt;\n  }\n}\n\n.results-table[_ngcontent-%COMP%]   .sample-header[_ngcontent-%COMP%]   .sample-header__head[_ngcontent-%COMP%] {\n  font-size: 0.8125em;\n  text-transform: uppercase;\n}\n\n.results-table[_ngcontent-%COMP%]   .sample-header[_ngcontent-%COMP%]   .sample-header__head[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media print {\n  .results-table[_ngcontent-%COMP%]   .sample-header[_ngcontent-%COMP%]   .sample-header__head[_ngcontent-%COMP%] {\n    text-transform: none;\n  }\n}\n\n.results-table[_ngcontent-%COMP%]   .sample-header[_ngcontent-%COMP%]   .sample-header__sample-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n@media print {\n  .results-table[_ngcontent-%COMP%]   .sample-header[_ngcontent-%COMP%]   .sample-header__sample-name[_ngcontent-%COMP%] {\n    font-weight: 600;\n  }\n}\n\n.results-table[_ngcontent-%COMP%]   .sample-header.sample-header--first[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .results-table[_ngcontent-%COMP%]   .sample-header.sample-header--first[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding-bottom: 0.2em;\n  border-bottom: none;\n}\n\n@media print {\n  .results-table[_ngcontent-%COMP%]   .sample-header.sample-header--first[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .results-table[_ngcontent-%COMP%]   .sample-header.sample-header--first[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    padding: 0.5em;\n    border-bottom: 1px solid black;\n  }\n}\n\n.results-table[_ngcontent-%COMP%]   .sample-header.sample-header--first[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  text-align: right;\n}\n\n@media print {\n  .results-table[_ngcontent-%COMP%]   .sample-header.sample-header--first[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n    text-align: left;\n  }\n}\n\n.results-table[_ngcontent-%COMP%]   .sample-header.sample-header--second[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .results-table[_ngcontent-%COMP%]   .sample-header.sample-header--second[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding-top: 0.2em;\n  border-top: none;\n}\n\n@media print {\n  .results-table[_ngcontent-%COMP%]   .sample-header.sample-header--second[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .results-table[_ngcontent-%COMP%]   .sample-header.sample-header--second[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    padding-top: 0.5em;\n  }\n}\n\n.results-table[_ngcontent-%COMP%]   .total-risk-row[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #e8e100;\n  font-weight: 400;\n  color: #282828;\n  text-transform: uppercase;\n}\n\n.results-table[_ngcontent-%COMP%]   .total-risk-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: white;\n  font-size: 1.3em;\n  background-repeat: no-repeat;\n  background-position: bottom center;\n  background-size: calc(100% - 4mm) auto;\n}\n\n.results-table[_ngcontent-%COMP%]   .total-risk-row[_ngcontent-%COMP%]   td.total-risk-row__filler[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.results-table[_ngcontent-%COMP%]   .total-risk-row[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .results-table[_ngcontent-%COMP%]   .total-risk-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 1.5em;\n  text-align: center;\n}\n\n@media print {\n  .results-table[_ngcontent-%COMP%]   .total-risk-row[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .results-table[_ngcontent-%COMP%]   .total-risk-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    background-color: #f5f5f5 !important;\n    font-size: 9pt;\n    line-height: 10.5pt;\n    font-weight: 600;\n    overflow-wrap: break-word;\n    padding: 5mm 0;\n  }\n}\n\n@media screen {\n  .results-table[_ngcontent-%COMP%]   .total-risk-row[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .results-table[_ngcontent-%COMP%]   .total-risk-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    background-image: none !important;\n  }\n}\n\n.results-table[_ngcontent-%COMP%]   .fake-table-row[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .results-table[_ngcontent-%COMP%]   .fake-table-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: left;\n  font-weight: inherit;\n  background: none;\n  border: none;\n  white-space: normal;\n}\n\n.charts-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 100%;\n}\n\n@media screen and (min-width: 768px) {\n  .charts-container[_ngcontent-%COMP%] {\n    grid-template-columns: 50% 50%;\n  }\n  .charts-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 0.5em;\n  }\n  .charts-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:first-child) {\n    margin-left: 0.5em;\n  }\n}\n\n@media print {\n  .charts-container[_ngcontent-%COMP%] {\n    width: 18cm;\n    display: block;\n    page-break-before: avoid;\n  }\n  .charts-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    page-break-inside: avoid;\n  }\n  .charts-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    page-break-after: avoid;\n  }\n}\n\n.charts[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  page-break-after: avoid;\n}\n\n.charts-container-single[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 50%;\n  justify-content: center;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin-top: 2em;\n}\n\n@media print {\n  .button-container[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0.5em 2em;\n  margin: 0 1em;\n}\n\n.small-disclaimer[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n\n@media print {\n  .small-disclaimer[_ngcontent-%COMP%] {\n    font-size: 6pt;\n    line-height: 9pt;\n  }\n}\n\n.risk-category-interpretation[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media print {\n  .risk-category-interpretation[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n\n.risk-category-interpretation[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  width: 100%;\n  table-layout: fixed;\n}\n\n.risk-category-interpretation[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .risk-category-interpretation[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-left: 1px solid #282828;\n}\n\n.risk-category-interpretation[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .risk-category-interpretation__image-cell[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.risk-category-interpretation[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .risk-category-interpretation__image-cell[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: calc(100% - 4mm);\n}\n\n.risk-category-interpretation[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .risk-category-interpretation__text_cell[_ngcontent-%COMP%] {\n  white-space: pre-line;\n  font-size: 6pt;\n  line-height: 9pt;\n  padding: 0 4mm;\n}\n\n@media print {\n  h3[_ngcontent-%COMP%] {\n    font-weight: 700;\n    font-size: 11pt;\n    line-height: 13.5pt;\n  }\n\n  p[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 9pt;\n    line-height: 13.5pt;\n  }\n\n  .recommendations-table-header[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .recommendations-table-header[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background: #f5f5f5;\n    font-weight: 600;\n    font-size: 9pt;\n    line-height: 10.5pt;\n  }\n\n  .results-table[_ngcontent-%COMP%]   .sample-header--first[_ngcontent-%COMP%]   .sample-header__head[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    display: block;\n    width: 10.5pt;\n    height: 10.5pt;\n    font-size: 14pt;\n  }\n  .results-table[_ngcontent-%COMP%]   .sample-header--first[_ngcontent-%COMP%]   .sample-header__head[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  .results-table[_ngcontent-%COMP%]   .sample-header--second[_ngcontent-%COMP%]   .sample-header__head[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    display: block;\n    width: 10.5pt;\n    height: 10.5pt;\n    font-size: 14pt;\n    transform: rotate(90deg);\n    transform-origin: center center;\n    align-self: center;\n  }\n  .results-table[_ngcontent-%COMP%]   .sample-header--second[_ngcontent-%COMP%]   .sample-header__head[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n}\n\n@media print {\n  .comments-container[_ngcontent-%COMP%] {\n    font-size: 9pt;\n    line-height: 13.5pt;\n  }\n  .comments-container[_ngcontent-%COMP%]     h3 {\n    font-weight: 700;\n    font-size: 11pt;\n    line-height: 13.5pt;\n  }\n}\n\n.heading[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: 30px 10px 20px 10px;\n  color: #437646;\n}\n\n.bgnone[_ngcontent-%COMP%] {\n  background: none !important;\n}\n\n.bdrtop[_ngcontent-%COMP%] {\n  border-top: none !important;\n}\n\n.generaltable[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 9pt;\n  line-height: 13.5pt;\n  width: 70%;\n}\n\n.leftalign[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.centeralign[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.bgbdrnone[_ngcontent-%COMP%] {\n  background: none !important;\n  border: none !important;\n}\n\n.generaltable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 500;\n  background: #f7f7f7;\n  font-weight: 600;\n  font-size: 12pt;\n  line-height: 13.5pt;\n  border: 2px #eee solid;\n  padding: 15px 15px;\n}\n\n.generaltable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  width: 40%;\n}\n\n.generaltable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-weight: 500;\n  background: #fff;\n  font-weight: 500;\n  font-size: 12pt;\n  line-height: 13.5pt;\n  padding: 15px 15px;\n  text-align: center;\n}\n\n.generaltable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  text-align: left;\n}\n\n.btable[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 11pt;\n  line-height: 13.5pt;\n  width: 70%;\n}\n\n.btable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 500;\n  background: #9EC882;\n  font-weight: 600;\n  font-size: 11pt;\n  line-height: 14pt;\n  padding: 7px 15px;\n}\n\n.btable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  width: 40%;\n  text-align: left;\n}\n\n.btable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-weight: 500;\n  background: #9EC882;\n  font-weight: 600;\n  font-size: 11pt;\n  line-height: 14ppt;\n  padding: 7px 15px;\n  text-align: left;\n}\n\n.btable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21wb25lbnRzL3Jlc3VsdC9yZXN1bHQuY29tcG9uZW50LnNjc3MiLCJzcmMvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxlQUFBO0FBREo7O0FBS0k7RUFDSSxnQkFBQTtBQUZSOztBQU1BO0VBQ0ksZ0JBQUE7QUFISjs7QUFNQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUhKOztBQUtJO0VBTko7SUFPUSxZQUFBO0lBQ0EsV0FBQTtJQUNBLHdCQUFBO0VBRk47QUFDRjs7QUFJSTtFQUNJLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQUZSOztBQUlRO0VBVEo7SUFVUSxpQkFBQTtJQUNBLHFCQUFBO0lBQ0EsaUJBQUE7SUFDQSx5QkFBQTtJQUNBLFVBQUE7SUFDQSx5QkFBQTtJQUNBLGNBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0VBRFY7QUFDRjs7QUFHUTtFQUNJLG1CQUFBO0VBQ0EsVUFBQTtBQURaOztBQUdZO0VBSko7SUFLUSxnQkFBQTtJQUNBLGNBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0VBQWQ7QUFDRjs7QUFLUTtFQUNJLGFBQUE7QUFIWjs7QUFRUTtFQUNJLGdCQUFBO0FBTlo7O0FBV1E7RUFESjtJQUVRLG9CQUFBO0VBUlY7QUFDRjs7QUFZUTtFQUNJLG1CQ2xGQTtFRG9GQSxnQkFBQTtBQVhaOztBQWFZO0VBTEo7SUFNUSxtQkFBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtJQUNBLGNBQUE7SUFDQSxtQkFBQTtFQVZkO0FBQ0Y7O0FBYVE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0FBWFo7O0FBYVk7RUFDSSxhQUFBO0FBWGhCOztBQWNZO0VBUko7SUFTUSxvQkFBQTtFQVhkO0FBQ0Y7O0FBY1E7RUFDSSxnQkFBQTtBQVpaOztBQWNZO0VBSEo7SUFJUSxnQkFBQTtFQVhkO0FBQ0Y7O0FBZVk7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0FBYmhCOztBQWVnQjtFQUpKO0lBS1EsY0FBQTtJQUNBLDhCQUFBO0VBWmxCO0FBQ0Y7O0FBZVk7RUFDSSxpQkFBQTtBQWJoQjs7QUFlZ0I7RUFISjtJQUlRLGdCQUFBO0VBWmxCO0FBQ0Y7O0FBaUJZO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQWZoQjs7QUFpQmdCO0VBSko7SUFLUSxrQkFBQTtFQWRsQjtBQUNGOztBQW9CUTtFQUNJLG1CQ3RKQTtFRHVKQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQWxCWjs7QUFxQlE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQ0FBQTtBQW5CWjs7QUFzQlE7RUFDSSxZQUFBO0FBcEJaOztBQXVCUTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQXJCWjs7QUF1Qlk7RUFKSjtJQUtRLG9DQUFBO0lBQ0EsY0FBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7SUFDQSx5QkFBQTtJQUNBLGNBQUE7RUFwQmQ7QUFDRjs7QUFzQlk7RUFiSjtJQWNRLGlDQUFBO0VBbkJkO0FBQ0Y7O0FBeUJRO0VBQ0ksZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBdkJaOztBQStCQTtFQUNJLGFBQUE7RUFDQSwyQkFBQTtBQTVCSjs7QUE4Qkk7RUFKSjtJQUtRLDhCQUFBO0VBM0JOO0VBNEJNO0lBQ0ksbUJBQUE7RUExQlY7RUE2Qk07SUFDSSxrQkFBQTtFQTNCVjtBQUNGOztBQThCSTtFQWZKO0lBZ0JRLFdBQUE7SUFDQSxjQUFBO0lBQ0Esd0JBQUE7RUEzQk47RUE2Qk07SUFDSSx3QkFBQTtFQTNCVjtFQTRCVTtJQUNJLHVCQUFBO0VBMUJkO0FBQ0Y7O0FBK0JBO0VBQ0ksdUJBQUE7QUE1Qko7O0FBK0JBO0VBQ0ksYUFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7QUE1Qko7O0FBK0JBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FBNUJKOztBQStCQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFFQSxlQUFBO0FBN0JKOztBQStCSTtFQVBKO0lBUVEsYUFBQTtFQTVCTjtBQUNGOztBQThCSTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtBQTVCUjs7QUFnQ0E7RUFDSSxjQUFBO0FBN0JKOztBQStCSTtFQUhKO0lBSVEsY0FBQTtJQUNBLGdCQUFBO0VBNUJOO0FBQ0Y7O0FBK0JBO0VBQ0ksYUFBQTtBQTVCSjs7QUE2Qkk7RUFGSjtJQUdRLGNBQUE7RUExQk47QUFDRjs7QUE0Qkk7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQTFCUjs7QUEyQlE7RUFDSSw4QkFBQTtBQXpCWjs7QUE0QlE7RUFDSSxrQkFBQTtBQTFCWjs7QUEyQlk7RUFDSSx1QkFBQTtBQXpCaEI7O0FBNkJRO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBM0JaOztBQWlDQTtFQUNJO0lBQ0ksZ0JBQUE7SUFDQSxlQUFBO0lBQ0EsbUJBQUE7RUE5Qk47O0VBaUNFO0lBQ0ksZ0JBQUE7SUFDQSxjQUFBO0lBQ0EsbUJBQUE7RUE5Qk47O0VBb0NNO0lBQ0ksbUJBQUE7SUFDQSxnQkFBQTtJQUNBLGNBQUE7SUFDQSxtQkFBQTtFQWpDVjs7RUFzQ007SUFDSSxjQUFBO0lBQ0EsYUFBQTtJQUNBLGNBQUE7SUFDQSxlQUFBO0VBbkNWO0VBcUNNO0lBQ0ksYUFBQTtJQUNBLDhCQUFBO0lBQ0EsbUJBQUE7RUFuQ1Y7O0VBd0NNO0lBQ0ksY0FBQTtJQUNBLGFBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtJQUNBLHdCQUFBO0lBQ0EsK0JBQUE7SUFDQSxrQkFBQTtFQXJDVjtFQXVDTTtJQUNJLGFBQUE7SUFDQSxzQkFBQTtFQXJDVjtBQUNGOztBQXlDQTtFQUNJO0lBQ0ksY0FBQTtJQUNBLG1CQUFBO0VBdkNOO0VBd0NNO0lBQ0ksZ0JBQUE7SUFDQSxlQUFBO0lBQ0EsbUJBQUE7RUF0Q1Y7QUFDRjs7QUEwQ0E7RUFDSSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0FBeENKOztBQTJDQTtFQUNJLDJCQUFBO0FBeENKOztBQTJDQTtFQUNJLDJCQUFBO0FBeENKOztBQTJDQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQXhDSjs7QUE2Q0E7RUFDSSxnQkFBQTtBQTFDSjs7QUE2Q0E7RUFDSSxrQkFBQTtBQTFDSjs7QUE2Q0E7RUFDSSwyQkFBQTtFQUNBLHVCQUFBO0FBMUNKOztBQWdEQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUE3Q0o7O0FBa0RBO0VBQ0ksVUFBQTtBQS9DSjs7QUFtREE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBaERKOztBQW1EQTtFQUNJLGdCQUFBO0FBaERKOztBQXFEQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQWxESjs7QUF1REE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQXBESjs7QUF5REE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7QUF0REo7O0FBMERBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQXZESjs7QUEwREE7RUFDSSxrQkFBQTtBQXZESiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tcG9uZW50cy9yZXN1bHQvcmVzdWx0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy9jb2xvcnNcIjtcblxuaDMge1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbn1cblxuLmdlbmVyYWwtaW5mby10YWJsZSB7XG4gICAgdGQsIHRoIHtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG59XG5cbi5yZXN1bHRzLXRhYmxlLXdyYXBwZXIge1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG59XG5cbi5yZXN1bHRzLXRhYmxlIHtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLXdpZHRoOiA2NWVtO1xuXG4gICAgQG1lZGlhIHByaW50IHtcbiAgICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkO1xuICAgIH1cblxuICAgIHRkLCB0aCB7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNlZWU7XG4gICAgICAgIHBhZGRpbmc6IDAuNWVtIDAuN2VtO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAjMjgyODI4O1xuICAgICAgICBmb250LXNpemU6IDAuOTM3NWVtO1xuICAgICAgICB3aWR0aDogMTYlO1xuXG4gICAgICAgIEBtZWRpYSBwcmludCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzI4MjgyODtcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgICAgICAgICAgY29sb3I6ICMyODI4MjggIWltcG9ydGFudDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgICAgICAgICAgZm9udC1zaXplOiA3cHQ7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTAuNXB0O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgIHdpZHRoOiAyMCU7XG5cbiAgICAgICAgICAgIEBtZWRpYSBwcmludCB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDlwdDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTAuNXB0O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAucmVjb21tZW5kYXRpb25zLXRhYmxlLWhlYWRlcjpudGgtY2hpbGQoMikge1xuICAgICAgICB0ZCwgdGgge1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5yZWNvbW1lbmRhdGlvbnMtdGFibGUtaGVhZGVyOm50aC1jaGlsZCgxKSB7XG4gICAgICAgIHRkLCB0aCB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGgge1xuICAgICAgICBAbWVkaWEgcHJpbnQge1xuICAgICAgICAgICAgcGFkZGluZzogMC41ZW0gMC41ZW07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc2FtcGxlLWhlYWRlciB7XG4gICAgICAgIHRkLCB0aCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkZXdQcmltYXJ5O1xuICAgICAgICAgICAgLy8gY29sb3I6ICMyODI4Mjg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuXG4gICAgICAgICAgICBAbWVkaWEgcHJpbnQge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA5cHQ7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEwLjVwdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5zYW1wbGUtaGVhZGVyX19oZWFkIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44MTI1ZW07XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICAgICAgICAgICBtYXQtaWNvbiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIHByaW50IHtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5zYW1wbGUtaGVhZGVyX19zYW1wbGUtbmFtZSB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuXG4gICAgICAgICAgICBAbWVkaWEgcHJpbnQge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLnNhbXBsZS1oZWFkZXItLWZpcnN0IHtcbiAgICAgICAgICAgIHRkLCB0aCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDAuMmVtO1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG5cbiAgICAgICAgICAgICAgICBAbWVkaWEgcHJpbnQge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGg6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuXG4gICAgICAgICAgICAgICAgQG1lZGlhIHByaW50IHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLnNhbXBsZS1oZWFkZXItLXNlY29uZCB7XG4gICAgICAgICAgICB0ZCwgdGgge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwLjJlbTtcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wOiBub25lO1xuXG4gICAgICAgICAgICAgICAgQG1lZGlhIHByaW50IHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDAuNWVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC50b3RhbC1yaXNrLXJvdyB7XG4gICAgICAgIHRoIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRld1ByaW1hcnk7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgY29sb3I6ICMyODI4Mjg7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGQge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tIGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY2FsYygxMDAlIC0gNG1tKSBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgdGQudG90YWwtcmlzay1yb3dfX2ZpbGxlciB7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIH1cblxuICAgICAgICB0aCwgdGQge1xuICAgICAgICAgICAgcGFkZGluZzogMS41ZW07XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgICAgIEBtZWRpYSBwcmludCB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogOXB0O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMC41cHQ7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVtbSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC5mYWtlLXRhYmxlLXJvdyB7XG4gICAgICAgIHRoLCB0ZCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgICAgfVxuICAgIH1cblxufVxuICBcbiBcblxuLmNoYXJ0cy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xuICAgICAgICA+ICo6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xuICAgICAgICB9XG5cbiAgICAgICAgPiAqOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBtZWRpYSBwcmludCB7XG4gICAgICAgIHdpZHRoOiAxOGNtO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcGFnZS1icmVhay1iZWZvcmU6IGF2b2lkO1xuXG4gICAgICAgID4gZGl2IHtcbiAgICAgICAgICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDtcbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIHBhZ2UtYnJlYWstYWZ0ZXI6IGF2b2lkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uY2hhcnRzIGgzIHtcbiAgICBwYWdlLWJyZWFrLWFmdGVyOiBhdm9pZDtcbn1cblxuLmNoYXJ0cy1jb250YWluZXItc2luZ2xlIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc3Bpbm5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmJ1dHRvbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgbWFyZ2luLXRvcDogMmVtO1xuXG4gICAgQG1lZGlhIHByaW50IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICBidXR0b24ge1xuICAgICAgICBwYWRkaW5nOiAwLjVlbSAyZW07XG4gICAgICAgIG1hcmdpbjogMCAxZW07XG4gICAgfVxufVxuXG4uc21hbGwtZGlzY2xhaW1lciB7XG4gICAgZm9udC1zaXplOiAxZW07XG5cbiAgICBAbWVkaWEgcHJpbnQge1xuICAgICAgICBmb250LXNpemU6IDZwdDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDlwdDtcbiAgICB9XG59XG5cbi5yaXNrLWNhdGVnb3J5LWludGVycHJldGF0aW9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIEBtZWRpYSBwcmludCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIHRhYmxlIHtcbiAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gICAgICAgIHRkLCB0aCB7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMyODI4Mjg7XG4gICAgICAgIH1cblxuICAgICAgICAucmlzay1jYXRlZ29yeS1pbnRlcnByZXRhdGlvbl9faW1hZ2UtY2VsbCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0bW0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yaXNrLWNhdGVnb3J5LWludGVycHJldGF0aW9uX190ZXh0X2NlbGwge1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICAgICAgICAgICAgZm9udC1zaXplOiA2cHQ7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogOXB0O1xuICAgICAgICAgICAgcGFkZGluZzogMCA0bW07XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuQG1lZGlhIHByaW50IHtcbiAgICBoMyB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFwdDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEzLjVwdDtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgZm9udC1zaXplOiA5cHQ7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMy41cHQ7XG4gICAgfVxuXG4gICBcblxuICAgIC5yZWNvbW1lbmRhdGlvbnMtdGFibGUtaGVhZGVyIHtcbiAgICAgICAgdGQsIHRoIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiA5cHQ7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTAuNXB0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnJlc3VsdHMtdGFibGUgLnNhbXBsZS1oZWFkZXItLWZpcnN0IC5zYW1wbGUtaGVhZGVyX19oZWFkIHtcbiAgICAgICAgbWF0LWljb24ge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDogMTAuNXB0O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMC41cHQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHQ7XG4gICAgICAgIH1cbiAgICAgICAgPiBzcGFuIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnJlc3VsdHMtdGFibGUgLnNhbXBsZS1oZWFkZXItLXNlY29uZCAuc2FtcGxlLWhlYWRlcl9faGVhZCB7XG4gICAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDEwLjVwdDtcbiAgICAgICAgICAgIGhlaWdodDogMTAuNXB0O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB0O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICA+IHNwYW4ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBwcmludCB7XG4gICAgLmNvbW1lbnRzLWNvbnRhaW5lciB7XG4gICAgICAgIGZvbnQtc2l6ZTogOXB0O1xuICAgICAgICBsaW5lLWhlaWdodDogMTMuNXB0O1xuICAgICAgICA6Om5nLWRlZXAgaDMge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFwdDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMy41cHQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5oZWFkaW5ne1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW46IDMwcHggMTBweCAyMHB4IDEwcHg7XG4gICAgY29sb3I6ICM0Mzc2NDY7IFxufVxuXG4uYmdub25le1xuICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmJkcnRvcHtcbiAgICBib3JkZXItdG9wOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5nZW5lcmFsdGFibGUge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiA5cHQ7XG4gICAgbGluZS1oZWlnaHQ6IDEzLjVwdDtcbiAgICB3aWR0aDogNzAlO1xuXG4gICBcbn1cblxuLmxlZnRhbGlnbntcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uY2VudGVyYWxpZ257XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmdiZHJub25le1xuICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuXG5cblxuLmdlbmVyYWx0YWJsZSB0aCAge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgYmFja2dyb3VuZDogI2Y3ZjdmNztcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZToxMnB0O1xuICAgIGxpbmUtaGVpZ2h0OiAxMy41cHQ7XG4gICAgYm9yZGVyOiAycHggI2VlZSBzb2xpZDtcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHg7XG5cbiAgICBcbn1cblxuLmdlbmVyYWx0YWJsZSB0aDpmaXJzdC1jaGlsZCAge1xuICAgIHdpZHRoOiA0MCU7XG59XG5cblxuLmdlbmVyYWx0YWJsZSB0ZCAge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBmb250LXdlaWdodDo1MDA7XG4gICAgZm9udC1zaXplOiAxMnB0O1xuICAgIGxpbmUtaGVpZ2h0OiAxMy41cHQ7XG4gICAgcGFkZGluZzogMTVweCAxNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmdlbmVyYWx0YWJsZSB0ZDpmaXJzdC1jaGlsZCAge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cblxuXG4uYnRhYmxlIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTFwdDtcbiAgICBsaW5lLWhlaWdodDogMTMuNXB0O1xuICAgIHdpZHRoOiA3MCU7XG5cbiAgIFxufVxuXG4uYnRhYmxlIHRoICB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBiYWNrZ3JvdW5kOiAjOUVDODgyO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOjExcHQ7XG4gICAgbGluZS1oZWlnaHQ6IDE0cHQ7XG4gICAgcGFkZGluZzogN3B4IDE1cHg7XG5cbiAgICBcbn1cblxuLmJ0YWJsZSB0aDpmaXJzdC1jaGlsZCAge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuXG4uYnRhYmxlIHRkICB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBiYWNrZ3JvdW5kOiAjOUVDODgyO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxMXB0O1xuICAgIGxpbmUtaGVpZ2h0OiAxNHBwdDtcbiAgICBwYWRkaW5nOiA3cHggMTVweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uYnRhYmxlIHRkOmxhc3QtY2hpbGQgIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxuXG4iLCIkZXdQcmltYXJ5OiAjZThlMTAwO1xuJGV3U2Vjb25kYXJ5OiAjZjVmNWY1O1xuJGV3VGV4dDogIzI4MjgyODtcblxuJGV3UHJpbWFyeVBhbGV0dGU6IChcbiAgICAgICAgNTAgOiAjZmNmYmUxLFxuICAgICAgICAxMDAgOiAjZjhmNmIzLFxuICAgICAgICAyMDAgOiAjZjRmMDgwLFxuICAgICAgICAzMDAgOiAjZWZlYTRkLFxuICAgICAgICA0MDAgOiAjZWJlNjI3LFxuICAgICAgICA1MDAgOiAjZThlMTAxLFxuICAgICAgICA2MDAgOiAjZTVkZDAxLFxuICAgICAgICA3MDAgOiAjZTJkOTAxLFxuICAgICAgICA4MDAgOiAjZGVkNTAxLFxuICAgICAgICA5MDAgOiAjZDhjZDAwLFxuICAgICAgICBBMTAwIDogI2ZmZmZmZixcbiAgICAgICAgQTIwMCA6ICNmZmZjY2QsXG4gICAgICAgIEE0MDAgOiAjZmZmOTlhLFxuICAgICAgICBBNzAwIDogI2ZmZjc4MCxcbiAgICAgICAgY29udHJhc3Q6IChcbiAgICAgICAgICAgICAgICA1MCA6ICMwMDAwMDAsXG4gICAgICAgICAgICAgICAgMTAwIDogIzAwMDAwMCxcbiAgICAgICAgICAgICAgICAyMDAgOiAjMDAwMDAwLFxuICAgICAgICAgICAgICAgIDMwMCA6ICMwMDAwMDAsXG4gICAgICAgICAgICAgICAgNDAwIDogIzAwMDAwMCxcbiAgICAgICAgICAgICAgICA1MDAgOiAjMDAwMDAwLFxuICAgICAgICAgICAgICAgIDYwMCA6ICMwMDAwMDAsXG4gICAgICAgICAgICAgICAgNzAwIDogIzAwMDAwMCxcbiAgICAgICAgICAgICAgICA4MDAgOiAjMDAwMDAwLFxuICAgICAgICAgICAgICAgIDkwMCA6ICMwMDAwMDAsXG4gICAgICAgICAgICAgICAgQTEwMCA6ICMwMDAwMDAsXG4gICAgICAgICAgICAgICAgQTIwMCA6ICMwMDAwMDAsXG4gICAgICAgICAgICAgICAgQTQwMCA6ICMwMDAwMDAsXG4gICAgICAgICAgICAgICAgQTcwMCA6ICMwMDAwMDAsXG4gICAgICAgIClcbik7XG5cbiRld1NlY29uZGFyeVBhbGV0dGU6ICAoXG4gICAgICAgIDUwIDogI2UxZTFlNCxcbiAgICAgICAgMTAwIDogI2I1YjViYyxcbiAgICAgICAgMjAwIDogIzg0ODQ4ZixcbiAgICAgICAgMzAwIDogIzUyNTI2MixcbiAgICAgICAgNDAwIDogIzJkMmQ0MCxcbiAgICAgICAgNTAwIDogIzA4MDgxZSxcbiAgICAgICAgNjAwIDogIzA3MDcxYSxcbiAgICAgICAgNzAwIDogIzA2MDYxNixcbiAgICAgICAgODAwIDogIzA0MDQxMixcbiAgICAgICAgOTAwIDogIzAyMDIwYSxcbiAgICAgICAgQTEwMCA6ICM0ZjRmZmYsXG4gICAgICAgIEEyMDAgOiAjMWMxY2ZmLFxuICAgICAgICBBNDAwIDogIzAwMDBlOCxcbiAgICAgICAgQTcwMCA6ICMwMDAwY2UsXG4gICAgICAgIGNvbnRyYXN0OiAoXG4gICAgICAgICAgICAgICAgNTAgOiAjMDAwMDAwLFxuICAgICAgICAgICAgICAgIDEwMCA6ICMwMDAwMDAsXG4gICAgICAgICAgICAgICAgMjAwIDogIzAwMDAwMCxcbiAgICAgICAgICAgICAgICAzMDAgOiAjZmZmZmZmLFxuICAgICAgICAgICAgICAgIDQwMCA6ICNmZmZmZmYsXG4gICAgICAgICAgICAgICAgNTAwIDogI2ZmZmZmZixcbiAgICAgICAgICAgICAgICA2MDAgOiAjZmZmZmZmLFxuICAgICAgICAgICAgICAgIDcwMCA6ICNmZmZmZmYsXG4gICAgICAgICAgICAgICAgODAwIDogI2ZmZmZmZixcbiAgICAgICAgICAgICAgICA5MDAgOiAjZmZmZmZmLFxuICAgICAgICAgICAgICAgIEExMDAgOiAjZmZmZmZmLFxuICAgICAgICAgICAgICAgIEEyMDAgOiAjZmZmZmZmLFxuICAgICAgICAgICAgICAgIEE0MDAgOiAjZmZmZmZmLFxuICAgICAgICAgICAgICAgIEE3MDAgOiAjZmZmZmZmLFxuICAgICAgICApXG4pOyJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResultComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-result',
            templateUrl: './result.component.html',
            styleUrls: ['./result.component.scss']
          }]
        }], function () {
          return [{
            type: _services_chart_js_service__WEBPACK_IMPORTED_MODULE_6__["ChartJsService"]
          }, {
            type: _generated_api__WEBPACK_IMPORTED_MODULE_7__["SendReportService"]
          }, {
            type: _services_login_service__WEBPACK_IMPORTED_MODULE_8__["LoginService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]
          }, {
            type: _services_current_language_service__WEBPACK_IMPORTED_MODULE_11__["CurrentLanguageService"]
          }, {
            type: _services_data_service__WEBPACK_IMPORTED_MODULE_12__["DataService"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"]
          }];
        }, {
          resultOutput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          apiErrors: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          externalReport: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          showButtons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          restart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          pdfElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['pdfElement']
          }],
          canvasElements: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: ['canvasElement']
          }]
        });
      })();
      /***/

    },

    /***/
    "OUp7":
    /*!**************************************************!*\
      !*** ./src/generated/api/model/passwordToken.ts ***!
      \**************************************************/

    /*! no exports provided */

    /***/
    function OUp7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /**
       *
       * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
       *
       * The version of the OpenAPI document: 0.0.0
       *
       *
       * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
       * https://openapi-generator.tech
       * Do not edit the class manually.
       */

      /***/

    },

    /***/
    "Od1l":
    /*!**************************************************!*\
      !*** ./src/generated/api/api/backend.service.ts ***!
      \**************************************************/

    /*! exports provided: BackendService */

    /***/
    function Od1l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BackendService", function () {
        return BackendService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../encoder */
      "i0KE");
      /* harmony import */


      var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../variables */
      "G5Mf");
      /* harmony import */


      var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../configuration */
      "PKcu");
      /**
       *
       * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
       *
       * The version of the OpenAPI document: 0.0.0
       *
       *
       * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
       * https://openapi-generator.tech
       * Do not edit the class manually.
       */

      /* tslint:disable:no-unused-variable member-ordering */


      var BackendService = /*#__PURE__*/function () {
        function BackendService(httpClient, basePath, configuration) {
          _classCallCheck(this, BackendService);

          this.httpClient = httpClient;
          this.basePath = 'http://localhost';
          this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();

          if (configuration) {
            this.configuration = configuration;
          }

          if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
              basePath = this.basePath;
            }

            this.configuration.basePath = basePath;
          }

          this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpParameterCodec"]();
        }

        _createClass(BackendService, [{
          key: "addToHttpParams",
          value: function addToHttpParams(httpParams, value, key) {
            if (typeof value === "object" && value instanceof Date === false) {
              httpParams = this.addToHttpParamsRecursive(httpParams, value);
            } else {
              httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
            }

            return httpParams;
          }
        }, {
          key: "addToHttpParamsRecursive",
          value: function addToHttpParamsRecursive(httpParams, value, key) {
            var _this32 = this;

            if (value == null) {
              return httpParams;
            }

            if (typeof value === "object") {
              if (Array.isArray(value)) {
                value.forEach(function (elem) {
                  return httpParams = _this32.addToHttpParamsRecursive(httpParams, elem, key);
                });
              } else if (value instanceof Date) {
                if (key != null) {
                  httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                } else {
                  throw Error("key may not be null if value is Date");
                }
              } else {
                Object.keys(value).forEach(function (k) {
                  return httpParams = _this32.addToHttpParamsRecursive(httpParams, value[k], key != null ? "".concat(key, ".").concat(k) : k);
                });
              }
            } else if (key != null) {
              httpParams = httpParams.append(key, value);
            } else {
              throw Error("key may not be null if value is not object or array");
            }

            return httpParams;
          }
        }, {
          key: "backendApiSchemaRetrieve",
          value: function backendApiSchemaRetrieve(format, lang) {
            var observe = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'body';
            var reportProgress = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
            var options = arguments.length > 4 ? arguments[4] : undefined;
            var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({
              encoder: this.encoder
            });

            if (format !== undefined && format !== null) {
              queryParameters = this.addToHttpParams(queryParameters, format, 'format');
            }

            if (lang !== undefined && lang !== null) {
              queryParameters = this.addToHttpParams(queryParameters, lang, 'lang');
            }

            var headers = this.defaultHeaders;
            var credential; // authentication (jwtAuth) required

            credential = this.configuration.lookupCredential('jwtAuth');

            if (credential) {
              headers = headers.set('Authorization', 'Bearer ' + credential);
            }

            var httpHeaderAcceptSelected = options && options.httpHeaderAccept;

            if (httpHeaderAcceptSelected === undefined) {
              // to determine the Accept header
              var httpHeaderAccepts = ['application/vnd.oai.openapi', 'application/yaml', 'application/vnd.oai.openapi+json', 'application/json'];
              httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            }

            if (httpHeaderAcceptSelected !== undefined) {
              headers = headers.set('Accept', httpHeaderAcceptSelected);
            }

            var responseType = 'json';

            if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
              responseType = 'text';
            }

            return this.httpClient.get("".concat(this.configuration.basePath, "/backend/api/schema/"), {
              params: queryParameters,
              responseType: responseType,
              withCredentials: this.configuration.withCredentials,
              headers: headers,
              observe: observe,
              reportProgress: reportProgress
            });
          }
        }]);

        return BackendService;
      }();

      BackendService.ɵfac = function BackendService_Factory(t) {
        return new (t || BackendService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], 8));
      };

      BackendService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: BackendService,
        factory: BackendService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackendService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"]]
            }]
          }, {
            type: _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "PBnM":
    /*!*********************************************************************!*\
      !*** ./src/app/modules/pages/lost-password/lost-password.module.ts ***!
      \*********************************************************************/

    /*! exports provided: LostPasswordModule */

    /***/
    function PBnM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LostPasswordModule", function () {
        return LostPasswordModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _lost_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lost-password.component */
      "23XS");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../components/components.module */
      "aDnW");

      var LostPasswordModule = /*#__PURE__*/_createClass(function LostPasswordModule() {
        _classCallCheck(this, LostPasswordModule);
      });

      LostPasswordModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: LostPasswordModule
      });
      LostPasswordModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function LostPasswordModule_Factory(t) {
          return new (t || LostPasswordModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LostPasswordModule, {
          declarations: [_lost_password_component__WEBPACK_IMPORTED_MODULE_2__["LostPasswordComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LostPasswordModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_lost_password_component__WEBPACK_IMPORTED_MODULE_2__["LostPasswordComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "PKcu":
    /*!********************************************!*\
      !*** ./src/generated/api/configuration.ts ***!
      \********************************************/

    /*! exports provided: Configuration */

    /***/
    function PKcu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Configuration", function () {
        return Configuration;
      });

      var Configuration = /*#__PURE__*/function () {
        function Configuration() {
          var _this33 = this;

          var configurationParameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          _classCallCheck(this, Configuration);

          this.apiKeys = configurationParameters.apiKeys;
          this.username = configurationParameters.username;
          this.password = configurationParameters.password;
          this.accessToken = configurationParameters.accessToken;
          this.basePath = configurationParameters.basePath;
          this.withCredentials = configurationParameters.withCredentials;
          this.encoder = configurationParameters.encoder;

          if (configurationParameters.credentials) {
            this.credentials = configurationParameters.credentials;
          } else {
            this.credentials = {};
          } // init default jwtAuth credential


          if (!this.credentials['jwtAuth']) {
            this.credentials['jwtAuth'] = function () {
              return typeof _this33.accessToken === 'function' ? _this33.accessToken() : _this33.accessToken;
            };
          }
        }
        /**
         * Select the correct content-type to use for a request.
         * Uses {@link Configuration#isJsonMime} to determine the correct content-type.
         * If no content type is found return the first found type if the contentTypes is not empty
         * @param contentTypes - the array of content types that are available for selection
         * @returns the selected content-type or <code>undefined</code> if no selection could be made.
         */


        _createClass(Configuration, [{
          key: "selectHeaderContentType",
          value: function selectHeaderContentType(contentTypes) {
            var _this34 = this;

            if (contentTypes.length === 0) {
              return undefined;
            }

            var type = contentTypes.find(function (x) {
              return _this34.isJsonMime(x);
            });

            if (type === undefined) {
              return contentTypes[0];
            }

            return type;
          }
          /**
           * Select the correct accept content-type to use for a request.
           * Uses {@link Configuration#isJsonMime} to determine the correct accept content-type.
           * If no content type is found return the first found type if the contentTypes is not empty
           * @param accepts - the array of content types that are available for selection.
           * @returns the selected content-type or <code>undefined</code> if no selection could be made.
           */

        }, {
          key: "selectHeaderAccept",
          value: function selectHeaderAccept(accepts) {
            var _this35 = this;

            if (accepts.length === 0) {
              return undefined;
            }

            var type = accepts.find(function (x) {
              return _this35.isJsonMime(x);
            });

            if (type === undefined) {
              return accepts[0];
            }

            return type;
          }
          /**
           * Check if the given MIME is a JSON MIME.
           * JSON MIME examples:
           *   application/json
           *   application/json; charset=UTF8
           *   APPLICATION/JSON
           *   application/vnd.company+json
           * @param mime - MIME (Multipurpose Internet Mail Extensions)
           * @return True if the given MIME is JSON, false otherwise.
           */

        }, {
          key: "isJsonMime",
          value: function isJsonMime(mime) {
            var jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
            return mime !== null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
          }
        }, {
          key: "lookupCredential",
          value: function lookupCredential(key) {
            var value = this.credentials[key];
            return typeof value === 'function' ? value() : value;
          }
        }]);

        return Configuration;
      }();
      /***/

    },

    /***/
    "QJbD":
    /*!**********************************************************************!*\
      !*** ./src/app/modules/pages/registration/registration.component.ts ***!
      \**********************************************************************/

    /*! exports provided: RegistrationComponent */

    /***/
    function QJbD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function () {
        return RegistrationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../components/alert/alert.component */
      "bTKV");
      /* harmony import */


      var _generated_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../generated/api */
      "UIhn");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _components_button_spinner_button_spinner_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../components/button-spinner/button-spinner.component */
      "BYpc");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");

      function RegistrationComponent_mat_error_12_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please enter your Name.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function RegistrationComponent_mat_error_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_mat_error_12_ng_container_1_Template, 3, 0, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.controls.name.errors.required);
        }
      }

      function RegistrationComponent_mat_error_18_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please enter your Email.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function RegistrationComponent_mat_error_18_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please re-check your Email.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function RegistrationComponent_mat_error_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_mat_error_18_ng_container_1_Template, 3, 0, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegistrationComponent_mat_error_18_ng_container_2_Template, 3, 0, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.controls.email.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.controls.email.errors.email);
        }
      }

      function RegistrationComponent_mat_error_24_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please enter your Password.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function RegistrationComponent_mat_error_24_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Password should be at least 6 characters.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function RegistrationComponent_mat_error_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_mat_error_24_ng_container_1_Template, 3, 0, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegistrationComponent_mat_error_24_ng_container_2_Template, 3, 0, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.controls.password.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.controls.password.errors.minlength);
        }
      }

      function RegistrationComponent_mat_error_30_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please enter your Country.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function RegistrationComponent_mat_error_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_mat_error_30_ng_container_1_Template, 3, 0, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.controls.country.errors.required);
        }
      }

      function RegistrationComponent_mat_error_36_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please enter your Company Name.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function RegistrationComponent_mat_error_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_mat_error_36_ng_container_1_Template, 3, 0, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.controls.companyName.errors.required);
        }
      }

      function RegistrationComponent_mat_error_42_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please enter your Company Address.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function RegistrationComponent_mat_error_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_mat_error_42_ng_container_1_Template, 3, 0, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.controls.companyAddress.errors.required);
        }
      }

      function RegistrationComponent_mat_error_46_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please accept the privacy policy.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function RegistrationComponent_mat_error_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_mat_error_46_ng_container_1_Template, 3, 0, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.controls.privacyAccept.errors.required);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          visibility: a0
        };
      };

      var RegistrationComponent = /*#__PURE__*/function () {
        function RegistrationComponent(registerService, translateService, matDialog) {
          _classCallCheck(this, RegistrationComponent);

          this.registerService = registerService;
          this.translateService = translateService;
          this.matDialog = matDialog;
          this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.loading = false;
          this.submitted = false;
          this.error = false;
          this.controls = {
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            companyName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            companyAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            privacyAccept: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].requiredTrue),
            dataSendAccept: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false)
          };
          this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](this.controls);
        }

        _createClass(RegistrationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "submit",
          value: function submit() {
            var _this36 = this;

            this.submitted = true;

            if (this.formGroup.valid) {
              this.loading = true;
              this.registerService.registerCreate({
                name: this.controls.name.value,
                email: this.controls.email.value,
                country_name: this.controls.country.value,
                company_name: this.controls.companyName.value,
                company_address: this.controls.companyAddress.value,
                password: this.controls.password.value,
                privacy_policy: this.controls.privacyAccept.value,
                nutrition_verification: this.controls.dataSendAccept.value
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$)).subscribe({
                next: function next() {
                  _this36.loading = false;

                  var dialog = _this36.matDialog.open(_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_4__["AlertComponent"], {
                    data: {
                      icon: 'error',
                      iconColor: 'primary',
                      title: 'Thank You',
                      message: 'Your message has been successfully sent. we will contact you very soon',
                      buttons: [{
                        id: '1',
                        text: 'OK'
                      }]
                    },
                    autoFocus: false
                  });

                  dialog.afterClosed().subscribe(function (result) {
                    if ((result === null || result === void 0 ? void 0 : result.button) === '1') {
                      _this36.formGroup.reset();

                      _this36.controls.name.setErrors(null);

                      _this36.controls.email.setErrors(null);

                      _this36.controls.country.setErrors(null);

                      _this36.controls.companyName.setErrors(null);

                      _this36.controls.password.setErrors(null);

                      _this36.controls.privacyAccept.setErrors(null);

                      _this36.controls.dataSendAccept.setErrors(null);

                      _this36.controls.companyAddress.setErrors(null);

                      _this36.formGroup.markAsUntouched();

                      _this36.formGroup.markAsPristine();
                    }
                  });
                },
                error: function error(err) {
                  var _a, _b, _c;

                  _this36.loading = false;
                  console.error('Registration failed', err);
                  _this36.dialog = _this36.matDialog.open(_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_4__["AlertComponent"], {
                    data: {
                      icon: 'error',
                      iconColor: 'warn',
                      title: 'Registration Failed',
                      message: ((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.email) ? (_c = (_b = err === null || err === void 0 ? void 0 : err.error) === null || _b === void 0 ? void 0 : _b.email) === null || _c === void 0 ? void 0 : _c.join(',') : 'Something Went wrong, please check with adminstrator',
                      buttons: [{
                        id: '2',
                        text: 'OK'
                      }]
                    },
                    autoFocus: false
                  });
                }
              });
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroyed$.next();
            this.destroyed$.complete();
          }
        }]);

        return RegistrationComponent;
      }();

      RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) {
        return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_generated_api__WEBPACK_IMPORTED_MODULE_5__["RegisterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]));
      };

      RegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RegistrationComponent,
        selectors: [["app-registration"]],
        decls: 56,
        vars: 23,
        consts: [[1, "registration-container"], ["ngx-translate", ""], [3, "formGroup", "ngSubmit"], ["appearance", "standard"], ["matInput", "", 3, "formControl"], [4, "ngIf"], ["matInput", "", "type", "email", 3, "formControl"], [3, "formControl"], [1, "button-container"], ["mat-flat-button", "", "color", "primary", "type", "submit", 3, "disabled"], [3, "spinning"], [3, "diameter"]],
        template: function RegistrationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Registration");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Use the form below to register. After we have successfully verified your registration, you will receive an email containing your Master Risk user data.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegistrationComponent_Template_form_ngSubmit_6_listener() {
              return ctx.submit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Name*:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RegistrationComponent_mat_error_12_Template, 2, 1, "mat-error", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Email*:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RegistrationComponent_mat_error_18_Template, 3, 2, "mat-error", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Password*:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, RegistrationComponent_mat_error_24_Template, 3, 2, "mat-error", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Country*:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, RegistrationComponent_mat_error_30_Template, 2, 1, "mat-error", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Company name*:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, RegistrationComponent_mat_error_36_Template, 2, 1, "mat-error", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Address of company*:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "textarea", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, RegistrationComponent_mat_error_42_Template, 2, 1, "mat-error", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-checkbox", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "I have read the privacy policy*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, RegistrationComponent_mat_error_46_Template, 2, 1, "mat-error", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-checkbox", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "I accept that my data will be sent to EW Nutrition to verify the registration");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "app-button-spinner", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Register");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "mat-spinner", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.controls.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.controls.name.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.controls.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.controls.email.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.controls.password);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.controls.password.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.controls.country);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.controls.country.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.controls.companyName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.controls.companyName.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.controls.companyAddress);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.controls.companyAddress.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.controls.privacyAccept);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.controls.privacyAccept.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.controls.dataSendAccept);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("spinning", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c0, ctx.loading ? "visible" : "hidden"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 30);
          }
        },
        directives: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckbox"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _components_button_spinner_button_spinner_component__WEBPACK_IMPORTED_MODULE_13__["ButtonSpinnerComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatSpinner"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]],
        styles: [".registration-container[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.registration-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%], .registration-container[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%] {\n  display: block;\n}\n.registration-container[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%] {\n  margin-bottom: 1em;\n}\n.registration-container[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]     .mat-checkbox-label {\n  white-space: normal !important;\n}\n.registration-container[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]     .mat-checkbox-layout {\n  align-items: start;\n}\n.registration-container[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]     .mat-checkbox-inner-container {\n  margin-top: 0.3em;\n  margin-bottom: 0;\n}\n.registration-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%] {\n  margin-top: 1em;\n  display: flex;\n  align-items: center;\n}\n.registration-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlcy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGO0FBQ0U7RUFDRSxjQUFBO0FBQ0o7QUFFRTtFQUNFLGtCQUFBO0FBQUo7QUFHTTtFQUNFLDhCQUFBO0FBRFI7QUFJTTtFQUNFLGtCQUFBO0FBRlI7QUFLTTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUFIUjtBQVFFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQU5KO0FBUUk7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBTk4iLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3BhZ2VzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVnaXN0cmF0aW9uLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDI0cHg7XG5cbiAgbWF0LWZvcm0tZmllbGQsIG1hdC1jaGVja2JveCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICBtYXQtY2hlY2tib3ggIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG5cbiAgICAmIDo6bmctZGVlcCB7XG4gICAgICAubWF0LWNoZWNrYm94LWxhYmVsIHtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAubWF0LWNoZWNrYm94LWxheW91dCB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgICAgIH1cblxuICAgICAgLm1hdC1jaGVja2JveC1pbm5lci1jb250YWluZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiAwLjNlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGJ1dHRvbiB7XG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICB9XG4gIH1cbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-registration',
            templateUrl: './registration.component.html',
            styleUrls: ['./registration.component.scss']
          }]
        }], function () {
          return [{
            type: _generated_api__WEBPACK_IMPORTED_MODULE_5__["RegisterService"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "RBpV":
    /*!*********************************************************!*\
      !*** ./src/generated/api/model/userAssessmentSample.ts ***!
      \*********************************************************/

    /*! no exports provided */

    /***/
    function RBpV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    "RC5z":
    /*!*****************************************************************************************!*\
      !*** ./src/app/modules/components/moving-risk-display/moving-risk-display.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: MovingRiskDisplayComponent */

    /***/
    function RC5z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MovingRiskDisplayComponent", function () {
        return MovingRiskDisplayComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../services/language.service */
      "kyOO");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../services/data.service */
      "EnSQ");
      /* harmony import */


      var _services_chart_js_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../services/chart-js.service */
      "5V3w");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");

      var _c0 = ["movingCanvasElement"];

      function MovingRiskDisplayComponent_h3_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.movingRiskHeaderText);
        }
      }

      function MovingRiskDisplayComponent_h1_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.movingRiskHeaderText);
        }
      }

      function MovingRiskDisplayComponent_mat_spinner_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
        }
      }

      function MovingRiskDisplayComponent_ng_container_3_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.reportHtml, " ");
        }
      }

      function MovingRiskDisplayComponent_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "canvas", null, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MovingRiskDisplayComponent_ng_container_3_div_5_Template, 2, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("print-chart-container", ctx_r3.reportMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.reportMode);
        }
      }

      var MovingRiskDisplayComponent = /*#__PURE__*/function () {
        function MovingRiskDisplayComponent(languageService, translateService, dataService, chartJsService) {
          _classCallCheck(this, MovingRiskDisplayComponent);

          this.languageService = languageService;
          this.translateService = translateService;
          this.dataService = dataService;
          this.chartJsService = chartJsService;
          this.reportMode = false;
          this.haveMovingCharts = false;
          this.movingChartsLoaded = false;
          this.movingRiskHeaderText = null;
          this.reportHtml = null;
          this.movingRiskData$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.species$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        }

        _createClass(MovingRiskDisplayComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this37 = this;

            this.species$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (species) {
              if (species == null) {
                return [null];
              } else {
                return _this37.translateService.get('MOVING_RISKS', {
                  species: species.text
                });
              }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$)).subscribe(function (text) {
              return _this37.movingRiskHeaderText = text;
            });
            var maxLevel$ = this.dataService.get('levels').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (levels) {
              return Math.max.apply(Math, _toConsumableArray(levels.map(function (l) {
                var _a;

                return (_a = l.level_factor) !== null && _a !== void 0 ? _a : 0;
              })));
            }));
            var movingChartData = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([this.languageService.currentLanguage, this.movingRiskData$, maxLevel$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_ref17) {
              var _ref18 = _slicedToArray(_ref17, 3),
                  currentLanguage = _ref18[0],
                  movingRiskData = _ref18[1],
                  maxLevel = _ref18[2];

              var _a;

              console.log("in compo mrd", movingRiskData);

              if (((_a = movingRiskData === null || movingRiskData === void 0 ? void 0 : movingRiskData.length) !== null && _a !== void 0 ? _a : 0) === 0) {
                return null;
              } else {
                var rawLevels = movingRiskData.map(function (data) {
                  return data.rawLevel;
                });
                return {
                  type: 'bar',
                  data: {
                    labels: movingRiskData.map(function (data) {
                      var dateString = data.date.toLocaleDateString(currentLanguage, {
                        month: 'long'
                      });
                      var countString = data.count.toLocaleString(currentLanguage, {
                        maximumFractionDigits: 0
                      });
                      return "".concat(dateString, ", ").concat(data.level.text, " (").concat(countString, ")");
                    }),
                    datasets: [{
                      data: rawLevels,
                      backgroundColor: movingRiskData.map(function (data) {
                        var _a;

                        return (_a = data.level.color) !== null && _a !== void 0 ? _a : 'black';
                      }),
                      borderColor: movingRiskData.map(function (data) {
                        var _a;

                        return (_a = data.level.color) !== null && _a !== void 0 ? _a : 'black';
                      }),
                      borderWidth: 1,
                      maxBarThickness: 60
                    }]
                  },
                  options: {
                    legend: {
                      display: false
                    },
                    scales: {
                      yAxes: [{
                        display: false,
                        ticks: {
                          min: 0,
                          max: maxLevel
                        }
                      }]
                    }
                  }
                };
              }
            }));
            this.chartJsAndMovingRiskData$ = movingChartData.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (data) {
              return data == null ? [null] : _this37.chartJsService.chartJs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (chartJs) {
                return [chartJs, data];
              }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$));
            this.chartJsAndMovingRiskData$.subscribe(function (chartJsAndData) {
              _this37.movingChartsLoaded = chartJsAndData != null;
            });
            movingChartData.subscribe(function (chartJsData) {
              _this37.haveMovingCharts = chartJsData != null;
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([this.movingRiskData$, this.languageService.currentLanguage]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (_ref19) {
              var _ref20 = _slicedToArray(_ref19, 2),
                  data = _ref20[0],
                  currentLanguage = _ref20[1];

              if (data == null || data.length === 0) {
                return null;
              }

              var cmpLevels = function cmpLevels(ref, other) {
                if (ref.level_factor < other.level_factor) {
                  return -1;
                } else if (ref.level_factor > other.level_factor) {
                  return 1;
                } else {
                  return 0;
                }
              };

              var currentMonthLevel = data[data.length - 1].level;
              var text;

              if (data.length > 1) {
                var prevMonthLevel = data[data.length - 2].level;
                var cmp = cmpLevels(currentMonthLevel, prevMonthLevel);
                var monthsCount = 1;

                for (var idx = data.length - 3; idx >= 0; idx--) {
                  var earlyMonthLevel = data[idx].level;
                  var earlyCmp = cmpLevels(currentMonthLevel, earlyMonthLevel);

                  if (earlyCmp !== cmp) {
                    break;
                  }

                  monthsCount++;
                }

                var compareText = cmp === -1 ? 'MOVING_RISK_COMPARE_HIGHER' : cmp === 1 ? 'MOVING_RISK_COMPARE_LOWER' : 'MOVING_RISK_COMPARE_SAME';
                var monthsText = monthsCount === 1 ? 'MOVING_RISK_MONTHS_ONE' : 'MOVING_RISK_MONTHS_MANY';
                var adjustText = cmp === -1 ? 'MOVING_RISK_ADJUST_YES' : 'MOVING_RISK_ADJUST_NO';
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([_this37.translateService.get(monthsText, {
                  months: monthsCount.toLocaleString(currentLanguage)
                }), _this37.translateService.get(adjustText)]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (_ref21) {
                  var _ref22 = _slicedToArray(_ref21, 2),
                      monthsTranslation = _ref22[0],
                      adjustTranslation = _ref22[1];

                  return _this37.translateService.get(compareText, {
                    months: monthsTranslation,
                    currentLevel: currentMonthLevel.text,
                    adjustText: adjustTranslation
                  });
                }));
              } else {
                return _this37.translateService.get('MOVING_RISK_COMPARE_NONE', {
                  currentLevel: currentMonthLevel.text
                });
              }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$)).subscribe(function (reportHtml) {
              _this37.reportHtml = reportHtml;
            });
            this.movingRiskData$.next(this.movingRiskData);
            this.species$.next(this.species);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.movingRiskData && !changes.movingRiskData.firstChange) {
              this.movingRiskData$.next(this.movingRiskData);
            }

            if (changes.species && !changes.species.firstChange) {
              this.species$.next(this.species);
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this38 = this;

            var latestMovingCanvas = this.movingCanvasElements.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function () {
              return _this38.movingCanvasElements.length === 1;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
              return _this38.movingCanvasElements.toArray()[0].nativeElement;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])());
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([latestMovingCanvas, this.chartJsAndMovingRiskData$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$)).subscribe(function (_ref23) {
              var _ref24 = _slicedToArray(_ref23, 2),
                  movingCanvas = _ref24[0],
                  chartJsAndMovingRiskData = _ref24[1];

              if (chartJsAndMovingRiskData != null) {
                var chartJs = chartJsAndMovingRiskData[0];
                new chartJs.Chart(movingCanvas, chartJsAndMovingRiskData[1]);
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.movingRiskData$.complete();
            this.species$.complete();
            this.destroyed$.next();
            this.destroyed$.complete();
          }
        }]);

        return MovingRiskDisplayComponent;
      }();

      MovingRiskDisplayComponent.ɵfac = function MovingRiskDisplayComponent_Factory(t) {
        return new (t || MovingRiskDisplayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_chart_js_service__WEBPACK_IMPORTED_MODULE_6__["ChartJsService"]));
      };

      MovingRiskDisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MovingRiskDisplayComponent,
        selectors: [["app-moving-risk-display"]],
        viewQuery: function MovingRiskDisplayComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.movingCanvasElements = _t);
          }
        },
        inputs: {
          movingRiskData: "movingRiskData",
          species: "species",
          reportMode: "reportMode"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 4,
        vars: 4,
        consts: [[4, "ngIf"], ["movingCanvasElement", ""]],
        template: function MovingRiskDisplayComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MovingRiskDisplayComponent_h3_0_Template, 2, 1, "h3", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MovingRiskDisplayComponent_h1_1_Template, 2, 1, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MovingRiskDisplayComponent_mat_spinner_2_Template, 1, 0, "mat-spinner", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MovingRiskDisplayComponent_ng_container_3_Template, 6, 3, "ng-container", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.reportMode);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reportMode);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.movingChartsLoaded);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.movingChartsLoaded);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatSpinner"]],
        styles: ["h1[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  margin-top: 1em;\n}\n\n.print-chart-container[_ngcontent-%COMP%] {\n  width: 18cm;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21wb25lbnRzL21vdmluZy1yaXNrLWRpc3BsYXkvbW92aW5nLXJpc2stZGlzcGxheS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUdFLFdBQUE7QUFERiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tcG9uZW50cy9tb3Zpbmctcmlzay1kaXNwbGF5L21vdmluZy1yaXNrLWRpc3BsYXkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSwgaDMge1xuICBtYXJnaW4tdG9wOiAxZW07XG59XG5cbi5wcmludC1jaGFydC1jb250YWluZXIge1xuICAvLyBzaG9vdCBtZS4uLiB0aGlzIHBhZ2UgaXMgb25seSBldmVyIHByaW50ZWQgaW4gQTQgYW5kIHRoaXMgaXMgdGhlIHF1aWNrZXN0IHdheSB0byBtYWtlXG4gIC8vIENoYXJ0LkpTIHNpemUgdGhpbmdzIHByb3Blcmx5XG4gIHdpZHRoOiAxOGNtO1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovingRiskDisplayComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-moving-risk-display',
            templateUrl: './moving-risk-display.component.html',
            styleUrls: ['./moving-risk-display.component.scss']
          }]
        }], function () {
          return [{
            type: _services_language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
          }, {
            type: _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]
          }, {
            type: _services_chart_js_service__WEBPACK_IMPORTED_MODULE_6__["ChartJsService"]
          }];
        }, {
          movingRiskData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          species: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          reportMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          movingCanvasElements: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: ['movingCanvasElement']
          }]
        });
      })();
      /***/

    },

    /***/
    "RhRe":
    /*!***************************************************!*\
      !*** ./src/generated/api/api/products.service.ts ***!
      \***************************************************/

    /*! exports provided: ProductsService */

    /***/
    function RhRe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductsService", function () {
        return ProductsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../encoder */
      "i0KE");
      /* harmony import */


      var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../variables */
      "G5Mf");
      /* harmony import */


      var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../configuration */
      "PKcu");
      /**
       *
       * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
       *
       * The version of the OpenAPI document: 0.0.0
       *
       *
       * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
       * https://openapi-generator.tech
       * Do not edit the class manually.
       */

      /* tslint:disable:no-unused-variable member-ordering */


      var ProductsService = /*#__PURE__*/function () {
        function ProductsService(httpClient, basePath, configuration) {
          _classCallCheck(this, ProductsService);

          this.httpClient = httpClient;
          this.basePath = 'http://localhost';
          this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();

          if (configuration) {
            this.configuration = configuration;
          }

          if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
              basePath = this.basePath;
            }

            this.configuration.basePath = basePath;
          }

          this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpParameterCodec"]();
        }

        _createClass(ProductsService, [{
          key: "addToHttpParams",
          value: function addToHttpParams(httpParams, value, key) {
            if (typeof value === "object" && value instanceof Date === false) {
              httpParams = this.addToHttpParamsRecursive(httpParams, value);
            } else {
              httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
            }

            return httpParams;
          }
        }, {
          key: "addToHttpParamsRecursive",
          value: function addToHttpParamsRecursive(httpParams, value, key) {
            var _this39 = this;

            if (value == null) {
              return httpParams;
            }

            if (typeof value === "object") {
              if (Array.isArray(value)) {
                value.forEach(function (elem) {
                  return httpParams = _this39.addToHttpParamsRecursive(httpParams, elem, key);
                });
              } else if (value instanceof Date) {
                if (key != null) {
                  httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                } else {
                  throw Error("key may not be null if value is Date");
                }
              } else {
                Object.keys(value).forEach(function (k) {
                  return httpParams = _this39.addToHttpParamsRecursive(httpParams, value[k], key != null ? "".concat(key, ".").concat(k) : k);
                });
              }
            } else if (key != null) {
              httpParams = httpParams.append(key, value);
            } else {
              throw Error("key may not be null if value is not object or array");
            }

            return httpParams;
          }
        }, {
          key: "productsList",
          value: function productsList() {
            var observe = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'body';
            var reportProgress = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var options = arguments.length > 2 ? arguments[2] : undefined;
            var headers = this.defaultHeaders;
            var credential; // authentication (jwtAuth) required

            credential = this.configuration.lookupCredential('jwtAuth');

            if (credential) {
              headers = headers.set('Authorization', 'Bearer ' + credential);
            }

            var httpHeaderAcceptSelected = options && options.httpHeaderAccept;

            if (httpHeaderAcceptSelected === undefined) {
              // to determine the Accept header
              var httpHeaderAccepts = ['application/json'];
              httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            }

            if (httpHeaderAcceptSelected !== undefined) {
              headers = headers.set('Accept', httpHeaderAcceptSelected);
            }

            var responseType = 'json';

            if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
              responseType = 'text';
            }

            return this.httpClient.get("".concat(this.configuration.basePath, "/backend/masterdata/products/"), {
              responseType: responseType,
              withCredentials: this.configuration.withCredentials,
              headers: headers,
              observe: observe,
              reportProgress: reportProgress
            });
          }
        }]);

        return ProductsService;
      }();

      ProductsService.ɵfac = function ProductsService_Factory(t) {
        return new (t || ProductsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], 8));
      };

      ProductsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ProductsService,
        factory: ProductsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"]]
            }]
          }, {
            type: _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "RiOR":
    /*!*******************************************!*\
      !*** ./src/generated/api/model/models.ts ***!
      \*******************************************/

    /*! exports provided: DatabaseAccessEnum, EwStatusEnum */

    /***/
    function RiOR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _changePassword__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./changePassword */
      "DM3v");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components */
      "DFA3");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _contactPerson__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./contactPerson */
      "jWwe");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _country__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./country */
      "VDAc");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _customer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./customer */
      "e7vz");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./database */
      "Sla+");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _databaseAccessEnum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./databaseAccessEnum */
      "Dd2U");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DatabaseAccessEnum", function () {
        return _databaseAccessEnum__WEBPACK_IMPORTED_MODULE_6__["DatabaseAccessEnum"];
      });
      /* harmony import */


      var _databaseAssessment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./databaseAssessment */
      "CIl6");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _email__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./email */
      "rrZy");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _ewStatusEnum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./ewStatusEnum */
      "caJQ");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "EwStatusEnum", function () {
        return _ewStatusEnum__WEBPACK_IMPORTED_MODULE_9__["EwStatusEnum"];
      });
      /* harmony import */


      var _laboratory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./laboratory */
      "V0tv");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _level__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./level */
      "AA5N");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _mycotoxins__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./mycotoxins */
      "vYqv");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _paginatedCustomerList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./paginatedCustomerList */
      "SGJ+");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _paginatedDatabaseList__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./paginatedDatabaseList */
      "AjoW");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _passwordToken__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./passwordToken */
      "OUp7");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _patchedChangePassword__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./patchedChangePassword */
      "d2Ug");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _productCountryRules__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./productCountryRules */
      "3la9");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _products__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./products */
      "9WSC");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _registrationRequest__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./registrationRequest */
      "wBnp");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _sampleTypes__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./sampleTypes */
      "n820");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _species__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./species */
      "pmZa");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _token__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./token */
      "LfsN");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _tokenObtainPair__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./tokenObtainPair */
      "Lmu/");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _tokenRefresh__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./tokenRefresh */
      "cEtz");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _tokenVerify__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./tokenVerify */
      "225s");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _user__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./user */
      "XC+R");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _userAssessmentInput__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./userAssessmentInput */
      "GmzA");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _userAssessmentMovingRisk__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./userAssessmentMovingRisk */
      "5/Y3");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _userAssessmentProductRecommendation__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./userAssessmentProductRecommendation */
      "/+nv");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _userAssessmentRecipient__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./userAssessmentRecipient */
      "yXYU");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _userAssessmentSample__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./userAssessmentSample */
      "RBpV");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _userAssessmentSampleContamination__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./userAssessmentSampleContamination */
      "iHgs");
      /* empty/unused harmony star reexport */

      /***/

    },

    /***/
    "SGJ+":
    /*!**********************************************************!*\
      !*** ./src/generated/api/model/paginatedCustomerList.ts ***!
      \**********************************************************/

    /*! no exports provided */

    /***/
    function SGJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    "SVw4":
    /*!*********************************************************!*\
      !*** ./src/app/interceptors/auth-header.interceptor.ts ***!
      \*********************************************************/

    /*! exports provided: AuthHeaderInterceptor */

    /***/
    function SVw4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthHeaderInterceptor", function () {
        return AuthHeaderInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _services_valid_access_token_holder_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/valid-access-token-holder.service */
      "0nVU");

      var AuthHeaderInterceptor = /*#__PURE__*/function () {
        function AuthHeaderInterceptor(validAccessTokenHolderService) {
          _classCallCheck(this, AuthHeaderInterceptor);

          this.validAccessTokenHolderService = validAccessTokenHolderService;
        }

        _createClass(AuthHeaderInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            if (!AuthHeaderInterceptor.needsAuthHeader(request)) {
              return next.handle(request);
            } else {
              // console.log("waiting for access token for ", request.url);
              return this.validAccessTokenHolderService.currentValidAccessToken.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (token) {
                // console.log("got access token for ", request.url)
                var newRequest = token == null ? request : request.clone({
                  setHeaders: {
                    'Authorization': "Bearer ".concat(token)
                  }
                });
                return next.handle(newRequest);
              }));
            }
          }
        }], [{
          key: "needsAuthHeader",
          value: function needsAuthHeader(request) {
            return request.url.startsWith(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api) && !request.url.substr(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api.length).startsWith('/backend/masterdata/api/');
          }
        }]);

        return AuthHeaderInterceptor;
      }();

      AuthHeaderInterceptor.ɵfac = function AuthHeaderInterceptor_Factory(t) {
        return new (t || AuthHeaderInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_valid_access_token_holder_service__WEBPACK_IMPORTED_MODULE_3__["ValidAccessTokenHolderService"]));
      };

      AuthHeaderInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthHeaderInterceptor,
        factory: AuthHeaderInterceptor.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthHeaderInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _services_valid_access_token_holder_service__WEBPACK_IMPORTED_MODULE_3__["ValidAccessTokenHolderService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ShwF":
    /*!*************************************************!*\
      !*** ./src/generated/api/api/levels.service.ts ***!
      \*************************************************/

    /*! exports provided: LevelsService */

    /***/
    function ShwF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LevelsService", function () {
        return LevelsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../encoder */
      "i0KE");
      /* harmony import */


      var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../variables */
      "G5Mf");
      /* harmony import */


      var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../configuration */
      "PKcu");
      /**
       *
       * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
       *
       * The version of the OpenAPI document: 0.0.0
       *
       *
       * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
       * https://openapi-generator.tech
       * Do not edit the class manually.
       */

      /* tslint:disable:no-unused-variable member-ordering */


      var LevelsService = /*#__PURE__*/function () {
        function LevelsService(httpClient, basePath, configuration) {
          _classCallCheck(this, LevelsService);

          this.httpClient = httpClient;
          this.basePath = 'http://localhost';
          this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();

          if (configuration) {
            this.configuration = configuration;
          }

          if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
              basePath = this.basePath;
            }

            this.configuration.basePath = basePath;
          }

          this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpParameterCodec"]();
        }

        _createClass(LevelsService, [{
          key: "addToHttpParams",
          value: function addToHttpParams(httpParams, value, key) {
            if (typeof value === "object" && value instanceof Date === false) {
              httpParams = this.addToHttpParamsRecursive(httpParams, value);
            } else {
              httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
            }

            return httpParams;
          }
        }, {
          key: "addToHttpParamsRecursive",
          value: function addToHttpParamsRecursive(httpParams, value, key) {
            var _this40 = this;

            if (value == null) {
              return httpParams;
            }

            if (typeof value === "object") {
              if (Array.isArray(value)) {
                value.forEach(function (elem) {
                  return httpParams = _this40.addToHttpParamsRecursive(httpParams, elem, key);
                });
              } else if (value instanceof Date) {
                if (key != null) {
                  httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                } else {
                  throw Error("key may not be null if value is Date");
                }
              } else {
                Object.keys(value).forEach(function (k) {
                  return httpParams = _this40.addToHttpParamsRecursive(httpParams, value[k], key != null ? "".concat(key, ".").concat(k) : k);
                });
              }
            } else if (key != null) {
              httpParams = httpParams.append(key, value);
            } else {
              throw Error("key may not be null if value is not object or array");
            }

            return httpParams;
          }
        }, {
          key: "levelsList",
          value: function levelsList() {
            var observe = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'body';
            var reportProgress = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var options = arguments.length > 2 ? arguments[2] : undefined;
            var headers = this.defaultHeaders;
            var credential; // authentication (jwtAuth) required

            credential = this.configuration.lookupCredential('jwtAuth');

            if (credential) {
              headers = headers.set('Authorization', 'Bearer ' + credential);
            }

            var httpHeaderAcceptSelected = options && options.httpHeaderAccept;

            if (httpHeaderAcceptSelected === undefined) {
              // to determine the Accept header
              var httpHeaderAccepts = ['application/json'];
              httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            }

            if (httpHeaderAcceptSelected !== undefined) {
              headers = headers.set('Accept', httpHeaderAcceptSelected);
            }

            var responseType = 'json';

            if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
              responseType = 'text';
            }

            return this.httpClient.get("".concat(this.configuration.basePath, "/backend/masterdata/levels/"), {
              responseType: responseType,
              withCredentials: this.configuration.withCredentials,
              headers: headers,
              observe: observe,
              reportProgress: reportProgress
            });
          }
        }]);

        return LevelsService;
      }();

      LevelsService.ɵfac = function LevelsService_Factory(t) {
        return new (t || LevelsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], 8));
      };

      LevelsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LevelsService,
        factory: LevelsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LevelsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"]]
            }]
          }, {
            type: _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Sla+":
    /*!*********************************************!*\
      !*** ./src/generated/api/model/database.ts ***!
      \*********************************************/

    /*! no exports provided */

    /***/
    function Sla(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    "SpI0":
    /*!****************************************************!*\
      !*** ./src/generated/api/api/languages.service.ts ***!
      \****************************************************/

    /*! exports provided: LanguagesService */

    /***/
    function SpI0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LanguagesService", function () {
        return LanguagesService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../encoder */
      "i0KE");
      /* harmony import */


      var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../variables */
      "G5Mf");
      /* harmony import */


      var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../configuration */
      "PKcu");
      /**
       *
       * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
       *
       * The version of the OpenAPI document: 0.0.0
       *
       *
       * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
       * https://openapi-generator.tech
       * Do not edit the class manually.
       */

      /* tslint:disable:no-unused-variable member-ordering */


      var LanguagesService = /*#__PURE__*/function () {
        function LanguagesService(httpClient, basePath, configuration) {
          _classCallCheck(this, LanguagesService);

          this.httpClient = httpClient;
          this.basePath = 'http://localhost';
          this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();

          if (configuration) {
            this.configuration = configuration;
          }

          if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
              basePath = this.basePath;
            }

            this.configuration.basePath = basePath;
          }

          this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpParameterCodec"]();
        }

        _createClass(LanguagesService, [{
          key: "addToHttpParams",
          value: function addToHttpParams(httpParams, value, key) {
            if (typeof value === "object" && value instanceof Date === false) {
              httpParams = this.addToHttpParamsRecursive(httpParams, value);
            } else {
              httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
            }

            return httpParams;
          }
        }, {
          key: "addToHttpParamsRecursive",
          value: function addToHttpParamsRecursive(httpParams, value, key) {
            var _this41 = this;

            if (value == null) {
              return httpParams;
            }

            if (typeof value === "object") {
              if (Array.isArray(value)) {
                value.forEach(function (elem) {
                  return httpParams = _this41.addToHttpParamsRecursive(httpParams, elem, key);
                });
              } else if (value instanceof Date) {
                if (key != null) {
                  httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                } else {
                  throw Error("key may not be null if value is Date");
                }
              } else {
                Object.keys(value).forEach(function (k) {
                  return httpParams = _this41.addToHttpParamsRecursive(httpParams, value[k], key != null ? "".concat(key, ".").concat(k) : k);
                });
              }
            } else if (key != null) {
              httpParams = httpParams.append(key, value);
            } else {
              throw Error("key may not be null if value is not object or array");
            }

            return httpParams;
          }
        }, {
          key: "languagesRetrieve",
          value: function languagesRetrieve() {
            var observe = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'body';
            var reportProgress = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var options = arguments.length > 2 ? arguments[2] : undefined;
            var headers = this.defaultHeaders;
            var credential; // authentication (jwtAuth) required

            credential = this.configuration.lookupCredential('jwtAuth');

            if (credential) {
              headers = headers.set('Authorization', 'Bearer ' + credential);
            }

            var httpHeaderAcceptSelected = options && options.httpHeaderAccept;

            if (httpHeaderAcceptSelected === undefined) {
              // to determine the Accept header
              var httpHeaderAccepts = [];
              httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            }

            if (httpHeaderAcceptSelected !== undefined) {
              headers = headers.set('Accept', httpHeaderAcceptSelected);
            }

            var responseType = 'json';

            if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
              responseType = 'text';
            }

            return this.httpClient.get("".concat(this.configuration.basePath, "/backend/masterdata/languages/"), {
              responseType: responseType,
              withCredentials: this.configuration.withCredentials,
              headers: headers,
              observe: observe,
              reportProgress: reportProgress
            });
          }
        }]);

        return LanguagesService;
      }();

      LanguagesService.ɵfac = function LanguagesService_Factory(t) {
        return new (t || LanguagesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], 8));
      };

      LanguagesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LanguagesService,
        factory: LanguagesService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LanguagesService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"]]
            }]
          }, {
            type: _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _modules_components_tutorial_popup_tutorial_popup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./modules/components/tutorial-popup/tutorial-popup.component */
      "GaGO");
      /* harmony import */


      var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./services/data.service */
      "EnSQ");
      /* harmony import */


      var _services_language_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./services/language.service */
      "kyOO");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_login_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./services/login.service */
      "EFyh");
      /* harmony import */


      var _services_access_token_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./services/access-token.service */
      "kCo0");
      /* harmony import */


      var _modules_components_social_bar_social_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./modules/components/social-bar/social-bar.component */
      "NlTa");
      /* harmony import */


      var _modules_components_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./modules/components/navigation-bar/navigation-bar.component */
      "JnoF");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _modules_components_pre_footer_pre_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./modules/components/pre-footer/pre-footer.component */
      "x9VU");
      /* harmony import */


      var _modules_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./modules/components/footer/footer.component */
      "fmRU");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");

      function AppComponent_ng_container_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }
      }

      function AppComponent_ng_template_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-spinner");
        }
      }

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(dataService, languageService, matDialog, route, loginService, accessTokenService, router) {
          _classCallCheck(this, AppComponent);

          this.dataService = dataService;
          this.languageService = languageService;
          this.matDialog = matDialog;
          this.route = route;
          this.loginService = loginService;
          this.accessTokenService = accessTokenService;
          this.router = router;
          this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.loading = false;
          this.loggedIn = null;
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _this42 = this;

              return _regeneratorRuntime().wrap(function _callee$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    this.dataService.loading.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$)).subscribe(function (loading) {
                      _this42.loading = loading;
                    });
                    this.loggedIn = this.accessTokenService.currentAccessToken();
                    this.route.queryParamMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$)).subscribe(function (queryParams) {
                      var forcedLanguage = queryParams.get('forceLanguage');
                      var user = queryParams.get('user');
                      var pass = queryParams.get('pass');

                      if (forcedLanguage != null) {
                        _this42.languageService.setLanguage(forcedLanguage);
                      }

                      if (!_this42.loggedIn && user && pass) {
                        _this42.signIn(atob(user), atob(pass));
                      }
                    });

                  case 3:
                  case "end":
                    return _context3.stop();
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "signIn",
          value: function signIn(email, password) {
            var _this43 = this;

            this.loginService.login(email, password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$)).subscribe(function (loginResult) {
              _this43.router.navigate([], {
                queryParams: {
                  'user': null,
                  'pass': null
                },
                queryParamsHandling: 'merge'
              });
            });
          }
        }, {
          key: "showTutorial",
          value: function showTutorial() {
            this.matDialog.open(_modules_components_tutorial_popup_tutorial_popup_component__WEBPACK_IMPORTED_MODULE_4__["TutorialPopupComponent"]);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroyed$.next();
            this.destroyed$.complete();
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_language_service__WEBPACK_IMPORTED_MODULE_6__["LanguageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_9__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_access_token_service__WEBPACK_IMPORTED_MODULE_10__["AccessTokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 23,
        vars: 4,
        consts: [["role", "presentation"], ["alt", "masterRisk", "src", "/assets/img/logo_masterrisk_black.svg"], ["alt", "ew nutrition", "src", "/assets/img/logo_ew-nutrition.svg"], [1, "appContainer"], [3, "showTutorial"], [1, "content"], [4, "ngIf", "ngIfElse"], ["spinner", ""]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "app-social-bar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "app-navigation-bar", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("showTutorial", function AppComponent_Template_app_navigation_bar_showTutorial_12_listener() {
              return ctx.showTutorial();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AppComponent_ng_container_14_Template, 2, 0, "ng-container", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "app-pre-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "app-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "tfoot");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, AppComponent_ng_template_21_Template, 1, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("loading", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r1);
          }
        },
        directives: [_modules_components_social_bar_social_bar_component__WEBPACK_IMPORTED_MODULE_11__["SocialBarComponent"], _modules_components_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_12__["NavigationBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _modules_components_pre_footer_pre_footer_component__WEBPACK_IMPORTED_MODULE_14__["PreFooterComponent"], _modules_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterOutlet"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__["MatSpinner"]],
        styles: [".appContainer[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n@media print {\n  .appContainer[_ngcontent-%COMP%] {\n    max-width: none;\n    min-height: 0;\n    margin: 0;\n  }\n}\n.appContainer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  flex: 1;\n  width: 100%;\n  max-width: 1170px;\n  margin: auto;\n  padding-bottom: 4rem;\n}\n@media print {\n  .appContainer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    background: none;\n    padding-bottom: 0;\n    max-width: none;\n  }\n}\n.appContainer[_ngcontent-%COMP%]   .content.loading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@media screen {\n  table[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  thead[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], .print-footer[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\ntable[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border-spacing: 0;\n}\n@media print {\n  table[_ngcontent-%COMP%], thead[_ngcontent-%COMP%] {\n    width: calc(100%);\n  }\n\n  thead[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n  }\n  thead[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 1.25cm;\n    margin-bottom: 0.5cm;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVBO0VBQ0UsaUJBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7QUFWRjtBQVlFO0VBTkY7SUFPSSxlQUFBO0lBQ0EsYUFBQTtJQUNBLFNBQUE7RUFURjtBQUNGO0FBVUU7RUFDRSxPQUFBO0VBRUEsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUVBLG9CQUFBO0FBVko7QUFZSTtFQVRGO0lBVUksZ0JBQUE7SUFDQSxpQkFBQTtJQUNFLGVBQUE7RUFUTjtBQUNGO0FBV0k7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQVROO0FBY0E7RUFDRTtJQUNFLGNBQUE7RUFYRjs7RUFhQTtJQUNFLGFBQUE7RUFWRjtBQUNGO0FBY0U7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBWko7QUFnQkE7RUFDRTtJQUNFLGlCQUFBO0VBYkY7O0VBZ0JFO0lBQ0ksYUFBQTtJQUNBLDhCQUFBO0lBQ0EscUJBQUE7RUFiTjtFQWVFO0lBQ0UsY0FBQTtJQUNBLG9CQUFBO0VBYko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHdoYXQgZm9sbG93cyBpcyBhbiBhYnNvbHV0ZWx5IHJpZGljdWxvdXMgaGFja1xuLy8gdGhlIHdob2xlIGFwcCBpcyBpbiBhIHRhYmxlLCBqdXN0IHNvIHdlIGNhbiBhYnVzZSB0aGUgZmFjdCB0aGF0IGJyb3dzZXJzIHJlcGVhdCB0aGVhZC90Zm9vdCBvbiBldmVyeSBwYWdlXG4vLyB3aGVuIHByaW50aW5nLlxuLy8gaG93ZXZlciB0aGUgYnJvd3NlcnMgYXJlIGV4dHJlbWVseSBmaW5pY2t5IGFzIHRvIHdoZW4gdGhleSBkbyB0aGlzLlxuLy8gLSB0aGVhZCBhbmQgdGZvb3QgbXVzdCBib3RoIGJlIHByZXNlbnQgYW5kIG5vdCBiZSBlbXB0eSAoZW1wdHkgdGQgaXMgbm90IGVub3VnaCEpXG4vLyAtIHRoZWFkIGFuZCB0Zm9vdCBtdXN0IGJvdGggYmUgZGlzcGxheWVkIChub3QgZGlzcGxheSBub25lISlcbi8vIC0gcmFuZG9tIG90aGVyIHRoaW5ncyBjYXVzZSBpdCB0byBmYWlsIGZvciBzZWVtaW5nbHkgbm8gcmVhc29uOlxuLy8gICBmb3IgZXhhbXBsZSBzaW1wbHkgY2hhbmdpbmcgdGhlIGJhY2tncm91bmQgb2YgLmNvbnRlbnQgZnJvbSBub25lIHRvIHdoaXRlIGZvciBwcmludCBjYXVzZXMgaXQgdG8gc3RvcCB3b3JraW5nXG4vLyBTbywgaWYgeW91IHRvdWNoIHRoaXMgQ1NTLCBCRSBDQVJFRlVMIGFuZCB0ZXN0IHRoZSBwcmludCBsYXlvdXQuIFlvdSBoYXZlIGJlZW4gd2FybmVkLlxuXG4uYXBwQ29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICBAbWVkaWEgcHJpbnQge1xuICAgIG1heC13aWR0aDogbm9uZTtcbiAgICBtaW4taGVpZ2h0OiAwO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICAuY29udGVudCB7XG4gICAgZmxleDogMTtcblxuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTE3MHB4O1xuICAgIG1hcmdpbjogYXV0bztcblxuICAgIHBhZGRpbmctYm90dG9tOiA0cmVtO1xuXG4gICAgQG1lZGlhIHByaW50IHtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgICAgbWF4LXdpZHRoOiBub25lO1xuICAgIH1cblxuICAgICYubG9hZGluZyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIHtcbiAgdGFibGUsIHRib2R5LCB0ciwgdGQgIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICB0aGVhZCwgdGZvb3QsIC5wcmludC1mb290ZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxudGFibGUge1xuICAmLCB0ciwgdGQge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xuICB9XG59XG5cbkBtZWRpYSBwcmludCB7XG4gIHRhYmxlLCB0aGVhZHtcbiAgICB3aWR0aDogY2FsYygxMDAlKTtcbiAgfVxuICB0aGVhZCB0ZCB7XG4gICAgPiBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgfVxuICAgIGltZyB7XG4gICAgICBoZWlnaHQ6IDEuMjVjbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNWNtO1xuICAgIH1cbiAgfVxuXG4gIC8vLnByaW50LWZvb3RlciB7XG4gIC8vICBkaXNwbGF5OiBibG9jaztcbiAgLy8gIHBvc2l0aW9uOiBmaXhlZDtcbiAgLy8gIGJvdHRvbTogMDtcbiAgLy8gIGhlaWdodDogMmNtO1xuICAvLyAgd2lkdGg6IDEwMCU7XG4gIC8vICB6LWluZGV4OiA0O1xuICAvLyAgaW1nIHtcbiAgLy8gICAgaGVpZ2h0OiAyY207XG4gIC8vICAgIHdpZHRoOiAxMDAlO1xuICAvLyAgICBvYmplY3QtcG9zaXRpb246IGxlZnQ7XG4gIC8vICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIC8vICB9XG4gIC8vfVxufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], function () {
          return [{
            type: _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]
          }, {
            type: _services_language_service__WEBPACK_IMPORTED_MODULE_6__["LanguageService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
          }, {
            type: _services_login_service__WEBPACK_IMPORTED_MODULE_9__["LoginService"]
          }, {
            type: _services_access_token_service__WEBPACK_IMPORTED_MODULE_10__["AccessTokenService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "TIiB":
    /*!*************************************************************************************!*\
      !*** ./src/app/modules/components/moving-risk-popup/moving-risk-popup.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: MovingRiskPopupComponent */

    /***/
    function TIiB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MovingRiskPopupComponent", function () {
        return MovingRiskPopupComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _generated_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../generated/api */
      "UIhn");
      /* harmony import */


      var _services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../services/login.service */
      "EFyh");
      /* harmony import */


      var _services_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../services/data.service */
      "EnSQ");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _button_spinner_button_spinner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../button-spinner/button-spinner.component */
      "BYpc");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      function MovingRiskPopupComponent_mat_option_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var c_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", c_r8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r8.name);
        }
      }

      function MovingRiskPopupComponent_ng_container_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "MOVING_RISK_REPORT_ERROR_CUSTOMER_REQUIRED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function MovingRiskPopupComponent_ng_container_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "MOVING_RISK_REPORT_ERROR_SELECT_CUSTOMER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function MovingRiskPopupComponent_mat_option_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var s_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", s_r9.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", s_r9.text, " ");
        }
      }

      function MovingRiskPopupComponent_ng_container_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "MOVING_RISK_REPORT_ERROR_SPECIES_REQUIRED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function MovingRiskPopupComponent_ng_container_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "MOVING_RISK_REPORT_ERROR_MONTHS_REQUIRED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function MovingRiskPopupComponent_ng_container_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "MOVING_RISK_REPORT_ERROR_MONTHS_INVALID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function isCustomer(value) {
        return value != null && typeof value === 'object' && typeof value['id'] === 'number' && typeof value['name'] === 'string';
      }

      var MovingRiskPopupComponent = /*#__PURE__*/function () {
        function MovingRiskPopupComponent(dialogRef, customerService, loginService, dataService) {
          _classCallCheck(this, MovingRiskPopupComponent);

          this.dialogRef = dialogRef;
          this.customerService = customerService;
          this.loginService = loginService;
          this.dataService = dataService;
          this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.controls = {
            customer: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, function (control) {
              if (!_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required(control) && !isCustomer(control.value)) {
                return {
                  'notCustomer': true
                };
              }
            }]),
            speciesId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            months: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](6, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, function (control) {
              if (_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required(control)) {
                return;
              }

              var _float = parseFloat(control.value);

              var _int = parseInt(control.value);

              if (_float != _int || _int <= 0 || _int > 12) {
                return {
                  'monthsInvalid': true
                };
              }
            }])
          };
          this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](this.controls);
          this.sending = false;
          this.species = [];
          this.searchResults = [];
        }

        _createClass(MovingRiskPopupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this44 = this;

            this.loginService.currentUser.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (user) {
              return !(user === null || user === void 0 ? void 0 : user.customer_database_access);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$)).subscribe(function () {
              return _this44.dialogRef.close();
            });
            this.loginService.currentUser.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
              var _a;

              return (_a = user === null || user === void 0 ? void 0 : user.customer_database_access) !== null && _a !== void 0 ? _a : false;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (customerDbAccess) {
              if (!customerDbAccess) {
                return [[]];
              } else {
                return _this44.controls.customer.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
                  var _a;

                  return (_a = _this44.controls.customer.value) !== null && _a !== void 0 ? _a : '';
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (searchObj) {
                  var _a;

                  return typeof searchObj === 'string' ? searchObj : (_a = searchObj === null || searchObj === void 0 ? void 0 : searchObj.name) !== null && _a !== void 0 ? _a : '';
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (searchTerm) {
                  return searchTerm.trim();
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (searchTerm) {
                  return _this44.customerService.customersList(1, 10, searchTerm === '' ? undefined : searchTerm).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
                    var _a;

                    return (_a = response.results) !== null && _a !== void 0 ? _a : [];
                  }));
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
                  console.error('Failed getting autocomplete', err);
                  return [[]];
                }));
              }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$)).subscribe(function (searchResults) {
              _this44.searchResults = searchResults;
            });
            this.dataService.get('species').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$)).subscribe(function (species) {
              _this44.species = species;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroyed$.next();
            this.destroyed$.complete();
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this45 = this;

            if (this.formGroup.valid && !this.sending) {
              this.sending = true;
              this.customerService.customersMovingRiskSendReportCreate(this.controls.customer.value.id, Number(this.controls.months.value), this.controls.speciesId.value).subscribe({
                next: function next() {
                  _this45.sending = false;

                  _this45.dialogRef.close();
                },
                error: function error(err) {
                  console.error('Failed sending report', err);
                  _this45.sending = false;
                }
              });
            }
          }
        }, {
          key: "customerDisplayFn",
          value: function customerDisplayFn(customer) {
            var _a;

            return (_a = customer === null || customer === void 0 ? void 0 : customer.name) !== null && _a !== void 0 ? _a : '';
          }
        }]);

        return MovingRiskPopupComponent;
      }();

      MovingRiskPopupComponent.ɵfac = function MovingRiskPopupComponent_Factory(t) {
        return new (t || MovingRiskPopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_generated_api__WEBPACK_IMPORTED_MODULE_5__["CustomersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]));
      };

      MovingRiskPopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MovingRiskPopupComponent,
        selectors: [["app-moving-risk-popup"]],
        decls: 39,
        vars: 15,
        consts: [["ngx-translate", ""], [3, "formGroup", "ngSubmit"], [1, "form-fields"], ["appearance", "standard"], ["matInput", "", 3, "matAutocomplete", "formControl"], [3, "displayWith"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "formControl"], ["matInput", "", "type", "number", 3, "formControl"], [1, "button-container"], ["mat-flat-button", "", "color", "primary", "type", "submit", 3, "disabled"], [3, "spinning"], [3, "value"]],
        template: function MovingRiskPopupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "MOVING_RISK_REPORT_TITLE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function MovingRiskPopupComponent_Template_form_ngSubmit_5_listener() {
              return ctx.submit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "MOVING_RISK_REPORT_CUSTOMER_LABEL");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-autocomplete", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MovingRiskPopupComponent_mat_option_14_Template, 2, 2, "mat-option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MovingRiskPopupComponent_ng_container_16_Template, 3, 0, "ng-container", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MovingRiskPopupComponent_ng_container_17_Template, 3, 0, "ng-container", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "MOVING_RISK_REPORT_SPECIES_LABEL");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-select", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, MovingRiskPopupComponent_mat_option_23_Template, 2, 2, "mat-option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, MovingRiskPopupComponent_ng_container_25_Template, 3, 0, "ng-container", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "MOVING_RISK_REPORT_MONTHS_LABEL");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, MovingRiskPopupComponent_ng_container_32_Template, 3, 0, "ng-container", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, MovingRiskPopupComponent_ng_container_33_Template, 3, 0, "ng-container", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "app-button-spinner", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "MOVING_RISK_REPORT_SUBMIT");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r0)("formControl", ctx.controls.customer);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.customerDisplayFn);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.searchResults);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.controls.customer.errors == null ? null : ctx.controls.customer.errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.controls.customer.errors == null ? null : ctx.controls.customer.errors.notCustomer);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.controls.speciesId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.species);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.controls.speciesId.errors == null ? null : ctx.controls.speciesId.errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.controls.months);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.controls.months.errors == null ? null : ctx.controls.months.errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.controls.months.errors == null ? null : ctx.controls.months.errors.monthsInvalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.sending);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("spinning", ctx.sending);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatError"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _button_spinner_button_spinner_component__WEBPACK_IMPORTED_MODULE_16__["ButtonSpinnerComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOption"]],
        styles: ["[_nghost-%COMP%] {\n  display: block;\n  min-width: 50vw;\n}\n\n.form-fields[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin: -1rem 0 0 -1rem;\n  padding: 1rem 0;\n  width: calc(100% + 1rem);\n}\n\n.form-fields[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  min-width: 250px;\n  flex-grow: 1;\n  margin: 1rem 0 0 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21wb25lbnRzL21vdmluZy1yaXNrLXBvcHVwL21vdmluZy1yaXNrLXBvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFJQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtBQUZGOztBQUlFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBRUEscUJBQUE7QUFISiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tcG9uZW50cy9tb3Zpbmctcmlzay1wb3B1cC9tb3Zpbmctcmlzay1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1pbi13aWR0aDogNTB2dztcbn1cblxuLmZvcm0tZmllbGRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuXG4gIC8vIHdvcmthcm91bmQgZm9yIGdhcCB3aXRoIGZsZXggYnJvd3NlcnN1cHBvcnRcbiAgJGdhcDogMXJlbTtcbiAgbWFyZ2luOiAoLSRnYXApIDAgMCAoLSRnYXApO1xuICBwYWRkaW5nOiAxcmVtIDA7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyAjeyRnYXB9KTtcblxuICBtYXQtZm9ybS1maWVsZCB7XG4gICAgbWluLXdpZHRoOiAyNTBweDtcbiAgICBmbGV4LWdyb3c6IDE7XG5cbiAgICBtYXJnaW46ICRnYXAgMCAwICRnYXA7XG4gIH1cblxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovingRiskPopupComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-moving-risk-popup',
            templateUrl: './moving-risk-popup.component.html',
            styleUrls: ['./moving-risk-popup.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]
          }, {
            type: _generated_api__WEBPACK_IMPORTED_MODULE_5__["CustomersService"]
          }, {
            type: _services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]
          }, {
            type: _services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "TQNn":
    /*!*********************************************************************************!*\
      !*** ./src/app/modules/components/product-display/product-display.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: ProductDisplayComponent */

    /***/
    function TQNn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductDisplayComponent", function () {
        return ProductDisplayComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ProductDisplayComponent_img_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 2);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.product.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r0.product.name);
        }
      }

      function ProductDisplayComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.product.name);
        }
      }

      var ProductDisplayComponent = /*#__PURE__*/_createClass(function ProductDisplayComponent() {
        _classCallCheck(this, ProductDisplayComponent);
      });

      ProductDisplayComponent.ɵfac = function ProductDisplayComponent_Factory(t) {
        return new (t || ProductDisplayComponent)();
      };

      ProductDisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProductDisplayComponent,
        selectors: [["app-product-display"]],
        inputs: {
          product: "product"
        },
        decls: 3,
        vars: 2,
        consts: [[3, "src", "alt", 4, "ngIf", "ngIfElse"], ["text", ""], [3, "src", "alt"]],
        template: function ProductDisplayComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductDisplayComponent_img_0_Template, 1, 2, "img", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductDisplayComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product.logo)("ngIfElse", _r1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        styles: ["img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 6em;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21wb25lbnRzL3Byb2R1Y3QtZGlzcGxheS9wcm9kdWN0LWRpc3BsYXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tcG9uZW50cy9wcm9kdWN0LWRpc3BsYXkvcHJvZHVjdC1kaXNwbGF5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiA2ZW07XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDisplayComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-product-display',
            templateUrl: './product-display.component.html',
            styleUrls: ['./product-display.component.scss']
          }]
        }], null, {
          product: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "UIhn":
    /*!************************************!*\
      !*** ./src/generated/api/index.ts ***!
      \************************************/

    /*! exports provided: ApiService, AssessmentService, BackendService, ComponentsService, CountriesService, CustomersService, DatabaseService, LaboratoriesService, LanguagesService, LevelsService, MycotoxinsService, ProductsService, RegisterService, SampleTypesService, SendReportService, SpeciesService, TranslationsService, UserService, SampleFormService, APIS, DatabaseAccessEnum, EwStatusEnum, BASE_PATH, COLLECTION_FORMATS, Configuration, ApiModule */

    /***/
    function UIhn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./api/api */
      "2hhN");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ApiService", function () {
        return _api_api__WEBPACK_IMPORTED_MODULE_0__["ApiService"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AssessmentService", function () {
        return _api_api__WEBPACK_IMPORTED_MODULE_0__["AssessmentService"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BackendService", function () {
        return _api_api__WEBPACK_IMPORTED_MODULE_0__["BackendService"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ComponentsService", function () {
        return _api_api__WEBPACK_IMPORTED_MODULE_0__["ComponentsService"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CountriesService", function () {
        return _api_api__WEBPACK_IMPORTED_MODULE_0__["CountriesService"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CustomersService", function () {
        return _api_api__WEBPACK_IMPORTED_MODULE_0__["CustomersService"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DatabaseService", function () {
        return _api_api__WEBPACK_IMPORTED_MODULE_0__["DatabaseService"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LaboratoriesService", function () {
        return _api_api__WEBPACK_IMPORTED_MODULE_0__["LaboratoriesService"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LanguagesService", function () {
        return _api_api__WEBPACK_IMPORTED_MODULE_0__["LanguagesService"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LevelsService", function () {
        return _api_api__WEBPACK_IMPORTED_MODULE_0__["LevelsService"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MycotoxinsService", function () {
        return _api_api__WEBPACK_IMPORTED_MODULE_0__["MycotoxinsService"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ProductsService", function () {
        return _api_api__WEBPACK_IMPORTED_MODULE_0__["ProductsService"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "RegisterService", function () {
        return _api_api__WEBPACK_IMPORTED_MODULE_0__["RegisterService"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SampleTypesService", function () {
        return _api_api__WEBPACK_IMPORTED_MODULE_0__["SampleTypesService"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SendReportService", function () {
        return _api_api__WEBPACK_IMPORTED_MODULE_0__["SendReportService"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SpeciesService", function () {
        return _api_api__WEBPACK_IMPORTED_MODULE_0__["SpeciesService"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TranslationsService", function () {
        return _api_api__WEBPACK_IMPORTED_MODULE_0__["TranslationsService"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return _api_api__WEBPACK_IMPORTED_MODULE_0__["UserService"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SampleFormService", function () {
        return _api_api__WEBPACK_IMPORTED_MODULE_0__["SampleFormService"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "APIS", function () {
        return _api_api__WEBPACK_IMPORTED_MODULE_0__["APIS"];
      });
      /* harmony import */


      var _model_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./model/models */
      "RiOR");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DatabaseAccessEnum", function () {
        return _model_models__WEBPACK_IMPORTED_MODULE_1__["DatabaseAccessEnum"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "EwStatusEnum", function () {
        return _model_models__WEBPACK_IMPORTED_MODULE_1__["EwStatusEnum"];
      });
      /* harmony import */


      var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./variables */
      "G5Mf");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BASE_PATH", function () {
        return _variables__WEBPACK_IMPORTED_MODULE_2__["BASE_PATH"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "COLLECTION_FORMATS", function () {
        return _variables__WEBPACK_IMPORTED_MODULE_2__["COLLECTION_FORMATS"];
      });
      /* harmony import */


      var _configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./configuration */
      "PKcu");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Configuration", function () {
        return _configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"];
      });
      /* harmony import */


      var _api_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./api.module */
      "y/br");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ApiModule", function () {
        return _api_module__WEBPACK_IMPORTED_MODULE_4__["ApiModule"];
      });
      /***/

    },

    /***/
    "V0tv":
    /*!***********************************************!*\
      !*** ./src/generated/api/model/laboratory.ts ***!
      \***********************************************/

    /*! no exports provided */

    /***/
    function V0tv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /**
       *
       * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
       *
       * The version of the OpenAPI document: 0.0.0
       *
       *
       * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
       * https://openapi-generator.tech
       * Do not edit the class manually.
       */

      /***/

    },

    /***/
    "VDAc":
    /*!********************************************!*\
      !*** ./src/generated/api/model/country.ts ***!
      \********************************************/

    /*! no exports provided */

    /***/
    function VDAc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /**
       *
       * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
       *
       * The version of the OpenAPI document: 0.0.0
       *
       *
       * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
       * https://openapi-generator.tech
       * Do not edit the class manually.
       */

      /***/

    },

    /***/
    "WOYf":
    /*!*****************************************!*\
      !*** ./src/app/util/pagination-i18n.ts ***!
      \*****************************************/

    /*! exports provided: TranslatedPaginatorI18n */

    /***/
    function WOYf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TranslatedPaginatorI18n", function () {
        return TranslatedPaginatorI18n;
      });
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var TranslatedPaginatorI18n = /*#__PURE__*/function (_angular_material_pag) {
        _inherits(TranslatedPaginatorI18n, _angular_material_pag);

        var _super3 = _createSuper(TranslatedPaginatorI18n);

        function TranslatedPaginatorI18n(translateService, translateParser) {
          var _this46;

          _classCallCheck(this, TranslatedPaginatorI18n);

          _this46 = _super3.call(this);
          _this46.translateService = translateService;
          _this46.translateParser = translateParser;

          _this46.getRangeLabel = function (page, pageSize, length) {
            length = Math.max(length, 0);
            var startIndex = page * pageSize;
            var endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
            return _this46.translateParser.interpolate(_this46.rangeLabelIntl, {
              startIndex: startIndex,
              endIndex: endIndex,
              length: length
            });
          };

          _this46.translateService.get(['PAGINATOR_ITEMS_PER_PAGE', 'PAGINATOR_NEXT_PAGE', 'PAGINATOR_PREVIOUS_PAGE', 'PAGINATOR_FIRST_PAGE', 'PAGINATOR_LAST_PAGE', 'PAGINATOR_RANGE']).subscribe(function (translation) {
            _this46.itemsPerPageLabel = translation['PAGINATOR_ITEMS_PER_PAGE'];
            _this46.nextPageLabel = translation['PAGINATOR_NEXT_PAGE'];
            _this46.previousPageLabel = translation['PAGINATOR_PREVIOUS_PAGE'];
            _this46.firstPageLabel = translation['PAGINATOR_FIRST_PAGE'];
            _this46.lastPageLabel = translation['PAGINATOR_LAST_PAGE'];
            _this46.rangeLabelIntl = translation['PAGINATOR_RANGE'];

            _this46.changes.next();
          });

          return _this46;
        }

        return _createClass(TranslatedPaginatorI18n);
      }(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginatorIntl"]);

      TranslatedPaginatorI18n.ɵfac = function TranslatedPaginatorI18n_Factory(t) {
        return new (t || TranslatedPaginatorI18n)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateParser"]));
      };

      TranslatedPaginatorI18n.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: TranslatedPaginatorI18n,
        factory: TranslatedPaginatorI18n.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TranslatedPaginatorI18n, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], function () {
          return [{
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateParser"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "XC+R":
    /*!*****************************************!*\
      !*** ./src/generated/api/model/user.ts ***!
      \*****************************************/

    /*! no exports provided */

    /***/
    function XCR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    "Yk9B":
    /*!****************************************************************************!*\
      !*** ./src/app/modules/pages/change-password/change-password.component.ts ***!
      \****************************************************************************/

    /*! exports provided: ChangePasswordComponent */

    /***/
    function Yk9B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function () {
        return ChangePasswordComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _generated_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../generated/api */
      "UIhn");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _components_button_spinner_button_spinner_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../components/button-spinner/button-spinner.component */
      "BYpc");

      function ChangePasswordComponent_ng_container_2_ng_container_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " CHANGE_PASSWORD_OLD_PASSWORD_ERROR_REQUIRED ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function ChangePasswordComponent_ng_container_2_ng_container_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r3.oldPasswordError), " ");
        }
      }

      function ChangePasswordComponent_ng_container_2_ng_container_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " CHANGE_PASSWORD_PASSWORD_ERROR_REQUIRED ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function ChangePasswordComponent_ng_container_2_ng_container_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r5.error), " ");
        }
      }

      function ChangePasswordComponent_ng_container_2_ng_container_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " CHANGE_PASSWORD_PASSWORD2_ERROR_REQUIRED ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function ChangePasswordComponent_ng_container_2_ng_container_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " CHANGE_PASSWORD_ERROR_NO_MATCH ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function ChangePasswordComponent_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ChangePasswordComponent_ng_container_2_Template_form_ngSubmit_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "CHANGE_PASSWORD_OLD_PASSWORD_LABEL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ChangePasswordComponent_ng_container_2_ng_container_8_Template, 3, 0, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ChangePasswordComponent_ng_container_2_ng_container_9_Template, 3, 3, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "CHANGEPASSWORD_FIELDS_PASSWORD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ChangePasswordComponent_ng_container_2_ng_container_16_Template, 3, 0, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "CHANGEPASSWORD_FIELDS_PASSWORD_RPT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ChangePasswordComponent_ng_container_2_ng_container_23_Template, 3, 3, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ChangePasswordComponent_ng_container_2_ng_container_24_Template, 3, 0, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ChangePasswordComponent_ng_container_2_ng_container_25_Template, 3, 0, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "app-button-spinner", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "CHANGEPASSWORD_FIELDS_SUBMIT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.formGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.controls.oldPassword)("errorStateMatcher", ctx_r0.oldPasswordErrorMatcher);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.oldPasswordError == null && (ctx_r0.controls.oldPassword.errors == null ? null : ctx_r0.controls.oldPassword.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.oldPasswordError != null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.controls.newPassword);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.controls.newPassword.errors == null ? null : ctx_r0.controls.newPassword.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.controls.newPasswordRepeat)("errorStateMatcher", ctx_r0.passwordErrorMatcher);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.error != null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.error == null && (ctx_r0.controls.newPasswordRepeat.errors == null ? null : ctx_r0.controls.newPasswordRepeat.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.error == null && (ctx_r0.formGroup.errors == null ? null : ctx_r0.formGroup.errors.noMatch));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("spinning", ctx_r0.loading);
        }
      }

      function ChangePasswordComponent_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "CHANGEPASSWORD_COMPLETED"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      var ChangePasswordComponent = /*#__PURE__*/function () {
        function ChangePasswordComponent(route, apiService, userService, translateService) {
          var _this47 = this;

          _classCallCheck(this, ChangePasswordComponent);

          this.route = route;
          this.apiService = apiService;
          this.userService = userService;
          this.translateService = translateService;
          this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.controls = {
            oldPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            newPasswordRepeat: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
          };
          this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"](this.controls, function (group) {
            var _a, _b;

            var newPassword = String((_a = _this47.controls.newPassword.value) !== null && _a !== void 0 ? _a : '');
            var newPasswordRepeat = String((_b = _this47.controls.newPasswordRepeat.value) !== null && _b !== void 0 ? _b : '');

            if (newPassword.trim() === '' || newPasswordRepeat.trim() === '') {
              return null;
            }

            return newPassword === newPasswordRepeat ? null : {
              noMatch: true
            };
          });
          this.submitted = false;
          this.oldPasswordError = null;
          this.error = null;
          this.loading = false;
          this.valid = true;
          this.token = null;
          var component = this;
          this.passwordErrorMatcher = new ( /*#__PURE__*/function (_angular_material_cor3) {
            _inherits(_class3, _angular_material_cor3);

            var _super4 = _createSuper(_class3);

            function _class3() {
              _classCallCheck(this, _class3);

              return _super4.apply(this, arguments);
            }

            _createClass(_class3, [{
              key: "isErrorState",
              value: function isErrorState(control, form) {
                return _get(_getPrototypeOf(_class3.prototype), "isErrorState", this).call(this, control, form) || component.error != null || form.hasError('noMatch');
              }
            }]);

            return _class3;
          }(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["ErrorStateMatcher"]))();
          this.oldPasswordErrorMatcher = new ( /*#__PURE__*/function (_angular_material_cor4) {
            _inherits(_class4, _angular_material_cor4);

            var _super5 = _createSuper(_class4);

            function _class4() {
              _classCallCheck(this, _class4);

              return _super5.apply(this, arguments);
            }

            _createClass(_class4, [{
              key: "isErrorState",
              value: function isErrorState(control, form) {
                return _get(_getPrototypeOf(_class4.prototype), "isErrorState", this).call(this, control, form) || component.oldPasswordError != null;
              }
            }]);

            return _class4;
          }(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["ErrorStateMatcher"]))();
        }

        _createClass(ChangePasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "submit",
          value: function submit() {
            var _this48 = this;

            if (this.formGroup.valid) {
              this.loading = true;
              this.error = null;
              this.oldPasswordError = null;
              this.userService.userChangePasswordUpdate({
                old_password: this.controls.oldPassword.value,
                new_password: this.controls.newPassword.value
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroyed$)).subscribe({
                next: function next() {
                  _this48.loading = false;
                  _this48.submitted = true;
                },
                error: function error(err) {
                  _this48.loading = false;
                  console.error('Change Password failed', err);

                  if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpErrorResponse"] && Math.floor(err.status / 100) === 4 && typeof err.error === 'object') {
                    if (Array.isArray(err.error.password) && err.error.password.length !== 0) {
                      _this48.error = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(err.error.password.map(function (p) {
                        return String(p);
                      }).join(', '));
                    } else if (Array.isArray(err.error.old_password) && err.error.old_password.length !== 0) {
                      _this48.oldPasswordError = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(err.error.old_password.map(function (p) {
                        return String(p);
                      }).join(', '));
                    }
                  }

                  if (_this48.error == null && _this48.oldPasswordError == null) {
                    _this48.error = _this48.translateService.get('CHANGEPASSWORD_ERROR');
                  }
                }
              });
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroyed$.next();
            this.destroyed$.complete();
          }
        }]);

        return ChangePasswordComponent;
      }();

      ChangePasswordComponent.ɵfac = function ChangePasswordComponent_Factory(t) {
        return new (t || ChangePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_generated_api__WEBPACK_IMPORTED_MODULE_7__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_generated_api__WEBPACK_IMPORTED_MODULE_7__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]));
      };

      ChangePasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ChangePasswordComponent,
        selectors: [["app-change-password"]],
        decls: 4,
        vars: 2,
        consts: [["ngx-translate", ""], [4, "ngIf"], [1, "form-container", 3, "formGroup", "ngSubmit"], ["matInput", "", "type", "password", 3, "formControl", "errorStateMatcher"], ["matInput", "", "type", "password", 3, "formControl"], [1, "button-container"], ["mat-flat-button", "", "color", "primary", 3, "disabled"], [3, "spinning"], [3, "innerHTML"]],
        template: function ChangePasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "CHANGEPASSWORD_HEADING");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChangePasswordComponent_ng_container_2_Template, 31, 14, "ng-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChangePasswordComponent_ng_container_3_Template, 3, 3, "ng-container", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.submitted);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted);
          }
        },
        directives: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatError"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _components_button_spinner_button_spinner_component__WEBPACK_IMPORTED_MODULE_13__["ButtonSpinnerComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]],
        styles: ["[_nghost-%COMP%] {\n  display: block;\n  padding: 24px;\n}\n\n.form-container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 30em;\n  max-width: 100%;\n  margin: 0 auto;\n  flex-direction: column;\n  align-items: flex-end;\n}\n\n.form-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.form-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%] {\n  margin-top: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlcy9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFFQSxzQkFBQTtFQUNBLHFCQUFBO0FBQUY7O0FBRUU7RUFDRSxXQUFBO0FBQUo7O0FBR0U7RUFDRSxlQUFBO0FBREoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3BhZ2VzL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAyNHB4O1xufVxuXG4uZm9ybS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMzBlbTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcblxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG5cbiAgbWF0LWZvcm0tZmllbGQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmJ1dHRvbi1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgfVxufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangePasswordComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-change-password',
            templateUrl: './change-password.component.html',
            styleUrls: ['./change-password.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
          }, {
            type: _generated_api__WEBPACK_IMPORTED_MODULE_7__["ApiService"]
          }, {
            type: _generated_api__WEBPACK_IMPORTED_MODULE_7__["UserService"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: apiModuleConfigurationFactory, httpLoaderFactory, AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "apiModuleConfigurationFactory", function () {
        return apiModuleConfigurationFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "httpLoaderFactory", function () {
        return httpLoaderFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _generated_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../generated/api */
      "UIhn");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _interceptors_language_header_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./interceptors/language-header.interceptor */
      "yFtC");
      /* harmony import */


      var _modules_components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./modules/components/components.module */
      "aDnW");
      /* harmony import */


      var _interceptors_auth_header_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./interceptors/auth-header.interceptor */
      "SVw4");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _modules_pages_registration_registration_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./modules/pages/registration/registration.module */
      "KgAc");
      /* harmony import */


      var _modules_pages_imprint_imprint_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./modules/pages/imprint/imprint.module */
      "2oaB");
      /* harmony import */


      var _modules_pages_lost_password_lost_password_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./modules/pages/lost-password/lost-password.module */
      "PBnM");
      /* harmony import */


      var _modules_pages_reset_password_reset_password_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./modules/pages/reset-password/reset-password.module */
      "BU5b");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _util_pagination_i18n__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./util/pagination-i18n */
      "WOYf");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _modules_pages_change_password_change_password_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./modules/pages/change-password/change-password.module */
      "1ooM");

      function apiModuleConfigurationFactory() {
        return new _generated_api__WEBPACK_IMPORTED_MODULE_5__["Configuration"]({
          basePath: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].api,
          credentials: {
            'Bearer': function Bearer() {
              return undefined;
            } // dummy entry, we add this token manually using an interceptor, because we need observable support

          }
        });
      }

      function httpLoaderFactory(http) {
        return new ( /*#__PURE__*/function (_ngx_translate_core__) {
          _inherits(_class5, _ngx_translate_core__);

          var _super6 = _createSuper(_class5);

          function _class5() {
            _classCallCheck(this, _class5);

            return _super6.apply(this, arguments);
          }

          _createClass(_class5, [{
            key: "getTranslation",
            value: function getTranslation(lang) {
              return http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].api, "/backend/masterdata/translations/"), {
                headers: {
                  'Accept-Language': lang
                }
              });
            }
          }]);

          return _class5;
        }(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateLoader"]))();
      }

      var AppModule = /*#__PURE__*/_createClass(function AppModule() {
        _classCallCheck(this, AppModule);
      });

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
          useClass: _interceptors_language_header_interceptor__WEBPACK_IMPORTED_MODULE_8__["LanguageHeaderInterceptor"],
          multi: true
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
          useClass: _interceptors_auth_header_interceptor__WEBPACK_IMPORTED_MODULE_10__["AuthHeaderInterceptor"],
          multi: true
        }, {
          provide: _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__["MatPaginatorIntl"],
          useClass: _util_pagination_i18n__WEBPACK_IMPORTED_MODULE_28__["TranslatedPaginatorI18n"]
        }, {
          provide: _generated_api__WEBPACK_IMPORTED_MODULE_5__["Configuration"],
          useFactory: apiModuleConfigurationFactory
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({
          appId: 'serverApp'
        }), _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatNativeDateModule"], _generated_api__WEBPACK_IMPORTED_MODULE_5__["ApiModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"].forRoot({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateLoader"],
            useFactory: httpLoaderFactory,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]
          }
        }), _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _modules_components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"], _modules_pages_registration_registration_module__WEBPACK_IMPORTED_MODULE_23__["RegistrationModule"], _modules_pages_imprint_imprint_module__WEBPACK_IMPORTED_MODULE_24__["ImprintModule"], _modules_pages_lost_password_lost_password_module__WEBPACK_IMPORTED_MODULE_25__["LostPasswordModule"], _modules_pages_reset_password_reset_password_module__WEBPACK_IMPORTED_MODULE_26__["ResetPasswordModule"], _modules_pages_change_password_change_password_module__WEBPACK_IMPORTED_MODULE_30__["ChangePasswordModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatNativeDateModule"], _generated_api__WEBPACK_IMPORTED_MODULE_5__["ApiModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _modules_components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"], _modules_pages_registration_registration_module__WEBPACK_IMPORTED_MODULE_23__["RegistrationModule"], _modules_pages_imprint_imprint_module__WEBPACK_IMPORTED_MODULE_24__["ImprintModule"], _modules_pages_lost_password_lost_password_module__WEBPACK_IMPORTED_MODULE_25__["LostPasswordModule"], _modules_pages_reset_password_reset_password_module__WEBPACK_IMPORTED_MODULE_26__["ResetPasswordModule"], _modules_pages_change_password_change_password_module__WEBPACK_IMPORTED_MODULE_30__["ChangePasswordModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({
              appId: 'serverApp'
            }), _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatNativeDateModule"], _generated_api__WEBPACK_IMPORTED_MODULE_5__["ApiModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"].forRoot({
              loader: {
                provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateLoader"],
                useFactory: httpLoaderFactory,
                deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]
              }
            }), _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _modules_components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"], _modules_pages_registration_registration_module__WEBPACK_IMPORTED_MODULE_23__["RegistrationModule"], _modules_pages_imprint_imprint_module__WEBPACK_IMPORTED_MODULE_24__["ImprintModule"], _modules_pages_lost_password_lost_password_module__WEBPACK_IMPORTED_MODULE_25__["LostPasswordModule"], _modules_pages_reset_password_reset_password_module__WEBPACK_IMPORTED_MODULE_26__["ResetPasswordModule"], _modules_pages_change_password_change_password_module__WEBPACK_IMPORTED_MODULE_30__["ChangePasswordModule"]],
            providers: [{
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
              useClass: _interceptors_language_header_interceptor__WEBPACK_IMPORTED_MODULE_8__["LanguageHeaderInterceptor"],
              multi: true
            }, {
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
              useClass: _interceptors_auth_header_interceptor__WEBPACK_IMPORTED_MODULE_10__["AuthHeaderInterceptor"],
              multi: true
            }, {
              provide: _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__["MatPaginatorIntl"],
              useClass: _util_pagination_i18n__WEBPACK_IMPORTED_MODULE_28__["TranslatedPaginatorI18n"]
            }, {
              provide: _generated_api__WEBPACK_IMPORTED_MODULE_5__["Configuration"],
              useFactory: apiModuleConfigurationFactory
            }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ZteZ":
    /*!*****************************************************************!*\
      !*** ./src/app/modules/components/sign-in/sign-in.component.ts ***!
      \*****************************************************************/

    /*! exports provided: SignInComponent */

    /***/
    function ZteZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignInComponent", function () {
        return SignInComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../services/login.service */
      "EFyh");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _button_spinner_button_spinner_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../button-spinner/button-spinner.component */
      "BYpc");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function SignInComponent_ng_container_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please enter your Email.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function SignInComponent_ng_container_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please re-check your Email.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function SignInComponent_ng_container_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please enter your Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function SignInComponent_ng_container_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r3.loginError), " ");
        }
      }

      var SignInComponent = /*#__PURE__*/function () {
        function SignInComponent(matDialog, dialogRef, loginService) {
          _classCallCheck(this, SignInComponent);

          this.matDialog = matDialog;
          this.dialogRef = dialogRef;
          this.loginService = loginService;
          this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.controls = {
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
          };
          this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](this.controls);
          this.loginError = null;
          this.signingIn = false;
          var component = this;
          this.emailErrorMatcher = new ( /*#__PURE__*/function (_angular_material_cor5) {
            _inherits(_class6, _angular_material_cor5);

            var _super7 = _createSuper(_class6);

            function _class6() {
              _classCallCheck(this, _class6);

              return _super7.apply(this, arguments);
            }

            _createClass(_class6, [{
              key: "isErrorState",
              value: function isErrorState(control, form) {
                return _get(_getPrototypeOf(_class6.prototype), "isErrorState", this).call(this, control, form) || component.loginError != null;
              }
            }]);

            return _class6;
          }(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["ErrorStateMatcher"]))();
        }

        _createClass(SignInComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "close",
          value: function close() {
            this.dialogRef.close();
          }
        }, {
          key: "signIn",
          value: function signIn() {
            var _this49 = this;

            if (this.formGroup.valid) {
              this.signingIn = true;
              this.loginError = null;
              this.loginService.login(this.controls.email.value, this.controls.password.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
                return _this49.signingIn = false;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$)).subscribe(function (loginResult) {
                if (loginResult == null) {
                  _this49.dialogRef.close();
                } else {
                  _this49.loginError = loginResult;
                }
              });
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroyed$.next();
            this.destroyed$.complete();
          }
        }]);

        return SignInComponent;
      }();

      SignInComponent.ɵfac = function SignInComponent_Factory(t) {
        return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]));
      };

      SignInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SignInComponent,
        selectors: [["app-sign-in"]],
        decls: 35,
        vars: 10,
        consts: [["ngx-translate", ""], ["novalidate", "", 3, "formGroup", "ngSubmit"], ["appearance", "standard"], ["matSuffix", ""], ["matInput", "", "type", "email", 3, "formControl", "errorStateMatcher"], [4, "ngIf"], ["matInput", "", "type", "password", 3, "formControl"], [1, "button-container"], ["mat-flat-button", "", "color", "primary", "type", "submit", 3, "disabled"], [3, "spinning"], ["mat-stroked-button", "", "type", "button", "routerLink", "/forgot-password", 3, "click"]],
        template: function SignInComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sign In");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignInComponent_Template_form_ngSubmit_5_listener() {
              return ctx.signIn();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "E-Mail*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "alternate_email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SignInComponent_ng_container_14_Template, 3, 0, "ng-container", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SignInComponent_ng_container_15_Template, 3, 0, "ng-container", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Password*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "lock");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, SignInComponent_ng_container_24_Template, 3, 0, "ng-container", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, SignInComponent_ng_container_26_Template, 3, 3, "ng-container", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "app-button-spinner", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "LOGIN");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInComponent_Template_button_click_32_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "You have lost your password?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.controls.email)("errorStateMatcher", ctx.emailErrorMatcher);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginError == null && (ctx.controls.email.errors == null ? null : ctx.controls.email.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginError == null && (ctx.controls.email.errors == null ? null : ctx.controls.email.errors.email));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.controls.password);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.controls.password.errors == null ? null : ctx.controls.password.errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginError != null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.signingIn);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("spinning", ctx.signingIn);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatSuffix"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatError"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _button_spinner_button_spinner_component__WEBPACK_IMPORTED_MODULE_14__["ButtonSpinnerComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterLink"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]],
        styles: ["[_nghost-%COMP%] {\n  display: block;\n  min-width: 30vw;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\n\nbutton[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 1em;\n}\n\n.button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.button-container[_ngcontent-%COMP%]:first-child {\n  margin-right: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21wb25lbnRzL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFDRTtFQUNFLGlCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NvbXBvbmVudHMvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWluLXdpZHRoOiAzMHZ3O1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cblxuYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDFlbTtcbn1cblxuLmJ1dHRvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtd3JhcDogd3JhcDtcblxuICAmOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDJlbTtcbiAgfVxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignInComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-sign-in',
            templateUrl: './sign-in.component.html',
            styleUrls: ['./sign-in.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"]
          }, {
            type: _services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "aDnW":
    /*!*********************************************************!*\
      !*** ./src/app/modules/components/components.module.ts ***!
      \*********************************************************/

    /*! exports provided: ComponentsModule */

    /***/
    function aDnW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
        return ComponentsModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sign-in/sign-in.component */
      "ZteZ");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _alert_alert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./alert/alert.component */
      "bTKV");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _result_result_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./result/result.component */
      "OBCW");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _social_bar_social_bar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./social-bar/social-bar.component */
      "NlTa");
      /* harmony import */


      var _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./navigation-bar/navigation-bar.component */
      "JnoF");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./footer/footer.component */
      "fmRU");
      /* harmony import */


      var _header_cta_header_cta_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./header-cta/header-cta.component */
      "uZfB");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _product_display_product_display_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./product-display/product-display.component */
      "TQNn");
      /* harmony import */


      var _pre_footer_pre_footer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./pre-footer/pre-footer.component */
      "x9VU");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _button_spinner_button_spinner_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./button-spinner/button-spinner.component */
      "BYpc");
      /* harmony import */


      var _moving_risk_display_moving_risk_display_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./moving-risk-display/moving-risk-display.component */
      "RC5z");
      /* harmony import */


      var _moving_risk_popup_moving_risk_popup_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./moving-risk-popup/moving-risk-popup.component */
      "TIiB");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");

      var components = [_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_2__["SignInComponent"], _alert_alert_component__WEBPACK_IMPORTED_MODULE_4__["AlertComponent"], _result_result_component__WEBPACK_IMPORTED_MODULE_7__["ResultComponent"], _social_bar_social_bar_component__WEBPACK_IMPORTED_MODULE_14__["SocialBarComponent"], _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_15__["NavigationBarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"], _header_cta_header_cta_component__WEBPACK_IMPORTED_MODULE_17__["HeaderCtaComponent"], _product_display_product_display_component__WEBPACK_IMPORTED_MODULE_21__["ProductDisplayComponent"], _pre_footer_pre_footer_component__WEBPACK_IMPORTED_MODULE_22__["PreFooterComponent"], _button_spinner_button_spinner_component__WEBPACK_IMPORTED_MODULE_24__["ButtonSpinnerComponent"], _moving_risk_display_moving_risk_display_component__WEBPACK_IMPORTED_MODULE_25__["MovingRiskDisplayComponent"], _moving_risk_popup_moving_risk_popup_component__WEBPACK_IMPORTED_MODULE_26__["MovingRiskPopupComponent"]];

      var ComponentsModule = /*#__PURE__*/_createClass(function ComponentsModule() {
        _classCallCheck(this, ComponentsModule);
      });

      ComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ComponentsModule
      });
      ComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ComponentsModule_Factory(t) {
          return new (t || ComponentsModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatRippleModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_27__["MatAutocompleteModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentsModule, {
          declarations: [_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_2__["SignInComponent"], _alert_alert_component__WEBPACK_IMPORTED_MODULE_4__["AlertComponent"], _result_result_component__WEBPACK_IMPORTED_MODULE_7__["ResultComponent"], _social_bar_social_bar_component__WEBPACK_IMPORTED_MODULE_14__["SocialBarComponent"], _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_15__["NavigationBarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"], _header_cta_header_cta_component__WEBPACK_IMPORTED_MODULE_17__["HeaderCtaComponent"], _product_display_product_display_component__WEBPACK_IMPORTED_MODULE_21__["ProductDisplayComponent"], _pre_footer_pre_footer_component__WEBPACK_IMPORTED_MODULE_22__["PreFooterComponent"], _button_spinner_button_spinner_component__WEBPACK_IMPORTED_MODULE_24__["ButtonSpinnerComponent"], _moving_risk_display_moving_risk_display_component__WEBPACK_IMPORTED_MODULE_25__["MovingRiskDisplayComponent"], _moving_risk_popup_moving_risk_popup_component__WEBPACK_IMPORTED_MODULE_26__["MovingRiskPopupComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatRippleModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_27__["MatAutocompleteModule"]],
          exports: [_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_2__["SignInComponent"], _alert_alert_component__WEBPACK_IMPORTED_MODULE_4__["AlertComponent"], _result_result_component__WEBPACK_IMPORTED_MODULE_7__["ResultComponent"], _social_bar_social_bar_component__WEBPACK_IMPORTED_MODULE_14__["SocialBarComponent"], _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_15__["NavigationBarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"], _header_cta_header_cta_component__WEBPACK_IMPORTED_MODULE_17__["HeaderCtaComponent"], _product_display_product_display_component__WEBPACK_IMPORTED_MODULE_21__["ProductDisplayComponent"], _pre_footer_pre_footer_component__WEBPACK_IMPORTED_MODULE_22__["PreFooterComponent"], _button_spinner_button_spinner_component__WEBPACK_IMPORTED_MODULE_24__["ButtonSpinnerComponent"], _moving_risk_display_moving_risk_display_component__WEBPACK_IMPORTED_MODULE_25__["MovingRiskDisplayComponent"], _moving_risk_popup_moving_risk_popup_component__WEBPACK_IMPORTED_MODULE_26__["MovingRiskPopupComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: components,
            exports: components,
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatRippleModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_27__["MatAutocompleteModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "aXZw":
    /*!**************************************************!*\
      !*** ./src/generated/api/api/species.service.ts ***!
      \**************************************************/

    /*! exports provided: SpeciesService */

    /***/
    function aXZw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpeciesService", function () {
        return SpeciesService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../encoder */
      "i0KE");
      /* harmony import */


      var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../variables */
      "G5Mf");
      /* harmony import */


      var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../configuration */
      "PKcu");
      /**
       *
       * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
       *
       * The version of the OpenAPI document: 0.0.0
       *
       *
       * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
       * https://openapi-generator.tech
       * Do not edit the class manually.
       */

      /* tslint:disable:no-unused-variable member-ordering */


      var SpeciesService = /*#__PURE__*/function () {
        function SpeciesService(httpClient, basePath, configuration) {
          _classCallCheck(this, SpeciesService);

          this.httpClient = httpClient;
          this.basePath = 'http://localhost';
          this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();

          if (configuration) {
            this.configuration = configuration;
          }

          if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
              basePath = this.basePath;
            }

            this.configuration.basePath = basePath;
          }

          this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpParameterCodec"]();
        }

        _createClass(SpeciesService, [{
          key: "addToHttpParams",
          value: function addToHttpParams(httpParams, value, key) {
            if (typeof value === "object" && value instanceof Date === false) {
              httpParams = this.addToHttpParamsRecursive(httpParams, value);
            } else {
              httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
            }

            return httpParams;
          }
        }, {
          key: "addToHttpParamsRecursive",
          value: function addToHttpParamsRecursive(httpParams, value, key) {
            var _this50 = this;

            if (value == null) {
              return httpParams;
            }

            if (typeof value === "object") {
              if (Array.isArray(value)) {
                value.forEach(function (elem) {
                  return httpParams = _this50.addToHttpParamsRecursive(httpParams, elem, key);
                });
              } else if (value instanceof Date) {
                if (key != null) {
                  httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                } else {
                  throw Error("key may not be null if value is Date");
                }
              } else {
                Object.keys(value).forEach(function (k) {
                  return httpParams = _this50.addToHttpParamsRecursive(httpParams, value[k], key != null ? "".concat(key, ".").concat(k) : k);
                });
              }
            } else if (key != null) {
              httpParams = httpParams.append(key, value);
            } else {
              throw Error("key may not be null if value is not object or array");
            }

            return httpParams;
          }
        }, {
          key: "speciesList",
          value: function speciesList() {
            var observe = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'body';
            var reportProgress = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var options = arguments.length > 2 ? arguments[2] : undefined;
            var headers = this.defaultHeaders;
            var credential; // authentication (jwtAuth) required

            credential = this.configuration.lookupCredential('jwtAuth');

            if (credential) {
              headers = headers.set('Authorization', 'Bearer ' + credential);
            }

            var httpHeaderAcceptSelected = options && options.httpHeaderAccept;

            if (httpHeaderAcceptSelected === undefined) {
              // to determine the Accept header
              var httpHeaderAccepts = ['application/json'];
              httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            }

            if (httpHeaderAcceptSelected !== undefined) {
              headers = headers.set('Accept', httpHeaderAcceptSelected);
            }

            var responseType = 'json';

            if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
              responseType = 'text';
            }

            return this.httpClient.get("".concat(this.configuration.basePath, "/backend/masterdata/species/"), {
              responseType: responseType,
              withCredentials: this.configuration.withCredentials,
              headers: headers,
              observe: observe,
              reportProgress: reportProgress
            });
          }
        }]);

        return SpeciesService;
      }();

      SpeciesService.ɵfac = function SpeciesService_Factory(t) {
        return new (t || SpeciesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], 8));
      };

      SpeciesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SpeciesService,
        factory: SpeciesService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpeciesService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"]]
            }]
          }, {
            type: _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "bTKV":
    /*!*************************************************************!*\
      !*** ./src/app/modules/components/alert/alert.component.ts ***!
      \*************************************************************/

    /*! exports provided: AlertComponent */

    /***/
    function bTKV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertComponent", function () {
        return AlertComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function AlertComponent_mat_icon_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r0.data.iconColor || "warn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.data.icon);
        }
      }

      function AlertComponent_ng_container_8_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertComponent_ng_container_8_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var button_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.btn(button_r2.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var button_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, button_r2.text));
        }
      }

      function AlertComponent_ng_container_8_button_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertComponent_ng_container_8_button_2_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var button_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.btn(button_r2.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var button_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, button_r2.text));
        }
      }

      function AlertComponent_ng_container_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AlertComponent_ng_container_8_button_1_Template, 3, 3, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AlertComponent_ng_container_8_button_2_Template, 3, 3, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var button_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", button_r2.role || "default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "primary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "default");
        }
      }

      var AlertComponent = /*#__PURE__*/function () {
        function AlertComponent(data, dialogRef) {
          _classCallCheck(this, AlertComponent);

          this.data = data;
          this.dialogRef = dialogRef;
        }

        _createClass(AlertComponent, [{
          key: "btn",
          value: function btn(id) {
            this.dialogRef.close({
              button: id
            });
          }
        }]);

        return AlertComponent;
      }();

      AlertComponent.ɵfac = function AlertComponent_Factory(t) {
        return new (t || AlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]));
      };

      AlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AlertComponent,
        selectors: [["app-alert"]],
        decls: 9,
        vars: 8,
        consts: [[3, "color", 4, "ngIf"], [1, "button-container"], [3, "ngSwitch", 4, "ngFor", "ngForOf"], [3, "color"], [3, "ngSwitch"], ["mat-flat-button", "", "color", "primary", 3, "click", 4, "ngSwitchCase"], ["mat-stroked-button", "", 3, "click", 4, "ngSwitchCase"], ["mat-flat-button", "", "color", "primary", 3, "click"], ["mat-stroked-button", "", 3, "click"]],
        template: function AlertComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AlertComponent_mat_icon_1_Template, 2, 2, "mat-icon", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AlertComponent_ng_container_8_Template, 3, 3, "ng-container", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.icon);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx.data.title), "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 6, ctx.data.message));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.buttons);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]],
        styles: ["h2[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\nh2[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 0.5em;\n}\n.button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFBRTtFQUNFLG1CQUFBO0FBRUo7QUFJRTtFQUNFLGlCQUFBO0FBREoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NvbXBvbmVudHMvYWxlcnQvYWxlcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hdC1pY29uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xuICB9XG59XG5cblxuLmJ1dHRvbi1jb250YWluZXIge1xuICBidXR0b246bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gIH1cbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-alert',
            templateUrl: './alert.component.html',
            styleUrls: ['./alert.component.scss']
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "cEtz":
    /*!*************************************************!*\
      !*** ./src/generated/api/model/tokenRefresh.ts ***!
      \*************************************************/

    /*! no exports provided */

    /***/
    function cEtz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /**
       *
       * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
       *
       * The version of the OpenAPI document: 0.0.0
       *
       *
       * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
       * https://openapi-generator.tech
       * Do not edit the class manually.
       */

      /***/

    },

    /***/
    "caJQ":
    /*!*************************************************!*\
      !*** ./src/generated/api/model/ewStatusEnum.ts ***!
      \*************************************************/

    /*! exports provided: EwStatusEnum */

    /***/
    function caJQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EwStatusEnum", function () {
        return EwStatusEnum;
      });
      /**
       *
       * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
       *
       * The version of the OpenAPI document: 0.0.0
       *
       *
       * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
       * https://openapi-generator.tech
       * Do not edit the class manually.
       */


      var EwStatusEnum = {
        Intern: 'intern',
        Extern: 'extern'
      };
      /***/
    },

    /***/
    "d2Ug":
    /*!**********************************************************!*\
      !*** ./src/generated/api/model/patchedChangePassword.ts ***!
      \**********************************************************/

    /*! no exports provided */

    /***/
    function d2Ug(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /**
       *
       * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
       *
       * The version of the OpenAPI document: 0.0.0
       *
       *
       * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
       * https://openapi-generator.tech
       * Do not edit the class manually.
       */

      /***/

    },

    /***/
    "e7vz":
    /*!*********************************************!*\
      !*** ./src/generated/api/model/customer.ts ***!
      \*********************************************/

    /*! no exports provided */

    /***/
    function e7vz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /**
       *
       * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
       *
       * The version of the OpenAPI document: 0.0.0
       *
       *
       * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
       * https://openapi-generator.tech
       * Do not edit the class manually.
       */

      /***/

    },

    /***/
    "fmRU":
    /*!***************************************************************!*\
      !*** ./src/app/modules/components/footer/footer.component.ts ***!
      \***************************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function fmRU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _util_social_links__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../util/social-links */
      "N1To");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      var _c0 = function _c0() {
        return [];
      };

      function FooterComponent_a_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", element_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("ngClass", element_r1["class"] == null ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0) : element_r1["class"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "/assets/img/", element_r1.icon, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("alt", element_r1.name);
        }
      }

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent(translateService) {
          _classCallCheck(this, FooterComponent);

          this.translateService = translateService;
          this.socialLinks = _util_social_links__WEBPACK_IMPORTED_MODULE_1__["socialLinks"];
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "contactFirstWord",
          value: function contactFirstWord() {
            return this.translateService.get('LEGAL_CONNECT').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
              var idx = result.indexOf(' ');
              return idx < 0 ? result : result.substring(0, idx);
            }));
          }
        }, {
          key: "contactRest",
          value: function contactRest() {
            return this.translateService.get('LEGAL_CONNECT').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
              var idx = result.indexOf(' ');
              return idx < 0 ? '' : result.substring(idx);
            }));
          }
        }]);

        return FooterComponent;
      }();

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]));
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 22,
        vars: 7,
        consts: [[1, "footer-container"], [1, "footer"], [1, "footer-inner"], [1, "contact-us"], [1, "head"], [1, "first-word"], [1, "socialIcons"], ["mat-ripple", "", "target", "_blank", 3, "href", "ngClass", 4, "ngFor", "ngForOf"], [1, "links"], ["target", "_blank", "href", "https://ew-nutrition.com/about-us/", "ngx-translate", ""], ["routerLink", "/imprint", "ngx-translate", ""], ["ngx-translate", ""], ["mat-ripple", "", "target", "_blank", 3, "href", "ngClass"], [3, "src", "alt"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FooterComponent_a_11_Template, 2, 5, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "LEGAL_ABOUT");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "LEGAL_IMPRINT");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "LEGAL_PRIVACY");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 3, ctx.contactFirstWord()));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 5, ctx.contactRest()), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.socialLinks);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRipple"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
        styles: ["[_nghost-%COMP%]   .footer[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1170px;\n  margin: 0 auto;\n  padding: 0 1rem;\n  box-sizing: content-box;\n  min-height: 8.75rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n[_nghost-%COMP%]   .footer-inner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-end;\n  justify-content: space-between;\n  width: 100%;\n}\n[_nghost-%COMP%]   .contact-us[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .contact-us[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%] {\n  margin-bottom: 0.8em;\n}\n[_nghost-%COMP%]   .contact-us[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .first-word[_ngcontent-%COMP%] {\n  font-weight: 800;\n}\n[_nghost-%COMP%]   .contact-us[_ngcontent-%COMP%]   .socialIcons[_ngcontent-%COMP%] {\n  display: flex;\n}\n[_nghost-%COMP%]   .contact-us[_ngcontent-%COMP%]   .socialIcons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  -o-object-fit: contain;\n     object-fit: contain;\n  -o-object-position: center;\n     object-position: center;\n  filter: invert(81%) sepia(60%) saturate(1605%) hue-rotate(8deg) brightness(100%) contrast(106%);\n  height: 1.1em;\n}\n[_nghost-%COMP%]   .contact-us[_ngcontent-%COMP%]   .socialIcons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: relative;\n  height: 2rem;\n  min-width: 1.875rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 4px;\n  border: 1px solid #282828;\n}\n[_nghost-%COMP%]   .contact-us[_ngcontent-%COMP%]   .socialIcons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  opacity: 0;\n  transition: opacity 0.3s;\n  border-radius: inherit;\n}\n[_nghost-%COMP%]   .contact-us[_ngcontent-%COMP%]   .socialIcons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n[_nghost-%COMP%]   .contact-us[_ngcontent-%COMP%]   .socialIcons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  filter: invert(100%);\n}\n[_nghost-%COMP%]   .contact-us[_ngcontent-%COMP%]   .socialIcons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transition: filter 0.3s;\n}\n[_nghost-%COMP%]   .contact-us[_ngcontent-%COMP%]   .socialIcons[_ngcontent-%COMP%]   .instagram[_ngcontent-%COMP%]::before {\n  background: #a17357;\n  background: radial-gradient(circle farthest-corner at 35% 100%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 10% 140%, #feda7e, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e42e66 50%, #fa5332 70%, #ffdc80 100%);\n}\n[_nghost-%COMP%]   .contact-us[_ngcontent-%COMP%]   .socialIcons[_ngcontent-%COMP%]   .youtube[_ngcontent-%COMP%]::before {\n  background: #f00;\n}\n[_nghost-%COMP%]   .contact-us[_ngcontent-%COMP%]   .socialIcons[_ngcontent-%COMP%]   .twitter[_ngcontent-%COMP%]::before {\n  background: #55acee;\n}\n[_nghost-%COMP%]   .contact-us[_ngcontent-%COMP%]   .socialIcons[_ngcontent-%COMP%]   .linkedin[_ngcontent-%COMP%]::before {\n  background: #0077b5;\n}\n[_nghost-%COMP%]   .contact-us[_ngcontent-%COMP%]   .socialIcons[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 0.5em;\n}\n[_nghost-%COMP%]   .contact-us[_ngcontent-%COMP%]   .socialIcons[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: 0.5em;\n}\n[_nghost-%COMP%]   .links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 0.8125em;\n}\n[_nghost-%COMP%]   .links[_ngcontent-%COMP%], [_nghost-%COMP%]   .links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n[_nghost-%COMP%]   .links[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:last-child)::after {\n  content: \"|\";\n  padding: 0 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBRUEsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQURKO0FBSUU7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FBRko7QUFLRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUhKO0FBS0k7RUFLRSxvQkFBQTtBQVBOO0FBR007RUFDRSxnQkFBQTtBQURSO0FBT0k7RUFDRSxhQUFBO0FBTE47QUFTTTtFQUNFLHNCQUFBO0tBQUEsbUJBQUE7RUFDQSwwQkFBQTtLQUFBLHVCQUFBO0VBQ0EsK0ZBQUE7RUFDQSxhQUFBO0FBUFI7QUFVTTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBUlI7QUFVUTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7QUFSVjtBQVdRO0VBQ0UsVUFBQTtBQVRWO0FBYU07RUFDRSxvQkFBQTtBQVhSO0FBY007RUFDRSx1QkFBQTtBQVpSO0FBZU07RUFDRSxtQkFBQTtFQUNBLGdvQkFBQTtBQWJSO0FBZ0JNO0VBQ0UsZ0JBQUE7QUFkUjtBQWlCTTtFQUNFLG1CQUFBO0FBZlI7QUFrQk07RUFDRSxtQkFBQTtBQWhCUjtBQXNCUTtFQUNFLG1CQUFBO0FBcEJWO0FBdUJRO0VBQ0Usa0JBQUE7QUFyQlY7QUEyQkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQXpCSjtBQTBCSTtFQUNFLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUF4Qk47QUE4Qk07RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUE1QlIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLmZvb3RlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMTcwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZzogMCAxcmVtO1xuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuXG4gICAgbWluLWhlaWdodDogOC43NXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAuZm9vdGVyLWlubmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmNvbnRhY3QtdXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIC5oZWFkIHtcbiAgICAgIC5maXJzdC13b3JkIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgIH1cblxuICAgICAgbWFyZ2luLWJvdHRvbTogMC44ZW07XG4gICAgfVxuXG4gICAgLnNvY2lhbEljb25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICR0cmFuc2l0aW9uOiAwLjNzO1xuXG4gICAgICBpbWcge1xuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgZmlsdGVyOiBpbnZlcnQoODElKSBzZXBpYSg2MCUpIHNhdHVyYXRlKDE2MDUlKSBodWUtcm90YXRlKDhkZWcpIGJyaWdodG5lc3MoMTAwJSkgY29udHJhc3QoMTA2JSk7XG4gICAgICAgIGhlaWdodDogMS4xZW07XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGhlaWdodDogMnJlbTtcbiAgICAgICAgbWluLXdpZHRoOiAxLjg3NXJlbTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDQwLCA0MCwgNDApO1xuXG4gICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgJHRyYW5zaXRpb247XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXI6OmJlZm9yZSB7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBhOmhvdmVyIGltZyB7XG4gICAgICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpO1xuICAgICAgfVxuXG4gICAgICBpbWcge1xuICAgICAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgJHRyYW5zaXRpb247XG4gICAgICB9XG5cbiAgICAgIC5pbnN0YWdyYW06OmJlZm9yZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNhMTczNTc7XG4gICAgICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgZmFydGhlc3QtY29ybmVyIGF0IDM1JSAxMDAlLCAjZmVjNTY0LCB0cmFuc3BhcmVudCA1MCUpLCByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGZhcnRoZXN0LWNvcm5lciBhdCAxMCUgMTQwJSwgI2ZlZGE3ZSwgdHJhbnNwYXJlbnQgNTAlKSwgcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgZmFydGhlc3QtY29ybmVyIGF0IDAgLTI1JSwgIzUyNThjZiwgdHJhbnNwYXJlbnQgNTAlKSwgcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgZmFydGhlc3QtY29ybmVyIGF0IDIwJSAtNTAlLCAjNTI1OGNmLCB0cmFuc3BhcmVudCA1MCUpLCByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBmYXJ0aGVzdC1jb3JuZXIgYXQgMTAwJSAwLCAjODkzZGMyLCB0cmFuc3BhcmVudCA1MCUpLCByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBmYXJ0aGVzdC1jb3JuZXIgYXQgNjAlIC0yMCUsICM4OTNkYzIsIHRyYW5zcGFyZW50IDUwJSksIHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGZhcnRoZXN0LWNvcm5lciBhdCAxMDAlIDEwMCUsICNkOTMxN2EsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KCM2NTU5Y2EsICNiYzMxOGYgMzAlLCAjZTQyZTY2IDUwJSwgI2ZhNTMzMiA3MCUsICNmZmRjODAgMTAwJSk7XG4gICAgICB9XG5cbiAgICAgIC55b3V0dWJlOjpiZWZvcmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjAwO1xuICAgICAgfVxuXG4gICAgICAudHdpdHRlcjo6YmVmb3JlIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzU1YWNlZTtcbiAgICAgIH1cblxuICAgICAgLmxpbmtlZGluOjpiZWZvcmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDA3N2I1O1xuICAgICAgfVxuXG4gICAgICAmID4gKiB7XG4gICAgICAgICRzcGFjZTogMWVtO1xuXG4gICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAkc3BhY2UgLyAyO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6ICRzcGFjZSAvIDI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubGlua3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDAuODEyNWVtO1xuICAgICYsIGxpIHtcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgIH1cblxuICAgICRzcGFjZTogMWVtO1xuXG4gICAgPiAqOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnfCc7XG4gICAgICAgIHBhZGRpbmc6IDAgJHNwYWNlIC8gMjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-footer',
            templateUrl: './footer.component.html',
            styleUrls: ['./footer.component.scss']
          }]
        }], function () {
          return [{
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "hk9R":
    /*!*****************************************************!*\
      !*** ./src/generated/api/api/components.service.ts ***!
      \*****************************************************/

    /*! exports provided: ComponentsService */

    /***/
    function hk9R(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentsService", function () {
        return ComponentsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../encoder */
      "i0KE");
      /* harmony import */


      var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../variables */
      "G5Mf");
      /* harmony import */


      var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../configuration */
      "PKcu");
      /**
       *
       * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
       *
       * The version of the OpenAPI document: 0.0.0
       *
       *
       * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
       * https://openapi-generator.tech
       * Do not edit the class manually.
       */

      /* tslint:disable:no-unused-variable member-ordering */


      var ComponentsService = /*#__PURE__*/function () {
        function ComponentsService(httpClient, basePath, configuration) {
          _classCallCheck(this, ComponentsService);

          this.httpClient = httpClient;
          this.basePath = 'http://localhost';
          this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();

          if (configuration) {
            this.configuration = configuration;
          }

          if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
              basePath = this.basePath;
            }

            this.configuration.basePath = basePath;
          }

          this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpParameterCodec"]();
        }

        _createClass(ComponentsService, [{
          key: "addToHttpParams",
          value: function addToHttpParams(httpParams, value, key) {
            if (typeof value === "object" && value instanceof Date === false) {
              httpParams = this.addToHttpParamsRecursive(httpParams, value);
            } else {
              httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
            }

            return httpParams;
          }
        }, {
          key: "addToHttpParamsRecursive",
          value: function addToHttpParamsRecursive(httpParams, value, key) {
            var _this51 = this;

            if (value == null) {
              return httpParams;
            }

            if (typeof value === "object") {
              if (Array.isArray(value)) {
                value.forEach(function (elem) {
                  return httpParams = _this51.addToHttpParamsRecursive(httpParams, elem, key);
                });
              } else if (value instanceof Date) {
                if (key != null) {
                  httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                } else {
                  throw Error("key may not be null if value is Date");
                }
              } else {
                Object.keys(value).forEach(function (k) {
                  return httpParams = _this51.addToHttpParamsRecursive(httpParams, value[k], key != null ? "".concat(key, ".").concat(k) : k);
                });
              }
            } else if (key != null) {
              httpParams = httpParams.append(key, value);
            } else {
              throw Error("key may not be null if value is not object or array");
            }

            return httpParams;
          }
        }, {
          key: "componentsList",
          value: function componentsList() {
            var observe = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'body';
            var reportProgress = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var options = arguments.length > 2 ? arguments[2] : undefined;
            var headers = this.defaultHeaders;
            var credential; // authentication (jwtAuth) required

            credential = this.configuration.lookupCredential('jwtAuth');

            if (credential) {
              headers = headers.set('Authorization', 'Bearer ' + credential);
            }

            var httpHeaderAcceptSelected = options && options.httpHeaderAccept;

            if (httpHeaderAcceptSelected === undefined) {
              // to determine the Accept header
              var httpHeaderAccepts = ['application/json'];
              httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            }

            if (httpHeaderAcceptSelected !== undefined) {
              headers = headers.set('Accept', httpHeaderAcceptSelected);
            }

            var responseType = 'json';

            if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
              responseType = 'text';
            }

            return this.httpClient.get("".concat(this.configuration.basePath, "/backend/masterdata/components/"), {
              responseType: responseType,
              withCredentials: this.configuration.withCredentials,
              headers: headers,
              observe: observe,
              reportProgress: reportProgress
            });
          }
        }, {
          key: "componentsList2",
          value: function componentsList2(sampleTypeId, speciesId) {
            var observe = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'body';
            var reportProgress = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
            var options = arguments.length > 4 ? arguments[4] : undefined;

            if (sampleTypeId === null || sampleTypeId === undefined) {
              throw new Error('Required parameter sampleTypeId was null or undefined when calling componentsList2.');
            }

            if (speciesId === null || speciesId === undefined) {
              throw new Error('Required parameter speciesId was null or undefined when calling componentsList2.');
            }

            var headers = this.defaultHeaders;
            var credential; // authentication (jwtAuth) required

            credential = this.configuration.lookupCredential('jwtAuth');

            if (credential) {
              headers = headers.set('Authorization', 'Bearer ' + credential);
            }

            var httpHeaderAcceptSelected = options && options.httpHeaderAccept;

            if (httpHeaderAcceptSelected === undefined) {
              // to determine the Accept header
              var httpHeaderAccepts = ['application/json'];
              httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            }

            if (httpHeaderAcceptSelected !== undefined) {
              headers = headers.set('Accept', httpHeaderAcceptSelected);
            }

            var responseType = 'json';

            if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
              responseType = 'text';
            }

            return this.httpClient.get("".concat(this.configuration.basePath, "/backend/masterdata/components/").concat(encodeURIComponent(String(speciesId)), "/").concat(encodeURIComponent(String(sampleTypeId)), "/"), {
              responseType: responseType,
              withCredentials: this.configuration.withCredentials,
              headers: headers,
              observe: observe,
              reportProgress: reportProgress
            });
          }
        }]);

        return ComponentsService;
      }();

      ComponentsService.ɵfac = function ComponentsService_Factory(t) {
        return new (t || ComponentsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], 8));
      };

      ComponentsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ComponentsService,
        factory: ComponentsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"]]
            }]
          }, {
            type: _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "i0KE":
    /*!**************************************!*\
      !*** ./src/generated/api/encoder.ts ***!
      \**************************************/

    /*! exports provided: CustomHttpParameterCodec */

    /***/
    function i0KE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomHttpParameterCodec", function () {
        return CustomHttpParameterCodec;
      });
      /**
       * Custom HttpParameterCodec
       * Workaround for https://github.com/angular/angular/issues/18261
       */


      var CustomHttpParameterCodec = /*#__PURE__*/function () {
        function CustomHttpParameterCodec() {
          _classCallCheck(this, CustomHttpParameterCodec);
        }

        _createClass(CustomHttpParameterCodec, [{
          key: "encodeKey",
          value: function encodeKey(k) {
            return encodeURIComponent(k);
          }
        }, {
          key: "encodeValue",
          value: function encodeValue(v) {
            return encodeURIComponent(v);
          }
        }, {
          key: "decodeKey",
          value: function decodeKey(k) {
            return decodeURIComponent(k);
          }
        }, {
          key: "decodeValue",
          value: function decodeValue(v) {
            return decodeURIComponent(v);
          }
        }]);

        return CustomHttpParameterCodec;
      }();
      /***/

    },

    /***/
    "iHgs":
    /*!**********************************************************************!*\
      !*** ./src/generated/api/model/userAssessmentSampleContamination.ts ***!
      \**********************************************************************/

    /*! no exports provided */

    /***/
    function iHgs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /**
       *
       * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
       *
       * The version of the OpenAPI document: 0.0.0
       *
       *
       * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
       * https://openapi-generator.tech
       * Do not edit the class manually.
       */

      /***/

    },

    /***/
    "jWwe":
    /*!**************************************************!*\
      !*** ./src/generated/api/model/contactPerson.ts ***!
      \**************************************************/

    /*! no exports provided */

    /***/
    function jWwe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /**
       *
       * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
       *
       * The version of the OpenAPI document: 0.0.0
       *
       *
       * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
       * https://openapi-generator.tech
       * Do not edit the class manually.
       */

      /***/

    },

    /***/
    "kCo0":
    /*!**************************************************!*\
      !*** ./src/app/services/access-token.service.ts ***!
      \**************************************************/

    /*! exports provided: AccessTokenService */

    /***/
    function kCo0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccessTokenService", function () {
        return AccessTokenService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _util_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../util/data */
      "FOGl");
      /* harmony import */


      var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! jwt-decode */
      "EjJx");
      /* harmony import */


      var _local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./local-storage.service */
      "DRYZ");

      var AccessTokenService = /*#__PURE__*/function () {
        function AccessTokenService(localStorageService) {
          _classCallCheck(this, AccessTokenService);

          this.localStorageService = localStorageService;
          this.username$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
          this.storedToken = this.localStorageService.newHandle('risk.token', function (raw) {
            var jwts = AccessTokenService.readToken(raw);

            if (jwts == null) {
              return null;
            } else {
              return AccessTokenService.parseJwts(jwts);
            }
          }, function (token) {
            return JSON.stringify({
              refresh: token.refresh.token,
              access: token.access.token
            });
          });
          this.storedToken.subscribe();
        }

        _createClass(AccessTokenService, [{
          key: "currentAccessToken",
          value: function currentAccessToken() {
            var _a, _b;

            return (_b = (_a = this.storedToken.currentValue) === null || _a === void 0 ? void 0 : _a.access) === null || _b === void 0 ? void 0 : _b.token;
          }
        }, {
          key: "tokens",
          get: function get() {
            return this.storedToken.value;
          }
        }, {
          key: "setTokens",
          value: function setTokens(pair) {
            this.storedToken.setValue(pair == null ? null : AccessTokenService.parseJwts(pair));
          }
        }], [{
          key: "readToken",
          value: function readToken(raw) {
            try {
              var parsed = JSON.parse(raw);
              return Object(_util_data__WEBPACK_IMPORTED_MODULE_2__["isRawTokenPair"])(parsed) ? parsed : null;
            } catch (e) {
              console.error('Failed parsing token from local storage', e);
              return null;
            }
          }
        }, {
          key: "parseJwts",
          value: function parseJwts(pair) {
            var access = AccessTokenService.parseJwt(pair.access);
            var refresh = AccessTokenService.parseJwt(pair.refresh);
            return access == null || refresh == null ? null : {
              access: access,
              refresh: refresh
            };
          }
        }, {
          key: "parseJwt",
          value: function parseJwt(token) {
            try {
              var decoded = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_3__["default"])(token);
              var exp = decoded['exp'];

              if (typeof exp !== 'number') {
                console.error('JWT has no valid exp', exp);
                return null;
              }

              var expires = new Date(exp * 1000);
              var rawUserId = decoded['user_id'];
              var userId = rawUserId == null || typeof rawUserId !== 'string' && typeof rawUserId !== 'number' ? null : rawUserId;
              return {
                expires: expires,
                token: token,
                userId: userId
              };
            } catch (e) {
              console.error('Failed decoding JWT', e);
              return null;
            }
          }
        }]);

        return AccessTokenService;
      }();

      AccessTokenService.ɵfac = function AccessTokenService_Factory(t) {
        return new (t || AccessTokenService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]));
      };

      AccessTokenService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AccessTokenService,
        factory: AccessTokenService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccessTokenService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "kyOO":
    /*!**********************************************!*\
      !*** ./src/app/services/language.service.ts ***!
      \**********************************************/

    /*! exports provided: LanguageService */

    /***/
    function kyOO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LanguageService", function () {
        return LanguageService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _generated_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../generated/api */
      "UIhn");
      /* harmony import */


      var _current_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./current-language.service */
      "pBAh");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var LanguageService = /*#__PURE__*/function () {
        function LanguageService(languagesService, currentLanguageService, translateService) {
          var _this52 = this;

          _classCallCheck(this, LanguageService);

          this.languagesService = languagesService;
          this.currentLanguageService = currentLanguageService;
          this.translateService = translateService;
          var languages = this.languagesService.languagesRetrieve().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["single"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (apiLang) {
            return LanguageService.parseApiLanguages(apiLang);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["publishReplay"])(1));
          languages.connect();
          this.knownLanguages = languages;
          this.currentLanguage = this.currentLanguageService.currentLanguage.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (currentLanguage) {
            if (currentLanguage == null) {
              var languageChange = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'languagechange').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])(0));
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([_this52.knownLanguages, languageChange]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_ref25) {
                var _ref26 = _slicedToArray(_ref25, 1),
                    knownLanguages = _ref26[0];

                var browserLanguages = LanguageService.getBrowserLanguagePreferences();

                var _iterator6 = _createForOfIteratorHelper(browserLanguages),
                    _step6;

                try {
                  var _loop = function _loop() {
                    var bl = _step6.value;
                    var foundLanguage = knownLanguages.find(function (kl) {
                      return LanguageService.languageMatch(bl, kl.id, true);
                    });

                    if (foundLanguage != null) {
                      return {
                        v: foundLanguage.id
                      };
                    }
                  },
                      _ret;

                  for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                    _ret = _loop();
                    if (_ret) return _ret.v;
                  }
                } catch (err) {
                  _iterator6.e(err);
                } finally {
                  _iterator6.f();
                }

                var _iterator7 = _createForOfIteratorHelper(browserLanguages),
                    _step7;

                try {
                  var _loop2 = function _loop2() {
                    var bl = _step7.value;
                    var foundLanguage = knownLanguages.find(function (kl) {
                      return LanguageService.languageMatch(bl, kl.id, false);
                    });

                    if (foundLanguage != null) {
                      return {
                        v: foundLanguage.id
                      };
                    }
                  },
                      _ret2;

                  for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                    _ret2 = _loop2();
                    if (_ret2) return _ret2.v;
                  }
                } catch (err) {
                  _iterator7.e(err);
                } finally {
                  _iterator7.f();
                }

                return knownLanguages[0].id;
              }));
            } else {
              return [currentLanguage];
            }
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])());
          this.currentLanguage.subscribe(function (currentLanguage) {
            _this52.translateService.use(currentLanguage);
          });
        }

        _createClass(LanguageService, [{
          key: "setLanguage",
          value: function setLanguage(language) {
            this.currentLanguageService.setLanguage(language);
          }
        }], [{
          key: "languageMatch",
          value: function languageMatch(browserLang, apiLang, strict) {
            if (strict) {
              return browserLang.toLowerCase() === apiLang.toLowerCase();
            }

            var browserIdx = browserLang.indexOf('-');
            var apiIdx = apiLang.indexOf('-');

            if (browserIdx >= 0 && apiIdx >= 0) {
              return browserLang.toLowerCase() === apiLang.toLowerCase();
            } else {
              var browserSub = browserIdx >= 0 ? browserLang.substring(0, browserIdx) : browserLang;
              var apiSub = apiIdx >= 0 ? apiLang.substring(0, apiIdx) : apiLang;
              return browserSub.toLowerCase() === apiSub.toLowerCase();
            }
          }
        }, {
          key: "getBrowserLanguagePreferences",
          value: function getBrowserLanguagePreferences() {
            if (window.navigator.languages) {
              return window.navigator.languages;
            } else if (window.navigator.language) {
              return [window.navigator.language];
            } else {
              return [];
            }
          }
        }, {
          key: "parseApiLanguages",
          value: function parseApiLanguages(apiLang) {
            if (!Array.isArray(apiLang)) {
              throw new Error('Cannot parse API languages');
            }

            return apiLang.map(function (el) {
              if (!Array.isArray(el) || el.length !== 3 || el.some(function (l) {
                return typeof l !== 'string';
              })) {
                throw new Error('Cannot parse API languages');
              }

              return {
                id: el[0],
                englishName: el[1],
                localName: el[2]
              };
            });
          }
        }]);

        return LanguageService;
      }();

      LanguageService.ɵfac = function LanguageService_Factory(t) {
        return new (t || LanguageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_generated_api__WEBPACK_IMPORTED_MODULE_3__["LanguagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_current_language_service__WEBPACK_IMPORTED_MODULE_4__["CurrentLanguageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]));
      };

      LanguageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LanguageService,
        factory: LanguageService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LanguageService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _generated_api__WEBPACK_IMPORTED_MODULE_3__["LanguagesService"]
          }, {
            type: _current_language_service__WEBPACK_IMPORTED_MODULE_4__["CurrentLanguageService"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "l0ZV":
    /*!**********************************************!*\
      !*** ./src/generated/api/api/api.service.ts ***!
      \**********************************************/

    /*! exports provided: ApiService */

    /***/
    function l0ZV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiService", function () {
        return ApiService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../encoder */
      "i0KE");
      /* harmony import */


      var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../variables */
      "G5Mf");
      /* harmony import */


      var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../configuration */
      "PKcu");
      /**
       *
       * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
       *
       * The version of the OpenAPI document: 0.0.0
       *
       *
       * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
       * https://openapi-generator.tech
       * Do not edit the class manually.
       */

      /* tslint:disable:no-unused-variable member-ordering */


      var ApiService = /*#__PURE__*/function () {
        function ApiService(httpClient, basePath, configuration) {
          _classCallCheck(this, ApiService);

          this.httpClient = httpClient;
          this.basePath = 'http://localhost';
          this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();

          if (configuration) {
            this.configuration = configuration;
          }

          if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
              basePath = this.basePath;
            }

            this.configuration.basePath = basePath;
          }

          this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpParameterCodec"]();
        }

        _createClass(ApiService, [{
          key: "addToHttpParams",
          value: function addToHttpParams(httpParams, value, key) {
            if (typeof value === "object" && value instanceof Date === false) {
              httpParams = this.addToHttpParamsRecursive(httpParams, value);
            } else {
              httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
            }

            return httpParams;
          }
        }, {
          key: "addToHttpParamsRecursive",
          value: function addToHttpParamsRecursive(httpParams, value, key) {
            var _this53 = this;

            if (value == null) {
              return httpParams;
            }

            if (typeof value === "object") {
              if (Array.isArray(value)) {
                value.forEach(function (elem) {
                  return httpParams = _this53.addToHttpParamsRecursive(httpParams, elem, key);
                });
              } else if (value instanceof Date) {
                if (key != null) {
                  httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                } else {
                  throw Error("key may not be null if value is Date");
                }
              } else {
                Object.keys(value).forEach(function (k) {
                  return httpParams = _this53.addToHttpParamsRecursive(httpParams, value[k], key != null ? "".concat(key, ".").concat(k) : k);
                });
              }
            } else if (key != null) {
              httpParams = httpParams.append(key, value);
            } else {
              throw Error("key may not be null if value is not object or array");
            }

            return httpParams;
          }
        }, {
          key: "apiPasswordResetConfirmCreate",
          value: function apiPasswordResetConfirmCreate(passwordToken) {
            var observe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'body';
            var reportProgress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var options = arguments.length > 3 ? arguments[3] : undefined;

            if (passwordToken === null || passwordToken === undefined) {
              throw new Error('Required parameter passwordToken was null or undefined when calling apiPasswordResetConfirmCreate.');
            }

            var headers = this.defaultHeaders;
            var credential; // authentication (jwtAuth) required

            credential = this.configuration.lookupCredential('jwtAuth');

            if (credential) {
              headers = headers.set('Authorization', 'Bearer ' + credential);
            }

            var httpHeaderAcceptSelected = options && options.httpHeaderAccept;

            if (httpHeaderAcceptSelected === undefined) {
              // to determine the Accept header
              var httpHeaderAccepts = ['application/json'];
              httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            }

            if (httpHeaderAcceptSelected !== undefined) {
              headers = headers.set('Accept', httpHeaderAcceptSelected);
            } // to determine the Content-Type header


            var consumes = ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);

            if (httpContentTypeSelected !== undefined) {
              headers = headers.set('Content-Type', httpContentTypeSelected);
            }

            var responseType = 'json';

            if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
              responseType = 'text';
            }

            return this.httpClient.post("".concat(this.configuration.basePath, "/backend/masterdata/api/password_reset/confirm/"), passwordToken, {
              responseType: responseType,
              withCredentials: this.configuration.withCredentials,
              headers: headers,
              observe: observe,
              reportProgress: reportProgress
            });
          }
        }, {
          key: "apiPasswordResetCreate",
          value: function apiPasswordResetCreate(email) {
            var observe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'body';
            var reportProgress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var options = arguments.length > 3 ? arguments[3] : undefined;

            if (email === null || email === undefined) {
              throw new Error('Required parameter email was null or undefined when calling apiPasswordResetCreate.');
            }

            var headers = this.defaultHeaders;
            var credential; // authentication (jwtAuth) required

            credential = this.configuration.lookupCredential('jwtAuth');

            if (credential) {
              headers = headers.set('Authorization', 'Bearer ' + credential);
            }

            var httpHeaderAcceptSelected = options && options.httpHeaderAccept;

            if (httpHeaderAcceptSelected === undefined) {
              // to determine the Accept header
              var httpHeaderAccepts = ['application/json'];
              httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            }

            if (httpHeaderAcceptSelected !== undefined) {
              headers = headers.set('Accept', httpHeaderAcceptSelected);
            } // to determine the Content-Type header


            var consumes = ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);

            if (httpContentTypeSelected !== undefined) {
              headers = headers.set('Content-Type', httpContentTypeSelected);
            }

            var responseType = 'json';

            if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
              responseType = 'text';
            }

            return this.httpClient.post("".concat(this.configuration.basePath, "/backend/masterdata/api/password_reset/"), email, {
              responseType: responseType,
              withCredentials: this.configuration.withCredentials,
              headers: headers,
              observe: observe,
              reportProgress: reportProgress
            });
          }
        }, {
          key: "apiPasswordResetValidateTokenCreate",
          value: function apiPasswordResetValidateTokenCreate(token) {
            var observe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'body';
            var reportProgress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var options = arguments.length > 3 ? arguments[3] : undefined;

            if (token === null || token === undefined) {
              throw new Error('Required parameter token was null or undefined when calling apiPasswordResetValidateTokenCreate.');
            }

            var headers = this.defaultHeaders;
            var credential; // authentication (jwtAuth) required

            credential = this.configuration.lookupCredential('jwtAuth');

            if (credential) {
              headers = headers.set('Authorization', 'Bearer ' + credential);
            }

            var httpHeaderAcceptSelected = options && options.httpHeaderAccept;

            if (httpHeaderAcceptSelected === undefined) {
              // to determine the Accept header
              var httpHeaderAccepts = ['application/json'];
              httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            }

            if (httpHeaderAcceptSelected !== undefined) {
              headers = headers.set('Accept', httpHeaderAcceptSelected);
            } // to determine the Content-Type header


            var consumes = ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);

            if (httpContentTypeSelected !== undefined) {
              headers = headers.set('Content-Type', httpContentTypeSelected);
            }

            var responseType = 'json';

            if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
              responseType = 'text';
            }

            return this.httpClient.post("".concat(this.configuration.basePath, "/backend/masterdata/api/password_reset/validate_token/"), token, {
              responseType: responseType,
              withCredentials: this.configuration.withCredentials,
              headers: headers,
              observe: observe,
              reportProgress: reportProgress
            });
          }
        }, {
          key: "apiTokenCreate",
          value: function apiTokenCreate(tokenObtainPair) {
            var observe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'body';
            var reportProgress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var options = arguments.length > 3 ? arguments[3] : undefined;

            if (tokenObtainPair === null || tokenObtainPair === undefined) {
              throw new Error('Required parameter tokenObtainPair was null or undefined when calling apiTokenCreate.');
            }

            var headers = this.defaultHeaders;
            var httpHeaderAcceptSelected = options && options.httpHeaderAccept;

            if (httpHeaderAcceptSelected === undefined) {
              // to determine the Accept header
              var httpHeaderAccepts = ['application/json'];
              httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            }

            if (httpHeaderAcceptSelected !== undefined) {
              headers = headers.set('Accept', httpHeaderAcceptSelected);
            } // to determine the Content-Type header


            var consumes = ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);

            if (httpContentTypeSelected !== undefined) {
              headers = headers.set('Content-Type', httpContentTypeSelected);
            }

            var responseType = 'json';

            if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
              responseType = 'text';
            }

            return this.httpClient.post("".concat(this.configuration.basePath, "/backend/masterdata/api/token/"), tokenObtainPair, {
              responseType: responseType,
              withCredentials: this.configuration.withCredentials,
              headers: headers,
              observe: observe,
              reportProgress: reportProgress
            });
          }
        }, {
          key: "apiTokenRefreshCreate",
          value: function apiTokenRefreshCreate(tokenRefresh) {
            var observe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'body';
            var reportProgress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var options = arguments.length > 3 ? arguments[3] : undefined;

            if (tokenRefresh === null || tokenRefresh === undefined) {
              throw new Error('Required parameter tokenRefresh was null or undefined when calling apiTokenRefreshCreate.');
            }

            var headers = this.defaultHeaders;
            var httpHeaderAcceptSelected = options && options.httpHeaderAccept;

            if (httpHeaderAcceptSelected === undefined) {
              // to determine the Accept header
              var httpHeaderAccepts = ['application/json'];
              httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            }

            if (httpHeaderAcceptSelected !== undefined) {
              headers = headers.set('Accept', httpHeaderAcceptSelected);
            } // to determine the Content-Type header


            var consumes = ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);

            if (httpContentTypeSelected !== undefined) {
              headers = headers.set('Content-Type', httpContentTypeSelected);
            }

            var responseType = 'json';

            if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
              responseType = 'text';
            }

            return this.httpClient.post("".concat(this.configuration.basePath, "/backend/masterdata/api/token/refresh/"), tokenRefresh, {
              responseType: responseType,
              withCredentials: this.configuration.withCredentials,
              headers: headers,
              observe: observe,
              reportProgress: reportProgress
            });
          }
        }, {
          key: "apiTokenVerifyCreate",
          value: function apiTokenVerifyCreate(tokenVerify) {
            var observe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'body';
            var reportProgress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var options = arguments.length > 3 ? arguments[3] : undefined;

            if (tokenVerify === null || tokenVerify === undefined) {
              throw new Error('Required parameter tokenVerify was null or undefined when calling apiTokenVerifyCreate.');
            }

            var headers = this.defaultHeaders;
            var httpHeaderAcceptSelected = options && options.httpHeaderAccept;

            if (httpHeaderAcceptSelected === undefined) {
              // to determine the Accept header
              var httpHeaderAccepts = ['application/json'];
              httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            }

            if (httpHeaderAcceptSelected !== undefined) {
              headers = headers.set('Accept', httpHeaderAcceptSelected);
            } // to determine the Content-Type header


            var consumes = ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);

            if (httpContentTypeSelected !== undefined) {
              headers = headers.set('Content-Type', httpContentTypeSelected);
            }

            var responseType = 'json';

            if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
              responseType = 'text';
            }

            return this.httpClient.post("".concat(this.configuration.basePath, "/backend/masterdata/api/token/verify/"), tokenVerify, {
              responseType: responseType,
              withCredentials: this.configuration.withCredentials,
              headers: headers,
              observe: observe,
              reportProgress: reportProgress
            });
          }
        }]);

        return ApiService;
      }();

      ApiService.ɵfac = function ApiService_Factory(t) {
        return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], 8));
      };

      ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ApiService,
        factory: ApiService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"]]
            }]
          }, {
            type: _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "n820":
    /*!************************************************!*\
      !*** ./src/generated/api/model/sampleTypes.ts ***!
      \************************************************/

    /*! no exports provided */

    /***/
    function n820(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /**
       *
       * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
       *
       * The version of the OpenAPI document: 0.0.0
       *
       *
       * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
       * https://openapi-generator.tech
       * Do not edit the class manually.
       */

      /***/

    },

    /***/
    "nqAl":
    /*!********************************************!*\
      !*** ./src/app/services/layout.service.ts ***!
      \********************************************/

    /*! exports provided: LayoutService */

    /***/
    function nqAl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutService", function () {
        return LayoutService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/layout */
      "0MNC");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var LayoutService = /*#__PURE__*/_createClass(function LayoutService(breakpointObserver) {
        _classCallCheck(this, LayoutService);

        this.breakpointObserver = breakpointObserver;
        this.stepperVerticalMode = breakpointObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Small, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XSmall]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
          return result.matches;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1));
      });

      LayoutService.ɵfac = function LayoutService_Factory(t) {
        return new (t || LayoutService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]));
      };

      LayoutService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LayoutService,
        factory: LayoutService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "nyO7":
    /*!***************************************************!*\
      !*** ./src/generated/api/api/database.service.ts ***!
      \***************************************************/

    /*! exports provided: DatabaseService */

    /***/
    function nyO7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatabaseService", function () {
        return DatabaseService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../encoder */
      "i0KE");
      /* harmony import */


      var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../variables */
      "G5Mf");
      /* harmony import */


      var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../configuration */
      "PKcu");
      /**
       *
       * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
       *
       * The version of the OpenAPI document: 0.0.0
       *
       *
       * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
       * https://openapi-generator.tech
       * Do not edit the class manually.
       */

      /* tslint:disable:no-unused-variable member-ordering */


      var DatabaseService = /*#__PURE__*/function () {
        function DatabaseService(httpClient, basePath, configuration) {
          _classCallCheck(this, DatabaseService);

          this.httpClient = httpClient;
          this.basePath = 'http://localhost';
          this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();

          if (configuration) {
            this.configuration = configuration;
          }

          if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
              basePath = this.basePath;
            }

            this.configuration.basePath = basePath;
          }

          this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpParameterCodec"]();
        }

        _createClass(DatabaseService, [{
          key: "addToHttpParams",
          value: function addToHttpParams(httpParams, value, key) {
            if (typeof value === "object" && value instanceof Date === false) {
              httpParams = this.addToHttpParamsRecursive(httpParams, value);
            } else {
              httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
            }

            return httpParams;
          }
        }, {
          key: "addToHttpParamsRecursive",
          value: function addToHttpParamsRecursive(httpParams, value, key) {
            var _this54 = this;

            if (value == null) {
              return httpParams;
            }

            if (typeof value === "object") {
              if (Array.isArray(value)) {
                value.forEach(function (elem) {
                  return httpParams = _this54.addToHttpParamsRecursive(httpParams, elem, key);
                });
              } else if (value instanceof Date) {
                if (key != null) {
                  httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                } else {
                  throw Error("key may not be null if value is Date");
                }
              } else {
                Object.keys(value).forEach(function (k) {
                  return httpParams = _this54.addToHttpParamsRecursive(httpParams, value[k], key != null ? "".concat(key, ".").concat(k) : k);
                });
              }
            } else if (key != null) {
              httpParams = httpParams.append(key, value);
            } else {
              throw Error("key may not be null if value is not object or array");
            }

            return httpParams;
          }
        }, {
          key: "databaseList",
          value: function databaseList(assessmentCreatedAtGt, assessmentCreatedAtGte, assessmentCreatedAtLt, assessmentCreatedAtLte, ordering, page, pageSize) {
            var observe = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 'body';
            var reportProgress = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : false;
            var options = arguments.length > 9 ? arguments[9] : undefined;
            var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({
              encoder: this.encoder
            });

            if (assessmentCreatedAtGt !== undefined && assessmentCreatedAtGt !== null) {
              queryParameters = this.addToHttpParams(queryParameters, assessmentCreatedAtGt, 'assessment__created_at__gt');
            }

            if (assessmentCreatedAtGte !== undefined && assessmentCreatedAtGte !== null) {
              queryParameters = this.addToHttpParams(queryParameters, assessmentCreatedAtGte, 'assessment__created_at__gte');
            }

            if (assessmentCreatedAtLt !== undefined && assessmentCreatedAtLt !== null) {
              queryParameters = this.addToHttpParams(queryParameters, assessmentCreatedAtLt, 'assessment__created_at__lt');
            }

            if (assessmentCreatedAtLte !== undefined && assessmentCreatedAtLte !== null) {
              queryParameters = this.addToHttpParams(queryParameters, assessmentCreatedAtLte, 'assessment__created_at__lte');
            }

            if (ordering !== undefined && ordering !== null) {
              queryParameters = this.addToHttpParams(queryParameters, ordering, 'ordering');
            }

            if (page !== undefined && page !== null) {
              queryParameters = this.addToHttpParams(queryParameters, page, 'page');
            }

            if (pageSize !== undefined && pageSize !== null) {
              queryParameters = this.addToHttpParams(queryParameters, pageSize, 'page_size');
            }

            var headers = this.defaultHeaders;
            var credential; // authentication (jwtAuth) required

            credential = this.configuration.lookupCredential('jwtAuth');

            if (credential) {
              headers = headers.set('Authorization', 'Bearer ' + credential);
            }

            var httpHeaderAcceptSelected = options && options.httpHeaderAccept;

            if (httpHeaderAcceptSelected === undefined) {
              // to determine the Accept header
              var httpHeaderAccepts = ['application/json'];
              httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            }

            if (httpHeaderAcceptSelected !== undefined) {
              headers = headers.set('Accept', httpHeaderAcceptSelected);
            }

            var responseType = 'json';

            if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
              responseType = 'text';
            }

            return this.httpClient.get("".concat(this.configuration.basePath, "/backend/masterdata/database/"), {
              params: queryParameters,
              responseType: responseType,
              withCredentials: this.configuration.withCredentials,
              headers: headers,
              observe: observe,
              reportProgress: reportProgress
            });
          }
        }]);

        return DatabaseService;
      }();

      DatabaseService.ɵfac = function DatabaseService_Factory(t) {
        return new (t || DatabaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], 8));
      };

      DatabaseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: DatabaseService,
        factory: DatabaseService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatabaseService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"]]
            }]
          }, {
            type: _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "pBAh":
    /*!******************************************************!*\
      !*** ./src/app/services/current-language.service.ts ***!
      \******************************************************/

    /*! exports provided: CurrentLanguageService */

    /***/
    function pBAh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CurrentLanguageService", function () {
        return CurrentLanguageService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./local-storage.service */
      "DRYZ");

      var CurrentLanguageService = /*#__PURE__*/function () {
        function CurrentLanguageService(localStorageService) {
          _classCallCheck(this, CurrentLanguageService);

          this.localStorageService = localStorageService;
          this.languageHandle = this.localStorageService.newHandle('risk.language', function (raw) {
            return raw;
          }, function (language) {
            return language;
          });
          this.languageHandle.subscribe();
        }

        _createClass(CurrentLanguageService, [{
          key: "currentLanguage",
          get: function get() {
            return this.languageHandle.value;
          }
        }, {
          key: "setLanguage",
          value: function setLanguage(language) {
            this.languageHandle.setValue(language);
          }
        }]);

        return CurrentLanguageService;
      }();

      CurrentLanguageService.ɵfac = function CurrentLanguageService_Factory(t) {
        return new (t || CurrentLanguageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_local_storage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"]));
      };

      CurrentLanguageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CurrentLanguageService,
        factory: CurrentLanguageService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrentLanguageService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _local_storage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "pmZa":
    /*!********************************************!*\
      !*** ./src/generated/api/model/species.ts ***!
      \********************************************/

    /*! no exports provided */

    /***/
    function pmZa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /**
       *
       * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
       *
       * The version of the OpenAPI document: 0.0.0
       *
       *
       * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
       * https://openapi-generator.tech
       * Do not edit the class manually.
       */

      /***/

    },

    /***/
    "rrZy":
    /*!******************************************!*\
      !*** ./src/generated/api/model/email.ts ***!
      \******************************************/

    /*! no exports provided */

    /***/
    function rrZy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /**
       *
       * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
       *
       * The version of the OpenAPI document: 0.0.0
       *
       *
       * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
       * https://openapi-generator.tech
       * Do not edit the class manually.
       */

      /***/

    },

    /***/
    "ruCz":
    /*!*******************************************************!*\
      !*** ./src/generated/api/api/translations.service.ts ***!
      \*******************************************************/

    /*! exports provided: TranslationsService */

    /***/
    function ruCz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TranslationsService", function () {
        return TranslationsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../encoder */
      "i0KE");
      /* harmony import */


      var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../variables */
      "G5Mf");
      /* harmony import */


      var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../configuration */
      "PKcu");
      /**
       *
       * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
       *
       * The version of the OpenAPI document: 0.0.0
       *
       *
       * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
       * https://openapi-generator.tech
       * Do not edit the class manually.
       */

      /* tslint:disable:no-unused-variable member-ordering */


      var TranslationsService = /*#__PURE__*/function () {
        function TranslationsService(httpClient, basePath, configuration) {
          _classCallCheck(this, TranslationsService);

          this.httpClient = httpClient;
          this.basePath = 'http://localhost';
          this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();

          if (configuration) {
            this.configuration = configuration;
          }

          if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
              basePath = this.basePath;
            }

            this.configuration.basePath = basePath;
          }

          this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpParameterCodec"]();
        }

        _createClass(TranslationsService, [{
          key: "addToHttpParams",
          value: function addToHttpParams(httpParams, value, key) {
            if (typeof value === "object" && value instanceof Date === false) {
              httpParams = this.addToHttpParamsRecursive(httpParams, value);
            } else {
              httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
            }

            return httpParams;
          }
        }, {
          key: "addToHttpParamsRecursive",
          value: function addToHttpParamsRecursive(httpParams, value, key) {
            var _this55 = this;

            if (value == null) {
              return httpParams;
            }

            if (typeof value === "object") {
              if (Array.isArray(value)) {
                value.forEach(function (elem) {
                  return httpParams = _this55.addToHttpParamsRecursive(httpParams, elem, key);
                });
              } else if (value instanceof Date) {
                if (key != null) {
                  httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                } else {
                  throw Error("key may not be null if value is Date");
                }
              } else {
                Object.keys(value).forEach(function (k) {
                  return httpParams = _this55.addToHttpParamsRecursive(httpParams, value[k], key != null ? "".concat(key, ".").concat(k) : k);
                });
              }
            } else if (key != null) {
              httpParams = httpParams.append(key, value);
            } else {
              throw Error("key may not be null if value is not object or array");
            }

            return httpParams;
          }
        }, {
          key: "translationsRetrieve",
          value: function translationsRetrieve() {
            var observe = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'body';
            var reportProgress = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var options = arguments.length > 2 ? arguments[2] : undefined;
            var headers = this.defaultHeaders;
            var credential; // authentication (jwtAuth) required

            credential = this.configuration.lookupCredential('jwtAuth');

            if (credential) {
              headers = headers.set('Authorization', 'Bearer ' + credential);
            }

            var httpHeaderAcceptSelected = options && options.httpHeaderAccept;

            if (httpHeaderAcceptSelected === undefined) {
              // to determine the Accept header
              var httpHeaderAccepts = [];
              httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            }

            if (httpHeaderAcceptSelected !== undefined) {
              headers = headers.set('Accept', httpHeaderAcceptSelected);
            }

            var responseType = 'json';

            if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
              responseType = 'text';
            }

            return this.httpClient.get("".concat(this.configuration.basePath, "/backend/masterdata/translations/"), {
              responseType: responseType,
              withCredentials: this.configuration.withCredentials,
              headers: headers,
              observe: observe,
              reportProgress: reportProgress
            });
          }
        }]);

        return TranslationsService;
      }();

      TranslationsService.ɵfac = function TranslationsService_Factory(t) {
        return new (t || TranslationsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], 8));
      };

      TranslationsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: TranslationsService,
        factory: TranslationsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TranslationsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"]]
            }]
          }, {
            type: _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "sDgk":
    /*!********************************************!*\
      !*** ./src/app/services/result.service.ts ***!
      \********************************************/

    /*! exports provided: ResultService */

    /***/
    function sDgk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResultService", function () {
        return ResultService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _generated_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../generated/api */
      "UIhn");

      var ResultService = /*#__PURE__*/function () {
        function ResultService(assessmentService) {
          _classCallCheck(this, ResultService);

          this.assessmentService = assessmentService;
        }

        _createClass(ResultService, [{
          key: "getResults",
          value: function getResults(_ref27) {
            var generalForm = _ref27.generalForm,
                samplesForm = _ref27.samplesForm,
                concentrationForm = _ref27.concentrationForm,
                selectedProductId = _ref27.selectedProductId;

            var _a, _b, _c, _d, _e;

            if (samplesForm.samples.length !== concentrationForm.entries.length) {
              console.error('samplesForm and concentrationForm mismatch: ', samplesForm, concentrationForm);
              throw new Error('samples.length must be concentrations.length');
            }

            var apiInput = {
              customer_name: (_a = generalForm.customerName) !== null && _a !== void 0 ? _a : undefined,
              customer: (_b = generalForm.customerId) !== null && _b !== void 0 ? _b : null,
              country: generalForm.countryId,
              species: generalForm.speciesId,
              test_laboratory: (_c = generalForm.testLaboratoryId) !== null && _c !== void 0 ? _c : undefined,
              sample_type: generalForm.sampleTypeId,
              email_recipients: (_e = (_d = generalForm.recipientEmails) === null || _d === void 0 ? void 0 : _d.map(function (email) {
                return {
                  address: email
                };
              })) !== null && _e !== void 0 ? _e : [],
              samples: samplesForm.samples.map(function (sample, index) {
                var concentrationEntry = concentrationForm.entries[index];
                return {
                  name: sample.sampleName,
                  inclusion_rate: sample.inclusionRate,
                  component: sample.componentId,
                  contaminations: concentrationEntry.concentrations.map(function (concentration) {
                    return {
                      mycotoxin: concentration.mycotoxinId,
                      value: concentration.value,
                      level: undefined
                    };
                  }),
                  risk: undefined,
                  product_recommendation: undefined,
                  fcr_factor: undefined,
                  bw_factor: undefined
                };
              }),
              selected_product: selectedProductId,
              moving_risks: undefined,
              total_fcr_factor: undefined,
              total_bw_factor: undefined,
              secret_token: undefined,
              interaction: undefined,
              comments: undefined,
              author: undefined,
              total_risk: undefined,
              total_product_recommendation: undefined,
              created_at: undefined,
              id: undefined
            };
            return this.assessmentService.assessmentCreate(apiInput);
          }
        }]);

        return ResultService;
      }();

      ResultService.ɵfac = function ResultService_Factory(t) {
        return new (t || ResultService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_generated_api__WEBPACK_IMPORTED_MODULE_1__["AssessmentService"]));
      };

      ResultService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ResultService,
        factory: ResultService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResultService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _generated_api__WEBPACK_IMPORTED_MODULE_1__["AssessmentService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "tsFp":
    /*!*****************************************************!*\
      !*** ./src/generated/api/api/assessment.service.ts ***!
      \*****************************************************/

    /*! exports provided: AssessmentService */

    /***/
    function tsFp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssessmentService", function () {
        return AssessmentService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../encoder */
      "i0KE");
      /* harmony import */


      var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../variables */
      "G5Mf");
      /* harmony import */


      var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../configuration */
      "PKcu");
      /**
       *
       * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
       *
       * The version of the OpenAPI document: 0.0.0
       *
       *
       * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
       * https://openapi-generator.tech
       * Do not edit the class manually.
       */

      /* tslint:disable:no-unused-variable member-ordering */


      var AssessmentService = /*#__PURE__*/function () {
        function AssessmentService(httpClient, basePath, configuration) {
          _classCallCheck(this, AssessmentService);

          this.httpClient = httpClient;
          this.basePath = 'http://localhost';
          this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();

          if (configuration) {
            this.configuration = configuration;
          }

          if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
              basePath = this.basePath;
            }

            this.configuration.basePath = basePath;
          }

          this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpParameterCodec"]();
        }

        _createClass(AssessmentService, [{
          key: "addToHttpParams",
          value: function addToHttpParams(httpParams, value, key) {
            if (typeof value === "object" && value instanceof Date === false) {
              httpParams = this.addToHttpParamsRecursive(httpParams, value);
            } else {
              httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
            }

            return httpParams;
          }
        }, {
          key: "addToHttpParamsRecursive",
          value: function addToHttpParamsRecursive(httpParams, value, key) {
            var _this56 = this;

            if (value == null) {
              return httpParams;
            }

            if (typeof value === "object") {
              if (Array.isArray(value)) {
                value.forEach(function (elem) {
                  return httpParams = _this56.addToHttpParamsRecursive(httpParams, elem, key);
                });
              } else if (value instanceof Date) {
                if (key != null) {
                  httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                } else {
                  throw Error("key may not be null if value is Date");
                }
              } else {
                Object.keys(value).forEach(function (k) {
                  return httpParams = _this56.addToHttpParamsRecursive(httpParams, value[k], key != null ? "".concat(key, ".").concat(k) : k);
                });
              }
            } else if (key != null) {
              httpParams = httpParams.append(key, value);
            } else {
              throw Error("key may not be null if value is not object or array");
            }

            return httpParams;
          }
        }, {
          key: "assessmentCreate",
          value: function assessmentCreate(userAssessmentInput) {
            var observe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'body';
            var reportProgress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var options = arguments.length > 3 ? arguments[3] : undefined;

            if (userAssessmentInput === null || userAssessmentInput === undefined) {
              throw new Error('Required parameter userAssessmentInput was null or undefined when calling assessmentCreate.');
            }

            var headers = this.defaultHeaders;
            var credential; // authentication (jwtAuth) required

            credential = this.configuration.lookupCredential('jwtAuth');

            if (credential) {
              headers = headers.set('Authorization', 'Bearer ' + credential);
            }

            var httpHeaderAcceptSelected = options && options.httpHeaderAccept;

            if (httpHeaderAcceptSelected === undefined) {
              // to determine the Accept header
              var httpHeaderAccepts = ['application/json'];
              httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            }

            if (httpHeaderAcceptSelected !== undefined) {
              headers = headers.set('Accept', httpHeaderAcceptSelected);
            } // to determine the Content-Type header


            var consumes = ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);

            if (httpContentTypeSelected !== undefined) {
              headers = headers.set('Content-Type', httpContentTypeSelected);
            }

            var responseType = 'json';

            if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
              responseType = 'text';
            }

            return this.httpClient.post("".concat(this.configuration.basePath, "/backend/masterdata/assessment/"), userAssessmentInput, {
              responseType: responseType,
              withCredentials: this.configuration.withCredentials,
              headers: headers,
              observe: observe,
              reportProgress: reportProgress
            });
          }
        }, {
          key: "assessmentRetrieve",
          value: function assessmentRetrieve(id, secretToken) {
            var observe = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'body';
            var reportProgress = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
            var options = arguments.length > 4 ? arguments[4] : undefined;

            if (id === null || id === undefined) {
              throw new Error('Required parameter id was null or undefined when calling assessmentRetrieve.');
            }

            if (secretToken === null || secretToken === undefined) {
              throw new Error('Required parameter secretToken was null or undefined when calling assessmentRetrieve.');
            }

            var headers = this.defaultHeaders;
            var credential; // authentication (jwtAuth) required

            credential = this.configuration.lookupCredential('jwtAuth');

            if (credential) {
              headers = headers.set('Authorization', 'Bearer ' + credential);
            }

            var httpHeaderAcceptSelected = options && options.httpHeaderAccept;

            if (httpHeaderAcceptSelected === undefined) {
              // to determine the Accept header
              var httpHeaderAccepts = ['application/json'];
              httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            }

            if (httpHeaderAcceptSelected !== undefined) {
              headers = headers.set('Accept', httpHeaderAcceptSelected);
            }

            var responseType = 'json';

            if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
              responseType = 'text';
            }

            return this.httpClient.get("".concat(this.configuration.basePath, "/backend/masterdata/assessment/").concat(encodeURIComponent(String(id)), "/").concat(encodeURIComponent(String(secretToken)), "/"), {
              responseType: responseType,
              withCredentials: this.configuration.withCredentials,
              headers: headers,
              observe: observe,
              reportProgress: reportProgress
            });
          }
        }]);

        return AssessmentService;
      }();

      AssessmentService.ɵfac = function AssessmentService_Factory(t) {
        return new (t || AssessmentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], 8));
      };

      AssessmentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AssessmentService,
        factory: AssessmentService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AssessmentService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"]]
            }]
          }, {
            type: _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "uZfB":
    /*!***********************************************************************!*\
      !*** ./src/app/modules/components/header-cta/header-cta.component.ts ***!
      \***********************************************************************/

    /*! exports provided: HeaderCtaComponent */

    /***/
    function uZfB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderCtaComponent", function () {
        return HeaderCtaComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HeaderCtaComponent = /*#__PURE__*/function () {
        function HeaderCtaComponent() {
          _classCallCheck(this, HeaderCtaComponent);
        }

        _createClass(HeaderCtaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HeaderCtaComponent;
      }();

      HeaderCtaComponent.ɵfac = function HeaderCtaComponent_Factory(t) {
        return new (t || HeaderCtaComponent)();
      };

      HeaderCtaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderCtaComponent,
        selectors: [["app-header-cta"]],
        decls: 0,
        vars: 0,
        template: function HeaderCtaComponent_Template(rf, ctx) {},
        styles: [".header-cta[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n}\n.header-cta[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: block;\n  border: none;\n  background: none;\n  margin: 0 auto;\n  cursor: pointer;\n}\n.header-cta[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  padding: 2.5em 2.5em 3.75em;\n  height: 4.5em;\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21wb25lbnRzL2hlYWRlci1jdGEvaGVhZGVyLWN0YS5jb21wb25lbnQuc2NzcyIsInNyYy9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLG1CQ0ZZO0FEQ2Q7QUFHRTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQURKO0FBSUU7RUFDRSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUZKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jb21wb25lbnRzL2hlYWRlci1jdGEvaGVhZGVyLWN0YS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvY29sb3JzXCI7XG5cbi5oZWFkZXItY3RhIHtcbiAgYmFja2dyb3VuZDogJGV3U2Vjb25kYXJ5O1xuXG4gIGJ1dHRvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgaW1nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAyLjVlbSAyLjVlbSAzLjc1ZW07XG4gICAgaGVpZ2h0OiA0LjVlbTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbn0iLCIkZXdQcmltYXJ5OiAjZThlMTAwO1xuJGV3U2Vjb25kYXJ5OiAjZjVmNWY1O1xuJGV3VGV4dDogIzI4MjgyODtcblxuJGV3UHJpbWFyeVBhbGV0dGU6IChcbiAgICAgICAgNTAgOiAjZmNmYmUxLFxuICAgICAgICAxMDAgOiAjZjhmNmIzLFxuICAgICAgICAyMDAgOiAjZjRmMDgwLFxuICAgICAgICAzMDAgOiAjZWZlYTRkLFxuICAgICAgICA0MDAgOiAjZWJlNjI3LFxuICAgICAgICA1MDAgOiAjZThlMTAxLFxuICAgICAgICA2MDAgOiAjZTVkZDAxLFxuICAgICAgICA3MDAgOiAjZTJkOTAxLFxuICAgICAgICA4MDAgOiAjZGVkNTAxLFxuICAgICAgICA5MDAgOiAjZDhjZDAwLFxuICAgICAgICBBMTAwIDogI2ZmZmZmZixcbiAgICAgICAgQTIwMCA6ICNmZmZjY2QsXG4gICAgICAgIEE0MDAgOiAjZmZmOTlhLFxuICAgICAgICBBNzAwIDogI2ZmZjc4MCxcbiAgICAgICAgY29udHJhc3Q6IChcbiAgICAgICAgICAgICAgICA1MCA6ICMwMDAwMDAsXG4gICAgICAgICAgICAgICAgMTAwIDogIzAwMDAwMCxcbiAgICAgICAgICAgICAgICAyMDAgOiAjMDAwMDAwLFxuICAgICAgICAgICAgICAgIDMwMCA6ICMwMDAwMDAsXG4gICAgICAgICAgICAgICAgNDAwIDogIzAwMDAwMCxcbiAgICAgICAgICAgICAgICA1MDAgOiAjMDAwMDAwLFxuICAgICAgICAgICAgICAgIDYwMCA6ICMwMDAwMDAsXG4gICAgICAgICAgICAgICAgNzAwIDogIzAwMDAwMCxcbiAgICAgICAgICAgICAgICA4MDAgOiAjMDAwMDAwLFxuICAgICAgICAgICAgICAgIDkwMCA6ICMwMDAwMDAsXG4gICAgICAgICAgICAgICAgQTEwMCA6ICMwMDAwMDAsXG4gICAgICAgICAgICAgICAgQTIwMCA6ICMwMDAwMDAsXG4gICAgICAgICAgICAgICAgQTQwMCA6ICMwMDAwMDAsXG4gICAgICAgICAgICAgICAgQTcwMCA6ICMwMDAwMDAsXG4gICAgICAgIClcbik7XG5cbiRld1NlY29uZGFyeVBhbGV0dGU6ICAoXG4gICAgICAgIDUwIDogI2UxZTFlNCxcbiAgICAgICAgMTAwIDogI2I1YjViYyxcbiAgICAgICAgMjAwIDogIzg0ODQ4ZixcbiAgICAgICAgMzAwIDogIzUyNTI2MixcbiAgICAgICAgNDAwIDogIzJkMmQ0MCxcbiAgICAgICAgNTAwIDogIzA4MDgxZSxcbiAgICAgICAgNjAwIDogIzA3MDcxYSxcbiAgICAgICAgNzAwIDogIzA2MDYxNixcbiAgICAgICAgODAwIDogIzA0MDQxMixcbiAgICAgICAgOTAwIDogIzAyMDIwYSxcbiAgICAgICAgQTEwMCA6ICM0ZjRmZmYsXG4gICAgICAgIEEyMDAgOiAjMWMxY2ZmLFxuICAgICAgICBBNDAwIDogIzAwMDBlOCxcbiAgICAgICAgQTcwMCA6ICMwMDAwY2UsXG4gICAgICAgIGNvbnRyYXN0OiAoXG4gICAgICAgICAgICAgICAgNTAgOiAjMDAwMDAwLFxuICAgICAgICAgICAgICAgIDEwMCA6ICMwMDAwMDAsXG4gICAgICAgICAgICAgICAgMjAwIDogIzAwMDAwMCxcbiAgICAgICAgICAgICAgICAzMDAgOiAjZmZmZmZmLFxuICAgICAgICAgICAgICAgIDQwMCA6ICNmZmZmZmYsXG4gICAgICAgICAgICAgICAgNTAwIDogI2ZmZmZmZixcbiAgICAgICAgICAgICAgICA2MDAgOiAjZmZmZmZmLFxuICAgICAgICAgICAgICAgIDcwMCA6ICNmZmZmZmYsXG4gICAgICAgICAgICAgICAgODAwIDogI2ZmZmZmZixcbiAgICAgICAgICAgICAgICA5MDAgOiAjZmZmZmZmLFxuICAgICAgICAgICAgICAgIEExMDAgOiAjZmZmZmZmLFxuICAgICAgICAgICAgICAgIEEyMDAgOiAjZmZmZmZmLFxuICAgICAgICAgICAgICAgIEE0MDAgOiAjZmZmZmZmLFxuICAgICAgICAgICAgICAgIEE3MDAgOiAjZmZmZmZmLFxuICAgICAgICApXG4pOyJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderCtaComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-header-cta',
            templateUrl: './header-cta.component.html',
            styleUrls: ['./header-cta.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "v/rv":
    /*!*******************************************************!*\
      !*** ./src/generated/api/api/laboratories.service.ts ***!
      \*******************************************************/

    /*! exports provided: LaboratoriesService */

    /***/
    function vRv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LaboratoriesService", function () {
        return LaboratoriesService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../encoder */
      "i0KE");
      /* harmony import */


      var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../variables */
      "G5Mf");
      /* harmony import */


      var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../configuration */
      "PKcu");
      /**
       *
       * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
       *
       * The version of the OpenAPI document: 0.0.0
       *
       *
       * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
       * https://openapi-generator.tech
       * Do not edit the class manually.
       */

      /* tslint:disable:no-unused-variable member-ordering */


      var LaboratoriesService = /*#__PURE__*/function () {
        function LaboratoriesService(httpClient, basePath, configuration) {
          _classCallCheck(this, LaboratoriesService);

          this.httpClient = httpClient;
          this.basePath = 'http://localhost';
          this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();

          if (configuration) {
            this.configuration = configuration;
          }

          if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
              basePath = this.basePath;
            }

            this.configuration.basePath = basePath;
          }

          this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpParameterCodec"]();
        }

        _createClass(LaboratoriesService, [{
          key: "addToHttpParams",
          value: function addToHttpParams(httpParams, value, key) {
            if (typeof value === "object" && value instanceof Date === false) {
              httpParams = this.addToHttpParamsRecursive(httpParams, value);
            } else {
              httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
            }

            return httpParams;
          }
        }, {
          key: "addToHttpParamsRecursive",
          value: function addToHttpParamsRecursive(httpParams, value, key) {
            var _this57 = this;

            if (value == null) {
              return httpParams;
            }

            if (typeof value === "object") {
              if (Array.isArray(value)) {
                value.forEach(function (elem) {
                  return httpParams = _this57.addToHttpParamsRecursive(httpParams, elem, key);
                });
              } else if (value instanceof Date) {
                if (key != null) {
                  httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                } else {
                  throw Error("key may not be null if value is Date");
                }
              } else {
                Object.keys(value).forEach(function (k) {
                  return httpParams = _this57.addToHttpParamsRecursive(httpParams, value[k], key != null ? "".concat(key, ".").concat(k) : k);
                });
              }
            } else if (key != null) {
              httpParams = httpParams.append(key, value);
            } else {
              throw Error("key may not be null if value is not object or array");
            }

            return httpParams;
          }
        }, {
          key: "laboratoriesList",
          value: function laboratoriesList() {
            var observe = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'body';
            var reportProgress = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var options = arguments.length > 2 ? arguments[2] : undefined;
            var headers = this.defaultHeaders;
            var credential; // authentication (jwtAuth) required

            credential = this.configuration.lookupCredential('jwtAuth');

            if (credential) {
              headers = headers.set('Authorization', 'Bearer ' + credential);
            }

            var httpHeaderAcceptSelected = options && options.httpHeaderAccept;

            if (httpHeaderAcceptSelected === undefined) {
              // to determine the Accept header
              var httpHeaderAccepts = ['application/json'];
              httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            }

            if (httpHeaderAcceptSelected !== undefined) {
              headers = headers.set('Accept', httpHeaderAcceptSelected);
            }

            var responseType = 'json';

            if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
              responseType = 'text';
            }

            return this.httpClient.get("".concat(this.configuration.basePath, "/backend/masterdata/laboratories/"), {
              responseType: responseType,
              withCredentials: this.configuration.withCredentials,
              headers: headers,
              observe: observe,
              reportProgress: reportProgress
            });
          }
        }]);

        return LaboratoriesService;
      }();

      LaboratoriesService.ɵfac = function LaboratoriesService_Factory(t) {
        return new (t || LaboratoriesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], 8));
      };

      LaboratoriesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LaboratoriesService,
        factory: LaboratoriesService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LaboratoriesService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"]]
            }]
          }, {
            type: _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _modules_pages_registration_registration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./modules/pages/registration/registration.component */
      "QJbD");
      /* harmony import */


      var _modules_pages_imprint_imprint_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./modules/pages/imprint/imprint.component */
      "Gg+M");
      /* harmony import */


      var _modules_pages_lost_password_lost_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./modules/pages/lost-password/lost-password.component */
      "23XS");
      /* harmony import */


      var _modules_pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./modules/pages/reset-password/reset-password.component */
      "N217");
      /* harmony import */


      var _modules_pages_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./modules/pages/change-password/change-password.component */
      "Yk9B");

      var routes = [{
        path: 'registration',
        component: _modules_pages_registration_registration_component__WEBPACK_IMPORTED_MODULE_2__["RegistrationComponent"]
      }, {
        path: 'imprint',
        component: _modules_pages_imprint_imprint_component__WEBPACK_IMPORTED_MODULE_3__["ImprintComponent"]
      }, {
        path: 'forgot-password',
        component: _modules_pages_lost_password_lost_password_component__WEBPACK_IMPORTED_MODULE_4__["LostPasswordComponent"]
      }, {
        path: 'reset-password',
        component: _modules_pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__["ResetPasswordComponent"]
      }, {
        path: 'reset-password/:token',
        component: _modules_pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__["ResetPasswordComponent"]
      }, {
        path: 'change-password',
        component: _modules_pages_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_6__["ChangePasswordComponent"]
      }, {
        path: 'data',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modules-pages-data-display-data-display-module */
          "modules-pages-data-display-data-display-module").then(__webpack_require__.bind(null,
          /*! ./modules/pages/data-display/data-display.module */
          "blRF")).then(function (m) {
            return m.DataDisplayModule;
          });
        }
      }, {
        path: 'moving-risk/:customer_id/:species_id/:for_months',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modules-pages-moving-risk-moving-risk-module */
          "modules-pages-moving-risk-moving-risk-module").then(__webpack_require__.bind(null,
          /*! ./modules/pages/moving-risk/moving-risk.module */
          "qa+I")).then(function (m) {
            return m.MovingRiskModule;
          });
        }
      }, {
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modules-pages-assessment-assessment-module */
          "modules-pages-assessment-assessment-module").then(__webpack_require__.bind(null,
          /*! ./modules/pages/assessment/assessment.module */
          "egsl")).then(function (m) {
            return m.AssessmentModule;
          });
        }
      }];

      var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      });

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
          initialNavigation: 'enabled',
          relativeLinkResolution: 'corrected'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
              initialNavigation: 'enabled',
              relativeLinkResolution: 'corrected'
            })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "vYqv":
    /*!***********************************************!*\
      !*** ./src/generated/api/model/mycotoxins.ts ***!
      \***********************************************/

    /*! no exports provided */

    /***/
    function vYqv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /**
       *
       * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
       *
       * The version of the OpenAPI document: 0.0.0
       *
       *
       * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
       * https://openapi-generator.tech
       * Do not edit the class manually.
       */

      /***/

    },

    /***/
    "wBnp":
    /*!********************************************************!*\
      !*** ./src/generated/api/model/registrationRequest.ts ***!
      \********************************************************/

    /*! no exports provided */

    /***/
    function wBnp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /**
       *
       * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
       *
       * The version of the OpenAPI document: 0.0.0
       *
       *
       * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
       * https://openapi-generator.tech
       * Do not edit the class manually.
       */

      /***/

    },

    /***/
    "wy2R":
    /*!*************************!*\
      !*** external "moment" ***!
      \*************************/

    /*! no static exports found */

    /***/
    function wy2R(module, exports) {
      if (typeof moment === 'undefined') {
        var e = new Error("Cannot find module 'moment'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      module.exports = moment;
      /***/
    },

    /***/
    "x9VU":
    /*!***********************************************************************!*\
      !*** ./src/app/modules/components/pre-footer/pre-footer.component.ts ***!
      \***********************************************************************/

    /*! exports provided: PreFooterComponent */

    /***/
    function x9VU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PreFooterComponent", function () {
        return PreFooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PreFooterComponent = /*#__PURE__*/function () {
        function PreFooterComponent() {
          _classCallCheck(this, PreFooterComponent);
        }

        _createClass(PreFooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PreFooterComponent;
      }();

      PreFooterComponent.ɵfac = function PreFooterComponent_Factory(t) {
        return new (t || PreFooterComponent)();
      };

      PreFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PreFooterComponent,
        selectors: [["app-pre-footer"]],
        decls: 5,
        vars: 0,
        consts: [[1, "pre-footer-container"], [1, "pre-footer-inner"], ["href", "https://ew-nutrition.com/", "target", "_blank"], ["src", "/assets/img/logo_ew-nutrition.svg", "alt", "ew nutrition"]],
        template: function PreFooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " powered by ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".pre-footer-container[_ngcontent-%COMP%] {\n  padding: 0 1rem;\n}\n.pre-footer-container[_ngcontent-%COMP%]   .pre-footer-inner[_ngcontent-%COMP%] {\n  max-width: 1170px;\n  min-height: 6.25rem;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  color: #8b8b8b;\n  font-size: 0.6875em;\n}\n.pre-footer-container[_ngcontent-%COMP%]   .pre-footer-inner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 2.9375rem;\n  -o-object-fit: contain;\n     object-fit: contain;\n  -o-object-position: left;\n     object-position: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21wb25lbnRzL3ByZS1mb290ZXIvcHJlLWZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRjtBQUNFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFFQSxtQkFBQTtBQURKO0FBR0k7RUFDRSxpQkFBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7RUFDQSx3QkFBQTtLQUFBLHFCQUFBO0FBRE4iLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NvbXBvbmVudHMvcHJlLWZvb3Rlci9wcmUtZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByZS1mb290ZXItY29udGFpbmVyIHtcbiAgcGFkZGluZzogMCAxcmVtO1xuXG4gIC5wcmUtZm9vdGVyLWlubmVyIHtcbiAgICBtYXgtd2lkdGg6IDExNzBweDtcbiAgICBtaW4taGVpZ2h0OiA2LjI1cmVtO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGNvbG9yOiAjOGI4YjhiO1xuXG4gICAgZm9udC1zaXplOiAwLjY4NzVlbTtcblxuICAgIGltZyB7XG4gICAgICBoZWlnaHQ6IDIuOTM3NXJlbTtcbiAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICBvYmplY3QtcG9zaXRpb246IGxlZnQ7XG4gICAgfVxuICB9XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreFooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-pre-footer',
            templateUrl: './pre-footer.component.html',
            styleUrls: ['./pre-footer.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "y/br":
    /*!*****************************************!*\
      !*** ./src/generated/api/api.module.ts ***!
      \*****************************************/

    /*! exports provided: ApiModule */

    /***/
    function yBr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiModule", function () {
        return ApiModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./configuration */
      "PKcu");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var ApiModule = /*#__PURE__*/function () {
        function ApiModule(parentModule, http) {
          _classCallCheck(this, ApiModule);

          if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
          }

          if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' + 'See also https://github.com/angular/angular/issues/20575');
          }
        }

        _createClass(ApiModule, null, [{
          key: "forRoot",
          value: function forRoot(configurationFactory) {
            return {
              ngModule: ApiModule,
              providers: [{
                provide: _configuration__WEBPACK_IMPORTED_MODULE_1__["Configuration"],
                useFactory: configurationFactory
              }]
            };
          }
        }]);

        return ApiModule;
      }();

      ApiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ApiModule
      });
      ApiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ApiModule_Factory(t) {
          return new (t || ApiModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ApiModule, 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], 8));
        },
        providers: [],
        imports: [[]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [],
            declarations: [],
            exports: [],
            providers: []
          }]
        }], function () {
          return [{
            type: ApiModule,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "yFtC":
    /*!*************************************************************!*\
      !*** ./src/app/interceptors/language-header.interceptor.ts ***!
      \*************************************************************/

    /*! exports provided: LanguageHeaderInterceptor */

    /***/
    function yFtC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LanguageHeaderInterceptor", function () {
        return LanguageHeaderInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var _services_current_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/current-language.service */
      "pBAh");

      var LanguageHeaderInterceptor = /*#__PURE__*/function () {
        function LanguageHeaderInterceptor(currentLanguageService) {
          _classCallCheck(this, LanguageHeaderInterceptor);

          this.currentLanguageService = currentLanguageService;
        }

        _createClass(LanguageHeaderInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            if (request.url.startsWith(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api)) {
              return this.currentLanguageService.currentLanguage.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (language) {
                if (language == null) {
                  return request;
                } else {
                  return request.clone({
                    setHeaders: {
                      'Accept-Language': language
                    }
                  });
                }
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (newRequest) {
                return next.handle(newRequest);
              }));
            } else {
              return next.handle(request);
            }
          }
        }]);

        return LanguageHeaderInterceptor;
      }();

      LanguageHeaderInterceptor.ɵfac = function LanguageHeaderInterceptor_Factory(t) {
        return new (t || LanguageHeaderInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_current_language_service__WEBPACK_IMPORTED_MODULE_3__["CurrentLanguageService"]));
      };

      LanguageHeaderInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LanguageHeaderInterceptor,
        factory: LanguageHeaderInterceptor.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LanguageHeaderInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _services_current_language_service__WEBPACK_IMPORTED_MODULE_3__["CurrentLanguageService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "yXYU":
    /*!************************************************************!*\
      !*** ./src/generated/api/model/userAssessmentRecipient.ts ***!
      \************************************************************/

    /*! no exports provided */

    /***/
    function yXYU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /**
       *
       * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
       *
       * The version of the OpenAPI document: 0.0.0
       *
       *
       * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
       * https://openapi-generator.tech
       * Do not edit the class manually.
       */

      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      document.addEventListener('DOMContentLoaded', function () {
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
          return console.error(err);
        });
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map