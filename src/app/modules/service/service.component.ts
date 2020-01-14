import { Component, ViewEncapsulation, ChangeDetectionStrategy, OnInit, Input } from "@angular/core";
import { Service } from 'src/app/DATA/services';

@Component({
    selector: 'app-service',
    templateUrl: 'service.template.html',
    styleUrls: ['service.style.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiceComponent implements OnInit {
    @Input('service-data') serviceData: Service;

    constructor() {}

    public ngOnInit(): void {
        console.log(this.serviceData)
    }
}