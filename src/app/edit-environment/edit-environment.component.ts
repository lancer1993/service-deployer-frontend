import { Component, OnInit } from '@angular/core';
import { ComponentService } from "../../services/component.service";
import { ComponentModel } from "models/component.model";

@Component({
  selector: 'app-edit-environment',
  templateUrl: './edit-environment.component.html',
  styleUrls: ['./edit-environment.component.css']
})
export class EditEnvironmentComponent implements OnInit {
  components: ComponentModel[] = [];
  commonComponents: any;

  constructor(private componentService: ComponentService) { }

  ngOnInit(): void {
    this.loadAllComponents();
  }

  loadAllComponents(): void {
    this.componentService.getAllComponents().subscribe((result) => {
      this.commonComponents = result;
      this.components = this.commonComponents._embedded.component;
    });
  }

}
