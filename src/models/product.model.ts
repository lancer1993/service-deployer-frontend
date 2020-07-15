export class ProductModel {
    name: string;
    description: string;
    qty: number;
    unitPrice: number;
    sellingPrice: number;
    discount: number;
    bannerImage: string;
    images: Array<string> = [];
    categoryId: string;
    subcategoryId: string;
}
