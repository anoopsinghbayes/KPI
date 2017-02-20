import { Component,Injectable } from '@angular/core';
import { WindowService } from '../../providers/window-service';
/*
  Generated class for the PushButton component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'push-button',
  templateUrl: 'push-button.html',
  providers:[WindowService]
})
export class PushButtonComponent {

  text: string;
applicationServerPublicKey='BEdOueUM56YGCWpt7pmQyt4sMuWz3PAn2hjJoUuC5G5rxe1_5HZBVGZY1o9eyiWLS9KABMMsJr16Im6VjKcAc5Y';

isSubscribed = false;
window:any;

urlB64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;

}
 updateSubscriptionOnServer(subscription) {
  // TODO: Send subscription to application server

  const subscriptionJson = document.querySelector('.js-subscription-json');
  //const subscriptionDetails = document.querySelector('.js-subscription-details');

  if (subscription) {
    console.log("subscription",JSON.stringify(subscription, null, 2));

  //  subscriptionDetails.classList.remove('is-invisible');
  } else {
    //subscriptionDetails.classList.add('is-invisible');
  }
}
subscribeUser() {
  const applicationServerKey = this.urlB64ToUint8Array(this.applicationServerPublicKey);
  let tempThis=this;
  this.window.swRegistration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: applicationServerKey
  })
  .then(function(subscription) {
    console.log('User is subscribed:', subscription);

    tempThis.updateSubscriptionOnServer(subscription);

    //isSubscribed = true;

    //updateBtn();
  })
  .catch(function(err) {
    console.log('Failed to subscribe the user: ', err);
    //updateBtn();
  });
}
  constructor(windowRef: WindowService) {



//navigator=windowRef.nativeNavigator;
this.window=windowRef.nativeWindow;
//this.window.swRegistration = null;

    //console.log('Hello PushButton Component');
    //this.text = 'Hello World';
  }

};



