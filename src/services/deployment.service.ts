import { map, catchError } from "rxjs/operators";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Injectable } from "@angular/core";
import { DeploymentModel } from "../models/deplyment.model";
import { HttpService } from "../utils/http-service";
import { DeploymentEnhancedModel } from '../models/deploymentEnhanced.model';
import { EnvironmentDeploymentModel } from "models/environmentDeployment.model";

@Injectable()
export class DeploymentService {
  constructor(private http: HttpClient) {}

  saveDeployment(deploymentModel: DeploymentModel): Observable<DeploymentModel> {
    return this.http
      .post(HttpService.SERVICE_PATH + "deployment", deploymentModel, {
        headers: null,
      })
      .pipe(map((response) => response as DeploymentModel), catchError(this.handleError));
  }

  getByEnvironment(id: string): Observable<DeploymentEnhancedModel[]>{
    return this.http
      .get(HttpService.SERVICE_PATH + "deployment/findDeploymentsForEnvironmentId/" + id, {headers: null})
      .pipe(map((response) => response as DeploymentEnhancedModel[]), catchError(this.handleError));
  }

  deleteDeploymentById(id: string): Observable<any> {
    return this.http
    .delete(HttpService.SERVICE_PATH + "deployment/" + id, {headers: null})
    .pipe(map((response) => response as any), catchError(this.handleError));
  }

  getEnvironmentsWithDeployments(): Observable<EnvironmentDeploymentModel[]> {
    return this.http
      .get(HttpService.SERVICE_PATH + "deployment/getEnvironmentsWithDeployments", {headers: null})
      .pipe(map((response) => response as EnvironmentDeploymentModel[]), catchError(this.handleError));
  }

  handleError(err) {
    if (err instanceof HttpErrorResponse) {
      return throwError(err.message)
    } else {
      return throwError(err);
    }
  }

}