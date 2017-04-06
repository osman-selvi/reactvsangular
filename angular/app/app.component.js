"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'router-app',
        template: "\n        <div>\n            <p>\n                <a routerLink=\"/page1\"   routerLinkActive=\"disabled\">Home</a> |\n                <a routerLink=\"/page2\" routerLinkActive=\"disabled\">About</a> |\n                <a routerLink=\"/page3\"  routerLinkActive=\"disabled\">Service</a>\n            </p>\n            <div class=\"border not-padded\">\n                <router-outlet></router-outlet>\n            </div>    \n        </div>",
        styles: ["\n        div {padding: 10px;}\n        .not-padded {padding: 0;}\n        .border {border: 1px solid #b3b3b3;}\n        .disabled {\n            pointer-events: none; \n            cursor: default;\n            color: #404040;\n            text-decoration: none;\n        }"
        ],
        encapsulation: core_1.ViewEncapsulation.None
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map