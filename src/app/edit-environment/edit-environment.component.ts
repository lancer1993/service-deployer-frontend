import { Component, OnInit, Input } from '@angular/core';
import { ComponentService } from "../../services/component.service";
import { ComponentModel } from "models/component.model";
import { Router, ActivatedRoute } from '@angular/router';
import { DeploymentService } from '../../services/deployment.service';
import { DeploymentModel } from '../../models/deplyment.model';
import { EnvironmentModel } from '../../models/environment.model';
import { EnvironmentService } from '../../services/environment.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { take } from "rxjs/operators";
import { ConfirmDialogService } from "../../services/confirmDialog.service";
import { EnvironmentComponentService } from '../../services/environmentComponent.service';
import { ReleaseService } from '../../services/release.service';
import { ReleaseModel } from '../../models/release.model';
import { EnvironmentComponentModel } from 'models/environmentComponent.model';
import { ErrorDialogService } from 'services/errorDialog.service';
import { DeploymentEnhancedModel } from '../../models/deploymentEnhanced.model'

@Component({
  selector: 'app-edit-environment',
  templateUrl: './edit-environment.component.html',
  styleUrls: ['./edit-environment.component.css']
})
export class EditEnvironmentComponent implements OnInit {
  components: ComponentModel[] = [];
  commonComponents: any;
  id;
  environment: EnvironmentModel;
  deployment: DeploymentModel;
  form: FormGroup;
  @Input() isUpdate: Boolean;
  @Input() isNew: Boolean;
  component: ComponentModel;
  repositoryUrl: string;
  componentId: string;
  componentName: string;
  versionNumber: string;

  deployments: DeploymentModel[] = [];
  commonDeployment: any;
  releaseModels: ReleaseModel[] = [];
  commonRelease: any;

  environmentComponentModel: EnvironmentComponentModel;
  deploymentEnhancedModels: DeploymentEnhancedModel[];

  constructor(private componentService: ComponentService,
    private activatedroute: ActivatedRoute,
    private router: Router,
    private deploymentService: DeploymentService,
    private environmentService: EnvironmentService,
    private formBuilder: FormBuilder,
    private dialogService: ConfirmDialogService,
    private environmentComponentService: EnvironmentComponentService,
    private releaseService: ReleaseService,
    private errorDialogService: ErrorDialogService) { }

  sub;

  ngOnInit(): void {
    this.sub = this.activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });

    this.findComponentsNotInEnvironment(this.id);
    this.getEnvironmentById(this.id);
    this.getByEnvironment(this.id);

    if (this.deployment == null) {
      this.isUpdate = false;
      this.isNew = false;
      this.form = this.formBuilder.group({
        componentId: [""],
        environmentId: [""],
        componentName: ["", Validators.required],
        environmentName: ["", Validators.required],
        repositoryUrl: [""],
        versionNumber: ["", Validators.required],
        isDeployed: false,
        delete: false,
        active: true,
        createdAt: new Date(),
        modifiedAt: new Date()
      });
    } else {
      this.form = this.formBuilder.group({
        componentId: [this.deployment.componentId, Validators.required],
        environmentId: [this.deployment.environmentId, Validators.required],
        componentName: [this.deployment.componentName, Validators.required],
        environmentName: [this.deployment.environmentName, Validators.required],
        repositoryUrl: [this.deployment.repositoryUrl, Validators.required],
        versionNumber: [this.deployment.versionNumber, Validators.required],
        isDeployed: false,
        delete: false,
        active: true,
        createdAt: new Date(),
        modifiedAt: new Date()
      });
    }
  }

  getEnvironmentById(id: string): void {
    this.environmentService.getEnvironmentByd(id).subscribe((result) => {
      this.environment = result;
    }, error => {
      const options = {
        title: "Error",
        message: "Cannot load the environment",
        cancelText: "CANCEL",
      };
      this.errorDialogService.open(options);
    });
  }

  getComponentsById(id: string): void {
    this.componentService.getComponentById(id).subscribe((result) => {
      this.component = result;
      this.componentId = this.component.id;
      this.repositoryUrl = this.component.repositoryUrl;
      this.componentName = this.component.componentName;
    }, error => {
      const options = {
        title: "Error",
        message: "Cannot component details",
        cancelText: "CANCEL",
      };
      this.errorDialogService.open(options);
    });
  }

  public onChange(event): void {
    const newVal = event.value;
    this.getComponentsById(newVal);
    this.findByComponentIdOrderByCreatedAtDesc(newVal);
  }

  resetForm() {
    this.form.reset({
      componentId: [''],
      environmentId: [''],
      componentName: [''],
      environmentName: [''],
      repositoryUrl: [''],
      versionNumber: [''],
      isDeployed: false,
      delete: false,
      active: true,
      createdAt: new Date(),
      modifiedAt: new Date()
    });

    this.findComponentsNotInEnvironment(this.id);
    this.getEnvironmentById(this.id);
    this.getByEnvironment(this.id);
  }

  addDeployment(): void {
    this.form.controls['componentId'].setValue(this.componentId);
    this.form.controls['environmentId'].setValue(this.environment.id);
    this.form.controls['componentName'].setValue(this.componentName);
    this.form.controls['environmentName'].setValue(this.environment.environmentName);
    this.form.controls['repositoryUrl'].setValue(this.repositoryUrl);
    this.form.controls['versionNumber'].setValue(this.versionNumber);

    this.isUpdate = false;
    this.isNew = false;
    this.deploymentService
      .saveDeployment(this.form.value)
      .pipe(take(1))
      .subscribe((releaseModel) => {
        if (releaseModel) {
          this.resetForm();
          this.router.navigate(['/edit-environment', this.environment.id]);
        } else {
          console.log("ERROR");
        }
      }, error => {
        const options = {
          title: "Error",
          message: "Cannot add the deployment",
          cancelText: "CANCEL",
        };
        this.errorDialogService.open(options);
      });
  }

  handleClick() {
    const options = {
      title: "Confirm Deployment",
      message: "Are you sure do you want to add this deployment?",
      cancelText: "CANCEL",
      confirmText: "YES",
    };

    this.dialogService.open(options);

    this.dialogService.confirmed().subscribe((confirmed) => {
      if (confirmed) {
        this.saveEnvironmentComponent();
        this.addDeployment();
      }
    });
  }

  getByEnvironment(id: string): void {
    this.deploymentService.getByEnvironment(id).subscribe((result) => {
      this.deploymentEnhancedModels = result;
    }, error => {
      const options = {
        title: "Error",
        message: "Cannot load deployments",
        cancelText: "CANCEL",
      };
      this.errorDialogService.open(options);
    });
  }

  findComponentsNotInEnvironment(environmentId: string): void {
    this.environmentComponentService.findComponentsNotInEnvironment(environmentId).subscribe((result) => {
      this.components = result;
    }, error => {
      const options = {
        title: "Error",
        message: "Cannot load components for the environment",
        cancelText: "CANCEL",
      };
      this.errorDialogService.open(options);
    });
  }


  findByComponentIdOrderByCreatedAtDesc(idComponent: string): void {
    this.releaseService.findByComponentIdOrderByCreatedAtDesc(idComponent).subscribe((result) => {
      this.commonRelease = result;
      this.releaseModels = this.commonRelease._embedded.release;
    }, error => {
      const options = {
        title: "Error",
        message: "Cannot find component versions",
        cancelText: "CANCEL",
      };
      this.errorDialogService.open(options);
    });
  }

  saveEnvironmentComponent(): void {

    const envComponent = new EnvironmentComponentModel();
    envComponent.componentId = this.componentId;
    envComponent.componentName = this.componentName;
    envComponent.environmentId = this.environment.id;
    envComponent.environmentName = this.environment.environmentName;
    envComponent.delete = false;
    envComponent.active =  false;
    envComponent.createdAt = new Date();

    this.environmentComponentService
      .saveEnvironmentComponent(envComponent)
      .pipe(take(1))
      .subscribe((envComponent) => {
        if (envComponent) {

        } else {
          console.log("ERROR");
        }
      });
  }

  public onVersionChange(event): void {
    const newVal = event.value;
    this.versionNumber = newVal;
  }

}
