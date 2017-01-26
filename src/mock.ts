
import { getRandomArbitrary } from '../src/helper/randomNumberGenerator';
import {KpiPage} from '../src/pages/kpi/kpi'
const tableItem=(title:string)=>{
    return{
        metric:`${title}`,
        actualVal:`${getRandomArbitrary(1,5)}M`,
        changeVsLY:`+${getRandomArbitrary(10,20)}%`,
        growth:`+${getRandomArbitrary(50,100)}K`,
        contribution:`$${getRandomArbitrary(50,100)}M`,

    }
}
const tableValues=()=>{
return ['Traffic','Units/Basket"','AUR','Price Gap"','% Beaten"'].map(item=>{
    return tableItem(item);
});

}

const tabsValues=()=>{
    return [
        { title: "Sales",  icon: "calendar" },
        { title: "Profit", icon: "contacts" },
        { title: "Inventory",  icon: "map" },
        { title: "Dot COM",  icon: "information-circle" }
    ].map(item=>{
            return {
                title:item.title,
                root:KpiPage,
                icon:item.icon,
                actualVal:`${getRandomArbitrary(10,50)}M`,
                changeVsLY:`+${getRandomArbitrary(10,20)}%`,
                growth:`+${getRandomArbitrary(50,100)}M`,
                VsPlan:`$${getRandomArbitrary(50,100)}M`,
                table:tableValues(),
                rootParams:item.title
            }
    })
}
let appStore=tabsValues();
//console.log('appstore',appStore);
export {appStore};
