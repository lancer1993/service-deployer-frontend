import { Injectable } from "@angular/core";

@Injectable()
export class DeploymentEnhancedModel {
  id: string;
  componentId: string;
  environmentId: string;
  componentName: string;
  environmentName: string;
  repositoryUrl: string;
  deployedVersionNumber: string;
  latestVersionNumber: string;
  userId: string;
  isDeployed: boolean;
  createdAt: string;
  delete: boolean;
  active: boolean;
  
}
