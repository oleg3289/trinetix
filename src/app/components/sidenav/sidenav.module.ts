import { NgModule } from "@angular/core";
import { SidenavComponent } from './sidenav.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [ 
        CommonModule
    ],
    declarations: [ SidenavComponent ],
    exports: [ SidenavComponent ]
})
export class SidenavModule {}