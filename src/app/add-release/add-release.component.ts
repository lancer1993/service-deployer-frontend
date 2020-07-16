import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { ConfirmationDialogComponent } from "../confirmation-dialog/confirmation-dialog.component";

interface NewComponent {
  id: number;
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-add-release",
  templateUrl: "./add-release.component.html",
  styleUrls: ["./add-release.component.css"],
})
export class AddReleaseComponent implements OnInit {
  @Input() isUpdate: Boolean;
  @Input() isNew: Boolean;
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();
  @Output() onCancel: EventEmitter<void> = new EventEmitter<void>();

  newComponents: NewComponent[] = [
    { id: 1, value: "Admin API", viewValue: "Admin API" },
    { id: 2, value: "Order API", viewValue: "Order API" },
    { id: 3, value: "Uber Eats API", viewValue: "Uber Eats API" },
  ];

  constructor(private formBuilder: FormBuilder, private dialog: MatDialog) {}

  ngOnInit(): void {}
}
