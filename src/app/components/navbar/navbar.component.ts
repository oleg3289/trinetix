import { Component, ViewEncapsulation, OnInit, Inject, AfterViewInit, ChangeDetectorRef, Output, EventEmitter } from "@angular/core";
import { menuLinks } from 'src/app/DATA/menu-links';
import { DOCUMENT } from '@angular/common';
import { MessageService } from 'src/app/services/message.service';

@Component({
    selector: 'app-navbar',
    templateUrl: 'navbar.template.html',
    styleUrls: ['navbar.style.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit, AfterViewInit {
    public links: Array<string> = [];
    public linksElems: NodeListOf<Element> = null;
    @Output() openSidenav = new EventEmitter();

    constructor(
        @Inject(DOCUMENT) public document: Document,
        private MS: MessageService,
        private cdRef: ChangeDetectorRef
    ) {}

    public ngOnInit(): void {
        this.links = menuLinks;

        this.MS.menuLinkChange$.subscribe((val) => {
            for (let i = 0; i < this.linksElems.length; i++) {
                this.linksElems[i].classList.remove('active');
                if (this.linksElems[i].innerHTML.trim() === val.trim()) {
                    this.linksElems[i].classList.add('active');
                    this.cdRef.detectChanges();
                }
            }
        })
    }

    public ngAfterViewInit(): void {
        this.linksElems = this.document.querySelectorAll('.navbar__link');
        this.linksElems[0].classList.add('active');
    }

    public setActive(event, val) {
        for (let i = 0; i < this.linksElems.length; i++) {
            this.linksElems[i].classList.remove('active');
        }

        const target = event.target;
        target.classList.add('active');

        // send value to footer 
        this.MS.menuLinkChange(val)
    }

    public onOpenSidenav(): void {
        this.openSidenav.emit('')
    }
}