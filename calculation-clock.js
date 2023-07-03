'use strict'

function clock (hours, minutes) {
    hours = prompt ("Сколько часов?", [10])
    minutes = prompt ("Сколько минут?", [5])
    if (hours > 24 || minutes > 60 || hours <= 0 || minutes <= -1) {
        return false
    } else {
        if (hours == minutes) {
            return alert('Разница 0 градусов!')
        } else {
            if (hours > 12 ) {
                let hoursNormal = hours - 12;
                let minutesNormal = minutes / 5;
                let res = Math.abs ((hoursNormal - minutesNormal) * 30)
                return res 
            }   else {
                let minutesNormal = minutes / 5;
                let res = Math.abs ((hours - minutesNormal) * 30)
                return res 
            }
        }
    }
}

clock ()
 
