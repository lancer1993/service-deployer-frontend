import {Injectable} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ErrorDialogComponent} from '../app/layouts/admin-layout/error-dialog/error-dialog.component';

@Injectable()
export class ErrorDialogService {
    constructor(private dialog: MatDialog) { }

    dialogRef: MatDialogRef<ErrorDialogComponent>;

    public open(options) {
        this.dialogRef = this.dialog.open(ErrorDialogComponent, {
            data: {
                title: options.title,
                message: options.message,
                cancelText: options.cancelText,
            },
        });
    }
}
