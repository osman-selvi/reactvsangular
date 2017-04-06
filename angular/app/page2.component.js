"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Page2Component = (function () {
    function Page2Component() {
    }
    return Page2Component;
}());
Page2Component = __decorate([
    core_1.Component({
        template: "\n        <div class=\"very-pale-page2 padded\">\n            <h2>About page</h2>\n        </div>",
        styles: ['.very-pale-page2 {background-color: LightGreen;}']
    })
], Page2Component);
exports.Page2Component = Page2Component;
//# sourceMappingURL=page2.component.js.map