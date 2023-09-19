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


    isValidCPF(value: string) {
      if (typeof value !== 'string') {
      return false;
    }
    
    value = value.replace(/[^\d]+/g, '');
    
    if (value.length !== 11 || !!value.match(/(\d)\1{10}/)) {
      return false;
    }
  
    const values = value.split('').map(el => +el);
    const rest = (count: any) => (values.slice(0, count-12).reduce( (soma, el, index) => (soma + el * (count-index)), 0 )*10) % 11 % 10;
  
    return rest(10) === values[9] && rest(11) === values[10];
  }


  }

