import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Designation } from '../models/designation';
import { DesignationService } from '../services/designation.service';

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.css']
})
export class DesignationComponent implements OnInit {
  public guid : string ="";
  constructor( private designationService: DesignationService,private route:ActivatedRoute,private router:Router) {

  }
  designation : Designation [] = [];
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.guid = params['guid'];
    });
    this.designationService.getDesignation(this.guid).subscribe(data => {
      this.designation = data.data;
    });
  }

  addLocations(id : number){
    this.router.navigate([`designationLocation?guid=${this.guid.toString()}&id=${id.toString()}`]);

  }

}
