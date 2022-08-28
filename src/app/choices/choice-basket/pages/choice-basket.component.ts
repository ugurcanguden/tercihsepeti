import { Component, OnInit } from '@angular/core';
import { Marker } from 'src/app/maps/models/marker';
import { MarkerService } from 'src/app/maps/services/marker.service';

@Component({
  selector: 'app-choice-basket',
  templateUrl: './choice-basket.component.html',
  styleUrls: ['./choice-basket.component.css']
})
export class ChoiceBasketComponent implements OnInit {
  title = '';
  lat = 51.678418;
  lng = 7.809007;
  constructor(public markerService : MarkerService) { }

  ngOnInit(): void {
  }
  public openInfo(marker : Marker){

  }
}
