"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Page3Component = (function () {
    function Page3Component() {
    }
    return Page3Component;
}());
Page3Component = __decorate([
    core_1.Component({
        template: "\n        <div class=\"very-pale-page3 padded\">\n            <h2>Service page</h2>\n        </div>",
        styles: ['.very-pale-page3 {background-color: LightBlue;}']
    })
], Page3Component);
exports.Page3Component = Page3Component;
//# sourceMappingURL=page3.component.js.map