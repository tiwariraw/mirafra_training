
//modren way to handle date and time 
import {Temporal} from '@js-temporal/polyfill';

//current date
const now= Temporal.Now.plainDateTimeISO();
console.log(now.toString());

//time zones
const NweYorkTime=Temporal.Now.zonedDateTimeISO("America/New_York");
console.log(NweYorkTime.toString());

//adding and subtracting time
const today=Temporal.Now.plainDateISO();
const nextWeek=today.add({
    days:7
})

console.log(nextWeek.toString());

// handeling different calenders
const islamicDate=Temporal.PlainDate.from({
    year:1446,
    month:8,
    day:1,
    calendar:'islamic'
});
console.log(islamicDate.toString());




