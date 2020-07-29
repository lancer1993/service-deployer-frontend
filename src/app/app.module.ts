import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {AppRoutingModule} from './app.routing';
import {ComponentsModule} from './components/components.module';

import {AppComponent} from './app.component';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {HttpClientModule} from '@angular/common/http';
import {ServiceTierComponent} from './service-tier/service-tier.component';
import {EnvironmentDataComponent} from './environment-data/environment-data.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AddComponentComponent} from './add-component/add-component.component';
import {AddEnvironmentComponent} from './add-environment/add-environment.component';
import {EditComponentComponent} from './edit-component/edit-component.component';
import {EditEnvironmentComponent} from './edit-environment/edit-environment.component';
import {ConfirmationDialogComponent} from './confirmation-dialog/confirmation-dialog.component';
import {MatButtonModule} from '@angular/material/button';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ComponentsModule,
        RouterModule,
        AppRoutingModule,
        NgxSpinnerModule,
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
        AppComponent,
        AdminLayoutComponent,
        ServiceTierComponent,
        EnvironmentDataComponent,
        DashboardComponent,
        AddComponentComponent,
        AddEnvironmentComponent,
        EditComponentComponent,
        EditEnvironmentComponent,
        ConfirmationDialogComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
