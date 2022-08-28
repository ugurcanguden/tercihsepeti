export class Marker
{
    index! : number;
    position! :position;
    label :string = ""
    options : options = new options;
    title : string = "";
    id! : number;
}

export class position {
  lat! : number;
  lng ! : number;

}
export class options {
  zoomControl : boolean = false;
  scrollwheel : boolean = false;
  disableDoubleClickZoom : boolean = true;
  mapTypeId: string = 'hybrid';
  maxZoom: number = 15;
  minZoom :number = 8;
}
