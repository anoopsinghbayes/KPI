import { Component } from '@angular/core';

/*
  Generated class for the PushButton component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'push-button',
  templateUrl: 'push-button.html'
})
export class PushButtonComponent {

  text: string;

  constructor() {

const applicationServerPublicKey = 'BGU4Ja-4gTEqW0Nqy321PALAfEVcRQQ4hLpavHL5foP3MHsc_LU67q23GptlNyzqx4SLQ6oJMHfPhhxrUcsynYU';

const pushButton = document.querySelector('.js-push-btn');

let isSubscribed = false;
let swRegistration = null;

function urlB64ToUint8Array(base64String) {
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
    console.log('Hello PushButton Component');
    this.text = 'Hello World';
  }

}
