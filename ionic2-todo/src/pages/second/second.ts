import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage'; 

/**
 * Generated class for the SecondPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html'
})
export class SecondPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
  	public viewCtrl: ViewController, public events: Events, public storage: Storage) {


  }
 
  ionViewDidLoad() {

    let currName = this.navParams.get('name');

    console.log(currName + 1111);

    let currTitle = this.navParams.get('title');

    console.log(currTitle + 1111);


    // Get the same data as above but using the app wide event 

    // The event listener at this page is not applicable because it isn't possible to press any 
    // button on this page so as to hear from the other page

    // this.events.subscribe('horse:added',(data) => {

    //   console.log("From event " + data);
    // });





  }

  getData(){

    console.log("get data");

    this.storage.get('myHorses').then((data) => {

      console.log(data);

    });


    


  }




}
