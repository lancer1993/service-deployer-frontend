import { map, catchError } from "rxjs/operators";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Injectable } from "@angular/core";
import { ReleaseModel } from "../models/release.model";
import { HttpService } from "../utils/http-service";

@Injectable()
export class ReleaseService {
  constructor(private http: HttpClient) { }

  saveRelease(releaseModel: ReleaseModel): Observable<ReleaseModel> {
    return this.http
      .post(HttpService.SERVICE_PATH + "release", releaseModel, {
        headers: null,
      })
      .pipe(map((response) => response as ReleaseModel), catchError(this.handleError));
  }

  getByComponent(id: string): Observable<ReleaseModel[]> {
    return this.http
      .get(HttpService.SERVICE_PATH + "release/search/findByComponentId?componentId=" + id, { headers: null })
      .pipe(map((response) => response as ReleaseModel[]), catchError(this.handleError));
  }

  deleteReleaseById(id: string): Observable<string> {
    return this.http
      .delete(HttpService.SERVICE_PATH + "release/deleteById?releaseId=" + id, { headers: null })
      .pipe(map((response) => response as string), catchError(this.handleError));
  }

  findByComponentIdOrderByCreatedAtDesc(idComponent: String): Observable<ReleaseModel[]> {
    return this.http
      .get(HttpService.SERVICE_PATH + "release/search/findByComponentIdOrderByCreatedAtDesc?componentId=" + idComponent, { headers: null })
      .pipe(map((response) => response as ReleaseModel[]), catchError(this.handleError));
  }

  findReleaseById(id: string): Observable<ReleaseModel> {
    return this.http
      .get(HttpService.SERVICE_PATH + "release/" + id, { headers: null })
      .pipe(map((response) => response as ReleaseModel), catchError(this.handleError));
  }

  latestRelease(idComponent: string): Observable<ReleaseModel> {
    return this.http
      .get(HttpService.SERVICE_PATH + "release/latestRelease?componentId=" + idComponent, { headers: null })
      .pipe(map((response) => response as ReleaseModel), catchError(this.handleError));
  }

  handleError(err) {
    if (err instanceof HttpErrorResponse) {
      return throwError(err.message)
    } else {
      return throwError(err);
    }
  }

}