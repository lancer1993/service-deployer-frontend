export class DeploymentModel {
  componentId: string;
  environmentId: string;
  componentName: string;
  environmentName: string;
  desciption: string;
  isDeployed: boolean;
  delete: boolean;
  active: boolean;
  createdAt: Date;
  modifiedAt: Date;
}
