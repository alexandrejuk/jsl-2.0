import moment from 'moment'
import 'moment/locale/pt-br'

const formattedDate = date => moment(date).format('DD/MMM HH:mm')

const diff = (createdAt, updatedAt, status) => {
  const lastTime = status === 'check-out' ? updatedAt : new Date()
  let d = (new Date(lastTime)) - (new Date(createdAt));
  let weekdays     = Math.floor(d/1000/60/60/24/7);
  let days         = Math.floor(d/1000/60/60/24 - weekdays*7);
  let hours        = Math.floor(d/1000/60/60    - weekdays*7*24            - days*24);
  let minutes      = Math.floor(d/1000/60       - weekdays*7*24*60         - days*24*60         - hours*60);

  return messageDates({
    weekdays,
    days,
    hours,
    minutes,
  })
}

const messageDates = ({ weekdays, days, hours, minutes }) => {
  let message = 'Há,'
  if (weekdays > 0) {
    message = `${weekdays},${weekdays > 1 ? 'semanas' : 'semana'}`
  }

  if (days > 0) {
    message = `${days},${days > 1 ? 'dias' : 'dia'}`
  }

  if (hours) {
    message += `${hours.toString().length === 1 ? '0'+ hours : hours}h`
  }

  if (minutes) {
    message += `${minutes.toString().length >= 2 ? minutes : '0'+ minutes}m`
  }

  return message.replace(/,/gi, ' ')
}

export {
  diff,
  formattedDate,
}
