import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the WindowService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

function getWindow (): any {
    return window;
}

function getNavigator():any{
  return navigator;
}
@Injectable()
export class WindowService {
get nativeWindow (): any {
        return getWindow();
    }
   
  constructor(public http: Http) {
    console.log('Hello WindowService Provider');
  }

}
