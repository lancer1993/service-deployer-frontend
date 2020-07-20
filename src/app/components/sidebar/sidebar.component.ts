import { Component, OnInit } from "@angular/core";

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: "/dashboard", title: "Dashboard", icon: "dashboard", class: "" },
  {
    path: "/environmet-data",
    title: "Environment",
    icon: "cloud_queue",
    class: "",
  },
  {
    path: "/service-tier",
    title: "Component",
    icon: "home_repair_service",
    class: "",
  },
  {
    path: "/component-environment",
    title: "Component Environment",
    icon: "account_balance",
    class: "",
  },
  {
    path: "/release-information",
    title: "Release Information",
    icon: "new_releases",
    class: "",
  },
  {
    path: "/deployment",
    title: "Deployment",
    icon: "backup",
    class: "",
  },
  { path: "/user-profile", title: "User Profile", icon: "person", class: "" },
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }
}
