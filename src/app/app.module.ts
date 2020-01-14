import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTING } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarModule } from './components/navbar/navbar.module';
import { PageHeaderModule } from './components/page-header/page-header.module';
import { MainContentModule } from './components/main-content/main-content.module';
import { FooterModule } from './components/footer/footer.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavModule } from './components/sidenav/sidenav.module';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(APP_ROUTING),
        NavbarModule,
        PageHeaderModule,
        MainContentModule,
        FooterModule,
        MatSidenavModule,
        SidenavModule
    ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}