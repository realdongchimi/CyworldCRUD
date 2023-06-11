var audio;
var progress;
  
    document.querySelector(".btn1").addEventListener("click", function () {
      if (audio && !audio.paused) {
        audio.pause();
        return;
      }
  
      audio = new Audio("Wave To Earth - Seasons.mp3");
      audio.loop = true;
      audio.volume = 0.5;
      audio.play();
  
      progress = setInterval(updateProgress2, 100);
    });
  

    function updateProgress() {
      if (audio && audio.duration) {
        const progressBar = document.querySelector(".progress-bar");
        
    function updateProgress2() {
      if (audio && audio.duration) {
        const progressBar = document.querySelector(".progress-bar2");

        progressBar.value = (audio.currentTime / audio.duration) * 100;
      }
    }



    document.querySelector(".btn2").addEventListener("click", function () {
      if (audio && !audio.paused) {
        audio.pause();
        return;
      }

      audio = new Audio("잔나비 - 환생 (윤종신).mp3");
      audio.loop = true;
      audio.volume = 0.5;
      audio.play();
  
      progress = setInterval(updateProgress2, 100);
    });
  
    function updateProgress2() {
      if (audio && audio.duration) {
        const progressBar = document.querySelector(".progress-bar2");
        progressBar.value = (audio.currentTime / audio.duration) * 100;
      }
    }

    function search() {
      var word = document.getElementById("searchword").value;
      var google = ["구글", "google", "Google", "GOOGLE"];
      var naver = ["네이버", "naver", "Naver", "NAVER"];
      var daum = ["다음", "Daum", "daum", "DAUM"];
    
      if (google.includes(word)) {
        window.location.href = "http://google.com";
      } else if (naver.includes(word)) {
        window.location.href = "http://naver.com";
      } else if (daum.includes(word)) {
        window.location.href = "http://daum.net";
      }
        alert("잠시만 기다려주세요..");
    }