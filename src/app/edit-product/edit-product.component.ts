import { Component, OnInit } from '@angular/core';

interface Category {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  categories: Category[] = [
    {value: 'casual', viewValue: 'Casual wear'},
    {value: 'night', viewValue: 'Night dresses'},
    {value: 'party', viewValue: 'Party dresses'}
  ];

  subCategories: Category[] = [
    {value: '0-1', viewValue: '0-1'},
    {value: '1-3', viewValue: '1-3'},
    {value: '3-6', viewValue: '3-6'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
