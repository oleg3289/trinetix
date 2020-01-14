import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class MessageService {
    public filterDataMessage = new Subject<string>();
    public filterData$ = this.filterDataMessage.asObservable();

    public menuLinkChangeMessage = new Subject<string>();
    public menuLinkChange$ = this.menuLinkChangeMessage.asObservable();

    constructor() {}

    public filterData(val: string) {
        this.filterDataMessage.next(val);
    }

    public menuLinkChange(val: string) {
        this.menuLinkChangeMessage.next(val);
    }
}