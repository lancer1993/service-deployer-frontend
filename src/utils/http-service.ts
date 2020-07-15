import {HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environment';

export class HttpService {
  static SERVICE_PATH = environment.apiUrl;

  static getDefaultHeaders(): HttpHeaders {
    const headers = new HttpHeaders({'Content-type': 'application/json; charset=utf-8'});
    return headers;
  }
}
