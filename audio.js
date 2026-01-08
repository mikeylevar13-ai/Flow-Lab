let beat = new Audio("../public/beats/beat1.mp3");

function playBeat() {
  beat.loop = true;
  beat.play();
}
