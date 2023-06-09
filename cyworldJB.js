var audio;
var progress;
  
    document.querySelector(".btn1").addEventListener("click", function () {
      if (audio && !audio.paused) {
        audio.pause();
        return;
      }
  
      audio = new Audio("Wave To Earth - Seasons.mp3");
      audio.loop = false;
      audio.volume = 0.5;
      audio.play();
  
      progress = setInterval(updateProgress, 100);
    });
  
    document.querySelector(".btn2").addEventListener("click", function () {
      if (audio && !audio.paused) {
        audio.pause();
        return;
      }
  
      audio = new Audio("잔나비 - 환생 (윤종신).mp3");
      audio.loop = true;
      audio.volume = 0.5;
      audio.play();
  
      progress = setInterval(updateProgress, 100);
    });
  
    function updateProgress() {
      if (audio && audio.duration) {
        const progressBar = document.querySelector(".progress-bar");
        progressBar.value = (audio.currentTime / audio.duration) * 100;
      }
    }