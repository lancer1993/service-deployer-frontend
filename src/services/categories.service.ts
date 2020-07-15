import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {CategoryModel} from '../models/category.model';
import {HttpService} from '../utils/http-service';


@Injectable()
export class CategoriesService {

    constructor(private http: HttpClient) {
    }

    saveCategory(category: CategoryModel): Observable<CategoryModel> {
        return this.http.post(HttpService.SERVICE_PATH + 'category', category, {headers: null})
            .pipe(map(response => response as CategoryModel));
    }

    updateCategory(category: CategoryModel): Observable<CategoryModel> {
        return this.http.put(HttpService.SERVICE_PATH + 'category', category, {headers: null})
            .pipe(map(response => response as CategoryModel));
    }

    getCategories(): Observable<CategoryModel[]> {
        return this.http.get(HttpService.SERVICE_PATH + 'category', {headers: null})
            .pipe(map(response => response as CategoryModel[]));
    }

    // deleteCategories(category: CategoryModel): Observable<CategoryModel> {
    //     return this.http.delete(HttpService.SERVICE_PATH + 'category' + category.categoryId, {headers: null})
    //         .pipe(map(response => response as CategoryModel));
    // }
}
