import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProductModel } from "../../models/product.model";
import { ProductService } from "../../services/product.service";
import { take } from "rxjs/operators";
import { MatDialog } from "@angular/material/dialog";
import { ConfirmationDialogComponent } from "../confirmation-dialog/confirmation-dialog.component";

interface Category {
  id: number;
  value: string;
  viewValue: string;
}

interface SubCategory {
  id: number;
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.css"],
})
export class AddProductComponent implements OnInit {
  form: FormGroup;
  @Input() product: ProductModel;
  @Input() isUpdate: Boolean;
  @Input() isNew: Boolean;
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();
  @Output() onCancel: EventEmitter<void> = new EventEmitter<void>();
  productList: ProductModel[];

  categories: Category[] = [
    { id: 1, value: "casual", viewValue: "Casual wear" },
    { id: 2, value: "night", viewValue: "Night dresses" },
    { id: 3, value: "party", viewValue: "Party dresses" },
  ];

  subCategories: SubCategory[] = [
    { id: 1, value: "0-1", viewValue: "0-1" },
    { id: 2, value: "1-3", viewValue: "1-3" },
    { id: 3, value: "3-6", viewValue: "3-6" },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.laodAllProducts();
    if (this.product == null) {
      this.isUpdate = false;
      this.isNew = false;

      this.form = this.formBuilder.group({
        name: ["", Validators.required],
        description: [""],
        qty: ["", Validators.required],
        unitPrice: ["", Validators.required],
        sellingPrice: ["", Validators.required],
        discount: ["", Validators.required],
        bannerImage: ["", Validators.required],
        images: ["", Validators.required],
        categoryId: ["", Validators.required],
        subcategoryId: ["", Validators.required],
      });
    } else {
      let updateProduct = (this.form = this.formBuilder.group({
        name: [this.product.name, Validators.required],
        description: [this.product.description],
        qty: [this.product.qty, Validators.required],
        unitPrice: [this.product.unitPrice, Validators.required],
        sellingPrice: [this.product.sellingPrice, Validators.required],
        discount: [this.product.discount, Validators.required],
        bannerImage: [this.product.bannerImage, Validators.required],
        images: [this.product.images, Validators.required],
        categoryId: [this.product.categoryId, Validators.required],
        subcategoryId: [this.product, , Validators.required],
      }));
    }
  }

  saveProduct(): void {
    this.productService
      .saveProduct(this.form.value)
      .pipe(take(1))
      .subscribe((product) => {
        if (product) {
          alert("Product Saved Successfully!");
          this.resetForm();
        } else {
          alert("Submission Failed");
        }
        this.isUpdate = false;
        this.isNew = false;
      });
  }

  updateProduct(): void {
    const newProduct = new ProductModel();
    // newProduct.productId = this.product.productId;
    newProduct.name = this.form.controls["name"].value;
    newProduct.description = this.form.controls["description"].value;
    newProduct.qty = this.form.controls["qty"].value;
    newProduct.unitPrice = this.form.controls["unitPrice"].value;
    newProduct.sellingPrice = this.form.controls["sellingPrice"].value;
    newProduct.discount = this.form.controls["discount"].value;
    newProduct.bannerImage = this.form.controls["bannerImage"].value;
    newProduct.images = this.form.controls["images"].value;
    newProduct.categoryId = this.form.controls["categoryId"].value;
    newProduct.subcategoryId = this.form.controls["subcategoryId"].value;

    this.productService
      .updateProduct(newProduct)
      .pipe(take(1))
      .subscribe((product) => {
        this.product = product;
        // this.onDelete.emit(this.product.productId);
        alert("Product Update Successfully!");
      });
  }

  // deleteProduct(): void {
  //     const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
  //         width: '350px',
  //         data: 'Do you confirm the deletion of this product?'
  //     });
  //
  //     dialogRef.afterClosed().subscribe(result => {
  //         if (result) {
  //             // const productSeq = this.product.productId;
  //             this.productService.deleteProduct(this.product).pipe(take(1)).subscribe(product => {
  //                 this.product = new ProductModel();
  //                 alert('Product Removed Successfully!')
  //                 this.isUpdate = false;
  //                 this.isNew = true;
  //                 this.resetForm();
  //                 this.onDelete.emit(productSeq);
  //             });
  //         }
  //     });
  // }

  laodAllProducts(): void {
    this.productService.getProducts().subscribe((result) => {
      this.productList = result;
    });
  }

  resetForm() {
    this.form.reset({
      name: [""],
      description: [""],
      unitPrice: [""],
      sellingPrice: [""],
      discount: [""],
      bannerImage: [""],
      images: [""],
      categoryId: [""],
      subcategoryId: [""],
    });
  }
}
