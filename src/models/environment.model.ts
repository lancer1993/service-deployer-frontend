import { Injectable } from "@angular/core";

@Injectable()
export class EnvironmentModel {
  id: string;
  environmentName: string;
  description: string;
  delete: boolean;
  active: boolean;
  createdAt: Date;
}
