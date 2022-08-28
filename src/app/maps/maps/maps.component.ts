import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { DesignationLocationList } from 'src/app/dashboard/designation-locations/models/designation-location';
import { Marker,  position } from '../models/marker';
import { MarkerService } from '../services/marker.service';
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css'],
})
export class MapsComponent implements OnInit {

  @Input() markers: Marker[] =[];
  @Input() designationLocationList: DesignationLocationList[] =[];

  @Output() clickMapMarker: EventEmitter<Marker> = new EventEmitter();



  public selectedMarker! : Marker;
  public center : position  = new position;
  constructor(private modalService: NgbModal,private markerService : MarkerService) {}
  closeModal!: string;
  ngOnInit() {

    this.designationLocationList?.forEach( (data ,index)=>{
      let item = new Marker;
      item.index = index;
      item.label = data.label;
      item.title = data.title;
      item.position = data.position;
      item.id = data.id;
      this.markers.push(item);
    })

    if(this.markers?.length>0){
      this.center = this.markers[0].position;
    }
    else{
      this.center.lat = 39.925588239355335;
      this.center.lng =  32.837922095700485;
    }


  }

  public ClickMapMarker(marker : Marker){
    this.clickMapMarker.emit(marker);
  }

  // openInfo(marker : Marker ){
  //   this.selectedMarker = marker;
  //   this.modalService.open(this.content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) =>
  //   {

  //   },
  //   (res) => {

  //   });
  // }
  // public AddMarker() {
  //  var response = this.markerService.SetMarker(this.selectedMarker);
  //  alert(response ? "Ekleme başarılı " : "Ekleme başarısız. Zaten eklenmiş");
  //  this.modalService.dismissAll();
  // }
}
