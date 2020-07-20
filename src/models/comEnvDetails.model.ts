import { Injectable } from "@angular/core";

@Injectable()
export class ComEnvDetailsModel {
  id: string;
  environmentId: string;
  environmentName: string;
  componentId: string;
  componentName: string;
  createdAt: Date;
}
