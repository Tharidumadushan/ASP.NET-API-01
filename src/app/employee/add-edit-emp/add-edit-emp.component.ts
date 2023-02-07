import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {
  // data from parent
  @Input() emp: any;
  EmployeeId: number = 0;
  EmployeeName: string = "";
  Department: string = "";
  DateOfJoining: String = "";
  PhotoFileName: string = "";
  PhotoFilePath: string = ""

  DepartmentList: any[] = []; // Get department list to select

  constructor(private api: SharedService) { }

  ngOnInit(): void {
    this.getDpList();
    console.log(this.emp)
  }

  getDpList() {
    this.api.getDepList()
      .subscribe(data => {
        this.DepartmentList = data;

        this.EmployeeId = this.emp.EmployeeId;
        this.EmployeeName = this.emp.EmployeeName;
        this.Department = this.emp.Department;
        this.DateOfJoining = this.emp.DateOfJoining;
        this.PhotoFileName = this.emp.PhotoFileName;
        this.PhotoFilePath = this.api.photoUrl + this.PhotoFileName;
      })
  }

  addEmp() {
    // val = json type file
    var val = {
      EmployeeId: this.EmployeeId,
      EmployeeName: this.EmployeeName,
      Department: this.Department,
      DateOfJoining: this.DateOfJoining,
      PhotoFileName: this.PhotoFileName
    }
    this.api.addEmp(val)
      .subscribe(res => {
        alert(res.toString())
      })
  }

  updateEmp() {
    var val = {
      EmployeeId: this.EmployeeId,
      EmployeeName: this.EmployeeName,
      Department: this.Department,
      DateOfJoining: this.DateOfJoining,
      PhotoFileName: this.PhotoFileName
    }
    this.api.updateEmp(val)
      .subscribe(res => {
        alert(res.toString())
      })
  }

  uploadPhoto(event: any) {
    var file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('uploadedFile', file,file.name);

    this.api.uploadImage(formData)
      .subscribe((data: any) => {
        this.PhotoFileName = data.toString();
        this.PhotoFilePath = this.api.photoUrl + this.PhotoFileName;
      })
  }
}
