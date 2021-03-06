import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  public getDropDownLists(): Observable<any> {
    return this.http.get('assets/data/DropDounListsJson.json')

  }
  public getProcessesObject(): Observable<any> {
    return this.http.get('assets/data/ProcessObject.json')

  }
}
