(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab1_tab1_module_ts"],{

/***/ 4762:
/*!******************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExploreContainerComponent": () => (/* binding */ ExploreContainerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _explore_container_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./explore-container.component.html?ngResource */ 959);
/* harmony import */ var _explore_container_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./explore-container.component.scss?ngResource */ 1509);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1423);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);




let ExploreContainerComponent = class ExploreContainerComponent {
    constructor() { }
    ngOnInit() { }
};
ExploreContainerComponent.ctorParameters = () => [];
ExploreContainerComponent.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
ExploreContainerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-explore-container',
        template: _explore_container_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_explore_container_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ExploreContainerComponent);



/***/ }),

/***/ 581:
/*!***************************************************************!*\
  !*** ./src/app/explore-container/explore-container.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExploreContainerComponentModule": () => (/* binding */ ExploreContainerComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1423);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 1327);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 1253);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 521);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _explore_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./explore-container.component */ 4762);






let ExploreContainerComponentModule = class ExploreContainerComponentModule {
};
ExploreContainerComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule],
        declarations: [_explore_container_component__WEBPACK_IMPORTED_MODULE_4__.ExploreContainerComponent],
        exports: [_explore_container_component__WEBPACK_IMPORTED_MODULE_4__.ExploreContainerComponent]
    })
], ExploreContainerComponentModule);



/***/ }),

/***/ 2580:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1423);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 730);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1.page */ 6923);




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_2__.Tab1Page,
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 2168:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ 521);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ionic_angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1423);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 1327);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1253);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tab1.page */ 6923);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1-routing.module */ 2580);








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_0__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_5__.ExploreContainerComponentModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_6__.Tab1PageRoutingModule
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_4__.Tab1Page]
    })
], Tab1PageModule);



/***/ }),

/***/ 6923:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page.html?ngResource */ 3852);
/* harmony import */ var _tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.scss?ngResource */ 8165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1423);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);




let Tab1Page = class Tab1Page {
    constructor() { }
};
Tab1Page.ctorParameters = () => [];
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-tab1',
        template: _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab1Page);



/***/ }),

/***/ 1509:
/*!*******************************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGIiwiZmlsZSI6ImV4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */";

/***/ }),

/***/ 8165:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ":root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n\nheader {\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.05em;\n  margin-bottom: 1.25em;\n  text-transform: uppercase;\n}\n\nsection {\n  margin-top: 1em;\n  margin-bottom: 2.5em;\n}\n\nsection:not(.full-width),\n.full-width > header {\n  padding: 0 10px;\n}\n\n.container {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSw0QkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTs7RUFFRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGIiwiZmlsZSI6InRhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xyXG4gIC0taW9uLXNhZmUtYXJlYS10b3A6IDIwcHg7XHJcbiAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogMjJweDtcclxufVxyXG5cclxuaGVhZGVyIHtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDEuMjVlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG5zZWN0aW9uIHtcclxuICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMi41ZW07XHJcbn1cclxuXHJcbnNlY3Rpb246bm90KC5mdWxsLXdpZHRoKSxcclxuLmZ1bGwtd2lkdGggPiBoZWFkZXIge1xyXG4gIHBhZGRpbmc6IDAgMTBweDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 959:
/*!*******************************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "<div id=\"container\">\n  <strong>{{ name }}</strong>\n  <p>Explore <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://ionicframework.com/docs/components\">UI Components</a></p>\n</div>";

/***/ }),

/***/ 3852:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" >\n  <ion-toolbar  color=\"primary\">\n    <ion-title>\n      Tab 1\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Tab 1</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-list>\n    <ion-list-header> Items with Labels </ion-list-header>\n    <ion-item>\n      <ion-label>Label</ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon slot=\"end\" name=\"logo-ionic\"></ion-icon>\n      <ion-label>Label with Icon</ion-label>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header> Color Items </ion-list-header>\n    <ion-item color=\"primary\">\n      <ion-label>Primary</ion-label>\n    </ion-item>\n\n    <ion-item color=\"secondary\">\n      <ion-label>Secondary</ion-label>\n    </ion-item>\n\n    <ion-item color=\"tertiary\">\n      <ion-label>Tertiary</ion-label>\n    </ion-item>\n\n    <ion-item color=\"success\">\n      <ion-label>Success</ion-label>\n    </ion-item>\n\n    <ion-item color=\"warning\">\n      <ion-label>Warning</ion-label>\n    </ion-item>\n\n    <ion-item color=\"danger\">\n      <ion-label>Danger</ion-label>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header> Group with Divider </ion-list-header>\n\n    <ion-item-group>\n      <ion-item-divider>\n        <ion-label>A</ion-label>\n      </ion-item-divider>\n\n      <ion-item>\n        <ion-label>Adam</ion-label>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-label>Alan</ion-label>\n      </ion-item>\n\n      <ion-item-divider>\n        <ion-label>B</ion-label>\n      </ion-item-divider>\n\n      <ion-item lines=\"none\">\n        <ion-label>Brianna</ion-label>\n      </ion-item>\n\n      <ion-item-divider>\n        <ion-label>C</ion-label>\n      </ion-item-divider>\n\n      <ion-item lines=\"none\">\n        <ion-label>Carla</ion-label>\n      </ion-item>\n    </ion-item-group>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header> Sliding Item </ion-list-header>\n\n    <ion-item-sliding>\n      <ion-item>\n        <ion-label>New Message</ion-label>\n      </ion-item>\n\n      <ion-item-options side=\"start\">\n        <ion-item-option color=\"primary\">Mark Unread</ion-item-option>\n      </ion-item-options>\n\n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"danger\">Delete</ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n\n    <ion-item-sliding>\n      <ion-item>\n        <ion-label>New Message</ion-label>\n      </ion-item>\n\n      <ion-item-options side=\"start\">\n        <ion-item-option color=\"primary\">Mark Unread</ion-item-option>\n      </ion-item-options>\n\n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"danger\">Delete</ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header> Notes </ion-list-header>\n    <ion-item>\n      <ion-label>Primary Note</ion-label>\n      <ion-note slot=\"end\" color=\"primary\">99</ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Secondary Note</ion-label>\n      <ion-note slot=\"end\" color=\"secondary\">99</ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Tertiary Note</ion-label>\n      <ion-note slot=\"end\" color=\"tertiary\">99</ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Success Note</ion-label>\n      <ion-note slot=\"end\" color=\"success\">99</ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Warning Note</ion-label>\n      <ion-note slot=\"end\" color=\"warning\">99</ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Danger Note</ion-label>\n      <ion-note slot=\"end\" color=\"danger\">99</ion-note>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n";

/***/ })

}])
//# sourceMappingURL=src_app_tab1_tab1_module_ts.js.map