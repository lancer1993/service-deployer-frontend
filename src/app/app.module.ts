import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from "./app.routing";
import { ComponentsModule } from "./components/components.module";

import { AppComponent } from "./app.component";
import { AgmCoreModule } from "@agm/core";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { ProductsComponent } from "./products/products.component";
import { HttpClientModule } from "@angular/common/http";
import { ServiceTierComponent } from "./service-tier/service-tier.component";
import { EnvironmentDataComponent } from "./environment-data/environment-data.component";
import { ReleaseInformationComponent } from "./release-information/release-information.component";
import { AddServiceComponent } from './add-service/add-service.component';
import { AddEnvironmentComponent } from './add-environment/add-environment.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: "YOUR_GOOGLE_MAPS_API_KEY",
    }),
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ProductsComponent,
    ServiceTierComponent,
    EnvironmentDataComponent,
    ReleaseInformationComponent,
    AddServiceComponent,
    AddEnvironmentComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
