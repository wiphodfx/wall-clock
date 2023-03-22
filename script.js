//Time running function

(function () {
  var time = new Date(), //gets the date from system
    seconds = (time.getSeconds() / 60) * 360,
    minute = (time.getMinutes() / 60) * 360 + (time.getSeconds() / 60) * 6,
    hour = (time.getHours() / 12) * 360 + (time.getMinutes() / 60) * 30,
    // --------------Animation Setup----------------
    animation = [
      "@keyframes sec-hands{from{transform: rotate(" +
        seconds +
        "deg);}to{transform: rotate(" +
        (seconds + 360) +
        "deg);}}",
      "@keyframes min-hands{from{transform: rotate(" +
        minute +
        "deg);}to{transform: rotate(" +
        (minute + 360) +
        "deg);}}",
      "@keyframes hr-hands{from{transform: rotate(" +
        hour +
        "deg);}to{transform: rotate(" +
        (hour + 360) +
        "deg);}}",
    ].join("");

  document.querySelector("#clock-rotate").innerHTML = animation;
})();
