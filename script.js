

setInterval(() => {
   let day = document.querySelector('#day');
let month = document.querySelector('#month');
let year = document.querySelector('#year');
let am_pm = document.querySelector('#am_pm');
let clock = document.querySelector('#clock');

let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

if (minutes <= 9) {
  minutes = `0${minutes}`;
}

if (seconds <= 9) {
  seconds = `0${seconds}`;
}

let cDate = date.getDate();
let cMonth = date.getMonth() + 1;
let cYear = date.getFullYear();

let cDay = date.getDay();

let daysName = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
];

if (hours < 12) {
  am_pm.innerHTML = 'AM';
} else {
  am_pm.innerHTML = 'PM';
}

clock.innerHTML = `${hours}:${minutes}:${seconds}`;

day.innerHTML = `${daysName[cDay]} | ${cDate}-`;

month.innerHTML = cMonth;

year.innerHTML = `-${cYear}`;

   
}, 1000);
