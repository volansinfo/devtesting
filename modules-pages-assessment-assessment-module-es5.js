(function () {
  function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-pages-assessment-assessment-module"], {
    /***/
    "+gIK":
    /*!*********************************************************************************!*\
      !*** ./src/app/modules/pages/assessment/samples-form/samples-form.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: SamplesFormComponent */

    /***/
    function gIK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SamplesFormComponent", function () {
        return SamplesFormComponent;
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


      var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../services/data.service */
      "EnSQ");
      /* harmony import */


      var _services_form_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../services/form-data.service */
      "3aqe");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _generated_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../generated/api */
      "UIhn");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function SamplesFormComponent_ng_container_0_mat_option_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var specie_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", specie_r3.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", specie_r3.text, " ");
        }
      }

      function SamplesFormComponent_ng_container_0_ng_container_10_mat_option_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var component_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", component_r10.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", component_r10.text, " ");
        }
      }

      function SamplesFormComponent_ng_container_0_ng_container_10_mat_form_field_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "STEPTWO_INCLUSIONRATE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", row_r4.get("inclusionRate"));
        }
      }

      function SamplesFormComponent_ng_container_0_ng_container_10_button_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SamplesFormComponent_ng_container_0_ng_container_10_button_15_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r12.addSample();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "add_circle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r8.formArray.length >= 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, "STEPTWO_ADD_SAMPLE"));
        }
      }

      function SamplesFormComponent_ng_container_0_ng_container_10_button_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SamplesFormComponent_ng_container_0_ng_container_10_button_16_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r14.removeSample(i_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "remove_circle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, "STEPTWO_REMOVE_SAMPLE"));
        }
      }

      function SamplesFormComponent_ng_container_0_ng_container_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SamplesFormComponent_ng_container_0_ng_container_10_mat_option_5_Template, 2, 2, "mat-option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Inclusion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SamplesFormComponent_ng_container_0_ng_container_10_mat_form_field_14_Template, 7, 1, "mat-form-field", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SamplesFormComponent_ng_container_0_ng_container_10_button_15_Template, 4, 4, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SamplesFormComponent_ng_container_0_ng_container_10_button_16_Template, 4, 3, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var row_r4 = ctx.$implicit;
          var i_r5 = ctx.index;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.sampleType.text);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", row_r4.get("component"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.components);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", row_r4.get("name"))("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 8, ctx_r2.defaultSampleName(i_r5)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.showInclusionRate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r5 === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r5 !== 0);
        }
      }

      function SamplesFormComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "SPECIES");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-select", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SamplesFormComponent_ng_container_0_mat_option_8_Template, 2, 2, "mat-option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SamplesFormComponent_ng_container_0_ng_container_10_Template, 17, 10, "ng-container", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", 30, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.controls.speciesNew);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.spices);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("with-inclusion-rate", ctx_r0.showInclusionRate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.rows());
        }
      }

      var SamplesFormComponent = /*#__PURE__*/function () {
        function SamplesFormComponent(dataService, formDataService, translateService, apiService) {
          _classCallCheck(this, SamplesFormComponent);

          this.dataService = dataService;
          this.formDataService = formDataService;
          this.translateService = translateService;
          this.apiService = apiService;
          this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.components = null;
          this.sampleType = null;
          this.spices = [];
          this.showInclusionRate = false;
          this.formGroup = formDataService.samplesForm;
          this.formArray = formDataService.samplesFormArray;
          this.formGroup = formDataService.speciesNewForm;
          this.controls = formDataService.speciesNewFormControls;
        }

        _createClass(SamplesFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            var _a, _b;

            this.spices = [{
              "id": "Broilers",
              "text": "Broilers"
            }, {
              "id": "Layers",
              "text": "Layers"
            }, {
              "id": "Turkey",
              "text": "Turkey"
            }, {
              "id": "GF Pigs",
              "text": "GF Pigs"
            }, {
              "id": "Piglets",
              "text": "Piglets"
            }, {
              "id": "Sows",
              "text": "Sows"
            }];
            this.components = [{
              "id": "Rice bran",
              "text": "Rice bran"
            }, {
              "id": "Palm kernel cake",
              "text": "Palm kernel cake"
            }, {
              "id": "Soy beans (Full fat)",
              "text": "Soy beans (Full fat)"
            }, {
              "id": "Sunflower cake 35 %",
              "text": "Sunflower cake 35 %"
            }, {
              "id": "Soy bean meal 48",
              "text": "Soy bean meal 48"
            }, {
              "id": "Cotton seed cake 43",
              "text": "Cotton seed cake 43"
            }, {
              "id": "Sunflower cake 28 %",
              "text": "Sunflower cake 28 %"
            }, {
              "id": "Soy bean meal 50",
              "text": "Soy bean meal 50"
            }, {
              "id": "Sorghum",
              "text": "Sorghum"
            }, {
              "id": "Corn glutenfeed",
              "text": "Corn glutenfeed"
            }, {
              "id": "Wheat pollards",
              "text": "Wheat pollards"
            }, {
              "id": "Bajra (Pearl Millet)",
              "text": "Bajra (Pearl Millet)"
            }, {
              "id": "Wheat gluten feed",
              "text": "Wheat gluten feed"
            }, {
              "id": "Barley",
              "text": "Barley"
            }, {
              "id": "Wheat middlings",
              "text": "Wheat middlings"
            }, {
              "id": "Broken rice",
              "text": "Broken rice"
            }, {
              "id": "Sugar Beet pulp",
              "text": "Sugar Beet pulp"
            }, {
              "id": "Soy concentrate",
              "text": "Soy concentrate"
            }, {
              "id": "Deoiled Rice bran (DORB)",
              "text": "Deoiled Rice bran (DORB)"
            }, {
              "id": "Triticale",
              "text": "Triticale"
            }, {
              "id": "Tapioca 70",
              "text": "Tapioca 70"
            }, {
              "id": "DDGS wheat 30",
              "text": "DDGS wheat 30"
            }, {
              "id": "Wheat",
              "text": "Wheat"
            }, {
              "id": "Soy oil",
              "text": "Soy oil"
            }, {
              "id": "Peas, France",
              "text": "Peas, France"
            }, {
              "id": "Soy bean meal 42",
              "text": "Soy bean meal 42"
            }, {
              "id": "Brown rice",
              "text": "Brown rice"
            }, {
              "id": "Tapioca 60",
              "text": "Tapioca 60"
            }, {
              "id": "Corn gluten meal 60",
              "text": "Corn gluten meal 60"
            }, {
              "id": "Corn",
              "text": "Corn"
            }, {
              "id": "Soy bean meal 44",
              "text": "Soy bean meal 44"
            }, {
              "id": "DDGS corn",
              "text": "DDGS corn"
            }, {
              "id": "Rape seed meal 37",
              "text": "Rape seed meal 37"
            }, {
              "id": "Wheat shorts",
              "text": "Wheat shorts"
            }, {
              "id": "Tapioca 65",
              "text": "Tapioca 65"
            }, {
              "id": "Soy bean meal 46",
              "text": "Soy bean meal 46"
            }, {
              "id": "Rye",
              "text": "Rye"
            }];
            this.sampleType = {
              "id": "materials",
              "text": "Ingredient",
              "has_inclusion_rate": false,
              "has_total_risk": false,
              "has_bw_loss_and_fcr_graph": false
            };
            this.showInclusionRate = (_b = (_a = this.sampleType) === null || _a === void 0 ? void 0 : _a.has_inclusion_rate) !== null && _b !== void 0 ? _b : false;
            this.formDataService.reset.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$)).subscribe(function () {
              return _this.addSample();
            }); // this.formDataService.validComponents.pipe(
            //     takeUntil(this.destroyed$)
            // ).subscribe(components => this.components = components);
            // this.formDataService.sampleType.pipe(
            //     takeUntil(this.destroyed$)
            // ).subscribe(sampleType => {
            //     this.sampleType = sampleType;
            //     this.showInclusionRate = sampleType?.has_inclusion_rate ?? false;
            // })
          }
        }, {
          key: "defaultSampleName",
          value: function defaultSampleName(index) {
            // return this.translateService.get('STEPTWO_SAMPLENAME_DEFAULT', {index: index + 1});
            return;
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {}
        }, {
          key: "ready",
          value: function ready() {
            return this.components != null && this.sampleType != null;
          }
        }, {
          key: "rows",
          value: function rows() {
            return this.formArray.controls;
          }
        }, {
          key: "addSample",
          value: function addSample() {
            // for (let i = 0; this.formArray.length < 20; i++) {
            //     this.formDataService.addSample();
            // }
            this.formDataService.addSample();
          }
        }, {
          key: "removeSample",
          value: function removeSample(index) {
            this.formDataService.removeSample(index);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroyed$.next();
            this.destroyed$.complete();
          }
        }]);

        return SamplesFormComponent;
      }();

      SamplesFormComponent.ɵfac = function SamplesFormComponent_Factory(t) {
        return new (t || SamplesFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_form_data_service__WEBPACK_IMPORTED_MODULE_4__["FormDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_generated_api__WEBPACK_IMPORTED_MODULE_6__["ApiService"]));
      };

      SamplesFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SamplesFormComponent,
        selectors: [["app-samples-form"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], [1, "main-div"], ["appearance", "standard"], ["ngx-translate", ""], [3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-grid"], [4, "ngFor", "ngForOf"], [3, "value"], ["appearance", "standard", 1, "first"], ["appearance", "standard", 1, "second"], ["matInput", "", 3, "formControl", "placeholder"], ["matSuffix", ""], ["class", "inclusion-rate", "appearance", "standard", 4, "ngIf"], ["class", "add-remove-button", "mat-icon-button", "", 3, "disabled", "click", 4, "ngIf"], ["class", "add-remove-button", "mat-icon-button", "", 3, "click", 4, "ngIf"], ["appearance", "standard", 1, "inclusion-rate"], ["matInput", "", "type", "number", 3, "formControl"], ["mat-icon-button", "", 1, "add-remove-button", 3, "disabled", "click"], ["mat-icon-button", "", 1, "add-remove-button", 3, "click"]],
        template: function SamplesFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SamplesFormComponent_ng_container_0_Template, 11, 7, "ng-container", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ready());
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateDirective"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatSuffix"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NumberValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]],
        styles: [".form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr min-content;\n  align-items: center;\n  grid-column-gap: 2em;\n}\n.form-grid.with-inclusion-rate[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 1fr 1fr min-content;\n}\n.form-grid[_ngcontent-%COMP%]   .first[_ngcontent-%COMP%] {\n  grid-column: 1;\n}\n.form-grid[_ngcontent-%COMP%]   .second[_ngcontent-%COMP%] {\n  grid-column: 2;\n}\n.form-grid[_ngcontent-%COMP%]   .inclusion-rate[_ngcontent-%COMP%] {\n  grid-column: 3;\n}\n.main-div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.mat-form-field-suffix[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 100%;\n}\n@media screen and (max-width: 991px) {\n  .form-grid[_ngcontent-%COMP%], .form-grid.with-inclusion-rate[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr min-content;\n  }\n  .form-grid[_ngcontent-%COMP%]   .first[_ngcontent-%COMP%], .form-grid[_ngcontent-%COMP%]   .second[_ngcontent-%COMP%], .form-grid[_ngcontent-%COMP%]   .inclusion-rate[_ngcontent-%COMP%] {\n    grid-column: 1;\n  }\n  .form-grid[_ngcontent-%COMP%]   .add-remove-button[_ngcontent-%COMP%] {\n    grid-column: 2;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlcy9hc3Nlc3NtZW50L3NhbXBsZXMtZm9ybS9zYW1wbGVzLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsMENBQUE7RUFDQSxtQkFBQTtFQUVBLG9CQUFBO0FBQUY7QUFFRTtFQUNFLDhDQUFBO0FBQUo7QUFHRTtFQUNFLGNBQUE7QUFESjtBQUlFO0VBQ0UsY0FBQTtBQUZKO0FBS0U7RUFDRSxjQUFBO0FBSEo7QUFPQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBSkY7QUFPQTtFQUNFLGVBQUE7QUFKRjtBQU9BO0VBRUk7SUFDRSxzQ0FBQTtFQUxKO0VBUUU7SUFDRSxjQUFBO0VBTko7RUFTRTtJQUNFLGNBQUE7RUFQSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wYWdlcy9hc3Nlc3NtZW50L3NhbXBsZXMtZm9ybS9zYW1wbGVzLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIG1pbi1jb250ZW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIGdyaWQtY29sdW1uLWdhcDogMmVtO1xuXG4gICYud2l0aC1pbmNsdXNpb24tcmF0ZSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciBtaW4tY29udGVudDtcbiAgfVxuXG4gIC5maXJzdCB7XG4gICAgZ3JpZC1jb2x1bW46IDE7XG4gIH1cblxuICAuc2Vjb25kIHtcbiAgICBncmlkLWNvbHVtbjogMjtcbiAgfVxuXG4gIC5pbmNsdXNpb24tcmF0ZSB7XG4gICAgZ3JpZC1jb2x1bW46IDM7XG4gIH1cbn1cblxuLm1haW4tZGl2e1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLXN1ZmZpeCAubWF0LWljb24ge1xuICBmb250LXNpemU6IDEwMCU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5mb3JtLWdyaWQge1xuICAgICYsICYud2l0aC1pbmNsdXNpb24tcmF0ZSB7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBtaW4tY29udGVudDtcbiAgICB9XG5cbiAgICAuZmlyc3QsIC5zZWNvbmQsIC5pbmNsdXNpb24tcmF0ZSB7XG4gICAgICBncmlkLWNvbHVtbjogMTtcbiAgICB9XG5cbiAgICAuYWRkLXJlbW92ZS1idXR0b24ge1xuICAgICAgZ3JpZC1jb2x1bW46IDI7XG4gICAgfVxuXG4gIH1cbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SamplesFormComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-samples-form',
            templateUrl: './samples-form.component.html',
            styleUrls: ['./samples-form.component.scss']
          }]
        }], function () {
          return [{
            type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
          }, {
            type: _services_form_data_service__WEBPACK_IMPORTED_MODULE_4__["FormDataService"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
          }, {
            type: _generated_api__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "64Pv":
    /*!***********************************************************************!*\
      !*** ./src/app/modules/pages/assessment/assessment-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: AssessmentRoutingModule */

    /***/
    function Pv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssessmentRoutingModule", function () {
        return AssessmentRoutingModule;
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


      var _assessment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./assessment.component */
      "LUsJ");
      /* harmony import */


      var _assessment_detail_assessment_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./assessment-detail/assessment-detail.component */
      "bbaX");

      var routes = [{
        path: 'assessment/:id/:secret',
        component: _assessment_detail_assessment_detail_component__WEBPACK_IMPORTED_MODULE_3__["AssessmentDetailComponent"]
      }, {
        path: '',
        component: _assessment_component__WEBPACK_IMPORTED_MODULE_2__["AssessmentComponent"],
        pathMatch: 'full'
      }];

      var AssessmentRoutingModule = /*#__PURE__*/_createClass(function AssessmentRoutingModule() {
        _classCallCheck(this, AssessmentRoutingModule);
      });

      AssessmentRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AssessmentRoutingModule
      });
      AssessmentRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AssessmentRoutingModule_Factory(t) {
          return new (t || AssessmentRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AssessmentRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AssessmentRoutingModule, [{
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
    "B/XX":
    /*!********************************************************************!*\
      !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js ***!
      \********************************************************************/

    /*! exports provided: CdkStep, CdkStepHeader, CdkStepLabel, CdkStepper, CdkStepperModule, CdkStepperNext, CdkStepperPrevious, MAT_STEPPER_GLOBAL_OPTIONS, STEPPER_GLOBAL_OPTIONS, STEP_STATE, StepperSelectionEvent */

    /***/
    function BXX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkStep", function () {
        return CdkStep;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkStepHeader", function () {
        return CdkStepHeader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkStepLabel", function () {
        return CdkStepLabel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkStepper", function () {
        return CdkStepper;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkStepperModule", function () {
        return CdkStepperModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkStepperNext", function () {
        return CdkStepperNext;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkStepperPrevious", function () {
        return CdkStepperPrevious;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_STEPPER_GLOBAL_OPTIONS", function () {
        return MAT_STEPPER_GLOBAL_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "STEPPER_GLOBAL_OPTIONS", function () {
        return STEPPER_GLOBAL_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "STEP_STATE", function () {
        return STEP_STATE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StepperSelectionEvent", function () {
        return StepperSelectionEvent;
      });
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "FtGj");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      function CdkStep_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojection"](0);
        }
      }

      var _c0 = ["*"];

      var CdkStepHeader = /*#__PURE__*/function () {
        function CdkStepHeader(_elementRef) {
          _classCallCheck(this, CdkStepHeader);

          this._elementRef = _elementRef;
        }
        /** Focuses the step header. */


        _createClass(CdkStepHeader, [{
          key: "focus",
          value: function focus() {
            this._elementRef.nativeElement.focus();
          }
        }]);

        return CdkStepHeader;
      }();

      CdkStepHeader.ɵfac = function CdkStepHeader_Factory(t) {
        return new (t || CdkStepHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]));
      };

      CdkStepHeader.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
        type: CdkStepHeader,
        selectors: [["", "cdkStepHeader", ""]],
        hostAttrs: ["role", "tab"]
      });

      CdkStepHeader.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](CdkStepHeader, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
          args: [{
            selector: '[cdkStepHeader]',
            host: {
              'role': 'tab'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var CdkStepLabel = /*#__PURE__*/_createClass(function CdkStepLabel(
      /** @docs-private */
      template) {
        _classCallCheck(this, CdkStepLabel);

        this.template = template;
      });

      CdkStepLabel.ɵfac = function CdkStepLabel_Factory(t) {
        return new (t || CdkStepLabel)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"]));
      };

      CdkStepLabel.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
        type: CdkStepLabel,
        selectors: [["", "cdkStepLabel", ""]]
      });

      CdkStepLabel.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](CdkStepLabel, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
          args: [{
            selector: '[cdkStepLabel]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Used to generate unique ID for each stepper component. */


      var nextId = 0;
      /** Change event emitted on selection changes. */

      var StepperSelectionEvent = /*#__PURE__*/_createClass(function StepperSelectionEvent() {
        _classCallCheck(this, StepperSelectionEvent);
      });
      /** Enum to represent the different states of the steps. */


      var STEP_STATE = {
        NUMBER: 'number',
        EDIT: 'edit',
        DONE: 'done',
        ERROR: 'error'
      };
      /** InjectionToken that can be used to specify the global stepper options. */

      var STEPPER_GLOBAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["InjectionToken"]('STEPPER_GLOBAL_OPTIONS');
      /**
       * InjectionToken that can be used to specify the global stepper options.
       * @deprecated Use `STEPPER_GLOBAL_OPTIONS` instead.
       * @breaking-change 8.0.0.
       */

      var MAT_STEPPER_GLOBAL_OPTIONS = STEPPER_GLOBAL_OPTIONS;

      var CdkStep = /*#__PURE__*/function () {
        /** @breaking-change 8.0.0 remove the `?` after `stepperOptions` */
        function CdkStep(_stepper, stepperOptions) {
          _classCallCheck(this, CdkStep);

          this._stepper = _stepper;
          /** Whether user has seen the expanded step content or not. */

          this.interacted = false;
          this._editable = true;
          this._optional = false;
          this._completedOverride = null;
          this._customError = null;
          this._stepperOptions = stepperOptions ? stepperOptions : {};
          this._displayDefaultIndicatorType = this._stepperOptions.displayDefaultIndicatorType !== false;
          this._showError = !!this._stepperOptions.showError;
        }
        /** Whether the user can return to this step once it has been marked as completed. */


        _createClass(CdkStep, [{
          key: "editable",
          get: function get() {
            return this._editable;
          },
          set: function set(value) {
            this._editable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
          }
          /** Whether the completion of step is optional. */

        }, {
          key: "optional",
          get: function get() {
            return this._optional;
          },
          set: function set(value) {
            this._optional = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
          }
          /** Whether step is marked as completed. */

        }, {
          key: "completed",
          get: function get() {
            return this._completedOverride == null ? this._getDefaultCompleted() : this._completedOverride;
          },
          set: function set(value) {
            this._completedOverride = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
          }
        }, {
          key: "_getDefaultCompleted",
          value: function _getDefaultCompleted() {
            return this.stepControl ? this.stepControl.valid && this.interacted : this.interacted;
          }
          /** Whether step has an error. */

        }, {
          key: "hasError",
          get: function get() {
            return this._customError == null ? this._getDefaultError() : this._customError;
          },
          set: function set(value) {
            this._customError = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
          }
        }, {
          key: "_getDefaultError",
          value: function _getDefaultError() {
            return this.stepControl && this.stepControl.invalid && this.interacted;
          }
          /** Selects this step component. */

        }, {
          key: "select",
          value: function select() {
            this._stepper.selected = this;
          }
          /** Resets the step to its initial state. Note that this includes resetting form data. */

        }, {
          key: "reset",
          value: function reset() {
            this.interacted = false;

            if (this._completedOverride != null) {
              this._completedOverride = false;
            }

            if (this._customError != null) {
              this._customError = false;
            }

            if (this.stepControl) {
              this.stepControl.reset();
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            // Since basically all inputs of the MatStep get proxied through the view down to the
            // underlying MatStepHeader, we have to make sure that change detection runs correctly.
            this._stepper._stateChanged();
          }
        }]);

        return CdkStep;
      }();

      CdkStep.ɵfac = function CdkStep_Factory(t) {
        return new (t || CdkStep)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["forwardRef"])(function () {
          return CdkStepper;
        })), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](STEPPER_GLOBAL_OPTIONS, 8));
      };

      CdkStep.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: CdkStep,
        selectors: [["cdk-step"]],
        contentQueries: function CdkStep_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵcontentQuery"](dirIndex, CdkStepLabel, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.stepLabel = _t.first);
          }
        },
        viewQuery: function CdkStep_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstaticViewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
          }
        },
        inputs: {
          editable: "editable",
          optional: "optional",
          completed: "completed",
          hasError: "hasError",
          stepControl: "stepControl",
          label: "label",
          errorMessage: "errorMessage",
          ariaLabel: ["aria-label", "ariaLabel"],
          ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
          state: "state"
        },
        exportAs: ["cdkStep"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function CdkStep_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, CdkStep_ng_template_0_Template, 1, 0, "ng-template");
          }
        },
        encapsulation: 2,
        changeDetection: 0
      });

      CdkStep.ctorParameters = function () {
        return [{
          type: CdkStepper,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["forwardRef"])(function () {
              return CdkStepper;
            })]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
            args: [STEPPER_GLOBAL_OPTIONS]
          }]
        }];
      };

      CdkStep.propDecorators = {
        stepLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ContentChild"],
          args: [CdkStepLabel]
        }],
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"], {
            "static": true
          }]
        }],
        stepControl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        errorMessage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        ariaLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"],
          args: ['aria-label']
        }],
        ariaLabelledby: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"],
          args: ['aria-labelledby']
        }],
        state: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        editable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        optional: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        completed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        hasError: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](CdkStep, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"],
          args: [{
            selector: 'cdk-step',
            exportAs: 'cdkStep',
            template: '<ng-template><ng-content></ng-content></ng-template>',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: CdkStepper,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
              args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["forwardRef"])(function () {
                return CdkStepper;
              })]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
              args: [STEPPER_GLOBAL_OPTIONS]
            }]
          }];
        }, {
          editable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
          }],
          optional: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
          }],
          completed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
          }],
          hasError: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
          }],
          stepLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ContentChild"],
            args: [CdkStepLabel]
          }],
          content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"], {
              "static": true
            }]
          }],
          stepControl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
          }],
          label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
          }],
          errorMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
          }],
          ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"],
            args: ['aria-label']
          }],
          ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"],
            args: ['aria-labelledby']
          }],
          state: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
          }]
        });
      })();

      var CdkStepper = /*#__PURE__*/function () {
        function CdkStepper(_dir, _changeDetectorRef, // @breaking-change 8.0.0 `_elementRef` and `_document` parameters to become required.
        _elementRef, _document) {
          _classCallCheck(this, CdkStepper);

          this._dir = _dir;
          this._changeDetectorRef = _changeDetectorRef;
          this._elementRef = _elementRef;
          /** Emits when the component is destroyed. */

          this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
          /** Steps that belong to the current stepper, excluding ones from nested steppers. */

          this.steps = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["QueryList"]();
          this._linear = false;
          this._selectedIndex = 0;
          /** Event emitted when the selected step has changed. */

          this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
          this._orientation = 'horizontal';
          this._groupId = nextId++;
          this._document = _document;
        }
        /** Whether the validity of previous steps should be checked or not. */


        _createClass(CdkStepper, [{
          key: "linear",
          get: function get() {
            return this._linear;
          },
          set: function set(value) {
            this._linear = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
          }
          /** The index of the selected step. */

        }, {
          key: "selectedIndex",
          get: function get() {
            return this._selectedIndex;
          },
          set: function set(index) {
            var newIndex = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(index);

            if (this.steps && this._steps) {
              // Ensure that the index can't be out of bounds.
              if (!this._isValidIndex(index) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw Error('cdkStepper: Cannot assign out-of-bounds value to `selectedIndex`.');
              }

              var selectedStep = this.selected;

              if (selectedStep) {
                // TODO: this should really be called something like `visited` instead. Just because
                // the user has seen the step doesn't guarantee that they've interacted with it.
                selectedStep.interacted = true;
              }

              if (this._selectedIndex !== newIndex && !this._anyControlsInvalidOrPending(newIndex) && (newIndex >= this._selectedIndex || this.steps.toArray()[newIndex].editable)) {
                this._updateSelectedItemIndex(index);
              }
            } else {
              this._selectedIndex = newIndex;
            }
          }
          /** The step that is selected. */

        }, {
          key: "selected",
          get: function get() {
            // @breaking-change 8.0.0 Change return type to `CdkStep | undefined`.
            return this.steps ? this.steps.toArray()[this.selectedIndex] : undefined;
          },
          set: function set(step) {
            this.selectedIndex = this.steps ? this.steps.toArray().indexOf(step) : -1;
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this2 = this;

            this._steps.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(this._steps), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe(function (steps) {
              _this2.steps.reset(steps.filter(function (step) {
                return step._stepper === _this2;
              }));

              _this2.steps.notifyOnChanges();
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this3 = this;

            // Note that while the step headers are content children by default, any components that
            // extend this one might have them as view children. We initialize the keyboard handling in
            // AfterViewInit so we're guaranteed for both view and content children to be defined.
            this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusKeyManager"](this._stepHeader).withWrap().withHomeAndEnd().withVerticalOrientation(this._orientation === 'vertical');
            (this._dir ? this._dir.change : Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(this._layoutDirection()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe(function (direction) {
              return _this3._keyManager.withHorizontalOrientation(direction);
            });

            this._keyManager.updateActiveItem(this._selectedIndex); // No need to `takeUntil` here, because we're the ones destroying `steps`.


            this.steps.changes.subscribe(function () {
              if (!_this3.selected) {
                _this3._selectedIndex = Math.max(_this3._selectedIndex - 1, 0);
              }
            }); // The logic which asserts that the selected index is within bounds doesn't run before the
            // steps are initialized, because we don't how many steps there are yet so we may have an
            // invalid index on init. If that's the case, auto-correct to the default so we don't throw.

            if (!this._isValidIndex(this._selectedIndex)) {
              this._selectedIndex = 0;
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.steps.destroy();

            this._destroyed.next();

            this._destroyed.complete();
          }
          /** Selects and focuses the next step in list. */

        }, {
          key: "next",
          value: function next() {
            this.selectedIndex = Math.min(this._selectedIndex + 1, this.steps.length - 1);
          }
          /** Selects and focuses the previous step in list. */

        }, {
          key: "previous",
          value: function previous() {
            this.selectedIndex = Math.max(this._selectedIndex - 1, 0);
          }
          /** Resets the stepper to its initial state. Note that this includes clearing form data. */

        }, {
          key: "reset",
          value: function reset() {
            this._updateSelectedItemIndex(0);

            this.steps.forEach(function (step) {
              return step.reset();
            });

            this._stateChanged();
          }
          /** Returns a unique id for each step label element. */

        }, {
          key: "_getStepLabelId",
          value: function _getStepLabelId(i) {
            return "cdk-step-label-".concat(this._groupId, "-").concat(i);
          }
          /** Returns unique id for each step content element. */

        }, {
          key: "_getStepContentId",
          value: function _getStepContentId(i) {
            return "cdk-step-content-".concat(this._groupId, "-").concat(i);
          }
          /** Marks the component to be change detected. */

        }, {
          key: "_stateChanged",
          value: function _stateChanged() {
            this._changeDetectorRef.markForCheck();
          }
          /** Returns position state of the step with the given index. */

        }, {
          key: "_getAnimationDirection",
          value: function _getAnimationDirection(index) {
            var position = index - this._selectedIndex;

            if (position < 0) {
              return this._layoutDirection() === 'rtl' ? 'next' : 'previous';
            } else if (position > 0) {
              return this._layoutDirection() === 'rtl' ? 'previous' : 'next';
            }

            return 'current';
          }
          /** Returns the type of icon to be displayed. */

        }, {
          key: "_getIndicatorType",
          value: function _getIndicatorType(index) {
            var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : STEP_STATE.NUMBER;
            var step = this.steps.toArray()[index];

            var isCurrentStep = this._isCurrentStep(index);

            return step._displayDefaultIndicatorType ? this._getDefaultIndicatorLogic(step, isCurrentStep) : this._getGuidelineLogic(step, isCurrentStep, state);
          }
        }, {
          key: "_getDefaultIndicatorLogic",
          value: function _getDefaultIndicatorLogic(step, isCurrentStep) {
            if (step._showError && step.hasError && !isCurrentStep) {
              return STEP_STATE.ERROR;
            } else if (!step.completed || isCurrentStep) {
              return STEP_STATE.NUMBER;
            } else {
              return step.editable ? STEP_STATE.EDIT : STEP_STATE.DONE;
            }
          }
        }, {
          key: "_getGuidelineLogic",
          value: function _getGuidelineLogic(step, isCurrentStep) {
            var state = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : STEP_STATE.NUMBER;

            if (step._showError && step.hasError && !isCurrentStep) {
              return STEP_STATE.ERROR;
            } else if (step.completed && !isCurrentStep) {
              return STEP_STATE.DONE;
            } else if (step.completed && isCurrentStep) {
              return state;
            } else if (step.editable && isCurrentStep) {
              return STEP_STATE.EDIT;
            } else {
              return state;
            }
          }
        }, {
          key: "_isCurrentStep",
          value: function _isCurrentStep(index) {
            return this._selectedIndex === index;
          }
          /** Returns the index of the currently-focused step header. */

        }, {
          key: "_getFocusIndex",
          value: function _getFocusIndex() {
            return this._keyManager ? this._keyManager.activeItemIndex : this._selectedIndex;
          }
        }, {
          key: "_updateSelectedItemIndex",
          value: function _updateSelectedItemIndex(newIndex) {
            var stepsArray = this.steps.toArray();
            this.selectionChange.emit({
              selectedIndex: newIndex,
              previouslySelectedIndex: this._selectedIndex,
              selectedStep: stepsArray[newIndex],
              previouslySelectedStep: stepsArray[this._selectedIndex]
            }); // If focus is inside the stepper, move it to the next header, otherwise it may become
            // lost when the active step content is hidden. We can't be more granular with the check
            // (e.g. checking whether focus is inside the active step), because we don't have a
            // reference to the elements that are rendering out the content.

            this._containsFocus() ? this._keyManager.setActiveItem(newIndex) : this._keyManager.updateActiveItem(newIndex);
            this._selectedIndex = newIndex;

            this._stateChanged();
          }
        }, {
          key: "_onKeydown",
          value: function _onKeydown(event) {
            var hasModifier = Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["hasModifierKey"])(event);
            var keyCode = event.keyCode;
            var manager = this._keyManager;

            if (manager.activeItemIndex != null && !hasModifier && (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["SPACE"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"])) {
              this.selectedIndex = manager.activeItemIndex;
              event.preventDefault();
            } else {
              manager.onKeydown(event);
            }
          }
        }, {
          key: "_anyControlsInvalidOrPending",
          value: function _anyControlsInvalidOrPending(index) {
            if (this._linear && index >= 0) {
              return this.steps.toArray().slice(0, index).some(function (step) {
                var control = step.stepControl;
                var isIncomplete = control ? control.invalid || control.pending || !step.interacted : !step.completed;
                return isIncomplete && !step.optional && !step._completedOverride;
              });
            }

            return false;
          }
        }, {
          key: "_layoutDirection",
          value: function _layoutDirection() {
            return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
          }
          /** Checks whether the stepper contains the focused element. */

        }, {
          key: "_containsFocus",
          value: function _containsFocus() {
            if (!this._document || !this._elementRef) {
              return false;
            }

            var stepperElement = this._elementRef.nativeElement;
            var focusedElement = this._document.activeElement;
            return stepperElement === focusedElement || stepperElement.contains(focusedElement);
          }
          /** Checks whether the passed-in index is a valid step index. */

        }, {
          key: "_isValidIndex",
          value: function _isValidIndex(index) {
            return index > -1 && (!this.steps || index < this.steps.length);
          }
        }]);

        return CdkStepper;
      }();

      CdkStepper.ɵfac = function CdkStepper_Factory(t) {
        return new (t || CdkStepper)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]));
      };

      CdkStepper.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
        type: CdkStepper,
        selectors: [["", "cdkStepper", ""]],
        contentQueries: function CdkStepper_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵcontentQuery"](dirIndex, CdkStep, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵcontentQuery"](dirIndex, CdkStepHeader, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._steps = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._stepHeader = _t);
          }
        },
        inputs: {
          linear: "linear",
          selectedIndex: "selectedIndex",
          selected: "selected"
        },
        outputs: {
          selectionChange: "selectionChange"
        },
        exportAs: ["cdkStepper"]
      });

      CdkStepper.ctorParameters = function () {
        return [{
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }];
      };

      CdkStepper.propDecorators = {
        _steps: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ContentChildren"],
          args: [CdkStep, {
            descendants: true
          }]
        }],
        _stepHeader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ContentChildren"],
          args: [CdkStepHeader, {
            descendants: true
          }]
        }],
        linear: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        selectedIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        selectionChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](CdkStepper, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
          args: [{
            selector: '[cdkStepper]',
            exportAs: 'cdkStepper'
          }]
        }], function () {
          return [{
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }]
          }];
        }, {
          selectionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
          }],
          linear: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
          }],
          selectedIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
          }],
          selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
          }],
          _steps: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ContentChildren"],
            args: [CdkStep, {
              descendants: true
            }]
          }],
          _stepHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ContentChildren"],
            args: [CdkStepHeader, {
              descendants: true
            }]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Button that moves to the next step in a stepper workflow. */


      var CdkStepperNext = /*#__PURE__*/function () {
        function CdkStepperNext(_stepper) {
          _classCallCheck(this, CdkStepperNext);

          this._stepper = _stepper;
          /** Type of the next button. Defaults to "submit" if not specified. */

          this.type = 'submit';
        } // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
        // In Ivy the `host` bindings will be merged when this class is extended, whereas in
        // ViewEngine they're overwritten.
        // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
        // tslint:disable-next-line:no-host-decorator-in-concrete


        _createClass(CdkStepperNext, [{
          key: "_handleClick",
          value: function _handleClick() {
            this._stepper.next();
          }
        }]);

        return CdkStepperNext;
      }();

      CdkStepperNext.ɵfac = function CdkStepperNext_Factory(t) {
        return new (t || CdkStepperNext)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](CdkStepper));
      };

      CdkStepperNext.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
        type: CdkStepperNext,
        selectors: [["button", "cdkStepperNext", ""]],
        hostVars: 1,
        hostBindings: function CdkStepperNext_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CdkStepperNext_click_HostBindingHandler() {
              return ctx._handleClick();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵhostProperty"]("type", ctx.type);
          }
        },
        inputs: {
          type: "type"
        }
      });

      CdkStepperNext.ctorParameters = function () {
        return [{
          type: CdkStepper
        }];
      };

      CdkStepperNext.propDecorators = {
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        _handleClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"],
          args: ['click']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](CdkStepperNext, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
          args: [{
            selector: 'button[cdkStepperNext]',
            host: {
              '[type]': 'type'
            }
          }]
        }], function () {
          return [{
            type: CdkStepper
          }];
        }, {
          type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
          }],
          // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
          // In Ivy the `host` bindings will be merged when this class is extended, whereas in
          // ViewEngine they're overwritten.
          // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
          // tslint:disable-next-line:no-host-decorator-in-concrete
          _handleClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"],
            args: ['click']
          }]
        });
      })();
      /** Button that moves to the previous step in a stepper workflow. */


      var CdkStepperPrevious = /*#__PURE__*/function () {
        function CdkStepperPrevious(_stepper) {
          _classCallCheck(this, CdkStepperPrevious);

          this._stepper = _stepper;
          /** Type of the previous button. Defaults to "button" if not specified. */

          this.type = 'button';
        } // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
        // In Ivy the `host` bindings will be merged when this class is extended, whereas in
        // ViewEngine they're overwritten.
        // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
        // tslint:disable-next-line:no-host-decorator-in-concrete


        _createClass(CdkStepperPrevious, [{
          key: "_handleClick",
          value: function _handleClick() {
            this._stepper.previous();
          }
        }]);

        return CdkStepperPrevious;
      }();

      CdkStepperPrevious.ɵfac = function CdkStepperPrevious_Factory(t) {
        return new (t || CdkStepperPrevious)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](CdkStepper));
      };

      CdkStepperPrevious.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
        type: CdkStepperPrevious,
        selectors: [["button", "cdkStepperPrevious", ""]],
        hostVars: 1,
        hostBindings: function CdkStepperPrevious_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CdkStepperPrevious_click_HostBindingHandler() {
              return ctx._handleClick();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵhostProperty"]("type", ctx.type);
          }
        },
        inputs: {
          type: "type"
        }
      });

      CdkStepperPrevious.ctorParameters = function () {
        return [{
          type: CdkStepper
        }];
      };

      CdkStepperPrevious.propDecorators = {
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        _handleClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"],
          args: ['click']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](CdkStepperPrevious, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
          args: [{
            selector: 'button[cdkStepperPrevious]',
            host: {
              '[type]': 'type'
            }
          }]
        }], function () {
          return [{
            type: CdkStepper
          }];
        }, {
          type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
          }],
          // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
          // In Ivy the `host` bindings will be merged when this class is extended, whereas in
          // ViewEngine they're overwritten.
          // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
          // tslint:disable-next-line:no-host-decorator-in-concrete
          _handleClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"],
            args: ['click']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var CdkStepperModule = /*#__PURE__*/_createClass(function CdkStepperModule() {
        _classCallCheck(this, CdkStepperModule);
      });

      CdkStepperModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: CdkStepperModule
      });
      CdkStepperModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        factory: function CdkStepperModule_Factory(t) {
          return new (t || CdkStepperModule)();
        },
        imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["BidiModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](CdkStepperModule, {
          declarations: function declarations() {
            return [CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious];
          },
          imports: function imports() {
            return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["BidiModule"]];
          },
          exports: function exports() {
            return [CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](CdkStepperModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"],
          args: [{
            imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["BidiModule"]],
            exports: [CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious],
            declarations: [CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=stepper.js.map

      /***/

    },

    /***/
    "DZPJ":
    /*!*************************************************************************************!*\
      !*** ./src/app/modules/pages/assessment/product-select/product-select.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: ProductSelectComponent */

    /***/
    function DZPJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductSelectComponent", function () {
        return ProductSelectComponent;
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


      var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../services/data.service */
      "EnSQ");
      /* harmony import */


      var _services_form_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../services/form-data.service */
      "3aqe");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _components_product_display_product_display_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../components/product-display/product-display.component */
      "TQNn");

      function ProductSelectComponent_ng_container_0_button_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductSelectComponent_ng_container_0_button_5_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var product_r2 = ctx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r3.select(product_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-product-display", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var product_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", product_r2);
        }
      }

      function ProductSelectComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "PRODUCTPICKER_HEADING");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProductSelectComponent_ng_container_0_button_5_Template, 2, 1, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductSelectComponent_ng_container_0_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.select(null);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "PRODUCTPICKER_SYSTEMPICK");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.processedProducts);
        }
      }

      var ProductSelectComponent = /*#__PURE__*/function () {
        function ProductSelectComponent(dataService, formDataService) {
          _classCallCheck(this, ProductSelectComponent);

          this.dataService = dataService;
          this.formDataService = formDataService;
          this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.processedProducts = null;
        }

        _createClass(ProductSelectComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.formDataService.processedProducts.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$)).subscribe(function (processedProducts) {
              return _this4.processedProducts = processedProducts;
            });
          }
        }, {
          key: "ready",
          value: function ready() {
            return true;
          }
        }, {
          key: "select",
          value: function select(product) {
            this.formDataService.productSelectionControls.selectedProduct.setValue({
              productId: product === null || product === void 0 ? void 0 : product.id
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroyed$.next();
            this.destroyed$.complete();
          }
        }]);

        return ProductSelectComponent;
      }();

      ProductSelectComponent.ɵfac = function ProductSelectComponent_Factory(t) {
        return new (t || ProductSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_form_data_service__WEBPACK_IMPORTED_MODULE_4__["FormDataService"]));
      };

      ProductSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProductSelectComponent,
        selectors: [["app-product-select"]],
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], ["ngx-translate", ""], [1, "products"], ["mat-button", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-button", "", 3, "click"], [3, "product"]],
        template: function ProductSelectComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductSelectComponent_ng_container_0_Template, 9, 1, "ng-container", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ready());
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _components_product_display_product_display_component__WEBPACK_IMPORTED_MODULE_8__["ProductDisplayComponent"]],
        styles: [".products[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(min-content, max-content);\n  justify-content: center;\n}\n\nbutton[_ngcontent-%COMP%] {\n  white-space: normal !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlcy9hc3Nlc3NtZW50L3Byb2R1Y3Qtc2VsZWN0L3Byb2R1Y3Qtc2VsZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHVEQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLDhCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3BhZ2VzL2Fzc2Vzc21lbnQvcHJvZHVjdC1zZWxlY3QvcHJvZHVjdC1zZWxlY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdHMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heChtaW4tY29udGVudCwgbWF4LWNvbnRlbnQpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuYnV0dG9uIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductSelectComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-product-select',
            templateUrl: './product-select.component.html',
            styleUrls: ['./product-select.component.scss']
          }]
        }], function () {
          return [{
            type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
          }, {
            type: _services_form_data_service__WEBPACK_IMPORTED_MODULE_4__["FormDataService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "LUsJ":
    /*!******************************************************************!*\
      !*** ./src/app/modules/pages/assessment/assessment.component.ts ***!
      \******************************************************************/

    /*! exports provided: AssessmentComponent */

    /***/
    function LUsJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssessmentComponent", function () {
        return AssessmentComponent;
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


      var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../services/login.service */
      "EFyh");
      /* harmony import */


      var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../services/data.service */
      "EnSQ");
      /* harmony import */


      var _services_form_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../services/form-data.service */
      "3aqe");
      /* harmony import */


      var _services_layout_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../services/layout.service */
      "nqAl");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _generated_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../generated/api */
      "UIhn");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/stepper */
      "xHqg");
      /* harmony import */


      var _general_form_general_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./general-form/general-form.component */
      "WBuy");
      /* harmony import */


      var _samples_form_samples_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./samples-form/samples-form.component */
      "+gIK");
      /* harmony import */


      var _components_result_result_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../components/result/result.component */
      "OBCW");
      /* harmony import */


      var _prev_next_buttons_prev_next_buttons_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./prev-next-buttons/prev-next-buttons.component */
      "V3Cf");

      var _c0 = ["stepper"];

      function AssessmentComponent_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", " " + _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "HEADER_FOR"), " ", ctx_r0.species.text, " ");
        }
      }

      function AssessmentComponent_mat_horizontal_stepper_7_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "General information");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AssessmentComponent_mat_horizontal_stepper_7_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Elsa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AssessmentComponent_mat_horizontal_stepper_7_ng_template_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Result");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AssessmentComponent_mat_horizontal_stepper_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-horizontal-stepper", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function AssessmentComponent_mat_horizontal_stepper_7_Template_mat_horizontal_stepper_selectionChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.stepperChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-step", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AssessmentComponent_mat_horizontal_stepper_7_ng_template_3_Template, 2, 0, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-general-form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-step", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AssessmentComponent_mat_horizontal_stepper_7_ng_template_7_Template, 2, 0, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-samples-form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-step");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AssessmentComponent_mat_horizontal_stepper_7_ng_template_11_Template, 2, 0, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "app-result", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("restart", function AssessmentComponent_mat_horizontal_stepper_7_Template_app_result_restart_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.formDataService.resetAll();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("linear", true)("selectedIndex", ctx_r1.currentStep);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx_r1.formDataService.generalForm)("editable", !ctx_r1.onResultStep);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx_r1.formDataService.samplesForm)("editable", !ctx_r1.onResultStep);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("resultOutput", ctx_r1.resultOutput)("apiErrors", ctx_r1.apiErrors);
        }
      }

      function AssessmentComponent_mat_vertical_stepper_8_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "General information");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AssessmentComponent_mat_vertical_stepper_8_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Elsa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AssessmentComponent_mat_vertical_stepper_8_ng_template_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Result");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AssessmentComponent_mat_vertical_stepper_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-vertical-stepper", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function AssessmentComponent_mat_vertical_stepper_8_Template_mat_vertical_stepper_selectionChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r15.stepperChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-step", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AssessmentComponent_mat_vertical_stepper_8_ng_template_3_Template, 2, 0, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-general-form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-step", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AssessmentComponent_mat_vertical_stepper_8_ng_template_6_Template, 2, 0, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-samples-form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-step");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AssessmentComponent_mat_vertical_stepper_8_ng_template_9_Template, 2, 0, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-result", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("restart", function AssessmentComponent_mat_vertical_stepper_8_Template_app_result_restart_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r17.formDataService.resetAll();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("linear", true)("selectedIndex", ctx_r2.currentStep);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx_r2.formDataService.generalForm)("editable", !ctx_r2.onResultStep);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx_r2.formDataService.samplesForm)("editable", !ctx_r2.onResultStep);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("resultOutput", ctx_r2.resultOutput);
        }
      }

      function AssessmentComponent_app_prev_next_buttons_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-prev-next-buttons", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("next", function AssessmentComponent_app_prev_next_buttons_10_Template_app_prev_next_buttons_next_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r18.move("next");
          })("previous", function AssessmentComponent_app_prev_next_buttons_10_Template_app_prev_next_buttons_previous_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r20.move("prev");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("previousEnabled", ctx_r3.backEnabled())("nextEnabled", ctx_r3.nextEnabled())("hideNext", ctx_r3.onProductStep);
        }
      }

      var AssessmentComponent = /*#__PURE__*/function () {
        function AssessmentComponent(loginService, dataService, formDataService, layoutService, translateService, sampleFormService) {
          _classCallCheck(this, AssessmentComponent);

          this.loginService = loginService;
          this.dataService = dataService;
          this.formDataService = formDataService;
          this.layoutService = layoutService;
          this.translateService = translateService;
          this.sampleFormService = sampleFormService;
          this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.resultOutput = null;
          this.species = null;
          this.loggedIn = null;
          this.concentrationStepMove$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.concentrationStepMove = this.concentrationStepMove$;
          this.stepperVertical = false;
          this.currentStep = 0;
          this.onResultStep = false;
          this.onProductStep = false;
          this.canGoBack = false;
          this.canGoNext = false;
          this.apiErrors = null;
        }

        _createClass(AssessmentComponent, [{
          key: "onBeforeUnload",
          value: function onBeforeUnload(evt) {
            if (this.formDataService.generalForm.dirty) {
              evt.preventDefault();
              evt.returnValue = '';
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.layoutService.stepperVerticalMode.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$)).subscribe(function (stepperVertical) {
              return _this5.stepperVertical = stepperVertical;
            });
            this.formDataService.species.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$)).subscribe(function (species) {
              return _this5.species = species;
            });
            this.formDataService.currentStep.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$)).subscribe(function (currentStep) {
              _this5.currentStep = currentStep;
            });
            this.formDataService.onResultStep.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$)).subscribe(function (onResultStep) {
              return _this5.onResultStep = onResultStep;
            });
            this.formDataService.onProductSelectStep.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$)).subscribe(function (onProductStep) {
              return _this5.onProductStep = onProductStep;
            });
            this.formDataService.reset.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$)).subscribe(function () {
              return _this5.stepper.reset();
            });
            this.loginService.loggedIn.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$)).subscribe(function (loggedIn) {
              return _this5.loggedIn = loggedIn;
            });
            this.formDataService.resultOutput.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$)).subscribe(function (resultOutput) {
              return _this5.resultOutput = resultOutput;
            });
            this.formDataService.apiErrors.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$)).subscribe(function (apiErrors) {
              _this5.apiErrors = apiErrors;
            });
          }
        }, {
          key: "headerHighlight",
          value: function headerHighlight() {
            return this.translateService.get('HEADER_REGULAR').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (translation) {
              var split = translation.split(' ');

              switch (split.length) {
                case 0:
                case 1:
                  return translation;

                case 2:
                  return split[0];

                default:
                  return "".concat(split[0], " ").concat(split[1]);
              }
            }));
          }
        }, {
          key: "headerRest",
          value: function headerRest() {
            return this.translateService.get('HEADER_REGULAR').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (translation) {
              var split = translation.split(' ');

              switch (split.length) {
                case 0:
                case 1:
                  return '';

                case 2:
                  return ' ' + split[1];

                default:
                  return ' ' + split.slice(2).join(' ');
              }
            }));
          }
        }, {
          key: "backEnabled",
          value: function backEnabled() {
            return this.currentStep > 0 && this.currentStep !== (this.loggedIn ? 4 : 3);
          }
        }, {
          key: "nextEnabled",
          value: function nextEnabled() {
            switch (this.currentStep) {
              case 0:
                return this.formDataService.generalForm.valid;

              case 1:
                return this.formDataService.samplesForm.valid && this.formDataService.speciesNewForm.valid;
              // case 2:
              //     return this.formDataService.concentrationForms.valid;

              default:
                return false;
            }
          }
        }, {
          key: "stepperChange",
          value: function stepperChange(event) {
            this.formDataService.setCurrentStep(event.selectedIndex);
          }
        }, {
          key: "move",
          value: function move(dir) {
            var _this6 = this;

            if (this.stepper.selectedIndex === 2) {
              this.concentrationStepMove$.next(dir);
              this.stepperMove(dir);
            } else if (this.stepper.selectedIndex === 1) {
              var ingredients = '';
              var inclusionPercentage = '';
              this.formDataService.samplesFormArray.value.forEach(function (data) {
                if (data.component && data.name) {
                  if (ingredients) {
                    ingredients = "".concat(ingredients, ",").concat(data.component);
                    inclusionPercentage = "".concat(inclusionPercentage, ",").concat(data.name);
                  } else {
                    ingredients = data.component;
                    inclusionPercentage = data.name;
                  }
                }
              });
              this.sampleFormService.sampleFormCreate({
                "species": this.formDataService.speciesNewForm.get("speciesNew").value,
                "ingredients": ingredients,
                "inclusion_percentage": inclusionPercentage
              }).subscribe(function (resultOutput) {
                _this6.resultOutput = resultOutput;

                _this6.stepperMove(dir);

                _this6.onProductStep = true;
              });
            } else {
              this.stepperMove(dir);
            }
          }
        }, {
          key: "stepperMove",
          value: function stepperMove(dir) {
            if (dir === 'next') {
              this.stepper.next();
            } else {
              this.stepper.previous();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroyed$.next();
            this.destroyed$.complete();
            this.concentrationStepMove$.complete();
          }
        }]);

        return AssessmentComponent;
      }();

      AssessmentComponent.ɵfac = function AssessmentComponent_Factory(t) {
        return new (t || AssessmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_form_data_service__WEBPACK_IMPORTED_MODULE_5__["FormDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_6__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_generated_api__WEBPACK_IMPORTED_MODULE_8__["SampleFormService"]));
      };

      AssessmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AssessmentComponent,
        selectors: [["app-assessment"]],
        viewQuery: function AssessmentComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stepper = _t.first);
          }
        },
        hostBindings: function AssessmentComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("beforeunload", function AssessmentComponent_beforeunload_HostBindingHandler($event) {
              return ctx.onBeforeUnload($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
          }
        },
        decls: 11,
        vars: 7,
        consts: [[1, "heading-highlight"], [4, "ngIf"], [3, "linear", "selectedIndex", "selectionChange", 4, "ngIf"], [1, "prev-next-container"], [3, "previousEnabled", "nextEnabled", "hideNext", "next", "previous", 4, "ngIf"], [3, "linear", "selectedIndex", "selectionChange"], ["stepper", ""], [3, "stepControl", "editable"], ["matStepLabel", ""], [1, "step-inner"], [3, "resultOutput", "apiErrors", "restart"], ["ngx-translate", ""], [3, "resultOutput", "restart"], [3, "previousEnabled", "nextEnabled", "hideNext", "next", "previous"]],
        template: function AssessmentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Nutrient Matrix Calculator For Enzyme Application");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AssessmentComponent_ng_container_6_Template, 3, 4, "ng-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AssessmentComponent_mat_horizontal_stepper_7_Template, 14, 8, "mat-horizontal-stepper", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AssessmentComponent_mat_vertical_stepper_8_Template, 11, 7, "mat-vertical-stepper", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AssessmentComponent_app_prev_next_buttons_10_Template, 1, 3, "app-prev-next-buttons", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, ctx.headerRest()));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.species != null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.stepperVertical);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.stepperVertical);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.onResultStep);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStep"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepLabel"], _general_form_general_form_component__WEBPACK_IMPORTED_MODULE_11__["GeneralFormComponent"], _samples_form_samples_form_component__WEBPACK_IMPORTED_MODULE_12__["SamplesFormComponent"], _components_result_result_component__WEBPACK_IMPORTED_MODULE_13__["ResultComponent"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatVerticalStepper"], _prev_next_buttons_prev_next_buttons_component__WEBPACK_IMPORTED_MODULE_14__["PrevNextButtonsComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]],
        styles: ["h2[_ngcontent-%COMP%] {\n  margin: 3.125rem 0;\n}\n\napp-prev-next-buttons[_ngcontent-%COMP%] {\n  display: block;\n}\n\n[_nghost-%COMP%]     .mat-horizontal-content-container {\n  padding: 0 0 0.6875rem 0;\n}\n\nmat-horizontal-stepper[_ngcontent-%COMP%]   .step-inner[_ngcontent-%COMP%] {\n  margin-top: 3.1875rem;\n}\n\napp-prev-next-buttons[_ngcontent-%COMP%] {\n  margin-top: 1.6375rem;\n}\n\n.prev-next-container[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], .step-inner[_ngcontent-%COMP%] {\n  padding: 0 1rem;\n}\n\n@media print {\n  h2[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlcy9hc3Nlc3NtZW50L2Fzc2Vzc21lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUdFO0VBQ0Usd0JBQUE7QUFBSjs7QUFJQTtFQUNFLHFCQUFBO0FBREY7O0FBSUE7RUFDRSxxQkFBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtBQURGOztBQUlBO0VBQ0U7SUFDRSxhQUFBO0VBREY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvYXNzZXNzbWVudC9hc3Nlc3NtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xuICBtYXJnaW46IDMuMTI1cmVtIDA7XG59XG5cbmFwcC1wcmV2LW5leHQtYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG46aG9zdCA6Om5nLWRlZXAge1xuICAubWF0LWhvcml6b250YWwtY29udGVudC1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDAgMCAwLjY4NzVyZW0gMDtcbiAgfVxufVxuXG5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyIC5zdGVwLWlubmVyIHtcbiAgbWFyZ2luLXRvcDogMy4xODc1cmVtO1xufVxuXG5hcHAtcHJldi1uZXh0LWJ1dHRvbnMge1xuICBtYXJnaW4tdG9wOiAxLjYzNzVyZW07XG59XG5cbi5wcmV2LW5leHQtY29udGFpbmVyLCBoMiwgLnN0ZXAtaW5uZXIge1xuICBwYWRkaW5nOiAwIDFyZW07XG59XG5cbkBtZWRpYSBwcmludCB7XG4gIGgyIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AssessmentComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-assessment',
            templateUrl: './assessment.component.html',
            styleUrls: ['./assessment.component.scss']
          }]
        }], function () {
          return [{
            type: _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
          }, {
            type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
          }, {
            type: _services_form_data_service__WEBPACK_IMPORTED_MODULE_5__["FormDataService"]
          }, {
            type: _services_layout_service__WEBPACK_IMPORTED_MODULE_6__["LayoutService"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
          }, {
            type: _generated_api__WEBPACK_IMPORTED_MODULE_8__["SampleFormService"]
          }];
        }, {
          stepper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['stepper']
          }],
          onBeforeUnload: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:beforeunload', ['$event']]
          }]
        });
      })();
      /***/

    },

    /***/
    "V3Cf":
    /*!*******************************************************************************************!*\
      !*** ./src/app/modules/pages/assessment/prev-next-buttons/prev-next-buttons.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: PrevNextButtonsComponent */

    /***/
    function V3Cf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrevNextButtonsComponent", function () {
        return PrevNextButtonsComponent;
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


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function PrevNextButtonsComponent_button_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function PrevNextButtonsComponent_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrevNextButtonsComponent_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.previous.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PrevNextButtonsComponent_button_1_ng_container_1_Template, 1, 0, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r4);
        }
      }

      function PrevNextButtonsComponent_button_2_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function PrevNextButtonsComponent_button_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrevNextButtonsComponent_button_2_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.previous.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PrevNextButtonsComponent_button_2_ng_container_1_Template, 1, 0, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r4);
        }
      }

      function PrevNextButtonsComponent_button_3_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function PrevNextButtonsComponent_button_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrevNextButtonsComponent_button_3_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r15.next.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PrevNextButtonsComponent_button_3_ng_container_1_Template, 1, 0, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-hidden", ctx_r2.hideNext);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r6);
        }
      }

      function PrevNextButtonsComponent_button_4_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function PrevNextButtonsComponent_button_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrevNextButtonsComponent_button_4_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r18.next.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PrevNextButtonsComponent_button_4_ng_container_1_Template, 1, 0, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-hidden", ctx_r3.hideNext);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r6);
        }
      }

      function PrevNextButtonsComponent_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "navigate_before");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "BACK");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PrevNextButtonsComponent_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "NEXT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "navigate_next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var PrevNextButtonsComponent = /*#__PURE__*/_createClass(function PrevNextButtonsComponent() {
        _classCallCheck(this, PrevNextButtonsComponent);

        this.previousEnabled = true;
        this.nextEnabled = true;
        this.hideNext = false;
        this.next = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.previous = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      });

      PrevNextButtonsComponent.ɵfac = function PrevNextButtonsComponent_Factory(t) {
        return new (t || PrevNextButtonsComponent)();
      };

      PrevNextButtonsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PrevNextButtonsComponent,
        selectors: [["app-prev-next-buttons"]],
        inputs: {
          previousEnabled: "previousEnabled",
          nextEnabled: "nextEnabled",
          hideNext: "hideNext"
        },
        outputs: {
          next: "next",
          previous: "previous"
        },
        decls: 9,
        vars: 4,
        consts: [[1, "prev-next-buttons"], ["mat-stroked-button", "", "class", "ew-stroke-button ew-icon-button ew-icon-button--pre", 3, "click", 4, "ngIf"], ["mat-stroked-button", "", "class", "ew-stroke-button ew-icon-button ew-icon-button--pre", 3, "disabled", "click", 4, "ngIf"], ["mat-flat-button", "", "color", "primary", "class", "ew-flat-button ew-icon-button ew-icon-button--post", 3, "btn-hidden", "click", 4, "ngIf"], ["mat-stroked-button", "", "class", "ew-stroke-button ew-icon-button ew-icon-button--post", 3, "disabled", "btn-hidden", "click", 4, "ngIf"], ["prevTpl", ""], ["nextTpl", ""], ["mat-stroked-button", "", 1, "ew-stroke-button", "ew-icon-button", "ew-icon-button--pre", 3, "click"], [4, "ngTemplateOutlet"], ["mat-stroked-button", "", 1, "ew-stroke-button", "ew-icon-button", "ew-icon-button--pre", 3, "disabled", "click"], ["mat-flat-button", "", "color", "primary", 1, "ew-flat-button", "ew-icon-button", "ew-icon-button--post", 3, "click"], ["mat-stroked-button", "", 1, "ew-stroke-button", "ew-icon-button", "ew-icon-button--post", 3, "disabled", "click"], ["ngx-translate", ""]],
        template: function PrevNextButtonsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PrevNextButtonsComponent_button_1_Template, 2, 1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PrevNextButtonsComponent_button_2_Template, 2, 2, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PrevNextButtonsComponent_button_3_Template, 2, 3, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PrevNextButtonsComponent_button_4_Template, 2, 4, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PrevNextButtonsComponent_ng_template_5_Template, 4, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PrevNextButtonsComponent_ng_template_7_Template, 4, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.previousEnabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.previousEnabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nextEnabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.nextEnabled);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateDirective"]],
        styles: [".prev-next-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n@media screen and (max-width: 575px) {\n  .prev-next-buttons[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    flex: 1;\n    display: block;\n  }\n  .prev-next-buttons[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:first-child) {\n    margin-left: 1em;\n  }\n  .prev-next-buttons[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 1em;\n  }\n}\n.prev-next-buttons[_ngcontent-%COMP%]   .btn-hidden[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlcy9hc3Nlc3NtZW50L3ByZXYtbmV4dC1idXR0b25zL3ByZXYtbmV4dC1idXR0b25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBQ0Y7QUFDRTtFQUNFO0lBQ0UsT0FBQTtJQUNBLGNBQUE7RUFDSjtFQUNJO0lBQ0UsZ0JBQUE7RUFDTjtFQUVJO0lBQ0UsaUJBQUE7RUFBTjtBQUNGO0FBSUU7RUFDRSxrQkFBQTtBQUZKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wYWdlcy9hc3Nlc3NtZW50L3ByZXYtbmV4dC1idXR0b25zL3ByZXYtbmV4dC1idXR0b25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByZXYtbmV4dC1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gICAgPiAqIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBkaXNwbGF5OiBibG9jaztcblxuICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxZW07XG4gICAgICB9XG5cbiAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5idG4taGlkZGVuIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cblxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrevNextButtonsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-prev-next-buttons',
            templateUrl: './prev-next-buttons.component.html',
            styleUrls: ['./prev-next-buttons.component.scss']
          }]
        }], null, {
          previousEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nextEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          hideNext: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          next: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          previous: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "WBuy":
    /*!*********************************************************************************!*\
      !*** ./src/app/modules/pages/assessment/general-form/general-form.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: GeneralFormComponent */

    /***/
    function WBuy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GeneralFormComponent", function () {
        return GeneralFormComponent;
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


      var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../services/data.service */
      "EnSQ");
      /* harmony import */


      var _generated_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../generated/api */
      "UIhn");
      /* harmony import */


      var _services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../services/login.service */
      "EFyh");
      /* harmony import */


      var _services_form_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../services/form-data.service */
      "3aqe");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function GeneralFormComponent_ng_container_0_ng_container_2_input_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 11);
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r7.controls.customerName);
        }
      }

      function GeneralFormComponent_ng_container_0_ng_container_2_input_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 12);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r9)("formControl", ctx_r8.controls.customerName);
        }
      }

      function GeneralFormComponent_ng_container_0_ng_container_2_mat_option_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var c_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", c_r11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r11.name);
        }
      }

      function GeneralFormComponent_ng_container_0_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "STEPONE_CUSTOMER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "STEPONE_CUSTOMER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GeneralFormComponent_ng_container_0_ng_container_2_input_7_Template, 1, 1, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, GeneralFormComponent_ng_container_0_ng_container_2_input_8_Template, 1, 2, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-autocomplete", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, GeneralFormComponent_ng_container_0_ng_container_2_mat_option_11_Template, 2, 2, "mat-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.hasCustomerDbAccess);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.hasCustomerDbAccess);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx_r1.customerDisplayFn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.searchResults);
        }
      }

      function GeneralFormComponent_ng_container_0_mat_option_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var country_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", country_r12.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", country_r12.text, " ");
        }
      }

      function GeneralFormComponent_ng_container_0_mat_option_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var species_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", species_r13.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", species_r13.text, " ");
        }
      }

      function GeneralFormComponent_ng_container_0_ng_container_19_mat_option_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var laboratory_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", laboratory_r15.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", laboratory_r15.text, " ");
        }
      }

      function GeneralFormComponent_ng_container_0_ng_container_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "STEPONE_LABORATORY_LABEL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "STEPONE_LABORATORY");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-select", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, GeneralFormComponent_ng_container_0_ng_container_19_mat_option_8_Template, 2, 2, "mat-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r4.controls.laboratory);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.data.laboratories);
        }
      }

      function GeneralFormComponent_ng_container_0_mat_option_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sampleType_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", sampleType_r16.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", sampleType_r16.text, " ");
        }
      }

      function GeneralFormComponent_ng_container_0_ng_container_28_ng_container_3_button_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeneralFormComponent_ng_container_0_ng_container_28_ng_container_3_button_6_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

            return ctx_r22.addRecipient();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "add_circle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function GeneralFormComponent_ng_container_0_ng_container_28_ng_container_3_button_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeneralFormComponent_ng_container_0_ng_container_28_ng_container_3_button_7_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

            var i_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r24.removeRecipient(i_r19);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "remove_circle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function GeneralFormComponent_ng_container_0_ng_container_28_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "STEPONE_EMAIL_LABEL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GeneralFormComponent_ng_container_0_ng_container_28_ng_container_3_button_6_Template, 3, 0, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GeneralFormComponent_ng_container_0_ng_container_28_ng_container_3_button_7_Template, 3, 0, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var control_r18 = ctx.$implicit;
          var i_r19 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", control_r18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r19 === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r19 !== 0);
        }
      }

      function GeneralFormComponent_ng_container_0_ng_container_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "STEPONE_EMAIL_LABEL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GeneralFormComponent_ng_container_0_ng_container_28_ng_container_3_Template, 8, 3, "ng-container", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.controls.recipients.controls);
        }
      }

      function GeneralFormComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GeneralFormComponent_ng_container_0_ng_container_2_Template, 12, 4, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "SELECT COUNTRY");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "COUNTRY");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-select", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, GeneralFormComponent_ng_container_0_mat_option_10_Template, 2, 2, "mat-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "SELECT SPECIES");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "SPECIES");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-select", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, GeneralFormComponent_ng_container_0_mat_option_18_Template, 2, 2, "mat-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, GeneralFormComponent_ng_container_0_ng_container_19_Template, 9, 2, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "SELECT SAMPLE TYPE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "SAMPLE TYPE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-select", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, GeneralFormComponent_ng_container_0_mat_option_27_Template, 2, 2, "mat-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, GeneralFormComponent_ng_container_0_ng_container_28_Template, 4, 1, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isInternalUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.controls.country);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.data.countries);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.controls.species);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.data.species);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.controls.sampleType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.data.sampleTypes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loggedIn);
        }
      }

      var GeneralFormComponent = /*#__PURE__*/function () {
        function GeneralFormComponent(dataService, customerService, loginService, formDataService) {
          _classCallCheck(this, GeneralFormComponent);

          this.dataService = dataService;
          this.customerService = customerService;
          this.loginService = loginService;
          this.formDataService = formDataService;
          this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.loggedIn = false;
          this.isInternalUser = false;
          this.hasCustomerDbAccess = false;
          this.searchResults = [];
          this.data = [];
          this.formGroup = formDataService.generalForm;
          this.controls = formDataService.generalFormControls;
        }

        _createClass(GeneralFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // this.dataService.data.pipe(
            //     takeUntil(this.destroyed$)
            // ).subscribe(data => {
            //     this.data = data;
            // });
            this.data = {
              "countries": [{
                "id": "AA",
                "region": "Demo",
                "text": "Demonstration",
                "display_recommendations": true
              }, {
                "id": "AB",
                "region": "Demo",
                "text": "Demonstration - China",
                "display_recommendations": true
              }, {
                "id": "AE",
                "region": "MEA",
                "text": "United Arab Emirates",
                "display_recommendations": true
              }, {
                "id": "AR",
                "region": "LA",
                "text": "Argentina",
                "display_recommendations": true
              }, {
                "id": "AT",
                "region": "EU",
                "text": "Austria",
                "display_recommendations": true
              }, {
                "id": "AU",
                "region": "SEAP",
                "text": "Australia",
                "display_recommendations": true
              }, {
                "id": "BD",
                "region": "SA",
                "text": "Bangladesh",
                "display_recommendations": true
              }, {
                "id": "BE",
                "region": "EU",
                "text": "Belgium",
                "display_recommendations": true
              }, {
                "id": "BG",
                "region": "EU",
                "text": "Bulgaria",
                "display_recommendations": true
              }, {
                "id": "BM",
                "region": "SEAP",
                "text": "Republic of Indonesia",
                "display_recommendations": true
              }, {
                "id": "BO",
                "region": "CEE",
                "text": "Bosnia",
                "display_recommendations": true
              }, {
                "id": "BR",
                "region": "LA",
                "text": "Brazil",
                "display_recommendations": true
              }, {
                "id": "CH",
                "region": "EU",
                "text": "Switzerland",
                "display_recommendations": true
              }, {
                "id": "CL",
                "region": "LA",
                "text": "Chile",
                "display_recommendations": true
              }, {
                "id": "CN",
                "region": "CN",
                "text": "China",
                "display_recommendations": true
              }, {
                "id": "CO",
                "region": "LA",
                "text": "Colombia",
                "display_recommendations": true
              }, {
                "id": "CR",
                "region": "LA",
                "text": "Costa Rica",
                "display_recommendations": true
              }, {
                "id": "CZ",
                "region": "EU",
                "text": "Czech Republic",
                "display_recommendations": true
              }, {
                "id": "DE",
                "region": "EU",
                "text": "Germany",
                "display_recommendations": true
              }, {
                "id": "DK",
                "region": "EU",
                "text": "Denmark",
                "display_recommendations": true
              }, {
                "id": "DZ",
                "region": "MEA",
                "text": "Algeria",
                "display_recommendations": true
              }, {
                "id": "EE",
                "region": "EU",
                "text": "Estonia",
                "display_recommendations": true
              }, {
                "id": "EG",
                "region": "MEA",
                "text": "Egypt",
                "display_recommendations": true
              }, {
                "id": "ES",
                "region": "EU",
                "text": "Spain",
                "display_recommendations": true
              }, {
                "id": "FR",
                "region": "EU",
                "text": "France",
                "display_recommendations": true
              }, {
                "id": "GB",
                "region": "EU",
                "text": "United Kingdom",
                "display_recommendations": true
              }, {
                "id": "GE",
                "region": "EU",
                "text": "Georgia",
                "display_recommendations": true
              }, {
                "id": "GR",
                "region": "EU",
                "text": "Greece",
                "display_recommendations": true
              }, {
                "id": "HR",
                "region": "EU",
                "text": "Croatia",
                "display_recommendations": true
              }, {
                "id": "ID",
                "region": "SEAP",
                "text": "Indonesia",
                "display_recommendations": true
              }, {
                "id": "IL",
                "region": "MEA",
                "text": "Israel",
                "display_recommendations": true
              }, {
                "id": "IN",
                "region": "SA",
                "text": "India",
                "display_recommendations": true
              }, {
                "id": "IQ",
                "region": "MEA",
                "text": "Iraq",
                "display_recommendations": true
              }, {
                "id": "IR",
                "region": "MEA",
                "text": "Iran",
                "display_recommendations": true
              }, {
                "id": "IT",
                "region": "EU",
                "text": "Italy",
                "display_recommendations": true
              }, {
                "id": "JO",
                "region": "MEA",
                "text": "Jordan",
                "display_recommendations": true
              }, {
                "id": "JP",
                "region": "JP",
                "text": "Japan",
                "display_recommendations": true
              }, {
                "id": "KE",
                "region": "Africa",
                "text": "Kenya",
                "display_recommendations": true
              }, {
                "id": "KR",
                "region": "JP",
                "text": "South Korea",
                "display_recommendations": true
              }, {
                "id": "KW",
                "region": "MEA",
                "text": "Kuwait",
                "display_recommendations": true
              }, {
                "id": "LB",
                "region": "MEA",
                "text": "Lebanon",
                "display_recommendations": true
              }, {
                "id": "LK",
                "region": "SA",
                "text": "Sri Lanka",
                "display_recommendations": true
              }, {
                "id": "LT",
                "region": "EU",
                "text": "Lithuania",
                "display_recommendations": true
              }, {
                "id": "LU",
                "region": "EU",
                "text": "Luxembourg",
                "display_recommendations": true
              }, {
                "id": "LV",
                "region": "EU",
                "text": "Latvia",
                "display_recommendations": true
              }, {
                "id": "MA",
                "region": "MEA",
                "text": "Morocco",
                "display_recommendations": true
              }, {
                "id": "MX",
                "region": "LA",
                "text": "Mexico",
                "display_recommendations": true
              }, {
                "id": "MY",
                "region": "SEAP",
                "text": "Malaysia",
                "display_recommendations": true
              }, {
                "id": "NG",
                "region": "Africa",
                "text": "Nigeria",
                "display_recommendations": true
              }, {
                "id": "NL",
                "region": "EU",
                "text": "Netherlands",
                "display_recommendations": true
              }, {
                "id": "NP",
                "region": "SA",
                "text": "Nepal",
                "display_recommendations": true
              }, {
                "id": "NZ",
                "region": "SEAP",
                "text": "New Zealand",
                "display_recommendations": true
              }, {
                "id": "OM",
                "region": "MEA",
                "text": "Oman",
                "display_recommendations": true
              }, {
                "id": "PE",
                "region": "LA",
                "text": "Peru",
                "display_recommendations": true
              }, {
                "id": "PH",
                "region": "SEAP",
                "text": "Philippines",
                "display_recommendations": true
              }, {
                "id": "PK",
                "region": "MEA",
                "text": "Pakistan",
                "display_recommendations": true
              }, {
                "id": "PL",
                "region": "EU",
                "text": "Poland",
                "display_recommendations": true
              }, {
                "id": "PT",
                "region": "EU",
                "text": "Portugal",
                "display_recommendations": true
              }, {
                "id": "RO",
                "region": "EU",
                "text": "Romania",
                "display_recommendations": true
              }, {
                "id": "RS",
                "region": "EU",
                "text": "Serbia",
                "display_recommendations": true
              }, {
                "id": "RU",
                "region": "RU",
                "text": "Russia",
                "display_recommendations": true
              }, {
                "id": "SA",
                "region": "MEA",
                "text": "Saudi Arabia",
                "display_recommendations": true
              }, {
                "id": "SD",
                "region": "MEA",
                "text": "Sudan",
                "display_recommendations": true
              }, {
                "id": "SI",
                "region": "EU",
                "text": "Slovenia",
                "display_recommendations": true
              }, {
                "id": "TH",
                "region": "SEAP",
                "text": "Thailand",
                "display_recommendations": true
              }, {
                "id": "TN",
                "region": "MEA",
                "text": "Tunisia",
                "display_recommendations": true
              }, {
                "id": "TR",
                "region": "EU",
                "text": "Turkey",
                "display_recommendations": true
              }, {
                "id": "TZ",
                "region": "SSA",
                "text": "Tanzania",
                "display_recommendations": true
              }, {
                "id": "UA",
                "region": "RU",
                "text": "Ukraine",
                "display_recommendations": true
              }, {
                "id": "US",
                "region": "US",
                "text": "United States",
                "display_recommendations": false
              }, {
                "id": "VN",
                "region": "SEAP",
                "text": "Vietnam",
                "display_recommendations": true
              }, {
                "id": "ZA",
                "region": "MEA",
                "text": "South Africa",
                "display_recommendations": true
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
              "sampleTypes": [{
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
              }]
            }; // this.loginService.currentUser.pipe(
            //     takeUntil(this.destroyed$)
            // ).subscribe(user => {
            //     this.loggedIn = user != null;
            //     this.isInternalUser = user?.ew_status === 'intern' ?? false;
            //     this.hasCustomerDbAccess = user?.customer_database_access ?? false;
            // });
            // this.loginService.currentUser.pipe(
            //     map(user => user?.customer_database_access ?? false),
            //     distinctUntilChanged(),
            //     switchMap<boolean, ObservableInput<Customer[]>>(customerDbAccess => {
            //         if (!customerDbAccess) {
            //             return  [[]];
            //         } else {
            //             return this.controls.customerName.valueChanges.pipe(
            //                 startWith(0),
            //                 map(() => this.controls.customerName.value ?? ''),
            //                 map(searchObj => typeof searchObj === 'string' ? searchObj : (searchObj?.name ?? '')),
            //                 map(searchTerm => searchTerm.trim()),
            //                 distinctUntilChanged(),
            //                 debounceTime(500),
            //                 switchMap(searchTerm => {
            //                     return this.customerService.customersList(1, 10, searchTerm === '' ? undefined : searchTerm);
            //                 }),
            //                 map(response => response.results ?? []),
            //                 catchError(err => {
            //                     console.error('Failed getting autocomplete', err);
            //                     return [[]];
            //                 })
            //             );
            //         }
            //     }),
            //     takeUntil(this.destroyed$)
            // ).subscribe(searchResults => {
            //     this.searchResults = searchResults;
            // })
          }
        }, {
          key: "customerDisplayFn",
          value: function customerDisplayFn(customer) {
            var _a;

            return (_a = customer === null || customer === void 0 ? void 0 : customer.name) !== null && _a !== void 0 ? _a : '';
          }
        }, {
          key: "addRecipient",
          value: function addRecipient() {
            this.formDataService.addRecipient();
          }
        }, {
          key: "removeRecipient",
          value: function removeRecipient(index) {
            this.formDataService.removeRecipient(index);
          }
        }, {
          key: "ready",
          value: function ready() {
            return this.data != null;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroyed$.next();
            this.destroyed$.complete();
          }
        }]);

        return GeneralFormComponent;
      }();

      GeneralFormComponent.ɵfac = function GeneralFormComponent_Factory(t) {
        return new (t || GeneralFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_generated_api__WEBPACK_IMPORTED_MODULE_3__["CustomersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_form_data_service__WEBPACK_IMPORTED_MODULE_5__["FormDataService"]));
      };

      GeneralFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GeneralFormComponent,
        selectors: [["app-general-form"]],
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], [1, "form-grid"], ["ngx-translate", "", 1, "label", "ew-grid-label"], ["appearance", "standard"], ["ngx-translate", ""], [3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", 3, "formControl", 4, "ngIf"], ["matInput", "", 3, "matAutocomplete", "formControl", 4, "ngIf"], [3, "displayWith"], ["auto", "matAutocomplete"], ["matInput", "", 3, "formControl"], ["matInput", "", 3, "matAutocomplete", "formControl"], [3, "value"], [4, "ngFor", "ngForOf"], ["matInput", "", "type", "email", 3, "formControl"], ["mat-icon-button", "", "aria-label", "Add another recipient", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "aria-label", "Remove this recipient", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "aria-label", "Add another recipient", 3, "click"], ["mat-icon-button", "", "aria-label", "Remove this recipient", 3, "click"]],
        template: function GeneralFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GeneralFormComponent_ng_container_0_Template, 29, 9, "ng-container", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ready());
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocomplete"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteTrigger"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"]],
        styles: [".form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr min-content;\n  align-items: center;\n}\n.form-grid[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  grid-column: 1;\n  margin-right: 1.5em;\n}\n.form-grid[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  grid-column: 2;\n}\n@media screen and (max-width: 575px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr min-content;\n  }\n  .form-grid[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n    grid-column: 1;\n  }\n  .form-grid[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlcy9hc3Nlc3NtZW50L2dlbmVyYWwtZm9ybS9nZW5lcmFsLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsMENBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUVFO0VBQ0UsY0FBQTtBQUFKO0FBSUE7RUFDRTtJQUNFLHNDQUFBO0VBREY7RUFHRTtJQUNFLGNBQUE7RUFESjtFQUlFO0lBQ0UsYUFBQTtFQUZKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3BhZ2VzL2Fzc2Vzc21lbnQvZ2VuZXJhbC1mb3JtL2dlbmVyYWwtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgbWluLWNvbnRlbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgLmxhYmVsIHtcbiAgICBncmlkLWNvbHVtbjogMTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNWVtO1xuICB9XG5cbiAgbWF0LWZvcm0tZmllbGQge1xuICAgIGdyaWQtY29sdW1uOiAyO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIC5mb3JtLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIG1pbi1jb250ZW50O1xuXG4gICAgbWF0LWZvcm0tZmllbGQge1xuICAgICAgZ3JpZC1jb2x1bW46IDE7XG4gICAgfVxuXG4gICAgLmxhYmVsIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralFormComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-general-form',
            templateUrl: './general-form.component.html',
            styleUrls: ['./general-form.component.scss']
          }]
        }], function () {
          return [{
            type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
          }, {
            type: _generated_api__WEBPACK_IMPORTED_MODULE_3__["CustomersService"]
          }, {
            type: _services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]
          }, {
            type: _services_form_data_service__WEBPACK_IMPORTED_MODULE_5__["FormDataService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "bbaX":
    /*!*******************************************************************************************!*\
      !*** ./src/app/modules/pages/assessment/assessment-detail/assessment-detail.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: AssessmentDetailComponent */

    /***/
    function bbaX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssessmentDetailComponent", function () {
        return AssessmentDetailComponent;
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


      var _services_form_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../services/form-data.service */
      "3aqe");
      /* harmony import */


      var _generated_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../generated/api */
      "UIhn");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _components_result_result_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../components/result/result.component */
      "OBCW");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");

      function AssessmentDetailComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-result", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("resultOutput", ctx_r0.resultOutput)("showButtons", false)("externalReport", ctx_r0.externalReport);
        }
      }

      function AssessmentDetailComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var AssessmentDetailComponent = /*#__PURE__*/function () {
        function AssessmentDetailComponent(route, formDataService, assessmentService) {
          _classCallCheck(this, AssessmentDetailComponent);

          this.route = route;
          this.formDataService = formDataService;
          this.assessmentService = assessmentService;
          this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.loading = true;
          this.resultOutput = null;
          this.externalReport = false;
        }

        _createClass(AssessmentDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([this.route.paramMap, this.route.queryParamMap]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () {
              return _this7.loading = true;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  params = _ref2[0],
                  queryParams = _ref2[1];

              return {
                id: params.get('id'),
                secret: params.get('secret'),
                externalReport: queryParams.get('report_type') === 'external'
              };
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (_ref3) {
              var id = _ref3.id,
                  secret = _ref3.secret,
                  externalReport = _ref3.externalReport;
              return _this7.assessmentService.assessmentRetrieve(id, secret).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (apiOutput) {
                return {
                  apiOutput: apiOutput,
                  externalReport: externalReport
                };
              }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (_ref4) {
              var apiOutput = _ref4.apiOutput,
                  externalReport = _ref4.externalReport;
              return _this7.formDataService.makeResultOutput(apiOutput).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resultOutput) {
                return {
                  resultOutput: resultOutput,
                  externalReport: externalReport
                };
              }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () {
              return _this7.loading = false;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$)).subscribe(function (_ref5) {
              var resultOutput = _ref5.resultOutput,
                  externalReport = _ref5.externalReport;
              _this7.resultOutput = resultOutput;
              _this7.externalReport = externalReport;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroyed$.next();
            this.destroyed$.complete();
          }
        }]);

        return AssessmentDetailComponent;
      }();

      AssessmentDetailComponent.ɵfac = function AssessmentDetailComponent_Factory(t) {
        return new (t || AssessmentDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_form_data_service__WEBPACK_IMPORTED_MODULE_4__["FormDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_generated_api__WEBPACK_IMPORTED_MODULE_5__["AssessmentService"]));
      };

      AssessmentDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AssessmentDetailComponent,
        selectors: [["app-assessment-detail"]],
        decls: 3,
        vars: 2,
        consts: [[4, "ngIf", "ngIfElse"], ["spinner", ""], [3, "resultOutput", "showButtons", "externalReport"], [1, "spinner-container"], ["color", "primary"]],
        template: function AssessmentDetailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AssessmentDetailComponent_ng_container_0_Template, 2, 3, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AssessmentDetailComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _components_result_result_component__WEBPACK_IMPORTED_MODULE_7__["ResultComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatSpinner"]],
        styles: ["[_nghost-%COMP%] {\n  display: block;\n  padding: 0 24px;\n}\n@media print {\n  [_nghost-%COMP%] {\n    padding: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlcy9hc3Nlc3NtZW50L2Fzc2Vzc21lbnQtZGV0YWlsL2Fzc2Vzc21lbnQtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFDRjtBQUNJO0VBSko7SUFLUSxVQUFBO0VBRU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvYXNzZXNzbWVudC9hc3Nlc3NtZW50LWRldGFpbC9hc3Nlc3NtZW50LWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDAgMjRweDtcblxuICAgIEBtZWRpYSBwcmludCB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AssessmentDetailComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-assessment-detail',
            templateUrl: './assessment-detail.component.html',
            styleUrls: ['./assessment-detail.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: _services_form_data_service__WEBPACK_IMPORTED_MODULE_4__["FormDataService"]
          }, {
            type: _generated_api__WEBPACK_IMPORTED_MODULE_5__["AssessmentService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "egsl":
    /*!***************************************************************!*\
      !*** ./src/app/modules/pages/assessment/assessment.module.ts ***!
      \***************************************************************/

    /*! exports provided: AssessmentModule */

    /***/
    function egsl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssessmentModule", function () {
        return AssessmentModule;
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


      var _assessment_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./assessment-routing.module */
      "64Pv");
      /* harmony import */


      var _assessment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./assessment.component */
      "LUsJ");
      /* harmony import */


      var _general_form_general_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./general-form/general-form.component */
      "WBuy");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _samples_form_samples_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./samples-form/samples-form.component */
      "+gIK");
      /* harmony import */


      var _concentration_form_concentration_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./concentration-form/concentration-form.component */
      "gBio");
      /* harmony import */


      var _concentration_step_concentration_step_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./concentration-step/concentration-step.component */
      "tNuE");
      /* harmony import */


      var _product_select_product_select_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./product-select/product-select.component */
      "DZPJ");
      /* harmony import */


      var _prev_next_buttons_prev_next_buttons_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./prev-next-buttons/prev-next-buttons.component */
      "V3Cf");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../components/components.module */
      "aDnW");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/stepper */
      "xHqg");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _assessment_detail_assessment_detail_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./assessment-detail/assessment-detail.component */
      "bbaX");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");

      var AssessmentModule = /*#__PURE__*/_createClass(function AssessmentModule() {
        _classCallCheck(this, AssessmentModule);
      });

      AssessmentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AssessmentModule
      });
      AssessmentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AssessmentModule_Factory(t) {
          return new (t || AssessmentModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_12__["ComponentsModule"], _assessment_routing_module__WEBPACK_IMPORTED_MODULE_2__["AssessmentRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__["MatStepperModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__["MatAutocompleteModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AssessmentModule, {
          declarations: [_assessment_component__WEBPACK_IMPORTED_MODULE_3__["AssessmentComponent"], _general_form_general_form_component__WEBPACK_IMPORTED_MODULE_4__["GeneralFormComponent"], _samples_form_samples_form_component__WEBPACK_IMPORTED_MODULE_6__["SamplesFormComponent"], _concentration_form_concentration_form_component__WEBPACK_IMPORTED_MODULE_7__["ConcentrationFormComponent"], _concentration_step_concentration_step_component__WEBPACK_IMPORTED_MODULE_8__["ConcentrationStepComponent"], _product_select_product_select_component__WEBPACK_IMPORTED_MODULE_9__["ProductSelectComponent"], _prev_next_buttons_prev_next_buttons_component__WEBPACK_IMPORTED_MODULE_10__["PrevNextButtonsComponent"], _assessment_detail_assessment_detail_component__WEBPACK_IMPORTED_MODULE_20__["AssessmentDetailComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_12__["ComponentsModule"], _assessment_routing_module__WEBPACK_IMPORTED_MODULE_2__["AssessmentRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__["MatStepperModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__["MatAutocompleteModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AssessmentModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_assessment_component__WEBPACK_IMPORTED_MODULE_3__["AssessmentComponent"], _general_form_general_form_component__WEBPACK_IMPORTED_MODULE_4__["GeneralFormComponent"], _samples_form_samples_form_component__WEBPACK_IMPORTED_MODULE_6__["SamplesFormComponent"], _concentration_form_concentration_form_component__WEBPACK_IMPORTED_MODULE_7__["ConcentrationFormComponent"], _concentration_step_concentration_step_component__WEBPACK_IMPORTED_MODULE_8__["ConcentrationStepComponent"], _product_select_product_select_component__WEBPACK_IMPORTED_MODULE_9__["ProductSelectComponent"], _prev_next_buttons_prev_next_buttons_component__WEBPACK_IMPORTED_MODULE_10__["PrevNextButtonsComponent"], _assessment_detail_assessment_detail_component__WEBPACK_IMPORTED_MODULE_20__["AssessmentDetailComponent"]],
            exports: [],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_12__["ComponentsModule"], _assessment_routing_module__WEBPACK_IMPORTED_MODULE_2__["AssessmentRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__["MatStepperModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__["MatAutocompleteModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "gBio":
    /*!*********************************************************************************************!*\
      !*** ./src/app/modules/pages/assessment/concentration-form/concentration-form.component.ts ***!
      \*********************************************************************************************/

    /*! exports provided: ConcentrationFormComponent */

    /***/
    function gBio(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConcentrationFormComponent", function () {
        return ConcentrationFormComponent;
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


      var _services_form_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../services/form-data.service */
      "3aqe");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../services/data.service */
      "EnSQ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      function ConcentrationFormComponent_ng_container_0_ng_container_2_mat_option_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var unit_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", unit_r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](unit_r5.text);
        }
      }

      var _c0 = function _c0(a0, a1) {
        return {
          unit: a0,
          mycotoxin: a1
        };
      };

      function ConcentrationFormComponent_ng_container_0_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "STEPTHREE_CONCENTRATION");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-select", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ConcentrationFormComponent_ng_container_0_ng_container_2_mat_option_10_Template, 2, 2, "mat-option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var mycotoxin_r2 = ctx.$implicit;
          var i_r3 = ctx.index;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", mycotoxin_r2.text, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, ctx_r1.formArray.controls[i_r3].get("unit").value.text, mycotoxin_r2.text));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r1.formArray.controls[i_r3].get("value"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r1.formArray.controls[i_r3].get("unit"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.units);
        }
      }

      function ConcentrationFormComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ConcentrationFormComponent_ng_container_0_ng_container_2_Template, 11, 8, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.data.mycotoxins);
        }
      }

      var ConcentrationFormComponent = /*#__PURE__*/function () {
        function ConcentrationFormComponent(formDataService, dataService) {
          _classCallCheck(this, ConcentrationFormComponent);

          this.formDataService = formDataService;
          this.dataService = dataService;
          this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.data = null;
          this.units = _services_form_data_service__WEBPACK_IMPORTED_MODULE_2__["concentrationUnits"];
        }

        _createClass(ConcentrationFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            this.dataService.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$)).subscribe(function (data) {
              return _this8.data = data;
            });
          }
        }, {
          key: "ready",
          value: function ready() {
            return this.data != null && this.formArray != null && this.formArray.length === this.data.mycotoxins.length;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroyed$.next();
            this.destroyed$.complete();
          }
        }]);

        return ConcentrationFormComponent;
      }();

      ConcentrationFormComponent.ɵfac = function ConcentrationFormComponent_Factory(t) {
        return new (t || ConcentrationFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_form_data_service__WEBPACK_IMPORTED_MODULE_2__["FormDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]));
      };

      ConcentrationFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ConcentrationFormComponent,
        selectors: [["app-concentration-form"]],
        inputs: {
          formArray: "formArray"
        },
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], [1, "form-grid"], [4, "ngFor", "ngForOf"], [1, "first", "ew-grid-label"], ["appearance", "standard", 1, "second"], ["ngx-translate", "", 3, "translateParams"], ["matInput", "", "type", "number", 3, "formControl"], ["appearance", "standard", 1, "third"], [3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
        template: function ConcentrationFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ConcentrationFormComponent_ng_container_0_Template, 3, 1, "ng-container", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ready());
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateDirective"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControlDirective"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"]],
        styles: [".form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr min-content;\n  align-items: center;\n}\n.form-grid[_ngcontent-%COMP%]   .first[_ngcontent-%COMP%] {\n  grid-column: 1;\n  padding-right: 1em;\n}\n.form-grid[_ngcontent-%COMP%]   .second[_ngcontent-%COMP%] {\n  grid-column: 2;\n  padding-left: 1em;\n  padding-right: 1em;\n}\n.form-grid[_ngcontent-%COMP%]   .third[_ngcontent-%COMP%] {\n  padding-left: 1em;\n}\n@media screen and (max-width: 575px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: auto 3em;\n  }\n  .form-grid[_ngcontent-%COMP%]   .first[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .form-grid[_ngcontent-%COMP%]   .second[_ngcontent-%COMP%] {\n    grid-column: 1;\n    padding: 0;\n  }\n  .form-grid[_ngcontent-%COMP%]   .third[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlcy9hc3Nlc3NtZW50L2NvbmNlbnRyYXRpb24tZm9ybS9jb25jZW50cmF0aW9uLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsMENBQUE7RUFDQSxtQkFBQTtBQUNGO0FBR0U7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFESjtBQUlFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFGSjtBQUtFO0VBQ0UsaUJBQUE7QUFISjtBQU9BO0VBQ0U7SUFDRSwrQkFBQTtFQUpGO0VBTUU7SUFDRSxhQUFBO0VBSko7RUFPRTtJQUNFLGNBQUE7SUFDQSxVQUFBO0VBTEo7RUFPRTtJQUNFLFVBQUE7RUFMSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wYWdlcy9hc3Nlc3NtZW50L2NvbmNlbnRyYXRpb24tZm9ybS9jb25jZW50cmF0aW9uLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIG1pbi1jb250ZW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICRzcGFjZTogMmVtO1xuXG4gIC5maXJzdCB7XG4gICAgZ3JpZC1jb2x1bW46IDE7XG4gICAgcGFkZGluZy1yaWdodDogJHNwYWNlIC8gMjtcbiAgfVxuXG4gIC5zZWNvbmQge1xuICAgIGdyaWQtY29sdW1uOiAyO1xuICAgIHBhZGRpbmctbGVmdDogJHNwYWNlIC8gMjtcbiAgICBwYWRkaW5nLXJpZ2h0OiAkc3BhY2UgLyAyO1xuICB9XG5cbiAgLnRoaXJkIHtcbiAgICBwYWRkaW5nLWxlZnQ6ICRzcGFjZSAvIDI7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLmZvcm0tZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDNlbTtcblxuICAgIC5maXJzdCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5zZWNvbmQge1xuICAgICAgZ3JpZC1jb2x1bW46IDE7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgIH1cbiAgICAudGhpcmQge1xuICAgICAgcGFkZGluZzogMDtcbiAgICB9XG4gIH1cbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConcentrationFormComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-concentration-form',
            templateUrl: './concentration-form.component.html',
            styleUrls: ['./concentration-form.component.scss']
          }]
        }], function () {
          return [{
            type: _services_form_data_service__WEBPACK_IMPORTED_MODULE_2__["FormDataService"]
          }, {
            type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
          }];
        }, {
          formArray: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "tNuE":
    /*!*********************************************************************************************!*\
      !*** ./src/app/modules/pages/assessment/concentration-step/concentration-step.component.ts ***!
      \*********************************************************************************************/

    /*! exports provided: ConcentrationStepComponent */

    /***/
    function tNuE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConcentrationStepComponent", function () {
        return ConcentrationStepComponent;
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


      var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../services/data.service */
      "EnSQ");
      /* harmony import */


      var _services_layout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../services/layout.service */
      "nqAl");
      /* harmony import */


      var _services_form_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../services/form-data.service */
      "3aqe");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/stepper */
      "xHqg");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _concentration_form_concentration_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../concentration-form/concentration-form.component */
      "gBio");

      var _c0 = ["stepper"];

      function ConcentrationStepComponent_ng_container_0_mat_horizontal_stepper_1_mat_step_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-step");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "STEPTHREE_HEADING_PREFIX");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "STEPTHREE_HEADING_SUFFIX");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-concentration-form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var form_r5 = ctx.$implicit;
          var index_r6 = ctx.index;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r4.samplesFormInfo[index_r6].component == null ? null : ctx_r4.samplesFormInfo[index_r6].component.text, ": ", ctx_r4.samplesFormInfo[index_r6].sampleName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formArray", form_r5.get("concentrations"));
        }
      }

      function ConcentrationStepComponent_ng_container_0_mat_horizontal_stepper_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-horizontal-stepper", null, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ConcentrationStepComponent_ng_container_0_mat_horizontal_stepper_1_mat_step_2_Template, 8, 3, "mat-step", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.concentrationForms.controls);
        }
      }

      function ConcentrationStepComponent_ng_container_0_mat_vertical_stepper_2_mat_step_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-step");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "STEPTHREE_HEADING_PREFIX");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "STEPTHREE_HEADING_SUFFIX");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-concentration-form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var form_r9 = ctx.$implicit;
          var index_r10 = ctx.index;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r8.samplesFormInfo[index_r10].component == null ? null : ctx_r8.samplesFormInfo[index_r10].component.text, ": ", ctx_r8.samplesFormInfo[index_r10].sampleName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formArray", form_r9.get("concentrations"));
        }
      }

      function ConcentrationStepComponent_ng_container_0_mat_vertical_stepper_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-vertical-stepper", null, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ConcentrationStepComponent_ng_container_0_mat_vertical_stepper_2_mat_step_2_Template, 8, 3, "mat-step", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.concentrationForms.controls);
        }
      }

      function ConcentrationStepComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ConcentrationStepComponent_ng_container_0_mat_horizontal_stepper_1_Template, 3, 1, "mat-horizontal-stepper", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ConcentrationStepComponent_ng_container_0_mat_vertical_stepper_2_Template, 3, 1, "mat-vertical-stepper", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.stepperVertical);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.stepperVertical);
        }
      }

      var ConcentrationStepComponent = /*#__PURE__*/function () {
        function ConcentrationStepComponent(dataService, layoutService, formDataService) {
          _classCallCheck(this, ConcentrationStepComponent);

          this.dataService = dataService;
          this.layoutService = layoutService;
          this.formDataService = formDataService;
          this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.moveSubscription = null;
          this.move = null;
          this.outerMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.sampleData = null;
          this.stepperVertical = false;
          this.samplesFormInfo = null;
          this.concentrationForms = formDataService.concentrationForms;
        }

        _createClass(ConcentrationStepComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            this.layoutService.stepperVerticalMode.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$)).subscribe(function (stepperVertical) {
              return _this9.stepperVertical = stepperVertical;
            });
            this.dataService.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$)).subscribe(function (data) {
              return _this9.data = data;
            });
            this.formDataService.sampleFormInfo.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$)).subscribe(function (samplesFormInfo) {
              return _this9.samplesFormInfo = samplesFormInfo;
            });
          }
        }, {
          key: "ready",
          value: function ready() {
            return this.samplesFormInfo != null && this.samplesFormInfo.length === this.concentrationForms.length;
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var _this10 = this;

            if (changes.move) {
              if (this.moveSubscription != null) {
                this.moveSubscription.unsubscribe();
                this.moveSubscription = null;
              }

              if (this.move != null) {
                this.move.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$)).subscribe(function (moveEvent) {
                  if (moveEvent === 'next') {
                    if (_this10.stepper.selectedIndex === _this10.stepper.steps.length - 1) {
                      _this10.outerMove.emit(moveEvent);
                    } else {
                      _this10.stepper.next();
                    }
                  } else {
                    if (_this10.stepper.selectedIndex === 0) {
                      _this10.outerMove.emit(moveEvent);
                    } else {
                      _this10.stepper.previous();
                    }
                  }
                });
              }
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroyed$.next();
            this.destroyed$.complete();
          }
        }]);

        return ConcentrationStepComponent;
      }();

      ConcentrationStepComponent.ɵfac = function ConcentrationStepComponent_Factory(t) {
        return new (t || ConcentrationStepComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_form_data_service__WEBPACK_IMPORTED_MODULE_5__["FormDataService"]));
      };

      ConcentrationStepComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ConcentrationStepComponent,
        selectors: [["app-concentration-step"]],
        viewQuery: function ConcentrationStepComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stepper = _t.first);
          }
        },
        inputs: {
          move: "move"
        },
        outputs: {
          outerMove: "outerMove"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], ["stepper", ""], [4, "ngFor", "ngForOf"], ["ngx-translate", ""], [3, "formArray"]],
        template: function ConcentrationStepComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ConcentrationStepComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ready());
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatHorizontalStepper"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStep"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateDirective"], _concentration_form_concentration_form_component__WEBPACK_IMPORTED_MODULE_9__["ConcentrationFormComponent"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatVerticalStepper"]],
        styles: ["[_nghost-%COMP%]     .mat-step-header, [_nghost-%COMP%]     .mat-horizontal-stepper-header-container {\n  display: none;\n}\n[_nghost-%COMP%]     .mat-vertical-content-container {\n  margin-left: 0;\n}\n[_nghost-%COMP%]     .mat-vertical-content {\n  padding: 0;\n}\n[_nghost-%COMP%]     .mat-stepper-vertical-line::before {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlcy9hc3Nlc3NtZW50L2NvbmNlbnRyYXRpb24tc3RlcC9jb25jZW50cmF0aW9uLXN0ZXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0FBQUo7QUFHRTtFQUNFLGNBQUE7QUFESjtBQUlFO0VBQ0UsVUFBQTtBQUZKO0FBS0U7RUFDRSxhQUFBO0FBSEoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3BhZ2VzL2Fzc2Vzc21lbnQvY29uY2VudHJhdGlvbi1zdGVwL2NvbmNlbnRyYXRpb24tc3RlcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCB7IC8vIGhhY2tldHkgaGFjayBoYWNrXG4gIC5tYXQtc3RlcC1oZWFkZXIsIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlci1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubWF0LXZlcnRpY2FsLWNvbnRlbnQtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuXG4gIC5tYXQtdmVydGljYWwtY29udGVudCB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIC5tYXQtc3RlcHBlci12ZXJ0aWNhbC1saW5lOjpiZWZvcmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConcentrationStepComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-concentration-step',
            templateUrl: './concentration-step.component.html',
            styleUrls: ['./concentration-step.component.scss']
          }]
        }], function () {
          return [{
            type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
          }, {
            type: _services_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"]
          }, {
            type: _services_form_data_service__WEBPACK_IMPORTED_MODULE_5__["FormDataService"]
          }];
        }, {
          move: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          outerMove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          stepper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['stepper']
          }]
        });
      })();
      /***/

    },

    /***/
    "xHqg":
    /*!*************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js ***!
      \*************************************************************************/

    /*! exports provided: MAT_STEPPER_INTL_PROVIDER, MAT_STEPPER_INTL_PROVIDER_FACTORY, MatHorizontalStepper, MatStep, MatStepHeader, MatStepLabel, MatStepper, MatStepperIcon, MatStepperIntl, MatStepperModule, MatStepperNext, MatStepperPrevious, MatVerticalStepper, matStepperAnimations */

    /***/
    function xHqg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_STEPPER_INTL_PROVIDER", function () {
        return MAT_STEPPER_INTL_PROVIDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_STEPPER_INTL_PROVIDER_FACTORY", function () {
        return MAT_STEPPER_INTL_PROVIDER_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatHorizontalStepper", function () {
        return MatHorizontalStepper;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatStep", function () {
        return MatStep;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatStepHeader", function () {
        return MatStepHeader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatStepLabel", function () {
        return MatStepLabel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatStepper", function () {
        return MatStepper;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatStepperIcon", function () {
        return MatStepperIcon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatStepperIntl", function () {
        return MatStepperIntl;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatStepperModule", function () {
        return MatStepperModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatStepperNext", function () {
        return MatStepperNext;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatStepperPrevious", function () {
        return MatStepperPrevious;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatVerticalStepper", function () {
        return MatVerticalStepper;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "matStepperAnimations", function () {
        return matStepperAnimations;
      });
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "+rOU");
      /* harmony import */


      var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/stepper */
      "B/XX");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      function MatStepHeader_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0, 8);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.iconOverrides[ctx_r0.state])("ngTemplateOutletContext", ctx_r0._getIconContext());
        }
      }

      function MatStepHeader_ng_container_4_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r6._getDefaultTextForState(ctx_r6.state));
        }
      }

      function MatStepHeader_ng_container_4_mat_icon_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r7._getDefaultTextForState(ctx_r7.state));
        }
      }

      function MatStepHeader_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MatStepHeader_ng_container_4_span_1_Template, 2, 1, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, MatStepHeader_ng_container_4_mat_icon_2_Template, 2, 1, "mat-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitch", ctx_r1.state);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "number");
        }
      }

      function MatStepHeader_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](1, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2._templateLabel().template);
        }
      }

      function MatStepHeader_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.label);
        }
      }

      function MatStepHeader_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r4._intl.optionalLabel);
        }
      }

      function MatStepHeader_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r5.errorMessage);
        }
      }

      function MatStep_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
        }
      }

      var _c0 = ["*"];

      function MatHorizontalStepper_ng_container_1_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 6);
        }
      }

      function MatHorizontalStepper_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-step-header", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MatHorizontalStepper_ng_container_1_Template_mat_step_header_click_1_listener() {
            var step_r2 = ctx.$implicit;
            return step_r2.select();
          })("keydown", function MatHorizontalStepper_ng_container_1_Template_mat_step_header_keydown_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r7._onKeydown($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, MatHorizontalStepper_ng_container_1_div_2_Template, 1, 0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var step_r2 = ctx.$implicit;
          var i_r3 = ctx.index;
          var isLast_r4 = ctx.last;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tabIndex", ctx_r0._getFocusIndex() === i_r3 ? 0 : -1)("id", ctx_r0._getStepLabelId(i_r3))("index", i_r3)("state", ctx_r0._getIndicatorType(i_r3, step_r2.state))("label", step_r2.stepLabel || step_r2.label)("selected", ctx_r0.selectedIndex === i_r3)("active", step_r2.completed || ctx_r0.selectedIndex === i_r3 || !ctx_r0.linear)("optional", step_r2.optional)("errorMessage", step_r2.errorMessage)("iconOverrides", ctx_r0._iconOverrides)("disableRipple", ctx_r0.disableRipple)("color", step_r2.color || ctx_r0.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-posinset", i_r3 + 1)("aria-setsize", ctx_r0.steps.length)("aria-controls", ctx_r0._getStepContentId(i_r3))("aria-selected", ctx_r0.selectedIndex == i_r3)("aria-label", step_r2.ariaLabel || null)("aria-labelledby", !step_r2.ariaLabel && step_r2.ariaLabelledby ? step_r2.ariaLabelledby : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !isLast_r4);
        }
      }

      function MatHorizontalStepper_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("@stepTransition.done", function MatHorizontalStepper_div_3_Template_div_animation_stepTransition_done_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r11._animationDone.next($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](1, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var step_r9 = ctx.$implicit;
          var i_r10 = ctx.index;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@stepTransition", ctx_r1._getAnimationDirection(i_r10))("id", ctx_r1._getStepContentId(i_r10));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-labelledby", ctx_r1._getStepLabelId(i_r10))("aria-expanded", ctx_r1.selectedIndex === i_r10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", step_r9.content);
        }
      }

      function MatVerticalStepper_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-step-header", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MatVerticalStepper_div_0_Template_mat_step_header_click_1_listener() {
            var step_r1 = ctx.$implicit;
            return step_r1.select();
          })("keydown", function MatVerticalStepper_div_0_Template_mat_step_header_keydown_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r5._onKeydown($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("@stepTransition.done", function MatVerticalStepper_div_0_Template_div_animation_stepTransition_done_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r7._animationDone.next($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var step_r1 = ctx.$implicit;
          var i_r2 = ctx.index;
          var isLast_r3 = ctx.last;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tabIndex", ctx_r0._getFocusIndex() == i_r2 ? 0 : -1)("id", ctx_r0._getStepLabelId(i_r2))("index", i_r2)("state", ctx_r0._getIndicatorType(i_r2, step_r1.state))("label", step_r1.stepLabel || step_r1.label)("selected", ctx_r0.selectedIndex === i_r2)("active", step_r1.completed || ctx_r0.selectedIndex === i_r2 || !ctx_r0.linear)("optional", step_r1.optional)("errorMessage", step_r1.errorMessage)("iconOverrides", ctx_r0._iconOverrides)("disableRipple", ctx_r0.disableRipple)("color", step_r1.color || ctx_r0.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-posinset", i_r2 + 1)("aria-setsize", ctx_r0.steps.length)("aria-controls", ctx_r0._getStepContentId(i_r2))("aria-selected", ctx_r0.selectedIndex === i_r2)("aria-label", step_r1.ariaLabel || null)("aria-labelledby", !step_r1.ariaLabel && step_r1.ariaLabelledby ? step_r1.ariaLabelledby : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-stepper-vertical-line", !isLast_r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@stepTransition", ctx_r0._getAnimationDirection(i_r2))("id", ctx_r0._getStepContentId(i_r2));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-labelledby", ctx_r0._getStepLabelId(i_r2))("aria-expanded", ctx_r0.selectedIndex === i_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", step_r1.content);
        }
      }

      var _c1 = ".mat-stepper-vertical,.mat-stepper-horizontal{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:\"\";display:inline-block;height:0;position:absolute;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;height:24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content[aria-expanded=false]{height:0;overflow:hidden}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:\"\";position:absolute;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}\n";

      var MatStepLabel = /*#__PURE__*/function (_angular_cdk_stepper_) {
        _inherits(MatStepLabel, _angular_cdk_stepper_);

        var _super = _createSuper(MatStepLabel);

        function MatStepLabel() {
          _classCallCheck(this, MatStepLabel);

          return _super.apply(this, arguments);
        }

        return _createClass(MatStepLabel);
      }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepLabel"]);

      MatStepLabel.ɵfac = function MatStepLabel_Factory(t) {
        return ɵMatStepLabel_BaseFactory(t || MatStepLabel);
      };

      MatStepLabel.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: MatStepLabel,
        selectors: [["", "matStepLabel", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵMatStepLabel_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](MatStepLabel);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatStepLabel, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: '[matStepLabel]'
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Stepper data that is required for internationalization. */


      var MatStepperIntl = /*#__PURE__*/_createClass(function MatStepperIntl() {
        _classCallCheck(this, MatStepperIntl);

        /**
         * Stream that emits whenever the labels here are changed. Use this to notify
         * components if the labels have changed after initialization.
         */
        this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        /** Label that is rendered below optional steps. */

        this.optionalLabel = 'Optional';
      });

      MatStepperIntl.ɵfac = function MatStepperIntl_Factory(t) {
        return new (t || MatStepperIntl)();
      };

      MatStepperIntl.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"])({
        factory: function MatStepperIntl_Factory() {
          return new MatStepperIntl();
        },
        token: MatStepperIntl,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatStepperIntl, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /** @docs-private */


      function MAT_STEPPER_INTL_PROVIDER_FACTORY(parentIntl) {
        return parentIntl || new MatStepperIntl();
      }
      /** @docs-private */


      var MAT_STEPPER_INTL_PROVIDER = {
        provide: MatStepperIntl,
        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"](), MatStepperIntl]],
        useFactory: MAT_STEPPER_INTL_PROVIDER_FACTORY
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Boilerplate for applying mixins to MatStepHeader.

      /** @docs-private */

      var MatStepHeaderBase = /*#__PURE__*/function (_angular_cdk_stepper_2) {
        _inherits(MatStepHeaderBase, _angular_cdk_stepper_2);

        var _super2 = _createSuper(MatStepHeaderBase);

        function MatStepHeaderBase(elementRef) {
          _classCallCheck(this, MatStepHeaderBase);

          return _super2.call(this, elementRef);
        }

        return _createClass(MatStepHeaderBase);
      }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepHeader"]);

      var _MatStepHeaderMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinColor"])(MatStepHeaderBase, 'primary');

      var MatStepHeader = /*#__PURE__*/function (_MatStepHeaderMixinBa) {
        _inherits(MatStepHeader, _MatStepHeaderMixinBa);

        var _super3 = _createSuper(MatStepHeader);

        function MatStepHeader(_intl, _focusMonitor, _elementRef, changeDetectorRef) {
          var _this11;

          _classCallCheck(this, MatStepHeader);

          _this11 = _super3.call(this, _elementRef);
          _this11._intl = _intl;
          _this11._focusMonitor = _focusMonitor;
          _this11._intlSubscription = _intl.changes.subscribe(function () {
            return changeDetectorRef.markForCheck();
          });
          return _this11;
        }

        _createClass(MatStepHeader, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this._focusMonitor.monitor(this._elementRef, true);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._intlSubscription.unsubscribe();

            this._focusMonitor.stopMonitoring(this._elementRef);
          }
          /** Focuses the step header. */

        }, {
          key: "focus",
          value: function focus(origin, options) {
            if (origin) {
              this._focusMonitor.focusVia(this._elementRef, origin, options);
            } else {
              this._elementRef.nativeElement.focus(options);
            }
          }
          /** Returns string label of given step if it is a text label. */

        }, {
          key: "_stringLabel",
          value: function _stringLabel() {
            return this.label instanceof MatStepLabel ? null : this.label;
          }
          /** Returns MatStepLabel if the label of given step is a template label. */

        }, {
          key: "_templateLabel",
          value: function _templateLabel() {
            return this.label instanceof MatStepLabel ? this.label : null;
          }
          /** Returns the host HTML element. */

        }, {
          key: "_getHostElement",
          value: function _getHostElement() {
            return this._elementRef.nativeElement;
          }
          /** Template context variables that are exposed to the `matStepperIcon` instances. */

        }, {
          key: "_getIconContext",
          value: function _getIconContext() {
            return {
              index: this.index,
              active: this.active,
              optional: this.optional
            };
          }
        }, {
          key: "_getDefaultTextForState",
          value: function _getDefaultTextForState(state) {
            if (state == 'number') {
              return "".concat(this.index + 1);
            }

            if (state == 'edit') {
              return 'create';
            }

            if (state == 'error') {
              return 'warning';
            }

            return state;
          }
        }]);

        return MatStepHeader;
      }(_MatStepHeaderMixinBase);

      MatStepHeader.ɵfac = function MatStepHeader_Factory(t) {
        return new (t || MatStepHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MatStepperIntl), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]));
      };

      MatStepHeader.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: MatStepHeader,
        selectors: [["mat-step-header"]],
        hostAttrs: ["role", "tab", 1, "mat-step-header", "mat-focus-indicator"],
        inputs: {
          color: "color",
          state: "state",
          label: "label",
          errorMessage: "errorMessage",
          iconOverrides: "iconOverrides",
          index: "index",
          selected: "selected",
          active: "active",
          optional: "optional",
          disableRipple: "disableRipple"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
        decls: 10,
        vars: 19,
        consts: [["matRipple", "", 1, "mat-step-header-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mat-step-icon-content", 3, "ngSwitch"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngSwitchCase"], [3, "ngSwitch", 4, "ngSwitchDefault"], [1, "mat-step-label"], ["class", "mat-step-text-label", 4, "ngIf"], ["class", "mat-step-optional", 4, "ngIf"], ["class", "mat-step-sub-label-error", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "mat-step-text-label"], [3, "ngTemplateOutlet"], [1, "mat-step-optional"], [1, "mat-step-sub-label-error"]],
        template: function MatStepHeader_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, MatStepHeader_ng_container_3_Template, 1, 2, "ng-container", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, MatStepHeader_ng_container_4_Template, 3, 2, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, MatStepHeader_div_6_Template, 2, 1, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, MatStepHeader_div_7_Template, 2, 1, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, MatStepHeader_div_8_Template, 2, 1, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, MatStepHeader_div_9_Template, 2, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx.disableRipple);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("mat-step-icon-state-", ctx.state, " mat-step-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-step-icon-selected", ctx.selected);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitch", !!(ctx.iconOverrides && ctx.iconOverrides[ctx.state]));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-step-label-active", ctx.active)("mat-step-label-selected", ctx.selected)("mat-step-label-error", ctx.state == "error");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx._templateLabel());

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx._stringLabel());

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.optional && ctx.state != "error");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.state == "error");
          }
        },
        directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRipple"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]],
        styles: [".mat-step-header{overflow:hidden;outline:none;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:transparent}.mat-step-optional,.mat-step-sub-label-error{font-size:12px}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative}.mat-step-icon-content,.mat-step-icon .mat-icon{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      MatStepHeader.ctorParameters = function () {
        return [{
          type: MatStepperIntl
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }];
      };

      MatStepHeader.propDecorators = {
        state: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        errorMessage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        iconOverrides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        index: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        active: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        optional: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        disableRipple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatStepHeader, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'mat-step-header',
            template: "<div class=\"mat-step-header-ripple\" matRipple\n     [matRippleTrigger]=\"_getHostElement()\"\n     [matRippleDisabled]=\"disableRipple\"></div>\n\n<div class=\"mat-step-icon-state-{{state}} mat-step-icon\" [class.mat-step-icon-selected]=\"selected\">\n  <div class=\"mat-step-icon-content\" [ngSwitch]=\"!!(iconOverrides && iconOverrides[state])\">\n    <ng-container\n      *ngSwitchCase=\"true\"\n      [ngTemplateOutlet]=\"iconOverrides[state]\"\n      [ngTemplateOutletContext]=\"_getIconContext()\"></ng-container>\n    <ng-container *ngSwitchDefault [ngSwitch]=\"state\">\n      <span *ngSwitchCase=\"'number'\">{{_getDefaultTextForState(state)}}</span>\n      <mat-icon *ngSwitchDefault>{{_getDefaultTextForState(state)}}</mat-icon>\n    </ng-container>\n  </div>\n</div>\n<div class=\"mat-step-label\"\n     [class.mat-step-label-active]=\"active\"\n     [class.mat-step-label-selected]=\"selected\"\n     [class.mat-step-label-error]=\"state == 'error'\">\n  <!-- If there is a label template, use it. -->\n  <div class=\"mat-step-text-label\" *ngIf=\"_templateLabel()\">\n    <ng-container [ngTemplateOutlet]=\"_templateLabel()!.template\"></ng-container>\n  </div>\n  <!-- If there is no label template, fall back to the text label. -->\n  <div class=\"mat-step-text-label\" *ngIf=\"_stringLabel()\">{{label}}</div>\n\n  <div class=\"mat-step-optional\" *ngIf=\"optional && state != 'error'\">{{_intl.optionalLabel}}</div>\n  <div class=\"mat-step-sub-label-error\" *ngIf=\"state == 'error'\">{{errorMessage}}</div>\n</div>\n\n",
            inputs: ['color'],
            host: {
              'class': 'mat-step-header mat-focus-indicator',
              'role': 'tab'
            },
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [".mat-step-header{overflow:hidden;outline:none;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:transparent}.mat-step-optional,.mat-step-sub-label-error{font-size:12px}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative}.mat-step-icon-content,.mat-step-icon .mat-icon{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n"]
          }]
        }], function () {
          return [{
            type: MatStepperIntl
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
          }];
        }, {
          state: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          errorMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          iconOverrides: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          optional: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          disableRipple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Animations used by the Material steppers.
       * @docs-private
       */


      var matStepperAnimations = {
        /** Animation that transitions the step along the X axis in a horizontal stepper. */
        horizontalStepTransition: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["trigger"])('stepTransition', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('previous', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({
          transform: 'translate3d(-100%, 0, 0)',
          visibility: 'hidden'
        })), // Transition to `inherit`, rather than `visible`,
        // because visibility on a child element the one from the parent,
        // making this element focusable inside of a `hidden` element.
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('current', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({
          transform: 'none',
          visibility: 'inherit'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('next', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({
          transform: 'translate3d(100%, 0, 0)',
          visibility: 'hidden'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animate"])('500ms cubic-bezier(0.35, 0, 0.25, 1)'))]),

        /** Animation that transitions the step along the Y axis in a vertical stepper. */
        verticalStepTransition: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["trigger"])('stepTransition', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('previous', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({
          height: '0px',
          visibility: 'hidden'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('next', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({
          height: '0px',
          visibility: 'hidden'
        })), // Transition to `inherit`, rather than `visible`,
        // because visibility on a child element the one from the parent,
        // making this element focusable inside of a `hidden` element.
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('current', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({
          height: '*',
          visibility: 'inherit'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["transition"])('* <=> current', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))])
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Template to be used to override the icons inside the step header.
       */

      var MatStepperIcon = /*#__PURE__*/_createClass(function MatStepperIcon(templateRef) {
        _classCallCheck(this, MatStepperIcon);

        this.templateRef = templateRef;
      });

      MatStepperIcon.ɵfac = function MatStepperIcon_Factory(t) {
        return new (t || MatStepperIcon)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]));
      };

      MatStepperIcon.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: MatStepperIcon,
        selectors: [["ng-template", "matStepperIcon", ""]],
        inputs: {
          name: ["matStepperIcon", "name"]
        }
      });

      MatStepperIcon.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
        }];
      };

      MatStepperIcon.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['matStepperIcon']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatStepperIcon, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: 'ng-template[matStepperIcon]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
          }];
        }, {
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['matStepperIcon']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatStep = /*#__PURE__*/function (_angular_cdk_stepper_3) {
        _inherits(MatStep, _angular_cdk_stepper_3);

        var _super4 = _createSuper(MatStep);

        /** @breaking-change 8.0.0 remove the `?` after `stepperOptions` */
        function MatStep(stepper, _errorStateMatcher, stepperOptions) {
          var _this12;

          _classCallCheck(this, MatStep);

          _this12 = _super4.call(this, stepper, stepperOptions);
          _this12._errorStateMatcher = _errorStateMatcher;
          return _this12;
        }
        /** Custom error state matcher that additionally checks for validity of interacted form. */


        _createClass(MatStep, [{
          key: "isErrorState",
          value: function isErrorState(control, form) {
            var originalErrorState = this._errorStateMatcher.isErrorState(control, form); // Custom error state checks for the validity of form that is not submitted or touched
            // since user can trigger a form change by calling for another step without directly
            // interacting with the current form.


            var customErrorState = !!(control && control.invalid && this.interacted);
            return originalErrorState || customErrorState;
          }
        }]);

        return MatStep;
      }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStep"]);

      MatStep.ɵfac = function MatStep_Factory(t) {
        return new (t || MatStep)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(function () {
          return MatStepper;
        })), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"], 4), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["STEPPER_GLOBAL_OPTIONS"], 8));
      };

      MatStep.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: MatStep,
        selectors: [["mat-step"]],
        contentQueries: function MatStep_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatStepLabel, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.stepLabel = _t.first);
          }
        },
        inputs: {
          color: "color"
        },
        exportAs: ["matStep"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
          provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"],
          useExisting: MatStep
        }, {
          provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStep"],
          useExisting: MatStep
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function MatStep_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, MatStep_ng_template_0_Template, 1, 0, "ng-template");
          }
        },
        encapsulation: 2,
        changeDetection: 0
      });

      MatStep.ctorParameters = function () {
        return [{
          type: MatStepper,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(function () {
              return MatStepper;
            })]
          }]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["STEPPER_GLOBAL_OPTIONS"]]
          }]
        }];
      };

      MatStep.propDecorators = {
        stepLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
          args: [MatStepLabel]
        }],
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatStep, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'mat-step',
            template: "<ng-template><ng-content></ng-content></ng-template>\n",
            providers: [{
              provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"],
              useExisting: MatStep
            }, {
              provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStep"],
              useExisting: MatStep
            }],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            exportAs: 'matStep',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: MatStepper,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(function () {
                return MatStepper;
              })]
            }]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["STEPPER_GLOBAL_OPTIONS"]]
            }]
          }];
        }, {
          stepLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [MatStepLabel]
          }],
          color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }]
        });
      })();

      var MatStepper = /*#__PURE__*/function (_angular_cdk_stepper_4) {
        _inherits(MatStepper, _angular_cdk_stepper_4);

        var _super5 = _createSuper(MatStepper);

        function MatStepper() {
          var _this13;

          _classCallCheck(this, MatStepper);

          _this13 = _super5.apply(this, arguments);
          /** Steps that belong to the current stepper, excluding ones from nested steppers. */

          _this13.steps = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["QueryList"]();
          /** Event emitted when the current step is done transitioning in. */

          _this13.animationDone = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          /** Consumer-specified template-refs to be used to override the header icons. */

          _this13._iconOverrides = {};
          /** Stream of animation `done` events when the body expands/collapses. */

          _this13._animationDone = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
          return _this13;
        }

        _createClass(MatStepper, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this14 = this;

            _get(_getPrototypeOf(MatStepper.prototype), "ngAfterContentInit", this).call(this);

            this._icons.forEach(function (_ref6) {
              var name = _ref6.name,
                  templateRef = _ref6.templateRef;
              return _this14._iconOverrides[name] = templateRef;
            }); // Mark the component for change detection whenever the content children query changes


            this.steps.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(function () {
              _this14._stateChanged();
            });

            this._animationDone.pipe( // This needs a `distinctUntilChanged` in order to avoid emitting the same event twice due
            // to a bug in animations where the `.done` callback gets invoked twice on some browsers.
            // See https://github.com/angular/angular/issues/24084
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["distinctUntilChanged"])(function (x, y) {
              return x.fromState === y.fromState && x.toState === y.toState;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(function (event) {
              if (event.toState === 'current') {
                _this14.animationDone.emit();
              }
            });
          }
        }]);

        return MatStepper;
      }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepper"]);

      MatStepper.ɵfac = function MatStepper_Factory(t) {
        return ɵMatStepper_BaseFactory(t || MatStepper);
      };

      MatStepper.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: MatStepper,
        selectors: [["", "matStepper", ""]],
        contentQueries: function MatStepper_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatStep, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatStepperIcon, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._steps = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._icons = _t);
          }
        },
        viewQuery: function MatStepper_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](MatStepHeader, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._stepHeader = _t);
          }
        },
        inputs: {
          disableRipple: "disableRipple",
          color: "color"
        },
        outputs: {
          animationDone: "animationDone"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepper"],
          useExisting: MatStepper
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
      });
      MatStepper.propDecorators = {
        _stepHeader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChildren"],
          args: [MatStepHeader]
        }],
        _steps: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [MatStep, {
            descendants: true
          }]
        }],
        _icons: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [MatStepperIcon, {
            descendants: true
          }]
        }],
        animationDone: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        disableRipple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };

      var ɵMatStepper_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](MatStepper);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatStepper, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: '[matStepper]',
            providers: [{
              provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepper"],
              useExisting: MatStepper
            }]
          }]
        }], null, {
          animationDone: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          _stepHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChildren"],
            args: [MatStepHeader]
          }],
          _steps: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [MatStep, {
              descendants: true
            }]
          }],
          _icons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [MatStepperIcon, {
              descendants: true
            }]
          }],
          disableRipple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }]
        });
      })();

      var MatHorizontalStepper = /*#__PURE__*/function (_MatStepper) {
        _inherits(MatHorizontalStepper, _MatStepper);

        var _super6 = _createSuper(MatHorizontalStepper);

        function MatHorizontalStepper() {
          var _this15;

          _classCallCheck(this, MatHorizontalStepper);

          _this15 = _super6.apply(this, arguments);
          /** Whether the label should display in bottom or end position. */

          _this15.labelPosition = 'end';
          return _this15;
        }

        return _createClass(MatHorizontalStepper);
      }(MatStepper);

      MatHorizontalStepper.ɵfac = function MatHorizontalStepper_Factory(t) {
        return ɵMatHorizontalStepper_BaseFactory(t || MatHorizontalStepper);
      };

      MatHorizontalStepper.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: MatHorizontalStepper,
        selectors: [["mat-horizontal-stepper"]],
        hostAttrs: ["aria-orientation", "horizontal", "role", "tablist", 1, "mat-stepper-horizontal"],
        hostVars: 4,
        hostBindings: function MatHorizontalStepper_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-stepper-label-position-end", ctx.labelPosition == "end")("mat-stepper-label-position-bottom", ctx.labelPosition == "bottom");
          }
        },
        inputs: {
          selectedIndex: "selectedIndex",
          labelPosition: "labelPosition"
        },
        exportAs: ["matHorizontalStepper"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
          provide: MatStepper,
          useExisting: MatHorizontalStepper
        }, {
          provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepper"],
          useExisting: MatHorizontalStepper
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
        decls: 4,
        vars: 2,
        consts: [[1, "mat-horizontal-stepper-header-container"], [4, "ngFor", "ngForOf"], [1, "mat-horizontal-content-container"], ["class", "mat-horizontal-stepper-content", "role", "tabpanel", 3, "id", 4, "ngFor", "ngForOf"], [1, "mat-horizontal-stepper-header", 3, "tabIndex", "id", "index", "state", "label", "selected", "active", "optional", "errorMessage", "iconOverrides", "disableRipple", "color", "click", "keydown"], ["class", "mat-stepper-horizontal-line", 4, "ngIf"], [1, "mat-stepper-horizontal-line"], ["role", "tabpanel", 1, "mat-horizontal-stepper-content", 3, "id"], [3, "ngTemplateOutlet"]],
        template: function MatHorizontalStepper_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MatHorizontalStepper_ng_container_1_Template, 3, 19, "ng-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, MatHorizontalStepper_div_3_Template, 2, 5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.steps);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.steps);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], MatStepHeader, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]],
        styles: [_c1],
        encapsulation: 2,
        data: {
          animation: [matStepperAnimations.horizontalStepTransition]
        },
        changeDetection: 0
      });
      MatHorizontalStepper.propDecorators = {
        labelPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };

      var ɵMatHorizontalStepper_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](MatHorizontalStepper);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatHorizontalStepper, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'mat-horizontal-stepper',
            exportAs: 'matHorizontalStepper',
            template: "<div class=\"mat-horizontal-stepper-header-container\">\n  <ng-container *ngFor=\"let step of steps; let i = index; let isLast = last\">\n    <mat-step-header class=\"mat-horizontal-stepper-header\"\n                     (click)=\"step.select()\"\n                     (keydown)=\"_onKeydown($event)\"\n                     [tabIndex]=\"_getFocusIndex() === i ? 0 : -1\"\n                     [id]=\"_getStepLabelId(i)\"\n                     [attr.aria-posinset]=\"i + 1\"\n                     [attr.aria-setsize]=\"steps.length\"\n                     [attr.aria-controls]=\"_getStepContentId(i)\"\n                     [attr.aria-selected]=\"selectedIndex == i\"\n                     [attr.aria-label]=\"step.ariaLabel || null\"\n                     [attr.aria-labelledby]=\"(!step.ariaLabel && step.ariaLabelledby) ? step.ariaLabelledby : null\"\n                     [index]=\"i\"\n                     [state]=\"_getIndicatorType(i, step.state)\"\n                     [label]=\"step.stepLabel || step.label\"\n                     [selected]=\"selectedIndex === i\"\n                     [active]=\"step.completed || selectedIndex === i || !linear\"\n                     [optional]=\"step.optional\"\n                     [errorMessage]=\"step.errorMessage\"\n                     [iconOverrides]=\"_iconOverrides\"\n                     [disableRipple]=\"disableRipple\"\n                     [color]=\"step.color || color\">\n    </mat-step-header>\n    <div *ngIf=\"!isLast\" class=\"mat-stepper-horizontal-line\"></div>\n  </ng-container>\n</div>\n\n<div class=\"mat-horizontal-content-container\">\n  <div *ngFor=\"let step of steps; let i = index\"\n       class=\"mat-horizontal-stepper-content\" role=\"tabpanel\"\n       [@stepTransition]=\"_getAnimationDirection(i)\"\n       (@stepTransition.done)=\"_animationDone.next($event)\"\n       [id]=\"_getStepContentId(i)\"\n       [attr.aria-labelledby]=\"_getStepLabelId(i)\"\n       [attr.aria-expanded]=\"selectedIndex === i\">\n    <ng-container [ngTemplateOutlet]=\"step.content\"></ng-container>\n  </div>\n</div>\n",
            inputs: ['selectedIndex'],
            host: {
              'class': 'mat-stepper-horizontal',
              '[class.mat-stepper-label-position-end]': 'labelPosition == "end"',
              '[class.mat-stepper-label-position-bottom]': 'labelPosition == "bottom"',
              'aria-orientation': 'horizontal',
              'role': 'tablist'
            },
            animations: [matStepperAnimations.horizontalStepTransition],
            providers: [{
              provide: MatStepper,
              useExisting: MatHorizontalStepper
            }, {
              provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepper"],
              useExisting: MatHorizontalStepper
            }],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [".mat-stepper-vertical,.mat-stepper-horizontal{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:\"\";display:inline-block;height:0;position:absolute;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;height:24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content[aria-expanded=false]{height:0;overflow:hidden}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:\"\";position:absolute;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}\n"]
          }]
        }], null, {
          labelPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }]
        });
      })();

      var MatVerticalStepper = /*#__PURE__*/function (_MatStepper2) {
        _inherits(MatVerticalStepper, _MatStepper2);

        var _super7 = _createSuper(MatVerticalStepper);

        function MatVerticalStepper(dir, changeDetectorRef, // @breaking-change 8.0.0 `elementRef` and `_document` parameters to become required.
        elementRef, _document) {
          var _this16;

          _classCallCheck(this, MatVerticalStepper);

          _this16 = _super7.call(this, dir, changeDetectorRef, elementRef, _document);
          _this16._orientation = 'vertical';
          return _this16;
        }

        return _createClass(MatVerticalStepper);
      }(MatStepper);

      MatVerticalStepper.ɵfac = function MatVerticalStepper_Factory(t) {
        return new (t || MatVerticalStepper)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]));
      };

      MatVerticalStepper.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: MatVerticalStepper,
        selectors: [["mat-vertical-stepper"]],
        hostAttrs: ["aria-orientation", "vertical", "role", "tablist", 1, "mat-stepper-vertical"],
        inputs: {
          selectedIndex: "selectedIndex"
        },
        exportAs: ["matVerticalStepper"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
          provide: MatStepper,
          useExisting: MatVerticalStepper
        }, {
          provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepper"],
          useExisting: MatVerticalStepper
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
        decls: 1,
        vars: 1,
        consts: [["class", "mat-step", 4, "ngFor", "ngForOf"], [1, "mat-step"], [1, "mat-vertical-stepper-header", 3, "tabIndex", "id", "index", "state", "label", "selected", "active", "optional", "errorMessage", "iconOverrides", "disableRipple", "color", "click", "keydown"], [1, "mat-vertical-content-container"], ["role", "tabpanel", 1, "mat-vertical-stepper-content", 3, "id"], [1, "mat-vertical-content"], [3, "ngTemplateOutlet"]],
        template: function MatVerticalStepper_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, MatVerticalStepper_div_0_Template, 6, 25, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.steps);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], MatStepHeader, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]],
        styles: [_c1],
        encapsulation: 2,
        data: {
          animation: [matStepperAnimations.verticalStepTransition]
        },
        changeDetection: 0
      });

      MatVerticalStepper.ctorParameters = function () {
        return [{
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatVerticalStepper, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'mat-vertical-stepper',
            exportAs: 'matVerticalStepper',
            template: "<div class=\"mat-step\" *ngFor=\"let step of steps; let i = index; let isLast = last\">\n  <mat-step-header class=\"mat-vertical-stepper-header\"\n                   (click)=\"step.select()\"\n                   (keydown)=\"_onKeydown($event)\"\n                   [tabIndex]=\"_getFocusIndex() == i ? 0 : -1\"\n                   [id]=\"_getStepLabelId(i)\"\n                   [attr.aria-posinset]=\"i + 1\"\n                   [attr.aria-setsize]=\"steps.length\"\n                   [attr.aria-controls]=\"_getStepContentId(i)\"\n                   [attr.aria-selected]=\"selectedIndex === i\"\n                   [attr.aria-label]=\"step.ariaLabel || null\"\n                   [attr.aria-labelledby]=\"(!step.ariaLabel && step.ariaLabelledby) ? step.ariaLabelledby : null\"\n                   [index]=\"i\"\n                   [state]=\"_getIndicatorType(i, step.state)\"\n                   [label]=\"step.stepLabel || step.label\"\n                   [selected]=\"selectedIndex === i\"\n                   [active]=\"step.completed || selectedIndex === i || !linear\"\n                   [optional]=\"step.optional\"\n                   [errorMessage]=\"step.errorMessage\"\n                   [iconOverrides]=\"_iconOverrides\"\n                   [disableRipple]=\"disableRipple\"\n                   [color]=\"step.color || color\">\n  </mat-step-header>\n\n  <div class=\"mat-vertical-content-container\" [class.mat-stepper-vertical-line]=\"!isLast\">\n    <div class=\"mat-vertical-stepper-content\" role=\"tabpanel\"\n         [@stepTransition]=\"_getAnimationDirection(i)\"\n         (@stepTransition.done)=\"_animationDone.next($event)\"\n         [id]=\"_getStepContentId(i)\"\n         [attr.aria-labelledby]=\"_getStepLabelId(i)\"\n         [attr.aria-expanded]=\"selectedIndex === i\">\n      <div class=\"mat-vertical-content\">\n        <ng-container [ngTemplateOutlet]=\"step.content\"></ng-container>\n      </div>\n    </div>\n  </div>\n</div>\n",
            inputs: ['selectedIndex'],
            host: {
              'class': 'mat-stepper-vertical',
              'aria-orientation': 'vertical',
              'role': 'tablist'
            },
            animations: [matStepperAnimations.verticalStepTransition],
            providers: [{
              provide: MatStepper,
              useExisting: MatVerticalStepper
            }, {
              provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepper"],
              useExisting: MatVerticalStepper
            }],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [".mat-stepper-vertical,.mat-stepper-horizontal{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:\"\";display:inline-block;height:0;position:absolute;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;height:24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content[aria-expanded=false]{height:0;overflow:hidden}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:\"\";position:absolute;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}\n"]
          }]
        }], function () {
          return [{
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Button that moves to the next step in a stepper workflow. */


      var MatStepperNext = /*#__PURE__*/function (_angular_cdk_stepper_5) {
        _inherits(MatStepperNext, _angular_cdk_stepper_5);

        var _super8 = _createSuper(MatStepperNext);

        function MatStepperNext() {
          _classCallCheck(this, MatStepperNext);

          return _super8.apply(this, arguments);
        }

        return _createClass(MatStepperNext);
      }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepperNext"]);

      MatStepperNext.ɵfac = function MatStepperNext_Factory(t) {
        return ɵMatStepperNext_BaseFactory(t || MatStepperNext);
      };

      MatStepperNext.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: MatStepperNext,
        selectors: [["button", "matStepperNext", ""]],
        hostAttrs: [1, "mat-stepper-next"],
        hostVars: 1,
        hostBindings: function MatStepperNext_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵhostProperty"]("type", ctx.type);
          }
        },
        inputs: {
          type: "type"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵMatStepperNext_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](MatStepperNext);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatStepperNext, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: 'button[matStepperNext]',
            host: {
              'class': 'mat-stepper-next',
              '[type]': 'type'
            },
            inputs: ['type']
          }]
        }], null, null);
      })();
      /** Button that moves to the previous step in a stepper workflow. */


      var MatStepperPrevious = /*#__PURE__*/function (_angular_cdk_stepper_6) {
        _inherits(MatStepperPrevious, _angular_cdk_stepper_6);

        var _super9 = _createSuper(MatStepperPrevious);

        function MatStepperPrevious() {
          _classCallCheck(this, MatStepperPrevious);

          return _super9.apply(this, arguments);
        }

        return _createClass(MatStepperPrevious);
      }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepperPrevious"]);

      MatStepperPrevious.ɵfac = function MatStepperPrevious_Factory(t) {
        return ɵMatStepperPrevious_BaseFactory(t || MatStepperPrevious);
      };

      MatStepperPrevious.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: MatStepperPrevious,
        selectors: [["button", "matStepperPrevious", ""]],
        hostAttrs: [1, "mat-stepper-previous"],
        hostVars: 1,
        hostBindings: function MatStepperPrevious_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵhostProperty"]("type", ctx.type);
          }
        },
        inputs: {
          type: "type"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵMatStepperPrevious_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](MatStepperPrevious);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatStepperPrevious, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: 'button[matStepperPrevious]',
            host: {
              'class': 'mat-stepper-previous',
              '[type]': 'type'
            },
            inputs: ['type']
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatStepperModule = /*#__PURE__*/_createClass(function MatStepperModule() {
        _classCallCheck(this, MatStepperModule);
      });

      MatStepperModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: MatStepperModule
      });
      MatStepperModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function MatStepperModule_Factory(t) {
          return new (t || MatStepperModule)();
        },
        providers: [MAT_STEPPER_INTL_PROVIDER, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"]],
        imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["PortalModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepperModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MatStepperModule, {
          declarations: function declarations() {
            return [MatHorizontalStepper, MatVerticalStepper, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon];
          },
          imports: function imports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["PortalModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepperModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"]];
          },
          exports: function exports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], MatHorizontalStepper, MatVerticalStepper, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatStepperModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
          args: [{
            imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["PortalModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepperModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"]],
            exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], MatHorizontalStepper, MatVerticalStepper, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon],
            declarations: [MatHorizontalStepper, MatVerticalStepper, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon],
            providers: [MAT_STEPPER_INTL_PROVIDER, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"]]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=stepper.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=modules-pages-assessment-assessment-module-es5.js.map