import { Component, OnInit } from "@angular/core";
import { EnvironmentComponentService } from "../../services/environmentComponent.service";
import { EnvironmentComponentModel } from "../../models/environmentComponent.model";

@Component({
  selector: "app-component-environment",
  templateUrl: "./component-environment.component.html",
  styleUrls: ["./component-environment.component.css"],
})
export class ComponentEnvironmentComponent implements OnInit {
  environmentComponentModels: EnvironmentComponentModel[] = [];
  comEnvDetails: any;

  constructor(
    private environmentComponentService: EnvironmentComponentService
  ) {}

  ngOnInit(): void {
  }
}
