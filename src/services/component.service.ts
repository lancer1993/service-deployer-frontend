import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { ComponentModel } from "../models/component.model";
import { HttpService } from "../utils/http-service";

@Injectable()
export class ComponentService {
  constructor(private http: HttpClient) {}

  getAllComponents(): Observable<ComponentModel[]> {
    return this.http
      .get(HttpService.SERVICE_PATH + "component", { headers: null })
      .pipe(map((response) => response as ComponentModel[]));
  }

  saveComponent(component: ComponentModel): Observable<ComponentModel> {
    return this.http
      .post(HttpService.SERVICE_PATH + "component", component, {
        headers: null,
      })
      .pipe(map((response) => response as ComponentModel));
  }

  updateComponent(component: ComponentModel): Observable<ComponentModel> {
    return this.http
      .put(HttpService.SERVICE_PATH + "component", component, { headers: null })
      .pipe(map((response) => response as ComponentModel));
  }

  getComponentById(id: string): Observable<ComponentModel> {
    return this.http
      .get(HttpService.SERVICE_PATH + "component/" + id, { headers: null })
      .pipe(map((response) => response as ComponentModel));
  }

}
