const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway')
const deadline = document.querySelector('.deadline')
const timerItems = document.querySelectorAll('.deadline-format h4')

let today = new Date()
let futureDate = new Date(today.getFullYear(),today.getMonth(),today.getDate() + 10, 11, 30, 0)

giveaway.textContent = `giveaway ends on ${weekdays[futureDate.getDay()]}, ${futureDate.getDate()} ${months[futureDate.getMonth()]} ${futureDate.getFullYear()} ${futureDate.getHours()}:${futureDate.getMinutes()} am`

function remainingTime() {
  let t =  futureDate.getTime() - new Date().getTime()

  const oneDay = 24 * 60 * 60 * 1000
  const oneHour = 60 * 60 * 1000
  const oneMinute = 60 * 1000
  const oneSecond = 1000

  let days = Math.floor(t / oneDay) 
  let hours = Math.floor((t % oneDay) / oneHour)
  let minutes = Math.floor((t % oneHour) / oneMinute)
  let seconds = Math.floor((t % oneMinute) / oneSecond)

  let time = [days, hours, minutes, seconds]

  timerItems.forEach(function (item, index) {
    item.textContent = time[index]

    if(item.textContent < 10){
      item.textContent = `0${time[index]}`
    }
  })
  if(t < 0){
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class='expired'>sorry, this giveaway has expired</h4>`
  }
}

let countdown = setInterval(remainingTime, 1000)

// remainingTime()
