export class DesignationLocations {
  id! :  number ;
  label! : string;
  title! : string;
  lat !: number;
  lng !: number;
  DesignationId! : number;
}
export class DesignationLocationList {
  id! :  number ;
  label! : string;
  title! : string;
  position! : position;
  DesignationId! : number;
}
export class position {
  lat !: number;
  lng !: number;
};
