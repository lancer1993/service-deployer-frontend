import { Injectable } from "@angular/core";
import { DeploymentEnhancedModel } from "./deploymentEnhanced.model";

@Injectable()
export class EnvironmentDeploymentModel {
    id: string;
    environmentName: string;
    deploymentEnhancedModels: DeploymentEnhancedModel[];
}