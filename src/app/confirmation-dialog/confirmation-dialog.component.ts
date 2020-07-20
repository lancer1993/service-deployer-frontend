import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Inject,
  Output,
} from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-confirm-dialog",
  templateUrl: "./confirmation-dialog.component.html",
  styles: [
    `
      .header,
      .dialog-message {
        text-transform: lowercase;
      }
      .header::first-letter,
      .dialog-message::first-letter {
        text-transform: uppercase;
      }
      .btn-cancel {
        background-color: red;
        color: #fff;
      }
    `,
  ],
})
export class ConfirmationDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      cancelText: string;
      confirmText: string;
      message: string;
      title: string;
    },
    private mdDialogRef: MatDialogRef<ConfirmationDialogComponent>
  ) {}
  public cancel() {
    this.close(false);
  }
  public close(value) {
    this.mdDialogRef.close(value);
  }
  public confirm() {
    this.close(true);
  }
  @HostListener("keydown.esc")
  public onEsc() {
    this.close(false);
  }
}
