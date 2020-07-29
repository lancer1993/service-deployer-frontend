import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {AdminLayoutRoutes} from './admin-layout.routing';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {TableListComponent} from './table-list/table-list.component';
import {TypographyComponent} from './typography/typography.component';
import {IconsComponent} from './icons/icons.component';
import {MapsComponent} from './maps/maps.component';
import {NotificationsComponent} from './notifications/notifications.component';
import {UpgradeComponent} from './upgrade/upgrade.component';
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
