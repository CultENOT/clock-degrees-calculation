'use strict'

function clock (hours, minutes) {
    hours = prompt ("Сколько часов?", [10])
    minutes = prompt ("Сколько минут?", [5])
    if (hours > 24 || minutes > 60 || hours <= 0 || minutes <= -1) {
        return false
    } else { 
        if (hours > 12 ) {
            hoursNormal = hours - 12;
            minutesNormal = minutes / 5;
            let res = Math.abs ((hoursNormal - minutesNormal) * 30)
            return res 
        }   else {
            minutesNormal = minutes / 5;
            let res = Math.abs ((hours - minutesNormal) * 30)
            return res 
        }
    }
}

console.log (clock)