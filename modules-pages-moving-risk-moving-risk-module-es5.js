(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-pages-moving-risk-moving-risk-module"], {
    /***/
    "coPD":
    /*!********************************************************************!*\
      !*** ./src/app/modules/pages/moving-risk/moving-risk.component.ts ***!
      \********************************************************************/

    /*! exports provided: MovingRiskComponent */

    /***/
    function coPD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MovingRiskComponent", function () {
        return MovingRiskComponent;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _generated_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../generated/api */
      "UIhn");
      /* harmony import */


      var _services_form_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../services/form-data.service */
      "3aqe");
      /* harmony import */


      var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../services/data.service */
      "EnSQ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _components_moving_risk_display_moving_risk_display_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../components/moving-risk-display/moving-risk-display.component */
      "RC5z");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");

      function MovingRiskComponent_ng_container_0_app_moving_risk_display_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-moving-risk-display", 3);
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("reportMode", true)("movingRiskData", ctx_r3.movingRiskData)("species", ctx_r3.species);
        }
      }

      function MovingRiskComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MovingRiskComponent_ng_container_0_app_moving_risk_display_1_Template, 1, 3, "app-moving-risk-display", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.movingRiskData != null && ctx_r0.species != null);
        }
      }

      function MovingRiskComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var MovingRiskComponent = /*#__PURE__*/function () {
        function MovingRiskComponent(route, customerService, formDataService, dataService) {
          _classCallCheck(this, MovingRiskComponent);

          this.route = route;
          this.customerService = customerService;
          this.formDataService = formDataService;
          this.dataService = dataService;
          this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.loading = true;
          this.movingRiskData = null;
          this.species = null;
        }

        _createClass(MovingRiskComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () {
              return _this.loading = true;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (params) {
              var _a;

              var forMonths = parseInt((_a = params.get('for_months')) !== null && _a !== void 0 ? _a : '', 10);
              return {
                customerId: params.get('customer_id'),
                speciesId: params.get('species_id'),
                forMonths: forMonths
              };
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (_ref) {
              var customerId = _ref.customerId,
                  speciesId = _ref.speciesId,
                  forMonths = _ref.forMonths;
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([_this.customerService.customersMovingRiskList(Number(customerId), forMonths, speciesId), _this.dataService.getIdx('species').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (species) {
                return species.get(speciesId);
              })), _this.dataService.get('levels')]);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_ref2) {
              var _ref3 = _slicedToArray(_ref2, 3),
                  apiMovingRiskData = _ref3[0],
                  species = _ref3[1],
                  allLevels = _ref3[2];

              console.log("APIMOVRISK", {
                apiMovingRiskData: apiMovingRiskData,
                species: species
              });
              return [_this.formDataService.makeMovingRiskData(apiMovingRiskData, allLevels), species];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () {
              return _this.loading = false;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$)).subscribe(function (_ref4) {
              var _ref5 = _slicedToArray(_ref4, 2),
                  movingRiskData = _ref5[0],
                  species = _ref5[1];

              _this.movingRiskData = movingRiskData;
              _this.species = species;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroyed$.next();
            this.destroyed$.complete();
          }
        }]);

        return MovingRiskComponent;
      }();

      MovingRiskComponent.ɵfac = function MovingRiskComponent_Factory(t) {
        return new (t || MovingRiskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_generated_api__WEBPACK_IMPORTED_MODULE_4__["CustomersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_form_data_service__WEBPACK_IMPORTED_MODULE_5__["FormDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]));
      };

      MovingRiskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MovingRiskComponent,
        selectors: [["app-moving-risk"]],
        decls: 3,
        vars: 2,
        consts: [[4, "ngIf", "ngIfElse"], ["spinner", ""], [3, "reportMode", "movingRiskData", "species", 4, "ngIf"], [3, "reportMode", "movingRiskData", "species"], [1, "spinner-container"], ["color", "primary"]],
        template: function MovingRiskComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MovingRiskComponent_ng_container_0_Template, 2, 1, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MovingRiskComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _components_moving_risk_display_moving_risk_display_component__WEBPACK_IMPORTED_MODULE_8__["MovingRiskDisplayComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatSpinner"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvbW92aW5nLXJpc2svbW92aW5nLXJpc2suY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovingRiskComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-moving-risk',
            templateUrl: './moving-risk.component.html',
            styleUrls: ['./moving-risk.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: _generated_api__WEBPACK_IMPORTED_MODULE_4__["CustomersService"]
          }, {
            type: _services_form_data_service__WEBPACK_IMPORTED_MODULE_5__["FormDataService"]
          }, {
            type: _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "kbTY":
    /*!*************************************************************************!*\
      !*** ./src/app/modules/pages/moving-risk/moving-risk-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: MovingRiskRoutingModule */

    /***/
    function kbTY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MovingRiskRoutingModule", function () {
        return MovingRiskRoutingModule;
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


      var _moving_risk_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./moving-risk.component */
      "coPD");

      var routes = [{
        path: '',
        component: _moving_risk_component__WEBPACK_IMPORTED_MODULE_2__["MovingRiskComponent"]
      }];

      var MovingRiskRoutingModule = /*#__PURE__*/_createClass(function MovingRiskRoutingModule() {
        _classCallCheck(this, MovingRiskRoutingModule);
      });

      MovingRiskRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MovingRiskRoutingModule
      });
      MovingRiskRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MovingRiskRoutingModule_Factory(t) {
          return new (t || MovingRiskRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MovingRiskRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovingRiskRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "qa+I":
    /*!*****************************************************************!*\
      !*** ./src/app/modules/pages/moving-risk/moving-risk.module.ts ***!
      \*****************************************************************/

    /*! exports provided: MovingRiskModule */

    /***/
    function qaI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MovingRiskModule", function () {
        return MovingRiskModule;
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


      var _moving_risk_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./moving-risk-routing.module */
      "kbTY");
      /* harmony import */


      var _moving_risk_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./moving-risk.component */
      "coPD");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../components/components.module */
      "aDnW");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");

      var MovingRiskModule = /*#__PURE__*/_createClass(function MovingRiskModule() {
        _classCallCheck(this, MovingRiskModule);
      });

      MovingRiskModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MovingRiskModule
      });
      MovingRiskModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MovingRiskModule_Factory(t) {
          return new (t || MovingRiskModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _moving_risk_routing_module__WEBPACK_IMPORTED_MODULE_2__["MovingRiskRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MovingRiskModule, {
          declarations: [_moving_risk_component__WEBPACK_IMPORTED_MODULE_3__["MovingRiskComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _moving_risk_routing_module__WEBPACK_IMPORTED_MODULE_2__["MovingRiskRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovingRiskModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_moving_risk_component__WEBPACK_IMPORTED_MODULE_3__["MovingRiskComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _moving_risk_routing_module__WEBPACK_IMPORTED_MODULE_2__["MovingRiskRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=modules-pages-moving-risk-moving-risk-module-es5.js.map