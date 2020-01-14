import { NgModule } from "@angular/core";
import { NavbarComponent } from './navbar.component';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
    imports: [ 
        CommonModule,
        MatSidenavModule
    ],
    declarations: [ NavbarComponent ],
    exports: [ NavbarComponent ]
})
export class NavbarModule {}