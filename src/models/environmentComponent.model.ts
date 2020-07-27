import { Injectable } from "@angular/core";

@Injectable()
export class EnvironmentComponentModel {
  id: string;
  componentId: string;
  componentName: string;
  environmentId: string;
  environmentName: string;
  delete: boolean;
  active: boolean;  
  createdAt: Date;
}
