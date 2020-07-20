import { Injectable } from "@angular/core";

@Injectable()
export class ComponentModel {
    id: string;
    componentName: string;
    repositoryUrl: string;
    componentTypeId: string;
    delete: boolean;
    active: boolean;
    createdAt: Date;
}