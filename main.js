
function showTime() {
  let now, date, month, year, hour, minute, second, iDate, iMonth, iYear, iHour, iMinute, iSecond, months
  now = new Date()
  date = now.getDate() < 10 ? '0' + now.getDate() : now.getDate()
  month = now.getMonth()
  year = now.getFullYear()
  hour = now.getHours() < 10 ? '0' + now.getHours()+' :' : now.getHours()+' :'
  minute = now.getMinutes() < 10 ? '0' + now.getMinutes()+' :' : now.getMinutes()+' :'
  second = now.getSeconds() < 10 ? '0' + now.getSeconds()  : now.getSeconds()

 months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  iDate = document.querySelector('.date')
  iMonth = document.querySelector('.month')
  iYear = document.querySelector('.year')
  iHour = document.querySelector('.hour')
  iMinute = document.querySelector('.minute')
  iSecond = document.querySelector('.second')


  iDate.textContent = date
  iMonth.textContent = months[month]
  iYear.textContent = year
  iHour.textContent = hour
  iMinute.textContent = minute
  iSecond.textContent = second

  setTimeout(showTime, 1000);
}

showTime();

// change img
const body = document.querySelector('body')
const button = document.querySelector('button')

button.addEventListener('click', () => {
  // body.classList.toggle('stars')
  body.classList.toggle('day')
})
