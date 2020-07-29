import {Component, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component.service';
import {ComponentModel} from 'models/component.model';
import {ErrorDialogService} from 'services/errorDialog.service';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
    selector: 'app-service-tier',
    templateUrl: './service-tier.component.html',
    styleUrls: ['./service-tier.component.css']
})
export class ServiceTierComponent implements OnInit {
    components: ComponentModel[] = [];
    commonComponents: any;

    constructor(private componentService: ComponentService,
                private errorDialogService: ErrorDialogService,
                private spinner: NgxSpinnerService) {
    }

    ngOnInit(): void {
        this.loadAllComponents();
    }

    loadAllComponents(): void {
        this.spinner.show();
        this.componentService.getAllComponents().subscribe((result) => {
            this.commonComponents = result;
            this.components = this.commonComponents._embedded.component;
            this.spinner.hide();
        }, error => {
            const options = {
                title: 'Error',
                message: 'Cannot load components',
                cancelText: 'CANCEL',
            };
            this.errorDialogService.open(options);
        });
    }

}
