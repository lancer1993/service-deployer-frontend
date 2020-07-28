import { map, catchError } from "rxjs/operators";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Injectable } from "@angular/core";
import { EnvironmentModel } from "../models/environment.model";
import { HttpService } from "../utils/http-service";

@Injectable()
export class EnvironmentService {
  constructor(private http: HttpClient) {}

  saveEnvironment(environment: EnvironmentModel): Observable<EnvironmentModel> {
    return this.http
      .post(HttpService.SERVICE_PATH + "environment", environment, {
        headers: null,
      })
      .pipe(map((response) => response as EnvironmentModel), catchError(this.handleError));
  }

  updateEnvironment(
    environment: EnvironmentModel
  ): Observable<EnvironmentModel> {
    return this.http
      .put(HttpService.SERVICE_PATH + "environment", environment, {
        headers: null,
      })
      .pipe(map((response) => response as EnvironmentModel), catchError(this.handleError));
  }

  getEnvironments(): Observable<EnvironmentModel[]> {
    return this.http
      .get(HttpService.SERVICE_PATH + "environment", { headers: null })
      .pipe(map((response) => response as EnvironmentModel[]), catchError(this.handleError));
  }

  getEnvironmentByd(id: String): Observable<EnvironmentModel> {
    return this.http
      .get(HttpService.SERVICE_PATH + "environment/" + id, { headers: null })
      .pipe(map((response) => response as EnvironmentModel), catchError(this.handleError));
  }

  handleError(err) {
    if (err instanceof HttpErrorResponse) {
      return throwError(err.message)
    } else {
      return throwError(err);
    }
  }

}
