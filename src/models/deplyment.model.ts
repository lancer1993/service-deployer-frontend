export class DeploymentModel {
  id: string;
  componentId: string;
  environmentId: string;
  componentName: string;
  environmentName: string;
  repositoryUrl: string;
  description: string;
  isDeployed: boolean;
  delete: boolean;
  active: boolean;
  createdAt: Date;
  modifiedAt: Date;
}
