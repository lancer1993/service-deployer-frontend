import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
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
      .pipe(map((response) => response as EnvironmentModel));
  }

  updateEnvironment(
    environment: EnvironmentModel
  ): Observable<EnvironmentModel> {
    return this.http
      .put(HttpService.SERVICE_PATH + "environment", environment, {
        headers: null,
      })
      .pipe(map((response) => response as EnvironmentModel));
  }

  getEnvironments(): Observable<EnvironmentModel[]> {
    return this.http
      .get(HttpService.SERVICE_PATH + "environment", { headers: null })
      .pipe(map((response) => response as EnvironmentModel[]));
  }
}
