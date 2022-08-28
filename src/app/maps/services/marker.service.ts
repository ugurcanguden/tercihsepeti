import { Injectable } from '@angular/core';
import { zip } from 'rxjs';
import { Marker } from '../models/marker';


@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  private static selectedMarkedList : Marker[] = []
  constructor()
  {

  }
  SetMarker(marker:Marker) : boolean{
    if(!MarkerService.selectedMarkedList.find(x=>x.index == marker.index)){
      marker.index = MarkerService.selectedMarkedList.length;
      MarkerService.selectedMarkedList.push(marker);
      return true;
    }
    return false;

  }
  GetMarkerList(): Marker[]
  {
    return MarkerService.selectedMarkedList;
  }

  GetMarkerLastIndex(): number | undefined {

    let lastindex = MarkerService.selectedMarkedList[MarkerService.selectedMarkedList.length-1]?.index;

    return lastindex;

   MarkerService.selectedMarkedList.pop()?.index;
  }
  RemoveMarker(marker:Marker){
    MarkerService.selectedMarkedList = MarkerService.selectedMarkedList.filter(x =>x.index != marker.index);
    this. sortMarkers();
  }

  MarkerUp(marker:Marker){
      const tempMarker = MarkerService.selectedMarkedList.find(x=>x.index == marker.index-1);

     let upIndex = MarkerService.selectedMarkedList.findIndex(x=>x.index == marker.index-1);
     let downIndex = MarkerService.selectedMarkedList.findIndex(x=>x.index == marker.index);

      MarkerService.selectedMarkedList[upIndex] = marker;
      if(tempMarker != undefined)
        MarkerService.selectedMarkedList[downIndex] = tempMarker;

     this. sortMarkers();
  }

  MarkerDown(marker:Marker){
    const tempMarker = MarkerService.selectedMarkedList.find(x=>x.index == marker.index+1);

   let downIndex = MarkerService.selectedMarkedList.findIndex(x=>x.index == marker.index+1);
   let upIndex = MarkerService.selectedMarkedList.findIndex(x=>x.index == marker.index);

    MarkerService.selectedMarkedList[downIndex] = marker;
    if(tempMarker != undefined)
      MarkerService.selectedMarkedList[upIndex] = tempMarker;

      this. sortMarkers();
  }
  private sortMarkers(){
    let index = 0 ;
    MarkerService.selectedMarkedList.forEach(element => {
      element.index = index;
      index ++ ;
    });
  }
}
