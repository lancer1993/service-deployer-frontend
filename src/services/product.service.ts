import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {ProductModel} from '../models/product.model';
import {HttpService} from '../utils/http-service';

@Injectable()
export class ProductService {

    constructor(private http: HttpClient) {
    }

    saveProduct(produt: ProductModel): Observable<ProductModel> {
        return this.http.post(HttpService.SERVICE_PATH + 'product', produt, {headers: null})
            .pipe(map(response => response as ProductModel));
    }

    updateProduct(product: ProductModel): Observable<ProductModel> {
        return this.http.put(HttpService.SERVICE_PATH + 'product', product, {headers: null})
            .pipe(map(response => response as ProductModel));
    }

    getProducts(): Observable<ProductModel[]> {
        return this.http.get(HttpService.SERVICE_PATH + 'product', {headers: null})
            .pipe(map(response => response as ProductModel[]));
    }
}
