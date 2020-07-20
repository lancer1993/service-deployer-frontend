import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { ComponentTypeModel } from "../models/componentType.model";
import { HttpService } from "../utils/http-service";

@Injectable()
export class ComponentTypeService {
  constructor(private http: HttpClient) {}

  getComponentTypes(): Observable<ComponentTypeModel[]> {
    return this.http
      .get(HttpService.SERVICE_PATH + "component_type", { headers: null })
      .pipe(map((response) => response as ComponentTypeModel[]));
  }
  
}
