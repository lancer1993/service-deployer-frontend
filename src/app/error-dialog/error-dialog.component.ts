import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Inject
} from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.css']
})
export class ErrorDialogComponent{

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      cancelText: string;
      message: string;
      title: string;
    },
    private mdDialogRef: MatDialogRef<ErrorDialogComponent>
  ) { }

  public cancel() {
    this.close(false);
  }
  public close(value) {
    this.mdDialogRef.close(value);
  }

  @HostListener("keydown.esc")
  public onEsc() {
    this.close(false);
  }

}
