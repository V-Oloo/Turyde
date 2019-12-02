import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private companyIdSource = new BehaviorSubject(1);
  companyId = this.companyIdSource.asObservable();

  constructor() { }

  changeMessage(id: number) {
    this.companyIdSource.next(id);
  }

}
