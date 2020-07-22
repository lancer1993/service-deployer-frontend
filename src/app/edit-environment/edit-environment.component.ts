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

  constructor(private componentService: ComponentService, 
    private activatedroute: ActivatedRoute,
    private router: Router,
    private deploymentService: DeploymentService,
    private environmentService: EnvironmentService,
    private formBuilder: FormBuilder,
    private dialogService: ConfirmDialogService) { }

  sub;

  ngOnInit(): void {    
    this.sub = this.activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    this.loadAllComponents();
    this.getEnvironmentById(this.id);
    
    if (this.deployment == null) {
      this.isUpdate = false;
      this.isNew = false;
      this.form = this.formBuilder.group({
        componentId: [""],
        environmentId: [""],
        componentName: ["", Validators.required],
        environmentName: ["", Validators.required],
        repositoryUrl: [""],
        description: ["", Validators.required],
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
        description: [this.deployment.description, Validators.required],
        isDeployed: false,
        delete: false,
        active: true,
        createdAt: new Date(),
        modifiedAt: new Date()
      });
    }    
  }

  loadAllComponents(): void {
    this.componentService.getAllComponents().subscribe((result) => {
      this.commonComponents = result;
      this.components = this.commonComponents._embedded.component;
    });
  }
  
  getEnvironmentById(id: string): void {
    this.environmentService.getEnvironmentByd(id).subscribe((result) => {
      this.environment = result;
    });
  }

  getComponentsById(id: string): void {
    this.componentService.getComponentById(id).subscribe((result) => {
      this.component = result;
      this.componentId = this.component.id;
      this.repositoryUrl = this.component.repositoryUrl;
      this.componentName = this.component.componentName;
    });
  }

  public onChange(event): void {
    const newVal = event.value;
    this.getComponentsById(newVal);
  }

  resetForm() {
    this.form.reset({
      componentId: [''],
      environmentId: [''],
      componentName: [''],
      environmentName: [''],
      repositoryUrl: [''],
      description: [''],
      isDeployed: false,
      delete: false,
      active: true,
      createdAt: new Date(),
      modifiedAt: new Date()
    });

    this.sub = this.activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });

    this.getEnvironmentById(this.id);
  }

  addDeployment(): void {
    this.form.controls['componentId'].setValue(this.componentId);
    this.form.controls['environmentId'].setValue(this.environment.id);
    this.form.controls['componentName'].setValue(this.componentName);
    this.form.controls['repositoryUrl'].setValue(this.repositoryUrl);

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
        this.addDeployment();
      }
    });
  }

}
