import { map, catchError } from "rxjs/operators";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Injectable } from "@angular/core";
import { ComponentModel } from "../models/component.model";
import { HttpService } from "../utils/http-service";

@Injectable()
export class ComponentService {
  constructor(private http: HttpClient) {}

  getAllComponents(): Observable<ComponentModel[]> {
    return this.http
      .get(HttpService.SERVICE_PATH + "component", { headers: null })
      .pipe(map((response) => response as ComponentModel[]), catchError(this.handleError));
  }

  saveComponent(component: ComponentModel): Observable<ComponentModel> {
    return this.http
      .post(HttpService.SERVICE_PATH + "component", component, {
        headers: null,
      })
      .pipe(map((response) => response as ComponentModel), catchError(this.handleError));
  }

  updateComponent(component: ComponentModel): Observable<ComponentModel> {
    return this.http
      .put(HttpService.SERVICE_PATH + "component", component, { headers: null })
      .pipe(map((response) => response as ComponentModel), catchError(this.handleError));
  }

  getComponentById(id: string): Observable<ComponentModel> {
    return this.http
      .get(HttpService.SERVICE_PATH + "component/" + id, { headers: null })
      .pipe(map((response) => response as ComponentModel), catchError(this.handleError));
  }

  handleError(err){
    if(err instanceof HttpErrorResponse){
      return throwError(err.message)
    }else{
      return throwError(err);
    }    
  }

}
