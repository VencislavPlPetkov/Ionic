import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage'; 

/*
  Generated class for the UserProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class UserProvider {
  
  username: string = "Rajikistan";

  allHorses: any = [
			{picture:'http://placehold.it/75', name:'Joshaaaaa', title: 'Dev'},
			{picture:'http://placehold.it/75', name:'Dan', title: 'QA'},
			{picture:'http://placehold.it/75', name:'Jocob', title: 'Actor'}

		];
  
  // copy of allHorses
  modifiedData: any = JSON.parse(JSON.stringify(this.allHorses));

  constructor(public storage: Storage) {
    console.log('Hello UserProvider Provider');
    	
  }



}
