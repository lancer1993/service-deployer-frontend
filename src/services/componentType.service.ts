import { map, catchError } from "rxjs/operators";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Injectable } from "@angular/core";
import { ComponentTypeModel } from "../models/componentType.model";
import { HttpService } from "../utils/http-service";

@Injectable()
export class ComponentTypeService {
  constructor(private http: HttpClient) {}

  getComponentTypes(): Observable<ComponentTypeModel[]> {
    return this.http
      .get(HttpService.SERVICE_PATH + "component_type", { headers: null })
      .pipe(map((response) => response as ComponentTypeModel[]),  catchError(this.handleError));
  }

  getComponentTypeById(id: String): Observable<ComponentTypeModel> {
    return this.http
    .get(HttpService.SERVICE_PATH + 'component_type/' + id, { headers: null })
    .pipe(map((response) => response as ComponentTypeModel), catchError(this.handleError));
  }

  handleError(err) {
    if (err instanceof HttpErrorResponse) {
      return throwError(err.message)
    } else {
      return throwError(err);
    }
  }
  
}
