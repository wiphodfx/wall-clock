Important Task: Follow the below instructions pro-actively

Build a Wall Clock with JavaScript Interactive ( Design shouldn’t look like anything already done in this project)
Save your code to aptLearn playground and get a shareable Link
After getting your code to work, push it on GitHub
Lastly, share your project on your social media, most importantly, (Twitter) using the caption below and screenshot/video:
I’ve just completed my frontend web development course in HTML, CSS and JavaScript by @kynsofficial on @aptlearn. Here’s my project

<!--
setInterval(setClock, 1000);
const hourHand = document.querySelector("[data-hour-hand]");
const minHand = document.querySelector("[data-min-hand]");
const secHand = document.querySelector("[data-sec-hand]");

function setClock() {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = ((secondsRatio + currentDate.getMinutes()) / 360) * 6;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
  setRotation(secHand, secondsRatio);
  setRotation(minHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}
setClock(); -->
