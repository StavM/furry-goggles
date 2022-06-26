(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tabsss_tabs_module_ts-_47bf1"],{

/***/ 317:
/*!***********************************************!*\
  !*** ./src/app/tabsss/tabs-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1423);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 730);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs.page */ 8328);




const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_2__.TabsPage,
        children: [
            {
                path: 'tab1',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tab1_tab1_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../tab1/tab1.module */ 2168)).then(m => m.Tab1PageModule)
            },
            {
                path: 'tab2',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tab2_tab2_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../tab2/tab2.module */ 4608)).then(m => m.Tab2PageModule)
            },
            {
                path: 'tab3',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tab3_tab3_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../tab3/tab3.module */ 3746)).then(m => m.Tab3PageModule)
            },
            {
                path: '',
                redirectTo: 'tabs/tab1',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: 'tabs/tab1',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ 4332:
/*!***************************************!*\
  !*** ./src/app/tabsss/tabs.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ 521);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ionic_angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1423);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 1327);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1253);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs-routing.module */ 317);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs.page */ 8328);







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_0__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule,
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_4__.TabsPageRoutingModule,
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_5__.TabsPage]
    })
], TabsPageModule);



/***/ }),

/***/ 8328:
/*!*************************************!*\
  !*** ./src/app/tabsss/tabs.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page.html?ngResource */ 8960);
/* harmony import */ var _tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss?ngResource */ 5865);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1423);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);




let TabsPage = class TabsPage {
    constructor() { }
};
TabsPage.ctorParameters = () => [];
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-tabs',
        template: _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TabsPage);



/***/ }),

/***/ 5865:
/*!**************************************************!*\
  !*** ./src/app/tabsss/tabs.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 8960:
/*!**************************************************!*\
  !*** ./src/app/tabsss/tabs.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Another APP\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">MFE 2</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-list>\n    <ion-list-header>Characters</ion-list-header>\n    <ion-item>\n      <ion-label>Jon Snow</ion-label>\n      <ion-checkbox color=\"primary\" checked slot=\"start\"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n      <ion-checkbox color=\"dark\" checked slot=\"start\"></ion-checkbox>\n      <ion-label>Daenerys Targaryen</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-checkbox disabled slot=\"start\"></ion-checkbox>\n      <ion-label>Arya Stark</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-checkbox color=\"secondary\" slot=\"start\"></ion-checkbox>\n      <ion-label>Tyrion Lannister</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-checkbox color=\"danger\" checked slot=\"start\"></ion-checkbox>\n      <ion-label>Sansa Stark</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-checkbox color=\"primary\" slot=\"start\"></ion-checkbox>\n      <ion-label>Khal Drogo</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-checkbox color=\"tertiary\" checked slot=\"start\"></ion-checkbox>\n      <ion-label>Cersei Lannister</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-checkbox color=\"medium\" checked slot=\"start\"></ion-checkbox>\n      <ion-label>Stannis Baratheon</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-checkbox color=\"primary\" disabled slot=\"start\"></ion-checkbox>\n      <ion-label>Petyr Baelish</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-checkbox color=\"dark\" checked slot=\"start\"></ion-checkbox>\n      <ion-label>Hodor</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-checkbox color=\"secondary\" checked slot=\"start\"></ion-checkbox>\n      <ion-label>Catelyn Stark</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-checkbox color=\"primary\" slot=\"start\"></ion-checkbox>\n      <ion-label>Bronn</ion-label>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n";

/***/ })

}])
//# sourceMappingURL=src_app_tabsss_tabs_module_ts-_47bf1.js.map