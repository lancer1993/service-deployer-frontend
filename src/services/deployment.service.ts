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

  getByEnvironment(id: string): Observable<DeploymentModel[]>{
    return this.http
      .get(HttpService.SERVICE_PATH + "deployment/search/findByEnvironmentId?environmentId=" + id, {headers: null})
      .pipe(map((response) => response as DeploymentModel[]));
  }

  deleteDeploymentById(id: string): Observable<any> {
    return this.http
    .delete(HttpService.SERVICE_PATH + "deployment/" + id, {headers: null})
    .pipe(map((response) => response as any));
  }

}