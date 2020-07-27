import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { ReleaseModel } from "../models/release.model";
import { HttpService } from "../utils/http-service";
import { ComponentModel } from "models/component.model";

@Injectable()
export class ReleaseService {
  constructor(private http: HttpClient) { }

  saveRelease(releaseModel: ReleaseModel): Observable<ReleaseModel> {
    return this.http
      .post(HttpService.SERVICE_PATH + "release", releaseModel, {
        headers: null,
      })
      .pipe(map((response) => response as ReleaseModel));
  }

  getByComponent(id: string): Observable<ReleaseModel[]> {
    return this.http
      .get(HttpService.SERVICE_PATH + "release/search/findByComponentId?componentId=" + id, { headers: null })
      .pipe(map((response) => response as ReleaseModel[]));
  }

  deleteReleaseById(id: string): Observable<string> {
    return this.http
      .delete(HttpService.SERVICE_PATH + "release/deleteById?releaseId=" + id, { headers: null })
      .pipe(map((response) => response as string));
  }

  findByComponentIdOrderByCreatedAtDesc(idComponent: String): Observable<ReleaseModel[]> {
    return this.http
      .get(HttpService.SERVICE_PATH + "release/search/findByComponentIdOrderByCreatedAtDesc?componentId=" + idComponent, { headers: null })
      .pipe(map((response) => response as ReleaseModel[]));
  }

  findReleaseById(id: string): Observable<ReleaseModel> {
    return this.http
      .get(HttpService.SERVICE_PATH + "release/" + id, { headers: null })
      .pipe(map((response) => response as ReleaseModel));
  }

  latestRelease(idComponent: string): Observable<ReleaseModel> {
    return this.http
      .get(HttpService.SERVICE_PATH + "release/latestRelease?componentId=" + idComponent, { headers: null })
      .pipe(map((response) => response as ReleaseModel));
  }

}