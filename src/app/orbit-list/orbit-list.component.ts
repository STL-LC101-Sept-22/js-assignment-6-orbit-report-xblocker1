import { Component, OnInit, Input,} from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-list',
  templateUrl: './orbit-list.component.html',
  styleUrls: ['./orbit-list.component.css']
})
export class OrbitListComponent implements OnInit {
	

  @Input() satellites: Satellite[] = [
	// {name: 'SiriusXm', type: 'communication', operational: true, orbitType: 'Low', launchDate: '2009-03-21', isSpaceDebris(): false},
	// {name: 'Cat Scanner', type: 'Imaging', operational:true , orbitType: 'LOW', launchDate: '2012-01-05', isSpaceDebris(): true},
	// {name: 'Weber Grill', type: 'Space Debris', operational:false , orbitType: 'HIGH', launchDate: '1996-03-25', isSpaceDebris(): true},
	// {name: 'GPS 938', type: 'Positioning', operational: true, orbitType: 'HIGH', launchDate: '2001-11-20', isSpaceDebris(): true},
	// {name: 'ISS', type: 'Space Station', operational: true, orbitType: 'LOW', launchDate: '1998-11-20',isSpaceDebris(): true}
  ]
  constructor() { }
  
  ngOnInit() {
  }

	sort(column: string): void {
		// array.sort modifies the array, sorting the items based on the given compare function
		this.satellites.sort(function (a: Satellite, b: Satellite): number {
			if (a[column] < b[column]) {
				return -1;
			} else if (a[column] > b[column]) {
				return 1;
			}
			return 0;
		});
	}
};