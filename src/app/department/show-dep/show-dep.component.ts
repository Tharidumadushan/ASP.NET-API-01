import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {
  constructor(private api: SharedService) { }

  DepartmentList: any = [];

  ModalTitle: string = "";
  ActivateAddEditeDepComp: boolean = false;
  dep: any;

  DepIdFilter: string = "";
  DepNameFilter: string = "";
  
  DepListOriginal: any;

  ngOnInit() {
    this.refreshDepList();
  }

  // Get Department List
  refreshDepList() {
    this.api.getDepList()
      .subscribe(data => {
        this.DepartmentList = data;
        this.DepListOriginal = data;
      })
  }

  // Add Button
  addClick() {
    this.dep = {
      DepartmentId: 0,
      DepartmentName: ""
    }
    this.ModalTitle = "Add Department";
    this.ActivateAddEditeDepComp = true;
  }

  // Close button
  closeClick() {
    this.ActivateAddEditeDepComp = false;
    this.refreshDepList();
  }

  // Edite Button
  editeClick(item: any) {
    this.dep = item
    this.ModalTitle = "Edit Department"
    this.ActivateAddEditeDepComp = true;
  }

  //Delete Button
  deleteClick(item: any) {
    if (confirm("Are you sure ?")) {
      this.api.deleteDepartment(item.DepartmentId)
        .subscribe(data => {
          alert(data.toString());
          this.refreshDepList();
        })
    }
  }

  //Filter
  Filter() {
    var DepIdFilter = this.DepIdFilter;
    console.log(this.DepIdFilter)
    var DepNameFilter = this.DepNameFilter;

    this.DepartmentList = this.DepListOriginal.filter(function (el: any) {
      return el.DepartmentId.toString().toLowerCase().includes(
        DepIdFilter.toString().trim().toLowerCase()
      ) &&
        el.DepartmentName.toString().toLowerCase().includes(
          DepNameFilter.toString().trim().toLowerCase()
        )
    });
  }

  //Sort
  sortResult(prop:any,asc:any){
    this.DepartmentList = this.DepListOriginal.sort(function(a:any,b:any){
      if(asc){
        return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0)
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0)
      }
    })
  }

}
