import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SecondPage } from '../second/second';
import { RedditDataProvider } from '../../providers/reddit-data/reddit-data';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public redditService: RedditDataProvider) {

  }


  ionViewDidLoad(){

    this.redditService.getRemoteData();
    this.redditService.getLocalData();
  }




  launchSecondPage(){

  	let data = {
  		title: 'yummy',
  		time: '10mins'
  	};

  	this.navCtrl.push(SecondPage,data);

  }



}
