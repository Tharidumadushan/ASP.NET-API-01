import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly url = "http://localhost:5248/api";
  readonly photoUrl = "http://localhost:5248/Photos"

  constructor(private http: HttpClient) { }

  //______________________DEPARTMENT__________________________________________________
  // Get all department NAME
  getDepName(): Observable<any[]> {
    return this.http.get<any>(this.url + '/department/AllDepartments');
  }

  // Get all department data
  getDepList(): Observable<any[]> {
    return this.http.get<any>(this.url + '/department');
  }

  // Add new department
  addDepartment(data: any) {
    return this.http.post(this.url + '/Department', data)
  }

  // Update department
  updateDepartment(data: any) {
    return this.http.put(this.url + '/Department', data)
  }

  // Delete department
  deleteDepartment(id: any) {
    return this.http.delete(this.url + '/Department/' + id)
  }

  //______________________EMPLOYEE____________________________________________________
  // Get all Employee data
  getEmpList(): Observable<any[]> {
    return this.http.get<any>(this.url + '/employee');
  }

  // Add new Employee
  addEmp(data: any) {
    return this.http.post(this.url + '/employee', data)
  }

  // Update Employee
  updateEmp(data: any) {
    return this.http.put(this.url + '/employee', data)
  }

  // Delete Employee
  deleteEmp(id: any) {
    return this.http.delete(this.url + '/employee/' + id)
  }

  // Save Profile Image
  uploadImage(data: any) {
    return this.http.post(this.url + '/employee/SaveFile', data)
  }
}
