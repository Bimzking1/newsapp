import React from 'react'
import dateFormat from 'dateformat';

const DateConvert = (dayConverted) => {

    const checkDayFunc = (day) => {
        if (day == "Mon") {
            return "Sen"
        } else if (day == "Tue") {
            return "Sel"
        } else if (day == "Wed") {
            return "Rab"
        } else if (day == "Thu") {
            return "Kam"
        } else if (day == "Fri") {
            return "Jum"
        } else if (day == "Sat") {
            return "Sab"
        } else if (day == "Sun") {
            return "Min"
        }
    }

    const checkMonthFunc = (month) => {
        if (month == "January") {
            return "Januari"
        } else if (month == "February") {
            return "Februari"
        } else if (month == "March") {
            return "Maret"
        } else if (month == "May") {
            return "Mei"
        } else if (month == "June") {
            return "Juni"
        } else if (month == "July") {
            return "Juli"
        } else if (month == "August") {
            return "Agustus"
        } else if (month == "October") {
            return "Oktober"
        } else if (month == "December") {
            return "Desember"
        }
    }

    const dateReturned = dateFormat(dayConverted.day)
    const checkDay = dateFormat(dayConverted.day, "ddd")
    const checkMonth = dateFormat(dayConverted.month, "mmmm")

    return checkDayFunc(checkDay) + ', ' + dateReturned.slice(8, 11) + checkMonthFunc(checkMonth) + ' ' + dateReturned.slice(16, 18) + '.' + dateReturned.slice(19, 21)
}

export default DateConvert