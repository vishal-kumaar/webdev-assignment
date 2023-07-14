const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

function updateTime() {
  const date = new Date();
  const currentHour = date.getHours();
  const currentMinute = date.getMinutes();
  const currentSecond = date.getSeconds();

  hour.innerText = currentHour;
  minute.innerText = currentMinute;
  second.innerText = currentSecond;
}

setInterval(updateTime, 1000);
