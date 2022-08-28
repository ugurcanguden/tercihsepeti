import { Component, OnInit, ViewChild } from '@angular/core';
import { Marker, options, position } from 'src/app/maps/models/marker';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MarkerService } from 'src/app/maps/services/marker.service';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { ChoiceListService } from '../services/choice-list.service';
import { DesignationLocationList } from 'src/app/dashboard/designation-locations/models/designation-location';

@Component({
  selector: 'app-choice-list',
  templateUrl: './choice-list.component.html',
  styleUrls: ['./choice-list.component.css'],
})
export class ChoiceListComponent implements OnInit {

  private _jsonURL = 'assets/mapperlist.json';
  public designationLocationList : DesignationLocationList[] = [];


  @ViewChild('modalData') content: any;
  markers: Marker[] = [];
  public selectedMarker!: Marker;
  constructor(
    private modalService: NgbModal,
    private markerService: MarkerService,
    private http: HttpClient,
    private choiceListService : ChoiceListService
  ) {}

  async ngOnInit(): Promise<void> {

    //this.getDesignationLocation()  for api


    
    (await this.getJSON()).subscribe(data=>{ //for local json file..
      this.markers = data; 
    })

  }
  openInfo(marker: Marker) {
    this.selectedMarker = marker;
    this.modalService
      .open(this.content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (res) => {},
        (res) => {}
      );
  }
  public AddMarker() {
    var response = this.markerService.SetMarker(this.selectedMarker);
    alert(response ? 'Ekleme başarılı ' : 'Ekleme başarısız. Zaten eklenmiş');
    this.modalService.dismissAll();
  }
  public async getJSON(): Promise<Observable<Marker[]>> {
    return await this.http.get<Marker[]>(this._jsonURL);
  }

  getDesignationLocation(){
    this.choiceListService.getDesignationLocation().subscribe(data => {
     this.designationLocationList = data.data;
   })
  };
}
