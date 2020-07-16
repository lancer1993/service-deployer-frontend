import { Component, OnInit } from '@angular/core';

interface NewComponent {
  id: number;
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-edit-release',
  templateUrl: './edit-release.component.html',
  styleUrls: ['./edit-release.component.css']
})
export class EditReleaseComponent implements OnInit {

  newComponents: NewComponent[] = [
    { id: 1, value: "Admin API", viewValue: "Admin API" },
    { id: 2, value: "Order API", viewValue: "Order API" },
    { id: 3, value: "Uber Eats API", viewValue: "Uber Eats API" },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
