import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { ConfirmationDialogComponent } from "../confirmation-dialog/confirmation-dialog.component";

@Component({
  selector: "app-add-component",
  templateUrl: "./add-component.component.html",
  styleUrls: ["./add-component.component.css"],
})
export class AddComponentComponent implements OnInit {
  @Input() isUpdate: Boolean;
  @Input() isNew: Boolean;
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();
  @Output() onCancel: EventEmitter<void> = new EventEmitter<void>();

  constructor(private formBuilder: FormBuilder, private dialog: MatDialog) {}

  ngOnInit(): void {}
}
