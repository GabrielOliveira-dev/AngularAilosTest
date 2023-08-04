import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EmployeeModel } from '../../models/interfaces/IEmployee';

import  data  from '../../../../assets/mock.json'


@Injectable({
  providedIn: 'root'
})

export class NewEmployeeService {
  constructor(private http: HttpClient) {}
  mockData = data.data;
  

  public getEmployee$(cpf: string): Observable<EmployeeModel | undefined> {
    return of(this.mockData).pipe(
      map((res: EmployeeModel[]) =>  {
        return res.find(x => x.cpf === cpf)} )
    )
    }


  }

