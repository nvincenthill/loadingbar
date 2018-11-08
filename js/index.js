// 1. Implement a loading bar that animates from 0 to 100% in 3 seconds
// 2. Start loading bar animation upon a button click
// 3. Queue multiple loading bars if the button is clicked more than once. Loading bar N starts animating with loading bar N-1 is done animating.

const LoadingBar = function(duration, width) {
  this.counter = 0;
  this.interval;
  this.isRunning = false;
  this.queue = 0;
  this.duration = duration;
  this.width = width;
}

LoadingBar.prototype.start = function() {
  if (!this.isRunning) {
    this.isRunning = true;
    this.interval = setInterval(() => {
      if (this.counter < this.width) {
          this.counter +=  this.duration / this.width;
          this.updateDisplay();
      } else {
        this.reset();
      }
    }, 1);
  } else {
    this.queue++;
  }
}

LoadingBar.prototype.updateDisplay = function() {
    bar.style.width = this.counter + "px";
}

LoadingBar.prototype.reset = function() {
    this.counter = 0;
    this.isRunning = false;
    clearInterval(this.interval);
    bar.style.width = this.counter + "vw";
    if (this.queue > 0) {
      this.queue--;
      this.start();
    }
}

const bar = document.querySelector('.bar');
const start = document.querySelector('.start');
start.addEventListener('click', () => {
  handleClick();
});


const duration = 3000;
const width = 1000;
const loadingBar = new LoadingBar(duration, width);

const handleClick = function() {
  loadingBar.start();
}