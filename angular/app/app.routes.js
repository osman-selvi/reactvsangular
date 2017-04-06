"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var page1_component_1 = require("./page1.component");
var page2_component_1 = require("./page2.component");
var page3_component_1 = require("./page3.component");
var routes = [
    { path: '', redirectTo: '/page1', pathMatch: 'full' },
    { path: 'page1', component: page1_component_1.Page1Component },
    { path: 'page2', component: page2_component_1.Page2Component },
    { path: 'page3', component: page3_component_1.Page3Component },
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map