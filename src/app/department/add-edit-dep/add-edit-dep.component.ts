import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})


export class AddEditDepComponent implements OnInit {
  // data from parent
  @Input() dep: any;
  DepartmentId: string = "";
  DepartmentName: string = ""

  constructor(private api: SharedService) { }

  ngOnInit(): void {
    this.DepartmentId = this.dep.DepartmentId;
    this.DepartmentName = this.dep.DepartmentName;
  }

  addDepartment() {
    var val = {
      DepartmentId: this.DepartmentId,
      DepartmentName: this.DepartmentName
    }
    this.api.addDepartment(val)
    .subscribe(res =>{
      alert(res.toString())
    })
  }

  updateDepartment() {
    var val = {
      DepartmentId: this.DepartmentId,
      DepartmentName: this.DepartmentName
    }
    this.api.updateDepartment(val)
    .subscribe(res =>{
      alert(res.toString())
    })
   }
}
