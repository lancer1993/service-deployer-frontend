import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ComponentService } from "../../services/component.service";
import { ComponentModel } from "models/component.model";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReleaseModel } from 'models/release.model';
import { ReleaseService } from '../../services/release.service';
import { take } from "rxjs/operators";
import { ConfirmDialogService } from "../../services/confirmDialog.service";

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css']
})

export class EditComponentComponent implements OnInit {
  form: FormGroup;
  @Input() isUpdate: Boolean;
  @Input() isNew: Boolean;
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();
  @Output() onCancel: EventEmitter<void> = new EventEmitter<void>();
  id;
  component: ComponentModel;
  releaseModel: ReleaseModel;

  constructor(private _Activatedroute: ActivatedRoute,
    private router: Router,
    private componentService: ComponentService,
    private formBuilder: FormBuilder,
    private releaseService: ReleaseService,
    private dialogService: ConfirmDialogService) { }

  sub;

  ngOnInit(): void {

    this.sub = this._Activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });

    this.getComponentsById(this.id);

    if (this.releaseModel == null) {
      this.isUpdate = false;
      this.isNew = false;
      this.form = this.formBuilder.group({
        componentId: [""],
        componentName: ["", Validators.required],
        repositoryUrl: ["", Validators.required],
        branch: ["", Validators.required],
        description: ["", Validators.required],
        versionNumber: ["", Validators.required],
        isReleased: false,
        delete: false,
        active: true,
        createdAt: new Date(),
        modifiedAt: new Date()
      });
    } else {
      this.form = this.formBuilder.group({
        componentId: [this.releaseModel.componentId, Validators.required],
        componentName: [this.releaseModel.componentName, Validators.required],
        repositoryUrl: [this.releaseModel.repositoryUrl, Validators.required],
        branch: [this.releaseModel.branch, Validators.required],
        description: [this.releaseModel.description, Validators.required],
        versionNumber: [this.releaseModel.versionNumber, Validators.required],
        isReleased: false,
        delete: false,
        active: true,
        createdAt: new Date(),
        modifiedAt: new Date()
      });
    }
  }

  getComponentsById(id: string): void {
    this.componentService.getComponentById(id).subscribe((result) => {
      this.component = result;
    });
  }

  addRelease(): void {
    this.form.controls['componentId'].setValue(this.component.id);
    this.form.controls['componentName'].setValue(this.component.componentName);
    this.form.controls['repositoryUrl'].setValue(this.component.repositoryUrl);

    this.isUpdate = false;
    this.isNew = false;
    this.releaseService
      .saveRelease(this.form.value)
      .pipe(take(1))
      .subscribe((releaseModel) => {
        if (releaseModel) {
          this.resetForm();
          this.router.navigate(['/edit-component', this.component.id]);
        } else {
          console.log("ERROR");
        }
      });
  }

  resetForm() {
    this.form.reset({
      componentId: [''],
      componentName: [''],
      repositoryUrl: [''],
      branch: [''],
      description: [''],
      versionNumber: [''],
      isReleased: false,
      delete: false,
      active: true,
      createdAt: new Date(),
      modifiedAt: new Date()
    });

    this.sub = this._Activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });

    this.getComponentsById(this.id);
  }

  handleClick() {
    const options = {
      title: "Confirm Release",
      message: "Are you sure do you want to add this release?",
      cancelText: "CANCEL",
      confirmText: "YES",
    };

    this.dialogService.open(options);

    this.dialogService.confirmed().subscribe((confirmed) => {
      if (confirmed) {
        this.addRelease();
      }
    });
  }

}
