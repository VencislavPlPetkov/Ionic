import { Component } from '@angular/core';
import { Storage } from '@ionic/storage'; 
import { NavController, ModalController, Events } from 'ionic-angular';
import { SecondPage } from '../second/second';
import { UserProvider } from '../../providers/user/user';
   

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	
	// employees: any;
	   name: any;
	   title: any;

	constructor(public navCtrl: NavController, public modalCtrl: ModalController, public userService: UserProvider,
		public events: Events, public storage: Storage) {
		//not in use
		// this.employees = [
		// 	{picture:'http://placehold.it/75', name:'Josh', title: 'Dev'},
		// 	{picture:'http://placehold.it/75', name:'Dan', title: 'QA'},
		// 	{picture:'http://placehold.it/75', name:'Jocob', title: 'Actor'}

		// ];
	}


	handleClick(employee){
		console.log(employee);

		console.log(this.userService.username);

		this.navCtrl.push(SecondPage, employee);
	}


	submitUser(){
 
		console.log(this.userService.modifiedData);


		//this.employees.push({picture:'http://placehold.it/75',name: this.name, title: this.title});


		this.userService.allHorses.push({picture:'http://placehold.it/75',name: this.name, title: this.title});

		// make app wide event
		var data = {picture:'http://placehold.it/75',name: this.name, title: this.title};
		
		this.events.publish('horse:added', data);


	}

	

	testData(){

		 this.userService.modifiedData = this.userService.modifiedData.filter((employee) => {

		 		employee.name = employee.name.toUpperCase();

		 		console.log(employee); 

		 		return employee;
		 });

	}

	setData(){
		console.log(1222222222);
		this.storage.set("myHorses", this.userService.allHorses);
		
	}

}
