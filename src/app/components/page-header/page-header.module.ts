import { NgModule } from "@angular/core";
import { PageHeaderComponent } from './page-header.component';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [ 
        CommonModule,
        MatTabsModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule
    ],
    declarations: [ PageHeaderComponent ],
    exports: [ PageHeaderComponent ]
})
export class PageHeaderModule {}