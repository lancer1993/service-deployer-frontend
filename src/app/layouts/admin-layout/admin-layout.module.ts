import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../dashboard/dashboard.component";
import { UserProfileComponent } from "../../user-profile/user-profile.component";
import { TableListComponent } from "../../table-list/table-list.component";
import { TypographyComponent } from "../../typography/typography.component";
import { IconsComponent } from "../../icons/icons.component";
import { MapsComponent } from "../../maps/maps.component";
import { NotificationsComponent } from "../../notifications/notifications.component";
import { UpgradeComponent } from "../../upgrade/upgrade.component";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatRippleModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSelectModule } from "@angular/material/select";
import { AddProductComponent } from "../../add-product/add-product.component";
import { EditProductComponent } from "../../edit-product/edit-product.component";
import { CategoriesService } from "../../../services/categories.service";
import { ProductService } from "../../../services/product.service";
import { SubCategoryService } from "../../../services/subCategory.service";
import { MatDialogModule } from "@angular/material/dialog";
import { AddComponentComponent } from "../../add-component/add-component.component";
import { AddEnvironmentComponent } from "../../add-environment/add-environment.component";
import { AddReleaseComponent } from "../../add-release/add-release.component";
import { EditReleaseComponent } from "../../edit-release/edit-release.component";
import { EditComponentComponent } from "../../edit-component/edit-component.component";
import { EditEnvironmentComponent } from "../../edit-environment/edit-environment.component";
import { ComponentTypeService } from "../../../services/componentType.service";
import { ComponentService } from "../../../services/component.service";
import { ConfirmationDialogComponent } from "../../confirmation-dialog/confirmation-dialog.component";
import { ConfirmDialogService } from "../../../services/confirmDialog.service";
import { EnvironmentService } from "../../../services/environment.service";
import { AddComponentEnvironmentComponent } from "../../add-component-environment/add-component-environment.component";
import { ComponentEnvironmentService } from "../../../services/componentEnvironment.service";
import { DeploymentService } from "../../../services/deployment.service";
import { ReleaseService } from '../../../services/release.service';
import { DeploymentModel } from "models/deplyment.model";

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
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    AddProductComponent,
    EditProductComponent,
    AddComponentComponent,
    AddEnvironmentComponent,
    AddReleaseComponent,
    EditReleaseComponent,
    EditComponentComponent,
    EditEnvironmentComponent,
    ConfirmationDialogComponent,
    AddComponentEnvironmentComponent,
  ],
  entryComponents: [
    AddProductComponent,
    EditProductComponent,
    AddComponentComponent,
    AddEnvironmentComponent,
    AddReleaseComponent,
    EditReleaseComponent,
    EditComponentComponent,
    EditEnvironmentComponent,
    ConfirmationDialogComponent,
    AddComponentEnvironmentComponent,
  ],
  providers: [
    CategoriesService,
    SubCategoryService,
    ProductService,
    ComponentTypeService,
    ComponentService,
    ConfirmDialogService,
    EnvironmentService,
    ComponentEnvironmentService,
    ReleaseService,
    DeploymentService
  ],
})
export class AdminLayoutModule { }
