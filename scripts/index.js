function countdown(date, elementID, prefix, suffix) {
  var temp = date - new Date();
  temp /= 1000;
  var seconds = Math.floor(temp % 60);
  temp /= 60;
  var minutes = Math.floor(temp % 60);
  temp /= 60;
  var hours = Math.floor(temp % 24);
  temp /= 24;
  var days = Math.floor(temp);
  var timeString = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';
  document.getElementById(elementID).innerHTML = prefix + timeString + suffix;
}

var kickoff = new Date(2015, 8, 12, 12);
setInterval(function() { countdown(kickoff, 'news-countdown', '<h1>2015 FIRST Tech Challenge Kickoff Countdown:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;', '</h1>') }, 1000);
