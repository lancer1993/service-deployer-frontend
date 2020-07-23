import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { ReleaseModel } from "../models/release.model";
import { HttpService } from "../utils/http-service";

@Injectable()
export class ReleaseService {
  constructor(private http: HttpClient) {}

  saveRelease(releaseModel: ReleaseModel): Observable<ReleaseModel> {
    return this.http
      .post(HttpService.SERVICE_PATH + "release", releaseModel, {
        headers: null,
      })
      .pipe(map((response) => response as ReleaseModel));
  }

  getByComponent(id: string): Observable<ReleaseModel[]>{
    return this.http
      .get(HttpService.SERVICE_PATH + "release/search/getByComponent?componentId=" + id, {headers: null})
      .pipe(map((response) => response as ReleaseModel[]));
  }

}