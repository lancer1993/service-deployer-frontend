import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ComponentTypeService } from "../../services/componentType.service";
import { ComponentService } from "../../services/component.service";
import { ComponentTypeModel } from "../../models/componentType.model";
import { ComponentModel } from "models/component.model";
import { take } from "rxjs/operators";
import { ConfirmDialogService } from "../../services/confirmDialog.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-component",
  templateUrl: "./add-component.component.html",
  styleUrls: ["./add-component.component.css"],
})
export class AddComponentComponent implements OnInit {
  form: FormGroup;
  @Input() component: ComponentModel;
  @Input() isUpdate: Boolean;
  @Input() isNew: Boolean;
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();
  @Output() onCancel: EventEmitter<void> = new EventEmitter<void>();
  componentTypes: ComponentTypeModel[] = [];
  commonTypes: any;
  components: ComponentModel[] = [];
  commonComponents: any;

  createdDate = new Date();

  constructor(
    private formBuilder: FormBuilder,
    private componentTypeService: ComponentTypeService,
    private componentService: ComponentService,
    private dialogService: ConfirmDialogService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAllComponents();
    this.laodAllComponentTypes();
    if (this.component == null) {
      this.isUpdate = false;
      this.isNew = false;
      this.form = this.formBuilder.group({
        componentName: ["", Validators.required],
        repositoryUrl: ["", Validators.required],
        componentTypeId: ["", Validators.required],
        delete: [false, Validators.required],
        active: [true, Validators.required],
        createdAt: new Date(),
      });
    } else {
      this.form = this.formBuilder.group({
        componentName: [this.component.componentName, Validators.required],
        repositoryUrl: [this.component.repositoryUrl, Validators.required],
        componentTypeId: [this.component.componentTypeId, Validators.required],
        delete: [this.component.delete, Validators.required],
        active: [this.component.active, Validators.required],
        createdAt: new Date(),
      });
    }
  }

  laodAllComponentTypes(): void {
    this.componentTypeService.getComponentTypes().subscribe((result) => {
      this.commonTypes = result;
      this.componentTypes = this.commonTypes._embedded.component_type;
    });
  }

  loadAllComponents(): void {
    this.componentService.getAllComponents().subscribe((result) => {
      this.commonComponents = result;
      this.components = this.commonComponents._embedded.component;
    });
  }

  saveComponent(): void {
    this.isUpdate = false;
    this.isNew = false;
    this.componentService
      .saveComponent(this.form.value)
      .pipe(take(1))
      .subscribe((component) => {
        if (component) {
          this.resetForm();
          this.router.navigate(["/service-tier"]);
        } else {
          console.log("ERROR");
        }
      });
  }

  updateComponent(): void {
    const newComponent = new ComponentModel();
    newComponent.componentName = this.form.controls["componentName"].value;
    newComponent.repositoryUrl = this.form.controls["repositoryUrl"].value;
    newComponent.componentTypeId = this.form.controls["componentTypeId"].value;
    newComponent.delete = false;
    newComponent.active = false;

    this.componentService
      .updateComponent(newComponent)
      .pipe(take(1))
      .subscribe((component) => {
        this.component = component;
        alert("Product Update Successfully!");
      });
  }

  resetForm() {
    this.form.reset({
      componentName: [""],
      repositoryUrl: [""],
      componentTypeId: [""],
      delete: false,
      active: false,
    });
  }

  handleClick() {
    const options = {
      title: "Confirm Component Submission",
      message: "Are you sure do you want to save the component?",
      cancelText: "CANCEL",
      confirmText: "YES, LEAVE PAGE",
    };

    this.dialogService.open(options);

    this.dialogService.confirmed().subscribe((confirmed) => {
      if (confirmed) {
        this.saveComponent();
      }
    });
  }
}
