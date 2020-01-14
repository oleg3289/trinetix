import { NgModule } from "@angular/core";
import { FooterComponent } from './footer.component';
import { CommonModule } from '@angular/common';
import { ServiceModule } from 'src/app/modules/service/service.module';

@NgModule({
    imports: [ 
        CommonModule
    ],
    declarations: [ FooterComponent ],
    exports: [ FooterComponent ]
})
export class FooterModule {}