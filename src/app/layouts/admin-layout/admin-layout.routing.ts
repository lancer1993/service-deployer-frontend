import {Routes} from '@angular/router';

import {DashboardComponent} from '../../dashboard/dashboard.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {TableListComponent} from './table-list/table-list.component';
import {TypographyComponent} from './typography/typography.component';
import {IconsComponent} from './icons/icons.component';
import {MapsComponent} from './maps/maps.component';
import {NotificationsComponent} from './notifications/notifications.component';
import {UpgradeComponent} from './upgrade/upgrade.component';
import {ServiceTierComponent} from '../../service-tier/service-tier.component';
import {EnvironmentDataComponent} from '../../environment-data/environment-data.component';
import {AddComponentComponent} from '../../add-component/add-component.component';
import {AddEnvironmentComponent} from '../../add-environment/add-environment.component';
import {EditComponentComponent} from '../../edit-component/edit-component.component';
import {EditEnvironmentComponent} from '../../edit-environment/edit-environment.component';

export const AdminLayoutRoutes: Routes = [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'user-profile', component: UserProfileComponent},
    {path: 'table-list', component: TableListComponent},
    {path: 'typography', component: TypographyComponent},
    {path: 'icons', component: IconsComponent},
    {path: 'maps', component: MapsComponent},
    {path: 'notifications', component: NotificationsComponent},
    {path: 'upgrade', component: UpgradeComponent},
    {path: 'component', component: ServiceTierComponent},
    {path: 'environmet-data', component: EnvironmentDataComponent},
    {path: 'add-component', component: AddComponentComponent},
    {path: 'add-environment', component: AddEnvironmentComponent},
    {path: 'edit-environment/:id', component: EditEnvironmentComponent},
    {path: 'edit-component/:id', component: EditComponentComponent},
];
