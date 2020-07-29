import {Component, OnInit} from '@angular/core';
import {EnvironmentModel} from 'models/environment.model';
import {EnvironmentService} from 'services/environment.service';
import {ErrorDialogService} from 'services/errorDialog.service';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
    selector: 'app-environment-data',
    templateUrl: './environment-data.component.html',
    styleUrls: ['./environment-data.component.css']
})
export class EnvironmentDataComponent implements OnInit {
    environmentModels: EnvironmentModel[] = [];
    environments: any;

    constructor(private environmentService: EnvironmentService,
                private errorDialogService: ErrorDialogService,
                private spinner: NgxSpinnerService) {
    }

    ngOnInit(): void {
        this.loadAllEnvironments();
    }

    loadAllEnvironments(): void {
        this.spinner.show();
        this.environmentService.getEnvironments().subscribe((result) => {
            this.environments = result;
            this.environmentModels = this.environments._embedded.environment;
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
