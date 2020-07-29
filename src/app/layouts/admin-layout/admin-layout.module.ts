import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AdminLayoutRoutes} from './admin-layout.routing';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {TableListComponent} from './table-list/table-list.component';
import {TypographyComponent} from './typography/typography.component';
import {IconsComponent} from './icons/icons.component';
import {MapsComponent} from './maps/maps.component';
import {NotificationsComponent} from './notifications/notifications.component';
import {UpgradeComponent} from './upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {ErrorDialogComponent} from './error-dialog/error-dialog.component';
import {ComponentTypeService} from '../../../services/componentType.service';
import {ComponentService} from '../../../services/component.service';
import {ConfirmDialogService} from '../../../services/confirmDialog.service';
import {EnvironmentService} from '../../../services/environment.service';
import {ReleaseService} from '../../../services/release.service';
import {DeploymentService} from '../../../services/deployment.service';
import {EnvironmentComponentService} from '../../../services/environmentComponent.service';
import {ErrorDialogService} from '../../../services/errorDialog.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatDialogModule,
        MatTooltipModule,
    ],
    declarations: [
        UserProfileComponent,
        TableListComponent,
        TypographyComponent,
        IconsComponent,
        MapsComponent,
        NotificationsComponent,
        UpgradeComponent,
        ErrorDialogComponent,
    ],
    providers: [
        ComponentTypeService,
        ComponentService,
        ConfirmDialogService,
        EnvironmentService,
        ReleaseService,
        DeploymentService,
        EnvironmentComponentService,
        ErrorDialogService
    ],
})
export class AdminLayoutModule {
}
