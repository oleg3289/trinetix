import { Component, ViewEncapsulation, Inject, ChangeDetectorRef, OnInit } from "@angular/core";
import { DOCUMENT } from '@angular/common';
import { MessageService } from 'src/app/services/message.service';
import { menuLinks } from 'src/app/DATA/menu-links';

@Component({
    selector: 'app-sidenav',
    templateUrl: 'sidenav.template.html',
    styleUrls: ['sidenav.style.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SidenavComponent implements OnInit {
    public links: Array<string> = [];
    public linksElems: NodeListOf<Element> = null;

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
        this.linksElems = this.document.querySelectorAll('.sidenav__link');
        this.linksElems[0].classList.add('active');
    }

    public setActive(event, val) {
        for (let i = 0; i < this.linksElems.length; i++) {
            this.linksElems[i].classList.remove('active');
        }

        const target = event.target;
        target.classList.add('active');

        // send value 
        this.MS.menuLinkChange(val)
    }
}