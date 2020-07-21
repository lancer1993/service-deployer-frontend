export class ReleaseModel {
  componentId: string;
  componentName: string;
  branch: string;
  desciption: string;
  versionNumber: string;
  isReleased: boolean;
  delete: boolean;
  active: boolean;
  createdAt: Date;
  modifiedAt: Date;
}
