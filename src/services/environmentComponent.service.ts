import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Injectable } from "@angular/core";
import { EnvironmentComponentModel } from "../models/environmentComponent.model";
import { HttpService } from "../utils/http-service";
import { map, catchError } from "rxjs/operators";
import { ComponentModel } from "models/component.model";

@Injectable()
export class EnvironmentComponentService {
  constructor(private http: HttpClient) {}

  saveEnvironmentComponent(environmentComponentModel: EnvironmentComponentModel): Observable<EnvironmentComponentModel> {
    return this.http
      .post(HttpService.SERVICE_PATH + "environment_component", environmentComponentModel, {
        headers: null,
      })
      .pipe(map((response) => response as EnvironmentComponentModel), catchError(this.handleError));
  }

  findComponentsNotInEnvironment(environmentId: string): Observable<ComponentModel[]> {
    return this.http
    .get(HttpService.SERVICE_PATH + "environment_component/findComponentsNotInEnvironment?environmentId=" + environmentId, {headers: null})
    .pipe(map((response) => response as ComponentModel[]), catchError(this.handleError));
  }

  handleError(err) {
    if (err instanceof HttpErrorResponse) {
      return throwError(err.message)
    } else {
      return throwError(err);
    }
  }

}
