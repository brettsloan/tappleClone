let p1score = 0; //PLAYER 1 SCORE
let p2score = 0; //PLAYER 2 SCORE
var timeInterval = document.getElementById('timeIntervals').value; //TIME OPTION IN SECONDS

//LIST OF CATEGORIES
const categories = [
  "countries",
  "games and sports",
  "cities",
  "animals",
  "food and drink",
  "verbs",
  "adjectives",
  "jobs",
  "famous people",
  "things you find in the bathroom/kitchen",
  "things you take on holiday",
  "fruit and vegetables",
  "things that fly",
  "things that are yellow",
  "items you can buy in IKEA",
  "things you find in a refrigerator",
  "things that are cold",
  "things you find in an office",
  "things that are round",
  "things which are scary",
  "things to do with Christmas",
  "things with wheels",
  "things in the garden",
  "things you can turn off, etc.",
  "things with wheels",
  "fruits and vegetables",
  "games that use a ball",
  "musical instruments",
  "types of sweets / candy",
  "types of weather",
  "hobbies",
  "pizza toppings",
  "things people are afraid of",
  "movies / movie characters",
  "tv shows",
  "drinks",
  "singers / bands",
]


const onClick = (event) => {
  var elId = event.target.id;
}
window.addEventListener('click', onClick);

//OPEN AND CLOSE THE OPTION MENU
function showOptions() {
  document.getElementById('options').classList.toggle('hidden');
}

//GET THE INPUTTED VALUES FROM THE OPTIONS AND APPLY THEM
function changeOptions() {
  var x = document.getElementById('player1Option').value; //PLAYER 1 NAME
  var y = document.getElementById('player2Option').value; //PLAYER 2 NAME
  timeInterval = document.getElementById('timeIntervals').value; //RE INPUTTING TIME OPTION IN SECONDS IN CASE OF CHANGES THROUGHOUT THE GAME

  //CHANGE PLAYER NAMES TO NAMES INPUTTED IN OPTIONS
  document.getElementById('player1').innerHTML = x;
  document.getElementById('player2').innerHTML = y;
  document.getElementById('player1PlusButtonName').innerHTML = x + ' ';
  document.getElementById('player2PlusButtonName').innerHTML = y + ' ';
  document.getElementById('player1MinusButtonName').innerHTML = x + ' ';
  document.getElementById('player2MinusButtonName').innerHTML = y + ' ';

  //FORMATTING TIME FROM SECONDS TO MINUTES THEN INPUTTING IT INTO THE HTML
  if (timeInterval >= 60) {
    var timeIntervalInMinutes = '0' + timeInterval/60 + ':00';
  } else {
    timeIntervalInMinutes = '00:' + timeInterval;
  }
  document.getElementById("resetTimer").innerHTML = '<h1 id="time">'+timeIntervalInMinutes+'</h1>';
}

//RESET THE SCORE COUNTERS
function resetScores() {
  document.getElementById('pointsP1').innerHTML = "0";
  document.getElementById('pointsP2').innerHTML = "0";
  p1score = 0;
  p2score = 0;
}

//CHANGES THE LETTER AND RESETS THE TIMER ONCE CLICKED ON
function letterChange() {
  document.getElementById(event.target.id).style.color = "red";
  stopTimer();
  startTimer();
}

//RESETS ALL THE LETTERS MANUALLY - SEEMS REDUNDANT AND I'M SURE THERE'S A FASTER WAY BUT I DON'T CARE
function reset() {
  document.getElementById('A').style.color = "black";
  document.getElementById('B').style.color = "black";
  document.getElementById('C').style.color = "black";
  document.getElementById('D').style.color = "black";
  document.getElementById('E').style.color = "black";
  document.getElementById('F').style.color = "black";
  document.getElementById('G').style.color = "black";
  document.getElementById('H').style.color = "black";
  document.getElementById('I').style.color = "black";
  document.getElementById('J').style.color = "black";
  document.getElementById('K').style.color = "black";
  document.getElementById('L').style.color = "black";
  document.getElementById('M').style.color = "black";
  document.getElementById('N').style.color = "black";
  document.getElementById('O').style.color = "black";
  document.getElementById('P').style.color = "black";
  document.getElementById('Q').style.color = "black";
  document.getElementById('R').style.color = "black";
  document.getElementById('S').style.color = "black";
  document.getElementById('T').style.color = "black";
  document.getElementById('U').style.color = "black";
  document.getElementById('V').style.color = "black";
  document.getElementById('W').style.color = "black";
  document.getElementById('X').style.color = "black";
  document.getElementById('Y').style.color = "black";
  document.getElementById('Z').style.color = "black";
  document.getElementById("resetTimer").innerHTML = " ";
  if (timeInterval >= 60) {
    var timeIntervalInMinutes = '0' + timeInterval/60 + ':00';
  } else {
    timeIntervalInMinutes = '00:' + timeInterval;
  }
  document.getElementById("resetTimer").innerHTML = '<h1 id="time">'+timeIntervalInMinutes+'</h1>';
}


//GIVES OR TAKES AWAY POINTS FROM PLAYERS
function player1PlusPoint() {
  p1score += 1;
  document.getElementById('pointsP1').innerHTML = p1score;
}
function player2PlusPoint() {
  p2score += 1;
  document.getElementById('pointsP2').innerHTML = p2score;
}
function player1MinusPoint() {
  p1score -= 1;
  document.getElementById('pointsP1').innerHTML = p1score;
}
function player2MinusPoint() {
  p2score -= 1;
  document.getElementById('pointsP2').innerHTML = p2score;
}

//STARTS THE TIMER BY EITHER CLICKING 'START' BUTTON OR CLICKING ON A LETTER
function startTimer() {
  var display = document.getElementById('time'),
  timer = new CountDownTimer(timeInterval);

  timer.onTick(format).start();
  function format(minutes, seconds) {
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.textContent = minutes + ':' + seconds;
  }
};

//STOPS THE TIMER BY CLICKING 'STOP' OR 'RESET LETTERS' BUTTONS
function stopTimer() {
  if (timeInterval >= 60) {
    var timeIntervalInMinutes = '0' + timeInterval/60 + ':00';
  } else {
    timeIntervalInMinutes = '00:' + timeInterval;
  }
  document.getElementById("resetTimer").innerHTML = " ";
  document.getElementById("resetTimer").innerHTML = '<h1 id="time">'+timeIntervalInMinutes+'</h1>';
}

//GENERATES A RANDOM CATEGORY FROM THE ABOVE ARRAY
function pickCategory() {
  let randomCategory = Math.floor(Math.random() * categories.length);
  document.getElementById('categoryReplacement').innerHTML = categories[randomCategory];
  console.log(randomCategory, categories[randomCategory]);
}



//DON'T REALLY KNOW HOW THIS STUFF WORKS AS I JUST COPIED IT OFF THE INTERNET
function CountDownTimer(duration, granularity) {
  this.duration = duration;
  this.granularity = granularity || 1000;
  this.tickFtns = [];
  this.running = false;
}

CountDownTimer.prototype.start = function() {
  if (this.running) {
    return;
  }
  this.running = true;
  var start = Date.now(),
  that = this,
  diff, obj;

  (function timer() {
    diff = that.duration - (((Date.now() - start) / 1000) | 0);

    if (diff > 0) {
      setTimeout(timer, that.granularity);
    } else {
        diff = 0;
        that.running = false;
      }

    obj = CountDownTimer.parse(diff);
    that.tickFtns.forEach(function(ftn) {
      ftn.call(this, obj.minutes, obj.seconds);
    }, that);
  }());
};

CountDownTimer.prototype.onTick = function(ftn) {
  if (typeof ftn === 'function') {
    this.tickFtns.push(ftn);
  }
  return this;
};

CountDownTimer.prototype.expired = function() {
  return !this.running;
};

CountDownTimer.parse = function(seconds) {
  return {
    'minutes': (seconds / 60) | 0,
    'seconds': (seconds % 60) | 0
  };
};
