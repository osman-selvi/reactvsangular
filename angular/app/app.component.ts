import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'router-app',
    template:  `
        <div>
            <p>
                <a routerLink="/page1"   routerLinkActive="disabled">Home</a> |
                <a routerLink="/page2" routerLinkActive="disabled">About</a> |
                <a routerLink="/page3"  routerLinkActive="disabled">Service</a>
            </p>
            <div class="border not-padded">
                <router-outlet></router-outlet>
            </div>    
        </div>`,
    styles: [`
        div {padding: 10px;}
        .not-padded {padding: 0;}
        .border {border: 1px solid #b3b3b3;}
        .disabled {
            pointer-events: none; 
            cursor: default;
            color: #404040;
            text-decoration: none;
        }`
    ],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {

}