import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpService} from '../utils/http-service';
import {SubCategoryModel} from '../models/subCategory.model';

@Injectable()
export class SubCategoryService {

    constructor(private http: HttpClient) {
    }

    saveSubCategory(subCategory: SubCategoryModel): Observable<SubCategoryModel> {
        return this.http.post(HttpService.SERVICE_PATH + 'subcategory', subCategory, {headers: null})
            .pipe(map(response => response as SubCategoryModel));
    }

    updateSubCategory(subCategory: SubCategoryModel): Observable<SubCategoryModel> {
        return this.http.put(HttpService.SERVICE_PATH + 'subcategory', subCategory, {headers: null})
            .pipe(map(response => response as SubCategoryModel));
    }

    getSubCategories(): Observable<SubCategoryModel[]> {
        return this.http.get(HttpService.SERVICE_PATH + 'subcategory', {headers: null})
            .pipe(map(response => response as SubCategoryModel[]));
    }

    // deleteSubCategories(subCategory: SubCategoryModel): Observable<SubCategoryModel> {
    //     return this.http.delete(HttpService.SERVICE_PATH + 'subcategory' + subCategory.subCategoryId, {headers: null})
    //         .pipe(map(response => response as SubCategoryModel));
    // }
}
