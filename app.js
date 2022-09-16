let clicks = 0;
let cursorCost = 24;
var cursors = 0; 

function addtoscore(amount) {
    clicks = clicks + amount;
    document.getElementById("score").innerHTML = clicks;
  }

  function buyCursor() {
if (clicks >= cursorCost) {
    clicks = clicks - cursorCost;
    cursors = cursors + 1;
    cursorCost = Math.round(cursorCost * 1.15);
}
  }

    document.getElementById("score").innerHTML = clicks;
    document.getElementById("cursorCost").innerHTML = clicks;
    document.getElementById("cursors").innerHTML = clicks;