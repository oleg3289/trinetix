import { Component, ViewEncapsulation, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { Service, SERVICES } from 'src/app/DATA/services';
import { MessageService } from 'src/app/services/message.service';

@Component({
    selector: 'app-main-content',
    templateUrl: 'main-content.template.html',
    styleUrls: ['main-content.style.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainContentComponent implements OnInit {
    public serviceData: Service[];

    constructor(
        private MS: MessageService,
        private cdRef: ChangeDetectorRef
    ) {}

    public ngOnInit(): void {
        this.serviceData = SERVICES;

        this.MS.filterData$.subscribe((val: string) => {
            // if val == all return all elements
            if (val == 'all') {
                this.serviceData = SERVICES;
            } else {
                this.serviceData = SERVICES.filter((item) => {
                    // console.log(item.type, val)
                    return item.type === val;
                })
            }
            this.cdRef.detectChanges();
        })
    }
}