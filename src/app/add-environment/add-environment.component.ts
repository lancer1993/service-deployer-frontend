import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EnvironmentModel } from "models/environment.model";
import { Router } from "@angular/router";
import { EnvironmentService } from "services/environment.service";
import { take } from "rxjs/operators";
import { ConfirmDialogService } from "../../services/confirmDialog.service";

@Component({
  selector: "app-add-environment",
  templateUrl: "./add-environment.component.html",
  styleUrls: ["./add-environment.component.css"],
})
export class AddEnvironmentComponent implements OnInit {
  form: FormGroup;
  @Input() environmentModel: EnvironmentModel;
  @Input() isUpdate: Boolean;
  @Input() isNew: Boolean;
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();
  @Output() onCancel: EventEmitter<void> = new EventEmitter<void>();
  environmentModels: EnvironmentModel[] = [];
  environments: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private environmentService: EnvironmentService,
    private dialogService: ConfirmDialogService
  ) {}

  ngOnInit(): void {
    this.loadAllEnvironments();
    if (this.environmentModel == null) {
      this.isUpdate = false;
      this.isNew = false;
      this.form = this.formBuilder.group({
        environmentName: ["", Validators.required],
        description: ["", Validators.required],
        delete: [false, Validators.required],
        active: [true, Validators.required],
        createdAt: new Date(),
      });
    } else {
      this.form = this.formBuilder.group({
        environmentName: [
          this.environmentModel.environmentName,
          Validators.required,
        ],
        description: [this.environmentModel.description, Validators.required],
        delete: [this.environmentModel.delete, Validators.required],
        active: [this.environmentModel.active, Validators.required],
        createdAt: new Date(),
      });
    }
  }

  loadAllEnvironments(): void {
    this.environmentService.getEnvironments().subscribe((result) => {
      this.environments = result;
      this.environmentModels = this.environments._embedded.environment;
    });
  }

  saveEnvironment(): void {
    this.isUpdate = false;
    this.isNew = false;
    this.environmentService
      .saveEnvironment(this.form.value)
      .pipe(take(1))
      .subscribe((environmentModel) => {
        if (environmentModel) {
          this.resetForm();
          this.router.navigate(["/environmet-data"]);
        } else {
          console.log("ERROR");
        }
      });
  }

  updateComponent(): void {
    const newEnvironment = new EnvironmentModel();
    newEnvironment.environmentName = this.form.controls[
      "environmentName"
    ].value;
    newEnvironment.description = this.form.controls["description"].value;
    newEnvironment.delete = false;
    newEnvironment.active = false;

    this.environmentService
      .updateEnvironment(newEnvironment)
      .pipe(take(1))
      .subscribe((newEnvironment) => {
        this.environmentModel = newEnvironment;
        alert("Environment Update Successfully!");
      });
  }

  resetForm() {
    this.form.reset({
      environmentName: [""],
      description: [""],
      delete: false,
      active: false,
      createdAt: new Date(),
    });
  }

  handleClick() {
    const options = {
      title: "Confirm Environment Submission",
      message: "Are you sure do you want to save this environment?",
      cancelText: "CANCEL",
      confirmText: "YES, LEAVE PAGE",
    };

    this.dialogService.open(options);

    this.dialogService.confirmed().subscribe((confirmed) => {
      if (confirmed) {
        this.saveEnvironment();
      }
    });
  }
}
