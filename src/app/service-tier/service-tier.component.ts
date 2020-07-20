import { Component, OnInit } from '@angular/core';
import { ComponentService } from "../../services/component.service";
import { ComponentModel } from "models/component.model";

@Component({
  selector: 'app-service-tier',
  templateUrl: './service-tier.component.html',
  styleUrls: ['./service-tier.component.css']
})
export class ServiceTierComponent implements OnInit {
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
