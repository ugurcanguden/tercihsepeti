import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Result } from 'src/app/core/models/Result';
import { environment } from 'src/environments/environment';
import { Designation } from '../models/designation';

@Injectable({
  providedIn: 'root',
})
export class DesignationService {


  constructor(private http: HttpClient) {  }

  public getDesignation(guid : string): Observable<Result<Designation[]>> {
    return this.http.get<Result<Designation[]>>(
      environment.apiURL +
        `Designation/Designations?guid=${guid}`
    );
  }
  public addDesignation(designation : Designation,guid : string ): Observable<Result<Designation>> {


    return this.http.post<Result<Designation>>(
      environment.apiURL +
        `Designation/DesignationsAdd?guid=${guid}`,designation
    );
  }
}
