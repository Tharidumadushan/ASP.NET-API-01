import { Component,OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit{
  constructor(private api: SharedService) { }

  EmpList: any = [];

  ModalTitle:string = "";
  ActivateAddEditeEmpComp:boolean = false;
  emp:any;

  ngOnInit(){
    this.refreshEmpList();
  }

  // Get Department List
  refreshEmpList(){
    this.api.getEmpList()
    .subscribe(data => {
      this.EmpList = data;
      console.log(this.EmpList)
    })
  }

  // Add Button
  addClick(){
    this.emp={
      EmployeeId:0,
      EmployeeName:"",
      Department:"",
      DateOfJoining:"",
      PhotoFileName:"profile.png"    
    }
    this.ModalTitle="Add Employee";
    this.ActivateAddEditeEmpComp=true;
  }

  // Close button
  closeClick(){
    this.ActivateAddEditeEmpComp=false;
    this.refreshEmpList();
  }

  // Edite Button
  editeClick(item:any){
    this.emp=item
    this.ModalTitle = "Edit Employee"
    this.ActivateAddEditeEmpComp=true;
  }

  //Delete Button
  deleteClick(item:any){
    if(confirm("Are you sure ?")){
      this.api.deleteEmp(item.EmployeeId)
      .subscribe(data =>{
        alert(data.toString());
        this.refreshEmpList();
      })
    }
  }
}
