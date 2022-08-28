import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Marker } from 'src/app/maps/models/marker';
import { DesignationLocations, DesignationLocationList } from '../models/designation-location';
import { DesignationLocationService } from '../services/designation-location.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-designation-location',
  templateUrl: './designation-location.component.html',
  styleUrls: ['./designation-location.component.css']
})
export class DesignationLocationComponent implements OnInit {
  @ViewChild('modalData') content: any;
  public diabled : boolean = false;
  public  label: string =  " ";
  public title : string =  " ";
  public  lat : number = 0;
  public  lng : number = 0;

  guid : string ="";
  locationId  : string  = "";



  constructor(private designationLocationService: DesignationLocationService,private route:ActivatedRoute,private modalService: NgbModal, ) {
    this.route.queryParams.subscribe(params => {
    this.guid = params['guid'];
    this.locationId = params['id'];

  });

}
  public designationLocationList : DesignationLocationList[] = [];
  ngOnInit(): void {
    this.getDesignationLocation();
  }
  selectedMarker! : Marker ;
  openInfo(marker: Marker) {
    this.selectedMarker = marker;
    this.modalService
      .open(this.content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (res) => {},
        (res) => {}
      );
  }

  removeLocation(){
    this.diabled = true;
    let designationLocation : DesignationLocations = new DesignationLocations;
    designationLocation.id = this.selectedMarker.id;
    this.designationLocationService.removeDesignationLocation(designationLocation,this.guid,this.selectedMarker.id).subscribe(data => {
      this.designationLocationList  = [];
      this.getDesignationLocation();
      alert(data.message);
      this.diabled = false;
    });
    this.modalService.dismissAll();
  }
  getDesignationLocation(){
     this.designationLocationService.getDesignationLocation(this.guid,this.locationId).subscribe(data => {
      this.designationLocationList = data.data;
    });
  }

  designationLocationAdd(){
    this.diabled = true;
    let designationLocation : DesignationLocations = new DesignationLocations;
    designationLocation.DesignationId = parseInt(this.locationId);
    designationLocation.label = this.label;
    designationLocation.title = this.title;
    designationLocation.lat = this.lat;
    designationLocation.lng = this.lng;
    designationLocation.DesignationId = parseInt(this.locationId);
    this.designationLocationService.addDesignationLocation(designationLocation,this.guid).subscribe(data => {
      this.designationLocationList  = [];
      this.label =  " ";
      this.title =  " ";
      this.lat   = 0;
      this.lng   = 0;
      this.getDesignationLocation();
      alert(data.message);
      this.diabled = false;
    });
  }

}
