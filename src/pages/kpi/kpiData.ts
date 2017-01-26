import { Injectable } from '@angular/core';

import { getRandomArbitrary } from '../../helper/randomNumberGenerator';
@Injectable()
export class kpiChartData{
    values:Array<any>;
    key:string;
    constructor(){
        this.key='Cumulative Return';
        let numberOfBarCharts=[52,13,4,''];
        this.values=numberOfBarCharts.map((item)=>{
            return {
                "label":`${item}`,
                value:getRandomArbitrary(0,1)

            }
        })
    }
}