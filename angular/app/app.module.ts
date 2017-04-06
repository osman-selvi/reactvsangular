import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";

import { AppComponent } from "./app.component";
import { routing } from "./app.routes";
import { Page1Component } from "./page1.component";
import { Page2Component } from "./page2.component";
import { Page3Component } from "./page3.component";

@NgModule({
    imports:      [
        BrowserModule,
        routing
    ],
    declarations: [
        AppComponent,
        Page1Component,
        Page2Component,
        Page3Component
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy}
    ]
})
export class AppModule { }