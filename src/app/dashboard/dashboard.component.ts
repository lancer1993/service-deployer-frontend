import {Component, OnInit} from '@angular/core';
import {EnvironmentService} from '../../services/environment.service';
import {EnvironmentModel} from '../../models/environment.model';
import {DeploymentService} from '../../services/deployment.service';
import {DeploymentEnhancedModel} from '../../models/deploymentEnhanced.model';
import {ErrorDialogService} from 'services/errorDialog.service';
import {EnvironmentDeploymentModel} from 'models/environmentDeployment.model';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  environmentModels: EnvironmentModel[];
  deploymentEnhancedModels: DeploymentEnhancedModel[];
  environments: any;
  environmentDeploymentModels: EnvironmentDeploymentModel[];

  constructor(private environmentService: EnvironmentService,
    private deploymentService: DeploymentService,
    private errorDialogService: ErrorDialogService,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {  
    this.spinner.show();
    this.getEnvironmentsWithDeployments();
    }

  getEnvironmentsWithDeployments(): void {
    
    this.deploymentService.getEnvironmentsWithDeployments().subscribe((result) => {
      this.environmentDeploymentModels = result;
      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
      }, 5000);
    }, error => {
      const options = {
        title: "Error",
        message: "Cannot load environments",
        cancelText: "CANCEL",
      };
      this.errorDialogService.open(options);
    })
  }

}
