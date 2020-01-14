import { Component, ViewEncapsulation, ChangeDetectionStrategy, OnInit, Inject, ChangeDetectorRef } from "@angular/core";
import { menuLinks } from 'src/app/DATA/menu-links';
import { socLinks } from 'src/app/DATA/soc-links';
import { MessageService } from 'src/app/services/message.service';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'app-footer',
    templateUrl: 'footer.template.html',
    styleUrls: ['footer.style.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {
    public links: Array<string> = [];
    public linksElems: NodeListOf<Element> = null;
    public socLinks: Array<string> = [];

    constructor(
        @Inject(DOCUMENT) public document: Document,
        private MS: MessageService,
        private cdRef: ChangeDetectorRef
    ) {}

    public ngOnInit(): void {
        this.links = menuLinks;
        this.socLinks = socLinks;

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
        this.linksElems = this.document.querySelectorAll('.footer__link');
        this.linksElems[0].classList.add('active');
    }

    public setActive(event, val) {
        for (let i = 0; i < this.linksElems.length; i++) {
            this.linksElems[i].classList.remove('active');
        }

        const target = event.target;
        target.classList.add('active');

        // send value to navbar 
        this.MS.menuLinkChange(val)
    }
}