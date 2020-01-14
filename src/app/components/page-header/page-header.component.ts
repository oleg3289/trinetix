import { Component, ViewEncapsulation, OnInit } from "@angular/core";
import { filterLinks, FilterLink } from 'src/app/DATA/filter-links';
import { MessageService } from 'src/app/services/message.service';

@Component({
    selector: 'app-page-header',
    templateUrl: 'page-header.template.html',
    styleUrls: ['page-header.style.scss'],
    encapsulation: ViewEncapsulation.None
})
export class PageHeaderComponent implements OnInit {
    public filterLinks: FilterLink[] = [];

    constructor(
        private MS: MessageService
    ) {}

    public ngOnInit(): void {
        this.filterLinks = filterLinks;
    }

    public filterData(event): void {
        this.MS.filterData(this.filterLinks[event.index].type);
    }
}