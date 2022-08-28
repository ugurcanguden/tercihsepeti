import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Result } from 'src/app/core/models/Result';
import { environment } from 'src/environments/environment';
import { DesignationLocations, DesignationLocationList } from '../models/designation-location';


@Injectable({
  providedIn: 'root',
})
export class DesignationLocationService {
  constructor(private http: HttpClient ) {
  }

  public getDesignationLocation(guid : string,designationId : string): Observable<Result<DesignationLocationList[]>> {
    return this.http.get<Result<DesignationLocationList[]>>(
      environment.apiURL +
      `DesignationLocation/DesignationLocations?guid=${guid}&designationId=${designationId}`
    );
  }
  public addDesignationLocation(designation : DesignationLocations , guid : string): Observable<Result<DesignationLocations>> {


    return this.http.post<Result<DesignationLocations>>(
      environment.apiURL +
      `DesignationLocation/DesignationLocationAdd?guid=${guid}`,designation
    );
  }
  public removeDesignationLocation(designation : DesignationLocations, guid : string,id : number): Observable<Result<DesignationLocations>> {
    return this.http.post<Result<DesignationLocations>>(
      environment.apiURL +`DesignationLocation/DesignationLocationRemove?guid=${guid}&id=${id}`,
      {
        designation
      }
    );
  }
}
