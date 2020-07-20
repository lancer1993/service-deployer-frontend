import { Component, OnInit } from "@angular/core";
import { ComponentEnvironmentService } from "../../services/componentEnvironment.service";
import { ComEnvDetailsModel } from "../../models/comEnvDetails.model";

@Component({
  selector: "app-component-environment",
  templateUrl: "./component-environment.component.html",
  styleUrls: ["./component-environment.component.css"],
})
export class ComponentEnvironmentComponent implements OnInit {
  comEnvDetailsModels: ComEnvDetailsModel[] = [];
  comEnvDetails: any;

  constructor(
    private componentEnvironmentService: ComponentEnvironmentService
  ) {}

  ngOnInit(): void {
    this.loadAllComponentEnvironments();
  }

  loadAllComponentEnvironments(): void {
    this.componentEnvironmentService
      .getAllComponentEnvironments()
      .subscribe((result) => {
        this.comEnvDetails = result;
        this.comEnvDetailsModels = this.comEnvDetails._embedded.com_env_details;
      });
  }
}
