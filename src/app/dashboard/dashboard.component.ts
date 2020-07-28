import { Component, OnInit } from '@angular/core';
import { EnvironmentService } from '../../services/environment.service';
import { EnvironmentModel } from '../../models/environment.model';
import { DeploymentService } from '../../services/deployment.service';
import { DeploymentEnhancedModel } from '../../models/deploymentEnhanced.model';
import { ErrorDialogService } from 'services/errorDialog.service';
import { EnvironmentDeploymentModel } from 'models/environmentDeployment.model';

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
    private errorDialogService: ErrorDialogService) { }

  ngOnInit() {
    this.getEnvironmentsWithDeployments();
  }

  getEnvironmentsWithDeployments(): void {
    this.deploymentService.getEnvironmentsWithDeployments().subscribe((result) => {
      this.environmentDeploymentModels = result;
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
