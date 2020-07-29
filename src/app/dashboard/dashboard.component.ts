import {Component, OnInit} from '@angular/core';
import {EnvironmentService} from '../../services/environment.service';
import {DeploymentService} from '../../services/deployment.service';
import {ErrorDialogService} from 'services/errorDialog.service';
import {EnvironmentDeploymentModel} from 'models/environmentDeployment.model';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    environmentDeploymentModels: EnvironmentDeploymentModel[];

    constructor(private environmentService: EnvironmentService,
                private deploymentService: DeploymentService,
                private errorDialogService: ErrorDialogService,
                private spinner: NgxSpinnerService) {
    }

    ngOnInit() {
        this.getEnvironmentsWithDeployments();
    }

    getEnvironmentsWithDeployments(): void {
        this.spinner.show();
        this.deploymentService.getEnvironmentsWithDeployments().subscribe((result) => {
            this.environmentDeploymentModels = result;
            this.spinner.hide();
        }, error => {
            const options = {
                title: 'Error',
                message: 'Cannot load environments',
                cancelText: 'CANCEL',
            };
            this.errorDialogService.open(options);
        })
    }

}
