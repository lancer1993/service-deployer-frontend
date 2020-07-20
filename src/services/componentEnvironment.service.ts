import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { ComEnvDetailsModel } from "../models/comEnvDetails.model";
import { HttpService } from "../utils/http-service";
import { map } from "rxjs/operators";

@Injectable()
export class ComponentEnvironmentService {
  constructor(private http: HttpClient) {}

  getAllComponentEnvironments(): Observable<ComEnvDetailsModel[]> {
    return this.http
      .get(HttpService.SERVICE_PATH + "com_env_details", { headers: null })
      .pipe(map((response) => response as ComEnvDetailsModel[]));
  }

  saveComponent(component: ComEnvDetailsModel): Observable<ComEnvDetailsModel> {
    return this.http
      .post(HttpService.SERVICE_PATH + "com_env_details", component, {
        headers: null,
      })
      .pipe(map((response) => response as ComEnvDetailsModel));
  }

  updateComponent(componentEnvironment: ComEnvDetailsModel): Observable<ComEnvDetailsModel> {
    return this.http
      .put(HttpService.SERVICE_PATH + "com_env_details", componentEnvironment, { headers: null })
      .pipe(map((response) => response as ComEnvDetailsModel));
  }

}
