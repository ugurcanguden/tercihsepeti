import { Component, Input, OnInit } from '@angular/core';
import { Marker } from 'src/app/maps/models/marker';
import { MarkerService } from 'src/app/maps/services/marker.service';

@Component({
  selector: 'app-choice-table',
  templateUrl: './choice-table.component.html',
  styleUrls: ['./choice-table.component.css']
})
export class ChoiceTableComponent implements OnInit {


  constructor(public markerservice : MarkerService) { }

  ngOnInit() {
  }
  removeMarker(marker : Marker){
    this.markerservice.RemoveMarker(marker);
  }
  MarkerUp(marker : Marker){
    this.markerservice.MarkerUp(marker);
  }
  MarkerDown(marker : Marker){
    this.markerservice.MarkerDown(marker);
  }
}
