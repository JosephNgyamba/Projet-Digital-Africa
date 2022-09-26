let deateline = new Date("oct 23, 2022 18:45:20").getTime();

let x = setInterval(function () {
  let now = new Date().getTime();
  let today = deateline - now;
  let days = Math.floor(today / (1000 * 60 * 60 * 24));
  let hours = Math.floor((today % (1000 * 60 * 24)) / (1000 * 60 * 60));
  let minute = Math.floor((today % (1000 * 60 * 60)) / (1000 * 60));
  let second = Math.floor((today % (1000 * 60)) / 1000);
  document.querySelector(".jours").innerHTML = days;
  document.querySelector(".heur").innerHTML = hours;
  document.querySelector(".minute").innerHTML = minute;
  document.querySelector(".seconde").innerHTML = second;
  if (today < 0) {
    clearInterval(x);
    document.querySelector(".compteur").innerHTML = "Le temps à expiré";
  }
}, 1000);
