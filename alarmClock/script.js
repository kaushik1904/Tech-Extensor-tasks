let curTime = document.querySelector(".curTime");

let h, m, hh, mm, ss;

function setTime() {
  const d = new Date();
  h = parseInt(d.getHours());
  m = parseInt(d.getMinutes());
  s = parseInt(d.getSeconds());
  curTime.innerHTML = `Current Time => ${h} : ${m} : ${s}`;
}

setInterval(setTime, 500);

function checkAlarm() {
  console.log(hh, mm, ss);
  if (h == hh && mm == m && ss == s) {
    document.body.style.backgroundColor = "green";
    clearInterval(checkAlarm);
    return;
  }
}

const setAlarm = () => {
  const alarm = document.querySelector("#alarm").value;
  console.log(alarm);
  hh = parseInt(alarm.substr(0, 2));
  mm = parseInt(alarm.substr(3, 4));
  ss = parseInt(alarm.substr(6, 7));
  console.log(hh, mm, ss);

  setInterval(checkAlarm, 500);
};
