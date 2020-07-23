export class ReleaseModel {
  id: string;
  componentId: string;
  componentName: string;
  repositoryUrl: string;
  branch: string;
  description: string;
  versionNumber: string;
  isReleased: boolean;
  delete: boolean;
  active: boolean;
  createdAt: Date;
  modifiedAt: Date;
}
