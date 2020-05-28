import { Component, ViewChild, Output, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { KernelData } from "../kernelData.model";
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: "home-component",
  templateUrl: "./home.component.html"
})
export class HomeComponent {
  kernelArray: KernelData[] = [];
  isAuth = false;
  isDataAddOpen = false;
  ArrayOfFormForNewKernelData = new FormArray([]);
  GroupOfFormForNewKernelData = new FormGroup({
    ArrayG: this.ArrayOfFormForNewKernelData
  });

  constructor(public http: HttpClient,public route: Router)
  {
    this.kernelArray.push(
      new KernelData("yeah","asd","sad","https://www.google.com")
    )
  }

  VisitPage(tempKernelData: KernelData) {
    window.location.href = tempKernelData.KernelBuildUrl;
  }

  onSaveButton()
  {
    if(!this.isDataAddOpen)
    {
    this.ArrayOfFormForNewKernelData.push(
      new FormGroup({
        KName : new FormControl(null),
        KDate: new FormControl(null),
        KBuildUrl : new FormControl(null)
      }) 
    )
    this.isDataAddOpen = true;
    }
    else {
      console.log(this.GroupOfFormForNewKernelData.value);
      this.isDataAddOpen = false;
      this.ArrayOfFormForNewKernelData.removeAt(0);
    }
  }

  get controls()
  {
    return (<FormArray>this.GroupOfFormForNewKernelData.get('ArrayG')).controls;
  }
}
