let curTime = document.querySelector(".curTime");

let h, m, s, hh, mm, ss;

const setTime = () => {
  const d = new Date();
  h = parseInt(d.getHours());
  m = parseInt(d.getMinutes());
  s = parseInt(d.getSeconds());
  curTime.innerHTML = `${h} : ${m} : ${s}`;
};
setInterval(setTime, 1000);

const checkAlarm = () => {
  if (h == hh && mm == m && ss == s) {
    let stop = document.querySelector(".btn_set");
    stop.style.display = "none";
    document.querySelector(".btn_reset").style.display = "block";
  }
};

const setAlarm = () => {
  hh = parseInt(document.querySelector(".hh").value);
  mm = parseInt(document.querySelector(".mm").value);
  ss = parseInt(document.querySelector(".ss").value);

  alert(`Alarm set on ${hh} : ${mm} : ${ss}.`);

  setInterval(checkAlarm, 1000);
};

const reset = () => {
  document.querySelector(".hh").value = "";
  document.querySelector(".mm").value = "";
  document.querySelector(".ss").value = "";

  document.querySelector(".btn_reset").style.display = "none";
  document.querySelector(".btn_set").style.display = "block";
};
