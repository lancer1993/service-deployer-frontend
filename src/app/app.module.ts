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
  providers: [

  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
