import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { DeploymentModel } from "../models/deplyment.model";
import { HttpService } from "../utils/http-service";

@Injectable()
export class DeploymentService {
  constructor(private http: HttpClient) {}

  saveDeployment(deploymentModel: DeploymentModel): Observable<DeploymentModel> {
    return this.http
      .post(HttpService.SERVICE_PATH + "deployment", deploymentModel, {
        headers: null,
      })
      .pipe(map((response) => response as DeploymentModel));
  }

}