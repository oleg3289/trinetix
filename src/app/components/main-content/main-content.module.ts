import { NgModule } from "@angular/core";
import { MainContentComponent } from './main-content.component';
import { CommonModule } from '@angular/common';
import { ServiceModule } from 'src/app/modules/service/service.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [ 
        CommonModule,
        ServiceModule,
        MatButtonModule
    ],
    declarations: [ MainContentComponent ],
    exports: [ MainContentComponent ]
})
export class MainContentModule {}