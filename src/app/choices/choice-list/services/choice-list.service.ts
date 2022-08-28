import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Result } from 'src/app/core/models/Result';
import { DesignationLocationList } from 'src/app/dashboard/designation-locations/models/designation-location';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChoiceListService {
  constructor(private http: HttpClient ) {}


  public getDesignationLocation(): Observable<Result<DesignationLocationList[]>> {
    return this.http.get<Result<DesignationLocationList[]>>(
      environment.apiURL +
      `DesignationLocation/DesignationAllLocation`
    );
  }
}
